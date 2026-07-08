import '../globals.css'
import { getTranslations } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
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
