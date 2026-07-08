import type { Metadata } from 'next'
import '../globals.css'
import { getTranslations } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  robots: { index: true, follow: true },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const t = getTranslations('en')
  return (
    <html lang="en">
      <body>
        <Header locale="en" t={t} />
        <main>{children}</main>
        <Footer locale="en" t={t} />
      </body>
    </html>
  )
}
