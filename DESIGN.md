# AIORA design system

Selected client direction: cinematic dark hero, ivory editorial body, wine/crimson accent, Manrope, real motion. Source comps are the India Today nominee mockups (dark "From potential to performance" plus the light editorial follow-through). Do not invent a third art direction.

## 1. Intent

Premium operating-system brand for Indian mid-market operators. Quiet command, not demo-day. Imagery is cinematic atmosphere, never fabricated proof. Copy stays operator-plain.

## 2. Tokens

| Token | Value | Use |
|---|---|---|
| ivory | `#F4F1EA` | Page ground, light sections |
| ivory-2 | `#ECE7DD` | Alternate light band |
| ink | `#0C0C0D` | Dark sections, type on ivory |
| charcoal | `#131315` | Nested dark panels |
| wine | `#7C2530` | Accent word, icons, progress |
| crimson | `#A32E33` | Eyebrows on dark, glow |
| graphite | `#6B6862` | Body on ivory |
| graphite-light | `#9A968E` | Body on ink |

Spacing: 8px grid. Section padding `py-28 md:py-40`. Site max width `1280px`. Radius: pills `999px`, cards `16-24px`. Hairlines at 12% ink or 14% ivory.

## 3. Type

Display: Outfit 300, tracking `-0.038em`, leading `0.92` (matches the selected comps). Body and UI: Manrope 400-600. Eyebrow: 11px, uppercase, tracking `0.22em`. Body never below 16px. Wordmark: uppercase AIORA, tracking `0.34em`. Hero headline is three stacked lines, all ivory. Do not tint "performance" wine.

## 4. Layout grammar

Hero is full viewport, copy left, cinematic media right/full-bleed with a left ink gradient so type stays readable. Light sections are editorial: headline + 1 column of lead, then a 2 or 3 column evidence/media block. Dark cinematic bands interrupt the ivory rhythm (results, testimonials, CTA). Product pages reuse PageHero + Split + Steps + CardRow + FAQ + CTA.

## 5. Primitives

- **Button**: pill, solid ink / solid ivory / outline. Hover lifts 1px, solid fills wine. Arrow slides 6px on link buttons. Magnetic pull on fine pointers only.
- **Nav**: transparent over home hero, ivory glass after 40px or off-home. Hide on scroll down, reveal on scroll up. Mega-menu for products. Mobile is a full ink panel.
- **Card**: ivory, 1px ink/10 border, hover lift 6px and deeper shadow. Never a coloured top bar.
- **Stat**: display numeral, wine suffix, graphite label. Count-up once in view.
- **ImageSlot / VideoBg**: object-cover, rounded 16-24px in-flow, full-bleed in heroes. Reduced motion shows the poster still.
- **Marquee**: 38s linear loop of deployment names. Pause is not required.
- **Form field**: ivory fill, ink/15 border, wine focus.

States: default, hover, focus-visible (wine ring), disabled (40% opacity), loading (same geometry, no layout shift).

## 6. Motion

GPU only: transform, opacity, filter. Ease `[0.22, 1, 0.36, 1]`. Reveals 0.7-0.9s from y 26. Hero words stagger 90ms. Lenis smooth scroll. ScrollTrigger parallax on full-bleed media (`yPercent` 8-14). Looping videos: muted, playsInline, pause off-screen. Film grain overlay at 5% mix-blend overlay, one instance on the shell. `prefers-reduced-motion: reduce` kills loops, Lenis, parallax and count-up.

## 7. Media map

| Slot | File |
|---|---|
| Home hero | `/assets/video/hero-planets.mp4` |
| Results band | `/assets/video/wave.mp4` |
| Implementation gap | `/assets/scenes/canyon-portal.png` |
| Voice hero | `/assets/scenes/voice-human.png` + wave video in-page |
| WhatsApp | `/assets/scenes/team.png` (hand + chat) |
| Vision | `/assets/scenes/forest-portal.png` |
| OS / pricing object | `/assets/video/orbit-structure.mp4`, `/assets/video/orb.mp4` |
| Future / why | `/assets/video/spin-form.mp4`, `/assets/video/helix.mp4` |
| Contact | `/assets/scenes/support-human.png` |

Videos are 8s H.264 loops, audio stripped, Veo footer cropped.

## 8. Accessibility and debt

Focus visible on every control. Hero videos are decorative (empty alt, aria-hidden). Testimonials are role-based placeholders, not named people. Aggregate stats on Home are illustrative until the client signs them. Contact is mailto, not a backend. Legal pages are placeholders until counsel supplies copy. No emoji icons.
