import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

const url = 'https://salesagent.cz/blog/fractional-obchodni-reditel'
const title = 'Fractional obchodní ředitel: kdy dává firmě smysl a co zařídí'
const description = 'Co dělá fractional neboli externí obchodní ředitel na část úvazku, kdy se hodí B2B firmě a jak nastaví tým, obchodní procesy, CRM a AI.'
const image = 'https://salesagent.cz/blog/fractional-obchodni-reditel.jpg'
const date = '2026-11-03'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url, languages: { cs: url } },
  openGraph: { title, description, url, type: 'article', locale: 'cs_CZ', publishedTime: date, modifiedTime: date, images: [{ url: image, width: 985, height: 537, alt: 'Ilustrační obrázek obchodního ředitele při poradě s týmem' }] },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
}

const faq = [
  { q: 'Co je fractional obchodní ředitel?', a: 'Fractional obchodní ředitel je zkušený obchodní manažer, který vede obchod firmy v předem domluveném rozsahu, například několik dní za měsíc. Firma tak získá seniorní vedení, aniž by nutně vytvářela pozici na plný úvazek.' },
  { q: 'Jaký je rozdíl mezi fractional a interim obchodním ředitelem?', a: 'Fractional ředitel obvykle pracuje průběžně pro firmu jen část pracovního času. Interim ředitel zpravidla přechodně zastupuje vedoucího obchodu nebo řeší konkrétní změnu, často ve větším rozsahu. Náplň i délka závisí na dohodě.' },
  { q: 'Kolik stojí externí obchodní ředitel?', a: 'Cena závisí na rozsahu práce, odpovědnosti a délce spolupráce. U SalesAgentu se cena za audit, průběžné vedení i interim zastoupení stanovuje individuálně podle dohody.' },
  { q: 'Může externí ředitel zavést AI a CRM?', a: 'Ano. Může nejprve popsat obchodní proces, vybrat vhodná místa pro AI a automatizaci a navrhnout CRM. Podle potřeb firmy lze upravit stávající systém nebo samostatně dohodnout vývoj CRM na míru.' },
]
const articleSchema = {
  '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
  image, datePublished: date, dateModified: date, inLanguage: 'cs',
  author: { '@type': 'Person', name: 'Petr Kubíček' },
  publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
  mainEntityOfPage: { '@type': 'WebPage', '@id': url },
}
const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }

export default function Page() {
  return <article className={styles.article}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className={styles.container}>
      <p className={styles.breadcrumb}><Link href="/blog">Blog</Link> <span>/</span> Vedení B2B obchodu</p>
      <p className={styles.eyebrow}>VEDENÍ OBCHODU · B2B · AI</p>
      <h1>{title}</h1>
      <p className={styles.meta}>3. listopadu 2026 <span>·</span> Petr Kubíček <span>·</span> 8 minut čtení</p>
      <Image src="/blog/fractional-obchodni-reditel.jpg" alt="Ilustrační obrázek obchodního ředitele při poradě s týmem" width={985} height={537} className={styles.heroImage} priority />
      <div className={styles.content}>
        <p className={styles.intro}><strong>Fractional obchodní ředitel je zkušený manažer, který vede obchod firmy jen v domluveném rozsahu — například několik dní v měsíci.</strong> Nastaví obchodní plán, pomůže s vedením týmu a dohlédne na to, aby obchodní příležitosti nezůstávaly jen v hlavě majitele. Pro B2B firmu je to jedna z možností, jak získat seniorní vedení, když ještě nechce nebo nepotřebuje zaměstnat ředitele na plný úvazek.</p>

        <h2>Proč nestačí najmout dalšího obchodníka</h2>
        <p>Firma často začíná tak, že klíčové zákazníky získává majitel. Když přibudou obchodníci, majitel předává kontakty, účastní se důležitých schůzek a řeší nabídky. Postupně ale není jasné, které firmy oslovovat, co se děje s rozpracovanými příležitostmi a proč některé nabídky zůstaly bez odpovědi.</p>
        <p>Další obchodník může zvýšit kapacitu. Sám o sobě ale nemusí vyřešit chybějící strategii, vedení týmu nebo předávání informací. <strong>Externí obchodní ředitel přichází nastavit a průběžně řídit celý obchodní systém:</strong> od priorit a odpovědností přes práci v CRM až po pravidelné vyhodnocování.</p>
        <p>Neznamená to, že ředitel nahradí lidi v týmu nebo že každá firma potřebuje stejný model. Smysl má tam, kde už existuje produkt a zákazníci, ale majitel potřebuje přestat být jediným člověkem, který drží obchod pohromadě.</p>

        <h2>Kdy dává externí obchodní ředitel smysl?</h2>
        <ul>
          <li><strong>Majitel vede většinu obchodu sám.</strong> Klíčová jednání, ceny i rozhodnutí se sbíhají u jednoho člověka.</li>
          <li><strong>Máte menší obchodní tým bez vedení.</strong> Obchodníci pracují, ale chybí jim společné cíle, zpětná vazba a pravidelná práce s příležitostmi.</li>
          <li><strong>Rostete nebo vstupujete na nový trh.</strong> Potřebujete zvolit segmenty, nabídku a postup dřív, než rozšíříte tým.</li>
          <li><strong>Ředitel na plný úvazek zatím nedává smysl.</strong> Potřebujete zkušenost a rozhodování, ale rozsah práce odpovídá jen několika dnům v měsíci.</li>
          <li><strong>Řešíte přechodné období.</strong> Odešel vedoucí obchodu a firma potřebuje tým udržet v chodu při hledání nástupce.</li>
        </ul>
        <p>Fractional spolupráce se naopak nemusí hodit, pokud potřebujete každodenní přítomnost vedoucího na plný úvazek nebo očekáváte, že externista sám bez zapojení týmu vyřeší všechny obchodní aktivity.</p>

        <h2>Co fractional obchodní ředitel ve firmě dělá</h2>
        <p>První úkol není automaticky vyměnit CRM nebo spustit kampaň. Nejdřív je potřeba porozumět produktu, zákazníkům, existujícím obchodům a tomu, jak tým dnes pracuje. Teprve potom lze rozhodnout, kde změna přinese největší hodnotu.</p>
        <h3>Strategie a priority</h3>
        <p>Společně s vedením vybere cílové segmenty, obchodní cíle, nabídku a kanály. Přeloží je do plánu na několik měsíců: které typy firem mají přednost, kdo se jim věnuje a jak poznáme, že postup funguje. U nové země pomůže zohlednit místní trh, zákazníky a dostupnou kapacitu.</p>
        <h3>Vedení lidí a obchodní porady</h3>
        <p>Nastaví pravidelný rytmus porad a individuální zpětné vazby. S obchodníky prochází konkrétní příležitosti: co klient potřebuje, kdo rozhoduje, jaký je další krok a kde je potřebná pomoc. Podle domluvy se účastní klíčových schůzek a vyjednávání.</p>
        <h3>Proces od prvního kontaktu po podpis</h3>
        <p>Obchodní proces nemusí být složitá směrnice. Začíná jasnými odpověďmi: kdy je firma vhodný zákazník, kdo ji osloví, kdy se předává obchodníkovi a co se má stát po schůzce. Stejně důležité je domluvit, jak pracovat s odmítnutím, neaktivními klienty a nabídkami bez odpovědi.</p>
        <p>Pro majitele je užitečný stručný přehled: počet a kvalita otevřených příležitostí, jejich další kroky a důvody, proč se obchod posunul nebo zastavil. Ukazatele se mají vztahovat k procesu, který tým opravdu používá — ne k číslům vybraným jen proto, že je systém umí zobrazit.</p>

        <h2>CRM: upravit stávající systém, nebo vyvinout vlastní?</h2>
        <p>CRM má obchodníkovi pomáhat poznat, komu se ozvat a proč. Pokud firma už systém má, začínáme zjištěním, zda jej stačí zjednodušit: sjednotit fáze obchodu, odstranit zbytečná pole, doplnit odpovědnosti a vyčistit duplicitní firmy.</p>
        <p>Pokud běžné řešení nevyhovuje konkrétnímu způsobu práce, může být vhodné <Link href="/blog/crm-na-miru">CRM na míru</Link> nebo napojení dalších nástrojů. Vývoj vlastního CRM ale není povinnou součástí role ředitele ani automaticky nejlepší volbou. Nejdřív je potřeba porovnat cenu, rozsah, údržbu, integrace a to, kdo bude systém vlastnit a spravovat. Případný vývoj se dohodne a nacení samostatně.</p>

        <h2>Jak může obchodní ředitel zapojit AI a automatizaci</h2>
        <p>AI dává smysl tam, kde obchodníci opakovaně připravují stejné podklady nebo přepisují informace. Ředitel pomůže vybrat první použití podle obchodního procesu, nikoliv podle počtu dostupných funkcí:</p>
        <ol>
          <li><strong>Vyhledání a roztřídění firem:</strong> podle domluveného profilu připravit seznam a zdůvodnit, proč může být firma relevantní.</li>
          <li><strong>Příprava na schůzku:</strong> shrnout veřejné informace o firmě a navrhnout otázky; obchodník ověří aktuálnost a přesnost.</li>
          <li><strong>Návrhy osobního oslovení:</strong> připravit text podle kontextu a před odesláním jej nechat zkontrolovat člověkem.</li>
          <li><strong>Práce s CRM:</strong> doplnit podklady, navrhnout další krok a upozornit na příležitosti bez navázání.</li>
          <li><strong>Vyhodnocování:</strong> sjednotit přehled aktivit a odpovědí tak, aby vedení vidělo, kde se obchod zastavuje.</li>
        </ol>
        <p>U nás lze pro práci s leady, kampaněmi a CRM použít také náš vlastní Salesbot napojený na kompatibilního AI asistenta. Konkrétní rozsah nastavujeme podle firmy a jejích stávajících nástrojů. AI může šetřit čas, ale nenahrazuje kontrolu dat, schválení komunikace ani vztah se zákazníkem. Podrobněji postup popisujeme v článku <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme">jak zavést automatizaci prodeje ve firmě</Link>.</p>

        <h2>Fractional, interim a externí obchodník: jaký je rozdíl?</h2>
        <div className={styles.tableWrap}><table><thead><tr><th>Role</th><th>Hlavní úkol</th><th>Kdy se hodí</th></tr></thead><tbody>
          <tr><td>Fractional obchodní ředitel</td><td>Průběžně vede obchod v části svého času.</td><td>Firma potřebuje zkušené vedení, ale ne na plný úvazek.</td></tr>
          <tr><td>Interim obchodní ředitel</td><td>Dočasně zastoupí vedení nebo provede konkrétní změnu.</td><td>Firma řeší odchod ředitele nebo přechodné období.</td></tr>
          <tr><td>Externí obchodník</td><td>Podle dohody vyhledává příležitosti, komunikuje a zapojuje se do prodeje.</td><td>Firma potřebuje obchodní kapacitu a aktivní práci se zákazníky.</td></tr>
        </tbody></table></div>
        <p>Tyto role se mohou v konkrétní spolupráci překrývat. Proto je dobré předem vymezit, kdo vede tým, kdo komunikuje s klienty a kdo má rozhodovací pravomoci. Samostatně vysvětlujeme také <Link href="/blog/co-je-externi-obchod">co je externí obchod</Link>.</p>

        <h2>Jak spolupráci nastavit a podle čeho ji vyhodnotit</h2>
        <p>Na začátku si ujasněte výchozí situaci a očekávání. Kolik lidí je v týmu? Které zákazníky chcete získat nebo udržet? Co má být po prvních měsících jiné? Dohodněte také přístup k datům, rozhodovací pravomoci a to, kolik času má vedení a tým na spolupráci.</p>
        <p>Audit může odhalit chybějící kroky v procesu nebo nepoužívané CRM. Následně dává smysl určit několik priorit, odpovědné osoby a pravidelný termín vyhodnocení. Sledujte nejen počet aktivit, ale také kvalitu příležitostí, dodržování dalších kroků a zpětnou vazbu obchodníků. Výsledky závisí na nabídce, trhu i zapojení týmu; nikdo nemůže předem slíbit stejný počet zakázek každé firmě.</p>
        <p>U SalesAgentu lze začít jednorázovým auditem, průběžným fractional vedením nebo dočasným interim zastoupením. Rozsah a cena jsou dle domluvy. <Link href="/cs/externi-obchodni-reditel">Podívejte se na nabídku externího obchodního ředitele</Link> a možnosti spolupráce.</p>

        <section className={styles.faq}><h2>Časté otázky</h2>{faq.map(({ q, a }) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</section>
        <aside className={styles.cta}><p className={styles.ctaLabel}>OBCHODNÍ VEDENÍ NA MÍRU</p><h2>Potřebujete posunout obchod, ale ne další plný úvazek?</h2><p>Probereme váš tým, cíle a místa, kde obchod ztrácí čas nebo příležitosti. Navrhnu, zda a jak vám externí vedení může pomoci.</p><Link href="/cs/externi-obchodni-reditel">Zjistit více o spolupráci <span aria-hidden="true">→</span></Link></aside>
      </div>
    </div>
  </article>
}
