import type { Metadata } from 'next'

export { default } from '../how-it-works/page'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const cs = locale === 'cs'
  return {
    title: cs ? 'O nás — Sales Robots s.r.o.' : 'About — Sales Robots s.r.o.',
    description: cs
      ? 'Sales Robots s.r.o. staví automatizované obchodní systémy. SalesAgent.cz je naše outsourcovaná AI SDR služba pro B2B firmy v ČR, SK a zahraničí.'
      : 'Sales Robots s.r.o. builds automated sales systems. SalesAgent.cz is our outsourced AI SDR service for B2B companies in CZ, SK and internationally.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/about`,
      languages: {
        cs: 'https://salesagent.cz/cs/about',
        en: 'https://salesagent.cz/en/about',
        'x-default': 'https://salesagent.cz/cs/about',
      },
    },
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/about`,
      siteName: 'SalesAgent.cz',
      title: cs ? 'O nás — SalesAgent.cz' : 'About — SalesAgent.cz',
      description: cs
        ? 'Česká firma, která staví AI obchodní systémy pro B2B.'
        : 'Czech company building AI sales systems for B2B.',
    },
    twitter: {
      card: 'summary',
      title: cs ? 'O nás — SalesAgent.cz' : 'About — SalesAgent.cz',
      description: cs ? 'Česká firma, která staví AI obchodní systémy pro B2B.' : 'Czech company building AI sales systems for B2B.',
    },
  }
}
