export const cs = {
  nav: {
    home: 'Domů',
    pricing: 'Ceník',
    salesRepCz: 'Jak to stavíme',
    about: 'O nás',
    contact: 'Kontakt',
    bookCall: 'Konzultace zdarma',
  },
  hero: {
    badge: 'AI prodejní systém na míru',
    headline: 'AI prodejní systém,\nkterý vlastníte.',
    subheadline:
      'Postavíme vám kompletní outbound stroj — scraper → obohacení dat → LinkedIn a e-mail → demo Prezentérem → CRM. Za 1–3 týdny stojí, běží a je váš. Ne pronájem nástroje, ne agentura, na které jste závislí. Předáme klíče i know-how vašemu týmu.',
    cta: 'Konzultace zdarma',
    ctaSub: 'nebo se podívejte, jak systém pracuje',
    pipelineLabel: 'Váš systém běží',
    statsToday: 'osloveno dnes',
    statsReplies: 'odpovědí',
  },
  pipelineDemo: {
    emailFragment: 'Dobrý den, všiml jsem si, že se zaměřujete na…',
    channelLabels: { search: 'Hledání', email: 'E-mail', linkedin: 'LinkedIn', reply: 'Odpověď' },
    steps: [
      { label: 'Firma nalezena', detail: 'Stavební firma Novák s.r.o.', channel: 'search', typing: false },
      { label: 'Data obohacena', detail: 'Kontakt, obor, web', channel: 'search', typing: false },
      { label: 'E-mail napsán', detail: '', channel: 'email', typing: true },
      { label: 'E-mail odeslán', detail: 'Doručeno', channel: 'email', typing: false },
      { label: 'Kontakt nalezen na LinkedIn', detail: 'Jan Novák · jednatel', channel: 'linkedin', typing: false },
      { label: 'Návštěva profilu', detail: 'Profil zobrazen', channel: 'linkedin', typing: false },
      { label: 'Pozvánka odeslána', detail: 'Žádost o spojení', channel: 'linkedin', typing: false },
      { label: 'Zpráva 1 odeslána', detail: 'Po přijetí spojení', channel: 'linkedin', typing: false },
      { label: 'Zpráva 2 odeslána', detail: 'Navázání po 4 dnech', channel: 'linkedin', typing: false },
      { label: 'Odpověď přijata', detail: 'Zájem o schůzku', channel: 'reply', typing: false },
    ],
  },
  howItWorks: {
    title: 'Jak vám systém postavíme',
    subtitle:
      'Nekupujete si přístup do aplikace ani agenturu na paušál. Za 1–3 týdny vám postavíme outbound stroj napojený na vaše nástroje — a předáme vám klíče.',
    steps: [
      {
        number: '01',
        title: 'Konzultace',
        body: 'Projdeme váš prodej, ideálního zákazníka a cíle. Navrhneme, jak by systém vypadal konkrétně u vás — které kanály, jaká data a kam to napojit (CRM, ERP). Nezávazně a zdarma.',
      },
      {
        number: '02',
        title: 'Návrh',
        body: 'Připravíme architekturu celé pipeline: zdroje dat a scraping, obohacení kontaktů, sekvence pro LinkedIn i e-mail, demo Prezentérem a napojení na váš systém. Víte přesně, co dostanete.',
      },
      {
        number: '03',
        title: 'Implementace',
        body: 'Postavíme systém na naší infrastruktuře i na vašich účtech. Scrapery, obohacování dat, outreach sekvence, reporty — vše propojené do jednoho běžícího stroje.',
      },
      {
        number: '04',
        title: 'Testování a předání',
        body: 'Odladíme doručitelnost, texty i konverzi na reálném provozu. Pak předáme klíče a zaškolíme váš tým. Systém i data jsou vaše — know-how zůstává u vás, ne u agentury.',
      },
    ],
  },
  forWhom: {
    title: 'Pro koho to stavíme',
    items: [
      {
        title: 'B2B SaaS a službové firmy (5–50 lidí)',
        body: 'Děláte outbound nebo s ním chcete začít, ale nechcete být navěky závislí na agentuře. Postavíme vám vlastní stroj, který škáluje s vámi.',
      },
      {
        title: 'České výrobní a B2B firmy',
        body: 'Máte produkt, ale chybí systematické oslovování nových zákazníků. Dáme vám pipeline, kterou jede váš vlastní tým — bez náboru celého obchodního oddělení.',
      },
      {
        title: 'Firmy, které chtějí vlastnit pipeline',
        body: 'Nechcete platit navěky za přístup ani posílat know-how ven. Systém, data i procesy zůstávají u vás.',
      },
    ],
  },
  references: {
    title: 'Výsledky u klientů',
    subtitle:
      'Čísla níže jsou skutečné odpovědi — firmy, které reagovaly a chtěly se bavit dál. Ne počty otevřených e-mailů.',
    items: [
      {
        client: 'Whistlelink',
        sector: 'Whistleblowing SaaS · Švédsko',
        value: '37',
        result: 'kvalifikovaných příležitostí za 2 zkušební měsíce',
      },
      {
        client: 'Bierbauer & Söhne',
        sector: 'Zemědělská technika · Německo',
        value: '∞',
        result: 'průběžné získávání kontaktů na trzích ČR a SK',
      },
    ],
    note: 'Konkrétní reference a doporučení rádi předáme na vyžádání.',
  },
  services: {
    title: 'Co vám postavíme',
    subtitle:
      'Ne jeden nástroj na jeden krok. Integrovaný systém přes celý funnel — od dat po schůzku, napojený na vaše CRM i ERP.',
    automation: {
      badge: 'Kompletní pipeline',
      title: 'Celý outbound stroj, propojený a spuštěný',
      body: 'Nesestavujeme vám další izolovaný nástroj. Stavíme integrovaný systém, který sám vyhledá firmy, obohatí data, osloví přes e-mail i LinkedIn, nabídne demo Prezentérem a předá připravené příležitosti do vašeho CRM.',
      examples: [
        { label: 'Scrapery a vyhledávání firem z veřejných zdrojů (ARES, mapy, web)', icon: 'ai' },
        { label: 'Obohacení kontaktů — obor, rozhodovatelé, e-maily, LinkedIn', icon: 'enrich' },
        { label: 'Outreach přes e-mail i LinkedIn s personalizací a follow-upy', icon: 'flow' },
        { label: 'Demo Prezentérem — interaktivní ukázka místo statické prezentace', icon: 'chart' },
        { label: 'Napojení na váš CRM / ERP a předání kvalifikovaných příležitostí', icon: 'connect' },
        { label: 'Reporty a přehledy, které vedení skutečně čte', icon: 'alert' },
      ],
      cta: 'Domluvit konzultaci',
    },
    agency: {
      badge: 'Vlastnictví a předání',
      title: 'Předáme klíče — systém je váš',
      body: 'Na rozdíl od agentury vám celý stroj předáme. Zaškolíme tým, necháme dokumentaci a systém i data zůstávají u vás. Provoz a průběžnou optimalizaci můžeme převzít, ale nemusíte být závislí na nikom.',
      examples: [
        { label: 'Zaškolení vašeho týmu na obsluhu systému', icon: 'connect' },
        { label: 'Dokumentace a předání přístupů — vše je vaše', icon: 'enrich' },
        { label: 'Volitelná měsíční podpora, provoz a optimalizace', icon: 'flow' },
        { label: 'Napojení na sesterské produkty (salesbot, Prezentér, custom dev)', icon: 'chart' },
      ],
      cta: 'Domluvit konzultaci',
    },
  },
  founder: {
    label: 'Kdo za tím stojí',
    name: 'Petr Kubíček',
    role: 'Zakladatel, Sales Robots s.r.o.',
    body: 'Patnáct let v B2B obchodu a marketingu, z toho roky v seniorních a vedoucích pozicích. Prodejní systémy stavíme na vlastní infrastruktuře — scrapery, LinkedIn automatizaci, Prezentér i custom vývoj. Neprodávám cizí nástroj, ale systém, který vám postavím a předám.',
    credentials: [
      { value: '15+', label: 'let v B2B obchodu' },
      { value: 'Ing.', label: 'VŠE Praha' },
      { value: '1–3 týdny', label: 'do spuštění systému' },
    ],
  },
  salesRobots: {
    label: 'Sesterská služba',
    text: 'Chcete oslovit i návštěvníky, kteří na váš web přijdou sami? K tomu slouží',
    link: 'Sales Robots',
    suffix: '— chatboti a další prvky na web, které z návštěvy udělají poptávku.',
  },
  cta: {
    title: 'Pojďme probrat, jak by systém vypadal u vás.',
    subtitle:
      'Na nezávazné konzultaci projdeme váš prodej a možnosti automatizace — a ukážeme, jak by váš vlastní outbound stroj mohl vypadat.',
    primary: 'Konzultace zdarma',
    secondary: 'Napsat e-mail',
  },
  pricing: {
    title: 'Kolik to stojí',
    subtitle:
      'Postavení systému od 9 900 Kč jednorázově. Konkrétní částka závisí na rozsahu a napojení — upřesníme ji na nezávazné konzultaci. Provoz a podpora jsou volitelné.',
    setup: {
      label: 'Postavíte jednou, vlastníte napořád',
      description:
        'Platíte za postavení systému, ne za měsíční pronájem, na kterém jste závislí. Po předání běží systém na vašich účtech a datech. Měsíční podporu a provoz můžete využít, ale nemusíte.',
    },
    tiers: [
      {
        name: 'AI prodejní systém',
        monthlyLabel: 'jednorázově za postavení',
        price: 'od 9 900 Kč',
        priceNote: 'Vlajková nabídka',
        features: [
          'Kompletní pipeline: scraper → obohacení → e-mail → LinkedIn → CRM',
          'Personalizované oslovení a follow-up sekvence',
          'Napojení na jeden váš nástroj (CRM nebo e-mail)',
          'Odladění na reálném provozu',
          'Předání klíčů a zaškolení týmu',
        ],
        cta: 'Domluvit konzultaci',
        highlight: true,
      },
      {
        name: 'Provoz a podpora',
        monthlyLabel: 'volitelně, měsíčně',
        price: 'dle rozsahu',
        priceNote: 'Volitelné',
        features: [
          'Průběžný provoz systému za vás',
          'Optimalizace textů, cílení a doručitelnosti',
          'Rozšiřování o další kanály a segmenty',
          'Přednostní podpora',
        ],
        cta: 'Domluvit konzultaci',
        highlight: false,
      },
      {
        name: 'Enterprise / na míru',
        monthlyLabel: 'individuální nacenění',
        price: 'individuálně',
        priceNote: 'Rozsáhlé projekty',
        features: [
          'Vícejazyčné a vícetrhové kampaně',
          'Hlubší integrace do ERP a interních systémů',
          'Custom vývoj (aidevs)',
          'Demo Prezentérem na míru',
          'Vyhrazený kontakt u nás',
        ],
        cta: 'Domluvit konzultaci',
        highlight: false,
      },
    ],
    faq: [
      {
        q: 'Co přesně znamená „systém, který vlastníte"?',
        a: 'Postavíme celý outbound stroj a předáme vám ho — běží na vašich účtech a datech, dostanete dokumentaci a zaškolení. Na rozdíl od agentury nejste závislí na tom, že za vás někdo něco dělá. Know-how i procesy zůstávají u vás.',
      },
      {
        q: 'Jak dlouho trvá postavit systém?',
        a: 'Obvykle 1–3 týdny podle rozsahu a počtu napojení. Proces má čtyři kroky: konzultace, návrh, implementace a testování s předáním.',
      },
      {
        q: 'Co znamená „od 9 900 Kč"?',
        a: 'Je to jednorázová cena za postavení systému. Výsledná částka závisí na rozsahu pipeline a na tom, na kolik nástrojů se napojujeme. Přesné nacenění dostanete po nezávazné konzultaci.',
      },
      {
        q: 'Musím platit něco měsíčně?',
        a: 'Ne. Základní model je jednorázové postavení a předání. Měsíční provoz, podporu a optimalizaci nabízíme jako volitelnou možnost — pokud chcete, abychom systém jeli a ladili za vás.',
      },
      {
        q: 'Čím se lišíte od agentury nebo od nástrojů jako Apollo či Waalaxy?',
        a: 'Agentura dělá práci za vás a když skončíte, nemáte nic. Point-tooly (Apollo, Waalaxy, HubSpot) řeší vždy jen jeden krok funnelu. My stavíme integrovaný systém přes celý funnel a předáme vám ho do vlastnictví.',
      },
      {
        q: 'Je oslovování v souladu s GDPR?',
        a: 'Ano. Oslovujeme firemní kontakty na základě oprávněného zájmu a každá zpráva obsahuje možnost odhlášení. Systém stavíme tak, aby to respektoval.',
      },
      {
        q: 'Potřebuju vlastní obchodní tým?',
        a: 'Ne nutně. Systém obsluhuje jeden člověk — reaguje na odpovědi a domlouvá schůzky. Postavíme ho tak, aby ho zvládl váš tým i s minimální obsazeností obchodu.',
      },
    ],
  },
  about: {
    title: 'Co systém dělá na pozadí',
    subtitle:
      'Nechceme se chlubit technologií. Popisujeme přesně, co systém dělá, abyste věděli, co dostáváte do vlastnictví.',
    sections: [
      {
        title: 'Vyhledávání a scraping firem',
        body: 'Systém prochází mapy, firemní rejstříky (ARES) a další veřejné zdroje podle vašeho zadání. Žádné nakoupené databáze ani staré seznamy — data vznikají v reálném čase.',
      },
      {
        title: 'Obohacení dat a rozbor webu',
        body: 'Ke každé firmě systém doplní obor, rozhodovatele a kontakty a přečte její web. Vzniká kontext pro personalizované oslovení, které by obchodník psal desítky minut.',
      },
      {
        title: 'Oslovení přes e-mail i LinkedIn',
        body: 'Systém napíše zprávu, která mluví konkrétně k dané firmě, odešle e-mail a paralelně pošle žádost o spojení na LinkedIn s osobním vzkazem a follow-upem.',
      },
      {
        title: 'Demo, CRM a předání',
        body: 'Zájemcům nabídne interaktivní demo Prezentérem a připravené příležitosti předá do vašeho CRM. Celý systém pak předáme vám — i s daty a přístupy.',
      },
    ],
    notSaas: {
      title: 'Postavíte jednou, vlastníte napořád',
      body: 'Nekupujete si přístup do aplikace, kterou musíte navěky platit. Postavíme vám systém na míru a předáme ho — běží na vašich účtech a datech. Platíte za postavení, ne za nekonečný pronájem.',
    },
    team: {
      title: 'Za systémem je Sales Robots s.r.o.',
      body: 'Jsme česká firma, která staví AI prodejní systémy. Stojíme na vlastní infrastruktuře — scrapery, LinkedIn automatizace (salesbot), Prezentér (salesrobots) i custom vývoj (aidevs). SalesAgent.cz tyhle komponenty složí do systému, který vlastníte.',
    },
  },
  contact: {
    title: 'Pojďme si zavolat.',
    subtitle:
      'Vyhraďte si třicet minut. Projdeme váš prodej a možnosti automatizace a ukážeme, jak by váš vlastní systém mohl vypadat.',
    calendly: 'Vybrat termín v kalendáři',
    or: 'nebo napište přímo',
    form: {
      name: 'Jméno a příjmení',
      company: 'Firma',
      email: 'Pracovní e-mail',
      message: 'Co řešíte / koho chcete oslovovat',
      submit: 'Odeslat',
      success: 'Zpráva odešla. Ozveme se do 24 hodin.',
      error: 'Něco se nepovedlo. Zkuste to prosím znovu.',
    },
    info: {
      company: 'Sales Robots s.r.o.',
      ico: 'IČO: 09586563',
      address: 'Generála Šišky 2082/26, Praha – Modřany',
      email: 'info@salesagent.cz',
    },
  },
  footer: {
    tagline: 'AI prodejní systémy, které vlastníte.',
    links: {
      howItWorks: 'Jak to stavíme',
      pricing: 'Ceník',
      contact: 'Kontakt',
      register: 'Český obchodní rejstřík',
      privacy: 'Ochrana osobních údajů',
    },
    company: 'Sales Robots s.r.o., IČO 09586563',
    address: 'Generála Šišky 2082/26, Praha – Modřany',
    rights: 'Všechna práva vyhrazena.',
  },
  register: {
    title: 'Jak najít firmu v českém obchodním rejstříku (ARES)',
    description:
      'Návod na vyhledávání firem v ARES a obchodním rejstříku — ověření IČO, výpisy, kontaktní údaje.',
  },
}

export type Translations = typeof cs
