import type { Metadata } from 'next'
import Link from 'next/link'

const url = 'https://salesagent.cz/blog/jak-najit-nove-leady'

export const metadata: Metadata = {
  title: 'Jak najít nové leady: kde hledat B2B zákazníky | SalesAgent.cz',
  description: 'Jak najít nové leady a B2B zákazníky bez koupené databáze? Kde hledat, jak je vybírat podle ICP a jak celý proces zautomatizovat, aby přísun leadů neustal.',
  keywords: ['jak najít nové leady', 'jak najít nové zákazníky', 'kde hledat B2B leady', 'získat nové leady', 'vyhledávání firem', 'B2B lead generation'],
  alternates: { canonical: url, languages: { cs: url, 'x-default': url } },
  openGraph: {
    title: 'Jak najít nové leady — kde hledat B2B zákazníky',
    description: 'Kde hledat nové B2B leady, jak je vybírat podle ICP a jak vyhledávání zautomatizovat, aby přísun neustal.',
    url,
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-09-21',
    modifiedTime: '2026-09-25',
    locale: 'cs_CZ',
    images: [{ url: 'https://salesagent.cz/blog/external-sales.jpg', width: 640, height: 400, alt: 'Jak najít nové B2B leady a zákazníky' }],
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Jak najít nové B2B leady bez koupené databáze?',
    a: 'Nejlepší leady nevznikají koupí seznamu, ale vyhledáním firem přímo u zdroje: veřejné rejstříky (ARES), mapy, firemní weby, profesní sítě a oborové katalogy. Podle ideálního zákazníka (ICP) se z nich vyberou jen relevantní firmy a k nim dohledají rozhodovatelé. Výsledek je aktuálnější a přesnější než nakoupená databáze, která bývá z velké části neplatná.',
  },
  {
    q: 'Kde hledat nové zákazníky pro B2B?',
    a: 'Podle typu nabídky: obchodní rejstřík a mapy pro lokální a oborové cílení, LinkedIn pro dohledání rozhodovatelů, firemní weby pro ověření relevance a signálů, oborové katalogy a akce pro nika trhy. Klíč není jeden zdroj, ale kombinace zdrojů filtrovaná přes jasné ICP.',
  },
  {
    q: 'Jak poznat kvalitní lead od nekvalitního?',
    a: 'Kvalitní lead odpovídá vašemu ICP (obor, velikost, region, role rozhodovatele) a má důvod řešit vaši nabídku. Nekvalitní je firma mimo profil nebo bez rozhodovací pravomoci u kontaktu. Proto se leady po nalezení kvalifikují a skórují, aby obchodník řešil ty nejteplejší jako první.',
  },
  {
    q: 'Jak zajistit stálý přísun nových leadů?',
    a: 'Jednorázová akce naplní pipeline na pár týdnů, pak přísun ustane. Stálý tok zajistí opakovatelný proces: systém pravidelně vyhledává firmy podle ICP, kvalifikuje je, osloví a předá odpovědi obchodníkovi. Tím se hledání leadů nezastaví ve chvíli, kdy má obchodník napilno s uzavíráním.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Jak najít nové leady: kde hledat B2B zákazníky',
  description: 'Kde hledat nové B2B leady, jak je vybírat podle ICP a jak vyhledávání zautomatizovat, aby přísun leadů neustal.',
  image: 'https://salesagent.cz/blog/external-sales.jpg',
  datePublished: '2026-09-21',
  dateModified: '2026-09-25',
  inLanguage: 'cs',
  author: { '@type': 'Person', name: 'Petr Kubíček' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
}

const linkStyle = { color: 'var(--accent)', textDecoration: 'underline' }

export default function Page() {
  return (
    <article style={{ paddingTop: '96px', paddingBottom: '80px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link> {' / '} Hledání leadů
        </p>
        <img src="/blog/external-sales.jpg" alt="Jak najít nové B2B leady a zákazníky" style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }} />
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>B2B obchod · Hledání leadů</p>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '16px' }}>
          Jak najít nové leady — kde hledat B2B zákazníky, aniž byste kupovali databázi
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '48px' }}>21. září 2026 · Petr Kubíček · 8 minut čtení</p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ fontSize: '19px', lineHeight: 1.65 }}>
            <strong>Nové leady najdete tak, že firmy vyhledáte přímo u zdroje — ve veřejných rejstřících, mapách a na webech — a přes jasné ICP z nich vyberete jen ty relevantní.</strong> Koupená databáze bývá z velké části neplatná a signalizuje, že jste si práci neudělali. Vlastní, aktuální výběr má vyšší kvalitu i lepší reakce.
          </p>

          <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '26px' }}>
            <p style={{ fontWeight: 700, fontSize: '19px', marginBottom: '8px' }}>Došly vám kontakty na oslovení?</p>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Hledání nových leadů je nejčastěji ta část obchodu, která se dělá nárazově a pak vypadne. Přitom právě z ní vzniká celá pipeline. Dá se z ní udělat pravidelný, opakovatelný proces.</p>
          </div>

          <H2>Kde hledat nové B2B leady</H2>
          <p>Neexistuje jeden zázračný zdroj — funguje kombinace filtrovaná přes ICP:</p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><strong>Veřejné rejstříky (ARES):</strong> firmy podle oboru (CZ-NACE), regionu a velikosti — čerstvá a úplná základna.</li>
            <li><strong>Mapy a katalogy:</strong> lokální a oborové cílení, provozovny, pobočky.</li>
            <li><strong>Firemní weby:</strong> ověření relevance a signálů (co firma dělá, komu prodává, čím se odlišuje).</li>
            <li><strong>LinkedIn:</strong> dohledání konkrétního rozhodovatele a jeho role.</li>
            <li><strong>Oborové akce a média:</strong> pro úzké niky, kde rejstřík nestačí.</li>
          </ul>

          <H2>Nejdřív ICP, teprve pak hledání</H2>
          <p>Bez profilu ideálního zákazníka se hledání zvrhne v sbírání e-mailů. Definujte obor, velikost, region, roli rozhodovatele a situaci, ve které má vaše nabídka nejvyšší hodnotu. Úzké ICP paradoxně přináší víc obchodu — vyšší relevanci a lepší reakce než široké „všechny firmy".</p>
          <p>Pokud zatím žádnou databázi nemáte, projděte si postup <Link href="/blog/jak-oslovit-firmy-bez-databaze" style={linkStyle}>jak oslovit firmy bez koupené databáze</Link>.</p>

          <H2>Najít nestačí — leady se musí vybrat a seřadit</H2>
          <p>Seznam nalezených firem není hotový výsledek. Firmy mimo ICP je potřeba odfiltrovat a zbytek seřadit podle priority, aby obchodník začal od nejteplejších. Jak na to konkrétně popisuje návod <Link href="/blog/jak-skorovat-leady" style={linkStyle}>jak skórovat leady</Link>; širší kontext kvalifikace pak <Link href="/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu" style={linkStyle}>AI agenti pro prospecting a kvalifikaci leadů</Link>.</p>

          <H2>Jak zajistit stálý přísun leadů</H2>
          <p>Jednorázová akce naplní pipeline na pár týdnů a pak utichne. Stálý tok zajistí opakovatelný proces, kde systém pravidelně vyhledává firmy podle ICP, kvalifikuje je, osloví a předá odpovědi obchodníkovi. Tím se hledání nezastaví ve chvíli, kdy má obchodník napilno s uzavíráním.</p>
          <p>Jak vyhledávání zapadá do celého automatizovaného obchodu, ukazuje pilíř <Link href="/blog/jak-rozjet-a-zautomatizovat-b2b-obchod" style={linkStyle}>jak rozjet a zautomatizovat B2B obchod</Link>. Pokud už víte, komu chcete prodávat, a řešíte původ a čistotu dat, čtěte samostatný návod <Link href="/blog/b2b-kontakty-ceske-firmy" style={linkStyle}>kde vzít B2B kontakty na české firmy bez duplicit</Link>. Samotné vyhledávání a výběr firem řeší i služba <Link href="/cs/b2b-lead-generation" style={linkStyle}>generování B2B leadů</Link>.</p>

          <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '34px', textAlign: 'center', marginTop: '16px' }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '23px', fontWeight: 700, marginBottom: '12px' }}>Nechcete leady hledat ručně?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '24px' }}>Nastavíme vyhledávání firem podle vašeho ICP, vybereme jen relevantní, dohledáme rozhodovatele a předáme leady připravené k oslovení. Standardní řešení spustíme během jednoho pracovního dne.</p>
            <Link href="/cs/contact" style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: '#0B1320', fontWeight: 700, fontSize: '15px', padding: '14px 30px', borderRadius: '9px', textDecoration: 'none' }}>Probrat hledání leadů →</Link>
          </div>

          <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Časté otázky</h2>
            <div>{faqs.map(({ q, a }) => <details key={q} className="spoke-faq"><summary>{q}</summary><div>{a}</div></details>)}</div>
          </section>

          <nav style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Pokračujte do detailu</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Related href="/blog/jak-rozjet-a-zautomatizovat-b2b-obchod">Jak rozjet a zautomatizovat B2B obchod</Related>
              <Related href="/blog/jak-skorovat-leady">Jak skórovat leady — lead scoring pro B2B</Related>
              <Related href="/blog/jak-oslovit-firmy-bez-databaze">Jak oslovit firmy bez koupené databáze</Related>
              <Related href="/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu">AI agenti pro prospecting a kvalifikaci leadů</Related>
            </div>
          </nav>
          <p style={{ maxWidth: '760px', margin: '24px auto 0', padding: '0 24px', fontSize: '15px', lineHeight: 1.7 }}>
            Navazující průvodce: <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>automatizace prodeje</Link>.
          </p>

          <style>{`
            .spoke-faq { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; margin-bottom: 10px; }
            .spoke-faq summary { cursor: pointer; list-style: none; padding: 16px 20px; font-weight: 600; font-size: 15px; display: flex; justify-content: space-between; gap: 12px; }
            .spoke-faq summary::-webkit-details-marker { display: none; }
            .spoke-faq summary::after { content: '+'; color: var(--accent); font-size: 20px; }
            .spoke-faq[open] summary::after { content: '−'; }
            .spoke-faq > div { padding: 0 20px 18px; color: var(--text-muted); font-size: 15px; line-height: 1.7; }
          `}</style>
        </div>
      </div>
    </article>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(23px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25, marginTop: '28px', marginBottom: '-4px' }}>{children}</h2>
}

function Related({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>{children} →</Link>
}
