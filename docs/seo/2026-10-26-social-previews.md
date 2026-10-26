# Social preview images — local changes

- Default CZ/EN Open Graph and Twitter images are actual screenshots of the respective homepage, captured from the local production build on 2026-10-26. Files: `public/social/salesagent-home-cs-2026-10.jpg` and `public/social/salesagent-home-en-2026-10.jpg` (1274 × 717).
- The legacy `public/og-image.jpg` now contains the Czech homepage screenshot, so existing references no longer show the generic AI artwork. Existing social-platform caches may retain the previous file after a future deployment; the default metadata uses new filenames.
- The ARES guide has an explicit image for both Open Graph and Twitter: `public/resources/czech-business-register-preview-2026-10.jpg` (1730 × 909). This is an illustrative AI-generated photograph, not a real ARES office or a client reference. No page title, H1, canonical or guide text changed.
- ARES image generated with the built-in imagegen tool, then encoded as JPEG for the website. Homepage previews are real screenshots, not generated images.
- No commit, push or deployment performed for these local changes.

## Final image-generation prompt

Use case: photorealistic-natural. Asset type: link preview photo for an English guide to the Czech business register. Primary request: a Czech flag in front of a modern Czech company headquarters. Wide horizontal editorial architectural photograph, approximately 1.9:1 aspect ratio, natural daylight, credible understated office building with glass and stone facade. A real Czech flag, white upper half, red lower half, blue triangle at the hoist, is clearly recognizable in the foreground. Keep flag and building in the central safe area for social previews. No text, no brand logos, no watermarks, no futuristic AI graphics, no government insignia.
