import type { Metadata } from 'next'
import Link from 'next/link'

type Loc = 'cs' | 'en'

type Block =
  | { t: 'p'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'tpl'; title: string; text: string }
  | { t: 'box'; title: string; text: string }
  | { t: 'link'; before: string; anchor: string; href: string; after: string }
  | { t: 'img'; src: string; alt: string }

type Section = { h2: string; blocks: Block[] }

const ORIGIN = 'https://salesagent.cz'
const IMAGE = '/blog/generovani-b2b-leadu.jpg'
const DATE_ISO = '2026-10-09'

export const ARTICLE_PATH: Record<Loc, string> = {
  cs: '/blog/jak-obohatit-leady',
  en: '/blog/how-to-enrich-b2b-leads-czech-companies',
}

const articles: Record<
  Loc,
  {
    meta: { title: string; description: string; keywords: string[]; ogTitle: string; ogDescription: string }
    crumb: string
    eyebrow: string
    h1: string
    byline: string
    answer: string
    boxTitle: string
    boxText: string
    boxButton: string
    productHref: string
    sections: Section[]
    faqTitle: string
    faqs: { q: string; a: string }[]
    related: { href: string; label: string }[]
    relatedTitle: string
    headline: string
    schemaDesc: string
    inLanguage: string
    blogHref: string
    blogLabel: string
  }
> = {
  cs: {
    meta: {
      title: 'Jak obohatit leady: ARES, web, Google Mapy, LinkedIn (2026)',
      description:
        'Jak z názvu firmy získat kvalifikovaný lead: ARES, web firmy, Google Mapy a LinkedIn, ověření kontaktů, skórování a navazující outreach. Praktický postup.',
      keywords: [
        'jak obohatit leady',
        'obohacení leadů',
        'lead enrichment',
        'generování B2B leadů',
        'ARES obohacení dat',
        'kontrola firmy Google Mapy',
        'jak najít rozhodovatele LinkedIn',
      ],
      ogTitle: 'Jak obohatit leady: ARES, web, Google Mapy a LinkedIn',
      ogDescription: 'Z názvu firmy ke kvalifikovanému leadu a oslovení: ARES, web, Google Mapy, LinkedIn, skórování a outreach.',
    },
    crumb: 'Obohacení leadů',
    eyebrow: 'B2B obchod · Generování leadů',
    h1: 'Jak obohatit leady: z názvu firmy ke kontaktu na rozhodovatele',
    byline: '9. října 2026 · Petr Kubíček · 11 minut čtení · platí pro Česko i Slovensko',
    answer:
      'Obohacení leadu znamená doplnit k firmě údaje, které potřebujete, abyste věděli, zda ji oslovit a jak: ověřit ji v ARES, podívat se na její veřejný web a profil na Google Mapách a najít rozhodovatele na LinkedInu. Teprve s těmito daty lze lead ohodnotit a napsat zprávu, která se netváří jako hromadná. Údaje používejte jen z veřejných zdrojů a v souladu s jejich podmínkami.',
    boxTitle: 'Nechcete leady obohacovat sami?',
    boxText: 'Vyhledávání, obohacení a oslovení můžeme dělat za vás, pro české i slovenské firmy.',
    boxButton: 'Generování B2B leadů jako služba',
    productHref: '/cs/b2b-lead-generation',
    sections: [
      {
        h2: 'Co je obohacení leadů a proč nestačí seznam firem',
        blocks: [
          { t: 'p', text: 'Seznam názvů firem a IČO ještě není lead. Obchodník z něj nepozná, jestli firma ještě existuje, čím se zabývá, kdo v ní rozhoduje ani proč by měla mít o vaši nabídku zájem. Obohacení je krok mezi „našli jsme firmu“ a „napíšeme jí“. Doplníte data, podle kterých lead vyřadíte, ohodnotíte a oslovíte konkrétně.' },
          { t: 'p', text: 'Obohacení také šetří přesně to, co nejvíc bolí: čas obchodníka. Ten, kdo píše zprávy bez kontextu, dostává málo odpovědí. Ten, kdo ví, co firma dělá a koho oslovit, píše kratší a relevantnější zprávu.' },
        ],
      },
      {
        h2: 'Které zdroje použít a co z nich získáte',
        blocks: [
          {
            t: 'table',
            head: ['Zdroj', 'Co z něj získáte', 'K čemu to je'],
            rows: [
              ['ARES (u slovenských firem ORSR / registr)', 'IČO, přesný název, sídlo, právní forma, obor (CZ-NACE), datum vzniku, statutární orgán', 'Ověření, že firma existuje a je aktivní, filtrování podle oboru a velikosti, správné oslovení jednatele.'],
              ['Web firmy', 'Čím se firma zabývá, komu prodává, reference, jazyk, e-maily a telefony, aktuální novinky', 'Relevance pro vaši nabídku a personalizace první věty zprávy.'],
              ['Google Mapy', 'Provozovny, telefon, web, otevírací doba, hodnocení, zda je firma „živá“', 'Ověření provozu, doplnění kontaktu, hledání lokálních firem bez webu.'],
              ['LinkedIn', 'Rozhodovatel, jeho role, firma, aktivita, nová kontaktní osoba', 'Oslovení správné osoby a navázání kontaktu mimo e-mail.'],
              ['Ověření e-mailu', 'Platná nebo neplatná schránka', 'Ochrana doručitelnosti, méně vrácených zpráv.'],
            ],
          },
          { t: 'p', text: 'Žádný zdroj sám nestačí. ARES neřekne, čím se firma opravdu zabývá, web nezmíní, kdo rozhoduje, a LinkedIn nemá každá malá firma. Síla je v kombinaci a v pořadí, ve kterém se zdroje používají.' },
        ],
      },
      {
        h2: 'Postup krok za krokem',
        blocks: [
          {
            t: 'ol',
            items: [
              'Definujte cílového zákazníka (ICP): obor, velikost, region, role rozhodovatele a signál, že firma váš produkt potřebuje. Bez ICP budete obohacovat každého.',
              'Vytvořte hrubý seznam firem: z ARES podle CZ-NACE a regionu, z map nebo z oborových zdrojů.',
              'Ověřte firmu v ARES: aktivní subjekt, správné IČO a sídlo, statutární orgán. Neaktivní a zaniklé firmy vyřaďte hned.',
              'Načtěte web firmy: co nabízí, komu, v jakém jazyce, jaké kontakty uvádí. Zapište si jednu větu, která vysvětluje, proč by mohla mít zájem o vaše řešení.',
              'Zkontrolujte firmu na Google Mapách: provozovna existuje, telefon a web souhlasí, firma má známky aktivity (otevírací doba, nedávné recenze).',
              'Najděte rozhodovatele na LinkedInu: jednatel, majitel nebo vedoucí, který rozhoduje o vaší oblasti. U menších firem to bývá majitel.',
              'Doplňte a ověřte e-mail a telefon. Preferujte věcnou adresu rozhodovatele před obecným info@.',
              'Ohodnoťte lead podle shody s ICP a signálů (viz skórování níže) a seřaďte je. Oslovujte od nejlepších.',
              'Napište zprávu s odkazem na něco konkrétního z webu a vyberte kanály: e-mail, LinkedIn, případně telefon.',
            ],
          },
          { t: 'link', before: 'Jak lead ohodnotit se dozvíte v návodu ', anchor: 'jak skórovat leady', href: '/blog/jak-skorovat-leady', after: '. ' },
          { t: 'link', before: 'Odkud brát firmy na začátku, najdete v článku ', anchor: 'jak najít nové leady', href: '/blog/jak-najit-nove-leady', after: ' a ' },
          { t: 'link', before: '', anchor: 'kde vzít B2B kontakty na české firmy', href: '/blog/b2b-kontakty-ceske-firmy', after: '.' },
        ],
      },
      {
        h2: 'Od obohacených dat k oslovení',
        blocks: [
          { t: 'box', title: 'Nejdřív souhlas', text: 'E-mailová šablona níže se hodí pro příjemce, kteří souhlas dali, nebo pro stávající zákazníky. Nesmíte ji zasílat na adresy z veřejných zdrojů bez předchozího souhlasu. Platí to i pro firemní a obecné adresy (§ 7 zák. č. 480/2004 Sb.). Nejde o právní poradenství.' },
          { t: 'p', text: 'Obohacení má smysl jen tehdy, když z něj vzniká lepší zpráva. Využijte to, co jste zjistili: jednu konkrétní informaci z webu, roli osoby a důvod, proč se ozýváte právě teď. Zbytek zprávy držte krátký.' },
          {
            t: 'tpl',
            title: 'E-mail s využitím obohacených dat',
            text: 'Předmět: [Firma] a [konkrétní téma z webu]\n\nDobrý den, [oslovení],\n\nna webu [Firma] jsem si všiml, že [konkrétní informace: nabízíte X / otevřeli jste novou provozovnu / zaměřujete se na Y]. Pomáháme firmám jako vaše s [problém, který řešíte], a proto se ozývám.\n\n[Jedna věta, co konkrétně nabízíte a s jakým výsledkem — bez vymyšlených čísel.]\n\nMá smysl to probrat krátkým hovorem? Pokud ne, stačí napsat a nebudu vás dál obtěžovat.\n\n[Podpis]',
          },
          {
            t: 'tpl',
            title: 'Pozvánka na LinkedInu',
            text: 'Dobrý den, [oslovení], všiml jsem si, že ve [Firma] řešíte [téma]. Pomáháme firmám v oboru [obor] s [problém]. Rád bych se spojil a případně sdílel pár zkušeností.',
          },
          { t: 'link', before: 'Další šablony: ', anchor: 'český cold e-mail', href: '/blog/cold-email-vzor-cesky', after: ' a ' },
          { t: 'link', before: '', anchor: 'follow-up e-mail', href: '/blog/follow-up-email-vzor', after: '.' },
          { t: 'p', text: 'Kadence oslovení: první e-mail, o několik dní později pozvánka na LinkedInu nebo telefon, po dalším týdnu follow-up a nakonec uzavírací zpráva. Po každé odpovědi, kladné i záporné, kadenci okamžitě zastavte. Slovenské firmy oslovujte slovensky nebo česky podle toho, co je u nich obvyklé.' },
        ],
      },
      {
        h2: 'Nejčastější chyby při obohacování',
        blocks: [
          {
            t: 'ul',
            items: [
              'Obohacují se všichni. Bez skórování stojí čas i peníze na firmy, které nikdy nenakoupí. Nejdřív filtrujte podle ICP.',
              'Zastaralá data. Firmy zanikají, lidé odcházejí. Data starší než několik měsíců před kampaní znovu ověřte.',
              'Personalizace jen jménem. „Dobrý den, Jane“ není personalizace. Jedna konkrétní informace o firmě je.',
              'Obecné e-maily. Zpráva na info@ se často nedostane k rozhodovateli. Hledejte konkrétní osobu.',
              'Koupené databáze. Bývají zastaralé a pro vaše oslovení nejsou záruka relevance. Raději si data poskládejte z veřejných zdrojů.',
              'Oslovení bez souhlasu. E-mailové obchodní sdělení lze v ČR zaslat jen s předchozím souhlasem, i na firemní adresy. Odhlášení souhlas nenahrazuje.',
            ],
          },
        ],
      },
      {
        h2: 'Právo: e-mail a souhlas',
        blocks: [
          { t: 'link', before: 'Obohacená data samy o sobě neznamenají, že kontakt smíte oslovit. Podle § 7 zákona č. 480/2004 Sb. lze obchodní sdělení e-mailem v ČR zasílat jen s předchozím souhlasem příjemce, a to i na firemní a obecné adresy; výjimku mají stávající zákazníci. Veřejně dostupný e-mail souhlas neznamená a oprávněný zájem podle GDPR tuto povinnost nenahrazuje. Telefon a LinkedIn mají vlastní pravidla. Podrobnosti najdete v článku ', anchor: 'GDPR a cold e-mail', href: '/blog/gdpr-a-cold-email', after: '. Nejde o právní poradenství — postup si ověřte u právníka.' },
        ],
      },
      {
        h2: 'Sami, nebo externě?',
        blocks: [
          { t: 'p', text: 'Sami to zvládnete, pokud oslovujete desítky firem, máte čas na ruční kontrolu a jasné ICP. Doporučujeme začít malou pilotní dávkou a změřit, kolik leadů je relevantních.' },
          { t: 'p', text: 'Externě dává smysl, když potřebujete stovky obohacených leadů, nemáte nástroje ani čas, nebo chcete oslovení rovnou nechat na někom jiném a obchodníkovi předat jen zájemce.' },
          { t: 'link', before: 'Pokud to chcete delegovat, podívejte se na ', anchor: 'generování B2B leadů jako službu', href: '/cs/b2b-lead-generation', after: ' — pracujeme pro české i slovenské firmy.' },
        ],
      },
    ],
    faqTitle: 'Časté otázky',
    faqs: [
      { q: 'Co je obohacení leadů?', a: 'Je to doplnění údajů k firmě a kontaktní osobě (rejstříkové údaje, popis činnosti z webu, ověření provozu, rozhodovatel, ověřený e-mail), aby šlo lead ohodnotit a oslovit konkrétně.' },
      { q: 'Odkud získat data o českých firmách zdarma?', a: 'Základ nabízí veřejný rejstřík ARES (IČO, sídlo, obor CZ-NACE, statutární orgán). K tomu se přidá web firmy, Google Mapy a LinkedIn. U slovenských firem se používají slovenské rejstříky, například ORSR.' },
      { q: 'K čemu je kontrola firmy na Google Mapách?', a: 'Potvrdí, že firma má reálnou provozovnu a je aktivní, a často doplní telefon, web a otevírací dobu. Pomáhá také najít lokální firmy, které nemají dobrý web.' },
      { q: 'Jak ověřit e-mail před oslovením?', a: 'Pomocí ověřovací služby nebo nástroje, který zkontroluje, zda schránka existuje. Neplatné adresy vyřaďte. Chrání to doručitelnost vašich dalších e-mailů.' },
      { q: 'Jde obohacení leadů automatizovat?', a: 'Část ano: napojení na ARES, evidence v CRM, správa LinkedIn kampaní a návrh zpráv. Prohlížení webu a map a posouzení relevance leadu by ale měl dělat člověk. Finální zprávu před odesláním potvrďte.' },
      { q: 'Funguje to i pro slovenské firmy?', a: 'Ano, princip je stejný. Místo ARES se používají slovenské rejstříky a oslovení probíhá slovensky nebo česky podle zvyklostí firmy.' },
    ],
    related: [
      { href: '/cs/b2b-lead-generation', label: 'Generování B2B leadů jako služba' },
      { href: '/blog/jak-rozjet-a-zautomatizovat-b2b-obchod', label: 'Jak rozjet a zautomatizovat B2B obchod' },
    ],
    relatedTitle: 'Související',
    headline: 'Jak obohatit leady: z názvu firmy ke kontaktu na rozhodovatele',
    schemaDesc: 'Praktický postup obohacení B2B leadů: ARES, web firmy, Google Mapy, LinkedIn, ověření kontaktů, skórování a navazující oslovení.',
    inLanguage: 'cs',
    blogHref: '/blog',
    blogLabel: 'Blog',
  },
  en: {
    meta: {
      title: 'How to Enrich B2B Leads for Czech Companies (2026)',
      description:
        'Turn a company name into a qualified lead in Czechia and Slovakia: ARES, websites, Google Maps and LinkedIn, verification, scoring and outreach.',
      keywords: [
        'how to enrich b2b leads',
        'lead enrichment czech republic',
        'czech company data ARES',
        'b2b lead generation czech republic',
        'find decision makers czech companies',
        'google maps company check',
      ],
      ogTitle: 'How to Enrich B2B Leads: ARES, Websites, Google Maps and LinkedIn',
      ogDescription: 'From a company name to a qualified lead and outreach for Czech and Slovak companies.',
    },
    crumb: 'Lead enrichment',
    eyebrow: 'B2B sales · Lead generation',
    h1: 'How to enrich B2B leads: from a company name to a decision-maker',
    byline: '9 October 2026 · Petr Kubíček · 11 min read · for Czech and Slovak companies',
    answer:
      'Lead enrichment means adding the data you need to decide whether to contact a company and how: verify it in ARES, look at its public website and Google Maps listing, and find the decision-maker on LinkedIn. Only with this data can you score the lead and write a message that does not read like a mass mailing. Use data from public sources only and in line with their terms.',
    boxTitle: 'Rather not enrich leads yourself?',
    boxText: 'We can handle prospecting, enrichment and outreach for you, for companies in the Czech Republic and Slovakia.',
    boxButton: 'B2B lead generation service',
    productHref: '/en/b2b-lead-generation',
    sections: [
      {
        h2: 'What lead enrichment is and why a company list is not enough',
        blocks: [
          { t: 'p', text: 'A list of company names and registration numbers is not a lead yet. A salesperson cannot tell from it whether the company still exists, what it does, who decides or why it would care about your offer. Enrichment is the step between “we found a company” and “we write to it”. You add the data that lets you filter, score and approach it specifically.' },
          { t: 'p', text: 'Enrichment also saves what hurts most: the salesperson’s time. Messages written without context get few replies. Someone who knows what the company does and whom to contact writes a shorter and more relevant message.' },
        ],
      },
      {
        h2: 'Which sources to use and what you get from each',
        blocks: [
          {
            t: 'table',
            head: ['Source', 'What you get', 'What it is for'],
            rows: [
              ['ARES (ORSR for Slovak companies)', 'Company number, exact name, registered address, legal form, industry (CZ-NACE), founding date, statutory body', 'Confirm the company exists and is active, filter by industry and size, address the right managing director.'],
              ['Company website', 'What the company does, who it sells to, references, language, emails and phone numbers, recent news', 'Relevance to your offer and a personalised first line.'],
              ['Google Maps', 'Locations, phone, website, opening hours, ratings, whether the business is “alive”', 'Verify operation, fill in contact data, find local companies without a good website.'],
              ['LinkedIn', 'The decision-maker, their role, the company, activity, a new contact person', 'Reach the right person and connect outside email.'],
              ['Email verification', 'A valid or invalid mailbox', 'Protects deliverability, fewer bounces.'],
            ],
          },
          { t: 'p', text: 'No single source is enough. ARES does not tell you what the company really does, a website does not say who decides, and not every small firm is on LinkedIn. The strength is in combining them and in the order you use them.' },
        ],
      },
      {
        h2: 'The process step by step',
        blocks: [
          {
            t: 'ol',
            items: [
              'Define your ideal customer profile (ICP): industry, size, region, decision-maker role and a signal that the company needs your product. Without an ICP you will enrich everyone.',
              'Build a rough list of companies: from ARES by CZ-NACE and region, from maps or from industry sources.',
              'Verify the company in ARES: active entity, correct number and address, statutory body. Drop inactive and dissolved companies immediately.',
              'Read the website: what it offers, to whom, in which language, which contacts it lists. Write one sentence on why the company might care about your solution.',
              'Check the company on Google Maps: the location exists, phone and website match, there are signs of activity (opening hours, recent reviews).',
              'Find the decision-maker on LinkedIn: managing director, owner or a manager responsible for your area. In small companies it is usually the owner.',
              'Add and verify email and phone. Prefer a named address of the decision-maker over a generic info@.',
              'Score the lead on ICP fit and signals, then sort. Contact the best ones first.',
              'Write a message that refers to something specific from the website and choose channels: email, LinkedIn and optionally phone.',
            ],
          },
          { t: 'link', before: 'To learn how to score a lead see ', anchor: 'our Czech guide to lead scoring', href: '/blog/jak-skorovat-leady', after: '. ' },
          { t: 'link', before: 'For the Czech business register see ', anchor: 'how to look up any Czech company in ARES', href: '/en/resources/czech-business-companies-register', after: '.' },
        ],
      },
      {
        h2: 'From enriched data to outreach',
        blocks: [
          { t: 'box', title: 'Consent first', text: 'The email template below is for recipients who have consented, or for existing customers. Do not send it to addresses taken from public sources without prior consent. This applies to company and generic addresses too (§ 7 of Act No. 480/2004 Coll.). This is not legal advice.' },
          { t: 'p', text: 'Enrichment only pays off if it produces a better message. Use what you found: one specific fact from the website, the person’s role and a reason you are writing now. Keep the rest short.' },
          {
            t: 'tpl',
            title: 'Email using enriched data',
            text: 'Subject: [Company] and [specific topic from the website]\n\nHello [name],\n\nI noticed on the [Company] website that [specific fact: you offer X / you opened a new location / you focus on Y]. We help companies like yours with [problem you solve], which is why I am writing.\n\n[One sentence on what exactly you offer and with what result — no invented numbers.]\n\nWould a short call make sense? If not, just let me know and I will not bother you again.\n\n[Signature]',
          },
          {
            t: 'tpl',
            title: 'LinkedIn connection note',
            text: 'Hello [name], I noticed that at [Company] you are working on [topic]. We help companies in [industry] with [problem]. I would be glad to connect and maybe share a few experiences.',
          },
          { t: 'p', text: 'Cadence: first email, a LinkedIn invitation or a call a few days later, a follow-up a week after that and finally a closing message. Stop the sequence after any reply, positive or negative. For Slovak companies write in Slovak or Czech, whichever is usual for them.' },
        ],
      },
      {
        h2: 'The most common enrichment mistakes',
        blocks: [
          {
            t: 'ul',
            items: [
              'Enriching everyone. Without scoring you spend time and money on companies that will never buy. Filter by ICP first.',
              'Stale data. Companies close and people leave. Re-check data older than a few months before a campaign.',
              'Personalisation by name only. “Hello John” is not personalisation. One specific fact about the company is.',
              'Generic emails. A message to info@ often never reaches the decision-maker. Find a named person.',
              'Bought databases. They tend to be outdated and are no guarantee of relevance. Assemble data from public sources instead.',
              'Contacting without consent. Commercial email in the Czech Republic needs the recipient\'s prior consent, including company addresses. An opt-out does not replace consent.',
            ],
          },
        ],
      },
      {
        h2: 'Legal: email and consent',
        blocks: [
          { t: 'link', before: 'Enriched data does not mean you may contact the person. Under § 7 of Act No. 480/2004 Coll., commercial email in the Czech Republic requires the recipient\'s prior consent, including company and generic addresses; existing customers are an exception. A publicly available email is not consent, and GDPR legitimate interest does not replace this requirement. Phone and LinkedIn have their own rules. See our Czech article on ', anchor: 'GDPR and cold email', href: '/blog/gdpr-a-cold-email', after: '. This is not legal advice; check the set-up with a lawyer.' },
        ],
      },
      {
        h2: 'Do it yourself or externally?',
        blocks: [
          { t: 'p', text: 'You can do it yourself if you contact dozens of companies, have time for manual checks and a clear ICP. We recommend starting with a small pilot batch and measuring how many leads are relevant.' },
          { t: 'p', text: 'An external team makes sense when you need hundreds of enriched leads, lack tools or time, or want outreach handled by someone else and only interested contacts passed to your salesperson.' },
          { t: 'link', before: 'If you want to delegate it, see our ', anchor: 'B2B lead generation service', href: '/en/b2b-lead-generation', after: ' for companies in the Czech Republic and Slovakia, or read about ' },
          { t: 'link', before: '', anchor: 'Czech market entry', href: '/en/guides/czech-market-entry-for-b2b-companies', after: '.' },
        ],
      },
    ],
    faqTitle: 'FAQ',
    faqs: [
      { q: 'What is lead enrichment?', a: 'It is adding data to a company and contact person (registry data, a description of activity from the website, verified operation, the decision-maker and a verified email) so the lead can be scored and approached specifically.' },
      { q: 'Where can I get Czech company data for free?', a: 'The public ARES register is the foundation (company number, address, CZ-NACE industry, statutory body). Add the company website, Google Maps and LinkedIn. For Slovak companies use Slovak registers such as ORSR.' },
      { q: 'What is checking a company on Google Maps good for?', a: 'It confirms the company has a real location and is active, and often adds phone, website and opening hours. It also helps find local companies without a good website.' },
      { q: 'How do I verify an email before outreach?', a: 'Use a verification service or a tool that checks whether the mailbox exists. Remove invalid addresses; it protects the deliverability of your later emails.' },
      { q: 'Can lead enrichment be automated?', a: 'Partly: connecting to ARES, CRM records, LinkedIn campaign management and message drafts. Browsing websites and maps and judging lead relevance should be done by a person. Confirm the final message before sending.' },
      { q: 'Does it work for Slovak companies too?', a: 'Yes, the principle is the same. Slovak registers replace ARES, and outreach is in Slovak or Czech depending on what the company uses.' },
    ],
    related: [
      { href: '/en/b2b-lead-generation', label: 'B2B lead generation service' },
      { href: '/en/guides/czech-market-entry-for-b2b-companies', label: 'Czech market entry playbook' },
    ],
    relatedTitle: 'Related',
    headline: 'How to enrich B2B leads: from a company name to a decision-maker',
    schemaDesc: 'A practical process for enriching B2B leads in the Czech Republic and Slovakia: ARES, company websites, Google Maps, LinkedIn, verification, scoring and outreach.',
    inLanguage: 'en',
    blogHref: '/en/blog',
    blogLabel: 'Blog',
  },
}

export function leadEnrichmentMetadata(loc: Loc): Metadata {
  const c = articles[loc]
  const url = `${ORIGIN}${ARTICLE_PATH[loc]}`
  return {
    title: c.meta.title,
    description: c.meta.description,
    keywords: c.meta.keywords,
    alternates: {
      canonical: url,
      languages: {
        cs: `${ORIGIN}${ARTICLE_PATH.cs}`,
        en: `${ORIGIN}${ARTICLE_PATH.en}`,
        'x-default': `${ORIGIN}${ARTICLE_PATH.en}`,
      },
    },
    openGraph: {
      type: 'article',
      locale: loc === 'cs' ? 'cs_CZ' : 'en_US',
      url,
      siteName: 'SalesAgent.cz',
      title: c.meta.ogTitle,
      description: c.meta.ogDescription,
      publishedTime: DATE_ISO,
      modifiedTime: DATE_ISO,
      images: [{ url: `${ORIGIN}${IMAGE}`, width: 640, height: 400, alt: c.h1 }],
    },
    robots: { index: true, follow: true },
  }
}

const linkStyle = { color: 'var(--accent)', textDecoration: 'underline' } as const

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(23px, 3vw, 30px)', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.25, marginTop: '40px', marginBottom: '16px' }}>
      {children}
    </h2>
  )
}

function renderBlock(b: Block, i: number) {
  switch (b.t) {
    case 'p':
      return <p key={i} style={{ color: 'var(--text)', marginBottom: '16px' }}>{b.text}</p>
    case 'ul':
      return (
        <ul key={i} style={{ paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
          {b.items.map((it) => <li key={it}>{it}</li>)}
        </ul>
      )
    case 'ol':
      return (
        <ol key={i} style={{ paddingLeft: '22px', display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
          {b.items.map((it) => <li key={it}>{it}</li>)}
        </ol>
      )
    case 'table':
      return (
        <div key={i} style={{ overflowX: 'auto', marginBottom: '20px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px', minWidth: '520px' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '1px solid var(--border)' }}>
                {b.head.map((h) => <th key={h} style={{ padding: '10px 12px' }}>{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r) => (
                <tr key={r[0]} style={{ borderBottom: '1px solid var(--border)', verticalAlign: 'top' }}>
                  {r.map((cell, ci) => (
                    <td key={ci} style={{ padding: '12px', color: ci === 0 ? 'var(--text)' : 'var(--text-muted)', fontWeight: ci === 0 ? 600 : 400 }}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'tpl':
      return (
        <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '12px', padding: '20px 22px', marginBottom: '18px' }}>
          <p style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '10px' }}>{b.title}</p>
          <p style={{ whiteSpace: 'pre-line', fontSize: '15px', lineHeight: 1.7, color: 'var(--text)', margin: 0 }}>{b.text}</p>
        </div>
      )
    case 'box':
      return (
        <div key={i} style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '12px', padding: '20px 22px', margin: '8px 0 18px' }}>
          <p style={{ fontWeight: 700, marginBottom: '6px' }}>{b.title}</p>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>{b.text}</p>
        </div>
      )
    case 'img':
      return <img key={i} src={b.src} alt={b.alt} loading="lazy" style={{ width: '100%', borderRadius: '14px', margin: '8px 0 24px', display: 'block' }} />
    case 'link':
      return (
        <span key={i}>
          {b.before}
          <Link href={b.href} style={linkStyle}>{b.anchor}</Link>
          {b.after}
        </span>
      )
  }
}

function renderBlocks(blocks: Block[]) {
  const out: React.ReactNode[] = []
  let inline: React.ReactNode[] = []
  const flush = (k: number) => {
    if (inline.length) {
      out.push(<p key={`in-${k}`} style={{ color: 'var(--text)', marginBottom: '16px' }}>{inline}</p>)
      inline = []
    }
  }
  blocks.forEach((b, i) => {
    if (b.t === 'link') {
      inline.push(renderBlock(b, i))
    } else if (b.t === 'p' && b.text.endsWith(': ') && blocks[i + 1]?.t === 'link') {
      inline.push(<span key={`pp-${i}`}>{b.text}</span>)
    } else {
      flush(i)
      out.push(renderBlock(b, i))
    }
  })
  flush(blocks.length)
  return out
}

export default function LeadEnrichmentArticle({ loc }: { loc: Loc }) {
  const c = articles[loc]
  const url = `${ORIGIN}${ARTICLE_PATH[loc]}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.headline,
    description: c.schemaDesc,
    image: `${ORIGIN}${IMAGE}`,
    datePublished: DATE_ISO,
    dateModified: DATE_ISO,
    inLanguage: c.inLanguage,
    author: { '@type': 'Person', name: 'Petr Kubíček', url: `${ORIGIN}/cs/about` },
    publisher: { '@type': 'Organization', name: 'Sales Robots s.r.o.', url: ORIGIN, logo: { '@type': 'ImageObject', url: `${ORIGIN}/logo.svg` } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  }
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: c.faqs.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  }

  return (
    <article style={{ paddingTop: '96px', paddingBottom: '80px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 24px' }}>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '32px' }}>
          <Link href={c.blogHref} style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>{c.blogLabel}</Link> {' / '} {c.crumb}
        </p>
        <img src={IMAGE} alt={c.h1} style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }} />
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '14px' }}>{c.eyebrow}</p>
        <h1 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: '16px' }}>{c.h1}</h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '40px' }}>{c.byline}</p>

        <div style={{ fontSize: '17px', lineHeight: 1.75, color: 'var(--text)' }}>
          <p style={{ fontSize: '19px', lineHeight: 1.65, marginBottom: '24px' }}><strong>{c.answer}</strong></p>

          <div style={{ background: 'rgba(255,107,74,0.06)', border: '1px solid rgba(255,107,74,0.25)', borderRadius: '14px', padding: '24px', marginBottom: '8px' }}>
            <p style={{ fontWeight: 700, fontSize: '18px', marginBottom: '6px' }}>{c.boxTitle}</p>
            <p style={{ color: 'var(--text-muted)', margin: '0 0 16px', fontSize: '15px' }}>{c.boxText}</p>
            <Link href={c.productHref} style={{ display: 'inline-block', backgroundColor: 'var(--accent)', color: '#0B1320', fontWeight: 700, fontSize: '15px', padding: '12px 24px', borderRadius: '9px', textDecoration: 'none' }}>{c.boxButton} →</Link>
          </div>

          {c.sections.map((s) => (
            <div key={s.h2}>
              <H2>{s.h2}</H2>
              {renderBlocks(s.blocks)}
            </div>
          ))}
        </div>

        <section style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid var(--border)' }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '24px', fontWeight: 700, marginBottom: '20px' }}>{c.faqTitle}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {c.faqs.map(({ q, a }) => (
              <details key={q} style={{ border: '1px solid var(--border)', borderRadius: '10px', padding: '16px 20px' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '15px' }}>{q}</summary>
                <p style={{ color: 'var(--text-muted)', fontSize: '15px', lineHeight: 1.7, margin: '12px 0 0' }}>{a}</p>
              </details>
            ))}
          </div>
        </section>

        <nav style={{ marginTop: '40px' }}>
          <p style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>{c.relatedTitle}</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {c.related.map((r) => <Link key={r.href} href={r.href} style={{ color: 'var(--accent)', textDecoration: 'none', fontSize: '14px' }}>{r.label} →</Link>)}
          </div>
        </nav>
      </div>
    </article>
  )
}
