# Madison Emshousen — Personal Website

A single-page portfolio built with [Astro](https://astro.build). Fully responsive and
animated with plain CSS + a little vanilla JavaScript — no UI framework, no animation library.

## Choosing a design

The site ships with three complete designs. Each has its own type, palette and
surface treatment, and exactly one accent colour.

| Design | Look |
| --- | --- |
| `dossier` | Light, warm paper. Serif headlines, ruled-off blocks instead of boxes, oxblood ink. |
| `signal` | Dark slate. Grotesk + monospace, dot grid, one lime accent. |
| `afterglow` | Warm plum-black. Soft rounded cards, bold grotesque type, dusty rose. |

Set the one visitors get with `site.design` at the top of
[`src/data/content.js`](src/data/content.js).

To compare them, run `npm run dev`: a switcher appears at the bottom of the page
(keys `1`–`3` also work). The switcher is dev-only and never ships. On the deployed
site you can still preview any design by adding `?design=signal` to the URL.

## Editing the content

**Almost everything you'll want to change lives in one file: [`src/data/content.js`](src/data/content.js).**

| What you want to change | Where |
| --- | --- |
| Which design is live | `site.design` |
| Name, tagline, email, LinkedIn/GitHub links | `profile` |
| The rotating job titles in the hero | `profile.roles` |
| About paragraphs and the four stat tiles | `about` |
| Skill groups and chips | `skills.groups` |
| Certifications (hidden until you add one) | `skills.certifications` |
| Jobs, education, volunteering | `experience.items` |
| Project cards | `projects.items` |

Edit, save, and the dev server updates instantly.

### Adding a certification

The certifications block stays hidden while the array is empty. Add an entry and it appears:

```js
certifications: [
  { name: 'CompTIA Security+', issuer: 'CompTIA', year: '2026', url: 'https://...' },
],
```

### Adding a project link

```js
{
  title: 'Project Helios',
  // ...
  links: [{ label: 'View on GitHub', url: 'https://github.com/MEmshousen/helios' }],
}
```

### Changing the colors

Each design's palette is a block of CSS variables at the top of
[`src/styles/global.css`](src/styles/global.css). Change `--accent` in the block for
your design and every rule, link, button and highlight follows.

### Replacing your résumé

Drop the new PDF in `public/` and update `profile.resume` in `content.js` to match the filename.

## Running it locally

```bash
npm install     # once
npm run dev     # http://localhost:4321/personal-website/
npm run build   # production build into dist/
npm run preview # preview the production build
```

## Deploying

Pushing to `main` builds and publishes automatically via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

**One-time setup:** in the repo on GitHub, go to **Settings → Pages → Build and
deployment**, and set **Source** to **GitHub Actions**.

### If you move to a custom domain

In `astro.config.mjs`, set `site` to your domain and **delete the `base` line**:

```js
export default defineConfig({
  site: 'https://madisonemshousen.com',
  // base removed
});
```

Then add a `public/CNAME` file containing just your domain.

The same applies if you rename the repo to `MEmshousen.github.io` — drop `base`.

## Accessibility & performance notes

- Every animation is disabled under `prefers-reduced-motion: reduce`.
- Scroll-reveal is gated behind a `.js` class, so the full page renders with JavaScript off.
- Ships zero client-side framework JS — only a few KB of inline vanilla script.
- Pointer effects (magnetic buttons, card tilt, the reactive name) only run on devices with a mouse.
- `⌘K` / `Ctrl K` opens a keyboard-driven command menu for jumping between sections.
