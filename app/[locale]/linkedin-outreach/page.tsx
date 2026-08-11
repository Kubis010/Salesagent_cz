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
      ? 'LinkedIn Outreach Automatizace — oslovujte B2B kontakty na LinkedIn | SalesAgent.cz'
      : 'LinkedIn Outreach Automation — Reach B2B Decision-Makers at Scale | SalesAgent.cz',
    description: cs
      ? 'Automatizujeme LinkedIn outreach: AI najde rozhodovatele, navštíví profil, odešle žádost o spojení s osobní zprávou a follow-up sekvenci. Bez ručního klikání, bez rizika banů.'
      : 'Automated LinkedIn outreach: AI finds decision-makers, visits profiles, sends connection requests with personal notes and a follow-up sequence. No manual clicking, no ban risk.',
    keywords: cs
      ? ['LinkedIn outreach', 'LinkedIn automatizace', 'LinkedIn B2B', 'oslovování na LinkedIn', 'LinkedIn prospecting']
      : ['LinkedIn outreach automation', 'LinkedIn B2B outreach', 'automated LinkedIn prospecting'],
    alternates: {
      canonical: `https://salesagent.cz/${locale}/linkedin-outreach`,
      languages: {
        cs: 'https://salesagent.cz/cs/linkedin-outreach',
        en: 'https://salesagent.cz/en/linkedin-outreach',
        'x-default': 'https://salesagent.cz/cs/linkedin-outreach',
      },
    },
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/linkedin-outreach`,
      siteName: 'SalesAgent.cz',
      title: cs
        ? 'LinkedIn Outreach Automatizace — bezpečně a personalizovaně | SalesAgent.cz'
        : 'LinkedIn Outreach Automation — Safe and Personalised | SalesAgent.cz',
      description: cs
        ? 'AI oslovuje rozhodovatele na LinkedIn — bez ručního klikání, bez šablon, bez rizika banů.'
        : 'AI reaches decision-makers on LinkedIn — no manual clicking, no templates, no ban risk.',
    },
    twitter: {
      card: 'summary_large_image',
      title: cs
        ? 'LinkedIn Outreach Automatizace — bezpečně a personalizovaně | SalesAgent.cz'
        : 'LinkedIn Outreach Automation — Safe and Personalised | SalesAgent.cz',
      description: cs
        ? 'AI oslovuje rozhodovatele na LinkedIn — bez ručního klikání, bez šablon, bez rizika banů.'
        : 'AI reaches decision-makers on LinkedIn — no manual clicking, no templates, no ban risk.',
    },
  }
}

export default async function LinkedInOutreachPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const cs = locale === 'cs'

  const sequence = cs
    ? [
        { label: 'Najde jméno a pozici rozhodovatele', desc: 'AI identifikuje jednatele, obchodního ředitele nebo CEO — podle toho, kdo má rozhodovací pravomoc v oboru a velikosti firmy.' },
        { label: 'Navštíví LinkedIn profil', desc: 'Profilová návštěva zvýší povědomí ještě před kontaktem. Rozhodovatel vidí, že někdo z oboru projevil zájem.' },
        { label: 'Žádost o spojení s personalizovanou zprávou', desc: 'Ne šablona s proměnnou. AI napíše zprávu na základě toho, co zjistila o firmě a pozici — bez generických frází.' },
        { label: 'Zpráva 1 — úvod a hodnota (po přijetí)', desc: 'Po přijetí spojení přichází stručný úvod: kdo jsme, proč jsme oslovili právě tuto firmu a co konkrétního nabízíme.' },
        { label: 'Follow-up zpráva 2 (po 5–7 dnech)', desc: 'Pokud není reakce, přichází krátké follow-up. Nenásilné, bez tlaku. Jen připomenutí, že jsme tu a zájem trvá.' },
      ]
    : [
        { label: 'Find the decision-maker\'s name and title', desc: 'AI identifies the managing director, sales director or CEO — based on who holds decision-making authority for the company\'s size and industry.' },
        { label: 'Visit the LinkedIn profile', desc: 'A profile visit builds awareness before contact. The decision-maker sees that someone from the industry showed interest.' },
        { label: 'Connection request with personalised note', desc: 'Not a template with a variable. AI writes a message based on what it learned about the company and role — no generic phrases.' },
        { label: 'Message 1 — intro and value (after accept)', desc: 'After the connection is accepted, comes a brief intro: who we are, why we reached out to this specific company, and what we concretely offer.' },
        { label: 'Follow-up message 2 (after 5–7 days)', desc: 'If there\'s no response, a short follow-up goes out. Non-pushy, no pressure. Just a reminder that we\'re here and interested.' },
      ]

  const safetyPoints = cs
    ? [
        'Integrace přes Unipile — žádná Chrome rozšíření, žádné scraping nástoje porušující podmínky',
        'Denní limity v souladu s pravidly LinkedIn — lidský vzorec odeslání',
        'Realistické časování — zprávy neodcházejí v sekundách po sobě',
        'Vlastní LinkedIn účet zůstává váš — žádné sdílené účty',
      ]
    : [
        'Integrated via Unipile — no Chrome extensions, no scraping tools violating terms',
        'Daily limits aligned with LinkedIn\'s rules — human-like sending pattern',
        'Realistic timing — messages don\'t go out seconds apart',
        'Your LinkedIn account stays yours — no shared accounts',
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
            LinkedIn Outreach
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
              ? 'LinkedIn Outreach — automaticky, bezpečně, personalizovaně'
              : 'LinkedIn Outreach — Automated, Safe, Personalised'}
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '620px', marginBottom: '16px' }}>
            {cs
              ? 'Rozhodovatelé kontrolují LinkedIn víc než email. Míra přijetí spojení se pohybuje mezi 20–30 %, zatímco emailové open rate klesají. Problém je, že ruční LinkedIn outreach je časově náročný a neškálovatelný.'
              : 'Decision-makers check LinkedIn more than email. Connection acceptance rates run 20–30%, while email open rates keep declining. The problem is that manual LinkedIn outreach is time-consuming and unscalable.'}
          </p>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '620px' }}>
            {cs
              ? 'SalesAgent automatizuje celou sekvenci — od nalezení rozhodovatele přes navštívení profilu až po personalizovanou zprávu a follow-up. Vy nic neklikáte, vy jen odpovídáte na příchozí zájem.'
              : 'SalesAgent automates the entire sequence — from finding the decision-maker, visiting their profile, to a personalised message and follow-up. You don\'t click anything, you only reply to incoming interest.'}
          </p>
        </div>

        {/* Why LinkedIn */}
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
              marginBottom: '20px',
            }}
          >
            {cs ? 'Proč LinkedIn funguje lépe než jen email' : 'Why LinkedIn works better than email alone'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="stats-grid">
            {[
              { num: '20–30 %', label: cs ? 'míra přijetí spojení' : 'connection acceptance rate' },
              { num: '2×', label: cs ? 'více kontaktních bodů s jednou firmou' : 'more touchpoints with one company' },
              { num: cs ? 'denně' : 'daily', label: cs ? 'rozhodovatelé jsou na LinkedIn aktivní' : 'decision-makers are active on LinkedIn' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div
                  className="font-mono-data"
                  style={{
                    fontSize: '28px',
                    fontWeight: 700,
                    color: 'var(--accent)',
                    marginBottom: '6px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sequence */}
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
            {cs ? 'Jak sekvence probíhá' : 'How the sequence runs'}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {sequence.map((step, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  paddingBottom: '28px',
                  marginBottom: '28px',
                  borderBottom: i < sequence.length - 1 ? '1px solid var(--border)' : 'none',
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

        {/* Safety */}
        <div
          style={{
            background: 'rgba(34,160,107,0.05)',
            border: '1px solid rgba(34,160,107,0.2)',
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
              marginBottom: '8px',
            }}
          >
            {cs ? 'Bezpečnost účtu — bez rizika banu' : 'Account safety — no ban risk'}
          </h2>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '20px' }}>
            {cs
              ? 'Levné LinkedIn automatizační nástroje porušují podmínky LinkedIn a vedou k banům. My pracujeme jinak:'
              : 'Cheap LinkedIn automation tools violate LinkedIn\'s terms and lead to bans. We work differently:'}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {safetyPoints.map((point, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <span style={{ color: 'var(--green)', fontWeight: 700, fontSize: '16px', lineHeight: '1.5', flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.5' }}>{point}</span>
              </div>
            ))}
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
            {cs ? 'Připraveni spustit LinkedIn outreach?' : 'Ready to launch LinkedIn outreach?'}
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '28px', maxWidth: '480px', margin: '0 auto 28px' }}>
            {cs
              ? 'Na úvodním hovoru projdeme váš cílový segment a nastavíme sekvenci na míru vašemu oboru.'
              : 'On an intro call we\'ll go through your target segment and set up a sequence tailored to your industry.'}
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
            {cs ? 'Domluvit hovor o LinkedIn outreach' : 'Book a LinkedIn outreach call'}
          </a>
        </div>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </div>
  )
}
