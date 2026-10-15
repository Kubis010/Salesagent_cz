import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

const path = '/cs/automatizace-obchodu-claude-chatgpt'
const demoUrl = 'https://app.salesrobots.cz/demo/salesagent-cz'
const salesbotUrl = 'https://app.salesbot.cz/auth?lang=cs&mode=signup&utm_source=salesagent.cz&utm_medium=website&utm_campaign=claude-chatgpt-automatizace'
const description = 'Za 15 minut uvidíte, jak najít leady, klasifikovat je a připravit kampaně přes Claude či ChatGPT a Salesbot. Bez kódování, s interaktivním Prezentérem.'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (locale !== 'cs') return { robots: { index: false, follow: true } }
  return {
    title: 'Automatizace obchodu přes Claude a ChatGPT bez kódování',
    description,
    alternates: {
      canonical: `https://salesagent.cz${path}`,
      languages: { cs: `https://salesagent.cz${path}`, 'x-default': `https://salesagent.cz${path}` },
    },
    openGraph: {
      title: 'Claude + ChatGPT + Salesbot. Obchod bez ručního hledání.',
      description,
      url: `https://salesagent.cz${path}`,
      type: 'website',
      locale: 'cs_CZ',
      images: [{ url: 'https://salesagent.cz/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: 'Automatizace obchodu bez kódování', description },
  }
}

const topics = [
  {
    title: 'Propojení Salesbota s Claudem nebo ChatGPT',
    label: 'První krok',
    body: 'AI potřebuje přístup k vašemu Salesbot účtu. Ukážeme si, co propojit, kde potvrdit oprávnění a proč pak můžete zadávat obchodní úkoly obyčejnou češtinou. Bez psaní programu.',
    prompt: 'Ukaž mi můj Salesbot účet, připojené kanály a co ještě potřebuji nastavit. Zatím nic neodesílej.',
  },
  {
    title: 'Jak najít leady: firmy, které dávají smysl',
    label: 'Hledání leadů',
    body: 'Ne „všechny firmy v Česku“. Popíšete, komu prodáváte, co řeší a kde působí. Salesbot s AI pomůže najít odpovídající firmy. Začnete malým seznamem, který má smysl zkontrolovat.',
    prompt: 'Najdi české výrobní firmy s 20–100 zaměstnanci, které by mohly potřebovat naše řešení, a u každé vysvětli proč.',
  },
  {
    title: 'Najít člověka, ne jen název firmy',
    label: 'Rozhodovatelé',
    body: 'Kdo o vašem řešení rozhoduje? Majitel, šéf obchodu, nebo někdo ve výrobě? Vyhledání firmy naváže dohledáním relevantního člověka na LinkedInu. Než ho uložíte, ověříte jeho roli a firmu.',
    prompt: 'U vybraných firem najdi lidi odpovědné za obchod. Ukaž jejich současnou roli a odkaz na profil ke kontrole.',
  },
  {
    title: 'Zjistit, co firma skutečně dělá',
    label: 'Web a data',
    body: 'Než někomu napíšete, podívejte se na jeho web. Průzkum webu — scraper — doplní kontext: produkty, zákazníky a důvod, proč by vaše nabídka mohla být relevantní. Nemusíte ručně pročítat každou stránku.',
    prompt: 'Prozkoumej weby těchto firem a ke každé doplň, co prodává, komu a jaký konkrétní důvod máme ji oslovit.',
  },
  {
    title: 'Klasifikace a kvalifikace leadů',
    label: 'Komu se věnovat',
    body: 'Klasifikace leadu znamená zařazení podle vašich kritérií. Kvalifikace řeší, jestli je to opravdu vhodný zákazník. Společně oddělíte relevantní firmy od těch, kterým teď nemáte co nabídnout. AI má uvést i to, co neví.',
    prompt: 'Rozděl leady na vhodné, k ověření a nevhodné podle našeho ideálního zákazníka. U každého napiš důvod a chybějící údaje.',
  },
  {
    title: 'Zpráva, ze které je poznat, že víte komu píšete',
    label: 'Personalizace',
    body: 'Místo obecného „pomáháme firmám růst“ použijete jednu konkrétní věc z webu příjemce. AI připraví krátký návrh. Vy zkontrolujete fakta, tón i to, jestli má zpráva důvod existovat.',
    prompt: 'Připrav pro vhodné leady krátké osobní zprávy na LinkedIn. Vycházej z ověřených informací z webu a nech je ke schválení.',
  },
  {
    title: 'LinkedIn kampaň bez kopírování zpráv',
    label: 'Kampaně',
    body: 'Vybrané kontakty, připravené zprávy a další kroky dáte do kampaně v Salesbotu. Nastavíte limity a kontrolu před odesláním. Připravená kampaň není totéž jako spuštěná — poslední rozhodnutí zůstává na vás.',
    prompt: 'Připrav LinkedIn kampaň pro schválené kontakty, navrhni konzervativní limity a ukaž mi ji ke kontrole. Nespouštěj ji.',
  },
  {
    title: 'E-maily z vlastní schránky',
    label: 'Další kanál',
    body: 'Kde máte vyřešené podmínky pro e-mailové oslovení, můžete navázat z připojené schránky. AI pomůže s návrhem, Salesbot s evidencí a odesláním podle nastavení. Nalezený e-mail sám o sobě není souhlas s kampaní.',
    prompt: 'Pro kontakty označené jako schválené pro e-mail připrav krátké osobní zprávy. Ulož návrhy a zatím nic neposílej.',
  },
  {
    title: 'Follow-up, na který nemusíte myslet',
    label: 'Další krok',
    body: 'Obchod často nekončí první zprávou. Připravíte rozumné navázání a určíte, kdy už nepokračovat. Po odpovědi má přijít relevantní reakce, ne další zpráva ze stejné série.',
    prompt: 'Navrhni jedno krátké připomenutí pro kontakty bez odpovědi. Po odpovědi další automatické oslovení zastav a předej mi konverzaci.',
  },
  {
    title: 'Vlastní CRM: vědět, co se s každým leadem děje',
    label: 'Přehled v obchodě',
    body: 'Kontakty, poznámky a stav obchodu nezůstanou roztroušené v chatu a tabulkách. V CRM Salesbota vidíte, koho jste našli, komu psali a komu se má obchodník ozvat. AI pomůže s další prací nad tímto přehledem.',
    prompt: 'Ukaž mi leady v CRM, které čekají na naši reakci, shrň jejich situaci a navrhni další krok pro obchodníka.',
  },
  {
    title: 'Prezentér: produkt vysvětlit, ne jen poslat video',
    label: 'Od zájmu k rozhovoru',
    body: 'U složitější nabídky nestačí jedna věta v e-mailu. Prezentér dá zájemci interaktivní prezentaci na webu: vybere si téma a může se ptát AI hlasem nebo textem. Obchodník pak může navázat s kontextem, ne od nuly. Prezentér je samostatný produkt.',
    prompt: 'Připrav návrh navazující zprávy s naším odkazem na Prezentér pro zájemce, kteří si řekli o podrobnosti. Nech ji ke schválení.',
  },
]

const faqs = [
  { q: 'Zvládnu automatizaci obchodu bez kódování?', a: 'Nemusíte programovat. Potřebujete Salesbot účet, připojit vybrané kanály a propojit kompatibilního AI asistenta. Pak zadáváte úkoly česky. Cílení, kvalitu dat a připravené zprávy ale stále kontrolujete vy.' },
  { q: 'Budu mít všechno spuštěné za 15 minut?', a: 'Za přibližně 15 minut ukázky získáte představu, jak hledání leadů, jejich klasifikace a kampaně navazují. Není to záruka času nasazení: propojení účtů, příprava nabídky, kontrola dat a schválení první kampaně mohou zabrat déle.' },
  { q: 'Stačí mi samotný Claude nebo ChatGPT?', a: 'Pro tento postup ne. Claude nebo ChatGPT rozumí zadání, Salesbot mu po propojení poskytuje práci s kontakty, kampaněmi a CRM. Není to návod na stavbu vlastního nástroje místo Salesbota. Dostupnost propojení závisí také na vašem AI tarifu a oprávněních.' },
  { q: 'Odešle AI zprávy sama?', a: 'Záleží na nastavení oprávnění a schvalování. Pro začátek doporučujeme nechat zprávy jako návrhy a před spuštěním je zkontrolovat. Vzorová zadání na této stránce jsou příklady, nikoli pokyn ke spuštění kampaně.' },
  { q: 'Co když nechci nastavovat ani řídit kampaně?', a: 'Zvolte řízenou automatizaci od SalesAgent. Domluvíme cílení, připravíme systém a kampaně a průběžně je obsluhujeme. Váš člověk řeší připravené příležitosti a obchodní jednání. Nasazení i měsíční řízení mají vlastní cenu podle rozsahu.' },
  { q: 'Je Prezentér součástí licence Salesbota?', a: 'Ne automaticky. Salesbot a Prezentér jsou vlastní produkty Sales Robots pro různé části obchodu. Salesbot řeší práci s leady a oslovením, Prezentér interaktivní vysvětlení nabídky. Tarify AI asistenta a další služby mohou být účtované zvlášť.' },
]

function PlayIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 5 11 7-11 7V5Z" fill="currentColor" /></svg>
}

function ProductActions({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`${styles.actions} ${compact ? styles.compact : ''}`}>
      <a href={salesbotUrl} className={styles.primary}>Vyzkoušet Salesbota <span aria-hidden="true">↗</span></a>
      <Link href="/cs/contact" className={styles.secondary}>Chci to mít na klíč <span aria-hidden="true">→</span></Link>
    </div>
  )
}

export default async function SalesbotWorkshopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'cs') notFound()
  const faqSchema = {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className={styles.hero} aria-labelledby="workshop-title">
        <div className={styles.heroCopy}>
          <Link href="/cs" className={styles.back}>SalesAgent.cz <span aria-hidden="true">/</span> Praktická ukázka</Link>
          <p className={styles.eyebrow}><span /> PRO MAJITELE A ŠÉFY MALÝCH FIREM</p>
          <h1 id="workshop-title">Automatizace obchodu přes Claude a ChatGPT.<br /><em>Bez kódování.</em></h1>
          <p className={styles.lead}>Obchod vám běží. Na hledání dalších zákazníků už ale nezbývá čas.</p>
          <p className={styles.intro}>Za 15 minut uvidíte, jak se Salesbotem najít leady, klasifikovat je a připravit osobní oslovení i kampaně. Zadáváte česky. Nemusíte psát program.</p>
          <a href="#prezentace" className={`${styles.primary} ${styles.watch}`}><PlayIcon /> Pustit video a online Prezentér</a>
          <p className={styles.finePrint}>Petr vás provede ukázkou. Pak si vyberete, co vás zajímá, a můžete se zeptat.</p>
          <div className={styles.host}>
            <Image src="/petr-kubicek.jpg" alt="Petr Kubíček" width={44} height={44} className={styles.avatar} />
            <div><strong>Petr Kubíček</strong><span>Sales Robots · ukázky ze Salesbota a Prezentéru</span></div>
          </div>
        </div>
        <div id="prezentace" className={styles.demoFrame}>
          <div className={styles.demoBar}><span><i /> PREZENTÉR · SALESAGENT.CZ</span><a href={demoUrl} target="_blank" rel="noopener noreferrer">Otevřít samostatně ↗</a></div>
          <iframe src={demoUrl} title="Salesagent.cz — interactive demo" loading="eager" style={{ width: '100%', height: 'clamp(560px,80vh,820px)', border: 0, borderRadius: '12px', display: 'block' }} allow="microphone" />
        </div>
      </section>

      <div className={styles.factStrip}>
        <span><strong>15 minut</strong> pro první představu</span><span><strong>Bez kódování</strong> s připojeným Salesbotem</span><span><strong>Vlastní tempo</strong> a prostor na otázky</span>
      </div>

      <div className={styles.afterDemo}><p>Chcete si to osahat na vlastních kontaktech?<br /><span>Začněte Salesbotem. Nebo si nechte celý postup nastavit od nás.</span></p><ProductActions /></div>

      <section className={styles.lightSection} aria-labelledby="roles-title">
        <div className={styles.rolesWrap}>
          <div><p className={styles.eyebrow}>NEMUSÍTE STAVĚT VLASTNÍ SOFTWARE</p><h2 id="roles-title">Vy víte, komu prodáváte.<br />Zbytek nemusíte dělat ručně.</h2></div>
          <div className={styles.roles}>
            <div><span className={styles.roleNumber}>01 / ZADÁNÍ</span><h3>Claude nebo ChatGPT</h3><p>Popíšete úkol běžnou češtinou. AI pomůže hledat souvislosti, roztřídit leady a připravit další krok.</p></div>
            <div><span className={styles.roleNumber}>02 / ZÁZEMÍ</span><h3>Salesbot</h3><p>Po propojení drží pohromadě kontakty, jejich průzkum, kampaně, zprávy a vlastní CRM. Tady práci kontrolujete.</p></div>
            <div><span className={styles.roleNumber}>03 / OBCHOD</span><h3>Vy nebo váš obchodník</h3><p>Schválíte, komu a co odejde. Řešíte odpovědi, jednání a nabídky — místo večerního hledání dalšího seznamu firem.</p></div>
          </div>
        </div>
      </section>

      <section className={styles.topicsSection} aria-labelledby="topics-title">
        <div className={styles.topicsIntro}><p className={styles.eyebrow}>OD PRVNÍHO LEADU PO DALŠÍ KROK</p><h2 id="topics-title">Co si společně<br />projdeme.</h2><p>Jedenáct konkrétních témat. Rozbalte si, co potřebujete vyřešit, a podívejte se na příklad zadání pro AI.</p><div className={styles.topicNote}><span aria-hidden="true">↳</span><p>Po připojení Salesbota je začátek obyčejná věta česky. Ne řádky kódu.</p></div><a href="#prezentace" className={styles.textLink}><PlayIcon /> Přejít na video a Prezentér</a></div>
        <div className={styles.topicsList}>
          {topics.map((topic, index) => (
            <details className={styles.topic} key={topic.title} open={index === 0}>
              <summary><span className={styles.topicIndex}>{String(index + 1).padStart(2, '0')}</span><span><small>{topic.label}</small><strong>{topic.title}</strong></span><span className={styles.expand} aria-hidden="true">+</span></summary>
              <div className={styles.topicBody}><p>{topic.body}</p><div className={styles.example}><span>TAKHLE TO ŘEKNETE ČESKY</span><blockquote>„{topic.prompt}“</blockquote><small>Příklad zadání po propojení Salesbota s AI. Výstup i další akce kontrolujete.</small></div><p className={styles.oneSentence}>S Claudem napojeným na Salesbota začnete jednou větou česky.</p><ProductActions compact /></div>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.choiceSection} aria-labelledby="choice-title">
        <p className={styles.eyebrow}>STEJNÝ CÍL. DVĚ CESTY.</p><h2 id="choice-title">Chcete to řídit sami,<br />nebo to mít hotové?</h2>
        <div className={styles.choices}>
          <div className={styles.selfServe}><span className={styles.choiceLabel}>CHCI ZAČÍT SÁM</span><h3>Vezmu si Salesbota.</h3><p>Pro majitele a malé týmy, které si chtějí nastavit vlastní cílení a mít kampaně ve svých rukou.</p><ul><li>Vlastní účet a přehled o kontaktech</li><li>Claude nebo ChatGPT jako pomocník</li><li>Hledání leadů, klasifikace, kampaně a CRM</li><li>Kontrola zpráv a tempa oslovování</li></ul><a href={salesbotUrl} className={styles.primary}>Vyzkoušet Salesbota ↗</a><small>Licence Salesbota, AI asistenta a Prezentéru jsou samostatné.</small></div>
          <div className={styles.managed}><span className={styles.choiceLabel}>CHCI ŘEŠIT AŽ ZÁJEMCE</span><h3>Postavte mi to na klíč.</h3><p>Pro firmy, kde na nastavování a každodenní řízení není prostor. Cílení i provoz domluvíme a obsloužíme.</p><ul><li>Návrh cílení a obchodního postupu</li><li>Nastavení systému a kampaní</li><li>Průběžná obsluha a ladění</li><li>Předání připravených příležitostí</li></ul><Link href="/cs/contact" className={styles.secondary}>Chci to mít na klíč →</Link><Link href="/cs/pricing" className={styles.textLink}>Podívat se na ceník řízené automatizace</Link></div>
        </div>
        <p className={styles.disclosure}>Salesbot a Prezentér jsou naše vlastní produkty Sales Robots. Nejde o nezávislé srovnání nástrojů.</p>
      </section>

      <section className={styles.faqSection} aria-labelledby="faq-title">
        <div><p className={styles.eyebrow}>JEŠTĚ NEŽ ZAČNETE</p><h2 id="faq-title">Na co se ptáte.</h2><p>Další otázku můžete položit přímo v <a href="#prezentace">Prezentéru</a>.</p></div>
        <div>{faqs.map(({ q, a }) => <details className={styles.faq} key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}<p className={styles.setupLink}>Podrobnosti k propojení: <a href="https://salesbot.cz/mcp-server">návod Salesbota pro Claude a ChatGPT ↗</a>. Širší postup pro firmu: <Link href="/blog/jak-zavest-automatizaci-prodeje-ve-firme">jak zavést automatizaci prodeje</Link>.</p></div>
      </section>

      <section className={styles.finalCta}><p className={styles.eyebrow}>NEJDŘÍV UKÁZKA. PAK ROZHODNUTÍ.</p><h2>Méně hledání.<br /><em>Víc skutečných rozhovorů.</em></h2><a href="#prezentace" className={`${styles.primary} ${styles.watch}`}><PlayIcon /> Pustit video a online Prezentér</a><p>Podívejte se, jak to funguje. A pak si vyberte vlastní cestu.</p></section>
    </div>
  )
}
