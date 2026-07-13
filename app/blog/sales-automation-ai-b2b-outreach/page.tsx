import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sales Automation: How AI Is Changing B2B Outreach | SalesAgent.cz',
  description:
    'AI-driven sales automation is replacing repetitive prospecting work. Here is what actually changes in your pipeline — and what it means for your team.',
  alternates: { canonical: 'https://salesagent.cz/blog/sales-automation-ai-b2b-outreach' },
  openGraph: {
    title: 'Sales Automation: How AI Is Changing B2B Outreach',
    description:
      'AI-driven sales automation is replacing repetitive prospecting work. Here is what actually changes in your pipeline — and what it means for your team.',
    type: 'article',
    publishedTime: '2025-02-05',
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
            headline: 'Sales Automation: How AI Is Changing B2B Outreach',
            datePublished: '2025-02-05',
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
          src="/blog/arrows.jpg"
          alt="Sales automation trends and direction"
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
          Sales Automation: How AI Is Changing B2B Outreach
        </h1>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '40px' }}>
          5 February 2025 · Petr Kubicek
        </p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <p>
            For years, B2B sales meant a salesperson sitting at a desk, manually searching for companies, finding decision-makers on LinkedIn, writing emails from scratch and following up with a phone call a week later. It worked — slowly, expensively and at a scale limited by how many hours were in a working day.
          </p>

          <p>
            AI changes the equation. Not by replacing salespeople — but by removing the work that was never really theirs to begin with.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            What sales automation actually means
          </h2>

          <p>
            "Sales automation" is one of those terms that gets stretched to cover everything from a canned email sequence to a fully autonomous AI agent that identifies, researches and reaches out to prospects without human input. The distinction matters, because most of the market is selling the former while implying the latter.
          </p>

          <p>
            True automation handles the full top-of-funnel loop: finding companies that match your ideal customer profile, visiting and reading their websites to understand what they do, writing a personalised first message based on that research, and sending it via email and LinkedIn — all without a human touching it until a reply comes in.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            Why the old way does not scale
          </h2>

          <p>
            A skilled sales rep can realistically research and reach out to 20–30 new companies per week if they are doing it properly — reading the website, finding the right contact, writing something that does not sound like a template. At that pace, covering 1,000 companies takes nearly a year of one person's time.
          </p>

          <p>
            The obvious response is to hire more people. But more people means more management, more ramp-up time, more salary cost and no guarantee of better output per head. The problem is structural, not headcount.
          </p>

          <img
            src="/blog/laptop-phone.jpg"
            alt="Sales technology — laptop and phone setup"
            style={{ width: '100%', borderRadius: '12px', margin: '8px 0' }}
          />

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            What AI actually does in the pipeline
          </h2>

          <p>
            A modern AI-driven outreach system operates in three stages, all running in parallel at scale:
          </p>

          <p>
            <strong>1. Prospecting.</strong> The system searches company registries, maps and public web sources to find businesses that match your defined criteria — industry, size, region, keywords on their site. No bought databases, no stale contact lists.
          </p>

          <p>
            <strong>2. Research.</strong> For each company found, the system downloads and reads the website. It summarises what the company does, what services it offers and what language they use to describe their work. This is the context that makes the outreach feel personal.
          </p>

          <p>
            <strong>3. Outreach.</strong> Using the research, the system generates a unique first email for each company — not a template with a name filled in, but a message that directly references what it found on their site. The same logic applies to a LinkedIn connection request with a personal note.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            The metric that matters: replies, not sends
          </h2>

          <p>
            The number of emails sent is not a useful measure of anything. What matters is how many companies reply and indicate interest — and what happens to them next. With proper personalisation at scale, a 2 % reply rate across 1,000 outreach messages per month translates to 20 qualified conversations. At a 15 % close rate from a meeting, that is 3 new customers a month from a single automated system running at €239.
          </p>

          <p>
            The maths changes completely when you compare it to a full-time sales hire who might realistically generate 80 contacts a month, at a cost of €4,000+ including employer's costs.
          </p>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '16px' }}>
            What this does not replace
          </h2>

          <p>
            Automation handles everything before the first real conversation. It does not close deals — it fills the pipeline with people who actually want to talk. The human work starts when a company replies. Building trust, understanding their situation, handling objections, negotiating terms — none of that is going anywhere.
          </p>

          <p>
            What changes is that your team stops spending 80 % of their time on prospecting and starts spending it on the part of sales that actually requires a person.
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
              Want to see what this looks like for your market?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px', lineHeight: 1.65 }}>
              We run the full outreach loop — finding companies, reading their websites, writing personalised messages — as a service. Get in touch and we will show you what the pipeline would look like in your field.
            </p>
            <a
              href="https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
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

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Related</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak personalizovat cold emaily pomocí AI →
              </Link>
              <Link href="/cs/how-it-works" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak to funguje — krok za krokem →
              </Link>
              <Link href="/cs/pricing" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Ceník služby →
              </Link>
            </div>
          </div>

          <p style={{ marginTop: '16px' }}>
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px' }}>
              ← Back to Blog
            </Link>
          </p>

        </div>
      </div>
    </article>
  )
}
