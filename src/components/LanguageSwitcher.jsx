'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()

  const currentLang = pathname.split('/')[1]
  const isArabic = currentLang === 'ar'
  const targetLang = isArabic ? 'en' : 'ar'

  const switchTo = (lang) => {
    const segments = pathname.split('/')
    segments[1] = lang
    router.push(segments.join('/'))
  }

  return (
    <div className={`mt-5 ${isArabic ? 'text-left' : 'text-right'}`}>
      <button
        onClick={() => switchTo(targetLang)}
        className="px-4 py-2 rounded-md bg-blue-800 text-white text-sm hover:bg-blue-700 transition"
        dir={isArabic ? 'rtl' : 'ltr'}
      >
        {isArabic ? ' English' : ' العربية'}
      </button>
    </div>
  )
}
