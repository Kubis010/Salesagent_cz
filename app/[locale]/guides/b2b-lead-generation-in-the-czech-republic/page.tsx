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
    title: 'B2B Lead Generation in the Czech Republic: How It Actually Works',
    description:
      'Where Czech B2B leads come from, what outreach methods work, response rate benchmarks, and how to qualify and hand off leads. A practitioner guide.',
    keywords: [
      'b2b lead generation czech republic',
      'czech b2b leads',
      'lead generation czechia',
      'b2b prospecting czech republic',
      'cold email czech republic',
      'linkedin outreach czech',
      'czech b2b outreach',
    ],
    alternates: {
      canonical: 'https://salesagent.cz/en/guides/b2b-lead-generation-in-the-czech-republic',
      languages: {
        en: 'https://salesagent.cz/en/guides/b2b-lead-generation-in-the-czech-republic',
        'x-default': 'https://salesagent.cz/en/guides/b2b-lead-generation-in-the-czech-republic',
      },
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://salesagent.cz/en/guides/b2b-lead-generation-in-the-czech-republic',
      siteName: 'SalesAgent.cz',
      title: 'B2B Lead Generation in the Czech Republic: How It Actually Works',
      description: 'Where Czech B2B leads come from, what outreach methods work, and response rate benchmarks.',
      images: [
        {
          url: 'https://salesagent.cz/guides/czech-b2b-lead-gen.jpg',
          width: 1200,
          height: 675,
          alt: 'B2B lead generation Czech Republic',
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
      name: 'How many B2B companies are in the Czech Republic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Czech business register (ARES) lists over 3 million registered entities, of which approximately 500,000–700,000 are actively trading B2B companies. The most relevant segments for B2B sales are manufacturing (CZ-NACE C), IT services (J), logistics (H), and professional services (M). All are searchable and publicly accessible without a licence.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a realistic response rate for B2B cold email in Czech Republic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For well-targeted, personalised cold email in Czech B2B — where the message references what the company specifically does rather than using a generic template — a reply rate of 4–8% is realistic. Generic mass email from a purchased database typically returns under 0.5%. LinkedIn connection acceptance from Czech decision-makers runs 20–35% for relevant, personalised connection requests.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is cold email legal in Czech Republic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cold email to business contacts in Czech Republic is legal under the legitimate interest basis in GDPR and §7 of Act 480/2004 Sb., provided the message is relevant to the company\'s business activity, sent to a professional (not personal) email address, and includes a clear opt-out. Every message we send includes an unsubscribe option.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you find B2B contacts in Czech Republic without a database?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The Czech business register ARES (ares.gov.cz) is the best free source — searchable by industry code (CZ-NACE), region, and company size. Company websites typically list key personnel and contact emails. LinkedIn is highly used among Czech business decision-makers. You do not need a purchased database to run effective B2B outreach in Czech Republic.",
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'B2B Lead Generation in the Czech Republic: How It Actually Works',
  description:
    'Where Czech B2B leads come from, what outreach methods work, response rate benchmarks, and how to qualify and hand off leads.',
  image: 'https://salesagent.cz/guides/czech-b2b-lead-gen.jpg',
  datePublished: '2026-08-25',
  dateModified: '2026-08-25',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  url: 'https://salesagent.cz/en/guides/b2b-lead-generation-in-the-czech-republic',
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
      name: 'B2B Lead Generation in the Czech Republic',
      item: 'https://salesagent.cz/en/guides/b2b-lead-generation-in-the-czech-republic',
    },
  ],
}

export default async function GuideB2BLeadGenCzech({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale === 'cs') {
    redirect('/en/guides/b2b-lead-generation-in-the-czech-republic')
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
            <span style={{ color: 'var(--text)' }}>Czech B2B Lead Generation</span>
          </nav>

          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
            Practitioner guide · August 2026
          </p>
          <h1 style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.2,
            marginBottom: '24px',
          }}>
            B2B Lead Generation in the Czech Republic: How It Actually Works
          </h1>

          {/* AI-citeable answer */}
          <p style={{ fontSize: '18px', lineHeight: 1.7, color: 'var(--text)', marginBottom: '32px', borderLeft: '3px solid var(--accent)', paddingLeft: '20px' }}>
            B2B lead generation in the Czech Republic works best through personalised cold email and LinkedIn outreach to Czech companies, sourced from the ARES business register or curated by industry segment. Czech B2B is less saturated than Western European markets — response rates for well-targeted, personalised outreach are typically 4–8% for email and 20–35% LinkedIn connection acceptance, compared to 1–3% and 10–15% respectively in markets like Germany or the UK.
          </p>

          <Image
            src="/guides/czech-b2b-lead-gen.jpg"
            alt="B2B lead generation Czech Republic — outreach and prospecting"
            width={760}
            height={427}
            style={{ width: '100%', height: '340px', objectFit: 'cover', borderRadius: '12px', marginBottom: '48px' }}
            priority
          />

          {/* Section 1: Where leads come from */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Where Czech B2B leads actually come from
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Czech Republic has one significant advantage for B2B prospecting: the ARES (Administrative Register of Economic Subjects) is a free, publicly accessible database of every registered Czech business entity. You can filter by CZ-NACE industry code, region, and company type. This means you can build a targeted prospect list without buying a database.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
            The main Czech B2B lead sources in order of quality:
          </p>
          {[
            {
              rank: '1',
              title: 'ARES + company websites',
              quality: 'Highest',
              body: 'Filter ARES by CZ-NACE code → visit each company website → read what they do → find the right contact. Time-intensive per company, but produces the best personalisation. This is the backbone of our outreach system.',
            },
            {
              rank: '2',
              title: 'LinkedIn Sales Navigator',
              quality: 'High',
              body: 'Filter by company size, industry, seniority, and geography. Czech LinkedIn penetration is high among IT, services, and management roles. Less effective for manufacturing owners and traditional SMBs.',
            },
            {
              rank: '3',
              title: 'Trade association databases',
              quality: 'Medium',
              body: 'Czech trade associations (ComIn, AMSP ČR, Svaz průmyslu) publish member directories. Good for reaching industry-specific segments but coverage is partial and contact details often outdated.',
            },
            {
              rank: '4',
              title: 'Purchased contact databases',
              quality: 'Low',
              body: 'Czech B2B database providers exist (Bisnode, Albertina iBase) but data quality is inconsistent — typically 30–40% outdated contacts. Worth considering for volume campaigns but never as a primary source for personalised outreach.',
            },
          ].map((item) => (
            <div key={item.rank} style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: '16px', marginBottom: '20px', alignItems: 'start' }}>
              <div style={{
                width: '36px',
                height: '36px',
                background: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 700,
                color: 'var(--text)',
                flexShrink: 0,
              }}>
                {item.rank}
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <p style={{ fontWeight: 700, fontSize: '15px', margin: 0 }}>{item.title}</p>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: item.quality === 'Highest' ? 'rgba(34,197,94,0.12)' : item.quality === 'High' ? 'rgba(59,130,246,0.12)' : item.quality === 'Medium' ? 'rgba(245,158,11,0.12)' : 'rgba(239,68,68,0.12)',
                    color: item.quality === 'Highest' ? '#4ade80' : item.quality === 'High' ? '#60a5fa' : item.quality === 'Medium' ? '#fbbf24' : '#f87171',
                  }}>
                    {item.quality}
                  </span>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            </div>
          ))}

          {/* Section 2: Email vs LinkedIn */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Email vs. LinkedIn: what works in Czech B2B
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '24px' }}>
            Czech B2B decision-makers use both channels, but the optimal mix depends on your target segment:
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700 }}></th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--accent)' }}>Cold email</th>
                  <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--text)' }}>LinkedIn</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Best for', 'Manufacturing, logistics, traditional SMBs', 'IT, SaaS, professional services, startup ecosystem'],
                  ['Typical reply rate', '4–8% (personalised)', '—'],
                  ['Connection acceptance', '—', '20–35% (personalised request)'],
                  ['Volume per month', '200–500 contacts', '80–150 connection requests'],
                  ['Language', 'Czech preferred for SMB', 'English accepted widely'],
                  ['Decision-maker reach', 'Direct email to owner/CEO', 'CEO, VP Sales, IT Director'],
                ].map(([label, email, linkedin]) => (
                  <tr key={label} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px 16px', color: 'var(--text)', fontWeight: 600 }}>{label}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>{email}</td>
                    <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>{linkedin}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            The highest-performing Czech B2B outreach combines both channels: email first, then a LinkedIn connection request to warm contacts who opened but did not reply. This multi-touch sequence reliably outperforms single-channel by 40–60% in reply rate.
          </p>

          {/* Section 3: Personalisation at scale */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            How to personalise outreach at scale
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            The fundamental problem with most B2B lead generation in Czech Republic is that companies send the same message to everyone. Czech decision-makers can spot a template at a glance — and delete it.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Real personalisation means reading what the company actually does before writing the message. Not just inserting the company name — referencing a specific product line, a recent expansion, a service they offer, or a challenge their industry typically faces.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            This is what our system does at scale: for each company in your target segment, we visit the website, extract the relevant context, and generate a message that could only have been written for that company. Not a template with variables filled in — a genuinely individual message.
          </p>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
            <p style={{ fontWeight: 700, marginBottom: '12px' }}>What personalisation actually looks like</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Generic (0.5% reply rate)</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>&quot;Hi [Name], I noticed [Company] might benefit from our B2B sales automation solution...&quot;</p>
              </div>
              <div>
                <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>Personalised (5–8% reply rate)</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', fontStyle: 'italic', margin: 0 }}>&quot;Dobré ráno, vidím, že Váš tým obsluhuje průmyslové klienty na Moravě — to je přesně segment, kde nám personalizované oslovení funguje nejlépe...&quot;</p>
              </div>
            </div>
          </div>

          {/* Section 4: Qualification and handoff */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Qualifying Czech leads and handing them off
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            A reply to a cold email is an expression of interest, not a qualified lead. In Czech B2B, qualification happens in the first call or sometimes through a few email exchanges before anyone gets on a call.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Minimum qualification criteria before handing off to your sales team:
          </p>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '24px' }}>
            <li><strong style={{ color: 'var(--text)' }}>Company size matches ICP</strong> — confirmed headcount or revenue in range</li>
            <li><strong style={{ color: 'var(--text)' }}>Decision-maker identified</strong> — you are talking to the right person, not reception</li>
            <li><strong style={{ color: 'var(--text)' }}>Timing confirmed</strong> — active project, budget cycle, or specific trigger event</li>
            <li><strong style={{ color: 'var(--text)' }}>Interest confirmed</strong> — they have agreed to a next step (call, demo, proposal)</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            We book first meetings directly into your calendar — we do not hand off email threads. Every meeting that lands in your calendar has passed basic qualification: right company, right person, agreed next step.
          </p>

          {/* Benchmarks box */}
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '12px', padding: '28px', marginBottom: '24px' }}>
            <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '16px' }}>Czech B2B outreach benchmarks (2026)</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '20px' }}>
              {[
                { metric: '4–8%', label: 'Email reply rate (personalised)' },
                { metric: '20–35%', label: 'LinkedIn connection acceptance' },
                { metric: '150–500', label: 'Companies contacted / month' },
                { metric: '2–4 weeks', label: 'Time to first qualified meeting' },
              ].map((item) => (
                <div key={item.metric} style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: '28px', fontWeight: 700, color: 'var(--accent)', marginBottom: '4px' }}>{item.metric}</p>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.4, margin: 0 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ marginTop: '56px', marginBottom: '56px', border: '1px solid rgba(255,107,74,0.35)', borderRadius: '16px', padding: '40px 36px', background: 'rgba(255,107,74,0.04)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, marginBottom: '12px' }}>
              We generate qualified Czech B2B leads for you
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '560px' }}>
              We research companies, run personalised email + LinkedIn outreach, and book qualified first meetings into your calendar. You focus on closing — we handle the top of funnel. Part-time from €2,800/month, full-time from €5,000/month.
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
              <Link href="/en/guides/expand-b2b-sales-to-czech-republic" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                How to Expand Your B2B Sales to Czech Republic (2026 Guide) →
              </Link>
              <Link href="/en/guides/czech-market-entry-for-b2b-companies" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Czech Market Entry for B2B Companies: A Practical Playbook →
              </Link>
              <Link href="/en/resources/czech-business-companies-register" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Search the Czech Business Register (ARES) →
              </Link>
              <Link href="/en/pricing" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Pricing: outsourced B2B sales from €2,800/month →
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
