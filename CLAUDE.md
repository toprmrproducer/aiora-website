# AIORA website codebase guide

## Structure

- `src/pages/` contains the route-level React pages for Home, Voice, WhatsApp, Vision, OS, Pricing, Affiliate, Contact and legal pages.
- `src/components/` contains the shared navigation, footer, media, layout, CTA, animation and content-block primitives.
- `src/styles/index.css` contains the global responsive layout and visual treatment.
- `src/lib/` contains shared content, asset-path and motion helpers.
- `public/assets/` contains the supplied AIORA logos, full-resolution scene artwork, videos, posters and portrait assets.
- `DESIGN.md` is the visual contract and media map. Preserve the light editorial, crimson and cinematic system.

## Component patterns

- Keep route composition in page files and reusable structure in `src/components/`.
- Use `asset()` for public asset URLs so local and GitHub Pages builds resolve correctly.
- Use the supplied full-resolution scene artwork for visible media. Avoid upscaling small separated cutout layers as primary hero imagery.
- All hero and media crops need explicit desktop and mobile positioning, edge-to-edge coverage and reduced-motion fallbacks.
- Preserve the supplied copy and the claim gates documented in `README.md` and the live AIORA project note.

## Development and testing

```bash
npm run dev
npm run build
npm run preview
```

Run browser QA against the production build at desktop, tablet and mobile widths. Check every route, navigation and menu interaction, media loading, crop coverage, overflow, console errors, failed requests and focus behavior. Store temporary screenshots only under `/tmp` and remove them after review.

## Deployment

- `npm run deploy` builds with the `/aiora-website/` GitHub Pages base and publishes `dist` to the `gh-pages` branch.
- Production URL: `https://toprmrproducer.github.io/aiora-website/`.
- Do not report the site as fixed until the deployed URL has passed browser verification.

## Project rules

- Do not invent client proof, identities, metrics or public-claim approval.
- Do not replace the selected design direction or locked copy while solving layout issues.
- Keep supplied images distinct across adjacent slots and preserve honest alt text.
- Update this file when structure, shared patterns, deployment or testing requirements change.
