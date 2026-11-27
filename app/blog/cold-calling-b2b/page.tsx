import type { Metadata } from 'next'
import Link from 'next/link'

const url = 'https://salesagent.cz/blog/cold-calling-b2b'
const heading = 'Cold calling v B2B: skript, námitky a co dovoluje zákon'
const description = 'Co je cold calling, jak vést první hovor, jak reagovat na námitky a kdy smíte v Česku volat firmám. S praktickým skriptem.'
const date = '2026-11-27'
const ctu = 'https://ctu.gov.cz/sites/default/files/obsah/ctu-new/telekomunikace/telemarketing/vykladove-stanovisko-telemarketing-a-faq.pdf'
const law = 'https://www.zakonyprolidi.cz/cs/2005-127'

export const metadata: Metadata = {
  title: 'Cold calling v B2B: skript, námitky a pravidla | SalesAgent.cz',
  description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { type: 'article', title: 'Cold calling v B2B: skript, námitky a pravidla', description, url, publishedTime: date, modifiedTime: date, locale: 'cs_CZ', images: [{ url: 'https://salesagent.cz/blog/laptop-phone.jpg', alt: 'Příprava obchodního telefonátu' }] },
}

const faqs = [
  { q: 'Co je cold calling?', a: 'Cold calling je první obchodní telefonát člověku nebo firmě, se kterými dosud nemáte vztah. Jeho cílem může být zjištění potřeby nebo domluvení dalšího kroku.' },
  { q: 'Je cold calling v Česku legální?', a: 'Záleží na původu čísla a dalších okolnostech. U veřejných účastnických seznamů platí pravidlo opt-in; firemní číslo zveřejněné samotnou firmou na jejím webu se podle výkladu úřadů posuzuje jinak. Dodržet je třeba i další předpisy.' },
  { q: 'Smím volat na číslo z webu firmy?', a: 'Podle stanoviska úřadů zpravidla ano, pokud firma číslo sama zveřejnila, jeho účel obchodní hovor nevylučuje a není u něj uveden nesouhlas s marketingem. U kontaktu na fyzickou osobu řešte také GDPR a respektujte případné odmítnutí.' },
  { q: 'Jak dlouhý má být první hovor?', a: 'Tak dlouhý, aby bylo možné stručně vysvětlit důvod, položit otázku a domluvit další krok. Délku přizpůsobte zájmu a času volaného; není univerzální počet minut.' },
  { q: 'Co dělat, když volaný řekne, ať už nevolám?', a: 'Hovor slušně ukončete, odmítnutí bez odkladu zaznamenejte a kontakt z dalších marketingových hovorů vyřaďte. Zkontrolujte také, že se nevrátí při dalším importu.' },
]
const schema = [
  { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: heading, description, datePublished: date, dateModified: date, inLanguage: 'cs', author: { '@type': 'Person', name: 'Petr Kubíček' }, publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' }, mainEntityOfPage: { '@type': 'WebPage', '@id': url }, image: 'https://salesagent.cz/blog/laptop-phone.jpg' },
  { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://salesagent.cz/blog' }, { '@type': 'ListItem', position: 2, name: heading, item: url }] },
]
const link = { color: 'var(--accent)', textDecoration: 'underline' }

export default function ColdCallingArticle() {
  return <article style={{ padding: '96px 24px 80px' }}>
    {schema.map(item => <script key={item['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />)}
    <div style={{ maxWidth: '780px', margin: '0 auto' }}>
      <nav style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}><Link href="/blog" style={link}>Blog</Link> / Cold calling v B2B</nav>
      <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>B2B obchod · Telefonování</p>
      <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.2, margin: '14px 0' }}>{heading}</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '36px' }}>27. listopadu 2026 · Petr Kubíček</p>
      <div className="cold-article">
        <p><strong>Cold calling je telefonát člověku nebo firmě, se kterou ještě nemáte vztah, s cílem nabídnout produkt nebo domluvit schůzku.</strong> V B2B má smysl připravit úzký seznam firem, jasný důvod hovoru a předem ověřit, zda na dané číslo smíte volat.</p>

        <h2>Nejdřív zákon: komu smíte volat</h2>
        <p>Podle společného <a href={ctu}>výkladového stanoviska ČTÚ, ÚOOÚ a MPO</a> můžete za určitých podmínek zavolat s obchodní nabídkou na číslo, které firma sama uvedla na svém webu. Ověřte, že k tomu číslo slouží, u kontaktu není uveden nesouhlas s marketingem a dodržíte ostatní předpisy. Například linka určená jen pro zákaznickou podporu není vhodný cíl pro obchodní nabídku.</p>
        <p>Jiný režim mají <strong>veřejné účastnické seznamy</strong>: pro marketing lze podle § 95 a 96 <a href={law}>zákona o elektronických komunikacích</a> volat účastníkům, kteří v seznamu uvedli, že si kontaktování přejí. Platí to i pro firmy a podnikatele. Za vytváření seznamu zákon považuje i náhodné generování čísel. Úřady vysvětlují, že marketingem může být také nabídka schůzky kvůli možnému prodeji nebo úvodní otázka, zda volaný s marketingem souhlasí.</p>
        <p>Rozhoduje původ konkrétního čísla, nikoliv jen to, že je dostupné na internetu. U koupených dat si vyžádejte původ a podmínky použití. Vlastní zákaznická databáze není automaticky účastnickým seznamem, přesto je nutné posoudit účel, právní základ a respektovat námitky. Je-li kontaktem fyzická osoba, například zaměstnanec s telefonem používaným i soukromě, uplatní se pravidla ochrany osobních údajů. Na údaje o samotné právnické osobě se GDPR nevztahuje; u osobního čísla nebo jména však nejde automaticky o tentýž případ.</p>
        <p>SMS a e-mail mají odlišný režim obchodních sdělení podle zákona č. 480/2004 Sb., který se vztahuje i na firmy. To, že je určitý telefonát podle stanoviska možný, samo o sobě neopravňuje poslat obchodní SMS, e-mail ani žádost o souhlas těmito kanály. Výjimka pro stávající zákazníky u elektronických zpráv má své podmínky.</p>
        <aside className="note"><strong>Poznámka:</strong> Stanovisko úřadů volání na čísla, která firmy samy zveřejnily, připouští. Je to ale výklad, ne závazný předpis. Rozhoduje, k čemu číslo slouží a jestli u něj není uveden nesouhlas. Uložte si proto, kde a kdy jste číslo našli, a odmítnutí respektujte. Jde o obecnou informaci, ne o právní radu.</aside>
        <p><strong>Právní doložka:</strong> Tento článek poskytuje pouze obecné informace a nepředstavuje právní radu ani závazný výklad zákona. Právní posouzení se může lišit podle konkrétních okolností; svůj postup proto konzultujte se svým právníkem.</p>
        <h3>Odkud mám číslo → co ověřit</h3>
        <div className="table-wrap"><table><thead><tr><th>Zdroj</th><th>Co před hovorem ověřit</th></tr></thead><tbody>
          <tr><th>Účastnický seznam / veřejný katalog</th><td>Jde o účastnický seznam? Pokud ano, je u daného kontaktu přání být kontaktován pro marketing?</td></tr>
          <tr><th>Web firmy</th><td>Zveřejnila číslo sama firma? Jaký má účel a není u něj nesouhlas? U osobního kontaktu posuďte GDPR.</td></tr>
          <tr><th>Vlastní zákazník</th><td>Účel a právní základ práce s kontaktem, rozsah vztahu a případné námitky.</td></tr>
          <tr><th>Koupená databáze</th><td>Původ čísla, podmínky použití a právní základ; nákup sám není oprávněním volat.</td></tr>
          <tr><th>Poptávka od volaného</th><td>Co si vyžádal, kdy a jak vás kontaktoval a zda hovor odpovídá jeho požadavku.</td></tr>
        </tbody></table></div>

        <h2>Jak se na první hovor připravit</h2>
        <p>Začněte malým seznamem firem, které mají společný problém a skutečně odpovídají vaší nabídce. U každé si poznamenejte jeden konkrétní důvod, proč voláte právě jí: například typ zákazníků, obor nebo službu uvedenou na jejím webu. Neodvozujte z pozorování, že firma určitě má problém; použijte ho jako podklad pro otázku.</p>
        <p>Hledejte vhodnou roli, nikoliv jen jakékoliv dostupné číslo. Připravte si jméno, společnost, stručnou větu o důvodu hovoru a jednu otevřenou otázku. Cílem prvního rozhovoru obvykle není prodat celý produkt, ale zjistit, zda má smysl domluvit další krok. Před vytočením ověřte zdroj čísla podle předchozí části a zkontrolujte evidenci odmítnutí.</p>

        <h3>Co si připravit před vytočením</h3>
        <p>U každého záznamu si připravte název firmy, relevantní roli, zdroj a datum získání čísla. K tomu přidejte stručnou poznámku, proč by pro danou firmu mohlo být téma užitečné. Pokud zjistíte nesoulad mezi kontaktem a vaším záměrem, zastavte se a kontakt znovu prověřte. Po hovoru rozlišujte mezi zájmem o schůzku, žádostí o jiný čas a odmítnutím dalšího kontaktu. Díky tomu se kolegové nebudou opakovaně obracet na stejného člověka bez znalosti předchozího rozhovoru.</p>

        <h2>Skript prvního hovoru: příklad pro dodavatele firemního školení</h2>
        <p>Následující dialog je vzor, který upravte podle skutečnosti. Než začnete, ověřte, že na konkrétní číslo smíte volat. Nevydávejte domněnky za fakta a text nečtěte jako nepřerušovaný monolog.</p>
        <div className="note">
          <p><strong>Obchodník:</strong> „Dobrý den, tady Jana Nováková ze společnosti Vzdělávání pro firmy. Mohu krátce říct, proč volám?“</p>
          <p><strong>Kontakt:</strong> „Ano, prosím.“</p>
          <p><strong>Obchodník:</strong> „Na vašem webu jsem si všimla, že rozšiřujete obchodní tým. Pomáháme týmům s přípravou na jednání. Jak teď u nových obchodníků řešíte jejich zaškolení?“</p>
          <p><strong>Kontakt:</strong> „Máme interního vedoucího, který je zaškoluje.“</p>
          <p><strong>Obchodník:</strong> „Rozumím. Je něco, co byste v tom procesu chtěli letos zlepšit?“</p>
          <p><strong>Kontakt:</strong> „Možná přípravu na první schůzky.“</p>
          <p><strong>Obchodník:</strong> „Dávalo by smysl probrat to příští úterý v deset na krátké schůzce? Když zjistíme, že vám nepomůžeme, řekneme si to rovnou.“</p>
        </div>
        <p>Pokud druhá strana nemá zájem, poděkujte a skončete. Když schůzka dává smysl, ověřte termín i způsob potvrzení; obchodní e-mail neposílejte automaticky jen proto, že se uskutečnil hovor. Do CRM zapište výsledek, zdroj čísla, datum ověření a dohodnutý krok. Nezapisujte zbytečné osobní poznámky.</p>

        <h2>Jak reagovat na námitky</h2>
        <p>Námitka není soutěž, kterou musíte vyhrát. Nechte člověka domluvit, odpovězte věcně a respektujte, když si nepřeje pokračovat.</p>
        <div className="table-wrap"><table><thead><tr><th>Námitka</th><th>Možná reakce</th><th>Kdy skončit</th></tr></thead><tbody>
          <tr><th>Nemáme zájem</th><td>„Rozumím, děkuji za váš čas.“</td><td>Hned; přání nevolat zaznamenejte.</td></tr>
          <tr><th>Pošlete to e-mailem</th><td>„Co by vám pomohlo posoudit, zda má další rozhovor smysl?“</td><td>Pokud nechce pokračovat. Před zasláním nabídky ověřte souhlas a příslušná pravidla.</td></tr>
          <tr><th>Už to řešíme s někým jiným</th><td>„Rozumím. Je ve stávajícím řešení něco, co zvažujete změnit?“</td><td>Když odpoví, že změnu nehledá nebo nechce pokračovat.</td></tr>
          <tr><th>Nemám čas</th><td>„Rozumím. Hodil by se jindy krátký hovor, nebo nemáte zájem?“</td><td>Pokud další kontakt nechce.</td></tr>
          <tr><th>Odkud máte moje číslo?</th><td>Pravdivě uveďte konkrétní zdroj a nabídněte vyřazení.</td><td>Na žádost ihned skončete a odmítnutí zapište.</td></tr>
        </tbody></table></div>

        <h2>Telefon, e-mail, nebo LinkedIn?</h2>
        <p>Telefon umožní rychle zjistit, zda se bavíte se správnou osobou a jestli má téma význam. E-mail poskytuje prostor pro promyšlené sdělení, ale pravidla obchodních sdělení je nutné posoudit zvlášť. Na LinkedInu lze nejprve ověřit roli a kontext, přičemž i zde respektujte pravidla platformy a soukromí.</p>
        <p>Další souvislosti najdete v článcích <Link href="/blog/gdpr-a-cold-email">GDPR a cold e-mail</Link>, <Link href="/blog/jak-oslovit-firmy-bez-databaze">jak oslovit firmy bez databáze</Link> a <Link href="/blog/cold-email-vzor-cesky">cold e-mail: český vzor</Link>. Pro každý kanál zvažujte zvlášť, zda je oslovení přípustné, relevantní a vítané.</p>

        <h2>Časté otázky</h2>
        {faqs.map(({ q, a }) => <details key={q} className="faq"><summary>{q}</summary><p>{a}</p></details>)}
        <aside className="note"><p><strong>Nechcete oslovování řídit sami?</strong></p><Link href="/cs/contact" data-measurement-placement="blog_cold_calling">Probrat to na konzultaci zdarma →</Link></aside>
      </div>
    </div>
    <style>{`.cold-article{font-size:17px;line-height:1.75;display:flex;flex-direction:column;gap:20px}.cold-article h2{font:700 clamp(23px,3vw,30px)/1.25 Space Grotesk,sans-serif;margin:26px 0 0}.cold-article h3{font-size:20px;margin:8px 0 0}.cold-article a{color:var(--accent);text-decoration:underline}.cold-article .note{background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px}.cold-article .note p+p{margin-top:12px}.table-wrap{overflow-x:auto;max-width:100%;min-width:0}table{border-collapse:collapse;min-width:560px;width:100%;font-size:15px}th,td{text-align:left;vertical-align:top;padding:12px;border-bottom:1px solid var(--border)}.faq{border:1px solid var(--border);border-radius:10px;padding:16px 20px}.faq summary{cursor:pointer;font-weight:600}.faq p{color:var(--text-muted);margin-top:12px}`}</style>
  </article>
}
