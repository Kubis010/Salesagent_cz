import type { Metadata } from 'next'
import Link from 'next/link'
import { type Locale } from '@/lib/i18n'

export const metadata: Metadata = {
  title: 'How to Find a Czech Company in the Business Register (ARES) | SalesAgent.cz',
  description:
    'Step-by-step guide to searching the Czech business register (ARES / Obchodní rejstřík). Find company details, verify ICO numbers, get official extracts.',
  keywords: [
    'czech business register',
    'ARES',
    'obchodní rejstřík',
    'czech company search',
    'ICO number',
    'czech company register',
    'find czech company',
  ],
  openGraph: {
    title: 'How to Find a Czech Company in the Business Register (ARES)',
    description:
      'Step-by-step guide to searching ARES and the Czech Commercial Register.',
  },
}

export default async function CzechRegisterPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const base = `/${locale}`

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <article style={{ maxWidth: '740px', margin: '0 auto' }}>

        {/* Breadcrumb */}
        <nav style={{ marginBottom: '32px', fontSize: '13px', color: 'var(--text-muted)' }}>
          <Link href={base} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
          {' / '}
          <Link href={`${base}/resources`} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Resources</Link>
          {' / '}
          <span>Czech Business Register</span>
        </nav>

        <h1
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: '1.15',
            marginBottom: '24px',
          }}
        >
          How to Find a Czech Company in the Business Register (ARES)
        </h1>

        <p
          style={{
            fontSize: '17px',
            color: 'var(--text-muted)',
            lineHeight: '1.7',
            marginBottom: '48px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '32px',
          }}
        >
          A complete guide to searching Czech companies using ARES (the Administrative Register of
          Economic Entities) and the Commercial Register (Obchodní rejstřík). Whether you need to
          verify a company&apos;s ICO number, find contact details, or get an official extract, this
          guide walks you through every step.
        </p>

        {/* TOC */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            padding: '24px',
            marginBottom: '48px',
          }}
        >
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '15px', fontWeight: 600, marginBottom: '14px' }}>
            Contents
          </h2>
          <ol style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              ['#what-is-ares', 'What is ARES?'],
              ['#search-ares', 'How to search ARES'],
              ['#commercial-register', 'Czech Commercial Register (Obchodní rejstřík)'],
              ['#ico-number', 'Understanding the ICO number'],
              ['#extracts', 'Getting an official extract'],
              ['#contact', 'Find company contacts'],
              ['#cta', 'Using this for B2B prospecting'],
            ].map(([href, label]) => (
              <li key={href} style={{ fontSize: '14px' }}>
                <a href={href} style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Content sections */}
        <ContentSection id="what-is-ares" title="What is ARES?">
          <p>
            ARES (<em>Administrativní registr ekonomických subjektů</em>) is the Czech government&apos;s
            unified database of all economic entities operating in the Czech Republic. It aggregates
            data from multiple registers including the Commercial Register, Trade Register, and VAT
            register, making it the primary starting point for any company lookup.
          </p>
          <p>
            The system is operated by the Czech Ministry of Finance and is freely accessible at{' '}
            <a href="https://ares.gov.cz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
              ares.gov.cz
            </a>
            .
          </p>
        </ContentSection>

        <ContentSection id="search-ares" title="How to search ARES">
          <p>You can search for any Czech company by:</p>
          <ul>
            <li><strong>Company name</strong> (obchodní firma) — partial name search works</li>
            <li><strong>ICO number</strong> (IČO) — 8-digit identification number, the most precise method</li>
            <li><strong>Address</strong> — useful when you have a physical address but not the company name</li>
          </ul>
          <Steps
            steps={[
              'Go to ares.gov.cz',
              'Enter the company name or ICO in the search field',
              'Click "Vyhledat" (Search)',
              'Click on the result to see full company details',
              'Use the "Obchodní rejstřík" tab for more detailed information',
            ]}
          />
          <Tip>
            Searching by ICO is always more reliable than by name. Czech company names often contain
            special characters (háčky, čárky) which can cause mismatches.
          </Tip>
        </ContentSection>

        <ContentSection id="commercial-register" title="Czech Commercial Register (Obchodní rejstřík)">
          <p>
            The Commercial Register (<em>Obchodní rejstřík</em>) is the official register of
            companies incorporated in the Czech Republic. It is maintained by the regional courts
            (krajské soudy) and contains detailed information about:
          </p>
          <ul>
            <li>Statutory representatives and their signing authority</li>
            <li>Shareholders and ownership structure</li>
            <li>Share capital (základní kapitál)</li>
            <li>Date of incorporation and registered address</li>
            <li>Annual accounts and financial statements</li>
          </ul>
          <p>
            You can access it directly at{' '}
            <a href="https://or.justice.cz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
              or.justice.cz
            </a>
            .
          </p>
        </ContentSection>

        <ContentSection id="ico-number" title="Understanding the ICO number">
          <p>
            The IČO (<em>Identifikační číslo osoby</em>) is an 8-digit unique identifier assigned to
            every business entity in the Czech Republic. Think of it as the Czech equivalent of a
            company registration number or EIN.
          </p>
          <p>Key things to know:</p>
          <ul>
            <li>Always exactly 8 digits (leading zeros are significant, e.g. 09586563)</li>
            <li>Used on all invoices, contracts, and official correspondence</li>
            <li>Can be used to verify a company&apos;s VAT registration status</li>
            <li>Never changes, even if the company changes its name or address</li>
          </ul>
          <Tip>
            If a company gives you a 7-digit number, prepend a zero. ARES always displays it as 8
            digits.
          </Tip>
        </ContentSection>

        <ContentSection id="extracts" title="Getting an official extract">
          <p>
            An official extract (<em>výpis z obchodního rejstříku</em>) is a certified document
            confirming a company&apos;s legal status. You may need this for contracts, tenders, or
            due diligence.
          </p>
          <p>There are two types:</p>
          <ul>
            <li>
              <strong>Free extract (výpis zdarma):</strong> Available directly from or.justice.cz,
              not officially certified but sufficient for most internal purposes.
            </li>
            <li>
              <strong>Certified extract (ověřený výpis):</strong> Available at any Czech Point
              location (post offices, municipal offices, notaries). Costs approx. CZK 100 per page.
            </li>
          </ul>
        </ContentSection>

        <ContentSection id="contact" title="Find company contacts">
          <p>
            Neither ARES nor the Commercial Register contains phone numbers or email addresses — only
            the registered address and statutory details. To find decision-maker contacts, use:
          </p>
          <ul>
            <li>The company&apos;s own website (often listed in the register)</li>
            <li>LinkedIn — search by company name to find employees</li>
            <li>
              <a href="https://www.firmy.cz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                firmy.cz
              </a>{' '}
              — Czech business directory with phone numbers for many companies
            </li>
            <li>
              <a href="https://rejstrik.penize.cz" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                rejstrik.penize.cz
              </a>{' '}
              — aggregates register data with financial summaries
            </li>
          </ul>
        </ContentSection>

        {/* CTA section */}
        <div
          id="cta"
          style={{
            background: 'rgba(255,107,74,0.06)',
            border: '1px solid rgba(255,107,74,0.25)',
            borderRadius: '14px',
            padding: '36px',
            marginTop: '56px',
          }}
        >
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
            Scaling this for B2B prospecting?
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '24px' }}>
            Manual ARES lookups work for occasional due diligence. If you want to systematically find
            and contact hundreds of Czech companies per month — with personalised outreach to each —
            that&apos;s what SalesAgent.cz does as an outsourced AI SDR service.
          </p>
          <Link
            href={base}
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--accent)',
              color: '#0B1320',
              fontWeight: 700,
              fontSize: '14px',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            See how AI SDR works →
          </Link>
        </div>
      </article>
    </div>
  )
}

function ContentSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      style={{
        marginBottom: '48px',
        paddingBottom: '48px',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <h2
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(20px, 2.5vw, 26px)',
          fontWeight: 700,
          letterSpacing: '-0.015em',
          marginBottom: '20px',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: '15px',
          lineHeight: '1.75',
          color: 'var(--text-muted)',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
        }}
      >
        {children}
      </div>
    </section>
  )
}

function Steps({ steps }: { steps: string[] }) {
  return (
    <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {steps.map((step, i) => (
        <li key={i} style={{ fontSize: '14px', lineHeight: '1.6' }}>
          {step}
        </li>
      ))}
    </ol>
  )
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: 'rgba(34,160,107,0.08)',
        border: '1px solid rgba(34,160,107,0.2)',
        borderRadius: '8px',
        padding: '14px 18px',
        fontSize: '13px',
        color: 'var(--text-muted)',
        lineHeight: '1.6',
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
      }}
    >
      <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>TIP</span>
      <span>{children}</span>
    </div>
  )
}
