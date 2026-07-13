import type { Metadata } from 'next'
import Script from 'next/script'
import '../globals.css'
import { locales, getTranslations, type Locale, type Translations } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isCz = locale === 'cs'

  return {
    title: {
      default: isCz
        ? 'SalesAgent.cz — AI obchodní zástupce | Automatizace B2B prodeje'
        : 'SalesAgent.cz — AI Sales Agent | B2B Sales Automation',
      template: '%s | SalesAgent.cz',
    },
    description: isCz
      ? 'AI obchodní zástupce, který automaticky vyhledá B2B kontakty, prostuduje web každé firmy a odešle personalizovaný cold email i LinkedIn zprávu. Nástroj na automatizaci prodeje pro B2B firmy — bez náboru, bez databází.'
      : 'AI sales agent that automatically finds B2B contacts, reads each company website and sends personalised cold emails and LinkedIn messages. Sales automation tool for B2B companies — no hiring, no databases.',
    keywords: isCz
      ? ['AI obchodní zástupce', 'automatizace B2B obchodu', 'automatický cold mailing', 'AI generování leadů', 'automatické vyhledávání B2B kontaktů', 'personalizovaný cold email', 'nástroje na automatizaci prodeje', 'AI prodejní asistent', 'cold email automatizace', 'LinkedIn automatizace']
      : ['AI sales agent', 'B2B sales automation', 'automated cold email', 'AI lead generation', 'automated B2B prospecting', 'personalised cold email', 'sales automation tools', 'LinkedIn automation'],
    openGraph: {
      type: 'website',
      locale: isCz ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}`,
      siteName: 'SalesAgent.cz',
      title: isCz
        ? 'SalesAgent.cz — AI obchodní zástupce | Automatizace B2B prodeje'
        : 'SalesAgent.cz — AI Sales Agent | B2B Sales Automation',
      description: isCz
        ? 'AI obchodní zástupce pro B2B firmy. Automatický cold mailing a vyhledávání kontaktů.'
        : 'AI sales agent for B2B companies. Automated cold email and contact prospecting.',
      images: [
        {
          url: 'https://salesagent.cz/og-image.jpg',
          width: 1376,
          height: 768,
          alt: isCz ? 'SalesAgent.cz — AI obchodní zástupce' : 'SalesAgent.cz — AI Sales Agent',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    alternates: {
      canonical: `https://salesagent.cz/${locale}`,
      languages: {
        'cs': 'https://salesagent.cz/cs',
        'en': 'https://salesagent.cz/en',
        'x-default': 'https://salesagent.cz/cs',
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: isCz
        ? 'SalesAgent.cz — AI obchodní zástupce | Automatizace B2B prodeje'
        : 'SalesAgent.cz — AI Sales Agent | B2B Sales Automation',
      description: isCz
        ? 'AI obchodní zástupce pro B2B firmy. Automatický cold mailing a vyhledávání kontaktů.'
        : 'AI sales agent for B2B companies. Automated cold email and contact prospecting.',
      images: ['https://salesagent.cz/og-image.jpg'],
    },
    other: {
      'llms-txt': 'https://salesagent.cz/llms.txt',
    },
  }
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Sales Robots s.r.o.',
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

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI obchodní zástupce — automatizace B2B prodeje',
  alternateName: 'AI Sales Agent — B2B Sales Automation',
  provider: { '@type': 'Organization', name: 'Sales Robots s.r.o.' },
  serviceType: 'Automatizace B2B obchodu',
  description:
    'AI obchodní zástupce jako outsourcovaná služba. Systém automaticky vyhledá B2B kontakty, prostuduje web každé firmy, napíše personalizovaný cold email a odešle LinkedIn zprávu. Nástroj na automatizaci prodeje bez náboru obchodníků.',
  areaServed: ['CZ', 'SK', 'Internationally'],
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://salesagent.cz',
  },
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t: Translations = getTranslations(locale as Locale)

  return (
    <html lang={locale}>
      <body>
        {/* JSON-LD structured data — Next.js App Router hoists these to <head> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <Header locale={locale as Locale} t={t} />
        <main>{children}</main>
        <Footer locale={locale as Locale} t={t} />
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
