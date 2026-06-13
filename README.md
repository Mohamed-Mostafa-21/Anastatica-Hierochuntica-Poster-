# Anastatica hierochuntica — Molecular Docking Pipeline

Digital companion website for the poster *"Computational Docking Pipeline: Bioactive Compounds from Anastatica hierochuntica vs COX-2, VEGFR-2 and PPAR-γ"*.

Live structure:

```
index.html      ← main page (all content lives here)
css/style.css   ← blue & gold theme, layout, accordion styling
js/main.js      ← accordion open/close behaviour
assets/         ← decorative "Rose of Jericho" illustration (SVG)
```

## Editing content

Everything is plain HTML/CSS — no build step.

- **Team names / IDs**: edit the `.team` block near the top of `index.html`.
- **Canva poster link**: search for `canva.com/design/DAHMNC_i3Ng` and replace the URL wherever it appears (hero buttons + footer).
- **Pipeline steps**: each step is a `<div class="step">…</div>` block, numbered 1–8. Add a new step by copying an existing block and updating the badge number, title, and `step-body-inner` content.
- **Results tables (step 7)**: each compound is a `.row` div with a `top5` summary line and a collapsible `<details>` block for the full residue-contact list.
- **Colors**: all colors are CSS variables at the top of `css/style.css` (`--navy`, `--gold`, `--cream`, etc.) — change once, applies everywhere.
- **Illustration**: `assets/jericho-rose.svg` is a generated line-art motif; swap it for a photo or another illustration if you prefer (keep the filename or update the `<img src>` paths in `index.html`).

## Deploying to GitHub Pages

From inside this folder:

```bash
git init
git remote add origin https://github.com/Mohamed-Mostafa-21/Anastatica-Hierochuntica-Poster-.git
git add .
git commit -m "Add interactive docking pipeline site"
git branch -M main
git push -u origin main
```

Then in the repo on GitHub: **Settings → Pages → Source → Deploy from branch → `main` / `root`**.
GitHub will give you a live URL like:

```
https://mohamed-mostafa-21.github.io/Anastatica-Hierochuntica-Poster-/
```

Generate a QR code for that URL (e.g. via any free QR generator) and place it on the poster.
