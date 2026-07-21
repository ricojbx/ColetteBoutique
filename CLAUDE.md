# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page welcome site for **Colette Boutique**, a curated gift shop in Boise, ID. Static site — plain HTML/CSS/vanilla JS, no framework and no build step. Deployed via GitHub Pages under the **ricojbx** account.

## Working on the site

- No build/install step. Edit the files directly and refresh the browser.
- Preview locally: `python3 -m http.server 8000` then open `http://localhost:8000`.
- Deploy: commit to `main` and push; GitHub Pages serves it automatically.

## Structure

- `index.html` — page markup: a full-viewport hero (silhouette + title/address/Instagram) and a cross-fading accent strip below.
- `styles.css` — all styling. Brand palette lives in `:root` CSS variables.
- `script.js` — small vanilla rotator that cross-fades the accent-strip images (honors `prefers-reduced-motion`, pauses on hidden tab).
- `assets/` — web-optimized images (`silhouette.jpg`, `logo-stripes.jpg`, `brand-board.jpg`) and `favicon.svg`.
- The `Colette *.jpg` files at the repo root are the original brand assets; the `assets/` copies (web-friendly names) are what the site references.

## Design system (important)

- **Brand green is `#5c8158`** — this is sampled from the silhouette image's own background. The hero uses a flat fill of this exact value so the silhouette JPG blends seamlessly with no visible seam. If you change `--green`, the silhouette will show a rectangular edge.
- Other brand colors: blush pink `#f3d2ce`, cream `#f8ede7`.
- Fonts (Google Fonts): **Cormorant Garamond** (serif) for the title/tagline; **Montserrat** (letter-spaced) for eyebrow/address/Instagram.

## Facts

- Address: 3122 S Bown Way, Boise, ID 83706
- Instagram: [@colette_theboutique](https://instagram.com/colette_theboutique)
