import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How to Implement Sales Automation in Your Company | SalesAgent.cz',
  description:
    'A practical step-by-step guide to implementing sales automation in a B2B company — from defining your ideal customer to measuring results.',
  alternates: { canonical: 'https://salesagent.cz/blog/how-to-implement-sales-automation' },
  openGraph: {
    title: 'How to Implement Sales Automation in Your Company',
    description:
      'A practical step-by-step guide to implementing sales automation in a B2B company — from defining your ideal customer to measuring results.',
    type: 'article',
    publishedTime: '2025-02-12',
  },
}

export default function Page() {
  return (
    <article style={{ paddingTop: '96px', paddingBottom: '80px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How to Implement Sales Automation in Your Company',
            datePublished: '2025-02-12',
            author: { '@type': 'Person', name: 'Petr Kubicek' },
            publisher: { '@type': 'Organization', name: 'SalesAgent.cz' },
          }),
        }}
      />

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

        {/* Breadcrumb */}
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
          {' / '}Sales Automation
        </p>

        {/* Hero image */}
        <img
          src="/blog/notebook.jpg"
          alt="Planning sales automation implementation"
          style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }}
        />

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
          Sales Automation
        </p>

        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(26px, 4vw, 38px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          How to Implement Sales Automation in Your Company
        </h1>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '40px' }}>
          12 February 2025 · Petr Kubicek
        </p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <p>
            Most companies that try to introduce sales automation fail not because the technology does not work, but because they start from the wrong end. They buy a tool, connect it to their CRM and expect leads to appear. When nothing meaningful happens, they conclude that "automation does not work for us."
          </p>

          <p>
            The problem is almost never the tool. It is the absence of a clear definition of who they are reaching out to, why, and what they expect to happen next.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Step 1: Define your ideal customer precisely
          </h2>

          <p>
            Before any automation can run, you need a written definition of who you are targeting. Not "mid-sized manufacturing companies" — but "manufacturing companies with 20–200 employees operating in CZ/SK that export to Germany and have no in-house sales team." The more precise the definition, the better the system can find matching companies and the more relevant the outreach will feel.
          </p>

          <p>
            Write down: industry, company size, geography, signals that suggest a good fit (keywords on their website, technologies they use, whether they are hiring for certain roles), and signals that rule them out. This document becomes the brief for the whole system.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Step 2: Decide what you are asking for
          </h2>

          <p>
            The goal of the first message is not to sell. It is to start a conversation. The most effective automated outreach asks for a single, low-commitment next step — typically a 20–30 minute call to see if there is a fit.
          </p>

          <p>
            If your first message tries to explain your full product, include a brochure and request a meeting with the full decision-making team, you will get very few replies. Keep it short. One observation about their business, one sentence on what you do, one question or ask.
          </p>

          <img
            src="/blog/crossroads.jpg"
            alt="Choosing the right sales automation approach"
            style={{ width: '100%', borderRadius: '12px', margin: '8px 0' }}
          />

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Step 3: Choose the right channels
          </h2>

          <p>
            Email and LinkedIn remain the two most effective channels for B2B outreach — and they work best in combination. Email reaches the inbox directly; LinkedIn adds a social layer that makes the sender feel like a real person rather than a campaign.
          </p>

          <p>
            The sequence that works: send a personalised email → connect on LinkedIn with a personal note → follow up by email if no reply after 5–7 days → follow up on LinkedIn if still no reply. Four touchpoints, spread over two weeks, without being pushy. After that, stop. Anyone who did not reply is not a good use of follow-up time right now — they can re-enter the system in 3–6 months.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Step 4: Set up your reply handling before you launch
          </h2>

          <p>
            This is where most implementations fall apart. The automation runs, replies come in — and nobody handles them quickly. A prospect who replies to a cold email has a short window of interest. If they wait 48 hours for a response, half of them will have moved on mentally.
          </p>

          <p>
            Before launching any automated outreach, make sure: someone owns replies and has a target response time of under 4 hours during business hours; there is a clear next step offered (a booking link or a specific time slot); and there is a follow-up if the prospect says "yes but not now" — diary it and come back in the agreed timeframe.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Step 5: Measure the right things
          </h2>

          <p>
            The metrics worth tracking in automated outreach: reply rate (replies ÷ messages sent), positive reply rate (interested replies only), meeting rate (meetings booked ÷ messages sent) and pipeline value generated per month. Open rates are largely meaningless in 2025 — too many are recorded by email clients scanning the message automatically.
          </p>

          <p>
            A healthy outreach system at scale should produce a 1.5–3 % reply rate with good personalisation. Below 1 % usually means the targeting is off or the message is too generic. Above 3 % usually means you have found a strong message-market fit worth doubling down on.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Build or buy?
          </h2>

          <p>
            Companies setting up outreach automation face an early decision: build a system in-house using tools like Clay, Apollo or Lemlist, or buy it as a service where someone else runs it. Both can work. The build-in-house route is cheaper per unit but requires someone with the technical knowledge to set it up, a budget for multiple SaaS tools and ongoing management time. The service route costs more monthly but gets you to market faster with no internal overhead.
          </p>

          <p>
            The honest answer is: if you have someone internally who can dedicate 20+ hours to setup and 5+ hours per week to ongoing management, building makes sense at scale. If you want to test whether outbound works for your business before committing that resource, buying the service first is the lower-risk path.
          </p>

          {/* CTA */}
          <div style={{
            marginTop: '16px',
            background: 'var(--bg-card)',
            border: '1px solid rgba(255,107,74,0.3)',
            borderRadius: '14px',
            padding: '32px',
          }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>
              Want the service version without the setup headache?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.65 }}>
              SalesAgent.cz runs the full prospecting and outreach process as a managed service — we handle targeting, research, personalised messaging and follow-up. You get qualified replies, we handle everything before that.
            </p>
            <a
              href="https://bookings.cloud.microsoft/bookwithme/user/480895b1333541dc94be634dd588fada%40salesagent.cz"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: '#0B1320',
                fontWeight: 700,
                fontSize: '15px',
                padding: '12px 28px',
                borderRadius: '9px',
                textDecoration: 'none',
              }}
            >
              Book a call →
            </a>
          </div>

          <p style={{ marginTop: '8px' }}>
            <Link href="/blog" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
              ← Back to Blog
            </Link>
          </p>

        </div>
      </div>
    </article>
  )
}
