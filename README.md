# Samuel Abraham — IT Support Portfolio

A single-page portfolio for IT Support and Help Desk roles. Static, fast, and
readable without client-side JavaScript.

**Live site:** <https://shine0078.github.io/portfolio/>

## Code Runner arcade

**Play:** <https://shine0078.github.io/portfolio/arcade/>

A dependency-free canvas mini-game hosted as a static file in `public/arcade/index.html`.
Fly a ship with the arrow keys/A-D, pointer drag or on-screen buttons; collect
crystals for XP, dodge bugs, pick up a shield, and beat your stored personal best.
This is now **endless mode**: the run continues past 100 XP, unlocking a new wave
at each 100-point milestone. Difficulty increases gradually (up to a fair cap),
and the run ends only when all three lives are lost.
The game pauses when the tab is hidden and supports reduced motion.

Run `npm run test:arcade` to execute deterministic regression checks for
continuing past 100 XP, wave progression, personal best, pause/resume, restart
and game-over behavior.

The GitHub profile displays an animated SVG preview that links to this page;
GitHub README files cannot execute JavaScript-based games directly.

## Stack

- Next.js 16 (App Router, static export) and React 19
- TypeScript
- Plain CSS with custom properties — no UI framework
- GitHub Actions and GitHub Pages

## Local development

```bash
npm ci
```

```bash
npm run dev
```

The site uses the `/portfolio` base path, so the dev server serves it at
<http://localhost:3000/portfolio/>.

## Quality checks

```bash
npm run lint && npm run typecheck && npm run test:arcade && npm run build && npm run check:export
```

CI additionally runs a high-severity dependency audit and Lighthouse
assertions (95% performance, 100% accessibility, best practices, and SEO).

## Project layout

| Path                       | Contents                                       |
| -------------------------- | ---------------------------------------------- |
| `src/config/site.ts`       | Name, role, contact details, navigation        |
| `src/data/`                | Projects, experience, skills, credentials      |
| `src/components/sections/` | One component per page section                 |
| `src/app/globals.css`      | All styling, grouped by component              |
| `scripts/`                 | Resume generation, export checks, build helpers |

To update content, edit the files in `src/config` and `src/data` — the section
components render whatever is there.

## Resume

The PDF at `public/resume.pdf` is generated from a source-controlled script:

```bash
python -m pip install reportlab
```

```bash
python scripts/generate_resume.py
```

Confirm the text is selectable in the generated PDF before committing it.

## Deployment

Pushes to `main` or `master` trigger the GitHub Pages workflow. The site is
fully static: no server runtime, database, form endpoint, or secrets.
