import type { Metadata } from 'next'
import Link from 'next/link'

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const cs = locale === 'cs'
  return {
    title: cs ? 'Automatizace obchodu na klíč' : 'B2B Outbound for Czech Market Entry',
    description: cs
      ? 'Chcete automatizovat obchod, ale nemáte čas ani know-how? Postavíme a rozjedeme vám B2B oslovování, personalizaci, follow-up a CRM jako vlastní systém.'
      : 'How B2B outbound works for Czech and Slovak market entry: target list, personalised email and LinkedIn outreach, follow-ups and booked meetings — run for you, with no local entity or hire.',
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
      title: cs ? 'Automatizace obchodu na klíč | SalesAgent.cz' : 'B2B Outbound for Czech Market Entry | SalesAgent.cz',
      description: cs ? 'Praktický průvodce automatizací B2B oslovování a obchodní motion na klíč.' : 'How outsourced B2B outbound works for companies entering the Czech and Slovak market.',
    },
    twitter: {
      card: 'summary',
      title: cs ? 'Automatizace obchodu na klíč' : 'B2B Outbound for Czech Market Entry',
      description: cs ? 'Jak propojit cílení, personalizaci, follow-up a CRM do vlastního procesu.' : 'Targeting, personalised outreach, follow-ups and booked meetings for your Czech market entry.',
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
  ['What is outsourced B2B outbound for market entry?', 'It is an external team that runs prospecting and outreach in a new market on your behalf: it builds the target list, contacts decision-makers by email and LinkedIn in your name, handles follow-ups and books first meetings, so you do not need a local entity or hire.'],
  ['What can be automated in outbound?', 'Company discovery by ICP, public-data enrichment, website research, personalisation drafts, approved sequences and follow-ups can be automated. Automation should not replace relevance checks or conversations with interested prospects, which stay with people.'],
  ['Do we need a Czech company or local hire?', 'No. You can run the outreach through your existing EU company and invoice in EUR. A Czech s.r.o. or local employee is only needed later, if the market test justifies it.'],
  ['Who is this for?', 'B2B companies with a clear ideal customer that want to test the Czech or Slovak market before investing in an office or team. If you do not yet know who buys from you, validate the ICP manually first.'],
]

function getJsonLd(cs: boolean) {
  const questions = cs ? faq : faqEn
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        name: cs ? 'Vlastní outbound systém pro B2B' : 'B2B outbound for Czech market entry',
        url: `https://salesagent.cz/${cs ? 'cs' : 'en'}/vlastni-outbound`,
        inLanguage: cs ? 'cs' : 'en',
        description: cs ? 'Praktický průvodce automatizací B2B obchodu od cílení po CRM.' : 'How outsourced B2B outbound works for Czech and Slovak market entry, from target list to booked meetings.',
        about: { '@type': 'Thing', name: 'B2B outbound for market entry' },
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
            <p className="text-sm text-orange-400 uppercase tracking-widest mb-4">{cs ? 'Automatizace obchodu · na klíč' : 'Czech market entry · outbound'}</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">{cs ? 'Automatizace obchodu na klíč: my ji postavíme, vy ji vlastníte' : 'B2B outbound for Czech market entry: we run it, you take the meetings'}</h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">{cs ? 'Nemáte čas ani know-how řešit celý outbound sami? Postavíme a rozjedeme vám systém, který spojí cílení, vyhledání firem, analýzu webů, personalizované oslovení, follow-up a předání odpovědi do CRM.' : 'Entering the Czech or Slovak market without a local team? We run the outbound for you: targeting, company discovery, website research, personalised email and LinkedIn outreach, follow-ups and booked first meetings — in your name.'}</p>
          </header>

          <section className="grid md:grid-cols-2 gap-5 mb-16">
            {[
              [cs ? '1. Přesný ICP' : '1. A precise ICP', cs ? 'Popište obor, velikost, region, rozhodovatele a důvody, proč je firma relevantní.' : 'Define industry, company size, region (Czech Republic, Slovakia), decision-maker and relevance signals.'],
              [cs ? '2. Čerstvá data' : '2. Fresh local data', cs ? 'Hledejte firmy ve veřejných zdrojích a ověřujte jejich web, nabídku a aktuální kontext.' : 'Find companies in Czech public sources such as ARES and verify their website, offer and current context.'],
              [cs ? '3. Personalizace' : '3. Personalization', cs ? 'Každé oslovení musí reagovat na konkrétní firmu, ne jen doplnit jméno do šablony.' : 'Each message speaks to the specific company, in Czech, Slovak or English, not a template with a name inserted.'],
              [cs ? '4. Follow-up a CRM' : '4. Follow-ups and CRM', cs ? 'Sekvence respektuje odpověď i odhlášení a relevantní reakce předá obchodníkovi.' : 'The sequence respects replies and opt-outs; interested decision-makers are booked as meetings in your calendar.'],
            ].map(([title, text]) => <div key={title} className="bg-gray-900 border border-white/10 rounded-2xl p-6"><h2 className="text-lg font-semibold text-orange-300 mb-3">{title}</h2><p className="text-gray-300 leading-relaxed">{text}</p></div>)}
          </section>

          <article className="prose prose-invert prose-lg max-w-none">
            <h2>{cs ? 'Automatizace obchodu začíná před prvním hovorem' : 'Market entry outbound starts before the first call'}</h2>
            <p>{cs ? 'Největší část práce obchodníka často nespočívá v samotném hovoru, ale v opakovaném hledání firem, kontrole webů, psaní prvních zpráv a hlídání follow-upů. Vlastní systém tyto kroky zrychlí a sjednotí, zatímco obchodník zůstane u rozhodování, kvalifikace a uzavírání.' : 'Much of a salesperson’s work happens before the call: finding companies, checking websites, writing first messages and managing follow-ups. In a new market this is the slowest and most expensive part, so we run it for you while your team focuses on qualification and closing.'}</p>
            <h2>{cs ? 'Co má být automatické a co ne' : 'What is automated and what is not'}</h2>
            <p>{cs ? 'Automatizujte opakovatelný sběr a přípravu: vyhledání firem, obohacení dat, načtení webu, návrh personalizace, plánování sekvence a zápis do CRM. Neautomatizujte slepé rozesílání. Každá kampaň potřebuje pravidla pro relevanci, ochranu domény, opt-out a zastavení při odpovědi.' : 'We automate repeatable preparation: company discovery, enrichment, website research, personalisation drafts and sequence scheduling. We do not blast blindly. Every campaign has rules for relevance, domain protection, opt-outs and stopping on reply, and replies are handled by a person.'}</p>
            <h2>{cs ? 'Proč si to nechat postavit na klíč' : 'Why run it through an external team'}</h2>
            <p>{cs ? 'Nejtěžší není vybrat další nástroj. Je potřeba správně definovat ICP, zdroje dat, pravidla relevance, personalizaci, doručitelnost, follow-up, opt-out a předání do CRM. Pokud na to nemáte čas nebo know-how, SalesAgent vám celý obchodní motion nastaví, rozjede a předá do vašeho vlastnictví.' : 'The hard part is not choosing another tool. You need the right ICP, local data sources, relevance rules, personalisation, deliverability and follow-ups. With outsourced representation you get this in weeks, with no Czech entity and no local hire. Most companies start with a fixed-price 2–3 month trial.'}</p>
          </article>
          {!cs && (
            <p className="mt-8 text-gray-300">
              Read the full <Link href="/en/guides/czech-market-entry-for-b2b-companies" className="text-orange-400 underline">Czech market entry playbook</Link> or see how our <Link href="/en/sales-representation-czech-republic" className="text-orange-400 underline">Czech sales representation service</Link> works.
            </p>
          )}

          <section className="mt-16 border-t border-white/10 pt-10">
            <h2 className="text-2xl font-bold mb-6">{cs ? 'Časté otázky' : 'Frequently asked questions'}</h2>
            <div className="space-y-5">{questions.map(([question, answer]) => <details key={question} className="border-b border-white/10 pb-5"><summary className="cursor-pointer font-semibold text-gray-200">{question}</summary><p className="text-gray-400 leading-relaxed mt-3">{answer}</p></details>)}</div>
          </section>

          <div className="mt-16 p-8 border border-orange-500/30 rounded-2xl bg-orange-900/10 text-center">
            <h2 className="text-2xl font-bold mb-3">{cs ? 'Nemáte čas ani know-how?' : 'Planning to enter the Czech market?'}</h2>
            <p className="text-gray-300 mb-6">{cs ? 'Projdeme váš ICP a současný proces. Automatizaci obchodu vám postavíme, rozjedeme a předáme do vlastnictví.' : 'We will review your ICP and target segment and show how a fixed-price trial in the Czech Republic would look.'}</p>
            <Link href={`${base}/contact`} className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-4 rounded-xl transition-colors">{cs ? 'Nechat si postavit systém' : 'Book a free consultation'}</Link>
          </div>
        </div>
      </main>
    </>
  )
}
