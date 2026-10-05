import type { Metadata } from 'next'

const BOOKING_URL =
  'https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile'

const czechFaqs = [
  { question: 'Co zahrnuje automatizace oslovení jako služba?', answer: 'Vybereme cílové firmy podle ICP, ověříme a doplníme data, připravíme personalizované zprávy a řídíme dohodnuté e-mailové a LinkedIn sekvence. Součástí je průběžná kontrola odpovědí, kvalifikace a předání kontextu vašemu obchodníkovi. Konkrétní rozsah schválíme před spuštěním.' },
  { question: 'Kolik stojí nasazení a měsíční provoz?', answer: 'Nasazení začíná od 15 000 Kč jednorázově. Průběžné řízení outboundu začíná od 19 900 Kč měsíčně. Rozsah kanálů, objem dat a případné další náklady stanovíme v nabídce; nejde o cenu za garantovaný počet schůzek.' },
  { question: 'Musíme automatizované oslovení obsluhovat sami?', answer: 'V řízeném modelu nasazení i průběžnou obsluhu zajišťuje SalesAgent.cz. Vy schvalujete cílovou skupinu a nabídku a váš obchodník přebírá relevantní konverzace a schůzky. Před spuštěním si určíme pravidla kvalifikace a předání.' },
  { question: 'Co se stane, když firma odpoví nebo odmítne?', answer: 'Odpověď zastaví navazující automatickou sekvenci podle dohodnutých pravidel. Odmítnuté a odhlášené kontakty vyřadíme z dalšího oslovování. Zájemci se předávají obchodníkovi s historií komunikace; nejasné reakce posoudí člověk.' },
  { question: 'Je možné oslovit každý veřejný B2B e-mail?', answer: 'Ne. Veřejná adresa ani firemní kontakt nejsou samy o sobě souhlasem s obchodními sděleními. Před spuštěním je potřeba ověřit podmínky podle zákona č. 480/2004 Sb. a pravidla zpracování osobních údajů. Samotný opt-out nebo oprávněný zájem podle GDPR nestačí.' },
]

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const cs = locale === 'cs'
  return {
    title: cs
      ? 'Automatizace oslovení: e-mail a LinkedIn'
      : 'B2B Outreach to Czech Companies — Email and LinkedIn',
    description: cs
      ? 'Automatizované B2B oslovení jako řízená služba: data, e-mail, LinkedIn a kvalifikace. Nasazení od 15 000 Kč, průběžné řízení od 19 900 Kč měsíčně.'
      : 'B2B outreach to Czech companies as part of your market entry: a personalised cold email for each company, sent alongside LinkedIn contact with decision-makers. Sales outsourcing, no local rep to hire.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/automatizovane-osloveni`,
      languages: {
        cs: 'https://salesagent.cz/cs/automatizovane-osloveni',
        en: 'https://salesagent.cz/en/automatizovane-osloveni',
        'x-default': 'https://salesagent.cz/en/automatizovane-osloveni',
      },
    },
    openGraph: {
      type: 'website',
      locale: cs ? 'cs_CZ' : 'en_US',
      url: `https://salesagent.cz/${locale}/automatizovane-osloveni`,
      siteName: 'SalesAgent.cz',
      title: cs
        ? 'Automatizace oslovení: e-mail a LinkedIn | SalesAgent.cz'
        : 'Automated Outreach — Email and LinkedIn | SalesAgent.cz',
      description: cs
        ? 'Nasadíme a řídíme B2B outbound. Od vybraných firem přes personalizované oslovení po předání zájemců obchodníkovi.'
        : 'AI writes a unique email for each company and simultaneously contacts decision-makers on LinkedIn.',
    },
    twitter: {
      card: 'summary_large_image',
      title: cs
        ? 'Automatizace oslovení: e-mail a LinkedIn | SalesAgent.cz'
        : 'Automated Outreach — Email and LinkedIn | SalesAgent.cz',
      description: cs
        ? 'Nasadíme a řídíme B2B outbound. Od vybraných firem přes personalizované oslovení po předání zájemců obchodníkovi.'
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
      {cs && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'FAQPage',
        '@id': 'https://salesagent.cz/cs/automatizovane-osloveni#faq', inLanguage: 'cs',
        mainEntity: czechFaqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
      }) }} />}
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
              ? 'Automatizace oslovení: e-mail a LinkedIn jako služba'
              : 'B2B Outreach to Czech Companies — Email and LinkedIn'}
          </h1>
          <p style={{ fontSize: '18px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '620px', marginBottom: '16px' }}>
            {cs
              ? 'Najdeme správné firmy, připravíme personalizované oslovení a průběžně řídíme outbound. Propojíme data, e-mail, LinkedIn a kvalifikaci tak, aby váš obchodník dostal relevantní konverzace a kontext pro schůzku.'
              : 'The full outbound process in one place. AI writes a personalised cold email for each company individually — based on what it reads on their website — and simultaneously reaches out to decision-makers on LinkedIn.'}
          </p>
          <p style={{ fontSize: '17px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '620px' }}>
            {cs
              ? 'Automatizované oslovení nasadíme i obsluhujeme za vás. Vy schválíte cílovou skupinu a nabídku; obchodník se soustředí na zájemce, jednání a uzavření zakázky.'
              : 'The result is a double touch: email in the inbox and a message on LinkedIn. The company sees you in two places without you having to click a single button.'}
          </p>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', lineHeight: '1.65', maxWidth: '620px', marginTop: '14px' }}>
            {cs
              ? 'Oslovování je jádrem našeho '
              : 'Outreach is the core of our '}
            <a href={`/${locale}/sales-representation-czech-republic`} style={{ color: 'var(--accent)' }}>
              {cs ? 'obchodního zastoupení a outsourcingu obchodu v ČR' : 'sales outsourcing for the Czech market'}
            </a>
            {cs ? ' — od oslovení po domluvené schůzky.' : ' — local sales in the Czech Republic, from first touch to booked meetings.'}
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
              ? 'Samotné jméno firmy ve zprávě nestačí. AI připraví návrh z ověřených informací na webu firmy a naváže jej na vaši nabídku. Před spuštěním kontrolujeme argumentaci a ukázky zpráv. Neověřená tvrzení o firmě do oslovení nepatří.'
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
              ? 'Zajistíme outbound a třídění reakcí podle dohodnutých pravidel. Zájemce předáme vašemu obchodníkovi s historií komunikace a dalším krokem. Obchodník ověří potřebu, vede schůzku a uzavírá obchod. Nejasné odpovědi posoudí člověk; odmítnutí a odhlášení zastavují další oslovení.'
              : 'SalesAgent handles exclusively the outbound — finding, personalising and sending. Replies from interested prospects land in your email inbox or LinkedIn messages. You respond personally and arrange a meeting or clarify the enquiry. You don\'t sell through a robot — you use the robot to generate opportunities.'}
          </p>
        </div>

        {cs && (
          <>
            <section style={{ marginBottom: '48px', fontSize: '16px', lineHeight: 1.75, color: 'var(--text-muted)' }}>
              <h2 style={{ fontSize: '26px', color: 'var(--text)', marginBottom: '16px', fontWeight: 700 }}>Co nasadíme a co řídíme každý měsíc</h2>
              <p style={{ marginBottom: '16px' }}>Služba je vhodná pro B2B firmy s konkrétní nabídkou a obchodníkem, který převezme zájemce. Na začátku společně vybereme segment, relevantní role a vylučující podmínky. Stávající klienti, odmítnuté kontakty a otevřená jednání mají vlastní pravidla, aby se oslovování nepřekrývalo.</p>
              <ol style={{ paddingLeft: '24px', marginBottom: '20px' }}>
                <li><strong>Výběr a ověření firem:</strong> hledání podle ICP, doplnění kontextu z webů a odstranění duplicit.</li>
                <li><strong>Příprava oslovení:</strong> návrh argumentu, e-mailových a LinkedIn zpráv a kontrola prvního vzorku.</li>
                <li><strong>Spuštění pilotu:</strong> napojení dohodnutých účtů, schválené sekvence a stop podmínky.</li>
                <li><strong>Kvalifikace:</strong> rozlišení zájmu, dotazu, pozdějšího termínu a odmítnutí; volitelně zapojení Prezentéru před schůzkou.</li>
                <li><strong>Předání a ladění:</strong> kontext pro obchodníka, zpětná vazba a úpravy cílení podle relevantních odpovědí.</li>
              </ol>
              <p style={{ marginBottom: '16px' }}>Průběžné řízení zahrnuje kontrolu dat, textů, reakcí a návaznosti kanálů v dohodnutém rozsahu. Odpověď musí zastavit navazující automatické zprávy. U LinkedInu respektujeme podmínky platformy; žádný nástroj ani denní limit nezaručují, že účet nebude omezen.</p>
              <p>Měřítkem nejsou odeslané zprávy. Sledujeme, zda firmy odpovídají cílení, jaké potřeby popisují a které příležitosti obchodník přijme. Konkrétní výsledky závisí na segmentu, nabídce a návazné práci týmu.</p>
            </section>
            <section style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '14px', padding: '28px', marginBottom: '48px', lineHeight: 1.75 }}>
              <h2 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '12px' }}>Cena: jednorázové nasazení a průběžné řízení</h2>
              <p><strong>Nasazení od 15 000 Kč jednorázově</strong> zahrnuje přípravu cílení, napojení účtů a nastavení dohodnutého postupu.</p>
              <p style={{ marginTop: '12px' }}><strong>Řízení od 19 900 Kč měsíčně</strong> zahrnuje průběžnou obsluhu a ladění outboundu. Rozsah dat, kanálů a případných dalších nákladů stanovíme v nabídce. Cena není zárukou počtu schůzek.</p>
              <p style={{ marginTop: '16px' }}>Podrobnosti najdete v <a href="/cs/pricing" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>ceníku nasazení a řízení</a>. Pro posouzení vašeho segmentu nás <a href="/cs/contact" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>kontaktujte</a>.</p>
            </section>
            <section style={{ marginBottom: '48px', fontSize: '16px', lineHeight: 1.75, color: 'var(--text-muted)' }}>
              <h2 style={{ fontSize: '24px', color: 'var(--text)', marginBottom: '16px', fontWeight: 700 }}>Pravidla dat a komunikace před spuštěním</h2>
              <p style={{ marginBottom: '16px' }}>Před rozesílkou ověříme zdroje kontaktů, oprávnění jejich použití a pravidla obchodních sdělení. Veřejný B2B e-mail ani personalizovaná zpráva samy o sobě souhlas nenahrazují. Právní titul pro zpracování osobních údajů je odlišný od oprávnění zaslat obchodní e-mail.</p>
              <p style={{ marginBottom: '16px' }}>Přehled podmínek najdete v článku <a href="/blog/gdpr-a-cold-email" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>GDPR a cold e-mail</a>. Dohodneme evidenci odmítnutí, přístup k datům a odpovědnosti klienta i dodavatele. Nejasný právní případ patří k odbornému posouzení před spuštěním.</p>
              <p>Celý postup od ICP po obchodníka vysvětluje průvodce <a href="/blog/jak-zavest-automatizaci-prodeje-ve-firme" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>automatizace prodeje</a>. SalesAgent se soustředí na outbound; navazujeme na nástroje, které váš tým už používá.</p>
            </section>
            <section id="faq" style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '20px' }}>Časté otázky k automatizovanému oslovení</h2>
              {czechFaqs.map(({ question, answer }) => (
                <details key={question} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 20px', marginBottom: '12px' }}>
                  <summary style={{ cursor: 'pointer', fontWeight: 700 }}>{question}</summary>
                  <p style={{ marginTop: '12px', color: 'var(--text-muted)', lineHeight: 1.7 }}>{answer}</p>
                </details>
              ))}
            </section>
          </>
        )}

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
