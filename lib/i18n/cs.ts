export const cs = {
  nav: {
    howItWorks: 'Jak to funguje',
    pricing: 'Ceník',
    about: 'O nás',
    contact: 'Kontakt',
    bookCall: 'Domluvit hovor',
  },
  hero: {
    badge: 'AI obchodní zástupce',
    headline: 'Rozjedeme váš obchod naplno\npomocí AI a unikátního SW.',
    subheadline:
      'Automatizujeme prodej u firem. Vyhledáme relevantní společnosti, prostudujeme jejich weby a oslovíme je přes personalizované e-maily i LinkedIn outreach. K vám se dostanou jen ti, co mají reálný zájem.',
    cta: 'Domluvit nezávazný hovor',
    ctaSub: 'nebo se podívejte, jak to funguje',
    pipelineLabel: 'Systém běží naživo',
    statsToday: 'osloveno dnes',
    statsReplies: 'odpovědí',
  },
  pipelineDemo: {
    emailFragment: 'Dobrý den, všiml jsem si, že se zaměřujete na…',
    channelLabels: { search: 'Hledání', email: 'E-mail', linkedin: 'LinkedIn', reply: 'Odpověď' },
    steps: [
      { label: 'Firma nalezena', detail: 'Stavební firma Novák s.r.o.', channel: 'search', typing: false },
      { label: 'Web prostudován', detail: 'Rozbor obsahu pomocí AI', channel: 'search', typing: false },
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
    title: 'Jak to celé funguje v praxi',
    subtitle:
      'Nenajímáte si software. Najímáte si kompletní B2B proces, který vyhledává firmy, čte jejich weby a generuje schůzky na autopilotu.',
    steps: [
      {
        number: '01',
        title: 'Precizní cílení bez databází',
        body: 'Společně definujeme vašeho ideálního zákazníka (obor, velikost, region). Náš systém pak aktivně prohledává rejstříky a internet, aby našel přesné shody. Nepoužíváme mrtvé nakoupené databáze, ale získáváme čerstvé relevantní kontakty v reálném čase.',
      },
      {
        number: '02',
        title: 'AI analýza každého webu',
        body: 'Předtím, než kohokoliv oslovíme, naše umělá inteligence navštíví a prostuduje web dané firmy. Zjistí, čím se přesně zabývají. Získáme tak klíčový kontext pro naprosto personalizovanou zprávu, kterou by běžný obchoďák psal desítky minut.',
      },
      {
        number: '03',
        title: 'Hyper-personalizované oslovení',
        body: 'Pro každého rozhodovatele vygenerujeme unikátní e-mail. Nejde o šablonu s doplněným jménem – text zprávy přímo reaguje na obsah jejich vlastního webu. Díky tomu působí zpráva přirozeně, vyhýbá se spamu a generuje násobně více odpovědí.',
      },
      {
        number: '04',
        title: 'LinkedIn a e-mail na autopilota',
        body: 'Systém odesílá e-maily a paralelně hledá kontakty na LinkedIn. Pošle žádost o spojení s osobním vzkazem a pokud klient nereaguje, po pár dnech se slušně připomene. Vy do procesu vstupujete až ve chvíli, kdy klient odpoví, že má zájem o schůzku.',
      },
    ],
  },
  forWhom: {
    title: 'Komu se to hodí',
    items: [
      {
        title: 'Firmám bez vlastního obchodníka',
        body: 'Potřebujete pravidelně oslovovat nové firmy, ale ještě nedává smysl najímat obchodníka na plný úvazek. Tohle rozjede oslovování bez náboru.',
      },
      {
        title: 'Firmám vstupujícím na český a slovenský trh',
        body: 'Zprávy píšeme v jazyce a kontextu místního trhu. Bez agentury a bez měsíců zaučování.',
      },
      {
        title: 'Týmům, které chtějí čas na uzavírání',
        body: 'Vaši obchodníci se mají věnovat jednání a domluvě. Vyhledávání firem a první oslovení necháte na nás.',
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
    title: 'Automatizace B2B obchodu na míru',
    subtitle:
      'Stavíme obchodní infrastrukturu — od prvního kontaktu po uzavřený obchod. Na míru, bez šablon.',
    automation: {
      badge: 'Vývoj na míru',
      title: 'Obchodní automatizace a RPA v prodeji',
      body: 'Navrhneme a postavíme systémy přesně podle vašich procesů. Automatizujeme opakující se kroky v obchodu, propojujeme CRM s AI nástroji a stavíme přehledy, které vedení skutečně čte.',
      examples: [
        { label: 'Propojení CRM s LinkedIn a e-mailovým nástrojem', icon: 'connect' },
        { label: 'Automatické obohacování kontaktů z veřejných zdrojů', icon: 'enrich' },
        { label: 'AI kvalifikace příchozích poptávek a zařazení do CRM', icon: 'ai' },
        { label: 'Follow-up sekvence s podmíněnou logikou', icon: 'flow' },
        { label: 'Obchodní dashboardy a reporty v reálném čase', icon: 'chart' },
        { label: 'Notifikace a eskalace podle aktivity příležitostí', icon: 'alert' },
      ],
      cta: 'Probrat automatizaci',
    },
    agency: {
      badge: 'Outsourcing',
      title: 'Externí sales agentura',
      body: 'Převezmeme obchodní aktivity jako vaše externí obchodní oddělení — od prvního oslovení až po předání připravených příležitostí vašemu týmu.',
      examples: [
        { label: 'Správa celého outboundního procesu', icon: 'flow' },
        { label: 'Příprava a vedení prvních obchodních hovorů', icon: 'connect' },
        { label: 'Předání kvalifikovaných příležitostí do vašeho CRM', icon: 'enrich' },
        { label: 'Průběžné reportování výsledků a optimalizace', icon: 'chart' },
      ],
      cta: 'Domluvit hovor',
    },
  },
  founder: {
    label: 'Kdo za tím stojí',
    name: 'Petr Kubíček',
    role: 'Zakladatel, Sales Robots s.r.o.',
    body: 'Patnáct let v B2B obchodu a marketingu, z toho roky v seniorních a vedoucích pozicích. Systém na oslovování firem stavím na vlastní infrastruktuře — neprodávám cizí nástroj, ale službu, za kterou ručím.',
    credentials: [
      { value: '15+', label: 'let v B2B obchodu' },
      { value: 'Ing.', label: 'VŠE Praha' },
      { value: '48 h', label: 'do prvního oslovení' },
    ],
  },
  salesRobots: {
    label: 'Sesterská služba',
    text: 'Chcete oslovit i návštěvníky, kteří na váš web přijdou sami? K tomu slouží',
    link: 'Sales Robots',
    suffix: '— chatboti a další prvky na web, které z návštěvy udělají poptávku.',
  },
  cta: {
    title: 'Pojďme se bavit konkrétně.',
    subtitle:
      'Na třicetiminutovém hovoru projdeme váš trh a ukážeme, jak by oslovování vypadalo přímo ve vašem oboru.',
    primary: 'Domluvit hovor',
    secondary: 'Napsat e-mail',
  },
  pricing: {
    title: 'Ceník',
    subtitle:
      'Jednorázové nastavení kampaně a měsíční paušál za provoz. Konkrétní částka závisí na rozsahu a oboru — proto si ji upřesníme na hovoru.',
    setup: {
      label: 'Jednorázové nastavení',
      description:
        'Příprava na začátku: popis ideálního zákazníka, propojení nástrojů, první texty zpráv a technické nastavení celé kampaně.',
    },
    tiers: [
      {
        name: 'Start',
        monthlyLabel: 'měsíčně bez DPH',
        price: 'od 3 600 Kč',
        priceNote: 'Nezávazně se ozvěte',
        features: [
          'Až 200 oslovených firem měsíčně',
          'Oslovení e-mailem',
          'Měsíční přehled výsledků',
          'Upozornění na odpovědi',
        ],
        cta: 'Domluvit hovor',
        highlight: false,
      },
      {
        name: 'Grow',
        monthlyLabel: 'měsíčně bez DPH',
        price: 'od 5 900 Kč',
        priceNote: 'Včetně LinkedIn automatizace',
        features: [
          'Až 500 oslovených firem měsíčně',
          'Oslovení e-mailem i na LinkedIn',
          'Testování více verzí zpráv',
          'Týdenní přehled výsledků',
          'Přednostní podpora',
        ],
        cta: 'Domluvit hovor',
        highlight: true,
      },
      {
        name: 'Scale',
        monthlyLabel: 'měsíčně bez DPH',
        price: 'od 9 900 Kč',
        priceNote: 'Vše je zahrnuto',
        features: [
          'Bez stropu na počet firem',
          'Více kanálů oslovení',
          'Rozdělení do vlastních segmentů',
          'Vyhrazený kontakt u nás',
          'Propojení s vaším CRM',
        ],
        cta: 'Domluvit hovor',
        highlight: false,
      },
    ],
    faq: [
      {
        q: 'Jak rychle se dá začít?',
        a: 'Po dohodě a úvodním nastavení (zhruba dva pracovní dny) odcházejí první zprávy do 48 hodin.',
      },
      {
        q: 'Jak personalizujete cold emaily?',
        a: 'AI prostuduje web každé firmy a na základě toho napíše unikátní zprávu. Není to šablona s doplněným jménem — text přímo reaguje na to, čím se firma zabývá. Díky tomu je míra odpovědí násobně vyšší než u hromadných rozesílek.',
      },
      {
        q: 'Čím se liší od klasického email marketingu nebo Mailchimpu?',
        a: 'Email marketing cílí na lidi, kteří vás už znají (odběratelé, zákazníci). SalesAgent automaticky oslovuje firmy, které vás ještě neznají — každou s unikátní zprávou. Je to automatický cold mailing, ne newsletter.',
      },
      {
        q: 'Jak funguje automatické vyhledávání B2B kontaktů?',
        a: 'Systém prohledává firemní rejstříky, Google Maps a veřejné zdroje podle vašeho zadání. Nepoužíváme nakoupené databáze — kontakty generujeme v reálném čase, vždy čerstvé a relevantní.',
      },
      {
        q: 'Je to v souladu s GDPR?',
        a: 'Oslovujeme firemní kontakty na základě oprávněného zájmu. Každá zpráva obsahuje možnost odhlášení.',
      },
      {
        q: 'Jaký je rozdíl oproti najímání obchodního zástupce?',
        a: 'Obchodní zástupce stojí kolem 100 000 Kč měsíčně a zvládne oslovit cca 800 firem. AI obchodník udělá totéž od 5 900 Kč — 17× levněji, bez nemocí, dovolených a výpovědí. Navíc je aktivní do 48 hodin místo měsíců zaučování.',
      },
      {
        q: 'Co konkrétně dostanu?',
        a: 'Přehled s čísly (doručenost, otevření, odpovědi) a seznam firem, které projevily zájem — do schránky nebo přímo do vašeho CRM.',
      },
      {
        q: 'Funguje automatický cold mailing i pro malé firmy?',
        a: 'Ano. Tarif Start začíná od 3 600 Kč měsíčně a je ideální pro firmy, které chtějí oslovovat nové zákazníky, ale nemají rozpočet na vlastního obchodníka.',
      },
    ],
  },
  about: {
    title: 'Co se děje na pozadí',
    subtitle:
      'Nechceme se chlubit technologií. Popisujeme přesně, co služba dělá, abyste věděli, za co platíte.',
    sections: [
      {
        title: 'Vyhledávání firem',
        body: 'Systém prochází mapy, firemní rejstříky a další veřejné zdroje podle vašeho zadání. Žádné nakoupené databáze ani staré seznamy kontaktů.',
      },
      {
        title: 'Rozbor webu firmy',
        body: 'Než vznikne e-mail, systém stáhne a přečte web každé firmy. Výsledkem je přehled toho, čím se firma zabývá a na co v oslovení navázat.',
      },
      {
        title: 'Napsání osobní zprávy',
        body: 'Na základě rozboru webu vznikne zpráva, která mluví konkrétně k dané firmě. Ne „Dobrý den, jmenuji se…“, ale „Všiml jsem si, že se zaměřujete na…“.',
      },
      {
        title: 'LinkedIn a navázání',
        body: 'Souběžně s e-mailem systém pošle žádost o spojení na LinkedIn s osobní zprávou a po stanovené době slušně připomene.',
      },
    ],
    notSaas: {
      title: 'Není to nástroj k pronájmu',
      body: 'Nekupujete si přístup do aplikace, kterou musíte sami obsluhovat. Je to služba — nastavíme, spustíme a průběžně ladíme za vás. Platíte za výsledky, ne za další přihlašovací údaje.',
    },
    team: {
      title: 'Za službou je Sales Robots s.r.o.',
      body: 'Jsme česká firma, která staví automatizované obchodní systémy. SalesAgent.cz je naše služba na aktivní oslovování firem. Sales Robots (salesrobots.cz) řeší opačný směr — návštěvníky, kteří přijdou na váš web sami.',
    },
  },
  contact: {
    title: 'Pojďme si zavolat.',
    subtitle:
      'Vyhraďte si třicet minut. Projdeme váš trh a obor a ukážeme, jak by oslovování vypadalo konkrétně u vás.',
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
    tagline: 'Aktivní oslovování firem jako služba.',
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
