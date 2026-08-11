import type { Metadata } from 'next'

const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const cs = locale === 'cs'
  return {
    title: cs
      ? 'B2B Lead Generation pomocí AI — generování leadů bez databází | SalesAgent.cz'
      : 'B2B Lead Generation with AI — No Databases Needed | SalesAgent.cz',
    description: cs
      ? 'Generujeme B2B leady přímo z webu: AI prohledá Google Maps, prostuduje web každé firmy a vybere jen ty, co sedí vašemu ICP. Žádná databáze, žádný obchodník na rešerše.'
      : 'We generate B2B leads directly from the web: AI searches Google Maps, reads each company website and selects only those matching your ICP. No database, no SDR doing research.',
    keywords: cs
      ? ['generování leadů', 'B2B lead generation', 'generování B2B leadů', 'AI lead generation', 'vyhledávání firem', 'B2B prospecting']
      : ['B2B lead generation', 'AI lead generation', 'lead generation without database', 'automated prospecting'],
    alternates: {
      canonical: `https://salesagent.cz/${locale}/b2b-lead-generation`,
      languages: {
        cs: 'https://salesagent.cz/cs/b2b-lead-generation',
        en: 'https://salesagent.cz/en/b2b-lead-generation',
        'x-default': 'https://salesagent.cz/cs/b2b-lead-generation',
      },
    },
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/b2b-lead-generation`,
      siteName: 'SalesAgent.cz',
      title: cs
        ? 'B2B Lead Generation pomocí AI — bez databází | SalesAgent.cz'
        : 'B2B Lead Generation with AI — No Databases Needed | SalesAgent.cz',
      description: cs
        ? 'AI prohledá Google Maps a web každé firmy — výstupem jsou leady připravené k oslovení.'
        : 'AI searches Google Maps and each company website — delivering leads ready to contact.',
    },
    twitter: {
      card: 'summary_large_image',
      title: cs
        ? 'B2B Lead Generation pomocí AI — bez databází | SalesAgent.cz'
        : 'B2B Lead Generation with AI — No Databases Needed | SalesAgent.cz',
      description: cs
        ? 'AI prohledá Google Maps a web každé firmy — výstupem jsou leady připravené k oslovení.'
        : 'AI searches Google Maps and each company website — delivering leads ready to contact.',
    },
  }
}

export default async function B2BLeadGenerationPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const cs = locale === 'cs'

  const steps = cs
    ? [
        { num: '01', title: 'Definujeme ICP', body: 'Společně upřesníme obor, region a velikost firem, které chcete oslovit. Čím konkrétnější ICP, tím relevantnější leady.' },
        { num: '02', title: 'AI prohledá Google Maps a webové zdroje', body: 'Místo databáze jdeme přímo ke zdroji. AI systematicky prochází Google Maps, firemní registry a veřejné weby a sbírá aktuální data.' },
        { num: '03', title: 'Každý web je prostudován a vyhodnocen', body: 'AI přečte web každé nalezené firmy, pochopí, co dělá, a rozhodne, jestli sedí vašemu ICP. Nevyhovující firmy jsou vyřazeny.' },
        { num: '04', title: 'Výstupem jsou firmy připravené k oslovení', body: 'Dostanete seznam firem, které prošly filtrem ICP — s kontakty, webem a důvodem, proč jsme je vybrali. Připraveno k oslovení.' },
      ]
    : [
        { num: '01', title: 'Define your ICP', body: 'We clarify together which industry, region and company size you want to target. The more specific the ICP, the more relevant the leads.' },
        { num: '02', title: 'AI searches Google Maps and web sources', body: 'Instead of a database, we go straight to the source. AI systematically crawls Google Maps, company registries and public websites to gather fresh data.' },
        { num: '03', title: 'Every website is studied and evaluated', body: 'AI reads each company\'s website, understands what they do, and decides whether they match your ICP. Non-matching companies are filtered out.' },
        { num: '04', title: 'Output: companies ready to contact', body: 'You receive a list of companies that passed the ICP filter — with contacts, website and the reason they were selected. Ready to reach out.' },
      ]

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>

        {/* Hero */}
        <div style={{ marginBottom: '64px' }}>
          <div
            className="font-mono-data"
            style={{ fontSize: '13px', color: 'var(--accent)', fontWeight: 500, marginBottom: '16px', letterSpacing: '0.05em', textTransform: 'uppercase' }}
          >
            {cs ? 'B2B Lead Generation' : 'B2B Lead Generation'}
          </div>
          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(32px, 5vw, 54px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            {cs ? 'Generování B2B leadů bez databází' : 'B2B Lead Generation Without Databases'}
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '620px', marginBottom: '16px' }}>
            {cs
              ? 'Tradiční lead databáze jako Apollo nebo Lusha jsou drahé, zastaralé a všichni z nich kontaktují stejné firmy. My jdeme jinak — generujeme leady přímo z webu, aktuálně, pro každou kampaň znovu.'
              : 'Traditional lead databases like Apollo or Lusha are expensive, outdated, and everyone contacts the same companies from them. We do it differently — generating leads directly from the web, fresh, for each campaign.'}
          </p>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '620px' }}>
            {cs
              ? 'AI prohledá Google Maps a veřejné zdroje, prostuduje web každé nalezené firmy a vybere jen ty, které sedí vašemu ideálnímu zákazníkovi. Výsledkem je váš vlastní, aktuální seznam — nikoli pronajatá databáze, kterou používá i vaše konkurence.'
              : 'AI searches Google Maps and public sources, reads each company\'s website, and selects only those matching your ideal customer profile. The result is your own, up-to-date list — not a rented database your competitors also use.'}
          </p>
        </div>

        {/* Process steps */}
        <div style={{ marginBottom: '64px' }}>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '26px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '36px',
            }}
          >
            {cs ? 'Jak to funguje' : 'How it works'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '28px',
                  paddingBottom: '36px',
                  marginBottom: '36px',
                  borderBottom: i < steps.length - 1 ? '1px solid var(--border)' : 'none',
                  alignItems: 'start',
                }}
                className="step-row"
              >
                <div
                  className="font-mono-data"
                  style={{
                    fontSize: '32px',
                    fontWeight: 700,
                    color: 'rgba(255,107,74,0.3)',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    paddingTop: '4px',
                  }}
                >
                  {step.num}
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '19px',
                      fontWeight: 700,
                      letterSpacing: '-0.01em',
                      marginBottom: '8px',
                    }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison box */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '36px',
            marginBottom: '32px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              marginBottom: '28px',
            }}
          >
            {cs ? 'Databáze vs. SalesAgent' : 'Database vs. SalesAgent'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="compare-grid">
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                {cs ? 'Databáze (Apollo, Lusha…)' : 'Database (Apollo, Lusha…)'}
              </div>
              {(cs
                ? ['Zastaralá data', 'Všichni kontaktují stejné firmy', 'Placená ročně, bez ohledu na výsledky', 'Kontakty bez kontextu']
                : ['Outdated data', 'Everyone contacts the same companies', 'Paid annually, regardless of results', 'Contacts without context']
              ).map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '16px', lineHeight: '1.5', flexShrink: 0 }}>✕</span>
                  <span style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
            <div>
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: '16px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid rgba(255,107,74,0.25)',
                }}
              >
                SalesAgent.cz
              </div>
              {(cs
                ? ['Aktuální data z webu, pokaždé čerstvá', 'Váš vlastní seznam, nikdo jiný ho nemá', 'Zahrnuté ve službě, platíte za výsledky', 'Každá firma prostudována a odůvodněna']
                : ['Fresh data from the web, every time', 'Your own list, nobody else has it', 'Included in the service, you pay for results', 'Each company studied and justified']
              ).map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '10px' }}>
                  <span style={{ color: 'var(--green)', fontWeight: 700, fontSize: '16px', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                  <span style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            background: 'rgba(255,107,74,0.06)',
            border: '1px solid rgba(255,107,74,0.25)',
            borderRadius: '14px',
            padding: '36px',
            textAlign: 'center',
            marginTop: '48px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '24px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '12px',
            }}
          >
            {cs ? 'Chcete vidět, jak to funguje pro váš obor?' : 'Want to see how it works for your industry?'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px' }}>
            {cs
              ? 'Na úvodním hovoru projdeme váš ICP a ukážeme, kolik firem bychom pro vás mohli najít.'
              : 'On an intro call we\'ll go through your ICP and show how many companies we could find for you.'}
          </p>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              backgroundColor: 'var(--accent)',
              color: '#0B1320',
              fontWeight: 700,
              fontSize: '15px',
              padding: '14px 28px',
              borderRadius: '8px',
              textDecoration: 'none',
            }}
          >
            {cs ? 'Domluvit hovor o lead generation' : 'Book a lead generation call'}
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .step-row {
            grid-template-columns: 1fr !important;
            gap: 8px !important;
          }
          .compare-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
