import type { Metadata } from 'next'
import Link from 'next/link'

const url = 'https://salesagent.cz/blog/jak-rozjet-a-zautomatizovat-b2b-obchod'

export const metadata: Metadata = {
  title: 'Jak rozjet a zautomatizovat B2B obchod | SalesAgent.cz',
  description: 'Váš obchodník neprospektuje? Praktický návod, jak automatizovat hledání firem, oslovení, follow-up a kvalifikaci leadů, aby obchodník řešil teplé příležitosti.',
  keywords: ['jak rozjet obchod', 'automatizace B2B prodeje', 'sales automatizace', 'automatizace oslovení', 'jak začít s automatizací B2B prodeje', 'kvalifikace leadů'],
  alternates: { canonical: url, languages: { cs: url, 'x-default': url } },
  openGraph: {
    title: 'Jak rozjet a zautomatizovat B2B obchod — bez dalšího obchodníka',
    description: 'Systém vyhledává firmy, personalizuje oslovení, dělá follow-up a předává obchodníkovi teplé příležitosti.',
    url,
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-09-20',
    modifiedTime: '2026-09-20',
    locale: 'cs_CZ',
    images: [{ url: 'https://salesagent.cz/blog/automatizace-prodeje.jpg', width: 1200, height: 630, alt: 'Automatizovaný B2B obchod od prospectingu po teplou schůzku' }],
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Jak začít s automatizací B2B prodeje?',
    a: 'Začněte jasným ICP a jedním opakovatelným obchodním scénářem. Poté propojte zdroj firem, kvalifikaci, personalizované oslovení, follow-up a předání odpovědi do CRM. Nejdříve ověřte kvalitu na menším vzorku a až potom zvyšujte objem.',
  },
  {
    q: 'Co lze v B2B obchodu automatizovat?',
    a: 'Automatizovat lze hledání firem, obohacení kontaktů, prvotní kvalifikaci, přípravu personalizovaného e-mailu nebo LinkedIn zprávy, follow-up a zápis aktivit do CRM. Diagnostický hovor, nabídku, vyjednávání a uzavření obchodu má dál vést člověk.',
  },
  {
    q: 'Nahradí automatizace obchodníka?',
    a: 'Ne. Odstraňuje hlavně rutinní prospecting a hlídání follow-upů. Obchodník dostává více relevantních reakcí a může se soustředit na schůzky, pochopení potřeb a uzavření obchodu.',
  },
  {
    q: 'Jak dlouho trvá automatizovaný outbound spustit?',
    a: 'Standardní setup lze nasadit během jednoho pracovního dne, pokud jsou jasné cílové firmy, nabídka a odesílací účty. Složitější CRM integrace, schvalování nebo více trhů mohou přípravu prodloužit. Následně se systém ladí podle reálných odpovědí.',
  },
  {
    q: 'Jak systém kvalifikuje leady?',
    a: 'Porovnává firmu s ICP podle oboru, velikosti, lokality, technologií a dalších veřejných signálů. Po oslovení navíc rozlišuje zájem, odmítnutí, odklad a nerelevantní reakce, aby obchodník řešil jen smysluplné příležitosti.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: 'Jak rozjet a zautomatizovat B2B obchod — bez najímání dalšího obchodníka',
  description: 'Praktický návod, jak automatizovat B2B prospecting, oslovení, follow-up a kvalifikaci leadů a předávat obchodníkovi teplé příležitosti.',
  image: 'https://salesagent.cz/blog/automatizace-prodeje.jpg',
  datePublished: '2026-09-20',
  dateModified: '2026-09-20',
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
          <Link href="/blog" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Blog</Link> {' / '} Automatizace B2B obchodu
        </p>
        <img src="/blog/automatizace-prodeje.jpg" alt="Automatizovaný B2B obchod od prospectingu po teplou schůzku" style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }} />
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>B2B obchod · Praktický průvodce</p>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '16px' }}>
          Jak rozjet a zautomatizovat B2B obchod — bez najímání dalšího obchodníka
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '48px' }}>20. září 2026 · Petr Kubíček · 10 minut čtení</p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ fontSize: '19px', lineHeight: 1.65 }}>
            <strong>B2B obchod rozjedete tak, že oddělíte opakovatelný prospecting od lidského uzavírání.</strong> Systém vyhledá firmy, vyhodnotí shodu s vaším ICP, připraví oslovení, hlídá follow-up a předá teplou příležitost obchodníkovi. Ten už nemusí každý den hledat kontakty a soustředí se na schůzky, nabídky a uzavření obchodu.
          </p>

          <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '26px' }}>
            <p style={{ fontWeight: 700, fontSize: '19px', marginBottom: '8px' }}>Váš obchodník neprospektuje?</p>
            <p style={{ color: 'var(--text-muted)', margin: 0 }}>Není to neobvyklé. Prospecting soupeří o čas s hovory, nabídkami, péčí o klienty a administrativou. Řešením nemusí být další člověk. Opakovatelnou část lze převést na systém, který pracuje každý den podle stejných pravidel.</p>
          </div>

          <H2>Proč se obchod zastaví, i když máte dobrého obchodníka</H2>
          <p>Obchodník přirozeně upřednostňuje činnosti, kde už vidí konkrétní příležitost. Hledání nových firem, dohledávání rozhodovatelů a několik kol follow-upu proto často probíhá nárazově. Pipeline se naplní, tým přestane prospektovat, zakázky se uzavřou — a za několik týdnů není co řešit.</p>
          <p>Automatizace tento cyklus narovnává. Nevytváří poptávku kouzlem, ale zajišťuje pravidelný přísun správně vybraných firem a měřitelný proces od prvního signálu po odpověď.</p>

          <H2>Co má dělat systém a co obchodník</H2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead><tr><Th>Systém</Th><Th>Obchodník</Th></tr></thead>
              <tbody>
                <tr><Td>Vyhledá firmy podle ICP</Td><Td>Upřesní, kdo je dobrý zákazník</Td></tr>
                <tr><Td>Obohatí data a najde rozhodovatele</Td><Td>Ověří obchodní hypotézu</Td></tr>
                <tr><Td>Připraví personalizované oslovení</Td><Td>Schválí tón a argumentaci</Td></tr>
                <tr><Td>Hlídá sekvenci a follow-up</Td><Td>Reaguje na skutečný zájem</Td></tr>
                <tr><Td>Zapíše aktivitu a stav do CRM</Td><Td>Vede schůzku, nabídku a vyjednávání</Td></tr>
              </tbody>
            </table>
          </div>

          <H2>Jak vypadá automatizovaný B2B obchod v 7 krocích</H2>
          <ol style={{ display: 'flex', flexDirection: 'column', gap: '14px', paddingLeft: '24px' }}>
            <li><strong>Definice ICP:</strong> obor, velikost, lokalita, role rozhodovatele a situace, ve které má vaše nabídka nejvyšší hodnotu.</li>
            <li><strong>Vyhledání firem:</strong> systém čerpá z veřejných rejstříků, webů, map, profesních sítí a oborových zdrojů.</li>
            <li><strong>Obohacení dat:</strong> doplní web, kontakty, relevantní role a kontext, který pomůže zprávu personalizovat.</li>
            <li><strong>Kvalifikace a scoring:</strong> firmy mimo ICP odfiltruje a nejvhodnější seřadí podle reálných signálů.</li>
            <li><strong>Oslovení:</strong> připraví stručný e-mail nebo LinkedIn zprávu navázanou na konkrétní firmu, ne jen hromadnou šablonu.</li>
            <li><strong>Follow-up:</strong> připomene se v rozumném intervalu a zastaví sekvenci, jakmile příjemce reaguje.</li>
            <li><strong>Předání příležitosti:</strong> relevantní odpověď, kontext a dosavadní komunikaci zapíše do CRM a upozorní obchodníka.</li>
          </ol>
          <p>Detailní postup zavedení najdete také v návodu <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme" style={linkStyle}>jak zavést systematické oslovování firem krok za krokem</Link>.</p>

          <H2>Kvalifikace leadů: méně kontaktů, více obchodních příležitostí</H2>
          <p>Počet nalezených e-mailů není obchodní výsledek. Důležité je, zda firma odpovídá ICP, zda oslovujete správnou roli a zda existuje důvod řešit nabídku právě teď. Scoring proto kombinuje pevná kritéria s veřejnými signály a výsledky předchozích kampaní.</p>
          <p><Link href="/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu" style={linkStyle}>AI agenti pro prospecting a kvalifikaci leadů</Link> mohou průběžně analyzovat weby a upřednostnit firmy, kterým dává oslovení největší smysl. Konkrétní bodovací model najdete v návodu <Link href="/blog/jak-skorovat-leady" style={linkStyle}>jak skórovat leady</Link>.</p>

          <H2>E-mail, LinkedIn a demo jako jeden proces</H2>
          <p>Kanály nemají fungovat jako oddělené kampaně. E-mail může otevřít téma, LinkedIn dodat důvěryhodnost a interaktivní demo ukázat produkt ještě před schůzkou. Důležitá je společná historie kontaktu a jedno místo, kde obchodník vidí, co se stalo.</p>
          <p>Prakticky to znamená propojit <Link href="/cs/automatizovane-osloveni" style={linkStyle}>automatizované oslovení</Link>, personalizaci, follow-up a CRM. Pokud databázi nemáte, lze začít i <Link href="/blog/jak-oslovit-firmy-bez-databaze" style={linkStyle}>oslovováním firem bez koupené databáze</Link>.</p>

          <H2>Jak poznat, že automatizace funguje</H2>
          <p>Nesledujte jen počet odeslaných zpráv nebo open rate. Pro řízení B2B obchodu jsou podstatnější tyto metriky:</p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>podíl oslovených firem, které skutečně odpovídají ICP,</li>
            <li>míra odpovědí a podíl relevantních odpovědí,</li>
            <li>počet kvalifikovaných příležitostí a domluvených schůzek,</li>
            <li>rychlost reakce obchodníka na teplý lead,</li>
            <li>konverze ze schůzky do nabídky a uzavřeného obchodu.</li>
          </ul>
          <p>Po prvních odpovědích upravujte výběr firem, argumentaci i timing. Automatizace bez průběžného vyhodnocení pouze rychleji opakuje původní chybu.</p>

          <H2>Postavit vlastními silami, nebo nechat nasadit?</H2>
          <p>Interní stavba dává smysl, pokud máte člověka, který rozumí datům, doručitelnosti, CRM i obchodnímu copywritingu a bude systém dlouhodobě spravovat. Druhou cestou je nechat si proces navrhnout a nasadit a poté si zvolit, zda jej bude obsluhovat váš tým, nebo externí partner.</p>
          <p>Podrobné srovnání obou provozních modelů najdete v článku <Link href="/blog/kdo-postavi-automatizaci-b2b-obchodu" style={linkStyle}>kdo v ČR postaví automatizaci B2B obchodu</Link>.</p>

          <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '34px', textAlign: 'center', marginTop: '16px' }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '23px', fontWeight: 700, marginBottom: '12px' }}>Chcete obchod rozjet, ne skládat další nástroje?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '24px' }}>Navrhneme setup podle vašeho ICP, propojíme prospecting, oslovení, follow-up a CRM a standardní řešení spustíme během jednoho pracovního dne. Obchodníkovi zůstávají teplé příležitosti a uzavírání.</p>
            <Link href="/cs/contact" style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: '#0B1320', fontWeight: 700, fontSize: '15px', padding: '14px 30px', borderRadius: '9px', textDecoration: 'none' }}>Probrat automatizaci obchodu →</Link>
          </div>

          <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>Časté otázky</h2>
            <div>{faqs.map(({ q, a }) => <details key={q} className="pillar-faq"><summary>{q}</summary><div>{a}</div></details>)}</div>
          </section>

          <nav style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Pokračujte do detailu</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Related href="/blog/jak-zavest-automatizaci-prodeje-ve-firme">Jak zavést systematické oslovování firem</Related>
              <Related href="/blog/ai-agenti-b2b-prospecting-kvalifikace-leadu">AI agenti pro prospecting a kvalifikaci leadů</Related>
              <Related href="/blog/jak-skorovat-leady">Jak skórovat leady — lead scoring pro B2B</Related>
              <Related href="/blog/automatizace-prodeje-jak-ai-meni-b2b-osloveni">Jak AI mění automatizaci B2B oslovení</Related>
              <Related href="/blog/kdo-postavi-automatizaci-b2b-obchodu">Kdo postaví automatizaci B2B obchodu na klíč</Related>
            </div>
          </nav>

          <style>{`
            .pillar-faq { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; margin-bottom: 10px; }
            .pillar-faq summary { cursor: pointer; list-style: none; padding: 16px 20px; font-weight: 600; font-size: 15px; display: flex; justify-content: space-between; gap: 12px; }
            .pillar-faq summary::-webkit-details-marker { display: none; }
            .pillar-faq summary::after { content: '+'; color: var(--accent); font-size: 20px; }
            .pillar-faq[open] summary::after { content: '−'; }
            .pillar-faq > div { padding: 0 20px 18px; color: var(--text-muted); font-size: 15px; line-height: 1.7; }
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
