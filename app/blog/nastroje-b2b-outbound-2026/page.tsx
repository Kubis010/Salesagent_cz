import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'

const title = 'Nástroje pro B2B outbound, které používáme v roce 2026'
const description = 'Nástroje pro B2B outbound 2026: Salesbot s AI, scraperem a CRM, interaktivní Prezentér, Claude/GPT a Hunter Analytics. Funkce, použití a ověřené ceny.'
const url = 'https://salesagent.cz/blog/nastroje-b2b-outbound-2026'
const image = '/blog/nastroje-automatizace-prodeje-2026.jpg'
const date = '2026-10-05'
const linkStyle = { color: 'var(--accent)', textDecoration: 'underline' }

export const metadata: Metadata = {
  title: 'Nástroje pro B2B outbound v roce 2026 | SalesAgent.cz',
  description,
  alternates: { canonical: url, languages: { cs: url, 'x-default': url } },
  openGraph: {
    title, description, url, siteName: 'SalesAgent.cz', type: 'article', locale: 'cs_CZ',
    publishedTime: date, modifiedTime: date,
    images: [{ url: `https://salesagent.cz${image}`, width: 1408, height: 768, alt: 'Ilustrace obchodního týmu s nástroji pro automatizaci prodeje' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [`https://salesagent.cz${image}`] },
}

const faqs = [
  { q: 'Jaké nástroje používáte pro B2B outbound v roce 2026?', a: 'Používáme Salesbot.cz pro hledání leadů, LinkedIn kampaně, napojený e-mail a CRM, Claude a GPT pro kvalifikaci a návrhy zpráv, Prezentér pro interaktivní AI prezentaci a Hunter Analytics pro měření webových konverzí. Konkrétní sestavu volíme podle cílových zákazníků.' },
  { q: 'Jaký je rozdíl mezi Salesbotem a Prezentérem?', a: 'Salesbot podporuje LinkedIn prospecting a správu oslovení. Prezentér ukazuje produkt zájemci, odpovídá na jeho otázky a pomáhá připravit předání obchodníkovi. Jde o různé fáze obchodu: navázání kontaktu a následné vysvětlení nabídky.' },
  { q: 'Může Claude nebo GPT sám řídit B2B oslovování?', a: 'Model může připravovat návrhy zpráv, třídit odpovědi a pracovat s připojenými nástroji podle jejich oprávnění. Sám ale není zdrojem ověřených kontaktů ani povolením k odesílání. Segmentaci, zdroje dat, limity a pravidla předání musí určit člověk.' },
  { q: 'Co měří Hunter Analytics?', a: 'Analytická část Web Hunteru sleduje zobrazení a konverze webových prvků, konverzní poměr a výkon variant či segmentů návštěvnosti. Pomáhá vyhodnotit, co návštěvníka přivedlo k akci. Kliknutí nebo otevření kontaktního prvku není automaticky kvalifikovanou obchodní příležitostí.' },
  { q: 'Musíme si všechny nástroje nastavovat sami?', a: 'Nemusíte. SalesAgent může připravit a provozovat řízený outbound nebo postavit systém na míru a předat jej vašemu týmu. V obou modelech je potřeba určit odpovědnost za data, schvalování zpráv, reakce na zájemce a pravidelné vyhodnocování.' },
  { q: 'Je Prezentér pouze předtočené video?', a: 'Ne. Návštěvník se může ptát hlasem nebo textem a AI podle jeho situace vybírá připravené produktové moduly. Video může být součástí ukázky, ale prezentace je interaktivní. Obchodník dostane kontext rozhovoru pro další krok.' },
  { q: 'Umí Salesbot také odesílat e-maily?', a: 'Ano, přes připojenou vlastní schránku nebo napojený Smartlead či Instantly. Je potřeba dostupná integrace a nastavený odesílací kanál. Uložený návrh v CRM ani čekání na schválení nejsou potvrzením, že se e-mail skutečně odeslal.' },
]

const toolRows = [
  ['Salesbot.cz (náš produkt)', 'Hledání leadů, LinkedIn, napojený e-mail a CRM', 'Kontext a historie komunikace pro klienta'],
  ['Claude / GPT', 'Práce s kontextem, návrhy a třídění', 'Podklady ke kontrole, ne automaticky pravdivá fakta'],
  ['SalesRobots Prezentér (náš produkt)', 'AI interaktivní prezentace na webu', 'Otázky zájemce a kontext pro obchodníka'],
  ['Hunter Analytics', 'Měření webových prvků a variant', 'Přehled akcí a konverzních poměrů'],
]

export default function Page() {
  const schemas = [
    {
      '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title, description,
      image: `https://salesagent.cz${image}`, datePublished: date, dateModified: date, inLanguage: 'cs',
      author: { '@type': 'Person', name: 'Petr Kubíček' },
      publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' },
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ]

  return (
    <article style={{ paddingTop: '96px', paddingBottom: '80px' }}>
      {schemas.map((schema) => <script key={schema['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}><Link href="/blog" style={linkStyle}>Blog</Link> / Nástroje pro automatizaci prodeje</p>
        <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>B2B outbound · Náš stack 2026</p>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', lineHeight: 1.15, margin: '16px 0' }}>{title}</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', marginBottom: '28px' }}><time dateTime={date}>5. října 2026</time> · Petr Kubíček · SalesAgent.cz</p>
        <figure style={{ margin: '0 0 36px' }}>
          <Image src={image} alt="Ilustrace obchodního týmu v kanceláři s digitálními přehledy prodejních aktivit" width={1408} height={768} sizes="(max-width: 820px) 100vw, 772px" priority style={{ width: '100%', height: 'auto', borderRadius: '14px' }} />
          <figcaption style={{ color: 'var(--text-muted)', fontSize: '12px', marginTop: '8px' }}>Ilustrační obrázek: nástroje mají obchodníkovi připravit příležitosti, ne přidat další obrazovky ke správě.</figcaption>
        </figure>

        <div style={{ fontSize: '17px', lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '22px' }}>
          <p style={{ fontSize: '19px' }}><strong>Náš stack nástrojů pro B2B outbound v roce 2026 tvoří Salesbot.cz pro hledání leadů, LinkedIn kampaně, napojený e-mail a CRM; Claude a GPT pro kvalifikaci a návrhy zpráv; Prezentér pro AI interaktivní prezentaci na webu a Hunter Analytics pro měření konverzí.</strong> Smyslem není pořídit co nejvíc aplikací. Smyslem je propojit první kontakt, vysvětlení nabídky a předání skutečného zájmu obchodníkovi.</p>
          <p>Tohle není nezávislý žebříček všech nástrojů na trhu. Salesbot, Prezentér a Hunter patří do našeho produktového portfolia SalesRobots; Claude a GPT využíváme jako externí AI modely. Ukazujeme, jak jednotlivé části skládáme pro outbound, co od nich čekáme a kde musí zůstat lidská kontrola. Zkušenost jednoho týmu také neznamená, že stejná sestava bude vhodná pro každou firmu.</p>

          <H2>Jak vybíráme software pro B2B outbound</H2>
          <p>První otázka není „kterou licenci koupit“, ale „kde se nám zastavují obchodní příležitosti“. Pokud chybí relevantní kontakty, samotný chatbot nepomůže. Pokud už lidé na web chodí, ale nerozumějí produktu, další export firem problém nevyřeší. Rozlišujeme proto oslovení, přípravu komunikace, ukázku produktu a měření dalšího kroku.</p>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '15px', minWidth: '540px' }}>
              <caption style={{ textAlign: 'left', marginBottom: '12px', color: 'var(--text-muted)' }}>Role nástrojů v našem outbound stacku</caption>
              <thead><tr>{['Nástroj', 'Úloha', 'Co si z něj bereme'].map((label) => <th key={label} scope="col" style={{ textAlign: 'left', padding: '12px', borderBottom: '2px solid var(--border)' }}>{label}</th>)}</tr></thead>
              <tbody>{toolRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell} style={{ padding: '12px', borderBottom: '1px solid var(--border)', verticalAlign: 'top' }}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
          <p>Výběru nástrojů předchází cílový profil zákazníka, ověření dat a dohoda, co považujete za kvalifikovanou příležitost. Celý postup popisujeme v <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme" style={linkStyle}>průvodci automatizací prodeje</Link>. Tento článek řeší konkrétní nástroje, ne návrh celého obchodního procesu od nuly.</p>

          <H2>Salesbot.cz: hledání leadů, personalizace, kampaně a CRM</H2>
          <p><a href="https://salesbot.cz" style={linkStyle}>Salesbot.cz</a> používáme pro LinkedIn prospecting a správu oslovování. Pomáhá připravovat personalizované zprávy, pracovat s kampaněmi a udržovat přehled o konverzacích. Podporuje také připojení AI klientů přes MCP, tedy rozhraní, kterým může například Claude pracovat s dostupnými nástroji podle udělených oprávnění.</p>
          <p>V našem pracovním postupu musí mít každý kontakt důvod k oslovení. Nestačí, že člověk zastává vysokou funkci. Potřebujeme vědět, zda jeho firma odpovídá cílovému segmentu, jestli danou oblast řeší a jak nabídka souvisí s jeho prací. Teprve potom dává smysl připravit krátkou zprávu a navazující komunikaci.</p>
          <p>LinkedIn automatizace není povolení poslat stejnou nabídku tisícům lidí. Nastavení kampaně musí zahrnovat rozumné limity, kontrolu duplicit, schvalování a zastavení při odmítnutí nebo ochranném upozornění platformy. Žádný nástroj nezaručí, že účet nikdy nebude omezen. Salesbot také není náhradou celé e-mailové infrastruktury: LinkedIn a e-mail mají odlišná pravidla i způsob provozu.</p>

          <h3>Hledání a kvalifikace leadů přes Claude nebo GPT</h3>
          <p>Po připojení Salesbotu přes MCP může AI asistent pracovat s dostupnými nástroji vyhledávání a s kontextem kontaktů. Nejprve popíšeme ideálního zákazníka, rozhodovací role a vylučující podmínky. Asistent pomáhá najít kandidáty a zdůvodnit, proč je zařadit či vyřadit. Nalezený kontakt ještě neznamená kvalifikovanou obchodní příležitost: tu určuje shoda s nabídkou a skutečná reakce.</p>
          <p>Příklad zadání: „Najdi výrobní firmy v ČR, dohledávej relevantní lidi a u každé firmy uveď zdroj a důvod shody s naším segmentem. Vyřaď firmy, které už máme v jednání. Nic neodesílej bez schválení.“ Jde o ukázku pracovního zadání, ne výsledek zákaznické kampaně. U chybějícího údaje chceme přiznanou nejistotu, ne vymyšlené jméno nebo funkci.</p>
          <h3>Scraper: personalizace podle skutečného webu firmy</h3>
          <p><a href="https://salesbot.cz/mcp-server" style={linkStyle}>Dokumentace Salesbot MCP</a> popisuje hledání přes LinkedIn, Google X-Ray a Sales Navigator i načtení veřejného webu scraperem. Z jeho obsahu získáme podklady pro kvalifikaci a zprávu: co firma nabízí, komu prodává a jak souvisí s naším řešením. Samotný scraper ale nepotvrzuje nákupní zájem.</p>
          <p>Personalizace není jen dosazení jména. Když firma vysvětluje složitý technický produkt, můžeme navázat na tento doložený kontext a nabídnout relevantní způsob ukázky. Místo fráze „zaujala mě vaše společnost“ chceme stručný důvod, proč píšeme právě jí. Zdroj ukládáme k podkladům; argument i finální text před použitím kontrolujeme.</p>
          <h3>LinkedIn kampaně a e-maily přes připojený kanál</h3>
          <p>Salesbot umí v propojeném workflow vést LinkedIn sekvence i e-mailové oslovení. Pro e-maily potřebuje připojenou vlastní schránku nebo integraci Smartlead či Instantly. Může tedy nejen připravit text, ale také předat oslovení poskytovateli k rozeslání nebo ho odeslat přes dostupné napojení. Schránka, doména, limity a dostupnost integrace zůstávají samostatnými podmínkami provozu.</p>
          <p>Smartlead a Instantly zde uvádíme jako možné integrace, ne jako dva povinné nákupy nebo vymyšlené srovnání. Pro konkrétního klienta používáme dohodnutý připojený kanál. Draft uložený v CRM ani čekání na schválení neznamenají odeslaný e-mail. Stav kontrolujeme u příslušného kanálu a při odpovědi či odmítnutí zastavujeme nevhodné navazující kroky.</p>
          <h3>Vlastní CRM: evidence práce pro klienty</h3>
          <p>Ve vlastním CRM Salesbotu evidujeme pro klienty firmy, kontakty, fáze příležitostí, poznámky a navazující úkoly. Uchováváme kontext oslovení, aby obchodník nezačínal každé jednání od nuly. Rozlišujeme „nalezeno“, „osloveno“, „odpověděl“ a „chce schůzku“ — jinak se počet kontaktů snadno zamění za obchodní výsledek.</p>
          <p>Klient potřebuje vědět, koho jsme řešili, s jakým důvodem a co má převzít jeho obchodník. CRM zde slouží jako evidence outboundu, ne jako automatický projekt na náhradu všech firemních systémů. Pokud tým už používá vlastní CRM, předem domluvíme předávání záznamů a odpovědnost za jejich aktuálnost.</p>

          <H2>Claude a GPT: pomoc s přípravou, ne vymyšlená personalizace</H2>
          <p>Claude a GPT zapojujeme tam, kde je potřeba přečíst podklady, porovnat je s cílovým profilem a připravit srozumitelný výstup. Typické zadání zní: shrň nabídku firmy z dodaného webu, navrhni relevantní důvod oslovení, připrav krátkou zprávu nebo roztřiď odpověď na zájem, dotaz, odmítnutí a požadavek na pozdější kontakt. Vstup musí obsahovat skutečné zdroje; model nemá chybějící fakta doplňovat odhadem.</p>
          <p>Oba modely mohou být součástí napojeného workflow, nikoli jen oknem pro kopírování textu. Anthropic popisuje <a href="https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview" style={linkStyle}>použití nástrojů v Claude</a>, OpenAI zase <a href="https://developers.openai.com/api/docs/guides/structured-outputs" style={linkStyle}>strukturované výstupy</a>. Pro obchod to znamená například jednotný záznam s kategorií odpovědi, odůvodněním a doporučeným dalším krokem. Správný formát ovšem neznamená pravdivý obsah.</p>
          <p>Nevybíráme model podle loga, ale podle konkrétní úlohy. Na stejném vzorku podkladů kontrolujeme přesnost, češtinu, respektování zadání, rychlost a náklady. U dlouhého rozboru a krátkého návrhu zprávy mohou být vhodná jiná nastavení. Důležitější než univerzální „nejlepší AI“ je možnost výstup zkontrolovat a při nejistotě jej předat člověku.</p>
          <p>Praktické pravidlo pro personalizaci: pokud neumíme tvrzení dohledat ve zdroji, neposíláme ho. Věta „vidím, že otevíráte pobočku“ musí mít oporu, ne vzniknout jako kreativní doplněk. Stejně tak do modelu nepatří automaticky celý obsah obchodních schránek. Rozsah předávaných dat a podmínky poskytovatele řešíme před zapojením, ne až při prvním problému.</p>

          <H2>Prezentér: AI interaktivní prezentace pro složité produkty</H2>
          <p><a href="https://salesrobots.cz" style={linkStyle}>SalesRobots Prezentér</a> používáme pro interaktivní ukázku produktu. Zájemce se může ptát hlasem nebo textem, projít relevantní části nabídky a získat vysvětlení bez předchozí rezervace schůzky. Obchodník pak může navázat na otázky, témata a přepis místo opakování stejného úvodu.</p>
          <p>Na demo neposíláme každého hned v první zprávě. Nejprve musí být jasné, proč má nabídka pro daného člověka smysl. Ukázka má odpovědět na konkrétní otázku: jak produkt funguje, pro koho je vhodný nebo co by jeho zavedení obnášelo. U složité nabídky je užitečnější jeden relevantní scénář než kompletní prezentace všech funkcí.</p>
          <p>Předání obchodníkovi by mělo obsahovat firmu, roli kontaktu, řešený problém, otevřené otázky a domluvený další krok. Prezentér pomáhá s podklady pro kvalifikaci, ale samotné skóre není závazek koupit. Pro nastavení priorit se hodí <Link href="/blog/jak-skorovat-leady" style={linkStyle}>praktický model lead scoringu</Link>. Vyjednávání, ověření rozpočtu a uzavření obchodu zůstávají na týmu.</p>

          <h3>Proč u složitého produktu návštěvnost nekonvertuje</h3>
          <p>Návštěvník technického softwaru, SaaS nebo odborné služby často ještě neví, zda nabídka řeší jeho situaci. Kvůli základní otázce nechce rezervovat schůzku a delší text nemusí jeho pochybnost odstranit. Prezentér nasazujeme jako mezikrok mezi čtením webu a poptávkou: člověk si nabídku nejdřív vysvětlí a teprve potom se rozhodne pokračovat.</p>
          <p>To je konkrétní překážka nízké konverze, kterou interaktivní prezentace pomáhá řešit. Není to slib automatického růstu poptávek. Pokud lidé odcházejí kvůli nevhodnému cílení, ceně nebo nedůvěře, samotná AI nestačí. Dopad ověřujeme podle kvality následných kontaktů, ne pouze podle počtu spuštěných dem.</p>
          <h3>Nejen video: AI reaguje na návštěvníka</h3>
          <p>Pevné video přehrává stejný scénář každému. V AI prezentaci se návštěvník může ptát a dostat vysvětlení relevantní části nabídky. Prezentér vybírá připravené moduly podle jeho zájmu; video může být součástí ukázky, ale nenahrazuje celý rozhovor. AI tak propojuje produktový obsah s otázkami konkrétního člověka.</p>
          <p>Modelový příklad: návštěvník výrobního softwaru řeší plánování směn. Připravíme scénář, který vysvětlí danou oblast a ukáže odpovídající část produktu místo univerzálního úvodu. Jiný návštěvník se ptá na integraci a potřebuje jiný obsah. Tyto příklady popisují návrh dema, nikoli změřený výsledek klientské zakázky.</p>
          <h3>Kvalitní AI prezentace začíná podklady</h3>
          <p>Součástí nasazení jsou připravené podklady a moduly; podle scénáře mohou vzniknout i AI generovaná videa na míru. U ceny, integrace a individuálního závazku musí být jasné, co lze říct a co má ověřit obchodník. Nechceme kreativní odpověď mimo schválenou nabídku.</p>
          <p>S klientem připravíme otázky, které lidé před nákupem skutečně řeší: vhodnost pro jejich provoz, zavedení, omezení a další krok. Smyslem není nahradit dlouhý monolog jiným. Smyslem je dát návštěvníkovi možnost porozumět složitému produktu vlastním tempem a obchodníkovi předat kontext, na který může navázat.</p>

          <H2>Hunter Analytics: co se stane po kliknutí na web</H2>
          <p><a href="https://salesrobots.cz/co-je-hunter" style={linkStyle}>Hunter Analytics je analytická část Web Hunteru od SalesRobots</a>. Sleduje zobrazení webových prvků, konverze, konverzní poměr a výkon variant či segmentů návštěvnosti. Pomáhá rozlišit, jestli návštěvník nabídku viděl, reagoval na ni, nebo odešel bez další akce.</p>
          <p>Pro nás je důležité oddělit akci na webu od obchodního výsledku. Kliknutí na tlačítko, otevření kontaktu a skutečně uskutečněná schůzka jsou tři různé události. Srovnávání variant má smysl jen tehdy, když víme, jakou akci měříme, a sledujeme i kvalitu následných příležitostí. Analytika není automaticky identifikací konkrétního člověka.</p>
          <p>Když testujeme dva texty výzvy k akci, neměníme současně celou nabídku a cílový segment. Jinak nedokážeme výsledek rozumně interpretovat. U malého počtu návštěv také nevyhlašujeme vítěze po několika kliknutích. Hunter poskytuje podklady pro rozhodnutí; obchodní tým musí posoudit, zda změna přivedla relevantní zájemce, ne jen více interakcí.</p>

          <H2>Kolik nástroje stojí podle oficiálních ceníků</H2>
          <p>Ceny jsme ověřili <strong>5. října 2026</strong>. Licence není kompletní cena řízené služby: vedle ní může být potřeba nasazení, práce týmu, spotřeba a připojený odesílací kanál. Aktuální rozsah vždy potvrďte u výrobce.</p>
          <ul style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><a href="https://salesbot.cz" style={linkStyle}>Salesbot Pro</a>: 590 Kč měsíčně bez DPH při měsíční platbě. Kompletní správa kampaní a externí integrace nejsou automaticky zahrnuté v této ceně.</li>
            <li><a href="https://salesrobots.cz" style={linkStyle}>Prezentér</a>: Start 1 990 Kč měsíčně pro 100 engaged sessions. Setup 9 900 Kč při závazku alespoň tří měsíců, standardně 14 900 Kč; složitější produkty od 19 900 Kč. Nadlimitní využití se účtuje zvlášť. Daňový režim a rozsah potvrďte v nabídce.</li>
            <li><a href="https://salesrobots.cz/co-je-hunter" style={linkStyle}>Web Hunter včetně analytiky</a>: Starter 990 Kč měsíčně bez DPH, do 200 interakcí. Hunter Analytics není samostatná licence.</li>
            <li><a href="https://claude.com/pricing" style={linkStyle}>Claude Pro</a>: 20 USD měsíčně při měsíční platbě, bez případných daní. API má samostatné účtování.</li>
            <li><a href="https://chatgpt.com/pricing/" style={linkStyle}>ChatGPT / GPT</a>: cenu zvoleného plánu ověřte pro svůj region. Načtený veřejný ceník částku nezobrazil, proto ji nedoplňujeme odhadem. API a předplatné ChatGPT mají oddělené účtování.</li>
          </ul>

          <H2>Modelový příklad: od LinkedIn zprávy k teplé schůzce</H2>
          <p>Představme si firmu, která nabízí technický software výrobním podnikům. Následující postup je modelový příklad propojení nástrojů, nikoli zveřejněný výsledek zákaznické kampaně. V jednotlivém projektu se integrace a způsob předávání dat musí nastavit; samotné zakoupení licencí tento řetězec nevytvoří.</p>
          <ol style={{ paddingLeft: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>Vybereme relevantní firmy a role.</strong> Ověříme segment, zdroje dat a odstraníme duplicity i kontakty, které už oslovení odmítly. Podklady k tomu nabízí článek o <Link href="/blog/b2b-kontakty-ceske-firmy" style={linkStyle}>zdrojích kvalitních B2B kontaktů</Link>.</li>
            <li><strong>Claude nebo GPT připraví návrh.</strong> Z ověřených podkladů vznikne stručný důvod oslovení a zpráva. Člověk zkontroluje faktickou správnost a vhodnost nabídky.</li>
            <li><strong>Salesbot podpoří LinkedIn komunikaci.</strong> Kampaň pracuje s nastavenými limity. Odpověď má přednost před automatickým pokračováním sekvence.</li>
            <li><strong>Zájemce dostane relevantní demo.</strong> Prezentér vysvětlí vybraný scénář. Jeho otázky pomohou určit, jestli má smysl technická nebo obchodní schůzka.</li>
            <li><strong>Vyhodnotíme cestu a předáme kontext.</strong> Hunter Analytics pomůže u webových akcí, tým doplní výsledek konverzace a další krok. Obchodník dostane příležitost s podklady, ne pouze jméno v tabulce.</li>
          </ol>
          <p>Na propojení potřebujeme společnou identifikaci firmy či kontaktu, jasné stavy a odpovědnost za reakci. Automatizace se musí zastavit, když člověk odpoví, odmítne nabídku nebo nastane chyba. Bez těchto pravidel vznikne několik souběžných kampaní, které si navzájem překážejí. Dobrý stack proto obsahuje i možnost ručního zásahu a dohledatelnou historii.</p>

          <H2>Co měříme a co žádný nástroj nevyřeší</H2>
          <p>Počet odeslaných zpráv není hlavní výsledek. Sledujeme relevantní odpovědi, kvalifikované příležitosti, uskutečněné schůzky a jejich další postup. Každý ukazatel musí mít definici: dvě zprávy od jednoho kontaktu nejsou dvě příležitosti a rezervace zrušené schůzky není uskutečněné jednání. Teprve s tímto rozlišením lze posoudit, kde se proces zadrhává.</p>
          <p>Nástroje nevyřeší nabídku bez jasné hodnoty, špatně vybraný segment ani tým, který na zájemce nereaguje. Pokud je zpráva relevantní, ale odpovědi zůstávají několik dní bez obsluhy, další automatizace situaci zhorší. Před spuštěním proto určujeme, kdo převezme zájem, v jakém čase a s jakými podklady. Automatizovaný první kontakt bez zvládnutého předání není hotový obchodní systém.</p>
          <p>Také neplatí, že veřejně dostupný kontakt automaticky opravňuje k libovolnému oslovení. Pravidla konkrétního kanálu a práci s osobními údaji je potřeba posoudit zvlášť. Nástroje jsou prostředkem provedení, ne právním důvodem pro rozesílku. Tento přehled nepředstavuje právní stanovisko ani záruku doručitelnosti či obchodního výsledku.</p>

          <H2>Kdo váš outbound stack nastaví a obslouží?</H2>
          <p>Samostatné licence dávají smysl, když máte člověka, který zvládne výběr dat, přípravu kampaní, kontrolu výstupů a vyhodnocení. Pokud taková kapacita chybí, je rozumnější řešit odpovědnost za celý outbound než přidat další aplikaci. Cena licence je jen část práce: někdo musí propojení nastavit, hlídat chyby a upravovat scénář podle odpovědí zákazníků.</p>
          <p>V SalesAgent nabízíme oba modely: řízenou automatizaci, kterou pro klienta provozujeme, i systém na míru, který předáme jeho týmu. Žádný z nich není univerzálně lepší. Rozhoduje kapacita lidí, požadovaná kontrola a ochota věnovat se průběžné obsluze. Podrobnosti najdete u <Link href="/cs/automatizovane-osloveni" style={linkStyle}>automatizovaného oslovení přes e-mail a LinkedIn</Link>.</p>
          <div style={{ padding: '28px', border: '1px solid var(--border)', borderRadius: '14px', background: 'var(--bg-card)' }}>
            <h3 style={{ marginTop: 0, fontFamily: 'Space Grotesk, sans-serif' }}>Nebo vám to postavíme a rozjedeme</h3>
            <p style={{ margin: '12px 0 20px' }}>Probereme, kde dnes ztrácíte příležitosti, vybereme vhodné části stacku a domluvíme, co převezmeme my a co váš obchodník. Nemusíte začínat všemi nástroji najednou.</p>
            <Link href="/cs/contact" style={{ display: 'inline-block', background: 'var(--accent)', color: '#fff', borderRadius: '8px', padding: '12px 20px', fontWeight: 700 }}>Kontaktujte nás</Link>
          </div>

          <H2>Časté otázky k nástrojům pro automatizaci prodeje</H2>
          {faqs.map(({ q, a }) => <section key={q}><h3 style={{ fontSize: '20px', lineHeight: 1.4, margin: '0 0 10px' }}>{q}</h3><p style={{ margin: 0 }}>{a}</p></section>)}
          <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Autor: Petr Kubíček, SalesAgent.cz / SalesRobots. Přehled popisuje náš pracovní stack k 5. říjnu 2026; dostupnost funkcí a podmínky vždy ověřte na odkazovaných produktových stránkách.</p>
        </div>
      </div>
    </article>
  )
}

function H2({ children }: { children: ReactNode }) {
  return <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(24px, 3vw, 30px)', lineHeight: 1.3, margin: '22px 0 0' }}>{children}</h2>
}
