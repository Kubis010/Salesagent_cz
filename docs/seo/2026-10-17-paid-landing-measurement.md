# Reklamní landing: implementace a ověření

Datum: 17. 10. 2026. Výchozí commit: `3a20300`.
Brief: `SEO_TOOL_SKILL/seo-tasks/salesagent-reklamni-landing-mereni.md`.
Rozsah: `/cs/automatizace-obchodu-claude-chatgpt` a její formulář/měření.

## Stav vydání

Změny jsou lokální. Nebyl proveden commit, push ani Netlify deploy. Před spuštěním reklam je nutné dokončit produkční kontrolu formuláře, e-mailu a konverzí. Lokální sestavení neznamená nasazení.

## Implementováno

- Primární hero CTA „Konzultace zdarma“, sekundární „Vyzkoušet ukázku ↓“. Konzultační odkazy v obsahu, hlavičce a patičce otevírají na této landing page místní modální formulář. Na ostatních stránkách zůstávají původní odkazy.
- Mobilní sticky CTA až po odpovědi na cookie lištu; při formuláři a otevřeném nastavení cookies zmizí. Obsah má rezervu pro spodní lištu.
- Český kompaktní ovládací panel používající existující CookieScript API a jeho jediný consent store. Přijmout / odmítnout / nastavení analytických a reklamních cookies, české zásady, možnost volbu změnit. Před připraveností CMP zůstává měření vypnuté.
- Styly pro existující Hunter widget: skrýt před volbou cookies a při otevřeném panelu, na mobilu poté posunout nad sticky CTA. Selektory vycházejí z aktuálního zdroje contextual-loaderu, ne ze změny konfigurace widgetu. Samotný widget se při živé kontrole této cesty nezobrazil, jeho překryv proto není živě potvrzený.
- Prezentér zůstává široký v hero. Načítá se až kliknutím, má rezervovanou výšku, externí odkaz, statický plakát s konzultací, chybový stav a timeout chybějícího načtení dokumentu. Cross-origin chybu uvnitř již načtené aplikace spolehlivě poznat nelze; návštěvník má i ruční „Ukázka nefunguje“.
- Volba bez mikrofonu používá existující `?mode=text` a explicitně zakazuje mikrofon v iframe. Podpora parametru byla ověřena ve zdroji `FullpageDemo.tsx`; spuštění iframe, úvodní video a dostupná textová volba byly ověřeny v prohlížeči. Nebyl odeslán dotaz ani potvrzen souhlas uvnitř externího dema.
- Opakované Salesbot CTA v jedenácti tématech nahrazeny konzultačním textovým odkazem. Dvě hlavní Salesbot CTA mají kontextové texty. Žádné tvrzení o neověřeném bezplatném tarifu.
- Formulář: jméno, e-mail, firma, nepovinný telefon, popis automatizace, povinný souhlas se zásadami, honeypot. Odesílání a opakovaný klik blokovány během požadavku. Poděkování a `generate_lead` až po úspěšném HTTP potvrzení Netlify Forms. Náhledy skutečné odesílání blokují a nehlásí falešný úspěch.
- Webinář připraven, vypnutý; bez obou nastavení (zapnutí a termín) se nic nezobrazuje. Obsahuje vlastní jméno/e-mail/firmu, souhlas a následný `webinar_register`.

## Měření

- `contact_click`, `signup_click`: consent-gated, s `placement` (hero/header/footer/sticky/content/after_demo/self_serve podle CTA).
- `generate_lead`: jen po úspěšném odeslání; klik ani neúspěch se za lead nepovažuje.
- `demo_start`: první úspěšně měřený fokus iframe přes `window.blur`, pouze se souhlasem. Jde o aproximaci interakce, nikoli doložené spuštění videa či dokončení prezentace.
- `demo_engaged`: záměrně není. V dostupném kódu není kontrakt událostí z Prezentéru do nadřazeného webu; nalezené postMessage API slouží vnořeným přehrávačům, ne této analytice.
- Vlastní `scroll` a `video_*` se nepřidávají. V GA4 je rozšířené měření zapnuté; jeho nastavení nebylo měněno.
- GA4 payload je whitelistovaný: žádné jméno, e-mail, telefon, zpráva ani vlastní parametr s gclid. Náhledy neposílají nové landing události do produkční property.
- Sdílený `public/measurement.js` dostal pouze dvě přesně omezené podmínky: na této landing page předat campaign_source/medium/name při první konfiguraci GA4 (jinak query-free page_location ztratí UTM) a vynechat produkční analytiku této landing v lokálních/Netlify náhledech. Chování ostatních cest zůstává stejné.
- Existující cookie `sr_first_touch_v1` se obohacuje, nevytváří se druhá first-touch cookie. Obsahuje první cestu, doménu referreru, zdroj/médium/kampaň, UTM a čas. Platnost maximálně 90 dní od původního zachycení, bez posouvání při dalších návštěvách. Bez analytického souhlasu se nevytváří; při odvolání se maže. Gclid se ukládá/předává jen s analytickým i reklamním souhlasem; odvolání reklamního souhlasu jej odstraní.
- Odkazy do Salesbota zachovávají `lang=cs&mode=signup`, příchozí povolenou atribuci a souhlasem povolený gclid. Samotná URL landing si parametry ponechá i při otevření modálu. Canonical a sitemap zůstávají bez parametrů.
- Consent Mode v2: analytika podle performance consent, reklamní tři signály podle targeting consent. Zachován konzervativní basic režim: bez souhlasu se nespouští nové Google konverzní požadavky. Cookieless modelované Ads pings nejsou aktivovány; nepovažovat je za hotové.

## GA4 skutečně ověřeno / změněno

Ověřen účet Salesagent `140785729`, služba **SalesAgent.cz Funkční** `362064036`, stream CZ `15381671288`, measurement ID **G-442V6JSVVN**. `generate_lead` již byl klíčovou událostí, není nově vytvářený ani duplikovaný.

Vytvořen a po reloadu ověřen [průzkum Reklamní landing](https://analytics.google.com/analytics/web/#/analysis/a140785729p362064036/edit/5Jv_HcBOTKirE737ERPhlA): řádky Relace–zdroj/médium a Kampaň relace, sloupce Název události, metrika Počet událostí. Filtry: přesná trasa landing a `^(contact_click|generate_lead|signup_click|demo_start|webinar_register)$`. Nová měření zatím nemají potvrzená produkční data.

Ve službě jsou navíc staré klíčové události `Form`, `form_submit`, `ads_conversion_Odesl_n_formul_e_pro_z__1`, `purchase`. Nebyly odznačeny ani měněny; nadřazený brief pro jejich změnu vyžaduje schválení. Zvlášť `form_submit` nepovažovat automaticky za potvrzený obchodní lead.

## Co zbývá před reklamami

1. V jednom schváleném vydání nasadit kód; v Netlify musí být zapnutá detekce formulářů a rozpoznané `landing-consultation` / `landing-webinar` z `/__landing-forms.html`. Navazuje na stávající Netlify Forms, nikoli nový CRM endpoint. Nebyla přidána ani změněna adresa n8n webhooku.
2. Zkontrolovat/vytvořit notifikaci nového konzultačního formuláře v Netlify. Definice obsahuje všechny atribuční sloupce, ale doručení e-mailu s těmito údaji zatím není potvrzeno. Rovněž není potvrzen nový databázový záznam ani automatický zápis do externího CRM.
3. Teprve po nasazení vytvořit označený test lead, ověřit uložená pole a doručený e-mail, poté test odstranit v rámci schváleného testovacího postupu. Zkontrolovat DebugView. Lokální úspěšná HTTP odpověď v unit testu je mock, nikoli produkční důkaz.
4. V ověřeném Google Ads účtu zkontrolovat/importovat `generate_lead` jako primární a kliky jako sekundární konverze; toto dosud provedeno není. Připravený nativní tag čeká na skutečné ID/label. Nezapínat zároveň dvě primární konverze pro tentýž lead.
5. Skutečné X/LinkedIn/Instagram/Facebook in-app prohlížeče a mikrofonní oprávnění nejsou ověřené. Desktopový prohlížeč se změněnou šířkou není důkaz testu skutečné aplikace.
6. Lighthouse před/po a mobilní 4G CWV nejsou změřené. Skill `web-perf` vyžaduje Chrome DevTools MCP, který není dostupný. Není tedy doloženo LCP ≤ 2,5 s ani CLS ≤ 0,1. Rezervovaná výška a odložené iframe jsou implementované, nikoli vydávané za naměřený výsledek.

## Konfigurace pro jedno společné vydání

Pouze veřejná konfigurace, nikdy sem nedávat hesla či API klíče:

- `NEXT_PUBLIC_LANDING_ADS_CONVERSION=AW-<skutečné ID>/<skutečný label>`
- `NEXT_PUBLIC_LANDING_NATIVE_ADS=true` až po rozhodnutí o deduplikaci proti GA4 importu; jinak ponechat nenastavené.
- `NEXT_PUBLIC_LANDING_WEBINAR_ENABLED=true` a `NEXT_PUBLIC_LANDING_WEBINAR_DATE=<potvrzený termín>` až při publikaci webináře; nyní obojí nenastavené.

## Lokální důkazy

- `node --test tests/landing-measurement.test.cjs`: 8/8 testů. Souhlas/odvolání, původní atribuce i při rychlém opakovaném prokliku, gclid, sanitizace, AI referral, GA4 prvotní konfigurace, úspěch/chyba formuláře a ochrana SEO proti explicitnímu baseline.
- Čisté izolované produkční sestavení Next.js + TypeScript prošlo; bez Netlify deploye. Původní pracovní cache měla neaktuální odkaz na dříve odstraněný EN blog, proto byla kontrola provedena i v čisté kopii bez této cache.
- Produkční náhled lokálně na portu 3132. Desktopová hlavička otevřela místní dialog bez odchodu na Bookings a bez ztráty parametrů.
- Mobil 375 × 812: primární CTA y=359,9–403,4 px; cookie panel y=626,9–800 px, výška 173,1 px; šířka obsahu 369 px, tedy bez vodorovného přetékání. Na začátku žádný iframe, žádný vložený Google tag v lokálním náhledu. Po souhlasu se odkazem předal `gclid=TEST`, po odmítnutí zmizel a UTM se vrátily na vlastní referral.
- V prohlížeči porovnány title, description, H1, canonical, robots a všechny tři JSON-LD bloky s aktuálním živým webem: identické. Samostatný test porovnává i původní sekční odstavce, nadpisy a seznamy. Sitemap ani jiné SEO stránky nebyly měněny.

## UTM pro reklamy

Všechny směřují na `https://salesagent.cz/cs/automatizace-obchodu-claude-chatgpt`:

| Kanál | utm_source | utm_medium | utm_campaign | utm_content příklad |
| --- | --- | --- | --- | --- |
| Google Search | google | cpc | ac-claude-gpt-2026-10 | search-cz |
| YouTube / Demand Gen | youtube | demand_gen | ac-claude-gpt-2026-10 | video-cz-30s |
| X reklama | x | paid_social | ac-claude-gpt-2026-10 | static-1x1 |
| LinkedIn reklama | linkedin | paid_social | ac-claude-gpt-2026-10 | video-cz-30s |
| Salesweb | salesweb | referral | ac-claude-gpt-2026-10 | clanek-claude |

Pro neplacený příspěvek použít `organic_social`. Příklad: `https://salesagent.cz/cs/automatizace-obchodu-claude-chatgpt?utm_source=youtube&utm_medium=demand_gen&utm_campaign=ac-claude-gpt-2026-10&utm_content=video-cz-30s`. Google Ads gclid nepřidávat ručně; `gclid=TEST` je pouze pro kontrolu.

## Použité primární podklady

- [Netlify Forms / Next.js Runtime v5](https://docs.netlify.com/manage/forms/troubleshooting-tips/): statická definice a AJAX.
- [CookieScript veřejné API](https://help.cookie-script.com/en/articles/30246-custom-functions): currentState, acceptAllAction, rejectAllAction, acceptAction.
- [Google Consent Mode](https://developers.google.com/tag-platform/security/guides/consent): čtyři consent signály a výchozí denied.
