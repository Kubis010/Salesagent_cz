import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { cs } from '@/lib/i18n/cs'
import styles from './page.module.css'

const title = 'Externí obchodník / obchodní zástupce na outsourcing'
const description = 'Externí B2B obchod pro firmy bez obchodní kapacity i týmy, které neprospektují. Získávání zákazníků, kvalifikace a obchodní jednání dle dohody. Cena dle domluvy.'
const url = 'https://salesagent.cz/cs/externi-obchod'
export function generateStaticParams() {
  return [{ locale: 'cs' }]
}

const faqs = [
  { q: 'Kolik leadů nebo schůzek můžeme očekávat?', a: 'Pevný počet bez znalosti vašeho produktu a trhu neslibujeme. Před zahájením dohodneme cílové firmy, definici relevantní příležitosti a způsob vyhodnocování. Sledujeme kvalitu odpovědí a schůzek, ne jen počet oslovených kontaktů.' },
  { q: 'Kolik externí obchod stojí?', a: 'Cena je dle domluvy podle kapacity, cílového trhu a převzatých činností. Předem si potvrdíme odměnu, případné náklady na nástroje a data i odpovědnost za jednotlivé kroky. Externí obchod není zahrnutý v řízené automatizaci od 9 900 Kč měsíčně bez DPH. Nabídkové ceny uvádíme bez DPH.' },
  { q: 'Kdo bude mluvit jménem naší firmy a kdo uzavírá zakázky?', a: 'Předem si schválíme, kdo za vás vystupuje, přes které účty komunikuje a jaké má pravomoci. Můžeme předávat schůzky vašemu obchodníkovi, nebo se dle dohody zapojit do jednání a péče o příležitosti. Cenové nabídky, závazky a uzavírání smluv mají jasně určeného schvalovatele na vaší straně.' },
  { q: 'Jak řešíte GDPR a pravidla obchodního oslovení?', a: 'Před spuštěním projdeme původ kontaktů, právní základ práce s daty a pravidla jednotlivých komunikačních kanálů. Veřejně dostupný kontakt nepovažujeme automaticky za souhlas s reklamním e-mailem. Nastavíme evidenci odmítnutí a postup doporučujeme ověřit s právníkem. Podrobnosti rozebíráme v článku GDPR a cold e-mail.' },
  { q: 'Co když o naši nabídku nebude zájem?', a: 'Vyhodnotíme odpovědi, námitky a kvalitu cílových firem. Domluvíme úpravu segmentu nebo sdělení, případně spolupráci neprodloužíme podle sjednaných podmínek. Placený test na 2–3 měsíce lze dohodnout předem; negarantuje objednávky a jeho rozsah i cenu si potvrdíme před startem.' },
]

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  if ((await params).locale !== 'cs') notFound()
  return {
    title, description,
    alternates: { canonical: url, languages: { cs: url } },
    openGraph: { type: 'website', locale: 'cs_CZ', title, description, url, siteName: 'SalesAgent.cz' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default async function ExternalSalesPage({ params }: { params: Promise<{ locale: string }> }) {
  if ((await params).locale !== 'cs') notFound()
  const schema = [
    { '@context': 'https://schema.org', '@type': 'Service', name: title, description, url, inLanguage: 'cs', serviceType: 'Externí B2B obchod a obchodní zastoupení', provider: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: 'https://salesagent.cz' }, offers: { '@type': 'Offer', url, description: 'Cena dle domluvy podle kapacity a rozsahu zastoupení. Nabídkové ceny jsou bez DPH.' } },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
  ]
  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={styles.hero}>
        <p className={styles.eyebrow}>SalesAgent.cz · Externí B2B obchod</p>
        <h1>{title}</h1>
        <p className={styles.lead}>Nemáte čas získávat nové zákazníky? Nebo máte obchodníka, který zvládá jednání, ale neprospektuje? Převezmeme aktivní hledání a oslovování firem. Podle dohody se zapojíme i do obchodních jednání a další práce s příležitostmi.</p>
        <p className={styles.price}>Cena dle domluvy</p>
        <p>Rozsah, kapacitu a odpovědnosti si potvrdíme předem. Nabídkové ceny jsou bez DPH.</p>
        <div className={styles.actions}><Link className={styles.primary} href="/cs/contact">Probrat externí obchod →</Link><a className={styles.secondary} href="#co-dostanete">Co dostanete</a></div>
      </section>

      <section id="co-dostanete" className={styles.section}>
        <p className={styles.eyebrow}>Konkrétní práce místo dalšího nástroje</p><h2>Co za vás převezmeme</h2>
        <div className={styles.grid}>
          {[
            ['Cílové firmy a kontakty', 'Dohodneme ideálního zákazníka, najdeme odpovídající firmy a připravíme kontakty bez duplicit. Seznam zpřesňujeme podle reakcí trhu.'],
            ['Oslovení a follow-upy', 'Připravíme sdělení, schválíme je s vámi a řídíme oslovení přes dohodnuté kanály. Zpracujeme odpovědi a nezapomeneme na navazující komunikaci.'],
            ['Kvalifikace a schůzky', 'Ověříme, co zájemce řeší a zda odpovídá zadání. Předáme kontext ke schůzce, ne pouze kontakt bez vysvětlení.'],
            ['Jednání podle dohody', 'Pokud potřebujete víc než schůzky, vymezíme naši účast na obchodních jednáních a péči o příležitosti. Pravomoci a schvalování nabídek zůstávají jasně dohodnuté.'],
          ].map(([heading, text]) => <article className={styles.card} key={heading}><h3>{heading}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className={styles.section}><h2>Pro koho má spolupráce smysl</h2><div className={styles.grid}>
        <article className={styles.card}><h3>Majitel, který obchoduje sám</h3><p>Znáte produkt a umíte dojednat zakázku, ale hledání firem a pravidelné oslovování vám bere čas na vedení firmy. Domluvíme, které kroky převezmeme a kdy se zapojíte vy.</p></article>
        <article className={styles.card}><h3>Šéf týmu, jehož obchodník neprospektuje</h3><p>Váš člověk se stará o klienty nebo vede jednání, ale nové příležitosti nepřibývají. Externě zajistíme aktivní získávání zájemců a jeho kapacitu využijete na připravené schůzky.</p></article>
      </div></section>

      <section className={styles.section}><h2>Jak spolupráci rozjedeme</h2><ol className={styles.steps}>
        <li><h3>Vymezíme zadání</h3><p>Projdeme produkt, cílové firmy, dosavadní obchod a to, kdo povede jednání. Ověříme, zda dokážeme být užiteční.</p></li>
        <li><h3>Potvrdíme nabídku a připravíme start</h3><p>Dohodneme cenu, kapacitu, kanály, reporting a podmínky spolupráce. Společně schválíme sdělení, přístupy a způsob předávání příležitostí.</p></li>
        <li><h3>Spustíme a vyhodnocujeme</h3><p>Průběžně probíráme odpovědi, schůzky a námitky. Lze domluvit placený test na 2–3 měsíce; další pokračování sjednáme podle výsledků.</p></li>
      </ol></section>

      <section className={styles.section}><h2>Cena externího obchodu: dle domluvy</h2><div className={styles.card}><p>Neplatíte za neurčitý příslib „celého obchodu“. V nabídce přesně určíme převzaté činnosti, kapacitu, odměnu a případné další náklady. Nepracujeme pouze za provizi.</p><p><strong>Řízená automatizace od 9 900 Kč měsíčně bez DPH je jiná služba:</strong> systém řídíme my, ale jednání a uzavírání zakázek zajišťuje váš člověk. Externí obchod s účastí na jednáních naceníme samostatně.</p><Link href="/cs/pricing">Porovnat služby v ceníku →</Link></div></section>

      <section className={styles.section}><h2>Výsledky z klientských projektů</h2><p>Ukázky dosavadní práce SalesAgent. Nejde o garantovaný výsledek vaší kampaně ani o počty uzavřených zakázek.</p><div className={styles.grid}>
        <article className={styles.card}><h3>Whistlelink</h3><p className={styles.result}>37 kvalifikovaných příležitostí za 2 zkušební měsíce</p><p>Whistleblowing SaaS · Švédsko</p></article>
        <article className={styles.card}><h3>SavvyLockers</h3><p className={styles.result}>5+ poptávek za 1 měsíc</p><p>Chytré schránky · B2B</p></article>
      </div><p>Konkrétní reference a doporučení rádi předáme na vyžádání.</p></section>

      <section className={`${styles.section} ${styles.founder}`}><Image src="/petr-kubicek.jpg" alt="Petr Kubíček, zakladatel Sales Robots" width={160} height={160} /><div><p className={styles.eyebrow}>Kdo za tím stojí</p><h2>Petr Kubíček</h2><p>{cs.founder.body}</p></div></section>

      <section className={styles.section}><h2>Co potřebujete vědět před startem</h2>{faqs.map(({ q, a }) => <details className={styles.faq} key={q}><summary>{q}</summary><p>{a}</p></details>)}<p><Link href="/blog/gdpr-a-cold-email">Podrobněji: GDPR a cold e-mail →</Link></p></section>

      <section className={`${styles.section} ${styles.closing}`}><h2>Probereme, kterou část obchodu potřebujete převzít</h2><p>Přijďte s produktem, cílovkou a tím, co dnes v obchodu nestíháte. Navrhneme konkrétní rozsah spolupráce a cenu dle domluvy.</p><div className={styles.actions}><Link className={styles.primary} href="/cs/contact">Domluvit nezávazný hovor →</Link></div><p>Hledáte nejdřív vysvětlení modelu? Přečtěte si <Link href="/blog/co-je-externi-obchod">co je externí obchod</Link>.</p></section>
    </div>
  )
}
