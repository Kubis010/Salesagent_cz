import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import styles from './page.module.css'

const canonical = 'https://salesagent.cz/cs/externi-obchodni-reditel'
const booking = 'https://outlook.office.com/bookwithme/user/480895b1333541dc94be634dd588fada@salesagent.cz/meetingtype/jwdxCRPBn0CvHccZ7eLwAg2?anonymous&ismsaljsauthenabled&ep=mLinkFromTile'

export const metadata: Metadata = {
  title: 'Externí obchodní ředitel | Interim a fractional vedení obchodu',
  description: 'Externí obchodní ředitel pro B2B firmy. Obchodní strategie, vedení obchodníků, CRM a AI v obchodě podle potřeb vašeho týmu.',
  alternates: { canonical, languages: { cs: canonical } },
  openGraph: { type: 'website', locale: 'cs_CZ', url: canonical, title: 'Externí obchodní ředitel | SalesAgent.cz', description: 'Seniorní obchodní vedení podle potřeb vaší firmy. Strategie, tým, nové trhy a praktické využití AI.' },
}

const situations = [
  'Firma roste, ale obchod stojí hlavně na majiteli.',
  'Máte 1–5 obchodníků, ale chybí vám člověk, který by je vedl a nastavil systém.',
  'Ředitel na plný úvazek je zatím příliš drahý nebo ho nemůžete najít.',
  'Chcete vstoupit na český nebo slovenský trh a hledáte první kroky.',
  'Odešel vám obchodní ředitel a potřebujete zastoupení na přechodnou dobu.',
  'Víte, že by vám AI v obchodě pomohla, ale nevíte jak začít.',
]
const services = [
  ['01', 'Obchodní strategie a plán', 'Cílové segmenty, nabídka, ceny a obchodní cíle. Připravíme konkrétní plán na příštích 3–6 měsíců.'],
  ['02', 'Vedení a rozvoj obchodníků', 'Pravidelné porady, koučink, společné schůzky s klienty i nastavení cílů a odměňování.'],
  ['03', 'Obchodní proces a CRM', 'Od prvního kontaktu po podpis smlouvy: kdo za co odpovídá, jaký je další krok a jak výsledek měřit.'],
  ['04', 'Nové trhy', 'Vstup na trh v Česku, na Slovensku a v Polsku. Vycházím ze zkušeností se zastupováním zahraničních firem.'],
  ['05', 'AI v obchodě', 'Praktické využití AI pro hledání firem, přípravu schůzek a péči o zákazníky.'],
  ['06', 'Klíčoví zákazníci a obchody', 'Pomoc s důležitými příležitostmi, vyjednáváním a návraty ke ztraceným zákazníkům.'],
]
const steps = [
  ['01', 'Úvodní schůzka', '30 minut zdarma', 'Probereme, co vás trápí a jestli vám umím pomoct.'],
  ['02', 'Audit obchodu', '1–2 dny', 'Projdu čísla, proces, tým a zákazníky. Dostanete konkrétní doporučení.'],
  ['03', 'Společná práce', 'Podle domluveného rozsahu', 'Porady s týmem, práce na strategii a schůzky s klienty.'],
  ['04', 'Vyhodnocení', 'Každé čtvrtletí', 'Podíváme se, co funguje, co změnit a jak pokračovat.'],
]
const plans = [
  { label: 'JEDNORÁZOVĚ', name: 'Audit obchodu', range: '1–2 dny', audience: 'Chcete vědět, kde máte rezervy a co má smysl změnit.', length: 'Doba dodání: 1–2 týdny' },
  { label: 'PRŮBĚŽNÉ VEDENÍ', name: 'Fractional', range: '2–4 dny měsíčně', audience: 'Potřebujete pravidelné vedení obchodu a podporu týmu.', length: 'Spolupráce od 3 měsíců' },
  { label: 'DOČASNÉ ZASTOUPENÍ', name: 'Interim', range: '6–10 dní měsíčně', audience: 'Potřebujete na přechodnou dobu zastoupit obchodního ředitele.', length: 'Obvykle 3–6 měsíců' },
]
const faqs = [
  ['Jaký je rozdíl mezi interim a fractional obchodním ředitelem?', 'Interim zastoupí obchodního ředitele na přechodnou dobu ve větším rozsahu. Fractional pracuje pro firmu průběžně, ale jen několik dní v měsíci.'],
  ['Budete u nás fyzicky?', 'Podle potřeby. Část práce probíhá online, porady a schůzky s klienty osobně. Praha a okolí bez příplatku, jinde po domluvě.'],
  ['Budete i sám prodávat?', 'Pomohu s klíčovými obchody a schůzkami. Hlavní cíl je nastavit obchod tak, aby fungoval i beze mě.'],
  ['Jak rychle můžeme začít?', 'Obvykle do 2 týdnů od úvodní schůzky. Konkrétní termín a rozsah si potvrdíme společně.'],
  ['Pracujete s konkurencí?', 'Ne. Současně nespolupracuji s firmami, které si konkurují.'],
]

function BookingLink({ label = 'Domluvit nezávaznou schůzku' }: { label?: string }) {
  return <a href={booking} target="_blank" rel="noopener noreferrer" className={styles.primary}>{label}<span aria-hidden="true">↗</span></a>
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (locale !== 'cs') notFound()
  return <main className={styles.page}>
    <section className={styles.hero}><div className={styles.heroInner}>
      <div><p className={styles.eyebrow}><span /> INTERIM A FRACTIONAL OBCHODNÍ ŘEDITEL · B2B · ČR A SK</p><h1>Obchodní ředitel s 20 lety praxe. <em>Bez plného úvazku.</em></h1><p className={styles.lead}>Pomohu vám nastavit obchod, vést obchodníky a otevřít nové trhy. Zkušenosti seniorního obchodního ředitele podle potřeb vaší firmy — včetně praktického využití AI.</p><BookingLink /><p className={styles.heroNote}>První 30minutová konzultace zdarma <span>·</span> nejvýš 2 firmy současně</p></div>
      <div className={styles.heroCard}><div className={styles.cardTop}><span><i /> OBCHODNÍ VEDENÍ NA MÍRU</span><span>01 — 03</span></div><p>Váš obchod má potenciál.<br /><em>Pojďme ho využít.</em></p><div className={styles.cardRows}><div><span>01</span> Strategie a obchodní plán <b>↗</b></div><div><span>02</span> Lidé, proces a CRM <b>↗</b></div><div><span>03</span> Nové trhy a AI v obchodě <b>↗</b></div></div><div className={styles.cardPerson}><Image src="/petr-kubicek.jpg" width={42} height={42} alt="" /><div><strong>Ing. Petr Kubíček</strong><small>20+ let v B2B obchodě</small></div></div></div>
    </div></section>
    <div className={styles.container}>
      <section className={styles.situations}><div><p className={styles.eyebrow}>PRO KOHO JE SPOLUPRÁCE</p><h2>Poznáte v tom<br />svou firmu?</h2><p className={styles.sectionLead}>Nepotřebujete další obecné rady. Potřebujete člověka, který s vámi obchod skutečně posune.</p></div><ul>{situations.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section className={styles.services}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>S ČÍM VÁM POMOHU</p><h2>Seniorní vedení obchodu.<br />V rozsahu, který potřebujete.</h2></div><p>Od strategie a vedení lidí až po konkrétní obchodní příležitosti.</p></div><div className={styles.serviceGrid}>{services.map(([num,title,body]) => <article key={num}><span>{num}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>
      <section className={styles.process}><div><p className={styles.eyebrow}>JAK SPOLUPRÁCE PROBÍHÁ</p><h2>Nejdřív zjistíme, co váš obchod potřebuje.</h2><p className={styles.sectionLead}>Pak se domluvíme na konkrétních krocích a rozsahu. Bez dlouhých výpovědních lhůt — pokud vám spolupráce nepřináší hodnotu, můžete ji ukončit.</p></div><div className={styles.stepList}>{steps.map(([n,title,time,body]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><small>{time}</small><p>{body}</p></div></article>)}</div></section>
      <section className={styles.plans}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>VARIANTY SPOLUPRÁCE</p><h2>Od jednorázového auditu<br />po vedení obchodu.</h2></div><p>Konkrétní rozsah a cenu si vždy stanovíme podle potřeb firmy.</p></div><div className={styles.planGrid}>{plans.map(plan => <article key={plan.name}><span>{plan.label}</span><h3>{plan.name}</h3><p className={styles.range}>{plan.range}</p><p className={styles.planBody}>{plan.audience}</p><p className={styles.length}>{plan.length}</p><p className={styles.price}>Cena dle domluvy</p><BookingLink label="Probrat spolupráci" /></article>)}</div></section>
      <section className={styles.founder}><div className={styles.portrait}><Image src="/petr-kubicek.jpg" width={220} height={220} alt="Ing. Petr Kubíček, externí obchodní ředitel" /></div><div><p className={styles.eyebrow}>KDO ZA TÍM STOJÍ</p><h2>Ing. Petr Kubíček</h2><p>Přes 20 let v B2B obchodě. Zakladatel Sales Robots s.r.o. Zastupuji zahraniční firmy na českém trhu, mimo jiné z Chorvatska, Polska a Německa. AI v obchodě používám denně a vyvinul jsem vlastní nástroj Salesbot.</p><p>Spolupracuji nejvýš se dvěma firmami současně, aby každá dostala potřebnou pozornost.</p><div className={styles.founderFact}><strong>20+</strong><span>let zkušeností<br />v B2B obchodě</span></div></div></section>
      <section className={styles.faq}><div><p className={styles.eyebrow}>ČASTÉ OTÁZKY</p><h2>Co vás může zajímat.</h2><p className={styles.sectionLead}>Více o tom, jak tato role funguje v praxi: <Link href="/blog/fractional-obchodni-reditel" style={{ color: '#ffad9c', textDecoration: 'underline' }}>fractional obchodní ředitel</Link>.</p></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
      <section className={styles.final}><p className={styles.eyebrow}>PRVNÍ KROK JE NEZÁVAZNÝ</p><h2>Pojďme se podívat, kde má váš obchod největší rezervy.</h2><p>30 minut, zdarma a bez závazku. Řeknu vám otevřeně, jestli vám umím pomoct.</p><BookingLink label="Domluvit schůzku" /><div><a href="tel:+420777591503">+420 777 591 503</a><span>·</span><a href="mailto:info@salesagent.cz">info@salesagent.cz</a></div></section>
    </div>
  </main>
}
