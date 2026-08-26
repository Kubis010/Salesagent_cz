import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'European Sales Expansion: How We Run It For You | SalesAgent.cz',
  description:
    'European sales expansion without opening offices or hiring local reps. We research companies, run B2B outreach and book first meetings across CEE — done for you, market by market.',
  keywords: [
    'european sales expansion',
    'expand sales to europe',
    'b2b sales expansion europe',
    'sales outsourcing europe',
    'market entry europe',
    'outsourced sales agent europe',
    'enter european markets',
    'cee market entry',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/european-sales-expansion',
    languages: {
      en: 'https://salesagent.cz/blog/european-sales-expansion',
      'x-default': 'https://salesagent.cz/blog/european-sales-expansion',
    },
  },
  openGraph: {
    title: 'European Sales Expansion: How We Run It For You',
    description:
      'Expand B2B sales into European markets without local offices or hires. We run research, outreach and first meetings as a done-for-you service, market by market.',
    url: 'https://salesagent.cz/blog/european-sales-expansion',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-08-26',
    images: [{ url: 'https://salesagent.cz/blog/european-sales-expansion.jpg', width: 1200, height: 630, alt: 'European sales expansion' }],
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'European Sales Expansion: How We Run It For You',
  description:
    'How foreign companies expand B2B sales into European markets without opening offices or hiring local reps — a done-for-you outreach model, validated market by market.',
  url: 'https://salesagent.cz/blog/european-sales-expansion',
  author: {
    '@type': 'Person',
    name: 'Petr Kubicek',
    url: 'https://salesagent.cz/en#founder',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Sales Robots s.r.o.',
    url: 'https://salesagent.cz',
    logo: { '@type': 'ImageObject', url: 'https://salesagent.cz/logo.png' },
  },
  datePublished: '2026-08-26',
  dateModified: '2026-08-26',
  image: 'https://salesagent.cz/blog/european-sales-expansion.jpg',
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
      name: 'European Sales Expansion',
      item: 'https://salesagent.cz/blog/european-sales-expansion',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you expand B2B sales into Europe without a local office?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You start with outreach, not infrastructure. We act as your outsourced sales team in the target market — researching companies, sending personalised B2B outreach, and booking first meetings — so you generate pipeline before committing to an office or a local hire.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which European market should we expand to first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test one market at a time. The Czech Republic is a common first step for CEE expansion — a stable B2B economy and a gateway to Slovakia, Poland, Austria and Germany. We run outreach in one market, measure real demand, then replicate the playbook in the next.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do the sales expansion for us, or give us a tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We do it for you. This is a done-for-you service, not software you operate. We find the companies, write and send the outreach, follow up across email and LinkedIn, and hand you the replies and booked meetings.',
      },
    },
  ],
}

const marketRows = [
  { market: 'Czech Republic', note: 'Stable B2B economy, gateway to CEE — a common first test market' },
  { market: 'Slovakia', note: 'Close language and business ties to the Czech market' },
  { market: 'Poland', note: 'Large B2B market, strong manufacturing and services base' },
  { market: 'Austria & Germany (DACH)', note: 'Higher-value deals, longer cycles — outreach in local language' },
]

export default function EuropeanSalesExpansionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <article style={{ maxWidth: '740px', margin: '0 auto' }}>

          <nav style={{ marginBottom: '32px', fontSize: '13px', color: 'var(--text-muted)' }}>
            <Link href="/en" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            {' / '}
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
            {' / '}
            <span>European Sales Expansion</span>
          </nav>

          <div style={{ marginBottom: '16px' }}>
            <span style={{ display: 'inline-block', background: 'rgba(255,107,74,0.1)', color: 'var(--accent)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '4px' }}>
              Market Entry
            </span>
          </div>

          <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: '1.15', marginBottom: '20px' }}>
            European Sales Expansion: How We Run It For You
          </h1>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Petr Kubicek</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>26. 8. 2026</span>
          </div>

          <img
            src="/blog/european-sales-expansion.jpg"
            alt="European sales expansion — B2B outreach across CEE markets"
            style={{ width: '100%', borderRadius: '12px', marginBottom: '48px', display: 'block' }}
          />

          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '48px', borderBottom: '1px solid var(--border)', paddingBottom: '32px' }}>
            Most companies treat European sales expansion as an infrastructure project — new entities, local hires, offices in each country. It is slow, expensive, and risky. We do it the other way round: outreach first, infrastructure later. Here is how we run European sales expansion as a done-for-you service.
          </p>

          {/* H2 */}
          <Section title="What European sales expansion actually requires">
            <p>
              Expanding B2B sales into a new European market does not require a legal entity, a local office, or a hire on day one. What it requires is the ability to reach the right companies in that market, in the right language, with a message that lands — and to do it consistently enough to see real demand.
            </p>
            <p>
              That is a sales problem, not a corporate-setup problem. And it is exactly the part most companies get wrong: they spend months and thousands of euros standing up infrastructure before they know whether the market wants what they sell.
            </p>
          </Section>

          {/* H2 */}
          <Section title="How we run it — done for you, market by market">
            <p>
              We act as your outsourced sales team in the target market. You do not buy a tool and operate it yourself — we do the work and hand you the results:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Define your ideal customer for the market — sector, company size, geography, decision-maker role</li>
              <li>Research and identify matching companies from public sources — no purchased database</li>
              <li>Write personalised B2B outreach for each company, based on their website — not templates</li>
              <li>Run email and LinkedIn outreach in parallel, with follow-up sequences</li>
              <li>Hand you the replies and booked first meetings — you step in only when there is real interest</li>
            </ul>
            <p>
              After two to three months in a market you have hard data: response rates, objections, and a live pipeline — before a single euro spent on incorporation. Then you decide whether to commit, and we replicate the playbook in the next market.
            </p>
          </Section>

          {/* H2: markets table */}
          <Section title="Which European markets we start with">
            <p>We expand one market at a time. The Czech Republic is a common first step — then out into the wider region:</p>
            <div style={{ overflowX: 'auto', marginTop: '24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--border)' }}>
                    <th style={{ textAlign: 'left', padding: '10px 14px', fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text)', fontWeight: 700 }}>Market</th>
                    <th style={{ textAlign: 'left', padding: '10px 14px', fontFamily: 'Space Grotesk, sans-serif', color: 'var(--text)', fontWeight: 700 }}>Why</th>
                  </tr>
                </thead>
                <tbody>
                  {marketRows.map((row, i) => (
                    <tr key={row.market} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.02)' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 600, color: 'var(--text)' }}>{row.market}</td>
                      <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p>
              If the Czech Republic is your first market, that is where we started — see{' '}
              <Link href="/en/sales-representation-czech-republic" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                sales outsourcing and local sales in the Czech Republic
              </Link>
              {' '}for how the service works in a single market.
            </p>
          </Section>

          {/* H2 */}
          <Section title="Why sales-first beats entity-first for European expansion">
            <p>
              The traditional path — incorporate, hire, then sell — front-loads all the cost and all the risk. You pay for infrastructure before you have any evidence the market wants your product. The sales-first path inverts that: validate demand cheaply, then invest where the data says to.
            </p>
            <p>
              We covered this trade-off in detail for one market in{' '}
              <Link href="/blog/market-entry-czech-republic-hire-sales-vs-open-entity" style={{ color: 'var(--accent)', textDecoration: 'none' }}>
                market entry into the Czech Republic: hire local sales or open an entity first
              </Link>
              . The same logic applies to every European market you expand into.
            </p>
          </Section>

          {/* FAQ */}
          <section style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 700, letterSpacing: '-0.015em', marginBottom: '24px' }}>
              Frequently asked questions
            </h2>
            <style>{`
              .faq-item-es { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; margin-bottom: 10px; }
              .faq-item-es summary { list-style: none; cursor: pointer; padding: 16px 20px; font-weight: 600; font-size: 15px; display: flex; justify-content: space-between; align-items: center; }
              .faq-item-es summary::-webkit-details-marker { display: none; }
              .faq-item-es summary::after { content: '+'; font-size: 20px; font-weight: 400; color: var(--accent); flex-shrink: 0; margin-left: 12px; }
              .faq-item-es[open] summary::after { content: '−'; }
              .faq-item-es .faq-answer { padding: 0 20px 16px; font-size: 15px; line-height: 1.7; color: var(--text-muted); }
            `}</style>
            {[
              {
                q: 'How do you expand B2B sales into Europe without a local office?',
                a: 'You start with outreach, not infrastructure. We act as your outsourced sales team in the target market — researching companies, sending personalised B2B outreach, and booking first meetings — so you generate pipeline before committing to an office or a local hire.',
              },
              {
                q: 'Which European market should we expand to first?',
                a: 'Test one market at a time. The Czech Republic is a common first step for CEE expansion — a stable B2B economy and a gateway to Slovakia, Poland, Austria and Germany. We run outreach in one market, measure real demand, then replicate the playbook in the next.',
              },
              {
                q: 'Do you do the sales expansion for us, or give us a tool?',
                a: 'We do it for you. This is a done-for-you service, not software you operate. We find the companies, write and send the outreach, follow up across email and LinkedIn, and hand you the replies and booked meetings.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="faq-item-es">
                <summary>{q}</summary>
                <div className="faq-answer">{a}</div>
              </details>
            ))}
          </section>

          {/* CTA */}
          <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '36px', marginBottom: '56px' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              Planning a European sales expansion?
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '24px' }}>
              We run it for you — market by market. Research, outreach and first meetings as a done-for-you service, so your expansion generates pipeline before you open a single office.
            </p>
            <Link
              href="/en/sales-representation-czech-republic"
              style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: '#0B1320', fontWeight: 700, fontSize: '14px', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}
            >
              See how sales outsourcing works →
            </Link>
          </div>

          {/* Related */}
          <div style={{ paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Related</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/en/sales-representation-czech-republic" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                External sales representation in Czech Republic — outsourced sales agent service →
              </Link>
              <Link href="/blog/market-entry-czech-republic-hire-sales-vs-open-entity" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Market entry Czech Republic: hire local sales or open an entity first →
              </Link>
              <Link href="/blog/how-to-expand-your-business-and-sales-to-the-european-union" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                How to expand B2B sales to the European Union →
              </Link>
              <Link href="/en/resources/czech-business-companies-register" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Czech Business Register (ARES) — how to look up any Czech company →
              </Link>
            </div>
          </div>

        </article>
      </div>
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '48px', paddingBottom: '48px', borderBottom: '1px solid var(--border)' }}>
      <h2
        style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(20px, 2.5vw, 26px)',
          fontWeight: 700,
          letterSpacing: '-0.015em',
          marginBottom: '20px',
        }}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <div style={{ fontSize: '15px', lineHeight: '1.75', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {children}
      </div>
    </section>
  )
}
