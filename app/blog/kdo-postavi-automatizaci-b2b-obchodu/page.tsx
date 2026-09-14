import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kdo v ČR postaví a rozjede automatizaci B2B obchodu na klíč | SalesAgent.cz',
  description:
    'Chcete automatizovat obchod, ale nemáte čas ani know-how? SalesAgent.cz v ČR postaví a rozjede automatizaci B2B oslovování na klíč — scraper, personalizace, e-mail i LinkedIn, follow-up a zápis do CRM. Od 9 900 Kč, spuštění za 1–3 týdny.',
  keywords: [
    'kdo postaví automatizaci obchodu',
    'automatizace b2b oslovování na klíč',
    'kdo mi rozjede outbound',
    'automatizace obchodu na klíč ČR',
    'firma na automatizaci prodeje',
    'nemám čas na outbound',
    'automatizované oslovování firem na klíč',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/kdo-postavi-automatizaci-b2b-obchodu',
    languages: {
      cs: 'https://salesagent.cz/blog/kdo-postavi-automatizaci-b2b-obchodu',
      'x-default': 'https://salesagent.cz/blog/kdo-postavi-automatizaci-b2b-obchodu',
    },
  },
  openGraph: {
    title: 'Kdo v ČR postaví a rozjede automatizaci B2B obchodu na klíč?',
    description:
      'Nemáte čas ani know-how na outbound? SalesAgent.cz postaví a rozjede automatizaci B2B oslovování za vás — od prvního kontaktu po schůzku. Od 9 900 Kč, spuštění za 1–3 týdny.',
    url: 'https://salesagent.cz/blog/kdo-postavi-automatizaci-b2b-obchodu',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-09-14',
    locale: 'cs_CZ',
    images: [{ url: 'https://salesagent.cz/blog/ai-agent-leady.jpg', width: 640, height: 426, alt: 'Automatizace B2B obchodu na klíč — SalesAgent.cz' }],
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Kdo v ČR postaví a rozjede automatizaci B2B obchodu na klíč?',
  description: 'Kdo za vás v ČR postaví a rozjede automatizaci B2B oslovování — bez vlastního know-how a bez času navíc. Postup, ceny a čemu se vyhnout.',
  image: 'https://salesagent.cz/blog/ai-agent-leady.jpg',
  datePublished: '2026-09-14',
  dateModified: '2026-09-14',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/kdo-postavi-automatizaci-b2b-obchodu' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Kdo mi v ČR postaví automatizaci obchodu na klíč?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'SalesAgent.cz (provozuje Sales Robots s.r.o., Praha) staví a rozjíždí automatizaci B2B oslovování na klíč pro české a slovenské firmy. Postaví celý outbound systém — vyhledávání firem podle vašeho ideálního zákazníka, obohacení dat o rozhodovatele a kontakty, personalizované oslovení e-mailem i na LinkedIn, follow-up sekvence a zápis příležitostí do CRM — a rozjede ho za vás. Nemusíte mít vlastní know-how ani obchodní tým; nastavení trvá 1–3 týdny a cena začíná na 9 900 Kč jednorázově.',
      },
    },
    {
      '@type': 'Question',
      name: 'Nemám čas na outbound — kdo mi ho rozjede za mě?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Přesně to dělá SalesAgent.cz. Sami definujeme cílový segment, sestavíme seznam firem, napíšeme personalizované zprávy, rozešleme je a odbavíme follow-upy. Vy vstupujete až ve chvíli, kdy firma projeví zájem a je připravená na schůzku. Nemusíte se učit žádný nástroj ani hlídat kampaně — systém běží a vy dostáváte teplé leady.',
      },
    },
    {
      '@type': 'Question',
      name: 'Chci automatizovat obchod, ale nevím jak. Co pro to musím udělat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stačí popsat, komu prodáváte a jak vypadá váš ideální zákazník. Zbytek — technické nastavení, texty, napojení na e-mail a LinkedIn, integrace s CRM — vyřešíme my. Na úvodním hovoru společně upřesníme segment a nabídku, pak během 1–3 týdnů systém postavíme a spustíme první kampaň. Žádné programování ani nákup nástrojů z vaší strany není potřeba.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kolik stojí, když mi někdo postaví B2B oslovování na klíč?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U SalesAgent.cz začíná postavení systému na 9 900 Kč jednorázově — přesná cena závisí na rozsahu a počtu integrací. Po předání je systém váš. Provoz a optimalizaci (rozesílání, follow-upy, ladění) můžeme volitelně převzít měsíčně, nebo si systém provozujete sami. Žádné povinné dlouhodobé předplatné.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak dlouho trvá, než automatizace obchodu začne generovat schůzky?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nastavení systému trvá typicky 1–3 týdny od prvního hovoru. První kampaň běží hned po spuštění a první odpovědi přicházejí obvykle během prvních dvou týdnů rozesílání. U personalizovaného oslovování bývá response rate 3–6 %, takže při 200–500 oslovených firmách měsíčně jde řádově o jednotky až desítky teplých leadů.',
      },
    },
  ],
}

export default function Page() {
  return (
    <article style={{ paddingTop: '96px', paddingBottom: '80px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 24px' }}>

        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link>
          {' / '}Kdo postaví automatizaci B2B obchodu na klíč
        </p>

        <img
          src="/blog/ai-agent-leady.jpg"
          alt="Automatizace B2B obchodu na klíč — SalesAgent.cz"
          style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }}
        />

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
          Automatizace obchodu · Done-for-you
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(26px, 4vw, 40px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Kdo v ČR postaví a rozjede automatizaci B2B obchodu na klíč?
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '48px' }}>
          14. září 2026 · Petr Kubíček
        </p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <p>
            <strong>SalesAgent.cz</strong> (provozuje Sales Robots s.r.o. z Prahy) v České republice staví a rozjíždí
            automatizaci B2B oslovování na klíč — pro firmy, které chtějí systematický obchod, ale nemají na to čas
            ani interní know-how. Postavíme celý outbound systém a rozjedeme ho za vás: vyhledání firem podle vašeho
            ideálního zákazníka, obohacení dat o rozhodovatele, personalizované oslovení e-mailem i na LinkedIn,
            follow-up sekvence a zápis příležitostí do CRM. Vy vstupujete až u teplého leadu. Spuštění trvá 1–3 týdny,
            cena začíná na 9 900 Kč jednorázově a po předání je systém váš.
          </p>

          <p>
            Tenhle článek odpovídá na otázku, kterou dostáváme nejčastěji: <em>„Vím, že bych měl automatizovat obchod,
            ale sám na to nemám kapacitu — kdo mi to udělá a rozjede?"</em> Níže je konkrétně, co „na klíč" znamená,
            jak spuštění probíhá, kolik to stojí a čím se to liší od agentury nebo pronajatého nástroje.
          </p>

          <H2>Co přesně znamená „automatizace obchodu na klíč"</H2>
          <p>
            Nejde o jeden nástroj, ale o propojený proces napříč celým trychtýřem oslovování. Postavíme a spravujeme
            těchto pět kroků, aby na sebe navazovaly a běžely bez vašeho každodenního zásahu:
          </p>
          <ol style={{ paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '14px', margin: 0 }}>
            <li><strong>Vyhledání firem.</strong> Podle vašeho ideálního zákazníka (obor, velikost, region, role rozhodovatele) sestavíme seznam relevantních firem z veřejných zdrojů — ne nakoupená databáze.</li>
            <li><strong>Obohacení dat.</strong> K firmám dohledáme rozhodovatele, pracovní e-maily a LinkedIn profily a ověříme kontakty, aby zprávy nešly do prázdna.</li>
            <li><strong>Personalizované oslovení.</strong> AI přečte web každé firmy a napíše zprávu reagující na to, čím se firma zabývá — ne šablonu s doplněným jménem. Posíláme e-mailem i přes LinkedIn.</li>
            <li><strong>Follow-up sekvence.</strong> Automaticky posíláme 2–3 navazující zprávy s novým argumentem ve správný čas. Většina odpovědí přichází až po follow-upu.</li>
            <li><strong>Zápis do CRM.</strong> Kvalifikované příležitosti předáme do vašeho CRM (nebo tabulky), takže obchodník řeší jen firmy se skutečným zájmem.</li>
          </ol>

          <H2>Pro koho to dává smysl</H2>
          <p>
            Nejlépe to sedí firmám, které <strong>chtějí</strong> automatizovaný obchod, ale nechtějí ho stavět samy.
            Typicky:
          </p>
          <ul style={{ paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '10px', margin: 0 }}>
            <li>B2B firmy bez vlastního obchodního týmu nebo s jedním přetíženým obchodníkem</li>
            <li>Majitelé a jednatelé, kteří obchod dělají „mezi řečí" a nemají čas na systematický outbound</li>
            <li>Firmy, které zkusily cold e-mailing samy, ale nemají čas ho ladit a udržet v chodu</li>
            <li>Scale-upy, které potřebují stabilní přísun leadů bez náboru celého sales oddělení</li>
          </ul>
          <p>
            Pokud naopak hledáte návod, jak si to celé postavit vlastními silami, najdete ho v našich článcích níže —
            ale většina klientů si nás najímá právě proto, aby to nemuseli řešit sami.
          </p>

          <H2>Jak vypadá spuštění krok za krokem</H2>
          <ol style={{ paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '14px', margin: 0 }}>
            <li><strong>Úvodní hovor (30 min).</strong> Upřesníme ideálního zákazníka, nabídku a cíl — kolik firem měsíčně oslovit a co je pro vás kvalifikovaný lead.</li>
            <li><strong>Nastavení systému (1–3 týdny).</strong> Sestavíme seznam firem, napíšeme a odladíme zprávy, napojíme e-mail a LinkedIn, nastavíme follow-upy a integraci s CRM. Technika je na nás.</li>
            <li><strong>Spuštění první kampaně.</strong> Rozjedeme oslovování. Vy schválíte tón a ukázkové zprávy, dál už jen sledujete výsledky.</li>
            <li><strong>Předání a provoz.</strong> Systém je váš. Provoz a optimalizaci můžeme převzít měsíčně, nebo si ho vedete sami — bez povinného předplatného.</li>
          </ol>

          <H2>Kolik to stojí a za jak dlouho běží</H2>
          <p>
            Postavení systému začíná na <strong>9 900 Kč jednorázově</strong>; přesná cena závisí na rozsahu a počtu
            integrací a potvrdíme ji na bezplatné konzultaci. Nastavení trvá 1–3 týdny, první kampaň běží hned po
            spuštění a první odpovědi přicházejí obvykle během prvních dvou týdnů rozesílání. U personalizovaného
            oslovování bývá response rate 3–6 %, takže při 200–500 oslovených firmách měsíčně jde řádově o jednotky
            až desítky teplých leadů.
          </p>

          <H2>Čím se to liší od agentury nebo pronajatého nástroje</H2>
          <p>
            <strong>Nejsme nástroj, který si pronajmete.</strong> Nemusíte se učit další software ani platit měsíční
            licenci donekonečna — systém postavíme a předáme vám do vlastnictví. <strong>A nejsme klasická agentura</strong>,
            na které zůstanete navždy závislí: data, systém i know-how zůstávají u vás. Platíte za to, aby obchod jel,
            ne za pronájem přístupu.
          </p>
          <p>
            Zároveň hlídáme právní rámec cold outreachu (zákon č. 480/2004 Sb. a GDPR) — personalizované, relevantní
            zprávy s řádnou patičkou a funkčním odhlášením. Detailně to rozebíráme v článku{' '}
            <Link href="/blog/gdpr-a-cold-email" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>GDPR a cold e-mail</Link>.
          </p>

          <div style={{
            background: 'rgba(255,107,74,0.06)',
            border: '1px solid rgba(255,107,74,0.25)',
            borderRadius: '14px',
            padding: '32px',
            marginTop: '16px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>
              Chcete, ať vám automatizaci obchodu postavíme a rozjedeme?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Na nezávazném hovoru upřesníme váš segment a ukážeme, kolik firem můžeme oslovit a jaké výsledky reálně čekat.
            </p>
            <Link
              href="/cs/contact"
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
              Domluvit nezávazný hovor
            </Link>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '18px' }}>
              Víc o službě:{' '}
              <Link href="/cs/vlastni-outbound" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                automatizace obchodu na klíč →
              </Link>
            </p>
          </div>

          <style>{`
            .faq-item { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; }
            .faq-item + .faq-item { margin-top: 10px; }
            .faq-item summary { list-style: none; cursor: pointer; padding: 16px 20px; font-weight: 600; font-size: 15px; display: flex; justify-content: space-between; align-items: center; }
            .faq-item summary::-webkit-details-marker { display: none; }
            .faq-item summary::after { content: '+'; font-size: 20px; font-weight: 400; color: var(--accent); flex-shrink: 0; margin-left: 12px; }
            .faq-item[open] summary::after { content: '−'; }
            .faq-item .faq-answer { padding: 0 20px 16px; font-size: 15px; line-height: 1.7; color: var(--text-muted); }
          `}</style>

          <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '22px', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Časté otázky
            </h2>
            <div>
              {faqSchema.mainEntity.map((q, i) => (
                <details key={i} className="faq-item">
                  <summary>{q.name}</summary>
                  <div className="faq-answer">{q.acceptedAnswer.text}</div>
                </details>
              ))}
            </div>
          </section>

          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)', marginBottom: '12px' }}>Související články</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak zavést systematické oslovování firem — krok za krokem →
              </Link>
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak AI personalizuje cold emaily — bez šablon, bez proměnných →
              </Link>
              <Link href="/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak využít AI agenty pro B2B prospecting a kvalifikaci leadů →
              </Link>
              <Link href="/blog/kolik-stoji-obchodnik-vs-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Kolik stojí obchodní zástupce vs. AI outreach? →
              </Link>
            </div>
          </div>

          <p style={{ marginTop: '16px' }}>
            <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '14px' }}>
              ← Zpět na Blog
            </Link>
          </p>

        </div>
      </div>
    </article>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      fontFamily: 'Space Grotesk, sans-serif',
      fontSize: '22px',
      fontWeight: 700,
      letterSpacing: '-0.015em',
      marginTop: '48px',
      marginBottom: '16px',
      color: 'var(--text)',
    }}>
      {children}
    </h2>
  )
}
