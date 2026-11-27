import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { marketEntryLanguages } from '@/lib/market-entry-languages'

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
      'Czech B2B market entry: hire sales vs. open a Czech entity, compare costs and risks, validate demand and find your first customers.',
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
      languages: marketEntryLanguages,
    },
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: 'https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies',
      siteName: 'SalesAgent.cz',
      title: 'Czech Market Entry for B2B Companies: A Practical Playbook',
      description: 'Czech B2B market entry: hire sales vs. open a Czech entity, compare costs and risks, validate demand and find your first customers.',
      modifiedTime: '2026-11-27',
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
        text: 'The registration court generally has five working days to register a company if the application is in order. Preparing documents, translations and the required authorisations adds time. An s.r.o. requires a notarised founding deed and a registered address. Market validation can begin before incorporation where appropriate.',
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
    {
      '@type': 'Question',
      name: 'Do I need a Czech company to sell in the Czech Republic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not simply to start testing demand. A foreign company can explore Czech B2B sales through its existing entity and an external sales representative. Local contracts, invoicing, employment and operational presence need a separate legal and tax assessment; they do not all automatically require a Czech s.r.o. Review the setup before committing to local operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to register for Czech VAT?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not necessarily. For some cross-border B2B services, the Czech customer accounts for VAT under reverse charge. The rules depend on the supply, customer and any local establishment or stock; confirm your specific position with a tax adviser.' },
    },
    {
      '@type': 'Question',
      name: 'How long is the notice period in the Czech Republic?',
      acceptedAnswer: { '@type': 'Answer', text: 'The statutory notice period is generally at least two months and starts when notice is delivered, unless lawfully agreed otherwise. At least one month applies for certain employee-related reasons; check the contract and circumstances.' },
    },
    {
      '@type': 'Question',
      name: 'What does market entry into the Czech Republic cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compare the full commitment, not just incorporation fees. Entity-first entry adds corporate and secretarial services, accounting, a registered address and potentially payroll before demand is proven. Sales-first entry starts with a paid, time-boxed market test whose fee, scope and capacity are agreed individually. SalesAgent does not work on a commission-only basis. Add delivery and compliance costs to either option.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can a foreign company test demand in the Czech market without hiring?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use an external sales representative for a paid 2–3 month test: agree a narrow Czech customer segment, research target companies and decision-makers, personalise compliant outreach, qualify replies and book first meetings. Review objections, meeting quality and pipeline before deciding whether to continue, hire local sales staff or establish a Czech entity.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest way to test the Czech and Slovak market?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'One option is a time-boxed outbound test of 60–90 days: select one segment, verify a target list against public registers such as ARES, run personalised outreach and review the results before committing to a local hire or entity. Fees and scope are agreed individually.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Czech Market Entry for B2B Companies: A Practical Playbook',
  description:
    'Czech B2B market entry: hire sales vs. open a Czech entity, compare costs and risks, validate demand and find your first customers.',
  image: 'https://salesagent.cz/guides/czech-market-entry-guide.jpg',
  datePublished: '2026-08-28',
  dateModified: '2026-11-27',
  inLanguage: 'en',
  keywords: 'czech market entry, market entry czech republic, czech market entry b2b, market entry slovakia, entity vs no entity czech republic',
  about: [
    { '@type': 'Thing', name: 'Market entry' },
    { '@type': 'Country', name: 'Czech Republic' },
    { '@type': 'Country', name: 'Slovakia' },
  ],
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: {
    '@type': 'Organization',
    name: 'Sales Robots s.r.o.',
    url: 'https://salesagent.cz',
    logo: { '@type': 'ImageObject', url: 'https://salesagent.cz/logo.svg' },
  },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies' },
  url: 'https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to validate the Czech market in 90 days',
  description: 'A 90-day plan to test Czech B2B demand before committing to a local entity or hire.',
  totalTime: 'P90D',
  step: [
    { '@type': 'HowToStep', name: 'Days 1–14: prepare', text: 'Select one narrow segment, check the offer, prepare English and Czech messaging and build a verified target list.' },
    { '@type': 'HowToStep', name: 'Days 15–45: run outreach', text: 'Run a small personalised email and LinkedIn sequence; record replies, objections, language preference and meeting quality.' },
    { '@type': 'HowToStep', name: 'Days 46–75: refine', text: 'Refine the ICP and offer around real conversations, then test a second segment or message.' },
    { '@type': 'HowToStep', name: 'Days 76–90: decide', text: 'Decide whether to scale outreach, add a local partner, hire, or establish a Czech entity.' },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://salesagent.cz/en' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://salesagent.cz/en/resources' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <div style={{ paddingTop: '96px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

          {/* Breadcrumb */}
          <nav style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px', display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Link href="/en" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <Link href="/en/resources" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Resources</Link>
            <span>/</span>
            <span style={{ color: 'var(--text)' }}>Czech Market Entry</span>
          </nav>

          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
            Playbook · By SalesAgent.cz, Sales Robots s.r.o. · Updated <time dateTime="2026-11-27">27 November 2026</time>
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

          <p style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', marginBottom: '24px' }}>
            <strong>How do you enter the Czech market?</strong> You can sell cross-border from your existing company, work with a local sales agent or distributor, register a branch (<em>odštěpný závod</em>), or form a Czech subsidiary, usually an s.r.o. You do not need a Czech company simply to start approaching Czech buyers. Choose your operating structure with regard to demand and the legal and tax requirements of your activity.
          </p>

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

          {/* Consolidated sales-first vs. entity-first decision, formerly a separate blog. */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Hire a salesperson or open a Czech entity first?
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Hiring a local sales representative and opening a Czech company solve different problems. A salesperson tests and develops demand; an entity provides an operating structure. If you do not yet know which Czech buyers want your product, neither an office nor incorporation will answer that commercial question. Compare the commitment of each route before choosing your Czech market entry strategy.
          </p>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, marginTop: '28px', marginBottom: '12px' }}>
            Entity-first: corporate services before commercial validation
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            The traditional route starts with corporate and secretarial services in the Czech Republic: incorporation of an s.r.o. or assessment of a branch, a registered address, accounting and applicable registrations. Local recruitment, office space and operational support may follow. This can suit a committed expansion, but setup activity is not evidence of demand: the business carries recurring overhead before it knows which accounts will buy, which objections matter or how long a sale takes.
          </p>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, marginTop: '28px', marginBottom: '12px' }}>
            Sales-first: test Czech demand without a local hire
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            An external sales representative in the Czech Republic can research your segment, contact relevant decision-makers in your name and qualify first conversations before you build a local team. Our people lead this work, supported by AI research and personalisation tools. A paid 2–3 month test can be arranged with fee, scope and capacity agreed upfront; this is not free validation or a commission-only engagement. The test produces evidence for the next investment, not a guarantee of revenue.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '560px' }}>
              <caption style={{ textAlign: 'left', fontWeight: 700, marginBottom: '12px' }}>Sales-first vs. entity-first: cost, speed and risk</caption>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                  <th scope="col" style={{ padding: '10px 12px' }}>Decision factor</th>
                  <th scope="col" style={{ padding: '10px 12px' }}>Entity-first</th>
                  <th scope="col" style={{ padding: '10px 12px' }}>Sales-first market test</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-muted)' }}>
                {[
                  ['Time to start', 'Depends on incorporation, registrations and recruitment', 'Outreach preparation can begin once scope, accounts and legal basis are agreed'],
                  ['Upfront commitment', 'Corporate services and operating overhead before validation', 'Paid, defined test; no local office or permanent sales hire at the outset'],
                  ['Main risk', 'Investing in infrastructure before proving buyer demand', 'Paying for a test that may reveal insufficient demand'],
                  ['Revenue timeline', 'Entity setup alone does not create a pipeline', 'First conversations can build a pipeline; closed revenue is not guaranteed'],
                  ['Best fit', 'Proven demand and a clear local operating requirement', 'An untested segment, offer or route to market'],
                ].map(([factor, entity, sales]) => (
                  <tr key={factor} style={{ borderBottom: '1px solid var(--border)' }}>
                    <th scope="row" style={{ padding: '12px', textAlign: 'left', color: 'var(--text)' }}>{factor}</th>
                    <td style={{ padding: '12px' }}>{entity}</td>
                    <td style={{ padding: '12px' }}>{sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, marginTop: '28px', marginBottom: '12px' }}>
            When a Czech entity becomes relevant
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Most international companies assume they need a Czech s.r.o. (limited liability company) before they can sell there. This is not true. You can legally sell to Czech companies as a foreign entity under a commercial representative arrangement, through an outsourced sales agency, or via a distributor.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Assess a Czech entity or another compliant local operating arrangement when:
          </p>
          <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '16px' }}>
            <li>You want to hire Czech employees on a Czech employment contract</li>
            <li>Your transactions may require Czech VAT registration; see the VAT section below</li>
            <li>You plan to hold inventory, physical assets, or a local bank account in CZ</li>
          </ul>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            A local contract or hire does not by itself settle the legal structure. For example, EU guidance distinguishes employer registration in the country of work from where the employer is based. Check employment, tax and operational requirements with a qualified adviser rather than assuming every local activity requires incorporation. See <a href="https://europa.eu/youreurope/business/hiring-managing-staff/social-security-health/paying-contributions/index_en.htm" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Your Europe on employer registration and social security</a>.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            For most early-stage Czech market entry, you can invoice in EUR from your existing entity. Czech companies are accustomed to receiving invoices from EU-based foreign suppliers.
          </p>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
            <p style={{ fontWeight: 700, marginBottom: '8px' }}>Entity setup timeline and cost (2026)</p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
              The court generally has five working days to register a company when the application is in order; preparing documents, translations, authorisations and banking can add time. Our indicative estimate for incorporation starts at approximately €300, with the total depending on the circumstances and services required. Accounting and payroll are additional. An Employer of Record may be an alternative for a local hire without a Czech subsidiary.
            </p>
          </div>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Czech market entry options compared
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Six practical routes offer different levels of local presence, control and commitment. The right choice depends on your product, customers and regulatory obligations.
          </p>
          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '560px' }}>
              <thead>
                <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                  <th scope="col" style={{ padding: '10px 12px' }}>Route</th>
                  <th scope="col" style={{ padding: '10px 12px' }}>Separate Czech legal entity</th>
                  <th scope="col" style={{ padding: '10px 12px' }}>Set-up</th>
                  <th style={{ padding: '10px 12px' }}>Best when</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--text-muted)' }}>
                {[
                  ['Cross-border sales', 'No', 'Use your existing company; check VAT and other requirements', 'Remote delivery and testing demand'],
                  ['Sales representative or agency', 'No', 'Service or agency contract', 'First meetings and local market feedback'],
                  ['Distributor or reseller', 'No; the partner is a separate business', 'Distribution contract', 'Physical goods, local stock and service'],
                  ['Branch (odštěpný závod)', 'No', 'Registration in the Commercial Register', 'A registered local presence of the foreign company'],
                  ['Subsidiary (s.r.o.)', 'Yes', 'Notarised founding deed, required trade licence and Commercial Register entry', 'A lasting local operation'],
                  ['Employer of Record', 'No', 'A third party employs the person', 'A local hire before incorporating'],
                ].map((row) => (
                  <tr key={row[0]} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '12px', color: 'var(--text)', fontWeight: 600 }}>{row[0]}</td>
                    <td style={{ padding: '12px' }}>{row[1]}</td>
                    <td style={{ padding: '12px' }}>{row[2]}</td>
                    <td style={{ padding: '12px' }}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <section>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, margin: '48px 0 16px' }}>Czech setup, tax and employment facts (2026–2027)</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>Checked on 27 November 2026. General information, not legal or tax advice.</p>
            <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '560px', fontSize: '14px' }}>
                <thead><tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}><th style={{ padding: '10px' }}>Topic</th><th style={{ padding: '10px' }}>Fact</th><th style={{ padding: '10px' }}>Source</th></tr></thead>
                <tbody style={{ color: 'var(--text-muted)' }}>
                  {[
                    ['s.r.o. contribution', 'At least CZK 1 per contribution unless the founding documents set a higher amount.', 'Business Corporations Act, § 142', 'https://www.zakonyprolidi.cz/cs/2012-90'],
                    ['Commercial Register', 'The court generally has five working days to register an application that is in order.', 'Czech public administration', 'https://portal.gov.cz/en/informace/incorporation-and-formation-of-a-business-corporation-INF-222'],
                    ['Corporate tax and VAT', 'Standard corporate income tax is 21%; the standard VAT rate is 21% and the reduced rate is 12%.', 'CzechInvest', 'https://czechinvest.gov.cz/en/For-Investors/Doing-business-in-Czechia/Taxation-system'],
                    ['Employer contributions', 'Generally 24.8% social security and 9% health insurance, based on gross pay; social security has an annual cap.', 'Czech Social Security Administration and VZP', 'https://www.cssz.gov.cz/web/lang/sazby-pojistneho?lang=en'],
                    ['Minimum wage', 'CZK 22,400 per month in 2026; CZK 24,900 from 1 January 2027, for a 40-hour working week.', 'Ministry of Labour', 'https://ppropo.mpsv.cz/xviii1minimalnimzdaanejnizsiurov'],
                    ['Working week and probation', 'The standard working week is 40 hours. Probation may be up to four months, or eight months for managers.', 'Labour Code, §§ 35 and 79', 'https://www.zakonyprolidi.cz/cs/2006-262'],
                    ['Notice period', 'Generally at least two months, starting when notice is delivered unless lawfully agreed otherwise; at least one month for certain employee-related reasons.', 'Labour Code, §§ 51–52', 'https://www.zakonyprolidi.cz/cs/2006-262'],
                    ['Data box', 'Registered legal entities receive a data box. Messages can be deemed delivered after ten days even if unopened, subject to statutory exceptions.', 'Act on electronic acts, §§ 5 and 17', 'https://www.zakonyprolidi.cz/cs/2008-300'],
                  ].map(([topic, fact, source, url]) => <tr key={topic} style={{ borderBottom: '1px solid var(--border)' }}><th scope="row" style={{ textAlign: 'left', padding: '12px', color: 'var(--text)' }}>{topic}</th><td style={{ padding: '12px' }}>{fact}</td><td style={{ padding: '12px' }}><a href={url} style={{ color: 'var(--accent)' }}>{source}</a></td></tr>)}
                </tbody>
              </table>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, margin: '28px 0 12px' }}>Do you need Czech VAT registration to sell B2B services?</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>Not necessarily. For some cross-border B2B services, the Czech customer accounts for VAT under reverse charge, so the foreign supplier need not register solely for that transaction. The outcome depends on the service, customer and whether the supplier has a local establishment. Consumer sales, Czech stock and other supplies may be treated differently. Check your situation with a tax adviser; see the <a href="https://www.zakonyprolidi.cz/cs/2004-235" style={{ color: 'var(--accent)' }}>VAT Act</a>.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, margin: '48px 0 16px' }}>How to check a Czech company before you contact or sign</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75 }}>Start with ARES to check the company ID (IČO), legal form, address and registered activities. The Commercial Register provides information on directors, shareholders of an s.r.o. and filed documents. The beneficial ownership register has not been publicly accessible since 17 December 2025. Our <Link href="/en/resources/czech-business-companies-register" style={{ color: 'var(--accent)' }}>guide to Czech business registers</Link> explains how to search them.</p>
          </section>
          <section>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, margin: '48px 0 16px' }}>Which agency can help you enter the Czech market?</h2>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.85 }}>
              <li><a href="https://czechinvest.gov.cz/en" style={{ color: 'var(--accent)' }}>CzechInvest</a> supports investors setting up operations in Czechia.</li>
              <li><a href="https://czechtrade.gov.cz/" style={{ color: 'var(--accent)' }}>CzechTrade</a> primarily supports Czech businesses exporting abroad.</li>
              <li>Bilateral chambers of commerce can offer introductions and networking.</li>
              <li>Legal, tax and accounting firms can advise on incorporation, VAT and payroll.</li>
              <li><Link href="/en/sales-representation-czech-republic" style={{ color: 'var(--accent)' }}>SalesAgent.cz</Link> researches target accounts, contacts decision-makers in your name and books first meetings. We do not provide legal or tax advice.</li>
            </ul>
          </section>

          <section id="competitor-analysis">
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
              Competitor analysis for market entry in the Czech Republic
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              A Czech market entry strategy needs more than a list of registered companies. Before
              launching outreach, identify who already serves your target customers, how those
              competitors position their offers, and why a buyer would consider switching. Include
              local suppliers, international brands represented by Czech distributors, and the
              customer&apos;s option of keeping the work in-house.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              We can prepare this competitor analysis for you as part of planning your B2B market
              entry in the Czech Republic. We agree the target segment and scope with you, then
              review publicly available information to build a practical comparison:
            </p>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '24px' }}>
              <li><strong>Competitor map:</strong> relevant suppliers, distributors and alternatives in your segment.</li>
              <li><strong>Offer and positioning:</strong> target customers, product scope, service model, local references and routes to market.</li>
              <li><strong>Published pricing:</strong> prices and commercial terms where available, with gaps clearly marked rather than estimated.</li>
              <li><strong>Outreach hypotheses:</strong> which buyer roles to approach, what could differentiate your offer, and which objections to test.</li>
            </ul>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
              The output is a competitor comparison and a set of recommendations for your first
              market test. Public information shows how competitors present themselves; conversations
              with Czech prospects help establish what buyers actually value. We use both to refine
              your message and target list before you commit to a local team or office.{' '}
              <Link href="/en/contact" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                Discuss competitor analysis for your Czech market entry
              </Link>.
            </p>
          </section>

          {/* Section 2b: Market entry decision framework */}
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            A practical Czech market entry decision framework
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Before you invest in Czech Republic operations, choose an entry model around the type of sale, not company size alone. A software company with a remote implementation process does not need the same setup as an industrial supplier with local stock, installation, and after-sales service. Before opening an entity, map the commercial requirements of your first ten target accounts.
          </p>
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
            {[
              { title: 'Remote delivery', body: 'If onboarding, support, and delivery can happen remotely, start with direct sales from your existing EU entity and localised outreach.' },
              { title: 'Local trust requirement', body: 'If buyers need Czech-language calls, references, or a local point of contact, add a Czech-speaking sales layer before adding a legal entity.' },
              { title: 'Operational presence', body: 'If the offer needs inventory, technicians, a warehouse, or local employment, model the entity and tax implications with a qualified local adviser.' },
              { title: 'Regulated or public-sector sales', body: 'Check procurement, certification, data-processing, VAT, and contract requirements before promising a launch date.' },
            ].map((item) => (
              <div key={item.title} style={{ borderBottom: '1px solid var(--border)', padding: '14px 0' }}>
                <p style={{ fontWeight: 700, marginBottom: '5px' }}>{item.title}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            A 90-day validation plan before committing to Czech infrastructure
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            A market test should answer commercial questions, not create the illusion of activity. Agree on one narrow ICP, a realistic number of target accounts, the message and the definition of a qualified response. Then review the results every two weeks and change one variable at a time.
          </p>
          <ol style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.9, marginBottom: '24px' }}>
            <li><strong>Days 1–14:</strong> select the segment, check the offer, prepare English and Czech messaging, and build a verified target list.</li>
            <li><strong>Days 15–45:</strong> run a small personalised email and LinkedIn sequence; record replies, objections, language preference, and meeting quality.</li>
            <li><strong>Days 46–75:</strong> refine the ICP and offer around real conversations, then test a second segment or message.</li>
            <li><strong>Days 76–90:</strong> decide whether to scale outreach, add a local partner, hire, or establish a Czech entity.</li>
          </ol>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            The output should be a short market-entry decision: which segment responded, which buyer role engaged, which objections repeated, what a first customer costs to acquire, and what local investment is justified by the evidence.
          </p>
          <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '20px', fontWeight: 700, marginTop: '28px', marginBottom: '12px' }}>
            From market test to local sales hiring or incorporation
          </h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Test first, validate the economics, then commit: hire a local salesperson when recurring opportunities justify dedicated coverage; assess incorporation when delivery, procurement or operational requirements justify it. Before signing with a partner, use the <Link href="/en/resources/czech-business-companies-register" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Czech business register (ARES)</Link> for company due diligence. For a broader <Link href="/blog/how-to-expand-your-business-and-sales-to-the-european-union" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>European sales expansion</Link>, validate one segment here before repeating the approach in another market.
          </p>

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
              title: 'Follow up and review the response',
              body: 'One approach is to send an initial email and one follow-up, then review the replies and adapt the next step to the audience and applicable rules.',
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

          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px', marginTop: '8px' }}>
            Want us to test the Czech market for you?{' '}
            <Link href="/en/sales-representation-czech-republic" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>Czech market entry services →</Link>
          </p>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '26px', fontWeight: 700, marginBottom: '16px', marginTop: '48px' }}>
            Extending from the Czech Republic to Slovakia
          </h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '16px' }}>
            Slovakia is the natural second step: a shared business culture, mutually intelligible languages and many buyers who deal with Czech and Slovak suppliers interchangeably. Once one segment responds in the Czech Republic, the same target-list method (Slovak business register instead of ARES) and message can be reused with Slovak-language follow-up, so market entry into both countries runs from one pipeline.
          </p>
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
              body: 'Hiring before testing demand adds recruitment and employment commitments before you know which customers will buy. Consider validating demand through an appropriately scoped market test first.',
            },
            {
              title: 'Using bought contact databases',
              body: 'Bought contact lists can be outdated. Verify each company against ARES and research the individual contact before outreach.',
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
              We act as your external sales team in Czech Republic
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '24px', maxWidth: '560px' }}>
              Our agents personally research Czech companies in your segment, contact decision-makers by email and LinkedIn, and book first meetings — all in your name. No Czech entity, no local hire needed. You get qualified meetings; we handle the outreach.
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
              href="/en/contact"
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

          <div style={{ marginTop: '40px', marginBottom: '40px', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '16px', padding: '28px' }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '18px', fontWeight: 700, marginBottom: '10px' }}>Want us to test the Czech market for you?</p>
            <Link href="/en/sales-representation-czech-republic" style={{ color: 'var(--accent)', textDecoration: 'none', fontWeight: 600, fontSize: '15px' }}>
              Czech market entry services →
            </Link>
          </div>
          <section style={{ marginTop: '48px' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', marginBottom: '16px' }}>Sources</h2>
            <ul style={{ paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: 1.9 }}>
              {[
                ['Business Corporations Act', 'https://www.zakonyprolidi.cz/cs/2012-90'],
                ['Commercial Register and incorporation — public administration', 'https://portal.gov.cz/en/informace/incorporation-and-formation-of-a-business-corporation-INF-222'],
                ['CzechInvest: taxation system', 'https://czechinvest.gov.cz/en/For-Investors/Doing-business-in-Czechia/Taxation-system'],
                ['VAT Act', 'https://www.zakonyprolidi.cz/cs/2004-235'],
                ['Social security contributions — ČSSZ', 'https://www.cssz.gov.cz/web/lang/sazby-pojistneho?lang=en'],
                ['Health insurance contributions — VZP', 'https://www.vzp.cz/platci/informace/povinnosti-platcu-metodika/2-4-platce-pojistneho-zamestnavatel'],
                ['Minimum wage — Ministry of Labour', 'https://ppropo.mpsv.cz/xviii1minimalnimzdaanejnizsiurov'],
                ['Labour Code', 'https://www.zakonyprolidi.cz/cs/2006-262'],
                ['Electronic acts and data boxes', 'https://www.zakonyprolidi.cz/cs/2008-300'],
                ['Beneficial ownership register — Ministry of Justice', 'https://esm.justice.cz/ias/issm/napoveda'],
                ['ARES', 'https://ares.gov.cz/'],
              ].map(([label, url]) => <li key={url}><a href={url} style={{ color: 'var(--accent)' }}>{label}</a></li>)}
            </ul>
          </section>

          {/* Related */}
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Related guides</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/en/sales-representation-czech-republic" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Sales Representation in the Czech Republic →
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
