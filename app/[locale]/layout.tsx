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
        ? 'SalesAgent.cz — Řízená automatizace obchodu'
        : 'SalesAgent.cz — Czech Market Entry & Outsourced Sales Representation',
      template: '%s | SalesAgent.cz',
    },
    description: isCz
      ? 'Najdeme, oslovíme a zahřejeme firmy za vás — e-mailem, na LinkedInu i reklamou. Vašemu obchodníkovi přistane připravená schůzka. Nasazení od 15 000 Kč, řízení od 9 900 Kč měsíčně bez DPH.'
      : 'Your external B2B sales team in CZ/SK. People-led outreach, supported by AI. Pricing by agreement, with a paid 2–3 month market test. No commission-only engagements.',
    keywords: isCz
      ? ['automatizace obchodu', 'řízený outbound', 'B2B lead generation', 'schůzky se zájemci', 'LinkedIn oslovování', 'AI prospecting', 'cold email automatizace', 'B2B prospecting']
      : ['czech market entry', 'external sales representation czech republic', 'outsourced sales czech republic', 'sales agent czech republic', 'b2b lead generation czech republic', 'czech and slovak market entry'],
    openGraph: {
      type: 'website',
      locale: isCz ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}`,
      siteName: 'SalesAgent.cz',
      title: isCz
        ? 'SalesAgent.cz — Řízená automatizace obchodu'
        : 'SalesAgent.cz — Czech Market Entry & Outsourced Sales Representation',
      description: isCz
        ? 'Řízená automatizace obchodu: nasazení od 15 000 Kč, řízení od 9 900 Kč měsíčně bez DPH. Vašemu obchodníkovi chodí schůzky se zájemci.'
        : 'Your external B2B sales team in CZ/SK. People-led outreach, supported by AI. Pricing by agreement, with a paid 2–3 month market test. No commission-only engagements.',
      images: [
        {
          url: 'https://salesagent.cz/og-image.jpg',
          width: 1376,
          height: 768,
          alt: isCz ? 'SalesAgent.cz — AI obchodní zástupce' : 'SalesAgent.cz — External B2B sales team in the Czech Republic',
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
        ? 'SalesAgent.cz — Řízená automatizace obchodu'
        : 'SalesAgent.cz — Czech Market Entry & Outsourced Sales Representation',
      description: isCz
        ? 'Řízená automatizace obchodu: nasazení od 15 000 Kč, řízení od 9 900 Kč měsíčně bez DPH. Vašemu obchodníkovi chodí schůzky se zájemci.'
        : 'Your external B2B sales team in CZ/SK. People-led outreach, supported by AI. Pricing by agreement, with a paid 2–3 month market test. No commission-only engagements.',
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
    name: isCzech ? 'Řízená automatizace B2B obchodu' : 'Czech market entry and outsourced sales representation',
    alternateName: isCzech ? 'External sales representation Czech Republic' : 'External sales representation Czech Republic',
    provider: { '@type': 'Organization', name: 'Sales Robots s.r.o.' },
    serviceType: isCzech ? 'Automatizace B2B obchodu' : 'Outsourced B2B sales representation and market entry',
    description: isCzech
      ? 'Nasadíme a řídíme automatizaci B2B oslovování: vyhledání firem, e-mail a LinkedIn outreach, zahřátí a předání schůzek se zájemci vašemu obchodníkovi. Součástí nabídky je i externí reaktivace neaktivních klientů telefonem, e-mailem a přes LinkedIn.'
      : 'We act as the external B2B sales team of foreign companies entering the Czech Republic and Slovakia. Our people manage prospecting, outreach and qualification, supported by AI tools, and book first meetings in the client\'s calendar. Pricing and scope are agreed individually. A paid 2–3 month market test can be arranged; we do not work on a commission-only basis. No local entity or hire is required; continuation is agreed after reviewing results. We also run outsourced reactivation of dormant clients by phone, email and LinkedIn.',
    inLanguage: isCzech ? 'cs' : 'en',
    offers: isCzech
      ? [
          {
            '@type': 'Offer',
            name: 'Nasazení na klíč',
            price: '15000',
            priceCurrency: 'CZK',
            priceSpecification: { '@type': 'PriceSpecification', price: '15000', priceCurrency: 'CZK', valueAddedTaxIncluded: false },
            description: 'Jednorázové nasazení: napojení účtů, ICP, sekvence, Prezentér.',
            url: 'https://salesagent.cz/cs/pricing',
          },
          {
            '@type': 'Offer',
            name: 'Řízená automatizace',
            price: '9900',
            priceCurrency: 'CZK',
            priceSpecification: { '@type': 'PriceSpecification', price: '9900', priceCurrency: 'CZK', valueAddedTaxIncluded: false },
            description: 'Měsíční řízení a ladění outboundu, schůzky se zájemci pro obchodníka.',
            url: 'https://salesagent.cz/cs/pricing',
          },
        ]
      : [
          {
            '@type': 'Offer',
            name: 'Market testing (half-time)',
            description: 'Paid 2–3 month market testing with fee, scope and capacity agreed individually. A people-led external sales team supported by AI tools. We do not work on a commission-only basis.',
            url: 'https://salesagent.cz/en/pricing',
          },
          {
            '@type': 'Offer',
            name: 'Ongoing representation',
            description: 'Ongoing sales representation with pricing, continuation and scope agreed after reviewing the test results. We do not work on a commission-only basis.',
            url: 'https://salesagent.cz/en/pricing',
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
  const currentYear = new Date().getFullYear()

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
        <Footer locale={locale as Locale} t={t} initialYear={currentYear} />
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
