# AIORA — website

Premium, animated multi-page marketing site for **AIORA** (the India Today nominee client), built to the client-selected design direction: alternating charcoal/ivory sections, deep burgundy (wine) accent, cinematic hero, editorial Manrope type, real motion. Built by RapidXAI.

## Run it

```bash
cd ~/Code/aiora-website
npm install      # already done
npm run dev      # http://localhost:5250
```

Build for production:

```bash
npm run build    # typechecks + outputs static site to /dist
npm run preview  # serve the built /dist locally
```

Deploy `/dist` to Netlify, Vercel, Cloudflare Pages or Hostinger/Coolify (static). It is a single-page app, so add a catch-all rewrite to `/index.html` (e.g. Netlify `_redirects`: `/*  /index.html  200`).

## Stack

Vite + React + TypeScript + Tailwind + Framer Motion + react-router-dom. Manrope via Google Fonts. No backend.

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, real-deployment trust strip, implementation gap, animated results, 4-product platform grid, why-adopt, **two testimonial sections**, honest proof band, closing CTA |
| `/voice` | AIORA Voice |
| `/whatsapp` | WhatsApp AI |
| `/vision` | AIORA Vision (includes the required responsible-use block) |
| `/os` | AIORA OS (the operating layer / platform overview) |
| `/contact` | Talk to AIORA — working form (composes an email to hello@aiora.ai) |

All copy is from the client-approved mockups + the vault AIORA Funnel Copy. Motion: scroll reveals, per-word hero build, animated counters, product marquees, hover lifts, page transitions, the CSS crimson orb, film grain. Respects `prefers-reduced-motion`.

## Images

Real cinematic scenes are wired from the AIORA asset library into `public/assets/scenes/` (all QA-passed, no text, logos or fabricated proof):

- `01-home-hero-eclipse.png` — home hero, full bleed
- `02-implementation-gap-forest-portal.png` — implementation-gap section
- `03-real-business-operations-panorama.png` — results section background
- `05/06/07-...` — Voice / Vision / OS page heroes
- `08-final-cta-cosmic-threshold.png` — available for CTA use

Also wired: 4K `ai.ora` wordmark + `ao` monogram (`public/assets/logos`), Talks/Vision/OS route visuals (`public/assets/curated`). Full source library: `~/Downloads/AIORA Website Asset Library 2026-09-09`. Remaining slots use a graceful crimson fallback; to swap any image, replace the file at the same path. Testimonials are text-only by design (no fabricated customer portraits).

## ⚠️ Claims to approve before go-live (do not ship as fact unverified)

Per AIORA's own brand-safety rules (never present generated imagery as proof, never invent identities/metrics):

1. **Replaced the mockup's placeholder Google/Microsoft/AWS/Meta/Stripe "trusted by" logos** with real deployments (Mehta Emporium, KV Toys, Anytime Fitness, Red Bean Hospitality). Fake FAANG logos = fabricated proof; do not add them back.
2. **Aggregate stats** on the home page (`70%`, `3.5x`, `60%`, `24h`) are illustrative from the approved comp. Confirm each figure, or swap for cited/real numbers, before publishing.
3. **Testimonials** are role-based placeholders (no fabricated names or photos). Replace with real, approved quotes.
4. **KV Toys "30% error reduction, 13% revenue lift"** is from your storyboard — confirm it is client-cleared for public use.
5. **AIORA Vision**: keep the "an alert is a prompt to review, not a verdict" block. Do not publish detection/theft/uptime metrics without a working demo, camera compatibility list and written approval (claim gate).
6. Contact form is front-end only (opens a mailto). Wire it to your CRM/Calendly for production.

## Notes

- No 21st.dev / Magic MCP was connected in this environment, so the premium navbar and components were hand-built to that bar (mega-dropdown, scroll-aware nav, magnetic CTAs, marquees).
- Edit content in `src/lib/data.ts` (shared) and each page file; design tokens in `tailwind.config.js` + `src/styles/index.css`.
