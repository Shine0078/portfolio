# Samuel Abraham — Portfolio

A static, accessibility-first portfolio for Samuel Abraham, built with Next.js,
TypeScript, and local Geist fonts.

## Local development

```bash
npm ci
npm run dev
```

The production build is exported to `out/` for GitHub Pages:

```bash
npm run lint
npm run typecheck
npm run build
```

## Architecture

- Static export with the `/portfolio` base path
- Server-rendered portfolio sections; JavaScript is limited to closing the native
  mobile popover after navigation, while reading progress is CSS-only
- CSS-only responsive layout, hover states, reduced-motion support, and optional
  view-timeline reveals
- Local font files to avoid render-blocking third-party requests
- JSON-LD, canonical metadata, Open Graph/Twitter cards, sitemap, and robots rules
- A generated, ATS-friendly PDF résumé at `public/resume.pdf`

Regenerate the résumé after editing its source content with:

```bash
python scripts/generate_resume.py
```

## Deployment

Pushes to `main` or `master` run quality checks and deploy `out/` through GitHub
Pages. The canonical production URL is:

<https://shine0078.github.io/portfolio/>
