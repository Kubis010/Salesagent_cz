# Polská stránka pro vstup na český trh

Příprava a místní kontrola: 19. 11. 2026.

## Ověření hledacího záměru

DataForSEO nebylo v tomto prostředí dostupné. Běžným webovým vyhledáváním byly ověřeny fráze `wejście na rynek czeski`, `rynek czeski B2B` a `agent handlowy Czechy firma`; nejde o lokalizovaný Google SERP export ani ověření objemů.

První fráze má mezi výsledky podnikatelské služby, například:

- https://operacyjnymost.pl/czechypowiemjak — služba polským firmám plánujícím prodej, spolupráci nebo činnost v Česku.
- https://www.foxy.cz/pl/uslugi/wejscie-na-rynek-czeski-i-slowacki/ — služba vstupu na český a slovenský trh, se zaměřením na marketing.

Výsledky dalších dvou dotazů obsahovaly i pracovní inzeráty. Nová stránka proto výslovně cílí na **wejście na rynek czeski B2B** a polské firmy, nikoli samostatně na pracovní fráze „przedstawiciel handlowy“ nebo „agent handlowy“.

## Implementace

- Nová samostatná URL `/pl/wejscie-na-rynek-czeski`, `html lang="pl"`, self-canonical, `index, follow`, polský title/H1/description, OG a Twitter metadata.
- Obsah pro polské firmy: reprezentace vs. vlastní společnost, plán prvních 90 dnů, jazyk a návazná obsluha, ARES, RODO/pravidla elektronické reklamy a sedm FAQ. Původní `/blog/czech-flag.jpg` je sdílen s DE i EN službou.
- Viditelný autor, datum revize a samostatně srozumitelná odpověď; Article, Organization, FAQPage a BreadcrumbList v serverovém HTML. Právní a rejstříková vysvětlení odkazují na primární zdroje MF ČR a ÚOOÚ.
- Společná skupina hreflang EN ↔ DE ↔ PL, `x-default` zůstává EN Guide. Stejná úplná skupina je v HTML i u všech tří záznamů v sitemapě. CS se do této skupiny nepřidává.
- Na EN Guide je jeden přepínač Deutsch a jeden Polski; totéž platí pro přidané odkazy na EN zastoupení a pro patičky `/cs` a `/en`. Krátké mobilní kódy mají plné přístupné názvy jazyků.
- DE a PL sdílejí původní styly v `app/market-entry.css`; DE obsah se nepřepisuje. Samostatné layouty se přepínají plným načtením dokumentu, aby se nepřenášel stav cizojazyčného widgetu.
- PL se nepřidává do globálních jazyků webu. `/pl`, `/pl/pricing` a ostatní neexistující PL cesty vracejí 404 s noindex hlavičkou. Výběr jazyka domovské stránky zůstává původní.
- Sdílené měření zachovává consent. `contact_click` u konzultace má `lang=pl`, `link_type=booking` a první návštěva na PL má odpovídající `landing_page`. Kliknutí není `generate_lead`.
- PL je uvedena také v llms.txt.

## Ověření

- `npm run build`: úspěch, včetně statické PL stránky.
- `node --test tests/contact-measurement.test.cjs tests/browser-language.test.cjs`: 12 úspěšných testů, rozšířené o polskou atribuci a routování.
- HTTP kontrola potvrdila 200, jazyk pl, vlastní canonical, úplné vzájemné hreflang, sitemapu, sedm FAQ přesně shodných se schema, shodu autora/revize a přítomnost citovaných zdrojů.
- Sedm chráněných URL porovnáno s HTML baseline před DE/PL prací: title, H1, description, robots, OG, canonical a výsledná adresa po přesměrování beze změny. Hreflang EN Guide je rozšířen pro překlady podle briefu.
- Prohlížeč 375 × 812: bez vodorovného posuvu, spodní hrana CTA přibližně na 579 px; přepnutí PL → EN → PL funguje. Ověřen i desktop.

## Produkce a indexace

Commit/push není důkazem nasazení. Při kontrole před PL pushem živá DE stránka stále vracela 404. Před ruční žádostí v GSC ověřit, že nová PL i DE URL vracejí 200, a že živá sitemap obsahuje úplnou EN/DE/PL skupinu. Seznam adres: `docs/GSC-INDEXACE.md`.

Nebyla odeslána žádná žádost o indexaci ani testovací konzultace. Google Rich Results Test, produkční GA4 DebugView a dokončení rezervace v externím Bookings zůstávají k ověření po nasazení. Výskyt ve vyhledávačích ani citace v AI nejsou garantované samotným schema nebo llms.txt.
