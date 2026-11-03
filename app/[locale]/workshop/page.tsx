import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import WorkshopForm from './WorkshopForm'
import styles from './page.module.css'

const canonical = 'https://salesagent.cz/cs/workshop'
export const metadata: Metadata = {
  title: 'Workshop AI obchodník za 2 hodiny',
  description: 'Praktický workshop AI pro obchodní týmy. Claude nebo ChatGPT, Salesbot a konkrétní úkoly z vašeho trhu. Online nebo u vás, pro až 8 účastníků.',
  alternates: { canonical, languages: { cs: canonical } },
  openGraph: { type: 'website', locale: 'cs_CZ', url: canonical, title: 'AI obchodník za 2 hodiny | SalesAgent.cz', description: 'Praktický AI workshop pro váš obchodní tým. Pracujeme na vašem trhu a vašich obchodních úkolech.' },
}

const lessons = [
  ['01', 'Nastavení naživo', 'Připojíme Salesbot ke Claude nebo ChatGPT. Každý účastník si projde nastavení na vlastním počítači.'],
  ['02', 'Firmy na vašem trhu', 'Najdeme firmy, které by mohly potřebovat vaši nabídku, a seřadíme je podle vašich priorit.'],
  ['03', 'Příprava na schůzku', 'Ukážeme si, jak z webu, LinkedInu a ARES připravit podklad o firmě a otázky na jednání.'],
  ['04', 'Osobní oslovení', 'Připravíme návrhy zpráv pro konkrétní firmy. Ukážeme si, co svěřit AI a co zkontrolovat sami.'],
  ['05', 'Pořádek v obchodě', 'Firmy, poznámky a další kroky budete mít pohromadě v CRM Salesbotu.'],
  ['06', 'Váš vlastní případ', 'Každý přinese úkol ze své práce. Společně ho vyzkoušíme a doladíme.'],
]
const included = ['2 hodiny online nebo u vás ve firmě v Praze a okolí', 'Až 8 účastníků', '3 měsíce Salesbotu pro každého účastníka', 'Sada promptů na míru vašemu oboru', '30minutová konzultace 2 týdny po workshopu', 'Záznam workshopu pro vaše kolegy']
const faqs = [
  ['Musí účastníci umět programovat?', 'Ne. Pracujeme v prohlížeči a zadání píšeme běžnou češtinou.'],
  ['Potřebujeme placený Claude nebo ChatGPT?', 'Ano, potřebujete tarif s podporou vlastních konektorů. Před workshopem vám pošleme přesné instrukce k přípravě.'],
  ['Online, nebo osobně?', 'Obojí je možné. Online odkudkoliv, osobně v Praze a okolí; mimo Prahu po domluvě.'],
  ['Co po 3 měsících?', 'Salesbot můžete dál používat za 500 Kč bez DPH měsíčně na uživatele, nebo jeho používání bez závazku ukončit.'],
  ['Odešle AI něco bez našeho vědomí?', 'Na workshopu AI hledá a připravuje podklady. O oslovení rozhodujete vy a před odesláním jej kontrolujete.'],
  ['Kdy to může proběhnout?', 'Obvykle do 1–2 týdnů od objednávky. Konkrétní termín si společně potvrdíme.'],
]

export default async function WorkshopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'cs') notFound()
  const freeMail = 'mailto:info@salesagent.cz?subject=' + encodeURIComponent('Zájem o otevřený workshop zdarma — 12. 11. v 10:00') + '&body=' + encodeURIComponent('Dobrý den, mám zájem o otevřený online workshop 12. listopadu v 10:00.\n\nJméno:\nFirma:\n')
  return <main className={styles.page}>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <p className={styles.eyebrow}><span /> WORKSHOP PRO OBCHODNÍ TÝMY · ONLINE NEBO U VÁS</p>
          <h1>Naučte svůj obchodní tým pracovat s AI <em>za 2 hodiny.</em></h1>
          <p className={styles.heroLead}>Vaši obchodníci odejdou s nastaveným Claudem nebo ChatGPT, prompty pro váš obor a prvními výsledky na vlastním trhu. Pracujeme společně naživo.</p>
          <div className={styles.actions}><a href="#poptavka" className={styles.primary}>Chci workshop pro náš tým <span aria-hidden="true">→</span></a><a href="#workshop-zdarma" className={styles.secondary}>Nejdřív zkusím workshop zdarma <span aria-hidden="true">↓</span></a></div>
          <p className={styles.heroFoot}>9 900 Kč bez DPH <span>·</span> až 8 účastníků <span>·</span> 3 měsíce Salesbotu v ceně</p>
        </div>
        <div className={styles.heroVisual} aria-label="Praktický průběh workshopu">
          <div className={styles.visualTop}><span><i /> WORKSHOP NA MÍRU</span><span>02:00 H</span></div>
          <div className={styles.visualTitle}>Z vašeho trhu<br /><em>k dalším příležitostem.</em></div>
          <div className={styles.flow}><div><b>01</b><span>Vybereme správné firmy<small>Váš obor a ideální zákazník</small></span><strong>↗</strong></div><div><b>02</b><span>Připravíme oslovení<small>Váš produkt, vaše argumenty</small></span><strong>↗</strong></div><div><b>03</b><span>Vyzkoušíte to naživo<small>Vaše kontakty, vaše zadání</small></span><strong>✓</strong></div></div>
          <div className={styles.visualBottom}><Image src="/petr-kubicek.jpg" alt="" width={40} height={40} className={styles.avatar} /><span><b>Vede Petr Kubíček</b><small>20+ let v B2B obchodě</small></span><span className={styles.visualBadge}>PRAKTICKY</span></div>
        </div>
      </div>
    </section>
    <div className={styles.container}>
      <section className={styles.problem}>
        <div><p className={styles.eyebrow}>ZNÁTE TO?</p><h2>Vaši obchodníci tráví čas jinde než u zákazníků.</h2></div>
        <div className={styles.problemCopy}><p>Hledají firmy, procházejí weby, přepisují kontakty, připravují se na schůzky a dohledávají, komu se mají znovu ozvat.</p><p>AI jim s tím může výrazně pomoct. Na workshopu si ukážeme jak — na vašich příkladech, bez programování.</p></div>
      </section>
      <section className={styles.lessons}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>CO SI VYZKOUŠÍTE</p><h2>Od „AI zkoušíme“<br />k práci na vlastním trhu.</h2></div><p>Dvě hodiny plné konkrétní práce. Každý účastník si postup sám vyzkouší.</p></div>
        <div className={styles.lessonGrid}>{lessons.map(([n,title,body]) => <article className={styles.lesson} key={n}><span>{n}</span><h3>{title}</h3><p>{body}</p></article>)}</div>
      </section>
      <section className={styles.offer} id="cena">
        <div><p className={styles.eyebrow}>FIREMNÍ WORKSHOP</p><h2>Všechno,<br />co potřebujete do začátku.</h2><p className={styles.muted}>Společně nastavíme nástroje i postupy pro váš tým. Po workshopu máte prostor je vyzkoušet a vrátit se k tomu, co bude potřebovat doladit.</p><ul className={styles.checks}>{included.map(item => <li key={item}>{item}</li>)}</ul></div>
        <div className={styles.priceCard}><span className={styles.priceLabel}>JEDNORÁZOVÁ CENA ZA TÝM</span><p className={styles.price}>9 900 Kč</p><p className={styles.tax}>bez DPH · až 8 účastníků</p><div className={styles.priceDivider} /><p>Včetně 3 měsíců Salesbotu pro každého účastníka. Při 8 účastnících hodnota až 12 000 Kč.</p><a className={styles.primary} href="#poptavka">Chci workshop pro náš tým <span aria-hidden="true">→</span></a><small>Cena placeného tarifu Claude nebo ChatGPT není součástí workshopu.</small></div>
      </section>
      <section className={styles.founder}><div className={styles.portrait}><Image src="/petr-kubicek.jpg" alt="Ing. Petr Kubíček, lektor workshopu" width={220} height={220} /></div><div><p className={styles.eyebrow}>KDO VÁS PROVEDE</p><h2>Obchod s AI vás naučí obchodník.</h2><p className={styles.founderName}>Ing. Petr Kubíček <span>· zakladatel Sales Robots</span></p><p>Přes 20 let v B2B obchodě. Jsem zakladatel Sales Robots a nástroje Salesbot, který propojuje Claude a ChatGPT s obchodem. AI denně používám k hledání zákazníků, přípravě schůzek a oslovování na českém, polském i německém trhu.</p><div className={styles.founderFact}><b>20+</b><span>let zkušeností<br />v B2B obchodě</span></div></div></section>
      <section className={styles.audience}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>PRO KOHO JE WORKSHOP</p><h2>Pro obchodní týmy,<br />které chtějí AI používat.</h2></div></div><div className={styles.audienceGrid}><div><h3>Hodí se vám, pokud</h3><ul className={styles.checks}><li>máte 2–8 obchodníků a chcete víc času na zákazníky;</li><li>prodáváte B2B a hledáte nové firmy;</li><li>zkoušíte Claude nebo ChatGPT a chcete je využít v obchodě.</li></ul></div><div><h3>Spíš ne, pokud</h3><ul className={styles.crosses}><li>hledáte nástroj pro rozesílání tisíců e-mailů bez kontroly;</li><li>prodáváte hlavně koncovým zákazníkům (B2C).</li></ul></div></div></section>
      <section className={styles.faq}><div><p className={styles.eyebrow}>PRAKTICKÉ INFORMACE</p><h2>Často se ptáte.</h2></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>
      <section id="workshop-zdarma" className={styles.free}><div><p className={styles.eyebrow}>OTEVŘENÝ ONLINE WORKSHOP</p><h2>Chcete si to nejdřív vyzkoušet sami?</h2><p>Jednou za čas pořádáme otevřený online workshop pro lidi z B2B obchodu. Za 75 minut uvidíte, jak práce s AI a Salesbotem funguje, a můžete se zeptat.</p><div className={styles.freeMeta}><span>75 minut</span><span>Online</span><span>Zdarma</span></div></div><div className={styles.freeCard}><span>NEJBLIŽŠÍ TERMÍN</span><strong>Čtvrtek 12. 11.</strong><p>10:00 · online</p><a href={freeMail} className={styles.secondary}>Přihlásit se e-mailem <span aria-hidden="true">↗</span></a><small>Otevře se předvyplněný e-mail. Registraci vám následně potvrdíme.</small></div></section>
      <section id="poptavka" className={styles.contact}><div><p className={styles.eyebrow}>WORKSHOP PRO VÁŠ TÝM</p><h2>Za dvě hodiny můžete začít pracovat jinak.</h2><p>Řekněte nám něco o svém týmu. Domluvíme se na termínu, formě a tom, co potřebujete řešit.</p><div className={styles.contactLinks}><a href="mailto:info@salesagent.cz">info@salesagent.cz ↗</a><a href="tel:+420777591503">+420 777 591 503 ↗</a></div></div><WorkshopForm /></section>
    </div>
  </main>
}
