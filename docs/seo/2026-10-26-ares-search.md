# ARES lookup on the English company-register guide

Local implementation only. No deployment, commit or push requested.

- Page: `/en/resources/czech-business-companies-register`.
- Existing title, H1, canonical and guide copy unchanged.
- Direct client POST to Salesbot's `ares-public-search` in project `ffbkvbbreduuhwixojne`; no new Salesagent backend.
- Public reCAPTCHA v3 site key supplied by the owner; action `ares_search`. New token per search and detail lookup. Google script loads only upon valid explicit submission. No secret or token persistence.
- Stable endpoint errors mapped to English messages. No automatic retries. No API calls while typing.
- Owner's updated backend limits: 10 searches/hour per caller IP including cache hits; 200 upstream ARES queries/day globally; 2 requests/10 seconds per caller. Frontend messages reflect these values, but enforcement must be confirmed on the separately deployed Salesbot backend.
- Every result displays Source: ARES. All ARES links in the widget lead to `https://ares.gov.cz/` as requested, not individual search URLs. Addresses of natural persons are hidden again on the frontend.
- Search results are transient UI state, not new routes or indexable query URLs. No CRM enrollment, scraping or AI calls.
- Localhost and preview hosts cannot call the production lookup or load Google CAPTCHA. Tests use injected responses, never production credentials.

## Verification and release gate

Run `node --test tests/ares-search.test.cjs`, `npx tsc --noEmit --incremental false` and `npm run build`.

Before public release, separately confirm the CAPTCHA-protected backend is deployed; the existing key permits `salesagent.cz` and `www.salesagent.cz`; the paired backend secret is configured; and client-IP handling is verified on Supabase's actual ingress. None of those production facts are proven by frontend tests.

After an authorized deployment, test real name and IČO searches from the allowed production hostname, fresh CAPTCHA tokens for list-to-detail requests, error codes, and the natural-person privacy behavior. Do not disable CAPTCHA or spoof Origin to make a local preview work. Publish all approved frontend changes in one release to avoid unnecessary Netlify builds.
