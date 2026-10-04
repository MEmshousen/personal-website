# Madison Emshousen's Personal Website

**Live at [memshousen.github.io/personal-website](https://memshousen.github.io/personal-website/)**

A single-page portfolio built with [Astro](https://astro.build), plain CSS and a
little vanilla JavaScript. No UI framework and no animation library.

## Run it locally

```bash
npm install     # once
npm run dev     # http://localhost:4321/personal-website/
npm run build   # production build into dist/
npm run preview # preview the production build
```

## Edit the content

Almost everything lives in one file: [`src/data/content.js`](src/data/content.js).
Edit, save, and the dev server updates instantly.

| To change | Edit |
| --- | --- |
| Which design is live | `site.design` |
| Name, job title, employer, tagline, email, links | `profile` |
| Portrait and résumé files | `profile.photo`, `profile.resume` |
| The rotating "I work in…" line | `profile.roles` |
| About paragraphs and the four figures | `about` |
| Skill groups | `skills.groups` |
| Certifications | `skills.certifications` |
| Jobs, education, volunteering | `experience.items` |
| The work-in-progress feature | `wip` |
| Project cards | `projects.items` |
| Hobbies and the Spotify player | `hobbies` |
| Contact blurb | `contact` |

Files such as the portrait, résumé and project images live in `public/`. To swap
one, drop the new file there and update its filename in `content.js`.

### Certifications

Use `year` for one you hold and `status` for one you're working toward. The block
hides itself when the list is empty.

```js
certifications: [
  { name: 'CompTIA Security+', issuer: 'CompTIA', status: 'In progress' },
  { name: 'Example Cert', issuer: 'Issuer', year: '2026', url: 'https://...' },
],
```

### Project links

```js
{
  title: 'Project Helios',
  // ...
  links: [{ label: 'View on GitHub', url: 'https://github.com/MEmshousen/helios' }],
}
```

### Spotify player

Paste a playlist, album, artist or track link into `hobbies.spotify` and a player
appears in the Music card. Leave it empty to show only the animated equaliser.

## Designs

The live design is `afterglow`: warm plum-black, soft rounded cards, one dusty-rose
accent. Two alternatives are still in the code:

| Design | Look |
| --- | --- |
| `afterglow` | Warm plum-black, rounded cards, bold grotesque type, dusty rose. |
| `dossier` | Light warm paper, serif headlines, ruled-off blocks, oxblood ink. |
| `signal` | Dark slate, grotesk and monospace, one lime accent. |

- **Switch the live design** with `site.design` in `content.js`.
- **Compare them** with `npm run dev`: a switcher appears at the bottom of the page
  (keys `1` to `3` also work). It is dev-only and never ships.
- **Preview one on the live site** by adding `?design=signal` to the URL.
- **Change a colour** in that design's block of CSS variables at the top of
  [`src/styles/global.css`](src/styles/global.css). Each design has a single
  `--accent`; change it and every link, button and highlight follows.

## Deploy

Pushing to `main` builds and publishes to GitHub Pages automatically, via
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). It takes about 30 seconds.

### Moving to a custom domain

In `astro.config.mjs`, set `site` to your domain and delete the `base` line:

```js
export default defineConfig({
  site: 'https://madisonemshousen.com',
});
```

Then add a `public/CNAME` file containing just your domain. The same applies if
you rename the repo to `MEmshousen.github.io`: drop `base`.

## Project layout

```
src/
├── data/content.js    all the site's text and settings
├── styles/global.css  design tokens and shared styles
├── layouts/Base.astro page shell, fonts, shared scripts
├── components/        one file per section (Hero, About, Skills, …)
└── pages/             index.astro and the 404 page
public/                portrait, résumé, favicon, images
```

## Accessibility and performance

- Every animation is disabled under `prefers-reduced-motion: reduce`.
- The full page renders with JavaScript off; scroll reveals only apply when it's on.
- Pointer effects (background dots, magnetic buttons, card tilt, the reactive name)
  run only on devices with a mouse.
- `⌘K` / `Ctrl K` opens a keyboard-driven command menu for jumping between sections.
- No client-side framework: the page ships a few KB of vanilla script.
