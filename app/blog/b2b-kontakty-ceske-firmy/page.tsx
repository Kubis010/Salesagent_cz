import type { Metadata } from 'next'
import Link from 'next/link'

const url = 'https://salesagent.cz/blog/b2b-kontakty-ceske-firmy'
const title = 'Kde vzít B2B kontakty na české firmy — legálně, kvalitně a bez duplicit'
const description = 'Kde získat B2B kontakty na české firmy: ARES, obchodní rejstřík, Sales Navigator, komerční data a firemní weby. Jak ověřit kvalitu, odstranit duplicity a řešit GDPR.'

export const metadata: Metadata = {
  title: `${title} | SalesAgent.cz`,
  description,
  keywords: ['B2B kontakty na české firmy', 'kvalitní B2B kontakty', 'databáze firemních kontaktů', 'B2B kontakty bez duplicit', 'kde vzít kontakty na firmy'],
  alternates: { canonical: url, languages: { cs: url, 'x-default': url } },
  openGraph: {
    title,
    description,
    url,
    siteName: 'SalesAgent.cz',
    type: 'article',
    publishedTime: '2026-09-25',
    modifiedTime: '2026-11-27',
    locale: 'cs_CZ',
    images: [{ url: 'https://salesagent.cz/blog/external-sales.jpg', width: 640, height: 400, alt: 'Zdroje a kvalita B2B kontaktů na české firmy' }],
  },
  robots: { index: true, follow: true },
}

const faqs = [
  {
    q: 'Jak získat kvalitní B2B kontakty na české firmy bez duplicit?',
    a: 'Začněte seznamem firem podle IČO v ARES nebo obchodním rejstříku, doplňte web a vhodnou roli rozhodovatele, potom slučte záznamy podle IČO. Kontakty ověřte u zdroje, zkontrolujte doručitelnost e-mailu a před použitím vyřaďte neaktuální a dříve odmítnuté kontakty.',
  },
  {
    q: 'Moji obchodníci mají nedostatek leadů. Kde hledat nové příležitosti?',
    a: 'Pro seznam českých firem využijte ARES a obchodní rejstřík. Na webech firem a v Sales Navigatoru ověřte, zda odpovídají vašemu cílovému profilu a kdo má danou oblast na starosti. Rozhodující je průběžně aktualizovaný a vyčištěný seznam, ne jednorázový export.',
  },
  {
    q: 'Který nástroj poskytne leady pro český trh?',
    a: 'Jeden zdroj obvykle nestačí. ARES pomůže ověřit firmu a IČO, Sales Navigator najít relevantní roli, komerční databáze mohou zrychlit obohacení a firemní web potvrdí aktuální kontext. Před nákupem dat si ověřte původ, stáří, licenci a možnosti oprav.',
  },
  {
    q: 'Je databáze firemních e-mailů zdarma vhodná pro oslovení?',
    a: 'Bezplatný seznam může být výchozí podklad pro kontrolu firem, ale často neříká, kdy a odkud kontakt pochází, zda je aktuální a zda už jej někdo odmítl. Zveřejněný e-mail ani nákup databáze navíc samy o sobě nedávají souhlas k zasílání obchodních sdělení.',
  },
  {
    q: 'Kde najdu kontakty na firmy zdarma?',
    a: 'Firmy a IČO ověříte zdarma v ARES a veřejném rejstříku. Veřejné kontaktní údaje a informace o nabídce najdete na firemních webech; dostupnost konkrétních kontaktů se liší.',
  },
  {
    q: 'Která B2B databáze firem je nejlepší?',
    a: 'Univerzálně nejlepší databáze neexistuje. Záleží na segmentu, požadovaných údajích a aktuálnosti. Před nákupem si vyžádejte vzorek ze svého oboru a ověřte původ dat i možnosti oprav.',
  },
  {
    q: 'Smím poslat e-mail na adresu z veřejného rejstříku?',
    a: 'Veřejně dostupná adresa sama o sobě není souhlas se zasíláním obchodních sdělení. U stávajících zákazníků může za zákonných podmínek platit výjimka pro vlastní obdobnou nabídku s možností odmítnutí. Konkrétní kampaň si nechte právně posoudit.',
  },
]

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: title,
  description,
  image: 'https://salesagent.cz/blog/external-sales.jpg',
  datePublished: '2026-09-25',
  dateModified: '2026-11-27',
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
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}><Link href="/blog" style={linkStyle}>Blog</Link> {' / '} B2B kontakty</p>
        <img src="/blog/external-sales.jpg" alt="Zdroje a kvalita B2B kontaktů na české firmy" style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }} />
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>B2B obchod · Firemní data</p>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.15, marginBottom: '16px' }}>{title}</h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '48px' }}>25. září 2026 · Aktualizováno 27. listopadu 2026 · Petr Kubíček · 7 minut čtení</p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ fontSize: '19px', lineHeight: 1.65 }}><strong>B2B kontakty na české firmy získáte kombinací ARES a obchodního rejstříku pro ověření firem, Sales Navigatoru pro dohledání správné role, komerčních dat a firemních webů pro doplnění kontextu.</strong> Výsledný seznam slučte podle IČO, ověřte aktuálnost každého kontaktu a evidujte zdroj. Seznam firem a oprávnění poslat jim obchodní sdělení jsou dvě různé věci.</p>

          <H2>Čtyři zdroje kontaktů a jejich limity</H2>
          <h3>1. ARES a obchodní rejstřík: základ pro seznam firem</h3>
          <p><a href="https://ares.gov.cz/ekonomicke-subjekty" style={linkStyle}>ARES Ministerstva financí</a> umožňuje vyhledávat ekonomické subjekty a ověřit IČO. <a href="https://www.or.justice.cz/ias/ui/rejstrik" style={linkStyle}>Veřejný rejstřík</a> pomůže ověřit zapsané společnosti a statutární osoby. Výhoda je jednoznačná identifikace firmy; limit je, že zápis v rejstříku sám o sobě neříká, kdo dnes rozhoduje o nákupu ani zda má firma právě teď zájem.</p>

          <h3>2. Sales Navigator: dohledání konkrétní role</h3>
          <p>Na LinkedIn Sales Navigatoru můžete filtrovat firmy a lidi podle aktuální společnosti, funkce, seniority, regionu a dalších kritérií. Hodí se ve chvíli, kdy znáte firmu, ale nevíte, kdo má řešit váš typ nabídky. Nevýhodou je placený přístup a nutnost ověřit, zda profil i role odpovídají skutečnosti. Nalezený profil nepředstavuje souhlas s marketingovým e-mailem.</p>

          <h3>3. Komerční databáze: rychlejší obohacení</h3>
          <p>Dodavatelé firemních dat, například Merk, mohou dodat velikost firmy, obor nebo kontaktní údaje v jednom výstupu. Před nákupem si vyžádejte vzorek pro svůj segment: kdy byla data naposledy aktualizována, jak vznikla, kolik záznamů má IČO a jak se řeší opravy či vyřazení. Rychlý export bez této kontroly může jen urychlit import duplicit do CRM.</p>

          <h3>4. Firemní weby: aktuální kontext</h3>
          <p>Web firmy ukáže její služby, lokality, tým a veřejně uvedené kontakty. Ruční kontrola je přesná, ale pomalá; automatizované získávání veřejných údajů pomůže s objemem, pokud respektuje podmínky zdroje a přiměřený rozsah sběru. U každého záznamu si ponechte URL zdroje a datum ověření. Web obvykle pomůže potvrdit relevanci firmy, ne automaticky získat přímý e-mail na rozhodovatele.</p>

          <H2>Která databáze firem se hodí pro váš obchod</H2>
          <p>Nejlepší databáze neexistuje. Záleží, jestli potřebujete seznam firem, konkrétní osobu, nebo kontext k oslovení.</p>
          <div style={{ overflowX: 'auto', maxWidth: '100%', minWidth: 0 }}>
            <table style={{ width: '100%', minWidth: '600px', borderCollapse: 'collapse', fontSize: '15px' }}>
              <thead><tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}><th style={{ padding: '10px' }}>Zdroj</th><th style={{ padding: '10px' }}>Co z něj dostanete</th><th style={{ padding: '10px' }}>Platí se</th><th style={{ padding: '10px' }}>Na co nestačí</th></tr></thead>
              <tbody>
                <tr><th scope="row" style={{ padding: '10px', textAlign: 'left' }}><Link href="/en/resources/czech-business-companies-register" style={linkStyle}>ARES a obchodní rejstřík</Link></th><td style={{ padding: '10px' }}>IČO, název, sídlo, obor činnosti, statutární osoby</td><td style={{ padding: '10px' }}>Veřejné, zdarma</td><td style={{ padding: '10px' }}>Přímý kontakt na rozhodovatele</td></tr>
                {[
                  ['Komerční databáze firem', 'Filtry podle velikosti a oboru, obohacené údaje', 'Placené', 'Aktuálnost ověřte na vzorku'],
                  ['LinkedIn Sales Navigator', 'Lidé podle role a firmy', 'Placené', 'E-mail a telefon, souhlas s oslovením'],
                  ['Firemní weby', 'Služby, tým, veřejné kontakty', 'Zdarma, ale ruční práce', 'Objem a aktuálnost'],
                ].map(([source, data, price, limitation]) => <tr key={source} style={{ borderTop: '1px solid var(--border)' }}><th scope="row" style={{ padding: '10px', textAlign: 'left' }}>{source}</th><td style={{ padding: '10px' }}>{data}</td><td style={{ padding: '10px' }}>{price}</td><td style={{ padding: '10px' }}>{limitation}</td></tr>)}
              </tbody>
            </table>
          </div>
          <h3>Jmenné příklady dodavatelů</h3>
          <p><a href="https://www.merk.cz/nastroj/" style={linkStyle}>Merk</a> nabízí vyhledávání a filtrování firemních dat pro ČR a SR. <a href="https://www.bizmachine.com/prospector" style={linkStyle}>BizMachine Prospector</a> poskytuje segmentaci firem a kontaktní údaje pro obchodní týmy. Podle informací výrobců, ověřeno 27. listopadu 2026; konkrétní dostupnost údajů si ověřte na vzorku.</p>

          <H2>Vlastní seznam, nebo koupená databáze?</H2>
          <p><strong>Koupená databáze</strong> se hodí, když potřebujete rychle větší objem firem v jasně vymezeném segmentu a můžete zkontrolovat vzorek. <strong>Vlastní seznam</strong> dává smysl pro úzký segment desítek až stovek firem, kde rozhoduje relevance a přesná role.</p>
          <p>Než data koupíte, zeptejte se: Kdy byl záznam naposledy ověřen? Odkud pochází? Má každá firma IČO? Jak se řeší opravy a námitky? Dostanete vzorek ze svého segmentu?</p>

          <H2>Příklad: 100 firem pro první kampaň</H2>
          <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li>Vymezte segment podle oboru CZ-NACE, velikosti a regionu.</li>
            <li>Vyhledejte odpovídající firmy a slučte záznamy podle IČO.</li>
            <li>Na webu každé firmy ověřte, že vašemu zadání skutečně odpovídá.</li>
            <li>Dohledejte jednu relevantní roli pro danou nabídku.</li>
            <li>Uložte zdroj a datum ověření, abyste se k údaji mohli vrátit.</li>
          </ol>

          <H2>Jak ze zdrojů udělat kvalitní seznam bez duplicit</H2>
          <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <li><strong>Vymezte ICP:</strong> obor, velikost, region, typ zákazníka a důvod, proč by nabídka měla být relevantní.</li>
            <li><strong>Spojte firmy podle IČO:</strong> sjednoťte názvy, dceřiné firmy a různé zápisy domén; jeden obchodní účet může mít více kontaktů.</li>
            <li><strong>Ověřte roli člověka:</strong> jednatel, obchodní ředitel nebo vedoucí provozu řeší různé nákupy. Adresa info@ je obecná schránka, ne ověřený rozhodovatel.</li>
            <li><strong>Zkontrolujte adresy a historii:</strong> opravte překlepy a neplatné domény, evidujte poslední kontrolu a vyřaďte vrácené zprávy i odmítnutí.</li>
            <li><strong>Uložte původ:</strong> zdroj, datum, účel a případný právní titul zpracování. Při změně práce kontaktní osoby musí být možné záznam aktualizovat.</li>
          </ol>
          <p>Praktický výstup není tabulka „10 000 e-mailů“, ale menší seznam firem, u kterých víte, proč odpovídají zadání, kdo je relevantní kontakt a odkud údaj pochází. <Link href="/blog/jak-skorovat-leady" style={linkStyle}>Skórování leadů</Link> pak určí pořadí, v jakém se jim má obchodník věnovat.</p>

          <H2>Legálně: databáze a oslovení nejsou totéž</H2>
          <p>U osobních údajů je potřeba určit účel a právní základ zpracování, splnit informační povinnost a respektovat námitku proti přímému marketingu. Oprávněný zájem podle GDPR se posuzuje pro konkrétní zpracování; <strong>není to univerzální povolení posílat cold e-maily</strong>. Zasílání obchodních sdělení elektronicky má v ČR navíc pravidla podle zákona č. 480/2004 Sb. ÚOOÚ upozorňuje, že se vztahují i na právnické osoby a veřejně dostupná adresa sama o sobě není souhlas.</p>
          <p>U stávajících zákazníků může za zákonných podmínek připadat v úvahu oslovení s vlastní obdobnou nabídkou a možností odmítnutí; u nových kontaktů nelze tento režim automaticky předpokládat. V evidenci držte i opt-out a nepokoušejte se odmítnutý kontakt znovu importovat z jiné databáze. Podrobnosti a odkazy na výklad ÚOOÚ najdete v článku <Link href="/blog/gdpr-a-cold-email" style={linkStyle}>GDPR a B2B cold e-mail</Link>; pro konkrétní kampaň si pravidla nechte právně posoudit.</p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Zdroj právní části: <a href="https://uoou.gov.cz/pravni-ramec/ochrana-osobnich-udaju/sireni-obchodnich-sdeleni" style={linkStyle}>ÚOOÚ – Šíření obchodních sdělení</a> a <a href="https://uoou.gov.cz/novinky/obchodni-sdeleni/gdpr-a-primy-elektronicky-marketing" style={linkStyle}>ÚOOÚ – GDPR a přímý elektronický marketing</a>.</p>

          <H2>Proč „databáze e-mailů zdarma“ většinou nestačí</H2>
          <p>Bezplatný soubor může obsahovat neaktivní firmy, několik verzí stejné společnosti, obecné schránky a adresy bez doloženého zdroje. Bez data posledního ověření nedokážete poznat, co se změnilo; bez historie odmítnutí můžete znovu zařadit člověka, který už další kontakt nechce. Cena exportu tedy není cena použitelného leadu. I placená databáze vyžaduje kontrolu vzorku a pravidelnou údržbu.</p>

          <H2>Od čistých dat k příležitosti</H2>
          <p>Když máte ověřený seznam, navazuje kvalifikace a teprve potom vhodná, právně přípustná cesta k oslovení. U firem, které projeví zájem, může interaktivní prohlídka produktu v Prezentéru zodpovědět první otázky; obchodník pak dostane kontext a řeší konkrétní příležitost. Širší postup popisuje návod <Link href="/blog/jak-rozjet-a-zautomatizovat-b2b-obchod" style={linkStyle}>jak rozjet automatizovaný B2B obchod</Link>.</p>
          <p>Chcete řešit spíše průběžný přísun příležitostí? Přečtěte si <Link href="/blog/jak-najit-nove-leady" style={linkStyle}>jak najít nové leady</Link>. Chcete vědět, co napsat a jak postupovat bez koupeného seznamu? Pokračujte na <Link href="/blog/jak-oslovit-firmy-bez-databaze" style={linkStyle}>oslovení firem bez databáze</Link>.</p>

          <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '32px', textAlign: 'center' }}>
            <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '23px', fontWeight: 700, marginBottom: '12px' }}>Potřebujete čistý seznam a navazující obchodní proces?</p>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '24px' }}>Nastavíme zdroje, ověřování a deduplikaci dat podle vašeho ICP a propojíme je s obchodním postupem. Automatizaci vám postavíme na míru; podle domluvy ji pak obsluhujeme my nebo váš tým.</p>
            <Link href="/cs/contact" style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: '#0B1320', fontWeight: 700, fontSize: '15px', padding: '14px 30px', borderRadius: '9px', textDecoration: 'none' }}>Probrat B2B kontakty →</Link>
          </div>

          <section style={{ marginTop: '24px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
            <h2>Časté otázky</h2>
            <div>{faqs.map(({ q, a }) => <details key={q} className="contact-faq"><summary>{q}</summary><div>{a}</div></details>)}</div>
          </section>
        </div>
        <style>{`
          .contact-faq { border: 1px solid var(--border); border-radius: 10px; overflow: hidden; margin-bottom: 10px; }
          .contact-faq summary { cursor: pointer; list-style: none; padding: 16px 20px; font-weight: 600; font-size: 15px; display: flex; justify-content: space-between; gap: 12px; }
          .contact-faq summary::-webkit-details-marker { display: none; }
          .contact-faq summary::after { content: '+'; color: var(--accent); font-size: 20px; }
          .contact-faq[open] summary::after { content: '−'; }
          .contact-faq > div { padding: 0 20px 18px; color: var(--text-muted); font-size: 15px; line-height: 1.7; }
        `}</style>
      </div>
          <p style={{ maxWidth: '760px', margin: '24px auto 0', padding: '0 24px', fontSize: '15px', lineHeight: 1.7 }}>
            Navazující průvodce: <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>automatizace prodeje</Link>.
          </p>
    </article>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(23px, 3vw, 30px)', lineHeight: 1.25, marginTop: '28px', marginBottom: '-4px' }}>{children}</h2>
}
