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

export const ARTICLE_PATH: Record<Loc, string> = {
  cs: '/blog/jak-reaktivovat-neaktivni-klienty',
  en: '/blog/how-to-win-back-dormant-b2b-customers',
}

const DATE_ISO = '2026-10-05'

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
    sections: Section[]
    faqTitle: string
    faqs: { q: string; a: string }[]
    related: { href: string; label: string }[]
    relatedTitle: string
    headline: string
    schemaDesc: string
    inLanguage: string
    productHref: string
    contactHref: string
    blogHref: string
    blogLabel: string
  }
> = {
  cs: {
    meta: {
      title: 'Jak reaktivovat neaktivní klienty: návod pro B2B (2026)',
      description:
        'Návod pro B2B firmy s databází klientů, kteří dlouho nenakoupili: segmentace, důvody odchodu, telefon, e-mail, LinkedIn, hotové šablony a měření výsledků.',
      keywords: [
        'jak reaktivovat neaktivní klienty',
        'reaktivace klientů',
        'reaktivace zákazníků B2B',
        'neaktivní zákazníci',
        'win-back klienti',
        'oživení databáze klientů',
        'reaktivační hovor',
      ],
      ogTitle: 'Jak reaktivovat neaktivní klienty: návod pro B2B',
      ogDescription: 'Segmentace, důvody odchodu, telefon, e-mail, LinkedIn, šablony a měření — pro Česko i Slovensko.',
    },
    crumb: 'Reaktivace klientů',
    eyebrow: 'B2B obchod · Reaktivace klientů',
    h1: 'Jak reaktivovat neaktivní klienty: návod krok za krokem',
    byline: '5. října 2026 · Petr Kubíček · 11 minut čtení · platí pro Česko i Slovensko',
    answer:
      'Reaktivace je obvykle levnější a rychlejší než získávání nového zájemce, protože klienta znáte, máte jeho data a on zná vás. Skládá se z pěti kroků: vybrat segment neaktivních klientů, zjistit důvod, proč přestali kupovat, osobně je oslovit (telefon, e-mail, LinkedIn), s odstupem navázat a zájemce předat obchodníkovi. Nejdůležitější je hovor — upřímný rozhovor, který zjistí, co se u klienta změnilo, ne hned prodejní nabídka.',
    boxTitle: 'Nemáte kapacitu to dělat sami?',
    boxText:
      'Pokud obchodník na starou databázi nemá čas, můžeme reaktivaci dělat externě pro české i slovenské klienty — včetně hovorů.',
    boxButton: 'Domluvit konzultaci',
    sections: [
      {
        h2: 'Kdo je neaktivní klient a jak ho najít v CRM nebo fakturách',
        blocks: [
          {
            t: 'p',
            text: 'Neaktivní klient je zákazník, který dříve nakoupil a delší dobu už neobjednal. „Delší“ není pro každou firmu stejné. U spotřebního materiálu se nákup opakuje měsíčně, u servisní smlouvy ročně a u investičního celku jednou za několik let. Jako pravidlo palce vezměte obvyklý interval mezi nákupy u daného klienta a tu dobu zhruba zdvojnásobte. Klient, který přestal dodržovat svůj rytmus, je kandidát na reaktivaci.',
          },
          {
            t: 'p',
            text: 'Data většinou stačí vytáhnout z CRM nebo z fakturačního systému. Potřebujete u každé firmy: datum posledního nákupu, celkovou nebo průměrnou hodnotu nákupů, počet objednávek (frekvenci), kontaktní osobu a to, co kupovala. Podle toho databázi rozdělíte do segmentů, protože každý má jiný přístup.',
          },
          {
            t: 'table',
            head: ['Segment', 'Jak ho poznáte', 'Přístup'],
            rows: [
              ['Dříve důležití klienti', 'Vysoká hodnota nebo pravidelné nákupy, pak delší pauza', 'Osobní telefonát od obchodníka nebo majitele, pak e-mail. Cíl je rozhovor, ne nabídka.'],
              ['Střední a nepravidelní', 'Několik nákupů, nepravidelný rytmus', 'Telefon + e-mail + LinkedIn v několika vlnách, podle šablon níže.'],
              ['Jednorázoví a malí', 'Jeden nákup nebo nízká hodnota', 'E-mail a LinkedIn; telefon jen u těch, kdo odpoví nebo odpovídají cílovému profilu.'],
              ['Neplatné kontakty', 'E-maily se vrací, osoba odešla, firma zanikla', 'Ověřit v obchodním rejstříku (ARES, na Slovensku Register účtovných závierok / ORSR), vyřadit nebo dohledat nový kontakt.'],
            ],
          },
        ],
      },
      {
        h2: 'Proč klienti přestali kupovat (a jak se to dozvíte)',
        blocks: [
          {
            t: 'p',
            text: 'Než začnete cokoli posílat, ujasněte si, že neaktivita má příčinu, kterou neznáte. Hovor je k tomu nejlepší nástroj: v e-mailu klient napíše „děkuji, nemáme zájem“, po telefonu řekne skutečný důvod. Nejčastější důvody v B2B jsou tyto:',
          },
          {
            t: 'ul',
            items: [
              'Odešel zaměstnanec. Člověk, který u vás nakupoval, ve firmě už není. Nový kolega vás nezná a vy nevíte, kdo to dnes řeší. Je to jeden z nejčastějších důvodů a zároveň nejlépe řešitelný — stačí zjistit správnou osobu.',
              'Jiný projekt nebo priority. Potřeba nezmizela, ale posunula se. Firma řeší něco důležitějšího a vaše téma čeká. Zeptejte se, kdy se to uvolní, a domluvte konkrétní termín dalšího kontaktu.',
              'Koupili jinde. Změnil se dodavatel kvůli ceně, dostupnosti nebo doporučení. Zeptejte se, jak jsou spokojení, a nezapomeňte, že nespokojenost se objeví později.',
              'Nespokojenost nebo nevyřešený problém. Reklamace, zpoždění nebo pocit, že se jim nikdo nevěnoval. Tady je hovor nutný: bez omluvy a pochopení se nic neotevře.',
              'Změna ve firmě. Převzetí, restrukturalizace, jiné zaměření nebo ukončení činnosti. Ověřte v rejstříku, zda firma stále existuje a kdo ji vede.',
              'Dlouhý nákupní cyklus. U dražších produktů nebo služeb další nákup prostě přijde až za měsíce či roky. Takový klient není ztracený, jen čeká.',
              'Nikdo se neozval. Klient zůstal bez kontaktu, vypadl z rytmu a nikdo to nehlídal. Nejčastější a nejjednodušší důvod.',
            ],
          },
          {
            t: 'box',
            title: 'Co neříkat',
            text: 'Vyhněte se větám „dlouho jste u nás nenakoupili“, „jen se připomínám“ a „máme pro vás slevu“. První zní jako výtka, druhá nic neříká a třetí signalizuje, že jde jen o prodej. Mluvte o jejich situaci, ne o svém poklesu tržeb.',
          },
        ],
      },
      {
        h2: 'Hovor je klíč: jak s klientem mluvit',
        blocks: [
          { t: 'img', src: '/blog/reaktivace-telefonat.jpg', alt: 'Telefonát s neaktivním klientem — rozhovor je klíčem k reaktivaci' },
          {
            t: 'p',
            text: 'U B2B reaktivace rozhoduje lidský hovor. Cíl prvního telefonátu není prodat, ale porozumět: co se u klienta změnilo, kdo to dnes řeší a co by muselo platit, aby se spolupráce obnovila. Z tohoto rozhovoru vzniká i užitečná zpětná vazba pro váš produkt.',
          },
          {
            t: 'tpl',
            title: 'Úvod hovoru',
            text: 'Dobrý den, [jméno], tady [vaše jméno] z [firma]. Volám několika klientům, se kterými jsme dříve spolupracovali, a nechci vás zdržovat — chci se jen zeptat, jak to u vás dnes vypadá s [oblast]. Máte minutku?',
          },
          {
            t: 'ol',
            items: [
              'Jak to s [oblast] řešíte dnes?',
              'Co se od naší poslední spolupráce změnilo — v lidech, v prioritách?',
              'Bylo něco, co vám u nás nesedělo? (Ptejte se bez obhajování.)',
              'Kdo by to dnes měl ve firmě na starosti, pokud ne vy?',
              'Kdy se to bude znovu řešit? Mohu se ozvat v [měsíc]?',
            ],
          },
          {
            t: 'p',
            text: 'Hovor vždy zakončete konkrétním dalším krokem: schůzkou, zasláním podkladu, doporučením na správnou osobu nebo dohodnutým termínem, kdy se ozvete. Slovenským klientům volejte slovensky nebo česky podle toho, v čem se dosud domlouváte — obě řeči jsou v B2B běžně srozumitelné.',
          },
          {
            t: 'table',
            head: ['Co klient řekne', 'Jak odpovědět'],
            rows: [
              ['„Ten, kdo to řešil, už u nás nepracuje.“', '„Rozumím, děkuji. Můžete mi říct, kdo to dnes má na starosti, nebo koho se zeptat?“'],
              ['„Nakupujeme jinde.“', '„V pořádku. A jak jste spokojení? Mohu se za půl roku znovu ozvat, kdyby se něco změnilo?“'],
              ['„Teď nemáme čas, řešíme jiný projekt.“', '„Chápu. Kdy se to podle vás uvolní? Poznamenám si to a ozvu se v tom termínu.“'],
              ['„Nebyli jsme úplně spokojení.“', '„Děkuji, že to říkáte. Řekl byste mi, co přesně se stalo? Chci to předat dál a napravit.“'],
              ['„Pošlete nabídku.“', '„Rád. Aby byla k věci, můžu se zeptat, co byste teď potřebovali a v jakém termínu?“'],
            ],
          },
        ],
      },
      {
        h2: 'Kanály a kadence: telefon, e-mail, LinkedIn',
        blocks: [
          {
            t: 'ul',
            items: [
              'Telefon (cold call) je nejúčinnější u dříve důležitých a dražších klientů. Dává porozumění, na které se e-mail nezeptá. Hodí se pro segment A a vybrané B.',
              'E-mail nese informaci a umožní klientovi reagovat v klidu. Hodí se pro všechny segmenty jako první dotek a jako navázání po hovoru.',
              'LinkedIn pomáhá najít novou kontaktní osobu, když původní odešla, a navázat osobní kontakt. Hodí se pro B2B rozhodovatele.',
            ],
          },
          {
            t: 'p',
            text: 'Doporučená kadence je zhruba 3–4 kontakty v časovém odstupu, ne všechny najednou. Orientační rozvrh: první e-mail, o několik dní později telefon, po dalším týdnu follow-up e-mail nebo zpráva na LinkedInu a o dalších pár dní později uzavírací e-mail. Přesné intervaly si upravte podle cyklu klienta. Po odpovědi (zájem i odmítnutí) kadenci okamžitě zastavte.',
          },
        ],
      },
      {
        h2: 'Šablony e-mailů, které můžete použít',
        blocks: [
          { t: 'p', text: 'Zkopírujte, doplňte v hranatých závorkách a upravte tón podle toho, jak s klientem obvykle komunikujete. Ke každé zprávě patří odhlášení z dalších zpráv. Před odesláním ověřte, že můžete dané adresy oslovit (viz část o právu níže).' },
          {
            t: 'tpl',
            title: 'E-mail 1: první kontakt',
            text: 'Předmět: Ozvu se po delší době — jak to u vás vypadá s [oblast]?\n\nDobrý den, [oslovení],\n\npracovali jsme spolu na [co] a po [období] jsme se přestali potkávat. Nechci vám nic vnucovat, spíš mě zajímá, jak to u vás dnes vypadá — jestli se situace změnila, nebo jestli to řešíte jinde.\n\nKdyž je [oblast] stále aktuální, rád vám ukážu, co je u nás nového ([jedna konkrétní věc]). Když ne, napište mi prosím jednou větou proč — pomůže mi to.\n\nMohu se ozvat telefonicky v [den/čas]?\n\n[Podpis]',
          },
          {
            t: 'tpl',
            title: 'E-mail 2: navázání (po několika dnech)',
            text: 'Předmět: Re: Ozvu se po delší době\n\nDobrý den, [oslovení],\n\nnavazuji na minulý e-mail. Možná zapadl, nebo se u vás změnila kontaktní osoba — pokud to už nemáte na starosti, stačí mi napsat, kdo to řeší dnes.\n\nPřikládám [krátká novinka / přehled / ukázka], kterou bych vám rád ukázal. Stačí 15 minut, pokud to dává smysl.\n\n[Podpis]',
          },
          {
            t: 'tpl',
            title: 'E-mail 3: uzavírací',
            text: 'Předmět: Mám vás ponechat v evidenci?\n\nDobrý den, [oslovení],\n\nozývám se naposledy. Pokud téma teď není aktuální, nebudu vás dál obtěžovat. Kdyby se to v budoucnu změnilo, stačí odpovědět na tento e-mail. A pokud je to otázka pozdějšího termínu, napište mi, kdy se mám ozvat.\n\nDěkuji a přeji hezký den.\n\n[Podpis]',
          },
          {
            t: 'p',
            text: 'Další šablony a postupy najdete v samostatných článcích: ',
          },
          { t: 'link', before: 'jak napsat ', anchor: 'český cold e-mail', href: '/blog/cold-email-vzor-cesky', after: ' a ' },
          { t: 'link', before: '', anchor: 'follow-up e-mail se třemi šablonami', href: '/blog/follow-up-email-vzor', after: '.' },
        ],
      },
      {
        h2: 'Nabídka, nebo dotaz? Kdy slevu nedávat',
        blocks: [
          {
            t: 'p',
            text: 'Instinkt většiny firem je vrátit klienta slevou. Je to ale pomalé řešení, které učí klienty čekat na akci a nevysvětluje, proč odešli. Pokud klient odešel kvůli odchodu zaměstnance, jinému projektu nebo dlouhému cyklu, sleva nic nevyřeší. Pokud odešel kvůli ceně, zjistíte to v hovoru a můžete cenu řešit cíleně.',
          },
          {
            t: 'ul',
            items: [
              'Vraťte hodnotu, ne cenu: novinka, která se od posledního nákupu objevila, krátká případová studie z jejich oboru nebo kontrola, zda stávající řešení stále sedí.',
              'Nabídněte rozhovor nebo audit místo nabídky. U dražších produktů se klient stejně rozhoduje podle porozumění, ne podle akce.',
              'Slevu nechte až na konec, jen jako odpověď na reálný cenový důvod, který klient sám zmínil.',
            ],
          },
        ],
      },
      {
        h2: 'Proč to dává ekonomicky smysl',
        blocks: [
          {
            t: 'p',
            text: 'Reaktivace je nejlevnější způsob, jak získat obchod, protože nezačínáte od nuly. Klient vás už zná, mezi vámi proběhla spolupráce a vy máte jeho data, historii a často i referenci. Nemusíte kupovat kontakty, budovat důvěru od základu ani vysvětlovat, co děláte.',
          },
          {
            t: 'ul',
            items: [
              'Nižší náklady než nový lead: odpadá nákup dat a reklamy, hledání kontaktu od základu i vysvětlování firmy. Zbývá čas na oslovení a hovor.',
              'Kratší cesta k obchodu: klient zná produkt a vaši firmu, takže rozhodnutí bývá rychlejší než u cizího zájemce.',
              'U dražšího produktu nebo služby zvlášť: jeden klient má vysokou hodnotu a nákupní cyklus je dlouhý, takže i pár obnovených vztahů může mít výrazný dopad na tržby.',
              'Zpětná vazba zdarma: hovory ukážou, proč lidé odcházejí. To jsou informace pro produkt, cenu i péči o stávající klienty.',
              'Čistší databáze: zjistíte, které kontakty jsou platné, kdo odešel a kdo teď rozhoduje. Další kampaně pak běží na kvalitnějších datech.',
              'Úleva obchodníkovi: oslovení a první kvalifikaci může dělat někdo jiný a obchodník dostane jen zájemce.',
            ],
          },
          {
            t: 'p',
            text: 'Jednoduchý výpočet, který si můžete dosadit: potenciál = počet neaktivních klientů × podíl, který se podaří reaktivovat × průměrná hodnota zakázky (nebo marže) − náklady na reaktivaci. Podíl reaktivovaných dopředu neznáte, proto začněte malým vzorkem několika desítek klientů, změřte skutečnou odezvu a teprve potom škálujte.',
          },
          {
            t: 'box',
            title: 'B2B i dražší B2C',
            text: 'Návod je psaný pro B2B, ale princip platí i u B2C, pokud jde o dražší produkt nebo službu s dlouhým cyklem (například pojištění, zařízení nebo služby s vyšší hodnotou). U fyzických osob jsou pravidla pro obchodní sdělení přísnější, takže si je ověřte předem. U levných produktů se telefon obvykle nevyplatí a lepší je e-mail.',
          },
        ],
      },
      {
        h2: 'Měření: co sledovat a co čekat',
        blocks: [
          {
            t: 'ul',
            items: [
              'Míra doručení a platnosti kontaktů (kolik e-mailů a čísel nefunguje).',
              'Míra odpovědí podle segmentu a kanálu.',
              'Počet navázaných rozhovorů a domluvených schůzek.',
              'Počet reaktivovaných zakázek a jejich hodnota.',
              'Důvody neaktivity: počet výskytů z hovorů (odešel zaměstnanec, jiný projekt, koupili jinde atd.).',
            ],
          },
          {
            t: 'p',
            text: 'Realistické očekávání nelze dopředu vyčíslit, protože závisí na oboru, na tom, jak dlouho byli klienti neaktivní, a na tom, v jakém stavu je databáze. První vlny jsou hlavně o zjištění: které kontakty jsou platné a proč lidé odešli. Tržby přicházejí až po vyhodnocení a nastavení dalších vln. Slibované konkrétní procento vám neříkáme záměrně — postup změříte na vlastním vzorku.',
          },
        ],
      },
      {
        h2: 'Právo: souhlas a stávající zákazníci',
        blocks: [
          {
            t: 'link',
            before: 'E-mailová obchodní sdělení lze v ČR podle § 7 zákona č. 480/2004 Sb. zasílat jen s předchozím souhlasem příjemce, i na firemní a obecné adresy. Výjimku mají stávající zákazníci, jejichž kontakt jste získali při prodeji a kterým nabízíte obdobné vlastní produkty, s možností jednoduše odmítnout. U klientů, kteří nekoupili dlouho, nebo u kontaktů bez prodeje si výjimku ověřte. Odhlášení nenahrazuje souhlas. Podrobnosti najdete v článku ',
            anchor: 'GDPR a cold e-mail',
            href: '/blog/gdpr-a-cold-email',
            after: '. Nejde o právní poradenství — nastavení s ohledem na vaše podmínky a zdroj dat si ověřte u právníka.',
          },
        ],
      },
      {
        h2: 'Sami, nebo externě?',
        blocks: [
          {
            t: 'p',
            text: 'Interně to zvládnete, pokud je databáze malá, obchodník má kapacitu volat a vy máte aktuální data. Můžete začít jednou vlnou na nejdůležitějším segmentu a výsledek změřit.',
          },
          {
            t: 'p',
            text: 'Externí řešení dává smysl, když databáze je větší, obchodník nemá čas, chybí rytmus pravidelných vln nebo potřebujete hovory v češtině i slovenštině. Pak je rozumné nechat oslovení a první kvalifikaci na někom jiném a obchodníkovi předat jen zájemce.',
          },
          {
            t: 'link',
            before: 'Pokud to chcete delegovat, podívejte se na ',
            anchor: 'reaktivace klientů jako služba',
            href: '/cs/reaktivace-klientu',
            after: ' — pracujeme pro české i slovenské klienty.',
          },
        ],
      },
    ],
    faqTitle: 'Časté otázky',
    faqs: [
      { q: 'Co je reaktivace klientů?', a: 'Je to systematické oslovování zákazníků, kteří dříve nakupovali, ale delší dobu nic neobjednali. Cílem je obnovit komunikaci a spolupráci, zjistit důvod odchodu a předat zájemce obchodníkovi.' },
      { q: 'Kdy je klient neaktivní?', a: 'Když se vymyká svému obvyklému rytmu nákupů. Orientačně je to přibližně dvojnásobek běžného intervalu mezi nákupy u daného klienta; u firem s dlouhým cyklem to může být rok i více. Hranici nastavte podle vlastních dat.' },
      { q: 'Jak často neaktivní klienty oslovovat?', a: 'Doporučuje se pár kontaktů (zhruba 3–4) rozložených v čase, ne všechny najednou, a to různými kanály. Po odpovědi nebo odmítnutí kadenci zastavte. Přesné intervaly upravte podle nákupního cyklu klienta.' },
      { q: 'Je reaktivace klientů v souladu se zákonem?', a: 'E-mail v ČR vyžaduje podle § 7 zákona č. 480/2004 Sb. předchozí souhlas příjemce, i u firemních adres. Výjimku mají stávající zákazníci s obdobnými vlastními produkty a možností odmítnout. Telefon a další kanály mají vlastní pravidla. Nejde o právní poradenství, konkrétní nastavení si ověřte u právníka.' },
      { q: 'Čím se reaktivace liší od newsletteru?', a: 'Newsletter je jednosměrné hromadné sdělení. Reaktivace je osobní: telefonát a individuální e-mail, které zjistí, co se u klienta změnilo, a směřují k hovoru nebo schůzce.' },
      { q: 'Dá se reaktivace použít i u dražšího B2C produktu nebo služby?', a: 'Ano, pokud je produkt dražší a nákupní cyklus dlouhý. Přístup je podobný, ale u fyzických osob jsou pravidla pro obchodní sdělení přísnější, takže je nejprve ověřte.' },
    ],
    related: [
      { href: '/cs/reaktivace-klientu', label: 'Reaktivace klientů jako služba' },
      { href: '/blog/jak-rozjet-a-zautomatizovat-b2b-obchod', label: 'Jak rozjet a zautomatizovat B2B obchod' },
    ],
    relatedTitle: 'Související',
    headline: 'Jak reaktivovat neaktivní klienty: návod krok za krokem',
    schemaDesc: 'Návod pro B2B firmy: segmentace neaktivních klientů, důvody odchodu, telefon, e-mail a LinkedIn, šablony a měření.',
    inLanguage: 'cs',
    productHref: '/cs/reaktivace-klientu',
    contactHref: '/cs/contact',
    blogHref: '/blog',
    blogLabel: 'Blog',
  },
  en: {
    meta: {
      title: 'How to Reactivate Dormant B2B Customers: A Guide (2026)',
      description:
        'A guide for B2B companies in the Czech Republic and Slovakia: segment dormant customers, find out why they left, call, email, LinkedIn, templates, measurement.',
      keywords: [
        'how to reactivate dormant customers',
        'win back dormant B2B customers',
        'customer reactivation B2B',
        'reactivate inactive clients',
        'dormant customer database',
        'win-back call script',
      ],
      ogTitle: 'How to Win Back Dormant B2B Customers: A Step-by-Step Guide',
      ogDescription: 'Segmentation, reasons for churn, calls, email, LinkedIn, templates and measurement, for Czech and Slovak B2B clients.',
    },
    crumb: 'Client reactivation',
    eyebrow: 'B2B sales · Client reactivation',
    h1: 'How to win back dormant B2B customers: a step-by-step guide',
    byline: '5 October 2026 · Petr Kubíček · 11 min read · for Czech and Slovak clients',
    answer:
      'Reactivation is usually cheaper and faster than winning a brand-new lead, because you know the customer, you have their data, and they know you. It has five steps: choose a segment of dormant customers, find out why they stopped buying, contact them personally (phone, email, LinkedIn), follow up over time, and hand interested clients to a salesperson. The most important part is the conversation: an honest call that finds out what changed, not an immediate sales pitch.',
    boxTitle: 'No capacity to do it yourself?',
    boxText:
      'If your sales team has no time for the old database, we can run reactivation externally for Czech and Slovak clients, including the calls.',
    boxButton: 'Book a free consultation',
    sections: [
      {
        h2: 'What a dormant customer is and how to find them in your CRM or invoices',
        blocks: [
          {
            t: 'p',
            text: 'A dormant customer is someone who bought in the past and has not ordered for a long time. How long “long” is depends on your business. Consumables repeat monthly, service contracts yearly and capital purchases once in several years. As a rule of thumb, take the usual gap between purchases for that customer and roughly double it. A customer who breaks their own rhythm is a candidate for reactivation.',
          },
          {
            t: 'p',
            text: 'Most of the data can be exported from the CRM or invoicing system. For each company you need: date of last purchase, total or average value, number of orders (frequency), contact person and what they bought. Use it to split the database into segments, because each needs a different approach.',
          },
          {
            t: 'table',
            head: ['Segment', 'How to spot it', 'Approach'],
            rows: [
              ['Formerly important clients', 'High value or regular purchases, then a long pause', 'Personal call from a salesperson or the owner, then email. The goal is a conversation, not an offer.'],
              ['Mid-value, irregular', 'Several purchases, irregular rhythm', 'Phone + email + LinkedIn in several waves, using the templates below.'],
              ['One-off and small', 'One purchase or low value', 'Email and LinkedIn; phone only for those who reply or match your target profile.'],
              ['Invalid contacts', 'Emails bounce, the person left, the company closed', 'Check the business register (ARES in the Czech Republic, ORSR in Slovakia), remove or find a new contact.'],
            ],
          },
        ],
      },
      {
        h2: 'Why customers stopped buying (and how you find out)',
        blocks: [
          {
            t: 'p',
            text: 'Before you send anything, accept that the inactivity has a cause you do not know yet. A call is the best tool: by email a customer writes “thanks, not interested”, by phone they give the real reason. The most common B2B reasons are:',
          },
          {
            t: 'ul',
            items: [
              'The employee left. The person who bought from you no longer works there. The new colleague does not know you, and you do not know who handles it now. This is one of the most common reasons and one of the easiest to solve: find the right person.',
              'Another project or priority. The need did not disappear, it moved. The company is busy with something more urgent and your topic waits. Ask when it frees up and agree a concrete date for the next contact.',
              'They bought elsewhere. A different supplier because of price, availability or a recommendation. Ask how satisfied they are; dissatisfaction often shows up later.',
              'Dissatisfaction or an unresolved problem. A complaint, a delay, or a feeling that nobody cared. A call is essential here: without listening and an apology nothing reopens.',
              'A change in the company. Acquisition, restructuring, a new focus or closure. Check the register to see whether the company still exists and who runs it.',
              'A long buying cycle. For expensive products or services the next purchase simply comes months or years later. That customer is not lost, just waiting.',
              'Nobody followed up. The customer was left without contact and dropped out of rhythm. The most common and the simplest reason.',
            ],
          },
          {
            t: 'box',
            title: 'What not to say',
            text: 'Avoid “you have not bought from us for a long time”, “just reminding you” and “we have a discount for you”. The first sounds like a reproach, the second says nothing and the third signals that it is only about selling. Talk about their situation, not about your drop in revenue.',
          },
        ],
      },
      {
        h2: 'The call is the key: how to talk to the customer',
        blocks: [
          { t: 'img', src: '/blog/reaktivace-telefonat.jpg', alt: 'A phone call with a dormant customer — the conversation is the key to reactivation' },
          {
            t: 'p',
            text: 'In B2B reactivation the human call decides. The goal of the first call is not to sell but to understand: what changed at the customer, who handles it now and what would need to be true for the cooperation to resume. That conversation also gives you honest feedback on your product.',
          },
          {
            t: 'tpl',
            title: 'Call opening',
            text: 'Hello [name], this is [your name] from [company]. I am calling a few clients we worked with before, and I do not want to take your time — I only want to ask how things look on your side with [topic]. Do you have a minute?',
          },
          {
            t: 'ol',
            items: [
              'How do you handle [topic] today?',
              'What has changed since we last worked together, in people or priorities?',
              'Was there anything that did not work for you with us? (Ask without defending.)',
              'Who would handle this today, if not you?',
              'When will this come up again? May I call in [month]?',
            ],
          },
          {
            t: 'p',
            text: 'Always close the call with a concrete next step: a meeting, a document sent, a referral to the right person or an agreed date for the next contact. For Slovak clients call in Slovak or Czech, whichever you already use together; both are widely understood in B2B.',
          },
          {
            t: 'table',
            head: ['What the customer says', 'How to reply'],
            rows: [
              ['“The person who handled it no longer works here.”', '“Understood, thank you. Could you tell me who handles it now, or who I should ask?”'],
              ['“We buy elsewhere now.”', '“That is fine. How satisfied are you? May I check in again in six months in case something changes?”'],
              ['“We are busy, another project.”', '“I understand. When do you expect it to free up? I will note it and get back to you then.”'],
              ['“We were not entirely satisfied.”', '“Thank you for saying so. Could you tell me what exactly happened? I want to pass it on and fix it.”'],
              ['“Send me an offer.”', '“Happy to. To keep it relevant, could I ask what you need now and by when?”'],
            ],
          },
        ],
      },
      {
        h2: 'Channels and cadence: phone, email, LinkedIn',
        blocks: [
          {
            t: 'ul',
            items: [
              'Phone (cold calls) works best for formerly important and higher-value customers. It gives understanding that an email cannot ask for. Use it for the top segment and selected mid-value clients.',
              'Email carries information and lets the customer respond calmly. It suits all segments as a first touch and as a follow-up after the call.',
              'LinkedIn helps find a new contact person when the old one left, and builds a personal connection. It suits B2B decision-makers.',
            ],
          },
          {
            t: 'p',
            text: 'A sensible cadence is about 3–4 contacts spread over time, not all at once. As a rough plan: first email, a phone call a few days later, a follow-up email or LinkedIn message a week after that, and a closing email a few days later. Adjust intervals to the customer’s cycle. Stop immediately once the customer replies, whether interested or not.',
          },
        ],
      },
      {
        h2: 'Email templates you can use',
        blocks: [
          { t: 'p', text: 'Copy them, fill in the square brackets and adjust the tone to how you normally talk to the customer. Every message should include an opt-out. Before sending, confirm that you may contact these addresses (see the legal section below). For Slovak clients, write in Slovak or Czech as you usually do.' },
          {
            t: 'tpl',
            title: 'Email 1: first contact',
            text: 'Subject: Checking in after a while — how are things with [topic]?\n\nHello [name],\n\nwe worked together on [what], and after [period] we lost touch. I do not want to push anything — I am simply interested in how things look for you today, whether your situation has changed or you handle it elsewhere now.\n\nIf [topic] is still relevant, I would be glad to show you what is new on our side ([one concrete thing]). If not, please reply in one sentence with why — it helps me.\n\nMay I call you on [day/time]?\n\n[Signature]',
          },
          {
            t: 'tpl',
            title: 'Email 2: follow-up (after a few days)',
            text: 'Subject: Re: Checking in after a while\n\nHello [name],\n\nfollowing up on my previous email. It may have been buried, or the contact person may have changed — if you no longer handle it, just let me know who does today.\n\nI am attaching [a short update / overview / example] that I would be glad to walk you through. 15 minutes is enough, if it makes sense.\n\n[Signature]',
          },
          {
            t: 'tpl',
            title: 'Email 3: closing',
            text: 'Subject: Should I take you off my list?\n\nHello [name],\n\nthis is my last note. If the topic is not relevant now, I will not bother you again. If that changes, simply reply to this email. And if it is a question of timing, tell me when to get back to you.\n\nThank you, and have a good day.\n\n[Signature]',
          },
        ],
      },
      {
        h2: 'Offer or question? When not to give a discount',
        blocks: [
          {
            t: 'p',
            text: 'Most companies instinctively try to win a customer back with a discount. It is a slow fix: it teaches customers to wait for promotions and does not explain why they left. If the customer left because an employee moved on, started another project or has a long cycle, a discount solves nothing. If they left over price, you will learn it on the call and can address it directly.',
          },
          {
            t: 'ul',
            items: [
              'Return value, not price: something new since their last purchase, a short case study from their industry, or a check whether the current solution still fits.',
              'Offer a conversation or an audit instead of an offer. For expensive products customers decide on understanding, not on a promotion.',
              'Keep discounts for the end, only as an answer to a real price reason the customer mentioned.',
            ],
          },
        ],
      },
      {
        h2: 'Why it makes economic sense',
        blocks: [
          {
            t: 'p',
            text: 'Reactivation is usually the cheapest way to get business back because you do not start from zero. The customer already knows you, you have worked together, and you have their data, history and often a reference. You do not need to buy contacts, build trust from scratch or explain what you do.',
          },
          {
            t: 'ul',
            items: [
              'Lower cost than a new lead: no data purchase or advertising, no finding the contact from scratch, no explaining the company. What remains is time for outreach and a call.',
              'A shorter path to a deal: the customer knows your product and company, so the decision is usually faster than with a stranger.',
              'Especially for expensive products or services: a single customer has high value and the buying cycle is long, so even a few restored relationships can have a visible effect on revenue.',
              'Free feedback: calls show why people leave. That is information for product, pricing and customer care.',
              'A cleaner database: you learn which contacts are valid, who left and who decides now. Later campaigns then run on better data.',
              'Relief for sales: outreach and first qualification can be done by someone else, and your salesperson gets only interested clients.',
            ],
          },
          {
            t: 'p',
            text: 'A simple calculation you can fill in yourself: potential = number of dormant customers × share you manage to reactivate × average order value (or margin) − cost of reactivation. You do not know the share in advance, so start with a small sample of a few dozen customers, measure the real response and only then scale.',
          },
          {
            t: 'box',
            title: 'B2B and higher-priced B2C',
            text: 'This guide is written for B2B, but the principle also works for B2C when the product or service is expensive and the cycle is long (for example insurance, equipment or high-value services). Rules for commercial messages to individuals are stricter, so check them first. For low-priced products a phone call usually does not pay off and email is better.',
          },
        ],
      },
      {
        h2: 'Measurement: what to track and what to expect',
        blocks: [
          {
            t: 'ul',
            items: [
              'Delivery rate and validity of contacts (how many emails and numbers do not work).',
              'Reply rate by segment and channel.',
              'Number of conversations held and meetings booked.',
              'Number of reactivated orders and their value.',
              'Reasons for inactivity: count of mentions from calls (employee left, other project, bought elsewhere, and so on).',
            ],
          },
          {
            t: 'p',
            text: 'Realistic expectations cannot be quantified in advance because they depend on your industry, how long customers have been inactive and the state of your database. The first waves are mainly about learning which contacts are valid and why people left. Revenue follows after you review the results and set the next waves. We deliberately do not promise a specific percentage; measure it on your own sample.',
          },
        ],
      },
      {
        h2: 'Legal: consent and existing customers',
        blocks: [
          {
            t: 'link',
            before: 'In the Czech Republic, § 7 of Act No. 480/2004 Coll. allows commercial email only with the recipient\'s prior consent, including company and generic addresses. The exception is for existing customers whose contact you obtained through a sale and to whom you offer similar own products, with an easy opt-out. For clients who have not bought for a long time, or contacts without a sale, check the exception. An opt-out does not replace consent. This guide on ',
            anchor: 'GDPR and cold email',
            href: '/blog/gdpr-a-cold-email',
            after: ' is in Czech. This is not legal advice; check the set-up with a lawyer for your terms and data source.',
          },
        ],
      },
      {
        h2: 'Do it yourself or externally?',
        blocks: [
          {
            t: 'p',
            text: 'You can do it in-house if the database is small, your salesperson has capacity to call and your data is current. Start with one wave on your most important segment and measure the result.',
          },
          {
            t: 'p',
            text: 'An external service makes sense when the database is larger, sales has no time, there is no rhythm of regular waves, or you need calls in Czech and Slovak. Then it is reasonable to leave outreach and first qualification to someone else and pass only interested clients to your salesperson.',
          },
          {
            t: 'link',
            before: 'If you want to delegate it, see ',
            anchor: 'client reactivation as a service',
            href: '/en/client-reactivation',
            after: ' — we work for Czech and Slovak clients.',
          },
        ],
      },
    ],
    faqTitle: 'FAQ',
    faqs: [
      { q: 'What is client reactivation?', a: 'It is the systematic outreach to customers who used to buy but have not ordered for a long time. The goal is to restart communication and cooperation, learn why they left and hand interested clients to a salesperson.' },
      { q: 'When is a customer considered dormant?', a: 'When they break their usual buying rhythm. As a rough rule it is about double the normal gap between purchases for that customer; for firms with long cycles it can be a year or more. Set the threshold from your own data.' },
      { q: 'How often should dormant customers be contacted?', a: 'A few contacts (roughly 3–4) spread over time, not all at once, across different channels. Stop after a reply or a refusal. Adjust intervals to the customer’s buying cycle.' },
      { q: 'Is client reactivation legally compliant?', a: 'Email in the Czech Republic needs the recipient\'s prior consent under § 7 of Act No. 480/2004 Coll., including for company addresses. Existing customers with similar own products and an easy opt-out are an exception. Phone and other channels have their own rules. This is not legal advice, so check the specific set-up with a lawyer.' },
      { q: 'How is reactivation different from a newsletter?', a: 'A newsletter is a one-way mass message. Reactivation is personal: a call and an individual email that find out what changed at the customer and lead to a conversation or a meeting.' },
      { q: 'Can reactivation be used for a higher-priced B2C product or service?', a: 'Yes, when the product is expensive and the buying cycle is long. The approach is similar, but rules for commercial messages to individuals are stricter, so check them first.' },
    ],
    related: [
      { href: '/en/client-reactivation', label: 'Client reactivation as a service' },
      { href: '/en/guides/czech-market-entry-for-b2b-companies', label: 'Czech market entry playbook' },
    ],
    relatedTitle: 'Related',
    headline: 'How to win back dormant B2B customers: a step-by-step guide',
    schemaDesc: 'A guide for B2B companies in the Czech Republic and Slovakia: segment dormant customers, reasons for churn, phone, email and LinkedIn, templates and measurement.',
    inLanguage: 'en',
    productHref: '/en/client-reactivation',
    contactHref: '/en/contact',
    blogHref: '/en/blog',
    blogLabel: 'Blog',
  },
}

export function reactivationArticleMetadata(loc: Loc): Metadata {
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
      images: [{ url: `${ORIGIN}/blog/automatizace-prodeje.jpg`, width: 640, height: 400, alt: c.h1 }],
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

export default function ReactivationArticle({ loc }: { loc: Loc }) {
  const c = articles[loc]
  const url = `${ORIGIN}${ARTICLE_PATH[loc]}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: c.headline,
    description: c.schemaDesc,
    image: `${ORIGIN}/blog/automatizace-prodeje.jpg`,
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
        <img src="/blog/automatizace-prodeje.jpg" alt={c.h1} style={{ width: '100%', borderRadius: '14px', marginBottom: '40px', display: 'block' }} />
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
