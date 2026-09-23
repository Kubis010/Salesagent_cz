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
      ? 'Nabízíme vlastní AI prodejní systém od 9 900 Kč jednorázově nebo řízený outbound od 5 900 Kč měsíčně. Propojíme vyhledávání firem, e-mail, LinkedIn, Prezentér a CRM.'
      : 'Choose an owned AI sales system from €400 one-off or managed outbound from €239 per month. We connect company sourcing, email, LinkedIn, live demo and CRM.',
    keywords: isCz
      ? ['AI prodejní systém', 'automatizace B2B prodeje', 'řízený outbound', 'AI lead generation', 'vlastní prodejní systém', 'cold email automatizace', 'LinkedIn automatizace', 'AI obchod na míru', 'B2B prospecting']
      : ['AI sales system', 'B2B sales automation', 'managed outbound', 'AI lead generation', 'owned sales system', 'cold email automation', 'LinkedIn automation', 'custom AI sales'],
    openGraph: {
      type: 'website',
      locale: isCz ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}`,
      siteName: 'SalesAgent.cz',
      title: isCz
        ? 'SalesAgent.cz — AI prodejní systém, který vlastníte'
        : 'SalesAgent.cz — An AI sales system you actually own',
      description: isCz
        ? 'Vlastní AI outbound systém od 9 900 Kč jednorázově nebo řízený outbound od 5 900 Kč měsíčně.'
        : 'An owned AI outbound system from €400 one-off or managed outbound from €239 per month.',
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
        ? 'Vlastní AI outbound systém od 9 900 Kč jednorázově nebo řízený outbound od 5 900 Kč měsíčně.'
        : 'An owned AI outbound system from €400 one-off or managed outbound from €239 per month.',
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

function getServiceSchema(isCzech: boolean) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: isCzech ? 'AI prodejní systém a řízený outbound' : 'Owned AI sales system and managed outbound',
    alternateName: isCzech ? 'Owned system or managed B2B outbound' : 'Owned system or managed B2B outbound service',
    provider: { '@type': 'Organization', name: 'Sales Robots s.r.o.' },
    serviceType: isCzech ? 'Automatizace B2B obchodu' : 'B2B sales automation and managed outbound service',
    description: isCzech
      ? 'Nabízíme dvě rovnocenné varianty: jednorázově postavený AI outbound systém, který převezmete, nebo měsíční řízený outbound, který provozujeme a optimalizujeme za vás.'
      : 'We offer two equally available models: an AI outbound system built and handed over for a one-off fee, or a managed monthly outbound service that we operate and optimise for you.',
    inLanguage: isCzech ? 'cs' : 'en',
    offers: [
      {
        '@type': 'Offer',
        name: isCzech ? 'Vlastní AI prodejní systém' : 'Owned AI sales system',
        price: isCzech ? '9900' : '400',
        priceCurrency: isCzech ? 'CZK' : 'EUR',
        description: isCzech ? 'Jednorázové postavení a předání systému.' : 'One-off system build and handover.',
        url: `https://salesagent.cz/${isCzech ? 'cs' : 'en'}/pricing`,
      },
      {
        '@type': 'Offer',
        name: isCzech ? 'Řízený outbound' : 'Managed outbound service',
        price: isCzech ? '5900' : '239',
        priceCurrency: isCzech ? 'CZK' : 'EUR',
        description: isCzech ? 'Měsíční provoz a optimalizace outboundu.' : 'Monthly outbound operation and optimisation.',
        url: `https://salesagent.cz/${isCzech ? 'cs' : 'en'}/pricing`,
      },
    ],
    areaServed: ['CZ', 'SK', 'Internationally'],
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://salesagent.cz',
    },
  }
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(locale === 'cs')) }}
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
