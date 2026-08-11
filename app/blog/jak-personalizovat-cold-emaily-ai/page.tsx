import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Jak AI personalizuje cold emaily — bez šablon, bez proměnných | SalesAgent.cz',
  description:
    'Klasické šablony s [Jméno] a [Firma] nefungují. Zjistěte, jak AI čte web každé firmy a píše unikátní email od základu — a proč to má 3× vyšší response rate než klasický template.',
  keywords: [
    'ai personalizace emailu',
    'personalizovaný cold email',
    'AI cold email',
    'cold email personalizace',
    'personalizace emailu B2B',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/jak-personalizovat-cold-emaily-ai',
    languages: {
      cs: 'https://salesagent.cz/blog/jak-personalizovat-cold-emaily-ai',
      'x-default': 'https://salesagent.cz/blog/jak-personalizovat-cold-emaily-ai',
    },
  },
  openGraph: {
    title: 'Jak AI personalizuje cold emaily — bez šablon, bez proměnných',
    description:
      'AI čte web každé firmy a píše unikátní email od základu. Proč to má 3× vyšší response rate než klasický template.',
    url: 'https://salesagent.cz/blog/jak-personalizovat-cold-emaily-ai',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2025-03-15',
    locale: 'cs_CZ',
    images: [{ url: 'https://salesagent.cz/blog/ai-personalizace-emailu.jpg', width: 1200, height: 630, alt: 'AI personalizace cold emailů pro B2B firmy' }],
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Jak AI personalizuje cold emaily — bez šablon, bez proměnných',
  description: 'Klasické šablony s [Jméno] a [Firma] nefungují. Jak AI čte web každé firmy a píše unikátní email od základu.',
  image: 'https://salesagent.cz/blog/ai-personalizace-emailu.jpg',
  datePublished: '2025-03-15',
  dateModified: '2025-03-15',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/jak-personalizovat-cold-emaily-ai' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Co je AI personalizace emailu a jak se liší od šablony s proměnnými?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Šablona s proměnnými dosazuje hodnoty jako [Jméno] nebo [Firma] do předpřipraveného textu — email vypadá genericky, příjemce to pozná. AI personalizace funguje jinak: AI nejprve přečte web dané firmy, pochopí čemu se věnují a jak se prezentují, a teprve pak napíše email, který na tento obsah přímo reaguje. Výsledkem je text, který nepůsobí jako hromadná rozesílka.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jaký je reálný response rate AI-personalizovaného cold emailu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generické cold emaily dosahují response rate 1–2 %. AI-personalizované emaily, kde systém přečte web každé firmy a napíše unikátní zprávu, dosahují 3–6 %. U 500 oslovených firem měsíčně to znamená rozdíl mezi 5 a 30 odpověďmi.',
      },
    },
    {
      '@type': 'Question',
      name: 'Jak AI ví, co napsat v personalizovaném cold emailu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI přečte web cílové firmy a identifikuje klíčové informace: hlavní produkt nebo službu, jak se firma odlišuje od konkurence, geografii, na které se zaměřují, a způsob, jakým komunikují. Na základě těchto dat napíše email, který mluví ke konkrétní situaci firmy — ne ke generickému "potenciálnímu zákazníkovi".',
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
          {' / '}Jak AI personalizuje cold emaily
        </p>

        <img
          src="/blog/ai-personalizace-emailu.jpg"
          alt="AI personalizace cold emailů pro B2B firmy"
          style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }}
        />

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
          Cold email · B2B outreach
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(26px, 4vw, 40px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Jak AI personalizuje cold emaily — bez šablon, bez proměnných
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '48px' }}>
          15. března 2025 · Petr Kubíček
        </p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <p>
            Každý, kdo pracuje v B2B, dostává denně desítky cold emailů. Poznáte je okamžitě — začínají slovy
            "Dobrý den [Jméno]" nebo "Oslovuji vás, protože [Firma] působí v oblasti [Obor]." Takový email
            nečtete celý. Jde rovnou do koše nebo do spamu. A přesto většina firem tento přístup stále používá.
          </p>

          <p>
            AI personalizace cold emailů funguje na úplně jiném principu — ne dosadit proměnné do šablony,
            ale přečíst každou firmu a napsat email od základu. Výsledkem je zpráva, která na první pohled
            nevypadá jako hromadná rozesílka — protože jí není.
          </p>

          <H2>Co je šablona s proměnnými a proč selže</H2>

          <p>
            Klasický přístup k personalizaci cold emailů vypadá takto: vytvoříte jeden text s proměnnými a
            nástroj (Apollo, Lemlist, Instantly) do nich dosadí hodnoty z CSV. Výsledný email pak vypadá nějak takto:
          </p>

          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '12px',
            padding: '24px',
          }}>
            <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Typická šablona s proměnnými
            </p>
            <p style={{ fontStyle: 'italic', margin: 0, lineHeight: 1.7 }}>
              "Dobrý den Martine, vidím, že ABC s.r.o. působí v oblasti IT konzultací. Pomáháme firmám jako
              je ta vaše získat více zákazníků pomocí automatizace. Měli byste zájem o 15minutový hovor?"
            </p>
          </div>

          <p>
            Příjemce to prokoukne na první pohled. Fráze "firmám jako je ta vaše" neprozrazuje žádnou
            znalost konkrétní situace. Text by mohl přijít komukoliv v jakémkoliv oboru. A právě to je
            problém — příjemce cítí, že mu nepsali vy, ale automat s CSV souborem.
          </p>

          <p>
            Výsledky tomu odpovídají: generické cold emaily dosahují response rate 1–2 %. Většina skončí
            ve spamu, zbytek je ignorován. Při dostatečném objemu to kazí i reputaci odesílací domény.
          </p>

          <H2>Co dělá AI jinak</H2>

          <p>
            AI personalizace cold emailů nepracuje se šablonou. Pracuje s daty o konkrétní firmě.
            Proces vypadá takto:
          </p>

          <ol style={{ paddingLeft: '20px', marginBottom: '8px' }}>
            <li style={{ marginBottom: '12px' }}><strong>AI přečte web firmy</strong> — ne jen homepage, ale i sekce O nás, Služby, Produkty, případně blog nebo reference</li>
            <li style={{ marginBottom: '12px' }}><strong>Identifikuje klíčové informace</strong> — co firma dělá, jak se odlišuje, na koho cílí, v jakém regionu operuje</li>
            <li style={{ marginBottom: '12px' }}><strong>Napíše email, který reaguje na tento obsah</strong> — ne generický text, ale zpráva adresovaná konkrétní firmě</li>
            <li style={{ marginBottom: '12px' }}><strong>Každý email je unikátní</strong> — žádné dvě zprávy ve stejné kampani nejsou identické</li>
          </ol>

          <p>
            Celý proces trvá sekundy na jednu firmu. Systém zvládne personalizovat stovky emailů denně —
            při kvalitě, na kterou by obchodník potřeboval hodiny práce.
          </p>

          <H2>Příklad before/after: šablona vs. AI personalizace</H2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
          }}>
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                Generický template — stejný pro všechny
              </p>
              <p style={{ fontStyle: 'italic', margin: 0, lineHeight: 1.7, fontSize: '15px' }}>
                "Dobrý den, oslovuji vás, protože Stavební technika Morava s.r.o. působí v oboru stavebnictví.
                Nabízíme řešení pro získávání nových zákazníků. Bylo by možné se krátce pobavit?"
              </p>
            </div>

            <div style={{
              background: 'rgba(255,107,74,0.06)',
              border: '1px solid rgba(255,107,74,0.25)',
              borderRadius: '12px',
              padding: '24px',
            }}>
              <p style={{ fontSize: '12px', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
                AI personalizace — na základě webu firmy
              </p>
              <p style={{ fontStyle: 'italic', margin: 0, lineHeight: 1.7, fontSize: '15px' }}>
                "Dobrý den, vidím, že se specializujete na dodávky jeřábů a manipulační techniky pro průmyslové
                stavby, zejména v Moravskoslezském kraji. Pracujeme s podobnými firmami na systematickém
                oslovování průmyslových investorů a generálních dodavatelů mimo váš stávající region.
                Dává vám smysl 15 minut na to, zda by to mohlo fungovat i u vás?"
              </p>
            </div>
          </div>

          <p>
            Rozdíl je zásadní. Druhá zpráva prokazuje, že odesílatel četl web. Mluví ke konkrétní situaci —
            specializaci na jeřáby, region, typ zákazníků. Příjemce cítí, že zpráva je určena jemu, ne
            tisícovce dalších kontaktů.
          </p>

          <H2>Co konkrétně AI hledá na webu prospekta</H2>

          <p>
            Dobrý systém AI personalizace emailů identifikuje na webu firmy tyto informace:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
            {[
              { label: 'Hlavní produkt nebo služba', desc: 'Co firma skutečně prodává nebo nabízí' },
              { label: 'Způsob odlišení', desc: 'Čím se liší od konkurence, co zdůrazňují' },
              { label: 'Cílová skupina', desc: 'Komu prodávají, na jaký segment cílí' },
              { label: 'Geografie', desc: 'Kde operují, zda expandují nebo cílí lokálně' },
              { label: 'Zmínky o výzvách', desc: 'Problémy, které řeší, nebo potřeby, které popisují' },
              { label: 'Tón komunikace', desc: 'Formální nebo neformální, technický nebo obecný' },
            ].map((item) => (
              <div key={item.label} style={{
                padding: '16px',
                borderRadius: '10px',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
              }}>
                <p style={{ fontWeight: 700, fontSize: '14px', color: 'var(--accent)', marginBottom: '6px' }}>{item.label}</p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <H2>Proč to funguje lépe — reálná čísla</H2>

          <p>
            Z kampaní SalesAgent.cz vycházejí tato čísla:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '36px', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '8px' }}>1–2 %</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>Response rate generického cold emailu</p>
            </div>
            <div style={{
              padding: '24px',
              borderRadius: '12px',
              border: '1px solid rgba(255,107,74,0.3)',
              background: 'rgba(255,107,74,0.06)',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: '36px', fontWeight: 800, color: 'var(--accent)', marginBottom: '8px' }}>3–6 %</p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>Response rate AI-personalizovaného emailu</p>
            </div>
          </div>

          <p>
            Při oslovení 500 firem měsíčně to znamená rozdíl mezi 5–10 a 15–30 odpověďmi. A kvalita
            odpovědí je také jiná — kdo reaguje na zprávu, která přesně popsala jeho situaci, má reálný zájem.
            Ne jen zvědavost.
          </p>

          <p>
            Dalším benefitem je reputace domény. Nízká míra spamu a vyšší engagement (otevření, odpovědi)
            udržuje dobré skóre odesílací domény, což přímo ovlivňuje deliverability dalších kampaní.
          </p>

          <H2>Jak to funguje v praxi u SalesAgent.cz</H2>

          <p>
            SalesAgent.cz je outsourcovaná B2B outreach služba — ne SaaS, který si sami nastavíte.
            Celý proces personalizace funguje takto:
          </p>

          <ol style={{ paddingLeft: '20px', marginBottom: '8px' }}>
            <li style={{ marginBottom: '12px' }}>Definujeme spolu ICP — obor, region, velikost firmy, pozici rozhodovatele</li>
            <li style={{ marginBottom: '12px' }}>Systém vyhledá firmy z Google Maps a dalších veřejných zdrojů (žádná databáze)</li>
            <li style={{ marginBottom: '12px' }}>AI (Claude) přečte web každé firmy a napíše personalizovaný email</li>
            <li style={{ marginBottom: '12px' }}>První email z každé nové kampaně zkontroluje člověk — pak systém pokračuje automaticky</li>
            <li style={{ marginBottom: '12px' }}>Paralelně probíhá LinkedIn outreach — email + LinkedIn současně, ne sequentially</li>
            <li style={{ marginBottom: '12px' }}>Odpovědi dostanete přímo do schránky — vy vstupujete do procesu až v okamžiku zájmu</li>
          </ol>

          <p>
            Výsledkem jsou schůzky v kalendáři s firmami, které reagovaly na zprávu relevantní jejich situaci.
            Ne cold calling, ne hromadný spam — personalizovaný outreach ve velkém měřítku.
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
              Chcete vidět, jak by AI napsala email vaší firmě?
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Na 30minutovém hovoru ukážeme konkrétní příklad personalizovaného emailu pro váš segment.
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
                Jak zavést automatizaci prodeje ve firmě — krok za krokem →
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
