import { NextResponse } from 'next/server'
import Negotiator from 'negotiator'
import { match } from '@formatjs/intl-localematcher'
import { i18n } from './lib/i18n-config'

const locales = i18n.locales
const defaultLocale = i18n.defaultLocale

function getLocale(request) {
  const headers = {}
  request.headers.forEach((value, key) => {
    headers[key] = value
  })

  const languages = new Negotiator({ headers }).languages()
  return match(languages, locales, defaultLocale)
}

export function middleware(request) {
  const { pathname } = new URL(request.url)

  if (pathname.startsWith('/_next') || pathname.includes('.')) return

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  const url = new URL(`/${locale}${pathname}`, request.url)
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next|favicon.ico).*)'],
}
