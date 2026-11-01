# Jinghui Hu — Academic website

Personal academic website at https://jinghui-hu.github.io/, served directly by GitHub Pages. No build step or packages are required. All content works without JavaScript. Optional analytics is configured separately below.

## Edit

- `index.html`: profile, biography, research, selected publications, news, teaching, mentoring, education, experience, academic service, talks, media, and contact.
- `publications/index.html`: the full publications page at `/publications/`, with 20 entries grouped by year and publication type.
- `styles.css`: shared horizontal navigation, typography, responsive research rows, resource buttons, and print styles.
- `assets/halftone-eye.svg`: decorative cobalt illustration.
- `favicon.svg`: browser icon.
- `.nojekyll`: bypasses Jekyll processing.
- `analytics.js`: optional page-view collection, disabled until an owner-controlled account is configured.

To preview locally, run `python3 -m http.server 8000` from this folder and open http://localhost:8000.

## Private visitor analytics

**Status: prepared, not active.** The `data-goatcounter` attribute in `index.html` is deliberately empty. No analytics script is downloaded and no visits are recorded until it contains the owner's verified collection endpoint. There is no historical visitor data to recover from this integration.

GoatCounter provides a hosted dashboard for page views over time, countries/regions where available, and referring websites. The site remains on GitHub Pages. Reports live in the authenticated GoatCounter account; no reports, public counters, dashboard tokens, or credentials are stored in this public repository.

### Connect the owner's account

1. Create a free account at https://www.goatcounter.com/signup, or use an existing account controlled by Jinghui. Set the site domain to `jinghui-hu.github.io`.
2. In the site's settings, set **Dashboard viewable by** to **Logged in users** only. Keep **Allow adding visitor counts on your website** disabled. Do not enable public access or access via a secret link, and do not add other users.
3. Enable location and referrer collection. Country/region is inferred approximately from the visitor's network address; it does not identify visitors or their exact addresses. Keep individual page-view records disabled; aggregated statistics meet this site's needs.
4. Copy the collection endpoint from the site's integration settings into the empty `data-goatcounter` attribute in `index.html`. Its form is `https://YOUR-ACCOUNT.goatcounter.com/count`. This endpoint is public by design and is not a password or API token. Never invent an account name or point this site at an account whose ownership is unverified.
5. Before deployment, open the dashboard while signed out and confirm that it requires sign-in. Check that `/counter/TOTAL.json` and `/counter//.json` do not reveal statistics while signed out. These checks are required because report privacy is enforced by GoatCounter, not by hiding a link on this site.
6. Publish the configured change to `main`, load the live website once, then confirm the new page view in the signed-in dashboard. Recheck the signed-out restrictions. Tracking starts at activation and cannot reconstruct earlier visits.

The owner only needs to provide the dashboard's ordinary URL to finish setup; never share a password, API token, or secret-access URL. Account creation and private dashboard verification remain outstanding for this draft.

### Collection behaviour

- Counts real page loads on `https://jinghui-hu.github.io` only. Local previews and other hosts are excluded. Reloading counts again; totals are page views, not unique people. Section anchor clicks are not additional page views.
- Sends only the page path and the referring website's origin. Query strings and fragments are omitted; `/index.html` is grouped with `/`. Referrer paths, search terms, and query parameters are not sent.
- Respects Do Not Track and Global Privacy Control before loading the external script. GoatCounter also filters some bots and prerendered requests. Ad blockers, disabled JavaScript, and missing referrers can make totals and attribution incomplete.
- Location statistics are supplied by GoatCounter. No browser location permission is requested. No visitor identity or precise location is collected by this integration.
- To exclude your own browser's future visits after activation, open `https://jinghui-hu.github.io/#toggle-goatcounter` and follow GoatCounter's prompt. This preference applies separately to each browser and device.
- To disable collection, empty `data-goatcounter` again and publish. Previously collected data remains in the private account until deleted there.

Run the focused loader checks with `node --test tests/analytics.test.cjs`. Live ingestion and dashboard access control must be verified separately once the account exists.

Provider documentation: [getting started](https://www.goatcounter.com/help/start), [JavaScript API](https://www.goatcounter.com/help/js), [dashboard access](https://www.goatcounter.com/help/frame), [public counter setting](https://www.goatcounter.com/help/visitor-counter), and [privacy](https://www.goatcounter.com/help/privacy).

## Publications

The dedicated publications page contains 20 publication and report entries, grouped into journal/conference publications by year and workshop papers/reports. Copy an `article.publication` block in `publications/index.html` to add a paper; update the three selected homepage entries separately when appropriate. Preserve author order and highlight `Hu, J.` with `strong`. Use a DOI or public institutional record for the Paper link, and add a PDF button only for a confirmed direct PDF. Keep arXiv abstract pages labelled arXiv and repository records labelled Repository. Each resource link has a descriptive accessible name including its publication title. Identify adjunct and workshop venues accurately, and label accepted/in-press work explicitly. Do not describe submissions as accepted papers.

## Content provenance

The October 2026 update uses the owner's supplied CV, dated 25 August 2026, with the owner's explicit correction that the current position is Leverhulme Early Career Fellow. The fellowship title was supplied for the preceding website version. Contact details are limited to professional email and public profiles; the CV's personal phone number is not published.

Publication metadata updated against public records on 4 October 2026:

- LALA: accepted/in press, IEEE TVCG / ISMAR 2026; current author order: https://research.lancaster-university.uk/en/publications/looking-around-by-looking-around-omnidirectional-gaze-based-vr-vi/
- Aligner, Nodder, and Winker: https://doi.org/10.1145/3806030
- Prediction of Eye Dominance in VR: published title and author order, https://doi.org/10.1145/3797246.3804831 (listed under a working title in the CV).
- SkiMR: corrected the CV title's typographical error using the published paper.

Remaining entries and CV sections follow the supplied CV. Student work is described as mentoring without implying sole formal doctoral supervision. The research biography is a concise paraphrase. https://yuejiang-nj.github.io/ informed the academic page structure, not its biographical content.

## Design and checks

The October 2026 refresh follows the restrained academic layout of https://siplab.org/ and https://siplab.org/publications: a white background, muted blue links, simple horizontal navigation, year headings, generous spacing, large uncropped research figures, and small outlined resource buttons. The homepage retains the profile and all non-publication sections; three selected papers link to the full list. No external fonts or JavaScript are required.

All 19 publication titles, author lists, venues, and existing figure choices are preserved. Fifteen direct PDF URLs were checked on 28 October 2026: each returned HTTP 200, a PDF content type, and a `%PDF-` file signature. Paper links remain for entries without a confirmed direct manuscript; no PDF is invented for the Dagstuhl report. Most PDF sources are documented in `assets/README.md`; the Seeing and Touching the Air PDF comes from the download link on its existing Cambridge repository record. These external links can change and should be rechecked periodically.

Before publishing, check internal anchors, local assets, author/title accuracy, publication links, keyboard focus, and desktop/mobile layout. GitHub Pages deploys commits to `main` automatically using the repository's existing Pages configuration. The `/publications/` directory works directly on GitHub Pages; no routing or build step is required. Legacy home section/year anchors remain available.

## News archive (5 October 2026)

The latest updates appear above Publications. A native, keyboard-accessible disclosure holds the 2024–2025 archive. Keep new entries in reverse chronological order. Dates label the event year when the public LinkedIn view does not expose a reliable absolute post date; do not infer exact dates from relative labels.

Four historical updates were added from public LinkedIn content: CHI 2026 Eye–Head Mover presentation, TOCHI publication (2025), 2025 graduation/Lancaster/Aarhus retrospective, and ISMAR 2024 LookUP presentation. The existing fellowship update links to the award announcement. The TOCHI announcement is visible within Qiushi Zhou's repost and is labelled accordingly. This is not a complete LinkedIn archive: the full profile activity is sign-in-gated, and only accessible public content has been incorporated.

Sources:
- lookup: https://www.linkedin.com/posts/jinghui-hu_feeling-incredibly-honored-to-have-presented-activity-7254697248507195393-JWq7
- recap: https://www.linkedin.com/posts/jinghui-hu_academiclife-researchcommunity-hci-activity-7414225511595565056-tPxb
- fellowship: https://www.linkedin.com/posts/jinghui-hu_embodiedinteraction-humanaiinteraction-activity-7467481425777242112-iHcP
- chi: https://www.linkedin.com/posts/jinghui-hu_chi2026-hci-vr-activity-7451879831719317505-UB3T
- tochi: https://www.linkedin.com/posts/qiushi-zhou-62b8039b_sensorimotor-regularities-as-alignment-between-activity-7406354784561049600-h96v

### Owner-supplied 2026 event updates (5 October 2026)

Added January LMU Winter School at Söllerhaus; March GEMINI at IEEE VR; April HKUST (Guangzhou) visit and Free Rein forum; May CHI presentations and Dagstuhl seminar; and June ETRA presentations. The existing undated 2026 CHI news item was replaced with the owner's May date and the co-supervised student paper. Seven entries are grouped under “More from 2026” to keep the latest three updates prominent. Event months and attendance follow the owner's explicit account. Ben's surname and the Dagstuhl seminar title were not supplied and have not been guessed.

The supplied event pages confirm the winter school programme and GEMINI keynotes by Shengdong Zhao and Ana Serrano:
- https://www.hcilab.org/event/winterschool-2026/
- https://sites.google.com/view/gemini-2026/previous-editions/2026-ieee-vr

The GEMINI page contains a 2025 year typo in its schedule; the page's edition and the owner's account identify the event as IEEE VR 2026.

## SUI 2026 award update (28 October 2026)

Added NeckErgonomics to the 2026 publications and an October news item. The full award wording is “Best Paper Award – Honourable Mention”, as recorded on the first author’s publication page and certificate: https://thomas9190.github.io/guanlinli.github.io/publication/2026-10-10-neckergonomics-adapting-head-rotation. Bibliographic details and the direct published PDF are verified against https://eprints.gla.ac.uk/396719/ and DOI 10.1145/3822518.3830042. The site now lists 20 publications/reports and 16 direct PDF links. Existing entries and homepage paper selections are unchanged.


## Animated previews

Prefer genuine author GIFs or demo-video excerpts over static figures when available. Preserve existing figures when no suitable animation is available; never invent an animation of research results. Record the original source and excerpt in `assets/README.md`.

`publication-media.js` progressively enhances four silent MP4 previews with play/pause buttons, visibility-based playback and reduced-motion/data-saver support. Videos use `preload="none"` and still posters. Visitors who prefer reduced motion see a still until they press Play; manually paused previews stay paused when scrolled back into view. Without JavaScript, native video controls remain available and the entire publication list works. Each preview has an accessible description, and full videos are linked alongside the PDF/Paper resources.
