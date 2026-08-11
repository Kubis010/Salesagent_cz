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
      ? 'Automatizované oslovování firem — cold email a LinkedIn na autopilota | SalesAgent.cz'
      : 'Automated B2B Outreach — Cold Email and LinkedIn on Autopilot | SalesAgent.cz',
    description: cs
      ? 'Automatizujeme celý outbound proces: AI napíše personalizovaný cold email pro každou firmu zvlášť, odešle ho a zároveň kontaktuje rozhodovatele na LinkedIn. Bez šablon, bez databází.'
      : 'We automate the full outbound process: AI writes a personalised cold email for each company, sends it, and simultaneously contacts decision-makers on LinkedIn. No templates, no databases.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/automatizovane-osloveni`,
      languages: {
        cs: 'https://salesagent.cz/cs/automatizovane-osloveni',
        en: 'https://salesagent.cz/en/automatizovane-osloveni',
        'x-default': 'https://salesagent.cz/cs/automatizovane-osloveni',
      },
    },
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/automatizovane-osloveni`,
      siteName: 'SalesAgent.cz',
      title: cs
        ? 'Automatizované oslovování — email i LinkedIn | SalesAgent.cz'
        : 'Automated Outreach — Email and LinkedIn | SalesAgent.cz',
      description: cs
        ? 'AI napíše unikátní email pro každou firmu a zároveň kontaktuje rozhodovatele na LinkedIn.'
        : 'AI writes a unique email for each company and simultaneously contacts decision-makers on LinkedIn.',
    },
    twitter: {
      card: 'summary_large_image',
      title: cs
        ? 'Automatizované oslovování — email i LinkedIn | SalesAgent.cz'
        : 'Automated Outreach — Email and LinkedIn | SalesAgent.cz',
      description: cs
        ? 'AI napíše unikátní email pro každou firmu a zároveň kontaktuje rozhodovatele na LinkedIn.'
        : 'AI writes a unique email for each company and simultaneously contacts decision-makers on LinkedIn.',
    },
  }
}

export default async function AutomatizovaneOsloveniPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const cs = locale === 'cs'

  const linkedInSteps = cs
    ? [
        { label: 'Navštíví profil', desc: 'AI navštíví LinkedIn profil rozhodovatele — zvýší povědomí ještě před kontaktem.' },
        { label: 'Žádost o spojení', desc: 'Odešle žádost o spojení s personalizovanou zprávou — ne šablonou, ale textem odpovídajícím tomu, co firma dělá.' },
        { label: 'Zpráva 1 — po přijetí', desc: 'Jakmile rozhodovatel přijme, přichází úvod: kdo jsme, proč se ozýváme a konkrétní hodnota pro jejich obor.' },
        { label: 'Follow-up zpráva', desc: 'Pokud není odpověď do 5–7 dní, přichází krátký follow-up. Ne push, ale připomenutí.' },
      ]
    : [
        { label: 'Profile visit', desc: 'AI visits the decision-maker\'s LinkedIn profile — building awareness before making contact.' },
        { label: 'Connection request', desc: 'Sends a connection request with a personalised note — not a template, but text tailored to what the company does.' },
        { label: 'Message 1 — after accept', desc: 'Once the decision-maker accepts, comes the intro: who we are, why we\'re reaching out, and concrete value for their industry.' },
        { label: 'Follow-up message', desc: 'If there\'s no reply within 5–7 days, a short follow-up goes out. Not a push, just a reminder.' },
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
            {cs ? 'Automatizované oslovování' : 'Automated Outreach'}
          </div>
          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(30px, 5vw, 52px)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              lineHeight: 1.1,
            }}
          >
            {cs
              ? 'Automatizované oslovování — email i LinkedIn zároveň'
              : 'Automated Outreach — Email and LinkedIn Simultaneously'}
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '620px', marginBottom: '16px' }}>
            {cs
              ? 'Celý outbound proces na jednom místě. AI napíše personalizovaný cold email pro každou firmu zvlášť — na základě toho, co přečte na jejich webu — a zároveň osloví rozhodovatele na LinkedIn.'
              : 'The full outbound process in one place. AI writes a personalised cold email for each company individually — based on what it reads on their website — and simultaneously reaches out to decision-makers on LinkedIn.'}
          </p>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '620px' }}>
            {cs
              ? 'Výsledkem je dvojitý dotek: email do schránky a zpráva na LinkedIn. Firma vás vidí na dvou místech, aniž byste museli kliknout jediné tlačítko.'
              : 'The result is a double touch: email in the inbox and a message on LinkedIn. The company sees you in two places without you having to click a single button.'}
          </p>
        </div>

        {/* Key differentiator — no templates */}
        <div style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '26px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
            }}
          >
            {cs ? 'Žádné šablony. AI čte každý web zvlášť.' : 'No templates. AI reads each website individually.'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', maxWidth: '640px', marginBottom: '32px' }}>
            {cs
              ? 'Klasické automatizace vkládají jméno firmy do šablony. My to neděláme. AI přečte web každé firmy, pochopí, co dělají, a napíše email na míru. Příjemce pozná, že mu email byl napsán — ne vygenerován.'
              : 'Classic automations insert a company name into a template. We don\'t do that. AI reads each company\'s website, understands what they do, and writes a tailored email. The recipient can tell the email was written for them — not generated from a slot.'}
          </p>

          {/* Example comparison */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="example-grid">
            <div
              style={{
                background: 'rgba(239,68,68,0.05)',
                border: '1px solid rgba(239,68,68,0.2)',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#ef4444',
                  marginBottom: '14px',
                }}
              >
                {cs ? 'Šablona s proměnnou' : 'Template with variable'}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7',
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                {cs
                  ? '"Dobrý den [Jméno], oslovuji vás ohledně našich služeb v oblasti B2B obchodu. Rádi bychom vám ukázali, jak pomáháme firmám jako [Firma] zvyšovat tržby..."'
                  : '"Hello [Name], I\'m reaching out regarding our B2B sales services. We\'d love to show you how we help companies like [Company] increase revenue..."'}
              </p>
            </div>
            <div
              style={{
                background: 'rgba(34,160,107,0.05)',
                border: '1px solid rgba(34,160,107,0.25)',
                borderRadius: '12px',
                padding: '24px',
              }}
            >
              <div
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--green)',
                  marginBottom: '14px',
                }}
              >
                {cs ? 'AI personalizace' : 'AI personalisation'}
              </div>
              <p
                style={{
                  fontSize: '14px',
                  color: 'var(--text-muted)',
                  lineHeight: '1.7',
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                {cs
                  ? '"Dobrý den Petře, všiml jsem si, že na vašem webu zdůrazňujete dodávky do 24h — to je přesně to, co naši klienti v logistice hledají, když řeší akvizici nových přepravců..."'
                  : '"Hi Peter, I noticed your website highlights 24-hour delivery — that\'s exactly what our logistics clients look for when acquiring new carriers to handle their volumes..."'}
              </p>
            </div>
          </div>
        </div>

        {/* LinkedIn sequence */}
        <div style={{ marginBottom: '48px' }}>
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '26px',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: '28px',
            }}
          >
            {cs ? 'LinkedIn sekvence krok za krokem' : 'LinkedIn sequence step by step'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {linkedInSteps.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  paddingBottom: '28px',
                  marginBottom: '28px',
                  borderBottom: i < linkedInSteps.length - 1 ? '1px solid var(--border)' : 'none',
                }}
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: 'rgba(255,107,74,0.12)',
                    border: '1px solid rgba(255,107,74,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontFamily: 'monospace',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontSize: '17px',
                      fontWeight: 700,
                      marginBottom: '6px',
                    }}
                  >
                    {step.label}
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Who handles replies */}
        <div
          style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '14px',
            padding: '36px',
            marginBottom: '48px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '22px',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              marginBottom: '12px',
            }}
          >
            {cs ? 'Kdo vyřizuje odpovědi?' : 'Who handles replies?'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.7', margin: 0 }}>
            {cs
              ? 'SalesAgent zajišťuje výhradně outbound — vyhledávání, personalizaci a odesílání. Odpovědi od zájemců přijdou do vaší emailové schránky nebo LinkedIn zpráv. Vy reagujete osobně a domluvíte schůzku nebo upřesníte poptávku. Neprodáváte přes robota — robota máte na generování příležitostí.'
              : 'SalesAgent handles exclusively the outbound — finding, personalising and sending. Replies from interested prospects land in your email inbox or LinkedIn messages. You respond personally and arrange a meeting or clarify the enquiry. You don\'t sell through a robot — you use the robot to generate opportunities.'}
          </p>
        </div>

        {/* CTA */}
        <div
          style={{
            background: 'rgba(255,107,74,0.06)',
            border: '1px solid rgba(255,107,74,0.25)',
            borderRadius: '14px',
            padding: '36px',
            textAlign: 'center',
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
            {cs ? 'Zajímá vás, jak by to fungovalo pro vás?' : 'Interested in how this would work for you?'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px' }}>
            {cs
              ? 'Na krátkém hovoru ukážeme, jak by vypadala personalizace pro vaše firmy a jaký objem oslovení připravujeme.'
              : 'On a short call we\'ll show what personalisation would look like for your target companies and what outreach volume we prepare.'}
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
            {cs ? 'Domluvit hovor o automatizovaném oslovení' : 'Book a call about automated outreach'}
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .example-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
