import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sales Agent Definition and What He Does | SalesAgent.cz',
  description:
    'What is a sales agent? Full definition of the sales agent role — activities, key responsibilities, required skills, and what to expect from the position.',
  keywords: [
    'sales agent definition',
    'what does a sales agent do',
    'sales agent role',
    'sales agent responsibilities',
    'sales agent skills',
    'B2B sales agent',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/sales-agent-definition-and-what-he-do',
  },
  openGraph: {
    title: 'Sales Agent Definition and What He Does',
    description:
      'What is a sales agent? Activities, responsibilities, required skills and what the position really means in B2B sales.',
    url: 'https://salesagent.cz/blog/sales-agent-definition-and-what-he-do',
    siteName: 'SalesAgent.cz',
    type: 'article',
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Sales Agent definition and what he does?',
  description:
    'Full definition of the sales agent role — activities, responsibilities, skills required and what the position means in B2B sales.',
  url: 'https://salesagent.cz/blog/sales-agent-definition-and-what-he-do',
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
  datePublished: '2025-01-09',
  dateModified: '2025-01-09',
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
      name: 'Sales Agent Definition',
      item: 'https://salesagent.cz/blog/sales-agent-definition-and-what-he-do',
    },
  ],
}

export default function SalesAgentDefinitionPage() {
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
            <span>Sales Agent Definition</span>
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
              Sales
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
            Sales Agent definition and what he does?
          </h1>

          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '40px', paddingBottom: '32px', borderBottom: '1px solid var(--border)' }}>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Petr Kubicek</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <time dateTime="2025-01-09" style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              January 9, 2025
            </time>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>·</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>5 min read</span>
          </div>

          <ArticleSection>
            <p>
              A <strong>sales agent</strong> is a professional whose primary function is to find new
              customers and generate revenue for a company. Unlike a general sales representative who
              might handle inbound enquiries or manage existing accounts, a sales agent is focused on
              outbound activity — actively seeking out companies or individuals who are not yet customers
              and converting them into ones.
            </p>
            <p>
              The term is used across different industries and contexts, but the core meaning stays
              consistent: a sales agent is the person (or increasingly, the system) responsible for
              making the first contact, qualifying interest, and creating the conditions for a deal to
              happen.
            </p>
          </ArticleSection>

          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
              marginTop: '48px',
            }}
          >
            Sales Agent Position: What it&apos;s about and What to Expect?
          </h2>

          <ArticleSection>
            <p>
              The sales agent role sits at the top of the sales funnel. In B2B environments, this is
              often called a <em>Sales Development Representative (SDR)</em> or <em>Business
              Development Representative (BDR)</em>. The position is demanding because it involves a
              high volume of rejections — most contacts will not respond, and of those who do, only a
              fraction will become genuine opportunities.
            </p>
            <p>
              What you can expect from the role: a significant portion of your time goes into research
              (finding the right companies and contacts), outreach (emails, calls, LinkedIn), and
              follow-up. Results are measured in meetings booked or qualified leads passed to the
              closing team, not in closed revenue.
            </p>
          </ArticleSection>

          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '16px',
              marginTop: '40px',
            }}
          >
            What is a Sales Agent activity?
          </h3>

          <ArticleSection>
            <p>
              Day-to-day, a sales agent&apos;s work breaks down into a repeated cycle of research,
              outreach, and follow-up. The ratio between these varies by role and company, but in a
              typical outbound B2B position the activities look like this:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Identifying target companies that match the ideal customer profile</li>
              <li>Finding the right contact person within each company (decision-maker)</li>
              <li>Writing and sending personalised outreach emails</li>
              <li>Prospecting via LinkedIn — connection requests, messages, profile visits</li>
              <li>Following up with prospects who did not respond to the initial contact</li>
              <li>Qualifying incoming responses and booking discovery calls</li>
              <li>Logging all activity and updating the CRM</li>
              <li>Reporting pipeline progress to management</li>
            </ul>
            <p>
              The total volume varies significantly. In a technology company targeting mid-market
              accounts, a sales agent might reach 30–50 new companies per day. In a niche enterprise
              segment, it might be 5–10 highly researched contacts per week.
            </p>
          </ArticleSection>

          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '16px',
              marginTop: '40px',
            }}
          >
            Responsibilities
          </h3>

          <ArticleSection>
            <p>
              Beyond the daily activity, a sales agent carries a set of ongoing responsibilities:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <strong>Pipeline ownership:</strong> maintaining a sufficient volume of contacts at
                each stage of the outreach sequence so that the meeting target is consistently met
              </li>
              <li>
                <strong>Message quality:</strong> ensuring outreach is personalised and relevant, not
                generic spam — this directly affects reply rates and brand reputation
              </li>
              <li>
                <strong>CRM hygiene:</strong> keeping contact records, notes and activity logs accurate
                so the wider team has a clear view of what has been tried and when
              </li>
              <li>
                <strong>Target adherence:</strong> meeting weekly and monthly KPIs for number of
                contacts reached, follow-ups sent, and qualified conversations initiated
              </li>
              <li>
                <strong>Handoff quality:</strong> when a prospect shows interest, preparing a clear
                summary for the account executive so the discovery call starts with context
              </li>
              <li>
                <strong>Iteration:</strong> testing different subject lines, messages, and sequences
                to find what works best for a given audience
              </li>
            </ul>
          </ArticleSection>

          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '16px',
              marginTop: '40px',
            }}
          >
            Skills Required
          </h3>

          <ArticleSection>
            <p>
              The skills that make a strong sales agent are a specific mix of persistence, communication
              clarity, and structured thinking:
            </p>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <strong>Written communication:</strong> the ability to write a short, clear, credible
                email that does not look like a template — this is the most directly tested skill in
                the role
              </li>
              <li>
                <strong>Research ability:</strong> quickly understanding what a company does and why
                your offer might be relevant to them specifically
              </li>
              <li>
                <strong>Resilience:</strong> the ability to maintain consistent effort despite a high
                volume of non-responses and rejections
              </li>
              <li>
                <strong>Organisation:</strong> managing a large number of contacts across different
                stages without things falling through the cracks
              </li>
              <li>
                <strong>Curiosity:</strong> genuine interest in why companies buy or do not buy, which
                leads to better targeting and messaging over time
              </li>
              <li>
                <strong>Tool proficiency:</strong> comfortable using CRMs (HubSpot, Salesforce, Pipedrive),
                LinkedIn Sales Navigator, and email sequencing tools
              </li>
            </ul>
          </ArticleSection>

          <h3
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '20px',
              fontWeight: 700,
              marginBottom: '16px',
              marginTop: '40px',
            }}
          >
            Final Thoughts
          </h3>

          <ArticleSection>
            <p>
              The sales agent role is the engine of outbound B2B sales. It is measurable, high-volume,
              and repeatable — which also makes it one of the first roles to be augmented by AI. Modern
              AI SDR systems can handle the research and first-contact outreach at scale, while human
              agents focus on qualifying conversations and building relationships once interest is
              established.
            </p>
            <p>
              Whether the function is carried out by a person or by an automated system, the underlying
              logic is the same: identify the right companies, understand what they need, say something
              relevant, and create conditions for a conversation.
            </p>
          </ArticleSection>

          <div
            style={{
              background: 'rgba(255,107,74,0.06)',
              border: '1px solid rgba(255,107,74,0.25)',
              borderRadius: '14px',
              padding: '36px',
              marginTop: '56px',
            }}
          >
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              AI SDR as a service
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '24px' }}>
              SalesAgent.cz provides an outsourced AI sales agent that finds target companies, reads
              their websites, and sends personalised outreach on your behalf. You get meetings booked —
              without hiring a full-time SDR.
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

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Related</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/blog/sales-automation-ai-b2b-outreach" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Sales Automation: How AI Is Changing B2B Outreach →
              </Link>
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak personalizovat cold emaily pomocí AI →
              </Link>
              <Link href="/en/how-it-works" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                How it works — step by step →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </>
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
        marginBottom: '8px',
      }}
    >
      {children}
    </div>
  )
}
