import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrap from "../components/PageWrap";
import { Reveal, Button, Section, Stat, Marquee, ImageSlot, icons, Arrow } from "../components/ui";
import CTASection from "../components/CTASection";
import {
  deployments, offerings, gapStats, resultStats, whyCards,
  caseStudies, testimonialsA, testimonialFeatured,
} from "../lib/data";

export default function Home() {
  return (
    <PageWrap>
      {/* ================= HERO ================= */}
      <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-ivory">
        <div className="absolute inset-0">
          <motion.img
            src="/assets/scenes/01-home-hero-eclipse.png" alt="" aria-hidden
            initial={{ scale: 1.08, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/50" />
        </div>

        <div className="site-container relative w-full pt-24">
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.15 }}
            className="eyebrow text-ivory/70"
          >
            Artificial intelligence for real business
          </motion.p>

          <h1 aria-label="From potential to performance." className="display mt-7 max-w-[16ch] text-[clamp(3.2rem,9vw,7.2rem)]">
            {["From ", "potential ", "to "].map((w, i) => (
              <motion.span key={w} className="inline-block whitespace-pre"
                initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.09 }}>
                {w}
              </motion.span>
            ))}
            <motion.span className="inline-block text-wine"
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}>
              performance.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
            className="lead mt-8 max-w-md text-graphite-light"
          >
            AIORA builds the AI operating system for modern companies. We help you turn ambitious ideas into
            measurable outcomes across your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-11 flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" variant="solidLight" arrow>Book a call</Button>
            <Button to="/os" variant="outlineLight">Explore our products</Button>
          </motion.div>
        </div>

        {/* side rail */}
        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex">
          {["People", "Ideas", "Systems", "A brighter tomorrow"].map((t, i) => (
            <motion.span key={t} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 0.75, x: 0 }} transition={{ delay: 1 + i * 0.1 }}
              className="text-[11px] uppercase tracking-label text-ivory/70">{t}</motion.span>
          ))}
        </div>

        {/* scroll cue */}
        <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/50" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none"><rect x="1" y="1" width="18" height="28" rx="9" stroke="currentColor" /><circle cx="10" cy="9" r="2.5" fill="currentColor" /></svg>
        </motion.div>
      </section>

      {/* ================= TRUST STRIP ================= */}
      <div className="border-b border-ink/10 bg-ivory py-10">
        <div className="site-container">
          <Reveal><p className="eyebrow mb-7 text-center text-graphite">Trusted across real deployments</p></Reveal>
          <Marquee items={deployments} />
        </div>
      </div>

      {/* ================= IMPLEMENTATION GAP ================= */}
      <Section tone="light" pad="xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal><p className="eyebrow text-crimson">The implementation gap is real</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.6rem)]">Most AI initiatives never make it past pilots.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-7 max-w-prose2 text-graphite">
                Great models are not enough. Without the right operating system, AI stays in demos, drains budgets and
                fails to create lasting impact.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
              {gapStats.map((s, i) => (
                <Reveal key={s.small} delay={0.05 * i}>
                  <div className="border-t border-ink/15 pt-5">
                    <div className="display text-[clamp(1.8rem,4vw,2.6rem)]">{s.big}</div>
                    <div className="mt-3 text-sm leading-snug text-graphite">{s.small}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <ImageSlot src="/assets/scenes/02-implementation-gap-forest-portal.png" alt="A figure walking toward a lit portal in a dark forest" label="Cinematic portal scene"
              className="aspect-[4/5] w-full rounded-2xl" />
          </Reveal>
        </div>
      </Section>

      {/* ================= REAL RESULTS ================= */}
      <section className="grain relative overflow-hidden bg-ink py-24 text-ivory md:py-36">
        <img src="/assets/scenes/03-real-business-operations-panorama.png" alt="" aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/70" />
        <div className="site-container relative">
          <div className="max-w-3xl">
            <Reveal><p className="eyebrow text-crimson">Proven across industries</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.6rem)]">Real companies.<br />Real results.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-7 max-w-prose2 text-graphite-light">
                From multi-location operators to fast growing ventures, AIORA helps teams move from experimentation to
                measurable impact.
              </p>
            </Reveal>
          </div>
          <div className="mt-16 grid gap-10 border-t border-ivory/15 pt-12 sm:grid-cols-3">
            {resultStats.map((s) => (
              <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} light />
            ))}
          </div>
          <Reveal delay={0.1}>
            <div className="mt-12"><Button to="/#proof" variant="linkLight">See customer stories</Button></div>
          </Reveal>
        </div>
      </section>

      {/* ================= PLATFORM / OFFERINGS ================= */}
      <Section id="platform" tone="light" pad="xl">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow text-crimson">One platform. Four ways to move faster.</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,4.2rem)]">Built around the moments that decide whether a customer buys.</h2>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {offerings.map((o, i) => (
            <Reveal key={o.tag} delay={0.05 * i}>
              <Link to={o.to}
                className="card-lift group flex h-full flex-col justify-between rounded-2xl border border-ink/10 bg-ivory-2/60 p-8 hover:border-ink/25 hover:shadow-[0_30px_70px_-30px_rgba(12,12,13,0.35)] md:p-10">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-wine">{icons[o.art]}</span>
                    <span className="eyebrow text-graphite">{o.tag}</span>
                  </div>
                  <h3 className="mt-8 text-2xl font-medium leading-tight tracking-tight md:text-[1.7rem]">{o.title}</h3>
                  <p className="mt-4 max-w-md text-graphite">{o.body}</p>
                </div>
                <span className="link-arrow mt-8 text-ink">Explore <Arrow className="arw" /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ================= WHY ADOPT AI ================= */}
      <Section tone="light2" pad="xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-crimson">A more intelligent tomorrow</p>
            <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.6rem)]">Why adopt AI now?</h2>
            <p className="lead mt-7 max-w-sm text-graphite">
              AI is not just a technology shift. It is a once in a generation opportunity to reinvent how work gets done.
            </p>
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-3">
            {whyCards.map((c, i) => (
              <Reveal key={c.title} delay={0.06 * i}>
                <div className="flex h-full flex-col bg-ivory-2 p-8">
                  <span className="text-wine">{icons[c.icon]}</span>
                  <h3 className="mt-10 text-xl font-semibold">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ================= TESTIMONIALS 1 (marquee of quotes) ================= */}
      <section className="grain overflow-hidden bg-ink py-24 text-ivory md:py-32">
        <div className="site-container">
          <Reveal><p className="eyebrow text-crimson">What teams say</p></Reveal>
        </div>
        <div className="mt-14 space-y-6">
          {[testimonialsA.slice(0, 2), testimonialsA.slice(2, 4)].map((row, ri) => (
            <div key={ri} className="relative overflow-hidden">
              <div className={`flex w-max gap-6 ${ri % 2 ? "animate-marquee [animation-direction:reverse]" : "animate-marquee"}`}>
                {[...row, ...row, ...row].map((t, i) => (
                  <figure key={i} className="w-[380px] shrink-0 rounded-2xl border border-ivory/12 bg-charcoal p-8">
                    <div className="text-4xl leading-none text-wine">&ldquo;</div>
                    <blockquote className="mt-3 text-lg leading-relaxed">{t.quote}</blockquote>
                    <figcaption className="mt-6 text-sm text-graphite-light">{t.who} · {t.org}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROOF / CASE STUDIES (honest) ================= */}
      <Section id="proof" tone="light" pad="xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal><p className="eyebrow text-crimson">Built for the moments that get missed</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,4rem)]">Deployments, labelled honestly.</h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}><Button to="/contact" variant="link">Talk to AIORA</Button></Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.name} delay={0.05 * i}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-ink/10 bg-ivory-2/50 p-8 hover:border-ink/25">
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-graphite">{c.kind}</span>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${c.status === "Deployed" ? "bg-wine/12 text-wine" : "bg-ink/8 text-graphite"}`}>{c.status}</span>
                </div>
                <h3 className="mt-6 text-2xl font-medium tracking-tight">{c.name}</h3>
                <p className="mt-4 text-graphite">{c.result}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><p className="mt-8 text-xs text-graphite-light">Evidence shown by delivery status. Measured outcomes are confirmed with each client before publication.</p></Reveal>
      </Section>

      {/* ================= TESTIMONIAL 2 (featured) ================= */}
      <section className="grain relative overflow-hidden bg-charcoal py-28 text-ivory md:py-40">
        <div className="absolute inset-0 bg-radial-crimson opacity-25" />
        <div className="site-container relative">
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <div className="text-6xl leading-none text-wine">&ldquo;</div>
              <blockquote className="display mt-4 text-[clamp(1.8rem,4vw,3.2rem)] font-light leading-[1.15]">
                {testimonialFeatured.quote}
              </blockquote>
              <figcaption className="mt-10 text-graphite-light">
                <span className="font-semibold text-ivory">{testimonialFeatured.who}</span> · {testimonialFeatured.org}
              </figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <CTASection />
    </PageWrap>
  );
}
