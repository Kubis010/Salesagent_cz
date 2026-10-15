import type { Metadata } from 'next'
import Script from 'next/script'
import MeasurementScripts from '@/components/MeasurementScripts'
import '../globals.css'
import { getTranslations } from '@/lib/i18n'
import BlogChrome from '@/components/layout/BlogChrome'
import { posts } from '@/lib/blog-posts'

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
  const csT = getTranslations('cs')
  const enT = getTranslations('en')
  const enPaths = posts.filter((p) => p.lang === 'EN' && p.href.startsWith('/blog/')).map((p) => p.href)
  const currentYear = new Date().getFullYear()
  return (
    <html lang="cs">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <BlogChrome part="header" csT={csT} enT={enT} enPaths={enPaths} initialYear={currentYear} />
        <main>{children}</main>
        <BlogChrome part="footer" csT={csT} enT={enT} enPaths={enPaths} initialYear={currentYear} />
        <MeasurementScripts />
        <Script
          src="https://towhdopfkjwvbfobvoli.supabase.co/functions/v1/contextual-loader?site=90f638ef-eab0-434d-85aa-7dfe88f6b44a"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
