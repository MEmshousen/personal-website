import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// Hosting notes:
//  • GitHub Pages PROJECT site (github.io/personal-website) → keep both lines below.
//  • Custom domain, or repo renamed to MEmshousen.github.io → set
//    site to that URL and DELETE the `base` line.
// ─────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://MEmshousen.github.io',
  base: '/personal-website',
  trailingSlash: 'ignore',
});
