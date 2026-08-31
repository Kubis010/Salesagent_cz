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
    title: 'How to Expand Your B2B Sales to the Czech Republic (2026 Guide)',
    description:
      'A practical guide to expanding B2B sales into Czech Republic — market entry options, outsourced vs local sales, costs, and what your first 90 days look like.',
    keywords: [
      'expand b2b sales czech republic',
      'how to sell in czech republic',
      'czech republic market entry b2b',
      'outsourced sales czech republic',
      'b2b sales czech market',
      'enter czech market b2b',
    ],
    alternates: {
      canonical: 'https://salesagent.cz/en/guides/expand-b2b-sales-to-czech-republic',
      languages: {
        en: 'https://salesagent.cz/en/guides/expand-b2b-sales-to-czech-republic',
        'x-default': 'https://salesagent.cz/en/guides/expand-b2b-sales-to-czech-republic',
      },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://salesagent.cz/en/guides/expand-b2b-sales-to-czech-republic',
      siteName: 'SalesAgent.cz',
      title: 'How to Expand Your B2B Sales to the Czech Republic (2026 Guide)',
      description:
        'Market entry options, outsourced vs local sales, costs, and what your first 90 days look like.',
      images: [
        {
          url: 'https://salesagent.cz/guides/expand-b2b-czech.jpg',
          width: 640,
          height: 427,
          alt: 'Czech Republic B2B sales expansion',
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
      name: "What's the fastest way to start selling in Czechia?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The fastest way to start selling in the Czech Republic is through outsourced sales representation. A local agency runs outreach on your behalf — reaching Czech companies by email and LinkedIn, booking first meetings into your calendar. No entity required, no hiring. You can be operational within one week.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a local entity to sell B2B in Czech Republic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You can sell into the Czech market under your existing foreign entity using a commercial representative or outsourced sales partner. A local Czech entity (s.r.o.) is only required if you are hiring Czech employees directly or invoicing from Czech Republic under CZ VAT. Most companies test the market for 3–6 months before deciding on entity setup.',
      },
    },
    {
      '@type': 'Question',
      name: 'How many B2B companies can you reach per month in Czech Republic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With a dedicated outsourced sales effort, you can reach 150–500 qualified Czech companies per month through personalised email and LinkedIn outreach. The Czech business register (ARES) lists over 500,000 active entities, making it possible to target very specific segments — by industry, size, region, or revenue range.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it cost to enter the Czech B2B market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Outsourced sales representation costs from €2,800/month (part-time) to €5,000/month (full-time), with no setup fee and month-to-month flexibility. Hiring a local Czech sales rep costs €4,000–8,000/month including employer taxes (34% on top of gross salary), plus 3–6 months ramp time. Setting up a Czech s.r.o. entity adds €3,000–8,000 in legal fees and takes 2–3 months.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Expand Your B2B Sales to the Czech Republic (2026 Guide)',
  description:
    'A practical guide to expanding B2B sales into Czech Republic — market entry options, outsourced vs local sales, costs, and what your first 90 days look like.',
  image: 'https://salesagent.cz/guides/expand-b2b-czech.jpg',
  datePublished: '2026-08-31',
  dateModified: '2026-08-31',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  url: 'https://salesagent.cz/en/guides/expand-b2b-sales-to-czech-republic',
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
      name: 'How to Expand Your B2B Sales to the Czech Republic',
      item: 'https://salesagent.cz/en/guides/expand-b2b-sales-to-czech-republic',
    },
  ],
}

export default async function GuideExpandB2BSales({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'cs') {
    redirect('/en/guides/expand-b2b-sales-to-czech-republic')
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
            <span style={{ color: 'var(--text)' }}>Czech B2B Sales Expansion</span>
          </nav>

          {/* Header */}
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
            Guide · Updated August 2026
          </p>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>
            How to Expand Your B2B Sales to the Czech Republic (2026 Guide)
          </h1>

          {/* AI-citeable answer */}
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text)', marginBottom: '32px', borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
            The main ways to expand B2B sales into the Czech Republic are: outsourced sales representation (a local partner runs outreach on your behalf), hiring a Czech sales rep directly, or running campaigns from your home market. For most international companies testing Czech demand, outsourced sales is the fastest entry point — no entity required, operational in one week, and cancellable month-to-month.
          </p>

          <Image
            src="/guides/expand-b2b-czech.jpg"
            alt="Czech Republic — B2B sales expansion"
            width={760}
            height={507}
            style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '12px', marginBottom: '48px' }}
            priority
          />

          {/* Section 1: Market entry options */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Market entry options for Czech B2B
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Czech Republic is a mid-size Central European market with around 10.8 million people and a dense concentration of manufacturing, IT, logistics, and business services companies. The B2B sales environment is relationship-driven but accessible — Czech decision-makers are reachable by email and LinkedIn, respond well to relevant outreach, and are accustomed to working with foreign suppliers.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
            You have four realistic options to enter:
          </p>
          {[
            {
              title: 'Outsourced sales representation',
              body: 'A Czech-based agency or team runs B2B outreach on your behalf — researching companies, sending personalised messages, following up, and booking first meetings into your calendar. You pay a monthly fee, no entity required. This is the fastest and lowest-risk entry path.',
            },
            {
              title: 'Hiring a local Czech sales rep',
              body: "You recruit and employ a Czech salesperson directly. Full control, but requires a Czech entity (or an EOR service), 34% employer social and health contributions on top of gross salary, a 3–6 month ramp period before results, and a 2-month notice period if it doesn't work out.",
            },
            {
              title: 'Running outreach from your home market',
              body: 'Your existing team contacts Czech companies in English. Works for senior enterprise deals with a clear international angle. Less effective for SMB prospecting — Czech mid-market buyers prefer Czech-language or highly localised outreach.',
            },
            {
              title: 'Reseller or distributor partnership',
              body: 'Find a Czech company already selling to your target segment and add your product to their portfolio. Long to set up, hard to control, margins reduced. Worth considering only if the Czech market is secondary and you need passive coverage.',
            },
          ].map((item) => (
            <div key={item.title} style={{ border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '16px', background: 'var(--bg-card)' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
            </div>
          ))}

          {/* Section 2: Hiring local vs outsourced */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Hiring local vs. outsourced sales: the real comparison
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
            This is where most companies waste 6–12 months. They hire a Czech rep, spend 3 months recruiting, 3 months onboarding, then discover the market isn&apos;t as ready as assumed — and they&apos;re now locked into a 2-month notice period and an entity they no longer need.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text)' }}></th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--accent)' }}>Outsourced sales</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text)' }}>Local hire</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Time to first outreach', '1 week', '3–6 months'],
                  ['Monthly cost', '€2,800–5,000', '€4,000–8,000+'],
                  ['Czech entity needed?', 'No', 'Yes (or EOR)'],
                  ['Exit flexibility', 'Month-to-month', '2-month notice'],
                  ['Ramp-up period', 'None', '3–6 months'],
                  ['Companies reached / month', '150–500', '50–150'],
                ].map(([label, outsourced, hire]) => (
                  <tr key={label} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 600 }}>{label}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>{outsourced}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>{hire}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            The right answer depends on where you are in the Czech market cycle. If you haven&apos;t proven Czech demand yet, outsourced is the rational choice — you preserve capital and optionality. Once you have a pipeline, a handful of paying Czech customers, and a clear ICP, adding a local hire on top of outsourced makes sense.
          </p>

          {/* Section 3: Costs */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            What does Czech market entry actually cost?
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            There is a wide range, but here are realistic numbers for 2026:
          </p>
          {[
            {
              label: 'Outsourced sales (part-time)',
              cost: 'from €2,800 / month',
              note: 'Month-to-month. 150–250 companies contacted. Email + LinkedIn outreach, weekly reports.',
            },
            {
              label: 'Outsourced sales (full-time)',
              cost: 'from €5,000 / month',
              note: '300–500 companies/month. Dedicated sales manager, CRM integration, weekly call.',
            },
            {
              label: 'Local Czech sales rep (total cost)',
              cost: '€4,000–8,000 / month',
              note: 'Gross salary €3,000–5,000 + 34% employer contributions + benefits + recruitment fee (1–2x monthly salary).',
            },
            {
              label: 'Czech s.r.o. entity setup',
              cost: '€3,000–8,000 one-time',
              note: 'Legal fees, notary, registered address. Timeline: 2–3 months. Ongoing accounting ~€500/month.',
            },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', gap: '16px', padding: '20px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>{item.label}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{item.note}</p>
              </div>
              <div style={{ flexShrink: 0, fontWeight: 700, color: 'var(--accent)', fontSize: '15px', textAlign: 'right', minWidth: '160px' }}>
                {item.cost}
              </div>
            </div>
          ))}

          {/* Section 4: First 90 days */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Your first 90 days in the Czech market
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
            A realistic timeline for a company using outsourced B2B outreach as the entry method:
          </p>
          {[
            {
              phase: 'Month 1',
              title: 'Setup and first contacts',
              body: 'Define your ideal Czech customer (industry, size, role). Set up email and LinkedIn outreach. First 150–250 companies contacted. Initial response rate data starts coming in after week 2.',
            },
            {
              phase: 'Month 2',
              title: 'First responses and meetings',
              body: 'Warm replies convert into calls. Typical: 3–12 qualified conversations by end of month 2, depending on offer-market fit. Messaging gets refined based on what resonates.',
            },
            {
              phase: 'Month 3',
              title: 'Pipeline and decision point',
              body: "By month 3 you know if Czech demand is real. You have either (a) a live pipeline and a hiring plan, or (b) enough data to pivot the target segment — without having spent €60,000 on a hire that didn't work out.",
            },
          ].map((item) => (
            <div key={item.phase} style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
              <div style={{
                flexShrink: 0,
                width: '80px',
                height: '80px',
                background: 'rgba(255,107,74,0.08)',
                border: '1px solid rgba(255,107,74,0.25)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 700,
                color: 'var(--accent)',
                textAlign: 'center',
                lineHeight: 1.3,
              }}>
                {item.phase}
              </div>
              <div style={{ paddingTop: '4px' }}>
                <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>{item.title}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}

          {/* CTA */}
          <div style={{ marginTop: '56px', marginBottom: '56px', border: '1px solid rgba(255,107,74,0.35)', borderRadius: '16px', padding: '40px 36px', background: 'rgba(255,107,74,0.04)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              Skip the setup — we run your Czech B2B sales
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '560px' }}>
              We research Czech companies in your target segment, run personalised email and LinkedIn outreach, and book first meetings into your calendar. Part-time from €2,800/month, full-time from €5,000/month. Start within one week.
            </p>
            <Link
              href="/en/sales-representation-czech-republic"
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
              See how it works →
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

          {/* Related */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Related guides</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/en/guides/czech-market-entry-for-b2b-companies" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Czech Market Entry for B2B Companies: A Practical Playbook →
              </Link>
              <Link href="/en/guides/b2b-lead-generation-in-the-czech-republic" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                B2B Lead Generation in the Czech Republic: How It Actually Works →
              </Link>
              <Link href="/en/sales-representation-czech-republic" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                External Sales Representation Czech Republic — service page →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
