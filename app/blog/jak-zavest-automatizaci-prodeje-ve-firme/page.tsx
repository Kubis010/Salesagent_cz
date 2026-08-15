import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jak začít s automatizací B2B prodeje — krok za krokem | SalesAgent.cz',
  description:
    'Jak začít s automatizací B2B prodeje: správné pořadí kroků, co automatizovat jako první a jak vypadá fungující automatizovaný outbound od lead sourcingu po domluvení schůzky.',
  keywords: [
    'automatizace prodeje',
    'automatizace B2B prodeje',
    'jak automatizovat prodej',
    'sales automation',
    'obchodní automatizace',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/jak-zavest-automatizaci-prodeje-ve-firme',
    languages: {
      cs: 'https://salesagent.cz/blog/jak-zavest-automatizaci-prodeje-ve-firme',
      'x-default': 'https://salesagent.cz/blog/jak-zavest-automatizaci-prodeje-ve-firme',
    },
  },
  openGraph: {
    title: 'Jak zavést automatizaci prodeje ve firmě — krok za krokem',
    description:
      'Co reálně automatizovat, kde začít a jak vypadá fungující automatizovaný B2B obchodní proces od prvního kontaktu po schůzku.',
    url: 'https://salesagent.cz/blog/jak-zavest-automatizaci-prodeje-ve-firme',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2025-04-10',
    locale: 'cs_CZ',
    images: [{ url: 'https://salesagent.cz/blog/automatizace-prodeje.jpg', width: 1200, height: 630, alt: 'Automatizace prodeje ve firmě — krok za krokem' }],
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Jak zavést automatizaci prodeje ve firmě — krok za krokem',
  description: 'Automatizace prodeje není jen CRM nebo newsletter. Co reálně automatizovat, kde začít a jak vypadá fungující B2B obchodní proces od prvního kontaktu po schůzku.',
  image: 'https://salesagent.cz/blog/automatizace-prodeje.jpg',
  datePublished: '2026-08-10',
  dateModified: '2026-08-10',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/jak-zavest-automatizaci-prodeje-ve-firme' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Co lze v B2B prodeji reálně automatizovat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'V B2B prodeji lze automatizovat: vyhledávání firem (lead sourcing z Google Maps, LinkedIn, ARES), obohacování dat o prospektech, první oslovení (cold email, LinkedIn), follow-up sekvence, základní kvalifikaci odpovědí a aktualizaci CRM. Vyjednávání, uzavírání obchodů a budování vztahů zůstávají na lidech.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kde začít s automatizací prodeje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Začněte definicí ICP — bez přesného popisu ideálního zákazníka nepomůže žádná automatizace. Poté automatizujte lead sourcing, pak personalizované první oslovení a follow-up sekvenci. CRM integraci a reporting řešte až po tom, co víte, co vám funguje.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jaká je nejčastější chyba při zavádění automatizace prodeje?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nejčastější chyba je automatizovat příliš brzy — před tím, než víte, co funguje manuálně. Druhá velká chyba je posílat šablony bez personalizace. Třetí: ignorovat follow-up. 80 % odpovědí přichází po druhém nebo třetím kontaktu, ne po prvním.',
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
          {' / '}Automatizace prodeje
        </p>

        <img
          src="/blog/automatizace-prodeje.jpg"
          alt="Automatizace prodeje ve firmě — krok za krokem"
          style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }}
        />

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
          Automatizace prodeje · B2B obchod
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(26px, 4vw, 40px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Jak zavést automatizaci prodeje ve firmě — krok za krokem
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '48px' }}>
          10. dubna 2025 · Petr Kubíček
        </p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <p>
            Když se řekne automatizace prodeje, většina firem si představí buď newsletter v Mailchimpu,
            nebo CRM, které automaticky posílá follow-up po uzavření obchodu. Obojí je sice v pořádku,
            ale s automatizací prodeje to má pramálo společného.
          </p>

          <p>
            Skutečná automatizace prodeje začíná mnohem dříve — u hledání firem, jejich oslovení a
            systematického follow-upu. Tohle je část, která obchodníkům bere nejvíce času a přitom
            ji lze z velké části automatizovat bez ztráty kvality.
          </p>

          <H2>Co všechno lze v prodeji automatizovat</H2>

          <p>
            Přehled toho, co v B2B obchodním procesu lze reálně automatizovat:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                area: 'Vyhledávání firem (lead sourcing)',
                desc: 'Scraping Google Maps, LinkedIn, ARES nebo oborových portálů podle zadaných kritérií. Systém najde firmy odpovídající vašemu ICP bez manuálního prohledávání.',
              },
              {
                area: 'Obohacování dat o prospektech',
                desc: 'AI přečte web každé firmy a zjistí klíčové informace: co dělají, jak se odlišují, v jakém regionu operují, na koho cílí. Obchodník dostane kontext, ne jen jméno firmy.',
              },
              {
                area: 'První kontakt (cold email, LinkedIn)',
                desc: 'Personalizované oslovení generované na základě analýzy webu — ne šablona s proměnnými, ale unikátní zpráva pro každou firmu.',
              },
              {
                area: 'Follow-up sekvence',
                desc: '3–4 zprávy rozložené přes 10–14 dní. Systém sleduje, kdo odpověděl, a follow-up posílá jen těm, kteří dosud nereagovali.',
              },
              {
                area: 'Základní kvalifikace odpovědí',
                desc: 'AI dokáže identifikovat, zda odpověď vyjadřuje zájem, odmítnutí nebo požadavek na pozdější kontakt — a podle toho odpovídající kontakt označit.',
              },
              {
                area: 'CRM aktualizace a reporting',
                desc: 'Automatické logování aktivit, aktualizace statusů a generování reportů o výsledcích kampaní bez manuálního zadávání.',
              },
            ].map((item) => (
              <div key={item.area} style={{
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
              }}>
                <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text)', marginBottom: '6px' }}>{item.area}</p>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <H2>Kde začít — doporučené pořadí</H2>

          <p>
            Automatizace prodeje nefunguje jako celek od první chvíle. Je potřeba ji budovat postupně,
            a to ve správném pořadí:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                num: '1',
                title: 'Nejdřív vyřešte ICP',
                body: 'Bez přesné definice ideálního zákazníka automatizace nic nenapraví — jen rychleji oslovíte špatné firmy. Napište si písemně: obor, velikost, region, pozice rozhodovatele, signály shody a signály vyloučení. Teprve s tímto dokumentem má smysl spouštět cokoli dalšího.',
              },
              {
                num: '2',
                title: 'Automatizujte lead sourcing',
                body: 'Vyhledávání firem z Google Maps, LinkedIn nebo ARES je ideální kandidát na první automatizaci — je opakující se, časově náročné a nevyžaduje kreativitu. Systém vám každý týden dodá čerstvé firmy odpovídající ICP bez toho, aby obchodník cokoliv hledal ručně.',
              },
              {
                num: '3',
                title: 'Personalizované první oslovení',
                body: 'Jakmile máte spolehlivý tok firem, přidejte AI personalizaci. Systém přečte web každé firmy a napíše unikátní email. Tohle je krok, který nejvíce ovlivňuje response rate — proto ho nenahrazujte šablonou.',
              },
              {
                num: '4',
                title: 'Follow-up sekvence',
                body: '80 % odpovědí nepřijde na první email, ale na druhý nebo třetí. Nastavte sekvenci 3–4 zpráv s 5–7 dny mezi nimi. Každá navazující zpráva by měla přidávat nový pohled nebo hodnotu — ne jen "Jen se chci ujistit, zda jste viděli můj předchozí email."',
              },
              {
                num: '5',
                title: 'Teprve pak CRM integrace a reporting',
                body: 'CRM a reporting jsou důležité, ale řešte je až poté, co víte, co funguje. Příliš brzy zavedený CRM systém bez dat k plnění se stane jen dalším nástrojem, který nikdo nepoužívá.',
              },
            ].map((step) => (
              <div key={step.num} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(255,107,74,0.15)',
                  border: '1px solid rgba(255,107,74,0.4)',
                  color: 'var(--accent)',
                  fontWeight: 800,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px',
                }}>
                  {step.num}
                </span>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '16px', marginBottom: '6px', color: 'var(--text)' }}>{step.title}</p>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.65 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>

          <H2>Nejčastější chyby při automatizaci prodeje</H2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              {
                chyba: 'Automatizovat příliš brzy',
                popis: 'Dřív než víte, co funguje manuálně, nemá smysl to automatizovat. Pokud nevíte, které firmě volat a co říct, systém jen rychleji opakuje špatný přístup ve větším měřítku.',
              },
              {
                chyba: 'Šablony bez personalizace',
                popis: 'Automatizovaný cold email bez personalizace je spam. Příjemce ho pozná a ignoruje. Personalizace na základě analýzy webu není luxus — je to základní podmínka toho, aby systém vůbec fungoval.',
              },
              {
                chyba: 'Ignorovat follow-up',
                popis: 'Průzkumy ukazují, že 80 % odpovědí přichází po druhém kontaktu nebo pozdějším. Firmy, které posílají jen jeden email a čekají, přicházejí o většinu potenciálních zákazníků.',
              },
              {
                chyba: 'Nastavit a zapomenout',
                popis: 'Automatizace prodeje není autonomní systém, který jednou spustíte a pak sledujete výsledky. Potřebuje pravidelnou revizi — texty zpráv, cílení, ICP. Co funguje dnes, nemusí fungovat za 3 měsíce.',
              },
            ].map((item) => (
              <div key={item.chyba} style={{
                display: 'flex',
                gap: '12px',
                padding: '16px 20px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
              }}>
                <span style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }}>✕</span>
                <div>
                  <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text)' }}>{item.chyba}</span>
                  <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}> — {item.popis}</span>
                </div>
              </div>
            ))}
          </div>

          <H2>Jak vypadá fungující automatizovaný B2B outbound</H2>

          <p>
            Konkrétní příklad fungujícího systému pro firmu poskytující IT služby středním podnikům:
          </p>

          <ol style={{ paddingLeft: '20px', marginBottom: '8px' }}>
            <li style={{ marginBottom: '10px' }}>Firma definuje ICP: výrobní firmy 50–500 zaměstnanců, ČR, bez interního IT oddělení</li>
            <li style={{ marginBottom: '10px' }}>Systém každý týden vyhledá 80–100 nových firem z Google Maps a ARES</li>
            <li style={{ marginBottom: '10px' }}>AI přečte web každé firmy a napíše personalizovaný email adresovaný jednateli nebo IT manažerovi</li>
            <li style={{ marginBottom: '10px' }}>Email odchází v úterý ráno; ve čtvrtek odchází LinkedIn connection request</li>
            <li style={{ marginBottom: '10px' }}>Po 6 dnech follow-up email těm, kteří neodpověděli; po dalších 7 dnech druhý follow-up</li>
            <li style={{ marginBottom: '10px' }}>Odpovědi dostává obchodník přímo do emailu a reaguje do 2 hodin</li>
            <li style={{ marginBottom: '10px' }}>Výsledek: 300–400 oslovených firem měsíčně, 8–15 odpovědí, 3–6 schůzek</li>
          </ol>

          <p>
            Obchodník vstupuje do procesu až ve chvíli odpovědi. Celý prospekting a první kontaktní
            fáze běží automaticky — a přesto personalizovaně.
          </p>

          <H2>Co SalesAgent.cz dělá za vás</H2>

          <p>
            SalesAgent.cz je outsourcovaná B2B outreach služba. Celý výše popsaný proces — vyhledávání
            firem, web scraping, AI personalizace, odesílání emailů i LinkedIn outreach — provozujeme
            jako řízenou službu. Vy nedostáváte nástroj k nastavení, dostáváte fungující systém s výsledky.
          </p>

          <p>
            Nastavení trvá 5–7 pracovních dní od prvního hovoru. První odpovědi přicházejí typicky
            ve druhém nebo třetím týdnu provozu.
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
              Chcete vidět automatizaci prodeje v akci?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Na 30minutovém hovoru ukážeme, jak by fungující outbound systém vypadal konkrétně pro váš obor.
            </p>
            <a
              href="https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile"
              target="_blank"
              rel="noopener noreferrer"
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
              Domluvit hovor zdarma
            </a>
            <p style={{ marginTop: '16px', fontSize: '13px', color: 'var(--text-muted)' }}>
              Víc o tom, jak funguje{' '}
              <Link href="/cs" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>
                automatizace B2B prodeje
              </Link>
              {' '}na naší hlavní stránce.
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
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak AI personalizuje cold emaily — bez šablon, bez proměnných →
              </Link>
              <Link href="/blog/ai-agent-pro-generovani-leadu" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Generování B2B leadů v roce 2025: co funguje a co je mrtvé →
              </Link>
              <Link href="/blog/jak-oslovit-firmy-bez-databaze" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak oslovit firmy bez databáze →
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
