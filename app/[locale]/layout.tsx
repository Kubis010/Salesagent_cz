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
        ? 'SalesAgent.cz — AI prodejní systém, který vlastníte'
        : 'SalesAgent.cz — An AI sales system you actually own',
      template: '%s | SalesAgent.cz',
    },
    description: isCz
      ? 'Postavíme vám kompletní AI prodejní systém na míru — scraper, obohacení dat, LinkedIn a e-mail outreach, napojení na CRM — a předáme klíče. Systém je váš. Od 9 900 Kč jednorázově, za 1–3 týdny.'
      : 'We build you a complete AI sales system — scraper, enrichment, LinkedIn & email outreach, CRM integration — and hand over the keys. You own it. From €400 one-off, delivered in 1–3 weeks.',
    keywords: isCz
      ? ['AI prodejní systém', 'automatizace B2B prodeje', 'outbound automatizace', 'AI lead generation', 'vlastní prodejní systém', 'cold email automatizace', 'LinkedIn automatizace', 'AI obchod na míru', 'B2B prospecting']
      : ['AI sales system', 'B2B sales automation', 'outbound automation', 'AI lead generation', 'owned sales pipeline', 'cold email automation', 'LinkedIn automation', 'custom AI sales'],
    openGraph: {
      type: 'website',
      locale: isCz ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}`,
      siteName: 'SalesAgent.cz',
      title: isCz
        ? 'SalesAgent.cz — AI prodejní systém, který vlastníte'
        : 'SalesAgent.cz — An AI sales system you actually own',
      description: isCz
        ? 'Kompletní AI outbound systém postavený na míru a předaný do vašeho vlastnictví. Od 9 900 Kč.'
        : 'A complete AI outbound system built for you and handed over to own. From €400 one-off.',
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
        'x-default': 'https://salesagent.cz/en',
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: isCz
        ? 'SalesAgent.cz — AI prodejní systém, který vlastníte'
        : 'SalesAgent.cz — An AI sales system you actually own',
      description: isCz
        ? 'Kompletní AI outbound systém postavený na míru a předaný do vašeho vlastnictví. Od 9 900 Kč.'
        : 'A complete AI outbound system built for you and handed over to own. From €400 one-off.',
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
  name: 'AI prodejní systém na míru — postavíme a předáme do vlastnictví',
  alternateName: 'Custom AI sales system — built and handed over',
  provider: { '@type': 'Organization', name: 'Sales Robots s.r.o.' },
  serviceType: 'AI prodejní systém — outbound automatizace pro B2B',
  description:
    'Postavíme kompletní AI prodejní systém: scraper firem, obohacení dat, personalizovaný e-mail a LinkedIn outreach, demo Prezentérem, napojení na CRM. Za 1–3 týdny hotovo, klíče předáme vám — systém vlastníte.',
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
        <Script
          src="//cdn.cookie-script.com/s/6195a622ebb5274d4b804e418a7e0e6e.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
