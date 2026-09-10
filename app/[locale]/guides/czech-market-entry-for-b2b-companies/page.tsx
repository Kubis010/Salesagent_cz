import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  if (locale === 'cs') {
    return { robots: { index: false, follow: true } }
  }
  return {
    title: 'Czech Market Entry for B2B Companies: A Practical Playbook',
    description:
      'When to enter the Czech B2B market, entity vs. no entity, how to find first customers, and what to avoid. A practical guide for international companies.',
    keywords: [
      'czech market entry b2b',
      'entering czech republic market',
      'how to enter czech market',
      'czech market entry strategy',
      'b2b market entry czech republic',
      'czech republic business expansion',
    ],
    alternates: {
      canonical: 'https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies',
      languages: {
        en: 'https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies',
        'x-default': 'https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies',
      },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies',
      siteName: 'SalesAgent.cz',
      title: 'Czech Market Entry for B2B Companies: A Practical Playbook',
      description: 'When to enter, entity vs. no entity, how to find first customers, and what to avoid.',
      images: [
        {
          url: 'https://salesagent.cz/guides/czech-market-entry-guide.jpg',
          width: 640,
          height: 427,
          alt: 'Czech market entry guide for B2B companies',
        },
      ],
    },
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does Czech market entry take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With outsourced sales representation, you can have first meetings booked within 2–4 weeks — no entity needed, no hiring. Setting up a Czech s.r.o. entity takes 2–3 months and requires a notary, registered address, and Czech bank account. Most companies do outreach first, entity later (if at all).',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Czech Republic a good market for B2B SaaS or services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Czech Republic has a high density of mid-market companies (50–500 employees) across IT, manufacturing, logistics, and professional services. English is widely used in business. Decision cycles are shorter than in Germany or France. Response rates to good B2B outreach are typically 2–4x higher than in saturated Western European markets.',
      },
    },
    {
      '@type': 'Question',
      name: 'What language should B2B outreach be in for Czech Republic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'English works well for IT, SaaS, and international-facing companies. Czech-language outreach outperforms for manufacturing, logistics, and traditional SMBs. The best approach: Czech for the first message, English follow-up, and a Czech-speaking contact person available for calls.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the biggest mistakes companies make when entering the Czech market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The most common mistakes: (1) hiring a local rep before proving demand — expensive and hard to unwind; (2) using generic outreach templates instead of researching each company; (3) targeting too broad a segment instead of a specific niche; (4) underestimating Czech decision-makers' preference for relationship-building before a deal.",
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Czech Market Entry for B2B Companies: A Practical Playbook',
  description:
    'When to enter the Czech B2B market, entity vs. no entity, how to find first customers, and what to avoid.',
  image: 'https://salesagent.cz/guides/czech-market-entry-guide.jpg',
  datePublished: '2026-08-28',
  dateModified: '2026-08-28',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  url: 'https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies',
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://salesagent.cz/en' },
    { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://salesagent.cz/en/guides' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Czech Market Entry for B2B Companies',
      item: 'https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies',
    },
  ],
}

export default async function GuideCzechMarketEntry({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'cs') {
    redirect('/en/guides/czech-market-entry-for-b2b-companies')
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ paddingTop: '96px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Link href="/en" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span>Guides</span>
            <span>/</span>
            <span style={{ color: 'var(--text)' }}>Czech Market Entry</span>
          </nav>

          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
            Playbook · August 2026
          </p>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>
            Czech Market Entry for B2B Companies: A Practical Playbook
          </h1>

          {/* AI-citeable answer */}
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text)', marginBottom: '32px', borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
            Entering the Czech B2B market means deciding on three things: when (is there enough demand signal to justify the investment?), structure (entity vs. represented sales), and approach (direct outreach vs. partnerships vs. inbound). For most international companies, the right starting point is outsourced sales outreach — validate Czech demand in 90 days before committing capital to infrastructure.
          </p>

          <Image
            src="/guides/czech-market-entry-guide.jpg"
            alt="Czech market entry playbook for B2B companies"
            width={760}
            height={507}
            style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '12px', marginBottom: '48px' }}
            priority
          />

          {/* Section 1: When to enter */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            When to enter the Czech market
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Czech Republic is a good first Eastern European market for companies that sell to mid-market or enterprise B2B customers. It sits at the intersection of Western European business culture and Central European cost structures, making it a natural gateway to Slovakia, Poland, and the broader CEE region.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            You are probably ready to enter when you have at least one of these:
          </p>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '24px' }}>
            <li>Inbound interest from Czech companies (even one or two warm leads)</li>
            <li>A product or service that solves a problem you know Czech companies have</li>
            <li>Proof of traction in a neighbouring market (Germany, Austria, Slovakia)</li>
            <li>A clear ICP that maps onto Czech company segments (size, industry, role)</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            You are probably <em>not</em> ready if you need the Czech market to work before you have working sales in your home market — or if your product is not yet localised for European data residency, GDPR, or invoicing requirements.
          </p>

          {/* Section 2: Entity vs no entity */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Entity vs. no entity: what actually matters
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Most international companies assume they need a Czech s.r.o. (limited liability company) before they can sell there. This is not true. You can legally sell to Czech companies as a foreign entity under a commercial representative arrangement, through an outsourced sales agency, or via a distributor.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            You <strong>do</strong> need a Czech entity if:
          </p>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '16px' }}>
            <li>You want to hire Czech employees on a Czech employment contract</li>
            <li>You need to invoice from a Czech VAT number (some public procurement requires this)</li>
            <li>You plan to hold inventory, physical assets, or a local bank account in CZ</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            For most early-stage Czech market entry, you can invoice in EUR from your existing entity. Czech companies are accustomed to receiving invoices from EU-based foreign suppliers.
          </p>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
            <p style={{ fontWeight: 700, marginBottom: '8px' }}>Entity setup timeline and cost (2026)</p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
              Czech s.r.o. setup: 2–3 months, €3,000–8,000 in legal fees, notary, and registered address. Minimum share capital: CZK 1 (under 2014 reform). Ongoing accounting: ~€400–700/month depending on transaction volume. Alternative: use an EOR (Employer of Record) service to employ Czech staff without a local entity — ~€500–800/month per employee on top of salary.
            </p>
          </div>

          {/* Section 3: Finding first customers */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            How to find your first Czech B2B customers
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            The Czech business register (ARES) is the best free source of B2B prospects. It contains all registered Czech entities with industry classification (CZ-NACE codes), registered address, and key personnel. You can filter by industry and size, then find contact details via company websites and LinkedIn.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            What works best for first Czech customer acquisition in 2026:
          </p>
          {[
            {
              step: '1',
              title: 'Define a narrow segment first',
              body: 'Czech manufacturing companies with 50–200 employees, or Czech IT services companies with 20–100 employees. Narrow ICP = higher response rates and faster proof of concept.',
            },
            {
              step: '2',
              title: 'Run personalised cold email and LinkedIn outreach',
              body: 'Contact the CEO or commercial director directly. Read their website before writing. Reference what they actually do — not a generic pitch. Czech decision-makers respond well to relevant, well-written outreach that shows you understand their business.',
            },
            {
              step: '3',
              title: 'Follow up twice, then move on',
              body: 'A first email + one follow-up after 5 days is the optimal sequence for Czech B2B. More than two touches without a response is usually wasted effort in this market.',
            },
            {
              step: '4',
              title: 'Use Czech references early',
              body: "If you have any Czech or Slovak customers, lead with them. Czech buyers are more comfortable with suppliers who have local proof — even one relevant reference changes the conversion significantly.",
            },
          ].map((item) => (
            <div key={item.step} style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <div style={{
                flexShrink: 0,
                width: '36px',
                height: '36px',
                background: 'var(--accent)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 700,
                color: '#0B1320',
              }}>
                {item.step}
              </div>
              <div style={{ paddingTop: '6px' }}>
                <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{item.title}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}

          {/* Section 4: What to avoid */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            What to avoid
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            These are the patterns that waste the most money and time in Czech B2B market entry:
          </p>
          {[
            {
              title: 'Hiring a local rep before proving demand',
              body: 'The most common and costly mistake. A Czech sales rep costs €4,000–8,000/month total, takes 3–6 months to ramp, and leaves with a 2-month notice period and no pipeline if it does not work out. Validate first with outsourced outreach.',
            },
            {
              title: 'Using bought contact databases',
              body: 'Purchased Czech B2B databases are typically 30–40% outdated. Worse, they signal that you have not done your homework — Czech decision-makers notice when outreach is clearly mass-sent from a list.',
            },
            {
              title: 'Targeting too broad a segment',
              body: '"Czech companies" is not a market. "Czech manufacturing companies with 50–200 employees using SAP" is. The narrower your first ICP, the faster you learn and the higher your response rate.',
            },
            {
              title: 'Waiting for the perfect Czech translation',
              body: 'Good English outreach to international-facing Czech companies outperforms mediocre Czech translation. If you cannot do fluent Czech, do not do bad Czech — use English with a Czech-speaking follow-up contact instead.',
            },
          ].map((item) => (
            <div key={item.title} style={{ borderLeft: '3px solid rgba(255,107,74,0.4)', paddingLeft: '20px', marginBottom: '24px' }}>
              <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{item.title}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
            </div>
          ))}

          {/* CTA */}
          <div style={{ marginTop: '56px', marginBottom: '56px', border: '1px solid rgba(255,107,74,0.35)', borderRadius: '16px', padding: '40px 36px', background: 'rgba(255,107,74,0.04)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              Build your own outbound machine for the Czech market
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '560px' }}>
              We build you a complete AI sales system — finds Czech companies in your segment, enriches contacts, runs personalised email and LinkedIn outreach — and hand it over for you to own. No agency dependency. Ready in 1–3 weeks.
            </p>
            <Link
              href="/en/contact"
              style={{
                display: 'inline-block',
                backgroundColor: 'var(--accent)',
                color: '#0B1320',
                fontWeight: 700,
                fontSize: '15px',
                padding: '14px 32px',
                borderRadius: '10px',
                textDecoration: 'none',
              }}
            >
              Book a free consultation →
            </Link>
          </div>

          {/* FAQ */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '24px' }}>
            Frequently asked questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {faqSchema.mainEntity.map((item) => (
              <div key={item.name} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '10px', padding: '24px', marginBottom: '2px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '10px' }}>{item.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>

          {/* Second CTA — market test */}
          <div style={{ marginTop: '40px', marginBottom: '40px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '32px 28px' }}>
            <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>Not sure if Czech market is worth it?</p>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>
              Run a 2–3 month market test first — fixed price, no commitment
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px', maxWidth: '540px', fontSize: '14px' }}>
              Before hiring, before an entity, before a long-term contract: we contact 200–500 Czech companies in your segment, log every response, and give you a written go/no-go at the end.
            </p>
            <Link
              href="/en/guides/b2b-market-research-agency-czech-republic"
              style={{
                display: 'inline-block',
                border: '1px solid var(--accent)',
                color: 'var(--accent)',
                fontWeight: 700,
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
              }}
            >
              Read about the market test →
            </Link>
          </div>

          {/* Related */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Related guides</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/en/guides/b2b-market-research-agency-czech-republic" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                B2B Market Research Agency Czech Republic: 3-Month Market Test →
              </Link>
              <Link href="/blog/how-to-expand-your-business-and-sales-to-the-european-union" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                How to Expand Your Business and Sales to the European Union →
              </Link>
              <Link href="/blog/sales-automation-ai-b2b-outreach" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Sales Automation: How AI Is Changing B2B Outreach →
              </Link>
              <Link href="/en/resources/czech-business-companies-register" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Search the Czech Business Register (ARES) →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
