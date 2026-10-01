export const cs = {
  nav: {
    home: 'Domů',
    pricing: 'Ceník',
    salesRepCz: 'Jak to funguje',
    czechEntry: 'Vstup na trh ČR',
    about: 'O nás',
    contact: 'Kontakt',
    bookCall: 'Konzultace zdarma',
  },
  hero: {
    badge: 'Řízená automatizace obchodu',
    headline: 'Váš obchodník neprospektuje?\nAI systém to udělá za něj.',
    subheadline:
      'Najdeme a oslovíme firmy z vašeho trhu — e-mailem, na LinkedInu i reklamou. Zahřejeme je a ukážeme váš produkt přes interaktivního Prezentéra. Vašemu obchodníkovi přistane připravená schůzka, kterou stačí zavřít. Celé to nasadíme a řídíme za vás.',
    cta: 'Kontaktujte nás',
    ctaSub: 'nebo si domluvte nezávaznou konzultaci',
    pipelineLabel: 'Automat běží za vás',
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
    title: 'Jak to funguje',
    subtitle:
      'Proaktivní práci — hledání, psaní, zahřívání — dělá AI systém. Váš člověk jen zavírá připravené schůzky, které mu přistanou. Úspěch nezávisí na tom, jestli váš obchodník sám prospektuje.',
    steps: [
      {
        number: '01',
        title: 'Systém najde a osloví',
        body: 'Najdeme firmy z vašeho ideálního profilu a oslovíme je e-mailem, na LinkedInu (přes váš ověřený účet) i reklamou. Vše personalizované, s follow-upy.',
      },
      {
        number: '02',
        title: 'Zahřeje a ukáže produkt',
        body: 'Zájemce dostane relevantní komunikaci a interaktivní demo Prezentérem postavené na vašem produktu — projde si, co pro něj děláte, ještě než s vámi mluví.',
      },
      {
        number: '03',
        title: 'Váš obchodník zavře',
        body: 'Připravená schůzka přistane vašemu člověku. On zvedne telefon a dojedná — to, co umí a chce. Proaktivitu za něj řeší AI systém.',
      },
    ],
  },
  forWhom: {
    title: 'Pro koho to je',
    items: [
      {
        title: 'Firmy s obchodníkem, co neprospektuje',
        body: 'Platíte člověka, který nedělá nic navíc. Dáme vám AI systém, který za něj hledá a oslovuje — on jen zavírá připravené schůzky.',
      },
      {
        title: 'Firmy, které mají koho na zvednutí telefonu',
        body: 'Máte aspoň jednoho člověka, co zná byznys a zvládne dojednat připravenou schůzku. Zbytek — proaktivní oslovování — jede automat.',
      },
      {
        title: 'Majitelé, co to chtějí vyřešit systémem',
        body: 'Nechcete nabírat celé obchodní oddělení ani honit obchodníka. Chcete, aby vám schůzky se zájemci prostě chodily.',
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
      {
        client: 'SavvyLockers',
        sector: 'Chytré schránky · B2B',
        value: '5+',
        result: 'vážných poptávek za 1 měsíc',
      },
    ],
    note: 'Konkrétní reference a doporučení rádi předáme na vyžádání.',
  },
  services: {
    title: 'Co za vás jede',
    subtitle:
      'Ne jeden nástroj na jeden krok. Řízený systém přes celý funnel — od hledání firem po připravenou schůzku, kterou zavře váš člověk.',
    automation: {
      badge: 'Proaktivní práce',
      title: 'Celý horní trychtýř jede AI systém',
      body: 'Systém sám vyhledá firmy, obohatí data, osloví přes e-mail i LinkedIn, zahřeje a nabídne demo Prezentérem — a připravenou připravenou schůzku předá vašemu obchodníkovi.',
      examples: [
        { label: 'Vyhledávání firem z veřejných zdrojů (ARES, mapy, web)', icon: 'ai' },
        { label: 'Obohacení kontaktů — obor, rozhodovatelé, e-maily, LinkedIn', icon: 'enrich' },
        { label: 'Oslovení přes e-mail i LinkedIn s personalizací a follow-upy', icon: 'flow' },
        { label: 'Demo Prezentérem postavené na vašem produktu', icon: 'chart' },
        { label: 'Schůzky se zájemci rovnou do vašeho CRM / kalendáře', icon: 'connect' },
        { label: 'Reporty výsledků, které vedení skutečně čte', icon: 'alert' },
      ],
      cta: 'Domluvit konzultaci',
    },
    agency: {
      badge: 'Bez závislosti na vašem člověku',
      title: 'Vyřízneme nejslabší článek',
      body: 'Váš obchodník neprospektuje? Nevadí. Proaktivní práci za něj dělá AI systém, on jen zavírá připravené schůzky. Úspěch tak nestojí na jeho aktivitě — a my celý systém řídíme a ladíme za vás.',
      examples: [
        { label: 'Oslovování jede přes váš ověřený LinkedIn účet — bezpečně a lidsky', icon: 'connect' },
        { label: 'Systém řídíme a optimalizujeme my — vy se ho nedotknete', icon: 'flow' },
        { label: 'Obchodníkovi chodí schůzky se zájemci, ne úkoly navíc', icon: 'enrich' },
        { label: 'Napojení na sesterské produkty (salesbot, Prezentér, custom dev)', icon: 'chart' },
      ],
      cta: 'Domluvit konzultaci',
    },
  },
  founder: {
    label: 'Kdo za tím stojí',
    name: 'Petr Kubíček',
    role: 'Zakladatel, Sales Robots s.r.o.',
    body: 'Přes 20 let v B2B obchodu, roky v seniorních a vedoucích rolích. Automatizaci stavíme na vlastní infrastruktuře — LinkedIn automatizace, Prezentér i custom vývoj. Neprodávám cizí nástroj — nasadím vám systém a řídím ho, aby vám chodily schůzky se zájemci.',
    credentials: [
      { value: '20+', label: 'let v B2B obchodu' },
      { value: 'Ing.', label: 'VŠE Praha' },
      { value: 'na klíč', label: 'nasadíme a řídíme za vás' },
    ],
  },
  salesRobots: {
    label: 'Sesterská služba',
    text: 'Chcete oslovit i návštěvníky, kteří na váš web přijdou sami? K tomu slouží',
    link: 'Sales Robots',
    suffix: '— chatboti a další prvky na web, které z návštěvy udělají poptávku.',
  },
  cta: {
    title: 'Pojďme probrat, jak by to jelo u vás.',
    subtitle:
      'Na nezávazné konzultaci projdeme váš prodej a ukážeme, jak by vám systém dodával schůzky se zájemci — bez zátěže vašeho obchodníka.',
    primary: 'Konzultace zdarma',
    secondary: 'Napsat e-mail',
  },
  pricing: {
    title: 'Kolik to stojí',
    subtitle:
      'Nasazení na klíč jednorázově, pak měsíční řízení systému. Přesnou částku upřesníme na nezávazné konzultaci podle rozsahu a počtu kanálů.',
    setup: {
      label: 'Nasadíme, pak to za vás řídíme',
      description:
        'Jednorázové nasazení vás nastartuje. Hlavní hodnota je v měsíčním řízení — systém jedeme a ladíme my a dodáváme schůzky se zájemci, vy jen zavíráte.',
    },
    tiers: [
      {
        name: 'Nasazení na klíč',
        monthlyLabel: 'jednorázově',
        price: 'od 15 000 Kč',
        priceNote: 'Start',
        features: [
          'Napojení vašich účtů (LinkedIn, e-mail)',
          'Definice ideálního zákazníka a sekvencí',
          'Prezentér postavený na vašem produktu',
          'Odladění na reálném provozu',
          'Zaškolení člověka, který bude zavírat',
        ],
        cta: 'Domluvit konzultaci',
        highlight: false,
      },
      {
        name: 'Řízená automatizace',
        monthlyLabel: 'měsíčně',
        price: 'od 19 900 Kč',
        priceNote: 'Jádro služby',
        features: [
          'Celý proaktivní outbound jede AI systém',
          'Systém řídíme a průběžně ladíme my',
          'Schůzky se zájemci chodí vašemu obchodníkovi',
          'Přehled výsledků každý měsíc',
          'Levnější než půl obchodníka',
        ],
        cta: 'Domluvit konzultaci',
        highlight: true,
      },
      {
        name: 'Enterprise / na míru',
        monthlyLabel: 'individuální nacenění',
        price: 'individuálně',
        priceNote: 'Rozsáhlé projekty',
        features: [
          'Vícejazyčné a vícetrhové kampaně (SK, PL, DE)',
          'Hlubší integrace do CRM / ERP',
          'Custom vývoj (aidevs)',
          'Více obchodníků a LinkedIn účtů',
          'Vyhrazený kontakt u nás',
        ],
        cta: 'Domluvit konzultaci',
        highlight: false,
      },
    ],
    faq: [
      {
        q: 'Nahradí to našeho obchodníka?',
        a: 'Ne. Dodá mu schůzky se zájemci. Proaktivní hledání a oslovování dělá AI systém, váš člověk jen zavírá zájemce, kteří už produkt viděli.',
      },
      {
        q: 'Musíme systém nějak obsluhovat?',
        a: 'Ne. Systém řídíme my. Váš člověk jen reaguje na připravené schůzky a domlouvá je.',
      },
      {
        q: 'Přes čí LinkedIn to jede?',
        a: 'Přes váš ověřený účet — reálný profil vašeho člověka. Když pak zájemce zavolá, mluví s někým, kdo firmu zná. Oslovování řídíme bezpečně, s konzervativními limity.',
      },
      {
        q: 'Kolik to stojí?',
        a: 'Jednorázové nasazení na klíč od 15 000 Kč a pak měsíční řízení od 19 900 Kč. Přesnou částku upřesníme na konzultaci podle rozsahu.',
      },
      {
        q: 'Za jak dlouho to poběží?',
        a: 'Nasazení je otázka dní, ne týdnů. Pak systém běží a my ho průběžně ladíme na výsledky.',
      },
      {
        q: 'Je oslovování v souladu s GDPR?',
        a: 'Ano. Oslovujeme firemní kontakty na základě oprávněného zájmu a každá zpráva obsahuje možnost odhlášení.',
      },
      {
        q: 'Funguje to i na Slovensku a v Polsku?',
        a: 'Ano. Kampaně umíme vést česky, slovensky, polsky i anglicky.',
      },
    ],
  },
  about: {
    title: 'Co systém dělá na pozadí',
    subtitle:
      'Popisujeme přesně, co za vás systém dělá — od hledání firem po připravenou schůzku.',
    sections: [
      {
        title: 'Vyhledávání firem',
        body: 'Systém prochází mapy, firemní rejstříky (ARES) a další veřejné zdroje podle vašeho zadání. Žádné nakoupené databáze ani staré seznamy — data vznikají v reálném čase.',
      },
      {
        title: 'Obohacení dat a rozbor webu',
        body: 'Ke každé firmě systém doplní obor, rozhodovatele a kontakty a přečte její web. Vzniká kontext pro personalizované oslovení, které by obchodník psal desítky minut.',
      },
      {
        title: 'Oslovení přes e-mail i LinkedIn',
        body: 'Systém napíše zprávu, která mluví konkrétně k dané firmě, odešle e-mail a paralelně osloví na LinkedInu z vašeho ověřeného profilu s osobním vzkazem a follow-upem.',
      },
      {
        title: 'Demo a připravená schůzka',
        body: 'Zájemcům nabídne interaktivní demo Prezentérem a připravené příležitosti předá vašemu obchodníkovi. Systém přitom řídíme a ladíme my.',
      },
    ],
    notSaas: {
      title: 'Nasadíme a řídíme, vy zavíráte',
      body: 'Nekupujete si aplikaci, kterou musíte sami obsluhovat. Systém vám nasadíme na míru a jedeme ho za vás — vám chodí schůzky se zájemci.',
    },
    team: {
      title: 'Za systémem je Sales Robots s.r.o.',
      body: 'Jsme česká firma, která staví a řídí AI prodejní systémy. Stojíme na vlastní infrastruktuře — LinkedIn automatizace (salesbot), Prezentér (salesrobots) i custom vývoj (aidevs).',
    },
  },
  contact: {
    title: 'Pojďme si zavolat.',
    subtitle:
      'Vyhraďte si třicet minut. Projdeme váš prodej a ukážeme, jak by vám systém dodával schůzky se zájemci.',
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
    tagline: 'Řízená automatizace obchodu. Vy jen zavíráte.',
    links: {
      howItWorks: 'Jak to funguje',
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
