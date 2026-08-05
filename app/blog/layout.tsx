import type { Metadata } from 'next'
import Script from 'next/script'
import '../globals.css'
import { getTranslations } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  robots: { index: true, follow: true },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sales Robots s.r.o.',
  alternateName: 'SalesAgent.cz',
  url: 'https://salesagent.cz',
  logo: 'https://salesagent.cz/logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@salesagent.cz',
    contactType: 'sales',
    availableLanguage: ['Czech', 'English'],
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Generála Šišky 2082/26',
    addressLocality: 'Praha – Modřany',
    addressCountry: 'CZ',
  },
  sameAs: ['https://salesrobots.cz'],
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const t = getTranslations('cs')
  return (
    <html lang="cs">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header locale="cs" t={t} />
        <main>{children}</main>
        <Footer locale="cs" t={t} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-442V6JSVVN"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-442V6JSVVN');`}
        </Script>
        <Script
          src="https://towhdopfkjwvbfobvoli.supabase.co/functions/v1/contextual-loader?site=90f638ef-eab0-434d-85aa-7dfe88f6b44a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
