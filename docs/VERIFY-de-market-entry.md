# Německá stránka pro vstup na český trh

Datum přípravy a místní kontroly: 19. 11. 2026.

## Rozsah

- Nová samostatná URL `/de/markteintritt-tschechien`; DE není přidáno do globálního seznamu jazyků. `/de` a neexistující DE cesty vracejí 404 s `X-Robots-Tag: noindex`.
- Německý B2B obsah pro DACH: místní zastoupení, porovnání s vlastní společností, postup prvních 90 dnů, ARES a pravidla kontaktování, sedm FAQ. Bez cen a příslibů počtu schůzek nebo tržeb.
- Obrázek je existující `/blog/czech-flag.jpg`, použitý na `/en/sales-representation-czech-republic`. Nevzniká nová kopie obrázku.
- Samostatný německý layout, `html lang="de"`, self-canonical, `index, follow`, Article, Organization, BreadcrumbList a FAQPage JSON-LD. FAQ schema vychází ze stejných dat jako viditelný obsah. Viditelný autor, datum revize a stručná odpověď odpovídají údajům Article; primární zdroje jsou také v `citation`. DE odkaz je doplněn do llms.txt.
- Hreflang DE ↔ EN Guide ↔ PL se stejnou skupinou v HTML a sitemapě; x-default je EN Guide. CS se nepřidává, protože nemá odpovídající obsah.
- Přechody mezi samostatnými EN/CS a DE layouty používají plné načtení dokumentu, aby se nepřenášel anglický chatovací widget a stav skriptů z předchozí verze.
- Na EN Guide je právě jeden odkaz Deutsch v přepínači. Na EN sales-representation je právě jeden přidaný odkaz Deutsch. Odkaz v patičce se přidává pouze na `/cs` a `/en`.
- Původně odložená PL stránka byla následně vyžádána a doplněna po ověření podnikatelského záměru. Aktuální skupina je EN ↔ DE ↔ PL, podrobnosti v `docs/VERIFY-pl-market-entry.md`.

## Ochrana existujících SEO stránek

Před změnou byl uložen místní HTML baseline následujících sedmi URL: `/en`, `/cs`, `/en/pricing`, EN Guide `czech-market-entry-for-b2b-companies`, EN `sales-representation-czech-republic`, EN Guide `expand-b2b-sales-to-czech-republic` a EN register.

Po změně byly title, H1, description, robots, Open Graph, canonical a konečná URL po přesměrování porovnány s baseline: beze změny. Jediná úprava SEO hlaviček existující stránky je doplnění německého hreflang do EN Guide pro vzájemnou vazbu požadovanou v briefu. Původní obsah Guide se nepřepisuje.

## Měření

DE používá stejný `/measurement.js` a CookieScript jako stávající web. Konzultační odkaz míří na stejnou existující rezervaci v Outlook Bookings. Po analytickém souhlasu se zaznamenává `contact_click`, `link_type=booking`, `lang=de`; první návštěva DE má `landing_page=/de/markteintritt-tschechien`. Bez souhlasu nevznikne událost ani atribuční cookie.

Kliknutí na rezervaci není `generate_lead`. Dokončení rezervace je na externím Bookings a jeho návratová konverze nebyla tímto úkolem implementována ani živě ověřena. Požadavek na produkční GA4 DebugView a skutečně dokončenou rezervaci zůstává otevřený.

## Kontroly

- `npm run build`: úspěšný build, včetně statické DE stránky.
- `node --test tests/contact-measurement.test.cjs tests/browser-language.test.cjs`: 12 úspěšných testů; včetně souhlasu, německé atribuce a ochrany ostatních DE cest.
- Místní HTTP: nová DE URL 200 bez přesměrování, self-canonical, vzájemné hreflang, odpovídající sitemapové záznamy a validní JSON sedmi FAQ; přesně jeden Deutsch odkaz na každém ze čtyř povolených zdrojů.
- Prohlížeč: skutečný obrázek vlajky, fungující rozbalování FAQ, přechod EN Guide → Deutsch, jeden H1 a německý jazyk dokumentu.
- Mobil 375 × 812: bez horizontálního posuvu; spodní hrana hero CTA přibližně na 619 px, tedy v první obrazovce. Ověřen i desktopový layout.

## Zdroje pro nové německé vysvětlení

- Stávající EN Guide a EN stránka SalesAgent o zastoupení; původní obsah se nekopíruje 1:1.
- ARES: https://mf.gov.cz/cs/ministerstvo/informacni-systemy/ares
- ÚOOÚ: https://uoou.gov.cz/index.php/profesional/qa-otazky-a-odpovedi/obchodni-sdeleni

## Zbývá po nasazení

Při předpublikační kontrole nová DE URL živě vracela 404 a produkční sitemap ještě neobsahovala DE záznam. Po nasazení ověřit živou URL a obrázek, canonical/hreflang/sitemapu, Google Rich Results Test a GA4 DebugView; následně odeslat živou URL k indexaci podporovanou cestou. Rich Results Test ani indexace nebyly provedeny nad nepublikovanou stránkou. Klíčovou událost `generate_lead` nelze potvrdit pouhým proklikem konzultačního tlačítka.
