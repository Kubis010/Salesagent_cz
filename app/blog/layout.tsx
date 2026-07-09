import type { Metadata } from 'next'
import Script from 'next/script'
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TL9MFZ92P0"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-TL9MFZ92P0');`}
        </Script>
        <Script
          src="https://towhdopfkjwvbfobvoli.supabase.co/functions/v1/contextual-loader?site=90f638ef-eab0-434d-85aa-7dfe88f6b44a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
