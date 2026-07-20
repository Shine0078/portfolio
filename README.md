# Samuel Abraham - IT Support Portfolio

A recruiter-first portfolio for User Support Technician and IT Support roles.
It keeps the initial scan concise while exposing implementation details through
native, keyboard-accessible project disclosures.

**Live site:** <https://shine0078.github.io/portfolio/>

## What this repository includes

- Semantic, server-rendered content that remains readable without client-side
  JavaScript
- ATS-friendly summary, skills, project evidence, credentials, and contact
  information
- Mobile-first navigation, a skip link, visible focus states, reduced-motion
  support, and a CSS reading-progress indicator
- Persisted cyan, amber, and violet accent presets over one accessible dark
  foundation
- Local Geist fonts, optimized static HTML, and no animation framework or
  third-party font request
- Canonical metadata, JSON-LD, Open Graph and X cards, `sitemap.xml`, and
  `robots.txt`
- A one-page, text-extractable PDF resume at `public/resume.pdf`

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 3 with project-level CSS tokens
- GitHub Actions and GitHub Pages

## Local development

```bash
npm ci
npm run dev
```

The site uses the `/portfolio` base path in production and exports static files
to `out/`.

## Quality checks

Run the same core checks used in continuous integration:

```bash
npm run lint
npm run typecheck
npm run build
npm run check:export
```

The CI workflow also runs a high-severity dependency audit and Lighthouse
assertions. Lighthouse thresholds are 95% performance, 100% accessibility,
100% best practices, and 100% SEO.

## Content and theming

Portfolio content lives in `src/config` and `src/data`; section components live
in `src/components/sections`. Accent colors are CSS custom properties selected
through `data-theme="cyan"`, `"amber"`, or `"violet"`. The browser stores only
this local display preference under `portfolio-accent`.

Project summaries use native `<details>` elements so technical depth is
available without adding a client-side bundle or hiding essential content from
assistive technology.

## Resume generation

The source-controlled generator writes the final PDF to `public/resume.pdf`:

```bash
python -m pip install reportlab
python scripts/generate_resume.py
```

Review the generated PDF visually and confirm that its text can be selected or
extracted before committing it.

## Deployment

Pushes to `main` or `master` trigger the GitHub Pages build and deployment
workflow. A separate quality workflow runs linting, type checking, the
production build, export verification, dependency auditing, and Lighthouse.

The repository is intentionally configured as a static site; it has no server
runtime, database, contact-form endpoint, or secrets requirement.
