import Script from 'next/script'
import MeasurementScripts from '@/components/MeasurementScripts'
import '../globals.css'
import { getTranslations } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  const t = getTranslations('en')
  const currentYear = new Date().getFullYear()
  return (
    <html lang="en">
      <body>
        <Header locale="en" t={t} />
        <main>{children}</main>
        <Footer locale="en" t={t} initialYear={currentYear} />
        <MeasurementScripts />
        <Script
          src="https://towhdopfkjwvbfobvoli.supabase.co/functions/v1/contextual-loader?site=90f638ef-eab0-434d-85aa-7dfe88f6b44a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
