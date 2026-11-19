# Strukturovaná data nové DE stránky

Kontrola 19. 11. 2026: `/de/markteintritt-tschechien`, místní produkční build.

| Schéma | Ověření |
| --- | --- |
| Article | Headline odpovídá jedinému viditelnému H1. Jazyk de, vlastní URL, autor s odkazem na profil, publisher s vazbou na Organization, původní obrázek vlajky. |
| Organization | Shodný název, adresa a kontakty jako ve viditelném obsahu; logo a stejná vazba na salesrobots.cz jako na stávajícím webu. |
| FAQPage | Sedm otázek a odpovědí se přesně shoduje s obsahem rozbalovacích bloků. |
| BreadcrumbList | Dvě položky odpovídají viditelné drobečkové navigaci. |

JSON-LD je součástí serverového HTML, nečeká na spuštění klientského JavaScriptu. `abstract` je totožný s viditelnou stručnou odpovědí. `citation` odkazuje na zdroje ARES/MF a ÚOOÚ, které jsou také v textu. `dateModified` odpovídá viditelnému redakčnímu datu 19. 11. 2026. `datePublished` není vymyšlené: stránka dosud není publikovaná. `SpeakableSpecification` odkazuje na existující ID odpovědi; tato anotace nezaručuje využití vyhledávačem nebo asistentem.

Nejde o skóre od Google ani měření AI viditelnosti. FAQ markup sám o sobě nezaručuje rozšířený výsledek. Živá nová URL při kontrole vrací 404 a v produkční sitemapě zatím není. Po nasazení je nutná živá kontrola HTML a nástroji Schema.org Validator / Google Rich Results Test.
