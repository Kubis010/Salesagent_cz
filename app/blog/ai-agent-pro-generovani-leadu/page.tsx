import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Generování B2B leadů v roce 2025: co funguje a co je mrtvé | SalesAgent.cz',
  description:
    'Studené databáze, LinkedIn spam a hromadné emaily přestávají fungovat. Co generuje B2B leady v 2025 reálně? AI prospecting bez databází, hyper-personalizace a vícekanálový outreach.',
  keywords: [
    'generování leadů',
    'B2B lead generation',
    'generování B2B leadů',
    'jak generovat leady',
    'lead generation 2025',
  ],
  alternates: {
    canonical: 'https://salesagent.cz/blog/ai-agent-pro-generovani-leadu',
    languages: {
      cs: 'https://salesagent.cz/blog/ai-agent-pro-generovani-leadu',
      'x-default': 'https://salesagent.cz/blog/ai-agent-pro-generovani-leadu',
    },
  },
  openGraph: {
    title: 'Generování B2B leadů v roce 2025: co funguje a co je mrtvé',
    description:
      'Studené databáze a hromadné emaily přestávají fungovat. Co generuje B2B leady v 2025 reálně.',
    url: 'https://salesagent.cz/blog/ai-agent-pro-generovani-leadu',
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2025-05-20',
    locale: 'cs_CZ',
    images: [{ url: 'https://salesagent.cz/blog/generovani-b2b-leadu.jpg', width: 1200, height: 630, alt: 'Generování B2B leadů v roce 2025' }],
  },
  robots: { index: true, follow: true },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Generování B2B leadů v roce 2025: co funguje a co je mrtvé',
  description: 'Studené databáze, LinkedIn spam a hromadné emaily přestávají fungovat. Co generuje B2B leady v 2025 reálně.',
  image: 'https://salesagent.cz/blog/generovani-b2b-leadu.jpg',
  datePublished: '2025-05-20',
  dateModified: '2025-05-20',
  inLanguage: 'cs',
  author: { '@type': 'Organization', name: 'SalesAgent.cz', url: 'https://salesagent.cz' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://salesagent.cz/blog/ai-agent-pro-generovani-leadu' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Proč přestávají fungovat studené databáze jako Apollo nebo Lusha?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Databáze sdílí tisíce uživatelů — stejné kontakty dostávají desítky studených emailů měsíčně od různých odesílatelů. Data rychle zastarávají (20–30 % ročně). A protože všichni oslovují stejné lidi, příjemci jsou vůči cold outreachi imunní. Výsledkem jsou klesající response rates a poškozená reputace domény.',
      },
    },
    {
      '@type': 'Question',
      name: 'Co je AI prospecting bez databáze?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI prospecting bez databáze znamená vyhledávání firem přímo z veřejných zdrojů — Google Maps, firemní rejstříky (ARES), oborové portály, LinkedIn — v reálném čase. Firmy jsou čerstvé, nikdo jiný je nescrape ze stejného zdroje ve stejnou dobu. AI pak přečte web každé firmy a napíše personalizovaný email, který reaguje na konkrétní obsah.',
      },
    },
    {
      '@type': 'Question',
      name: 'Kolik B2B leadů reálně lze generovat za měsíc?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Závisí na velikosti cílového trhu a přesnosti ICP. Reálná čísla: 500–1 500 oslovených firem měsíčně, response rate 1–3 % u personalizovaného outreache = 5–45 odpovědí. Z odpovědí se typicky 30–50 % konvertuje na schůzku.',
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
          {' / '}Generování B2B leadů v roce 2025
        </p>

        <img
          src="/blog/generovani-b2b-leadu.jpg"
          alt="Generování B2B leadů v roce 2025 — co funguje a co ne"
          style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }}
        />

        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>
          Lead generation · B2B outreach
        </p>
        <h1 style={{
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: 'clamp(26px, 4vw, 40px)',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: '16px',
        }}>
          Generování B2B leadů v roce 2025: co funguje a co je mrtvé
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '48px' }}>
          20. května 2025 · Petr Kubíček
        </p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>

          <p>
            Krajina B2B lead generation se za poslední tři roky dramaticky proměnila. Přístupy, které
            fungovaly v roce 2021, dnes generují zlomek původních výsledků. Spam filtry jsou chytřejší,
            příjemci otrlejší a sdílené databáze přeplněné. Přesto většina firem stále používá stejné metody
            — a diví se, proč výsledky klesají.
          </p>

          <p>
            Tenhle článek je přehled toho, co v generování B2B leadů v roce 2025 reálně funguje a co
            přestalo dávat smysl. Bez marketingové omáčky, s konkrétními čísly.
          </p>

          <H2>Co přestalo fungovat (nebo funguje čím dál hůř)</H2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                metoda: 'Studené databáze (Apollo, Lusha, Hunter)',
                problem: 'Stejné kontakty dostávají desítky cold emailů měsíčně od různých odesílatelů — všichni kupují stejnou databázi. Data zastarávají 20–30 % ročně. Příjemci jsou vůči generickému outreachi imunní. Response rate klesá každým rokem.',
              },
              {
                metoda: 'Hromadné cold emaily bez personalizace',
                problem: 'Spam filtry dnes zachytí většinu hromadných rozesílek ještě před doručením. Co projde, ignorují příjemci. A odeslání tisíce generických emailů z jedné domény ji poškodí tak, že ani personalizované zprávy nedorazí do doručené pošty.',
              },
              {
                metoda: 'LinkedIn InMail spam',
                problem: 'Acceptance rate LinkedIn connection requestů klesá. Lidé si nastavují přísnější filtry. A uživatelé, kteří dostávají desítky nevyžádaných InMailů týdně, přestávají reagovat na cokoli, co přijde od cizí osoby.',
              },
              {
                metoda: 'Retargeting reklamy jako primární lead gen kanál',
                problem: 'GDPR a cookie-less prostředí omezují přesnost retargetingu. Cena za klik roste, konverzní poměr klesá. Pro generování nových B2B leadů (ne retenci) jsou reklamy stále méně efektivní jako samostatný kanál.',
              },
            ].map((item) => (
              <div key={item.metoda} style={{
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid rgba(239,68,68,0.2)',
                background: 'rgba(239,68,68,0.04)',
              }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#ef4444', flexShrink: 0 }}>✕</span>
                  <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text)', margin: 0 }}>{item.metoda}</p>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, paddingLeft: '22px', lineHeight: 1.6 }}>{item.problem}</p>
              </div>
            ))}
          </div>

          <H2>Co funguje v 2025</H2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                metoda: 'AI prospecting bez databáze',
                desc: 'Vyhledávání firem přímo z veřejných zdrojů v reálném čase — Google Maps, ARES, oborové portály. Firmy jsou čerstvé, nikdo jiný je nescrape ze stejného zdroje ve stejnou chvíli. Výsledkem jsou kontakty, které databázové nástroje nenabízejí.',
              },
              {
                metoda: 'Hyper-personalizace: AI čte web každého prospekta',
                desc: 'Místo šablony s proměnnými AI přečte web cílové firmy a napíše email, který reaguje na konkrétní obsah. Příjemce pozná, že zpráva je určena jemu — ne tisícovce dalších lidí. Response rate je 3–6× vyšší než u generických emailů.',
              },
              {
                metoda: 'Vícekanálový outreach: email + LinkedIn současně',
                desc: 'Email a LinkedIn zároveň, ne sequentially. Firma dostane email v úterý, v pátek přijde LinkedIn connection request s personalizovanou poznámkou. Dva doteky z různých kanálů v krátkém čase výrazně zvyšují pravděpodobnost odpovědi.',
              },
              {
                metoda: 'Intent-based targeting',
                desc: 'Oslovat firmy, které právě teď pravděpodobně hledají řešení: firmy, které nabírají obchodníky (signál rostoucí poptávky), expandují do nového regionu, mění IT systémy, nebo právě získaly investici. Tyto signály jsou z veřejných zdrojů dostupné a dramaticky zvyšují relevanci oslovení.',
              },
            ].map((item) => (
              <div key={item.metoda} style={{
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid rgba(255,107,74,0.25)',
                background: 'rgba(255,107,74,0.04)',
              }}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--accent)', flexShrink: 0 }}>✓</span>
                  <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text)', margin: 0 }}>{item.metoda}</p>
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, paddingLeft: '22px', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <H2>Jak SalesAgent.cz generuje leady bez databáze</H2>

          <p>
            Konkrétní příklad z praxe — jak vypadá lead generation kampaň pro firmu prodávající software
            pro správu skladů středním výrobním firmám:
          </p>

          <ol style={{ paddingLeft: '20px', marginBottom: '8px' }}>
            <li style={{ marginBottom: '10px' }}>Definujeme ICP: výrobní firmy 30–300 zaměstnanců, ČR + SK, s fyzickým skladem</li>
            <li style={{ marginBottom: '10px' }}>Systém vyhledá firmy z Google Maps podle klíčových slov jako "výroba", "sklad", "logistika" v cílových regionech</li>
            <li style={{ marginBottom: '10px' }}>AI přečte web každé firmy: zjistí, co vyrábí, jak velký sklad provozují, zda zmiňují problémy s logistikou</li>
            <li style={{ marginBottom: '10px' }}>Firmy bez relevantního webu nebo mimo ICP jsou automaticky vyřazeny — do oslovení jdou jen kvalifikované</li>
            <li style={{ marginBottom: '10px' }}>Pro každou firmu AI napíše unikátní email, který reaguje na jejich konkrétní situaci</li>
            <li style={{ marginBottom: '10px' }}>Výstup: 400–600 oslovených firem měsíčně, z toho 15–25 odpovědí, 6–12 schůzek</li>
          </ol>

          <p>
            Klíčový rozdíl oproti databázovému přístupu: firmy jsou čerstvé, oslovení je unikátní a
            nikdo jiný ve stejnou chvíli neprovádí identickou kampaň na stejné kontakty.
          </p>

          <H2>Kolik leadů reálně generovat</H2>

          <p>
            Čísla závisí na trzích a ICP, ale tato čísla jsou reálná pro česko-slovenský trh:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
            {[
              { label: 'Oslovených firem / měsíc', value: '500–1 500' },
              { label: 'Response rate (personalizace)', value: '1–3 %' },
              { label: 'Schůzek / měsíc', value: '5–45' },
            ].map((stat) => (
              <div key={stat.label} style={{
                padding: '20px',
                borderRadius: '12px',
                border: '1px solid var(--border)',
                background: 'var(--bg-card)',
                textAlign: 'center',
              }}>
                <p style={{ fontSize: '26px', fontWeight: 800, color: 'var(--accent)', marginBottom: '6px' }}>{stat.value}</p>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{stat.label}</p>
              </div>
            ))}
          </div>

          <p>
            Čísla se výrazně liší podle oboru a kvality ICP. Firmy s přesně definovanou cílovou skupinou
            a silným hodnotovým argumentem dosahují horní hranice. Firmy s vágním ICP nebo slabou
            personalizací zůstávají na dolní hranici nebo pod ní.
          </p>

          <H2>Jak začít s generováním B2B leadů v 2025</H2>

          <p>
            Tři kroky, bez kterých jakýkoliv systém selže:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
            }}>
              <p style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                1. Definujte ICP co nejpřesněji
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                Obor, region, velikost firmy (počet zaměstnanců nebo obrat), pozice rozhodovatele
                (jednatel, obchodní ředitel, IT manažer). Čím přesnější, tím vyšší relevance oslovení
                a vyšší response rate.
              </p>
            </div>
            <div style={{
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
            }}>
              <p style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                2. Určete "trigger" — proč by vás firma potřebovala právě teď
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                Nejlepší cold email nevysvětluje, co děláte — vysvětluje, proč je řešení relevantní
                pro konkrétní situaci firmy právě v tuto chvíli. Nabírají obchodníky? Rozrůstají se?
                Zmiňují na webu problém, který řešíte? Trigger zvyšuje relevanci zprávy výrazněji
                než jakákoliv jiná proměnná.
              </p>
            </div>
            <div style={{
              padding: '20px',
              borderRadius: '10px',
              border: '1px solid var(--border)',
              background: 'var(--bg-card)',
            }}>
              <p style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>
                3. Nastavte systém nebo outsourcujte
              </p>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                Interní systém (Clay + Lemlist + vlastní AI) dává smysl, pokud máte technický tým a
                čas na nastavení. Outsourcovaná služba (jako SalesAgent.cz) dává smysl, pokud chcete
                výsledky bez investice do infrastruktury a průběžného managementu.
              </p>
            </div>
          </div>

          <div style={{
            background: 'rgba(255,107,74,0.06)',
            border: '1px solid rgba(255,107,74,0.25)',
            borderRadius: '14px',
            padding: '32px',
            marginTop: '16px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '12px', fontFamily: 'Space Grotesk, sans-serif' }}>
              Chceme vidět, kolik leadů bychom vygenerovali pro váš trh
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Na 30minutovém hovoru odhadneme reálný potenciál pro váš obor a ukážeme konkrétní příklady
              oslovení.
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
              <Link href="/blog/jak-personalizovat-cold-emaily-ai" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak AI personalizuje cold emaily — bez šablon, bez proměnných →
              </Link>
              <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme" style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>
                Jak zavést automatizaci prodeje ve firmě — krok za krokem →
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
