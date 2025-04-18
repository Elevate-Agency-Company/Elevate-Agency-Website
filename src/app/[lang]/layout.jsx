import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { i18n } from '../../lib/i18n-config'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }))
}


export default function RootLayout({ children, params }) {
  const lang = params.lang
  return (
    <html lang={lang} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
