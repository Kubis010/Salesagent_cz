import type { Metadata } from 'next'
import Image from 'next/image'
import { CONSULTATION_URL, ENGLISH_MARKET_ENTRY, marketEntryLanguages } from '@/lib/market-entry-languages'

const title = 'Markteintritt Tschechien: B2B-Vertrieb aufbauen'
const headline = 'Markteintritt Tschechien: mit einem klaren Vertriebsplan starten.'
const description = 'Markteintritt in Tschechien für B2B-Unternehmen aus DACH: Vertriebsvertretung oder eigene Gesellschaft, ein 90-Tage-Plan und lokale Begleitung durch SalesAgent.'
const image = 'https://salesagent.cz/blog/czech-flag.jpg'
const reviewed = '2026-11-19'
const summary = 'Ein B2B-Markteintritt in Tschechien beginnt mit der Prüfung von Zielkunden, Nachfrage und Vertriebswegen. Eine externe Vertriebsvertretung kann Firmen recherchieren, zulässige Kontakte vorbereiten und lokale Geschäftsgespräche begleiten. Eine eigene Gesellschaft schafft dagegen eine operative Struktur; sie ersetzt keine Nachfrageprüfung. Ein 90-Tage-Test verbindet Zielgruppenrecherche, abgestimmte Ansprache, Gespräche und eine schriftliche Auswertung. SalesAgent unterstützt Unternehmen aus Deutschland, Österreich und der Schweiz bei dieser Vertriebsarbeit. Ob eine lokale Gesellschaft nötig ist, hängt von der Tätigkeit ab und erfordert eine gesonderte rechtliche und steuerliche Prüfung.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: marketEntryLanguages.de, languages: marketEntryLanguages },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'article', title, description, url: marketEntryLanguages.de,
    siteName: 'SalesAgent.cz', locale: 'de_DE', alternateLocale: ['en_US', 'pl_PL'],
    images: [{ url: image, alt: 'Tschechische Flagge – Markteintritt in Tschechien' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: [image] },
}

const faqs = [
  ['Für wen eignet sich ein begleiteter Markteintritt in Tschechien?', 'Für B2B-Unternehmen aus Deutschland, Österreich und der Schweiz, die ein erprobtes Angebot haben und passende tschechische Geschäftskunden erreichen möchten. Im Erstgespräch klären wir Zielgruppe, bisherige Erfahrungen und die Aufgaben, die Sie auslagern möchten. Es geht um die Entwicklung Ihres Vertriebs, nicht um die Vermittlung von Arbeitsstellen.'],
  ['Brauchen wir sofort eine eigene tschechische Gesellschaft?', 'Ob eine lokale Gesellschaft erforderlich oder sinnvoll ist, hängt von Ihrer tatsächlichen Tätigkeit ab. Ein Markttest hilft zunächst, die kommerziellen Annahmen zu prüfen. Vertragsgestaltung, Steuern, Personal und eine mögliche Betriebsstätte sollten Sie vor der Umsetzung mit entsprechend qualifizierten Beratern klären.'],
  ['Was unterscheidet eine Vertriebsvertretung von einem Vertriebspartner?', 'Eine Vertriebsvertretung kann in Ihrem Namen recherchieren, Gespräche vorbereiten und den Verkaufsprozess begleiten. Ein Vertriebspartner kann zum Beispiel als Distributor auf eigene Rechnung verkaufen. Zuständigkeiten, Vertragspartner, Kundenzugang und die Verantwortung für Abschlüsse müssen deshalb vorab festgelegt werden.'],
  ['Was lässt sich in den ersten 90 Tagen erreichen?', 'Die 90 Tage sind ein Arbeitsrahmen für Zielgruppenrecherche, rechtlich geprüfte Ansprache, Gespräche und Auswertung. Das Ergebnis ist eine belastbarere Grundlage für Ihre nächste Entscheidung: weitermachen, das Angebot ändern oder den Test beenden. Die Zahl der Termine und ein bestimmter Umsatz werden nicht zugesagt; längere Verkaufszyklen können über den Testzeitraum hinausgehen.'],
  ['Muss unser Angebot auf Tschechisch vorliegen?', 'Das hängt von der Zielgruppe ab. Für den ersten Kontakt sollten Sprache und Unterlagen zu den Ansprechpartnern passen. Klären Sie außerdem, wer Produktfragen beantwortet, Verhandlungen führt und später Support leistet. Eine verständliche tschechische Kurzfassung ersetzt keine technische oder vertragliche Prüfung.'],
  ['Dürfen wir E-Mail-Adressen aus ARES für Werbung verwenden?', 'Ein öffentlicher Firmeneintrag ist keine Einwilligung in Werbe-E-Mails. In Tschechien sind zusätzlich zur DSGVO die Regeln für elektronische Werbung zu beachten, insbesondere die vorherige Einwilligung oder die begrenzte Ausnahme für bestehende Kunden. Rechtsgrundlage, Identifikation des Absenders und eine einfache Abmeldung müssen vor der Ansprache geklärt sein.'],
  ['Wie starten wir die Zusammenarbeit mit SalesAgent?', 'Wir beginnen mit einem kostenlosen, unverbindlichen Erstgespräch über Ihr Produkt und Ihre Zielkunden. Danach vereinbaren wir gegebenenfalls einen abgegrenzten Markttest und legen Aufgaben, Zuständigkeiten und die Auswertung schriftlich fest. Das Erstgespräch verpflichtet Sie nicht zu einer Zusammenarbeit.'],
]

const comparison = [
  ['Zweck', 'Nachfrage und Verkaufsprozess prüfen; lokale Gespräche begleiten.', 'Eine eigene operative Struktur für eine bereits konkretisierte Tätigkeit schaffen.'],
  ['Verantwortung', 'Umfang und Vertretungsbefugnis vertraglich festlegen; Ihr Team bleibt an Entscheidungen beteiligt.', 'Eigene Leitung, Verwaltung und gegebenenfalls Personal organisieren.'],
  ['Vorbereitung', 'Zielkunden, Angebot, Zuständigkeiten und zulässige Kontaktwege abstimmen.', 'Rechtsform, Steuerfragen, Registrierungen und laufenden Betrieb prüfen.'],
  ['Risiko', 'Ein bezahlter Test kann auch zeigen, dass das Angebot nicht ausreichend passt.', 'Aufbau und laufende Pflichten können entstehen, bevor Nachfrage nachgewiesen ist.'],
  ['Nächster Schritt', 'Anhand von Gesprächen und Marktfeedback über die weitere Investition entscheiden.', 'Die lokale Struktur mit einem konkreten Vertriebs- und Betriebsplan verbinden.'],
]

const phases = [
  ['01–14', 'Annahmen und Zielkunden klären', 'Wir grenzen ein Segment ein: Branche, Unternehmensgröße, Problem und zuständige Rolle. Dazu prüfen wir das Angebot aus Sicht tschechischer Kunden, vorhandene Referenzen, Sprache und die Verantwortung für den späteren Verkauf.', 'Ergebnis: ein abgestimmtes Kundenprofil, eine erste Firmenliste und Kriterien für den Test.'],
  ['15–45', 'Firmen prüfen und Gespräche eröffnen', 'Wir recherchieren passende Unternehmen, überprüfen Firmenangaben und bereiten die Ansprache vor. Kontaktwege werden erst nach Prüfung ihrer rechtlichen Grundlage eingesetzt. Antworten, Einwände und nächste Schritte halten wir nachvollziehbar fest.', 'Ergebnis: dokumentiertes Marktfeedback und gegebenenfalls qualifizierte Erstgespräche.'],
  ['46–75', 'Angebot und Vorgehen schärfen', 'Wir besprechen, welche Firmen das Problem tatsächlich erkennen, wer entscheidet und welche Unterlagen fehlen. Bei Bedarf passen wir Segment oder Botschaft an. Die Vorbereitung von Terminen und eine Begleitung bei lokalen Gesprächen stimmen wir mit Ihnen ab.', 'Ergebnis: ein klareres Bild von Kaufkriterien, Einwänden und Ihrem internen Aufwand.'],
  ['76–90', 'Bewerten und über die Fortsetzung entscheiden', 'Wir betrachten Gesprächsqualität, konkrete nächste Schritte und den erwartbaren weiteren Verkaufszyklus. Daraus folgt eine Entscheidung: den Vertrieb fortsetzen, einen Vertriebspartner in Tschechien prüfen, eigenes Personal aufbauen oder den Ansatz beenden.', 'Ergebnis: eine schriftliche Empfehlung mit offenen Fragen und den nächsten Verantwortlichkeiten.'],
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization', '@id': 'https://salesagent.cz/#organization', name: 'Sales Robots s.r.o.',
      url: 'https://salesagent.cz', logo: { '@type': 'ImageObject', url: 'https://salesagent.cz/logo.svg' },
      email: 'info@salesagent.cz', telephone: '+420777591503', identifier: '09586563',
      description: 'Lokale B2B-Vertriebsbegleitung und Markteintritt in Tschechien für ausländische Unternehmen.',
      address: { '@type': 'PostalAddress', streetAddress: 'Generála Šišky 2082/26', addressLocality: 'Praha – Modřany', addressCountry: 'CZ' },
      sameAs: ['https://salesrobots.cz'],
    },
    {
      '@type': 'Article', '@id': `${marketEntryLanguages.de}#article`, headline, description,
      image, inLanguage: 'de', url: marketEntryLanguages.de,
      abstract: summary, dateCreated: reviewed, dateModified: reviewed,
      mainEntityOfPage: { '@type': 'WebPage', '@id': marketEntryLanguages.de },
      author: { '@type': 'Person', name: 'Petr Kubíček', url: 'https://salesagent.cz/en/about', jobTitle: 'Gründer von Sales Robots', worksFor: { '@id': 'https://salesagent.cz/#organization' } },
      publisher: { '@id': 'https://salesagent.cz/#organization' },
      citation: ['https://mf.gov.cz/cs/ministerstvo/informacni-systemy/ares', 'https://uoou.gov.cz/index.php/profesional/qa-otazky-a-odpovedi/obchodni-sdeleni'],
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#de-quick-answer'] },
      about: [{ '@type': 'Country', name: 'Tschechien' }, { '@type': 'Thing', name: 'B2B-Markteintritt' }],
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'SalesAgent.cz', item: 'https://salesagent.cz/en' },
        { '@type': 'ListItem', position: 2, name: 'Markteintritt Tschechien', item: marketEntryLanguages.de },
      ],
    },
    {
      '@type': 'FAQPage', '@id': `${marketEntryLanguages.de}#faq`, inLanguage: 'de',
      mainEntity: faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })),
    },
  ],
}

function ConsultationLink() {
  return <a className="de-primary" href={CONSULTATION_URL} target="_blank" rel="noopener noreferrer">Unverbindliches Erstgespräch <span aria-hidden="true">↗</span></a>
}

export default function GermanMarketEntry() {
  return <article className="de-entry">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="de-hero" aria-labelledby="de-title">
      <div>
        <p className="de-eyebrow">Für B2B-Unternehmen aus DACH</p>
        <h1 id="de-title">{headline}</h1>
        <p className="de-lead">Prüfen Sie die Nachfrage, bevor Sie eine lokale Struktur aufbauen. SalesAgent unterstützt Sie bei Firmenrecherche, Ansprache und ersten Geschäftsgesprächen im tschechischen Markt.</p>
        <ConsultationLink />
        <p className="de-note">Das Erstgespräch ist kostenlos und unverbindlich.</p>
      </div>
      <Image src="/blog/czech-flag.jpg" alt="Tschechische Flagge – Ihr Markteintritt in Tschechien" width={900} height={600} priority sizes="(max-width: 860px) 100vw, 45vw" />
    </section>
    <div className="de-content">
      <nav className="de-breadcrumb" aria-label="Brotkrümelnavigation"><a href="/en" hrefLang="en">SalesAgent.cz</a><span aria-hidden="true">/</span><span>Markteintritt Tschechien</span></nav>
      <nav className="de-contents" aria-label="Inhalt">
        <a href="#vertretung">Vertretung oder Gesellschaft?</a><a href="#plan">Die ersten 90 Tage</a><a href="#praxis">Lokale Besonderheiten</a><a href="#faq">Fragen und Antworten</a>
      </nav>
      <div className="de-byline">Von <a href="/en/about" hrefLang="en">Petr Kubíček, Gründer von Sales Robots</a> · Redaktioneller Stand: <time dateTime={reviewed}>19.11.2026</time></div>
      <section className="de-answer" aria-labelledby="de-quick-title">
        <h2 id="de-quick-title">Was gehört zum Markteintritt in Tschechien?</h2>
        <p id="de-quick-answer">{summary}</p>
      </section>
      <section aria-labelledby="de-about">
        <p className="de-eyebrow">Ihr Ansprechpartner vor Ort</p>
        <h2 id="de-about">Vertrieb in Tschechien aufbauen – mit lokaler Begleitung.</h2>
        <p>SalesAgent ist ein Angebot von Sales Robots s.r.o., einem Unternehmen mit Sitz in Prag. Wir unterstützen ausländische B2B-Unternehmen dabei, passende Firmen in Tschechien zu recherchieren, ihr Angebot lokal verständlich zu machen und Geschäftsgespräche vorzubereiten.</p>
        <p>Petr Kubíček, Gründer von Sales Robots, bringt über 20 Jahre Erfahrung im B2B-Vertrieb mit. Unsere Arbeit wird von Menschen geführt und durch eigene Werkzeuge wie Salesbot unterstützt: für Recherche, Vorbereitung der Ansprache und die Organisation von Kontakten und nächsten Schritten. Der Einsatz von Software ersetzt weder die fachliche Prüfung noch die persönliche Abstimmung mit Ihnen.</p>
        <p>Vor Beginn vereinbaren wir, wer Unternehmen anspricht, Antworten bearbeitet und Termine führt. Eine Begleitung bei Verhandlungen und weitere Aufgaben sind Teil einer gesondert abgestimmten Verantwortung. Sie können die <a href="/en/sales-representation-czech-republic" hrefLang="en">Leistungen unserer Vertriebsvertretung auf Englisch</a> nachlesen.</p>
      </section>
      <section id="vertretung" aria-labelledby="de-options">
        <p className="de-eyebrow">Die Struktur folgt dem Bedarf</p>
        <h2 id="de-options">Handelsvertretung oder eigene tschechische Gesellschaft?</h2>
        <p>Eine eigene Gesellschaft beantwortet die Frage, wie Sie vor Ort tätig werden. Sie beantwortet noch nicht, welche Kunden Ihr Angebot brauchen. Eine externe Vertriebsvertretung kann helfen, diese Nachfrage zu prüfen. Beide Wege können aufeinander folgen; sie sind keine zwingenden Alternativen.</p>
        <p>Auch ein Distributor ist etwas anderes als eine Vertretung in Ihrem Namen. Wenn Sie einen Vertriebspartner in Tschechien suchen, legen Sie zuerst fest, ob Sie Zugang zu Kunden, Verkauf auf eigene Rechnung, technische Betreuung oder eine Kombination benötigen.</p>
        <div className="de-table-wrap" role="region" aria-label="Vergleich der Markteintrittsmodelle" tabIndex={0}>
          <table><caption>Entscheidungshilfe für Ihren Markteintritt</caption><thead><tr><th scope="col">Kriterium</th><th scope="col">Externe Vertriebsvertretung</th><th scope="col">Eigene Gesellschaft</th></tr></thead><tbody>{comparison.map(([factor, sales, entity]) => <tr key={factor}><th scope="row">{factor}</th><td>{sales}</td><td>{entity}</td></tr>)}</tbody></table>
        </div>
        <p>Eine lokale Struktur kann sinnvoll sein, wenn konkrete operative Anforderungen oder eine bereits tragfähige Nachfrage vorliegen. Welche Rechtsform, Steuerpflichten oder Registrierungen zu Ihrer Tätigkeit passen, klären Sie mit qualifizierten Rechts- und Steuerberatern. Unser Fokus liegt auf der kommerziellen Prüfung und der Vertriebsarbeit.</p>
      </section>
      <section id="plan" aria-labelledby="de-plan">
        <p className="de-eyebrow">Ein Arbeitsrahmen, keine Ergebnisgarantie</p>
        <h2 id="de-plan">Die ersten 90 Tage: von der Annahme zur Entscheidung.</h2>
        <p>Ein abgegrenzter Test macht sichtbar, was Sie über Kunden, Angebot und Verkaufsprozess noch lernen müssen. Ein Vertragsabschluss kann bei längeren B2B-Verkaufszyklen deutlich später liegen. Entscheidend sind belastbare Gespräche und überprüfbare nächste Schritte.</p>
        <ol className="de-phases">{phases.map(([days, heading, text, outcome]) => <li key={days}><span className="de-days">Tag {days}</span><div><h3>{heading}</h3><p>{text}</p><p className="de-outcome">{outcome}</p></div></li>)}</ol>
      </section>
      <section id="praxis" aria-labelledby="de-practice">
        <p className="de-eyebrow">Was Sie vor dem Start klären sollten</p>
        <h2 id="de-practice">Lokale Besonderheiten für Unternehmen aus DACH.</h2>
        <h3>Sprache und Übergabe an Ihr Team</h3>
        <p>Legen Sie fest, welche Unterlagen auf Tschechisch benötigt werden und wer fachliche Rückfragen beantwortet. Für ein Erstgespräch genügt nicht immer dieselbe Unterlage wie für Einkauf, Technik und Geschäftsführung. Klären Sie vor der Ansprache auch, in welcher Sprache spätere Verhandlungen und die Betreuung stattfinden.</p>
        <h3>Firmen in ARES und im Handelsregister prüfen</h3>
        <p>ARES bündelt Angaben zu tschechischen Wirtschaftssubjekten aus öffentlichen Quellen. Die IČO hilft, die richtige juristische Person zuzuordnen. Für Vertretungsberechtigung und aktuelle Registerdokumente prüfen Sie zusätzlich den jeweiligen öffentlichen Registereintrag. Ein Eintrag belegt weder Kaufinteresse noch automatisch die Eignung als Vertriebspartner.</p>
        <p>Unser <a href="/en/resources/czech-business-companies-register" hrefLang="en">Leitfaden zum tschechischen Unternehmensregister (Englisch)</a> erläutert die Recherche. Die amtliche Beschreibung finden Sie beim <a href="https://mf.gov.cz/cs/ministerstvo/informacni-systemy/ares" hrefLang="cs">tschechischen Finanzministerium</a>.</p>
        <h3>DSGVO und zulässige Ansprache getrennt prüfen</h3>
        <p>Öffentliche Firmendaten sind keine pauschale Erlaubnis für Werbung. Werbe-E-Mails erfordern in Tschechien grundsätzlich eine vorherige Einwilligung; für bestehende Kunden gibt es eine begrenzte Ausnahme. Das betrifft auch juristische Personen. Prüfen Sie zusätzlich die Verarbeitung personenbezogener Kontaktdaten, den konkreten Kanal, die Absenderangaben und eine einfache Abmeldung. Die <a href="https://uoou.gov.cz/index.php/profesional/qa-otazky-a-odpovedi/obchodni-sdeleni" hrefLang="cs">Hinweise der tschechischen Datenschutzbehörde ÚOOÚ</a> erklären die Anforderungen.</p>
      </section>
      <section id="faq" aria-labelledby="de-faq">
        <p className="de-eyebrow">Häufige Fragen</p><h2 id="de-faq">Vor dem Markteintritt.</h2>
        <div className="de-faq">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
      <section className="de-final" aria-labelledby="de-next">
        <p className="de-eyebrow">Ihr nächster Schritt</p><h2 id="de-next">Passt Ihr Angebot zum tschechischen Markt?</h2>
        <p>Besprechen wir Ihr Produkt, Ihre Zielkunden und die offenen Fragen. Im kostenlosen Erstgespräch klären wir, ob und in welchem Umfang wir Sie unterstützen können.</p>
        <ConsultationLink />
        <p className="de-note">Oder schreiben Sie an <a href="mailto:info@salesagent.cz">info@salesagent.cz</a>.</p>
        <p><a href={ENGLISH_MARKET_ENTRY} hrefLang="en" lang="en">Read the Czech market entry guide in English →</a></p>
      </section>
    </div>
  </article>
}
