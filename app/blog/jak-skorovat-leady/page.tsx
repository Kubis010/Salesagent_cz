import type { Metadata } from 'next'
import Link from 'next/link'

const url = 'https://salesagent.cz/blog/jak-skorovat-leady'

export const metadata: Metadata = {
  title: 'Jak skórovat leady: lead scoring pro B2B obchod | SalesAgent.cz',
  description: 'Jak skórovat leady, aby obchodník řešil jen teplé příležitosti? Praktický model lead scoringu: fit podle ICP + nákupní signály, bodování a automatizace kvalifikace.',
  keywords: ['jak skórovat leady', 'lead scoring', 'skórování leadů', 'kvalifikace leadů', 'bodování leadů', 'lead scoring B2B'],
  alternates: { canonical: url, languages: { cs: url, 'x-default': url } },
  openGraph: {
    title: 'Jak skórovat leady — lead scoring pro B2B obchod',
    description: 'Model lead scoringu pro B2B: shoda s ICP + nákupní signály, bodování a automatizace, aby obchodník řešil jen nejteplejší příležitosti.',
    url,
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-09-22',
    modifiedTime: '2026-09-22',
    locale: 'cs_CZ',
    images: [{ url: 'https://salesagent.cz/blog/arrows.jpg', width: 640, height: 360, alt: 'Lead scoring — seřazení B2B leadů podle priority' }],
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Co je lead scoring (skórování leadů)?',
    a: 'Lead scoring je bodování leadů podle toho, jak dobře odpovídají ideálnímu zákazníkovi (ICP) a jak silné vysílají nákupní signály. Cílem není seřadit kontakty podle abecedy, ale podle pravděpodobnosti, že z nich vznikne obchod — aby obchodník řešil nejdřív ty nejteplejší.',
  },
  {
    q: 'Podle čeho skórovat leady v B2B?',
    a: 'Kombinují se dvě skupiny kritérií. Fit signály (odpovídá firma ICP?) — obor, velikost, lokalita, role rozhodovatele, technologie. A intent/engagement signály (má důvod řešit to teď?) — otevření a odpovědi na oslovení, návštěva webu, reakce na LinkedIn, nábor, expanze či jiná veřejná změna. Fit říká „stojí za oslovení", intent říká „oslovit právě teď".',
  },
  {
    q: 'Jaký je rozdíl mezi kvalifikací a skórováním leadů?',
    a: 'Kvalifikace je binární rozhodnutí — patří firma do ICP, nebo ne (ano/ne). Skórování je jemnější: kvalifikovaným firmám přiřadí pořadí podle síly shody a nákupních signálů, takže obchodník ví, koho kontaktovat jako prvního. V praxi jdou obě ruku v ruce: nejdřív odfiltrovat nevhodné, pak zbytek seřadit.',
  },
  {
    q: 'Dá se lead scoring automatizovat?',
    a: 'Ano. Systém porovná každou firmu s ICP, přečte její web a veřejné zdroje, přiřadí body podle předem daných pravidel a po oslovení přidá body za reálné reakce. Obchodník pak dostává průběžně seřazený seznam a nemusí ručně procházet stovky kontaktů. Model se dál ladí podle toho, které skóre skutečně vedlo k obchodu.',
  },
  {
    q: 'Jaké jsou nejčastější chyby při skórování leadů?',
    a: 'Skórovat jen podle engagementu (otevřený e-mail neznamená nákupní záměr), míchat fit a intent do jednoho čísla bez rozlišení, nikdy model nepřepočítat podle výsledků a skórovat příliš velký a nepřesný seznam. Lepší je menší, přesně zacílený seznam a jednoduchý, ale poctivě vyhodnocovaný model.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Jak skórovat leady: lead scoring pro B2B obchod',
  description: 'Praktický model lead scoringu pro B2B: shoda s ICP a nákupní signály, bodování a automatizace kvalifikace, aby obchodník řešil jen teplé příležitosti.',
  image: 'https://salesagent.cz/blog/arrows.jpg',
  datePublished: '2026-09-22',
  dateModified: '2026-09-22',
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
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link> {' / '} Lead scoring
        </p>
        <img src="/blog/arrows.jpg" alt="Lead scoring — seřazení B2B leadů podle priority" style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }} />
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>B2B obchod · Kvalifikace leadů</p>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '16px' }}>
          Jak skórovat leady — lead scoring, který obchodníkovi ušetří čas
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '48px' }}>22. září 2026 · Petr Kubíček · 8 minut čtení</p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ fontSize: '19px', lineHeight: 1.65 }}>
            <strong>Leady skórujete tak, že každé firmě přiřadíte body za shodu s ideálním zákazníkem (ICP) a za nákupní signály — a seřadíte je podle výsledného skóre.</strong> Obchodník pak nezačíná náhodně od shora seznamu, ale od firem s nejvyšší pravděpodobností obchodu. Skórování nenahrazuje úsudek, jen mu dává pořadí.
          </p>

          <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '26px' }}>
            <p style={{ fontWeight: 700, fontSize: '19px', marginBottom: '8px' }}>Máte stovky kontaktů, ale nevíte, koho oslovit první?</p>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>To je přesně problém, který lead scoring řeší. Místo abyste procházeli seznam odshora, dostanete firmy seřazené podle toho, jak dobře sedí a jak silně signalizují zájem.</p>
          </div>

          <H2>Co je lead scoring</H2>
          <p>Lead scoring (skórování leadů) je bodování firem podle pravděpodobnosti, že z nich vznikne obchod. Není to seznam všech kontaktů — je to <strong>seřazený</strong> seznam, kde nahoře jsou příležitosti, kterým se vyplatí věnovat jako prvním. Tím se liší od pouhé <Link href="/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu" style={linkStyle}>kvalifikace leadů</Link>, která rozhoduje jen ano/ne.</p>

          <H2>Podle čeho skórovat: fit vs. intent</H2>
          <p>Poctivý model kombinuje dvě různé věci a nemíchá je do jednoho čísla:</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead><tr><Th>Fit signály (stojí za oslovení?)</Th><Th>Intent signály (oslovit teď?)</Th></tr></thead>
              <tbody>
                <tr><Td>Obor a zaměření odpovídá ICP</Td><Td>Otevření a odpověď na oslovení</Td></tr>
                <tr><Td>Velikost firmy a počet zaměstnanců</Td><Td>Opakovaná návštěva webu nebo ceníku</Td></tr>
                <tr><Td>Lokalita a jazyk</Td><Td>Reakce na LinkedIn zprávu či příspěvek</Td></tr>
                <tr><Td>Role a dosažitelnost rozhodovatele</Td><Td>Nábor, expanze, nová pobočka (veřejná změna)</Td></tr>
                <tr><Td>Technologie a zralost firmy</Td><Td>Poptávka nebo zmínka o řešeném problému</Td></tr>
              </tbody>
            </table>
          </div>
          <p>Fit říká „tahle firma dává smysl". Intent říká „právě teď má důvod poslouchat". Firma s vysokým fitem, ale nulovým intentem patří do dlouhodobého nurture; firma s vysokým fitem i intentem je horký lead na dnešek.</p>

          <H2>Jednoduchý bodovací model, který stačí na začátek</H2>
          <p>Nepotřebujete složitý systém. Začněte s pár pravidly a body sčítejte:</p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Přesná shoda oboru s ICP: <strong>+30</strong></li>
            <li>Velikost firmy v cílovém rozmezí: <strong>+20</strong></li>
            <li>Dohledatelný rozhodovatel se správnou rolí: <strong>+15</strong></li>
            <li>Odpověď nebo kliknutí na oslovení: <strong>+20</strong></li>
            <li>Veřejný signál (nábor, expanze, nová služba): <strong>+15</strong></li>
            <li>Mimo region nebo mimo ICP: <strong>−40</strong> (nebo rovnou vyřadit)</li>
          </ul>
          <p>Firmy nad zvolený práh (např. 50 bodů) jdou obchodníkovi, zbytek do nurture nebo k vyřazení. Práh i váhy postupně upravujte podle toho, které skóre reálně vedlo ke schůzce a obchodu.</p>

          <H2>Jak lead scoring automatizovat</H2>
          <p>Ruční skórování stovek firem je stejná pastí jako ruční prospecting — nikdo na to nemá čas. Systém umí porovnat každou firmu s ICP, přečíst její web a veřejné zdroje, přiřadit body podle pravidel a po oslovení skóre průběžně přepočítat podle reálných reakcí.</p>
          <p>Scoring proto nemá stát bokem, ale být součástí celého procesu — od <Link href="/cs/automatizovane-osloveni" style={linkStyle}>automatizovaného oslovení</Link> po zápis do CRM. Jak to zapadá do celku, popisuje pilíř <Link href="/blog/jak-rozjet-a-zautomatizovat-b2b-obchod" style={linkStyle}>jak rozjet a zautomatizovat B2B obchod</Link>.</p>

          <H2>Nejčastější chyby při skórování leadů</H2>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Skórovat jen podle engagementu — otevřený e-mail není nákupní záměr.</li>
            <li>Slít fit a intent do jednoho čísla, takže nevíte, jestli firma nesedí, nebo jen zatím nereaguje.</li>
            <li>Model jednou nastavit a nikdy nepřepočítat podle skutečných obchodů.</li>
            <li>Skórovat obří nepřesný seznam místo menšího, dobře zacíleného.</li>
          </ul>

          <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '34px', textAlign: 'center', marginTop: '16px' }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '23px', fontWeight: 700, marginBottom: '12px' }}>Nechcete skóre počítat ručně?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '24px' }}>Nastavíme scoring podle vašeho ICP, propojíme ho s vyhledáváním firem, oslovením a CRM a obchodníkovi budeme předávat průběžně seřazené teplé příležitosti. Standardní řešení spustíme během jednoho pracovního dne.</p>
            <Link href="/cs/contact" style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: '#0B1320', fontWeight: 700, fontSize: '15px', padding: '14px 30px', borderRadius: '9px', textDecoration: 'none' }}>Probrat kvalifikaci leadů →</Link>
          </div>

          <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Časté otázky</h2>
            <div>{faqs.map(({ q, a }) => <details key={q} className="spoke-faq"><summary>{q}</summary><div>{a}</div></details>)}</div>
          </section>

          <nav style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Pokračujte do detailu</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Related href="/blog/jak-rozjet-a-zautomatizovat-b2b-obchod">Jak rozjet a zautomatizovat B2B obchod</Related>
              <Related href="/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu">AI agenti pro prospecting a kvalifikaci leadů</Related>
              <Related href="/blog/jak-oslovit-firmy-bez-databaze">Jak oslovit firmy bez koupené databáze</Related>
              <Related href="/blog/kdo-postavi-automatizaci-b2b-obchodu">Kdo postaví automatizaci B2B obchodu na klíč</Related>
            </div>
          </nav>

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

function Th({ children }: { children: React.ReactNode }) {
  return <th style={{ textAlign: 'left', padding: '12px', borderBottom: '1px solid var(--border)', color: 'var(--text)' }}>{children}</th>
}

function Td({ children }: { children: React.ReactNode }) {
  return <td style={{ padding: '12px', borderBottom: '1px solid var(--border)', verticalAlign: 'top' }}>{children}</td>
}

function Related({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href} style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>{children} →</Link>
}
