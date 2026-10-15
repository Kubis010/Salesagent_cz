# Brief pro Codex — přepis copy salesagent.cz na nový model

## 0. Cíl v jedné větě
Web dnes prodává ZAVRŽENÝ model „AI systém, který vlastníte / předáme klíče". Přepiš copy na aktuální model: **done-for-them řízená automatizace obchodu** — „externí CSO s AI týmem". My najdeme, oslovíme, zahřejeme a ukážeme produkt přes Prezentéra; **teplou schůzku zavře klientův vlastní obchodník**. My to nasadíme a **řídíme** (ne předáme klíče a nazdar).

**Toto je copy/positioning úkol, ne redesign.** Neměň layout, komponenty, styly ani strukturu Translations objektu (klíče). Měň HODNOTY textů. Kde je potřeba přemapovat sekci, je to popsáno níže.

## 1. Positioning — staré → nové (drž se toho u každého textu)
- Staré: „postavíme a PŘEDÁME vám systém, je VÁŠ, jednorázově" → Nové: „nasadíme a ŘÍDÍME to za vás, měsíční služba".
- Staré CTA `vlastníte / owned pipeline` → PRYČ všude.
- Kupec = **frustrovaný šéf/majitel**, jehož obchodník neprospektuje. NE „firmy, co chtějí vlastnit pipeline".
- Wedge: „Váš obchodník neprospektuje? Stroj to udělá za něj — on jen zavírá teplé schůzky."
- Jádro: **proaktivní práci (hledání, psaní, zahřátí, demo) jede automat; reaktivní close dělá klientův člověk.** LinkedIn jede přes KLIENTŮV ověřený účet.
- Ceny: setup = levný on-ramp; jádro příjmu = **měsíční managed fee**.

## 2. Kde copy žije (mapa souborů)
- **`lib/i18n/cs.ts`** — hlavní zdroj copy (CS). PRIMÁRNÍ deliverable.
- **`lib/i18n/en.ts`** — MUSÍ mít identický tvar jako cs.ts (`type Translations = typeof cs`). Když změníš tvar v cs.ts (délku pole, přidání/ubrání klíče), MUSÍŠ to zrcadlit v en.ts, jinak spadne build. EN copy přelož věrně dle nového modelu — EN je sekundární, nevymýšlej navíc, jen zrcadli význam.
- **`app/[locale]/page.tsx`** — konzumuje `t.*`. Ale má i HARDCODED stringy k opravě:
  - řádky ~16 a ~23: `generateMetadata` title/description/keywords (obsahují „vlastníte / owned pipeline").
  - řádky ~733 a ~774: JSON-LD FAQPage + FAQ blok se starou otázkou „Co je AI prodejní systém, který vlastníte?" — přepiš dle nového FAQ (sekce 4.8).
- **`app/[locale]/pricing/page.tsx`**, **`how-it-works/page.tsx`**, **`about/page.tsx`** — konzumují `t.*`; zkontroluj, zda nemají hardcoded nadpisy; pokud ano, srovnej s novou copy.
- **`components/RoiCalculator.tsx`** — zkontroluj framing (jestli nepočítá „úsporu vlastnictvím"); uprav popisky, ne logiku. Nízká priorita.
- **`components/home/HeroPipeline.tsx`** + `t.pipelineDemo` — demo pipeline je OK, neřeš (leda label „Váš systém běží" → „Automat běží za vás").

## 3. CO NEMĚNIT
- **NEMAZAT a needitovat `app/blog/**` a `app/[locale]/guides/**`** — to jsou rankující SEO stránky. Nech texty být. (Jen pokud mají v patičce/CTA odkaz na nabídku, může zůstat.)
- Needitovat `middleware.ts`, i18n routing, `next.config.ts`, sitemap/robots.
- Neměnit strukturu komponent ani Tailwind styly.

## 4. Nová CS copy — klíč po klíči (přepiš hodnoty v `lib/i18n/cs.ts`)

### 4.1 nav
- `salesRepCz`: `'Jak to funguje'`  (bylo „Jak to stavíme")
- ostatní nech.

### 4.2 hero
- `badge`: `'Řízená automatizace obchodu'`
- `headline`: `'Váš obchodník neprospektuje?\nStroj to udělá za něj.'`
- `subheadline`: `'Najdeme a oslovíme firmy z vašeho trhu — e-mailem, na LinkedInu i reklamou. Zahřejeme je a ukážeme váš produkt přes interaktivního Prezentéra. Vašemu obchodníkovi přistane teplá schůzka, kterou stačí zavřít. Celé to nasadíme a řídíme za vás.'`
- `cta`: `'Ukažte mi, jak to vypadá'`  (spouští Prezentér / scroll na živou ukázku)
- `ctaSub`: `'nebo si domluvte nezávaznou konzultaci'`
- `pipelineLabel`: `'Automat běží za vás'`
- statsToday/statsReplies nech.

### 4.3 howItWorks  → 3 kroky (POLE zkrať ze 4 na 3; zrcadli v en.ts!)
- `title`: `'Jak to funguje'`
- `subtitle`: `'Proaktivní práci — hledání, psaní, zahřívání — dělá stroj. Váš člověk jen zavírá teplé schůzky, které mu přistanou. Úspěch nezávisí na tom, jestli váš obchodník sám prospektuje.'`
- steps:
  1. `{ number: '01', title: 'Systém najde a osloví', body: 'Najdeme firmy z vašeho ideálního profilu a oslovíme je e-mailem, na LinkedInu (přes váš ověřený účet) i reklamou. Vše personalizované, s follow-upy.' }`
  2. `{ number: '02', title: 'Zahřeje a ukáže produkt', body: 'Zájemce dostane relevantní komunikaci a interaktivní demo Prezentérem postavené na vašem produktu — projde si, co pro něj děláte, ještě než s vámi mluví.' }`
  3. `{ number: '03', title: 'Váš obchodník zavře', body: 'Připravená teplá schůzka přistane vašemu člověku. On zvedne telefon a dojedná — to, co umí a chce. Proaktivitu za něj řeší stroj.' }`

### 4.4 forWhom  (nové ICP — pozor, PRYČ „vlastnit pipeline")
- `title`: `'Pro koho to je'`
- items:
  1. `{ title: 'Firmy s obchodníkem, co neprospektuje', body: 'Platíte člověka, který nedělá nic navíc. Dáme vám stroj, co za něj hledá a oslovuje — on jen zavírá připravené schůzky.' }`
  2. `{ title: 'Firmy, které mají koho na zvednutí telefonu', body: 'Máte aspoň jednoho člověka, co zná byznys a zvládne dojednat teplou schůzku. Zbytek — proaktivní oslovování — jede automat.' }`
  3. `{ title: 'Majitelé, co to chtějí vyřešit systémem', body: 'Nechcete nabírat celé obchodní oddělení ani honit obchodníka. Chcete, aby vám teplé schůzky prostě chodily.' }`

### 4.5 references  (přidej třetí referenci SavvyLockers — POLE prodluž, zrcadli v en.ts)
- Přidej: `{ client: 'SavvyLockers', sector: 'Chytré schránky · B2B', value: '—', result: 'průběžné oslovování a kvalifikace kontaktů' }`
- Whistlelink a Bierbauer nech.

### 4.6 services  (přemapuj: 1. sloupec = co stroj dělá, 2. sloupec = jak to nezávisí na obchodníkovi)
- `title`: `'Co za vás jede'`
- `subtitle`: `'Ne jeden nástroj na jeden krok. Řízený systém přes celý funnel — od hledání firem po teplou schůzku, kterou zavře váš člověk.'`
- `automation` (nech strukturu/ikony/examples, jen texty):
  - `badge`: `'Proaktivní práce'`
  - `title`: `'Celý horní trychtýř jede stroj'`
  - `body`: `'Systém sám vyhledá firmy, obohatí data, osloví přes e-mail i LinkedIn, zahřeje a nabídne demo Prezentérem — a připravenou teplou schůzku předá vašemu obchodníkovi.'`
  - examples nech (jsou věcně OK: scraping, obohacení, outreach, Prezentér, CRM, reporty).
  - `cta`: `'Domluvit konzultaci'`
- `agency` → PŘEMAPUJ na blok „nezávislost na obchodníkovi":
  - `badge`: `'Bez závislosti na vašem člověku'`
  - `title`: `'Vyřízneme nejslabší článek'`
  - `body`: `'Váš obchodník neprospektuje? Nevadí. Proaktivní práci za něj dělá stroj, on jen zavírá teplé schůzky. Úspěch tak nestojí na jeho aktivitě — a my celý systém řídíme a ladíme za vás.'`
  - examples:
    - `{ label: 'Oslovování jede přes VÁŠ ověřený LinkedIn účet — bezpečně a lidsky', icon: 'connect' }`
    - `{ label: 'My systém řídíme a optimalizujeme — vy se ho nedotknete', icon: 'flow' }`
    - `{ label: 'Vašemu obchodníkovi chodí teplé schůzky, ne úkoly navíc', icon: 'enrich' }`
    - `{ label: 'Napojení na sesterské produkty (salesbot, Prezentér, custom dev)', icon: 'chart' }`
  - `cta`: `'Domluvit konzultaci'`

### 4.7 founder  (jemně — pryč „postavím a předám")
- `body`: `'Patnáct let v B2B obchodu a marketingu, roky v seniorních a vedoucích rolích. Automatizaci stavíme na vlastní infrastruktuře — scrapery, LinkedIn automatizace, Prezentér i custom vývoj. Neprodávám cizí nástroj — nasadím vám systém a řídím ho, aby vám chodily teplé schůzky.'`
- credentials: třetí polož změň na `{ value: 'na klíč', label: 'nasadíme a řídíme za vás' }` (místo „1–3 týdny do spuštění").

### 4.8 pricing  (JÁDRO změny — přehoď důraz na měsíční managed)
- `title`: `'Kolik to stojí'`
- `subtitle`: `'Nasazení na klíč jednorázově, pak měsíční řízení systému. Přesnou částku upřesníme na nezávazné konzultaci podle rozsahu a počtu kanálů.'`
- `setup`:
  - `label`: `'Nasadíme, pak to za vás řídíme'`
  - `description`: `'Jednorázové nasazení na klíč vás nastartuje. Hlavní hodnota je v měsíčním řízení — my systém jedeme, ladíme a dodáváme teplé schůzky, vy jen zavíráte.'`
- `tiers` — přeorganizuj tak, aby HIGHLIGHT byl měsíční managed:
  1. `{ name: 'Nasazení na klíč', monthlyLabel: 'jednorázově', price: 'od 15 000 Kč', priceNote: 'Start', features: ['Napojení vašich účtů (LinkedIn, e-mail)', 'Definice ICP a sekvencí', 'Prezentér postavený na vašem produktu', 'Odladění na reálném provozu', 'Zaškolení člověka, co bude zavírat'], cta: 'Domluvit konzultaci', highlight: false }`
  2. `{ name: 'Řízená automatizace', monthlyLabel: 'měsíčně', price: 'od 19 900 Kč', priceNote: 'Jádro služby', features: ['Kompletní proaktivní outbound jede stroj', 'My systém řídíme a průběžně ladíme', 'Teplé schůzky chodí vašemu obchodníkovi', 'Reporty a přehled výsledků', 'Levnější než půl obchodníka'], cta: 'Domluvit konzultaci', highlight: true }`
  3. `{ name: 'Enterprise / na míru', monthlyLabel: 'individuální nacenění', price: 'individuálně', priceNote: 'Rozsáhlé projekty', features: ['Vícejazyčné a vícetrhové kampaně', 'Hlubší integrace do ERP', 'Custom vývoj (aidevs)', 'Demo Prezentérem na míru', 'Vyhrazený kontakt'], cta: 'Domluvit konzultaci', highlight: false }`
- `faq` — přepiš na nový model:
  1. `{ q: 'Nahradí to našeho obchodníka?', a: 'Ne. Dodá mu teplé schůzky. Proaktivní hledání a oslovování dělá stroj, váš člověk jen zavírá to, co už produkt vidělo.' }`
  2. `{ q: 'Musíme to nějak obsluhovat?', a: 'Ne. Systém řídíme my. Váš člověk jen reaguje na teplé schůzky a domlouvá je.' }`
  3. `{ q: 'Přes čí LinkedIn to jede?', a: 'Přes váš ověřený účet — reálný profil vašeho člověka. My oslovování řídíme bezpečně a lidsky, s konzervativními limity.' }`
  4. `{ q: 'Kolik to stojí?', a: 'Jednorázové nasazení na klíč od 15 000 Kč a pak měsíční řízení od 19 900 Kč. Přesně upřesníme na konzultaci podle rozsahu.' }`
  5. `{ q: 'Za jak dlouho poběží?', a: 'Nasazení je otázka dní, ne týdnů. Pak systém běží a my ho průběžně ladíme na výsledky.' }`
  6. `{ q: 'Je oslovování v souladu s GDPR?', a: 'Ano. Oslovujeme firemní kontakty na základě oprávněného zájmu a každá zpráva má možnost odhlášení.' }`
  7. `{ q: 'Funguje to i na Slovensku a v Polsku?', a: 'Ano, jazykové i trhové rozšíření zvládneme.' }`

### 4.9 cta (spodní blok)
- `title`: `'Pojďme probrat, jak by to jelo u vás.'`
- `subtitle`: `'Na nezávazné konzultaci projdeme váš prodej a ukážeme, jak by vám systém dodával teplé schůzky — bez zátěže vašeho obchodníka.'`

### 4.10 about  („Co systém dělá na pozadí" — jemná úprava framingu)
- `title`: nech `'Co systém dělá na pozadí'`
- `subtitle`: `'Popisujeme přesně, co za vás systém dělá — od hledání firem po teplou schůzku.'`
- sections nech věcně (scraping, obohacení, oslovení, demo+CRM), jen v posledním („Demo, CRM a předání") změň konec: místo „celý systém předáme vám i s daty" → `'...a připravené příležitosti předá vašemu obchodníkovi. Systém přitom řídíme a ladíme my.'`
- `notSaas` → přemapuj:
  - `title`: `'Nasadíme a řídíme, vy zavíráte'`
  - `body`: `'Nekupujete si přístup do aplikace, kterou musíte sami obsluhovat. Postavíme systém na míru a jedeme ho za vás — vám chodí teplé schůzky.'`
- `team` nech (popis portfolia je OK).

### 4.11 footer
- `tagline`: `'Řízená automatizace obchodu. Vy jen zavíráte.'`
- `links.howItWorks`: `'Jak to funguje'`

### 4.12 page.tsx hardcoded (viz sekce 2)
- Metadata title CS: `'Řízená automatizace obchodu | SalesAgent.cz'`
- Metadata description CS: `'Najdeme, oslovíme a zahřejeme firmy za vás — e-mailem, na LinkedInu i reklamou. Vašemu obchodníkovi přistane teplá schůzka, kterou stačí zavřít. Nasadíme a řídíme za vás.'`
- Keywords CS: nahraď „owned pipeline" apod. za: `['automatizace obchodu', 'řízený outbound', 'B2B lead generation', 'teplé schůzky', 'LinkedIn oslovování', 'AI prospecting', 'externí CSO']`
- JSON-LD FAQ (ř. ~733/~774): srovnej otázky/odpovědi s novým `t.pricing.faq` (žádné „systém, který vlastníte").
- Zkontroluj, že hero CTA `'Ukažte mi, jak to vypadá'` reálně scrolluje/spouští Prezentér sekci (pokud tam je onClick/anchor).

## 5. EN (`lib/i18n/en.ts`)
Zrcadli PŘESNĚ tvar cs.ts (stejné klíče, stejné délky polí) a přelož nové texty věrně do angličtiny. Nevymýšlej navíc. EN je sekundární — hlavní je, aby to sedělo tvarem a prošel build.

## 6. Kontrola po přepisu (acceptance)
1. `grep -rin "vlastníte\|vlastnit\|předáme klíče\|owned\|own the system\|je váš" app lib` → nula výskytů v marketingové copy (blog/guides ignoruj).
2. `npm run build` projde bez TS chyb (hlavně shape parity cs.ts ↔ en.ts).
3. `npm run dev` → homepage CS: hero mluví na šéfa, 3 kroky končí „obchodník zavře", ceník highlightuje měsíční „Řízená automatizace", FAQ #1 = „Nahradí to našeho obchodníka? Ne…".
4. Odkazy v nav/footer sedí („Jak to funguje").
5. Blog a guides beze změny.

## 7. Commit
Malé commity po sekcích, ať jde review. Např.: `copy: hero+howItWorks na managed model`, `copy: pricing na měsíční managed`, `copy: en.ts shape parity`.
