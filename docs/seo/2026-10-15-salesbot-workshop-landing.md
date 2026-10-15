# Salesbot workshop landing — 15 October 2026

Route: `/cs/automatizace-obchodu-claude-chatgpt`.
CZ homepage links to it below the existing hero; the hero and its contact CTA are
unchanged. No English landing is published (the EN variant returns 404 and is
not in the sitemap).
The shared footer also links to the landing in Czech only, under Menu.

## Content and conversion

The hero follows the live Salesrobots.cz layout: centered headline, introductory
copy and CTA above a full-width Prezentér iframe, not a two-column card layout.
The iframe spans the hero content width on desktop and mobile.
The primary action targets this same `#prezentace` embed; there is no duplicate
presentation section farther down the page. The supplied iframe URL is retained:
`https://app.salesrobots.cz/demo/salesagent-cz` (eager loading, microphone permission
delegated, no autoplay or fabricated video metadata).

Each of the 11 expandable topics contains an illustrative Czech instruction and
the same pair of actions: Salesbot registration and SalesAgent contact for managed
delivery. Topics cover connection, lead sourcing, decision-makers, website research,
classification/qualification, personalisation, LinkedIn campaigns, email,
follow-ups, CRM and Prezentér. Examples do not initiate any real actions.

“15 minutes” describes the introductory overview, not a guaranteed implementation
time. The page distinguishes the Salesbot subscription, the AI assistant and the
separate Prezentér product, following the Prezentér positioning guidance.

## Verification

- Production build and TypeScript passed.
- Landing 200, one H1, canonical, 151-character description, six FAQ questions.
- All 11 topics contain both actions and a Czech example prompt.
- Homepage link, Czech footer link and CS-only sitemap entry verified;
  English homepage and footer do not link to the Czech-only landing.
- Desktop 1280 px and mobile 390 px: single-column, full-width hero demo and no
  document horizontal overflow. Classification accordion and its action targets
  verified in the browser; video CTA targets the embedded presentation section.
- React review: no new client component, no effects or hydration-dependent copy;
  native keyboard-operable details/summary, stable keys and scoped CSS.

## External demo status

The owner activated the supplied demo on 15 October. Its rendered start screen
now shows **“Spustit interaktivní demo”** inside the landing's iframe; the earlier
“Demo nenalezeno” blocker is resolved. Do not report playback or AI responses as
verified. This task does not create/upload the
opening video, the 11 chapter recordings or configure the external Prezentér.

Publication scope: the Czech landing, homepage banner, Czech-only footer link
and sitemap entry. The earlier market-entry consolidation remains a separate,
uncommitted change set and is excluded from this publication. A Git push alone
does not confirm completion of the Netlify deployment.

Reference checked for registration destination and connection capabilities:
https://salesbot.cz/ and https://salesbot.cz/mcp-server.
