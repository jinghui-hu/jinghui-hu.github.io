# Jinghui Hu — Academic website

Personal academic website for Jinghui Hu, built for GitHub Pages at https://jinghui-hu.github.io/.

## Publish

In this repository, open **Settings → Pages**. Select **Deploy from a branch**, then **main** and **/ (root)**, and save. GitHub Pages will publish subsequent commits automatically. No package installation, build service, or API keys are needed.

## Edit

- `index.html`: biography, research interests, selected publications, and contact details.
- `styles.css`: typography, colours, responsive layout, and print styles.
- `favicon.svg`: browser icon.
- `assets/halftone-eye.svg`: decorative cobalt halftone illustration (scalable vector).
- `.nojekyll`: serves the files directly without Jekyll processing.

To preview locally, run `python3 -m http.server 8000` from this folder and open http://localhost:8000.

## Maintenance

Keep publication titles, author order, dates, and links accurate. The homepage intentionally lists selected work; Google Scholar links to the broader publication record. Add papers by copying an existing `article.publication` block. Do not list submissions as accepted publications. Update the footer year when appropriate.

The initial biography uses the Lancaster profile and owner-provided fellowship details. The fellowship is described as awarded, without assuming a change in formal employment title. No unpublished submission details or private administrative information are included.

Sources checked on 15 September 2026:

- https://www.lancaster.ac.uk/scc/about-us/people/jinghui-hu
- https://arxiv.org/abs/2602.06164
- https://arxiv.org/abs/2608.30014
- https://scholar.google.com/citations?user=JxZD-V0AAAAJ

Before publishing updates, check navigation, mail links, publication links, and layout on narrow and wide screens. The site has no JavaScript dependencies, tracking scripts, or remote font dependencies.

## Design

The September 2026 refresh implements the approved halftone editorial concept: bold typography, cobalt accents, vector dot artwork, thin rules, and publication rows. The layout adapts to mobile screens; background details use a native keyboard-accessible disclosure. The illustration is decorative and hidden from assistive technology. No JavaScript is required.
