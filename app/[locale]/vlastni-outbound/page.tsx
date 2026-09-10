import type { Metadata } from 'next'
import Link from 'next/link'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cs = locale === 'cs'
  return {
    title: cs ? 'Automatizace obchodu na klíč | SalesAgent.cz' : 'Done-for-you B2B sales automation | SalesAgent.cz',
    description: cs
      ? 'Chcete automatizovat obchod, ale nemáte čas ani know-how? Postavíme a rozjedeme vám B2B oslovování, personalizaci, follow-up a CRM jako vlastní systém.'
      : 'Want to automate sales but lack the time or know-how? We build and launch your B2B outreach, personalization, follow-ups and CRM as a system you own.',
    alternates: {
      canonical: `https://salesagent.cz/${locale}/vlastni-outbound`,
      languages: {
        cs: 'https://salesagent.cz/cs/vlastni-outbound',
        en: 'https://salesagent.cz/en/vlastni-outbound',
        'x-default': 'https://salesagent.cz/en/vlastni-outbound',
      },
    },
    openGraph: {
      type: 'article',
      url: `https://salesagent.cz/${locale}/vlastni-outbound`,
      siteName: 'SalesAgent.cz',
      title: cs ? 'Automatizace obchodu na klíč | SalesAgent.cz' : 'Done-for-you B2B sales automation | SalesAgent.cz',
      description: cs ? 'Praktický průvodce automatizací B2B oslovování a obchodní motion na klíč.' : 'A practical guide to done-for-you B2B outreach and sales motion automation.',
    },
    twitter: {
      card: 'summary',
      title: cs ? 'Automatizace obchodu na klíč' : 'Done-for-you B2B sales automation',
      description: cs ? 'Jak propojit cílení, personalizaci, follow-up a CRM do vlastního procesu.' : 'How to connect targeting, personalization, follow-ups and CRM into your own process.',
    },
  }
}

const faq = [
  ['Co je vlastní outbound systém?', 'Je to proces a infrastruktura, kterou firma používá pro vlastní vyhledávání a oslovování relevantních B2B firem. Spojuje cílení, data, personalizované zprávy, follow-up, odpovědi a CRM — bez závislosti na externí agentuře nebo pronajatém nástroji.'],
  ['Co lze v outboundu automatizovat?', 'Lze automatizovat hledání firem podle ICP, obohacení veřejných dat, načtení webu, návrh personalizace, odesílání schválených sekvencí, follow-up a zápis odpovědí do CRM. Automatizace nemá nahrazovat posouzení relevance ani jednání se zájemcem.'],
  ['Je automatizace obchodní proces nebo vývoj software?', 'Obojí může být součástí řešení, ale cílem je obchodní motion: dostat správné oslovení ke správné firmě a předat reakci obchodníkovi. Technické propojení CRM a nástrojů je prostředek, ne hlavní produkt.'],
  ['Pro koho vlastní outbound dává smysl?', 'Pro B2B firmy, které mají jasného ideálního zákazníka, chtějí pravidelně oslovovat nové firmy a potřebují vlastnit data i proces. Pokud ještě nevíte, komu prodáváte, je lepší nejdřív ověřit ICP ručně.'],
]

const faqEn = [
  ['What is an owned outbound system?', 'It is the process and infrastructure a company uses to find and reach relevant B2B companies itself. It connects targeting, data, personalized messages, follow-ups, replies and CRM without depending on an external agency or rented tool.'],
  ['What can be automated in outbound?', 'You can automate company discovery by ICP, public-data enrichment, website research, personalization drafts, approved sequences, follow-ups and CRM updates. Automation should not replace relevance checks or conversations with interested prospects.'],
  ['Is sales automation a process or software development?', 'Both can be part of the solution, but the goal is the sales motion: getting the right message to the right company and handing the reply to sales. CRM and tool integrations are the means, not the product itself.'],
  ['Who benefits from owned outbound?', 'B2B companies with a clear ideal customer, a need to reach new companies consistently and a wish to own their data and process. If you do not yet know who buys from you, validate the ICP manually first.'],
]

function getJsonLd(cs: boolean) {
  const questions = cs ? faq : faqEn
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: cs ? 'Vlastní outbound systém pro B2B' : 'Your own B2B outbound system',
        url: `https://salesagent.cz/${cs ? 'cs' : 'en'}/vlastni-outbound`,
        inLanguage: cs ? 'cs' : 'en',
        description: cs ? 'Praktický průvodce automatizací B2B obchodu od cílení po CRM.' : 'A practical guide to B2B sales automation from targeting to CRM.',
        about: { '@type': 'Thing', name: 'B2B outbound automation' },
        author: { '@type': 'Person', name: 'Petr Kubíček', url: 'https://salesagent.cz/cs/about' },
      },
      {
        '@type': 'FAQPage',
        mainEntity: questions.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
      },
    ],
  }
}

export default async function VlastniOutboundPage({ params }: Props) {
  const { locale } = await params
  const cs = locale === 'cs'
  const base = `/${locale}`
  const questions = cs ? faq : faqEn
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(getJsonLd(cs)) }} />
      <main className="min-h-screen bg-black text-white">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Link href={`${base}`} className="text-sm text-gray-400 hover:text-white transition-colors">← {cs ? 'Zpět na SalesAgent' : 'Back to SalesAgent'}</Link>
          <header className="mt-12 mb-14">
            <p className="text-sm text-orange-400 uppercase tracking-widest mb-4">{cs ? 'Automatizace obchodu · na klíč' : 'Sales automation · done for you'}</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{cs ? 'Automatizace obchodu na klíč: my ji postavíme, vy ji vlastníte' : 'Done-for-you sales automation: we build it, you own it'}</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">{cs ? 'Nemáte čas ani know-how řešit celý outbound sami? Postavíme a rozjedeme vám systém, který spojí cílení, vyhledání firem, analýzu webů, personalizované oslovení, follow-up a předání odpovědi do CRM.' : 'Do not have the time or know-how to run outbound yourself? We build and launch a system connecting targeting, company discovery, website research, personalized outreach, follow-ups and CRM handoff.'}</p>
          </header>

          <section className="grid md:grid-cols-2 gap-5 mb-16">
            {[
              [cs ? '1. Přesný ICP' : '1. A precise ICP', cs ? 'Popište obor, velikost, region, rozhodovatele a důvody, proč je firma relevantní.' : 'Define industry, size, region, decision-maker and relevance signals.'],
              [cs ? '2. Čerstvá data' : '2. Fresh data', cs ? 'Hledejte firmy ve veřejných zdrojích a ověřujte jejich web, nabídku a aktuální kontext.' : 'Find companies in public sources and verify their website, offer and current context.'],
              [cs ? '3. Personalizace' : '3. Personalization', cs ? 'Každé oslovení musí reagovat na konkrétní firmu, ne jen doplnit jméno do šablony.' : 'Each message should respond to the specific company, not merely insert a name into a template.'],
              [cs ? '4. Follow-up a CRM' : '4. Follow-ups and CRM', cs ? 'Sekvence respektuje odpověď i odhlášení a relevantní reakce předá obchodníkovi.' : 'The sequence respects replies and opt-outs and hands relevant responses to sales.'],
            ].map(([title, text]) => <div key={title} className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-lg font-semibold text-orange-300 mb-3">{title}</h2><p className="text-gray-300 leading-relaxed">{text}</p></div>)}
          </section>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>{cs ? 'Automatizace obchodu začíná před prvním hovorem' : 'Sales automation starts before the first call'}</h2>
            <p>{cs ? 'Největší část práce obchodníka často nespočívá v samotném hovoru, ale v opakovaném hledání firem, kontrole webů, psaní prvních zpráv a hlídání follow-upů. Vlastní systém tyto kroky zrychlí a sjednotí, zatímco obchodník zůstane u rozhodování, kvalifikace a uzavírání.' : 'Much of a salesperson’s work happens before the call: finding companies, checking websites, writing first messages and managing follow-ups. An owned system makes these steps faster and consistent while the salesperson focuses on judgment, qualification and closing.'}</p>
            <h2>{cs ? 'Co má být automatické a co ne' : 'What should and should not be automated'}</h2>
            <p>{cs ? 'Automatizujte opakovatelný sběr a přípravu: vyhledání firem, obohacení dat, načtení webu, návrh personalizace, plánování sekvence a zápis do CRM. Neautomatizujte slepé rozesílání. Každá kampaň potřebuje pravidla pro relevanci, ochranu domény, opt-out a zastavení při odpovědi.' : 'Automate repeatable preparation: company discovery, enrichment, website research, personalization drafts, sequence scheduling and CRM updates. Do not automate blind blasting. Every campaign needs rules for relevance, domain protection, opt-outs and stopping on reply.'}</p>
            <h2>{cs ? 'Proč si to nechat postavit na klíč' : 'Why have it built for you'}</h2>
            <p>{cs ? 'Nejtěžší není vybrat další nástroj. Je potřeba správně definovat ICP, zdroje dat, pravidla relevance, personalizaci, doručitelnost, follow-up, opt-out a předání do CRM. Pokud na to nemáte čas nebo know-how, SalesAgent vám celý obchodní motion nastaví, rozjede a předá do vašeho vlastnictví.' : 'The hard part is not choosing another tool. You need the right ICP, data sources, relevance rules, personalization, deliverability, follow-ups, opt-outs and CRM handoff. If you lack the time or know-how, SalesAgent sets up, launches and hands over the complete sales motion.'}</p>
          </article>

          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold mb-6">{cs ? 'Časté otázky' : 'Frequently asked questions'}</h2>
            <div className="space-y-5">{questions.map(([question, answer]) => <details key={question} className="border-b border-white/10 pb-5"><summary className="cursor-pointer font-semibold text-gray-200">{question}</summary><p className="text-gray-400 leading-relaxed mt-3">{answer}</p></details>)}</div>
          </section>

          <div className="mt-16 p-8 border border-orange-500/30 rounded-2xl bg-orange-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">{cs ? 'Nemáte čas ani know-how?' : 'Lack the time or know-how?'}</h2>
            <p className="text-gray-300 mb-6">{cs ? 'Projdeme váš ICP a současný proces. Automatizaci obchodu vám postavíme, rozjedeme a předáme do vlastnictví.' : 'We will review your ICP and current process. We will build, launch and hand over your sales automation for you to own.'}</p>
            <Link href={`${base}/contact`} className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">{cs ? 'Nechat si postavit systém' : 'Have the system built for you'}</Link>
          </div>
        </div>
      </main>
    </>
  )
}
