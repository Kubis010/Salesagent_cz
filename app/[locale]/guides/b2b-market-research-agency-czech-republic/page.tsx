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
    title: 'B2B Market Research Agency Czech Republic: 3-Month Market Test',
    description:
      'Not sure if Czech Republic is worth the investment? We run a systematic 2–3 month outreach campaign, track every response, and give you a clear demand signal — at a fixed price, no long-term commitment.',
    keywords: [
      'b2b market research agency czech republic',
      'czech market research b2b',
      'market research czech republic',
      'b2b market test czech republic',
      'czech market demand validation',
      'market entry research czech republic',
      'b2b market analysis czech republic',
    ],
    alternates: {
      canonical: 'https://salesagent.cz/en/guides/b2b-market-research-agency-czech-republic',
      languages: {
        en: 'https://salesagent.cz/en/guides/b2b-market-research-agency-czech-republic',
        'x-default': 'https://salesagent.cz/en/guides/b2b-market-research-agency-czech-republic',
      },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://salesagent.cz/en/guides/b2b-market-research-agency-czech-republic',
      siteName: 'SalesAgent.cz',
      title: 'B2B Market Research Agency Czech Republic: 3-Month Market Test',
      description:
        'Systematic outreach campaign to validate Czech demand. Fixed price, 2–3 months, clear go/no-go signal.',
    },
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a B2B market test in Czech Republic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A B2B market test is a structured 2–3 month outreach campaign targeting a defined segment of Czech companies. We contact decision-makers, track every response, and build a picture of who is interested, why, and what objections come up. The result is a demand signal — not a survey, but real market behaviour — that tells you whether the Czech market is worth further investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is this different from a market research report?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A market research report is desk research — data aggregated from public sources, surveys, and analyst estimates. It tells you what the market looks like on paper. A market test tells you what real Czech decision-makers actually do when confronted with your specific offer. Response rates, objections, and conversation quality are signals no report can give you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the market test include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The market test includes: (1) building a prospect list of 200–500 Czech companies matching your ICP using ARES and LinkedIn; (2) researching each company and writing personalised outreach; (3) running email and LinkedIn campaigns with follow-ups; (4) logging every response, objection, and conversion; (5) a final report with response rate, demand quality, key objections, and a go/no-go recommendation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a Czech entity or employees for the market test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The market test runs without a Czech entity. We act as your commercial representative, and all outreach goes out in your name (or under your brand). You receive the leads and manage follow-up calls yourself. No Czech legal structure required until you decide to commit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the price of a Czech market test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pricing is fixed per month and confirmed on a free consultation — it depends on your ICP, campaign scope, and whether you want Czech- or English-language outreach. There is no long-term contract: the market test runs for 2–3 months, and you decide what to do next based on results.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'B2B Market Research Agency Czech Republic: 3-Month Market Test at a Fixed Price',
  description:
    'Not sure if Czech Republic is worth the investment? We run a systematic outreach campaign and give you a real demand signal in 2–3 months.',
  datePublished: '2026-09-10',
  dateModified: '2026-09-10',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  url: 'https://salesagent.cz/en/guides/b2b-market-research-agency-czech-republic',
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
      name: 'B2B Market Research Czech Republic',
      item: 'https://salesagent.cz/en/guides/b2b-market-research-agency-czech-republic',
    },
  ],
}

const ctaStyle = {
  display: 'inline-block' as const,
  backgroundColor: 'var(--accent)',
  color: '#0B1320',
  fontWeight: 700,
  fontSize: '15px',
  padding: '14px 32px',
  borderRadius: '10px',
  textDecoration: 'none',
}

export default async function GuideMarketResearchCzech({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'cs') {
    redirect('/en/guides/b2b-market-research-agency-czech-republic')
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
            <span style={{ color: 'var(--text)' }}>Market Research Czech Republic</span>
          </nav>

          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
            Playbook · September 2026
          </p>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>
            B2B Market Research Agency Czech Republic: A 3-Month Market Test at a Fixed Price
          </h1>

          <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text)', marginBottom: '32px', borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
            Before you hire a Czech sales rep, set up an entity, or commit budget to the Czech market — run a 2–3 month test. Our agents systematically contact Czech companies in your target segment, log every response, and give you a real demand signal. Fixed monthly price, no long-term contract, clear go/no-go at the end.
          </p>

          <Image
            src="/blog/prague-market-research.jpg"
            alt="B2B market research Czech Republic — Prague business district"
            width={760}
            height={400}
            style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '12px', marginBottom: '48px' }}
            priority
          />

          {/* Section 0: Two services we offer */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '0' }}>
            Two ways we research the Czech market for you
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
            Depending on what you need, we offer two complementary services — desk research to understand the market landscape, and a live commercial test to validate real demand with real companies.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '40px' }}>
            <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginBottom: '10px' }}>Classical market research</p>
              <p style={{ fontSize: '15px', fontWeight: 700, marginBottom: '10px' }}>Market landscape analysis</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 0 }}>Sector mapping, competitor landscape, ICP definition, buyer persona research, ARES database analysis, and a written market sizing report. Delivered in 2–3 weeks.</p>
            </div>
            <div style={{ background: 'rgba(255,107,74,0.04)', border: '1px solid rgba(255,107,74,0.35)', borderRadius: '12px', padding: '24px' }}>
              <p style={{ fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)', marginBottom: '10px' }}>Commercial market test</p>
              <p style={{ fontSize: '15px', fontWeight: 700, marginBottom: '10px' }}>Live demand validation</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 0 }}>We contact 200–500 Czech companies, run personalised outreach, log every response, book meetings, and deliver a go/no-go report. Runs 2–3 months at a fixed monthly fee.</p>
            </div>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '40px' }}>
            Most clients start with a commercial market test — it delivers both the landscape data and real buying signals in one run. The classical research report is the right choice if you need a defined deliverable for an internal decision, board presentation, or investor due diligence first.
          </p>

          {/* Section 1: Why a market test, not a report */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Why a market test beats a market research report
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Standard market research reports tell you what the Czech B2B landscape looks like on paper: number of companies in a sector, estimated spending, top players. That is useful context. But it cannot answer the question that actually matters: <em>will Czech decision-makers respond to your specific offer?</em>
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            A market test answers this with real behaviour, not surveys. We contact 200–500 Czech companies that match your ICP, personalise every message, and run structured follow-up sequences. What comes back — response rate, conversation quality, objections, meeting bookings — is primary research that no analyst report can replicate.
          </p>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '32px' }}>
            <p style={{ fontWeight: 700, marginBottom: '12px', fontSize: '15px' }}>Market report vs. market test</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Report (desk research)</p>
                <ul style={{ paddingLeft: '16px', color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>
                  <li>Sector size estimates</li>
                  <li>Competitor landscape</li>
                  <li>Survey-based intent data</li>
                  <li>No real buying signal</li>
                  <li>2–4 weeks, one-off cost</li>
                </ul>
              </div>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--accent)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Market test (live outreach)</p>
                <ul style={{ paddingLeft: '16px', color: 'var(--text-muted)', fontSize: '14px', lineHeight: 1.8, margin: 0 }}>
                  <li>Real response rates</li>
                  <li>Actual objections logged</li>
                  <li>Pipeline from day one</li>
                  <li>Real meeting bookings</li>
                  <li>2–3 months, fixed monthly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: What's included */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            What the Czech market test includes
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
            The test is a fully managed outreach operation. We handle every step — you provide the brief, review the messaging, and take calls when someone wants to meet.
          </p>
          {[
            {
              step: '1',
              title: 'ICP definition and prospect list (week 1)',
              body: 'We map your ideal Czech customer: industry (CZ-NACE codes), company size, region, and decision-maker role. Using ARES (Czech business register), LinkedIn, and company websites, we build a hand-verified prospect list of 200–500 companies — no bought databases.',
            },
            {
              step: '2',
              title: 'Personalised outreach campaigns (weeks 2–8)',
              body: 'Our agents read the website of each company before writing a message. Every email and LinkedIn message is individually crafted — not a template with a name swapped in. We run Czech- or English-language outreach depending on your segment, with a structured 2-touch follow-up sequence.',
            },
            {
              step: '3',
              title: 'Response tracking and objection log (ongoing)',
              body: 'Every response is logged: positive, negative, "call us later", and no response. We capture objections verbatim. After the first 4–6 weeks you already have a pattern — what lands, what doesn\'t, and what follow-up questions Czech buyers ask.',
            },
            {
              step: '4',
              title: 'Meeting handoff (as they come in)',
              body: 'When a company says they want to talk, we hand the lead directly to you with context: what we told them, what they said, what they need next. You run the sales call. We keep the outreach running.',
            },
            {
              step: '5',
              title: 'Final market test report (end of month 2 or 3)',
              body: 'A written summary: response rate by segment, conversion to meeting, objection taxonomy, and a go/no-go recommendation with rationale. This is the document you take to your board to justify (or pause) Czech market investment.',
            },
          ].map((item) => (
            <div key={item.step} style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
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

          {/* CTA 1 — mid-page */}
          <div style={{ marginTop: '48px', marginBottom: '56px', border: '1px solid rgba(255,107,74,0.35)', borderRadius: '16px', padding: '40px 36px', background: 'rgba(255,107,74,0.04)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              Interested in a Czech market test?
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '560px' }}>
              Book a free 30-minute consultation. We will go through your ICP, estimate the addressable segment in Czech Republic, and scope a test that gives you a clear signal within 60–90 days.
            </p>
            <Link href="/en/contact" style={ctaStyle}>
              Book a free consultation →
            </Link>
          </div>

          {/* Section 3: Pricing */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Pricing: fixed monthly fee, no long-term contract
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            The market test runs for 2–3 months at a fixed monthly fee confirmed on the free consultation. Price depends on campaign scope: number of prospects, language (Czech or English), and depth of personalisation.
          </p>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', marginBottom: '32px' }}>
            <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '16px' }}>What is included in the fixed fee</p>
            {[
              'Prospect research and hand-verified contact list (200–500 companies)',
              'Individually personalised email and LinkedIn outreach',
              'Follow-up sequences and response management',
              'Weekly progress updates with response data',
              'Meeting scheduling and lead handoff',
              'Final market test report with go/no-go recommendation',
            ].map((item) => (
              <div key={item} style={{ display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '1px', fontWeight: 700 }}>✓</span>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '20px', marginBottom: 0, borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
              No setup fee. No success fee on top. No minimum commitment beyond the agreed test period.
            </p>
          </div>

          {/* Section 4: After the test */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            What happens after the market test
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            At the end of the test period you have three options:
          </p>
          {[
            {
              title: 'Go — scale the outreach',
              body: 'If response rates are good and meetings are converting, we continue and expand — broader segment, higher volume, or additional channels. You can also take over the outreach system yourself: we build you the full AI sales pipeline (scraper, enrichment, outreach automation) and hand it over for you to own.',
            },
            {
              title: 'Adjust — change segment or offer',
              body: 'If the data shows interest but low conversion, we identify what to change: ICP, message angle, pricing framing, or language. A second test round with adjusted parameters usually resolves it within another 4–6 weeks.',
            },
            {
              title: 'Stop — save the infrastructure investment',
              body: 'If demand is not there, you know it in 90 days instead of 18 months and €200k in entity setup, a local hire, and opportunity cost. The market test report gives you documented rationale to park the Czech opportunity and move to a better market.',
            },
          ].map((item) => (
            <div key={item.title} style={{ borderLeft: '3px solid rgba(255,107,74,0.4)', paddingLeft: '20px', marginBottom: '24px' }}>
              <p style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{item.title}</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
            </div>
          ))}

          {/* CTA 2 — bottom */}
          <div style={{ marginTop: '56px', marginBottom: '56px', border: '1px solid rgba(255,107,74,0.35)', borderRadius: '16px', padding: '40px 36px', background: 'rgba(255,107,74,0.04)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              Start your Czech market test
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '560px' }}>
              Tell us your ICP and we will scope a 2–3 month test at a fixed price. First consultation is free — no pitch, just a map of what the Czech segment looks like for you and what a test would cost.
            </p>
            <Link href="/en/contact" style={ctaStyle}>
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

          {/* Related */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Related guides</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/en/guides/czech-market-entry-for-b2b-companies" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Czech Market Entry for B2B Companies: A Practical Playbook →
              </Link>
              <Link href="/en/resources/czech-business-companies-register" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Search the Czech Business Register (ARES) →
              </Link>
              <Link href="/blog/sales-automation-ai-b2b-outreach" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Sales Automation: How AI Is Changing B2B Outreach →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
