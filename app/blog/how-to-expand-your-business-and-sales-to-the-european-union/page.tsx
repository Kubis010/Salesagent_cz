import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Expand Your Business and Sales to the European Union | SalesAgent.cz',
  description:
    'A practical guide to expanding B2B sales into the European Union — market research, legal setup, localisation, outreach strategy, and finding the right entry point.',
  keywords: [
    'expand business to EU',
    'expand sales to Europe',
    'European Union market entry',
    'B2B sales Europe',
    'EU business expansion',
    'how to enter European market',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/how-to-expand-your-business-and-sales-to-the-european-union',
  },
  openGraph: {
    title: 'How to Expand Your Business and Sales to the European Union',
    description:
      'Practical steps for B2B companies looking to enter the European market — research, legal setup, localisation and outreach.',
    url: 'https://salesagent.cz/blog/how-to-expand-your-business-and-sales-to-the-european-union',
    siteName: 'SalesAgent.cz',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Expand Your Business and sales to the European Union',
  description:
    'A practical guide to expanding B2B sales into the European Union — market research, legal setup, localisation, outreach strategy, and finding the right entry point.',
  url: 'https://salesagent.cz/blog/how-to-expand-your-business-and-sales-to-the-european-union',
  author: {
    '@type': 'Person',
    name: 'Petr Kubicek',
    url: 'https://salesagent.cz/en#founder',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sales Robots s.r.o.',
    url: 'https://salesagent.cz',
    logo: {
      '@type': 'ImageObject',
      url: 'https://salesagent.cz/logo.png',
    },
  },
  datePublished: '2025-01-15',
  dateModified: '2025-01-15',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://salesagent.cz/en' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://salesagent.cz/blog' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'How to Expand to the EU',
      item: 'https://salesagent.cz/blog/how-to-expand-your-business-and-sales-to-the-european-union',
    },
  ],
}

export default function EUExpansionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <article style={{ maxWidth: '740px', margin: '0 auto' }}>

          <nav style={{ marginBottom: '32px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <Link href="/en" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
            {' / '}
            <span>Expand to the EU</span>
          </nav>

          <div style={{ marginBottom: '16px' }}>
            <span
              style={{
                display: 'inline-block',
                background: 'rgba(255,107,74,0.1)',
                color: 'var(--accent)',
                fontSize: '12px',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '4px 10px',
                borderRadius: '4px',
              }}
            >
              Business Development
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(28px, 4vw, 44px)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: '1.15',
              marginBottom: '20px',
            }}
          >
            How to Expand Your Business and Sales to the European Union
          </h1>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Petr Kubicek</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <time dateTime="2025-01-15" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              January 15, 2025
            </time>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>7 min read</span>
          </div>

          <ArticleSection>
            <p>
              The European Union represents a market of over 450 million consumers and hundreds of
              thousands of B2B buyers across 27 countries. For companies looking to grow beyond their
              home market, the EU offers a unified regulatory framework, a common digital payment
              infrastructure, and strong purchasing power — particularly in Germany, France, the
              Netherlands, and the Nordic countries.
            </p>
            <p>
              But entering any new market requires a clear plan. This guide walks through the six
              practical steps that determine whether an EU expansion succeeds or stalls.
            </p>
          </ArticleSection>

          <NumberedSection number="1" title="Research the Right Market First">
            <ArticleSection>
              <p>
                The EU is not a single market in a cultural or sales sense. A Scandinavian company
                buying SaaS behaves very differently from a Spanish manufacturer evaluating outsourced
                services. Before expanding, answer these questions:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Which EU countries have the highest density of your ideal customer profile?</li>
                <li>What language does the decision-maker use in day-to-day business?</li>
                <li>Is the buying process centralised at HQ level or regional?</li>
                <li>Who are the existing competitors in that market?</li>
              </ul>
              <p>
                Germany is often the default first EU market for B2B companies — it has the largest
                economy, a strong industrial base, and a culture that values process and specification.
                However, it also has longer sales cycles and high expectations around documentation and
                compliance. The Czech Republic, Slovakia, and Poland can be faster to enter and useful
                as a proof-of-concept before scaling West.
              </p>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="2" title="Understand the Legal and Tax Framework">
            <ArticleSection>
              <p>
                Selling to EU companies is generally straightforward — a service agreement and an
                invoice with the correct VAT treatment is usually sufficient for initial sales. The
                complexity increases when you want to establish a legal entity inside the EU.
              </p>
              <p>Key points to clarify early:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong>VAT registration:</strong> if you exceed the threshold for distance selling
                  (EUR 10,000 in most cases), you need to register for VAT in your buyers&apos; countries
                  or use the EU One-Stop-Shop (OSS) scheme
                </li>
                <li>
                  <strong>GDPR compliance:</strong> any outreach to EU contacts — email, LinkedIn,
                  phone — must comply with GDPR. This means having a lawful basis (typically legitimate
                  interest for B2B) and including an opt-out in every message
                </li>
                <li>
                  <strong>Local entity:</strong> not required for initial sales, but needed for hiring
                  local staff, signing certain contracts, or accessing EU procurement tenders
                </li>
                <li>
                  <strong>Data storage:</strong> if your product processes personal data of EU citizens,
                  it may need to be stored within the EU under Schrems II and subsequent rulings
                </li>
              </ul>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="3" title="Localise Your Offer — Not Just the Language">
            <ArticleSection>
              <p>
                Translation is the minimum. True localisation means adapting your value proposition to
                what matters in that specific market. A feature that is a selling point in the US might
                be assumed as baseline in Germany. A price that is competitive in the Czech Republic
                might signal low quality in Switzerland.
              </p>
              <p>Localisation checklist:</p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Website in the local language (or at minimum in English, which is widely accepted in B2B across Northern Europe)</li>
                <li>Case studies or references from companies in the target region or a comparable market</li>
                <li>Pricing in local currency with local payment options</li>
                <li>Contact details with a local phone number or address (can be a virtual office initially)</li>
                <li>Compliance documentation relevant to the sector (ISO certificates, GDPR DPA, security assessments)</li>
              </ul>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="4" title="Build a Targeted Outreach Strategy">
            <ArticleSection>
              <p>
                Cold outreach in the EU works — but the approach needs to match local communication
                norms. Germans and Swiss buyers appreciate specificity and factual claims. Dutch and
                Nordic buyers respond well to directness and low-pressure messaging. Southern European
                markets often require a longer relationship-building phase before a deal closes.
              </p>
              <p>
                For B2B outreach across EU markets, the most effective combination is:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong>Personalised cold email:</strong> not a template blast — each message should
                  reference something specific about the recipient&apos;s company or industry
                </li>
                <li>
                  <strong>LinkedIn outreach:</strong> connection request followed by a short message;
                  acceptance rates in the EU tend to be higher when the profile looks credible and local
                </li>
                <li>
                  <strong>Follow-up sequence:</strong> two to three follow-up touches over 10–14 days;
                  EU buyers are busy but generally polite — a gentle follow-up is not considered aggressive
                </li>
              </ul>
              <p>
                GDPR note: B2B cold email to business email addresses is permitted under legitimate
                interest in most EU member states, provided you have a clear opt-out and the message is
                genuinely relevant to the recipient&apos;s professional role.
              </p>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="5" title="Choose the Right Entry Point and Partners">
            <ArticleSection>
              <p>
                Direct outbound sales is not the only route into the EU. Depending on your product and
                resources, you might also consider:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <strong>Local resellers or distributors:</strong> especially effective for hardware,
                  industrial products, or markets where a local relationship is a prerequisite for
                  buying decisions
                </li>
                <li>
                  <strong>Technology partnerships:</strong> integrating with an EU-dominant platform
                  (e.g. SAP, Sage, local ERP systems) to reach their customer base
                </li>
                <li>
                  <strong>EU accelerators and trade programmes:</strong> several EU countries (Netherlands,
                  Czech Republic, Estonia) have well-developed foreign business support programmes with
                  subsidised landing services
                </li>
                <li>
                  <strong>Attending trade fairs:</strong> in sectors like manufacturing, food, and
                  construction, face-to-face events (Hannover Messe, Anuga, etc.) remain a primary
                  channel for new supplier relationships
                </li>
              </ul>
            </ArticleSection>
          </NumberedSection>

          <NumberedSection number="6" title="Measure and Iterate Before Scaling">
            <ArticleSection>
              <p>
                Many EU expansions fail not because the market opportunity is wrong, but because
                companies scale too quickly before validating the core sales motion. Before hiring local
                staff or committing to a local entity, validate:
              </p>
              <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>Can you close a deal with an EU customer remotely, without local presence?</li>
                <li>What is the realistic sales cycle length in this market?</li>
                <li>What objections appear repeatedly — and do you have good answers to them?</li>
                <li>What reply rate are you getting from cold outreach in this market vs. your home market?</li>
              </ul>
              <p>
                A 90-day test campaign targeting 500 companies in the new market will tell you more
                than any amount of upfront analysis. The data you collect — which messages get replies,
                which companies convert, which objections kill deals — is the foundation of a scalable
                go-to-market in that country.
              </p>
            </ArticleSection>
          </NumberedSection>

          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '14px',
              padding: '36px',
              marginTop: '56px',
              marginBottom: '0',
            }}
          >
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>
              Expand to the EU with Confidence
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '0' }}>
              EU expansion is a process, not an event. The companies that succeed are the ones that
              start small, test systematically, and build on what they learn. Pick one market, define
              your ideal customer clearly, run a focused outreach campaign, and use the results to
              decide whether and how to scale. The opportunity in the EU is real — the key is reaching
              the right companies with the right message at the right time.
            </p>
          </div>

          <div
            style={{
              background: 'rgba(255,107,74,0.06)',
              border: '1px solid rgba(255,107,74,0.25)',
              borderRadius: '14px',
              padding: '36px',
              marginTop: '24px',
            }}
          >
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              Need to reach Czech and Slovak companies specifically?
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '24px' }}>
              SalesAgent.cz specialises in B2B outreach to Czech and Slovak companies — in the local
              language, with context. We find your target companies, read their websites, and send a
              personalised message to the right person. You get qualified meetings.
            </p>
            <Link
              href="/en"
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
              See how it works &#x2192;
            </Link>
          </div>
        </article>
      </div>
    </>
  )
}

function NumberedSection({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid var(--border)' }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '36px',
            height: '36px',
            minWidth: '36px',
            borderRadius: '50%',
            background: 'var(--accent)',
            color: '#0B1320',
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '15px',
            marginTop: '2px',
          }}
        >
          {number}
        </span>
        <h2
          style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(20px, 2.5vw, 26px)',
            fontWeight: 700,
            letterSpacing: '-0.015em',
            lineHeight: '1.2',
            margin: 0,
            paddingTop: '6px',
          }}
        >
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}

function ArticleSection({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontSize: '16px',
        lineHeight: '1.8',
        color: 'var(--text-muted)',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {children}
    </div>
  )
}
