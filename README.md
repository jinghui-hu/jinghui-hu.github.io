# Jinghui Hu — Academic website

Personal academic website at https://jinghui-hu.github.io/, served directly by GitHub Pages. No build step, packages, JavaScript, remote fonts, or tracking scripts are required.

## Edit

- `index.html`: profile, biography, research, publications, teaching, mentoring, education, experience, academic service, talks, media, and contact.
- `styles.css`: responsive profile sidebar, typography, colours, halftone accents, and print styles.
- `assets/halftone-eye.svg`: decorative cobalt illustration.
- `favicon.svg`: browser icon.
- `.nojekyll`: bypasses Jekyll processing.

To preview locally, run `python3 -m http.server 8000` from this folder and open http://localhost:8000.

## Publications

The page contains 19 publication and report entries, grouped into journal/conference publications by year and workshop papers/reports. Copy an `article.publication` block to add a paper. Preserve author order and highlight `Hu, J.` with `strong`. Use a DOI or public institutional record for the paper link and an open manuscript link where available. Identify adjunct and workshop venues accurately, and label accepted/in-press work explicitly. Do not describe submissions as accepted papers.

## Content provenance

The October 2026 update uses the owner's supplied CV, dated 25 August 2026, with the owner's explicit correction that the current position is Leverhulme Early Career Fellow. The fellowship title was supplied for the preceding website version. Contact details are limited to professional email and public profiles; the CV's personal phone number is not published.

Publication metadata updated against public records on 4 October 2026:

- LALA: accepted/in press, IEEE TVCG / ISMAR 2026; current author order: https://research.lancaster-university.uk/en/publications/looking-around-by-looking-around-omnidirectional-gaze-based-vr-vi/
- Aligner, Nodder, and Winker: https://doi.org/10.1145/3806030
- Prediction of Eye Dominance in VR: published title and author order, https://doi.org/10.1145/3797246.3804831 (listed under a working title in the CV).
- SkiMR: corrected the CV title's typographical error using the published paper.

Remaining entries and CV sections follow the supplied CV. Student work is described as mentoring without implying sole formal doctoral supervision. The research biography is a concise paraphrase. https://yuejiang-nj.github.io/ informed the academic page structure, not its biographical content.

## Design and checks

A compact profile sidebar and a readable main column replace the oversized hero. The cobalt halftone illustration and dotted fellowship accent retain the existing visual identity. Narrow screens stack the profile above the content. Native anchor links provide section and publication-year navigation; reduced-motion preferences and print layouts are supported.

Before publishing, check internal anchors, local assets, author/title accuracy, publication links, keyboard focus, and desktop/mobile layout. GitHub Pages deploys commits to `main` automatically using the repository's existing Pages configuration.
