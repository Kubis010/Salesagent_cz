# Ruční indexace DE/PL stránek v GSC

Po nasazení vložit do Kontroly URL v doménové službě salesagent.cz:

1. https://salesagent.cz/pl/wejscie-na-rynek-czeski — nová polská B2B stránka.
2. https://salesagent.cz/de/markteintritt-tschechien — nová německá B2B stránka.
3. https://salesagent.cz/en/guides/czech-market-entry-for-b2b-companies — EN protějšek s doplněným vzájemným hreflang.
4. https://salesagent.cz/en/sales-representation-czech-republic — doplněné odkazy na překlady.

Nejdřív **Otestovat publikovanou URL**; při 200, povolené indexaci a správném canonical zvolit **Požádat o indexaci**. U nových DE/PL adres neodesílat žádost, pokud ještě vracejí 404.

V části Soubory Sitemap použít https://salesagent.cz/sitemap.xml. Již zařazené homepage není kvůli odkazu v patičce nutné posílat znovu. Staré přesměrované adresy ani neexistující `/pl` a `/de` se k indexaci neposílají.

Oficiální postup: https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl

Žádosti podává Petr ručně; při této práci nebyla žádná URL odeslána.
