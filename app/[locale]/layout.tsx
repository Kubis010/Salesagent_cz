import type { Metadata } from 'next'
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
        ? 'SalesAgent.cz — AI SDR jako outsourcovaná služba'
        : 'SalesAgent.cz — AI SDR as an outsourced service',
      template: '%s | SalesAgent.cz',
    },
    description: isCz
      ? 'AI Sales Development Rep, který sám vyhledá firmy, prostuduje jejich web a odešle personalizovaný email. Outsourcovaný outbound systém pro B2B firmy.'
      : 'AI Sales Development Rep that finds companies, reads their website and sends personalised emails. Outsourced outbound system for B2B companies.',
    keywords: isCz
      ? ['AI SDR', 'AI obchodník', 'automatizovaný outreach', 'generování leadů', 'cold email', 'LinkedIn automatizace']
      : ['AI SDR', 'AI sales', 'automated outreach', 'lead generation', 'cold email', 'LinkedIn automation'],
    openGraph: {
      type: 'website',
      locale: isCz ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}`,
      siteName: 'SalesAgent.cz',
      title: isCz
        ? 'SalesAgent.cz — AI SDR jako outsourcovaná služba'
        : 'SalesAgent.cz — AI SDR as an outsourced service',
      description: isCz
        ? 'AI Sales Development Rep pro B2B firmy. Outbound na autopilotu.'
        : 'AI Sales Development Rep for B2B companies. Outbound on autopilot.',
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
        ? 'SalesAgent.cz — AI SDR jako outsourcovaná služba'
        : 'SalesAgent.cz — AI SDR as an outsourced service',
      description: isCz
        ? 'AI Sales Development Rep pro B2B firmy. Outbound na autopilotu.'
        : 'AI Sales Development Rep for B2B companies. Outbound on autopilot.',
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
  name: 'AI SDR — Outsourced AI Sales Development',
  provider: { '@type': 'Organization', name: 'Sales Robots s.r.o.' },
  serviceType: 'AI Sales Outreach',
  description:
    'Fully managed AI Sales Development Representative service. The system finds target companies, analyses their websites, generates personalised cold emails, and sends LinkedIn outreach — all automatically.',
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
      </body>
    </html>
  )
}
