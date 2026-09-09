import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrap from "../components/PageWrap";
import { Reveal, Button, Section, Stat, icons, Arrow } from "../components/ui";
import { VideoBg, VideoFrame } from "../components/Media";
import CTASection from "../components/CTASection";
import HeroLayers from "../components/HeroLayers";
import Typewriter from "../components/Typewriter";
import {
  offerings, gapStats, resultStats, whyCards,
  caseStudies, testimonialsA, testimonialFeatured, gapFails,
} from "../lib/data";
import { asset } from "../lib/asset";

export default function Home() {
  return (
    <PageWrap>
      <section className="relative z-10 flex h-svh min-h-[720px] items-center overflow-hidden bg-ivory text-ivory">
        {/* Live Figma "AI ORA HERO" composition — 11 floating layers, mouse parallax */}
        <HeroLayers tone="light" />
        {/* Soft readability wash behind the headline only. Extreme left and right edges stay clean. */}
        <div className="pointer-events-none absolute inset-0 z-[8]" style={{ background: "linear-gradient(90deg, rgba(244,241,234,0.92) 0%, rgba(244,241,234,0.62) 28%, rgba(244,241,234,0.14) 48%, rgba(244,241,234,0) 60%)" }} />

        <div className="site-container relative z-10 w-full pb-16 pt-28">
          <div className="max-w-[40rem]">
            <motion.div
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}
              className="flex items-center gap-3"
            >
              <span className="flex gap-0.5 text-wine" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.9 5.9 20.3 7.2 13.6 2.2 9l6.8-.8z" /></svg>
                ))}
              </span>
              <span className="eyebrow font-bold text-ink/60">Five-star rated by the businesses we build for</span>
            </motion.div>

            <h1 aria-label="AI that gets results, confidently." className="display-tech mt-7 text-[clamp(3rem,7vw,5.9rem)] text-ink">
              {["AI that gets", "results"].map((line, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.22 + i * 0.1 }}
                >
                  {line}
                </motion.span>
              ))}
              <motion.span
                className="block text-wine"
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.42 }}
              >
                <Typewriter words={["Confidently.", "Reliably.", "Measurably."]} />
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.78 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button to="/contact" variant="solid">Book a call</Button>
              <Button to="/os" variant="outline">Explore our products</Button>
            </motion.div>
          </div>
        </div>

        <div className="absolute right-8 top-1/2 hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex">
          <span className="mb-2 block h-10 w-px bg-ivory/35" />
          {["People", "Ideas", "Systems", "A brighter", "tomorrow"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ delay: 1 + i * 0.08 }}
              className="text-[10px] uppercase tracking-[0.28em] text-ivory/80"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="bg-ivory">
        <div className="grid lg:grid-cols-2">
          <div className="flex min-h-[78vh] flex-col justify-center px-6 py-28 md:px-12 md:py-40 lg:pl-[max(2.5rem,calc((100vw-1440px)/2+2.5rem))] lg:pr-16">
            <Reveal><p className="eyebrow text-ink/45">The implementation gap is real</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-8 max-w-[18ch] text-[clamp(2.8rem,6vw,5.2rem)] text-ink">Most AI initiatives never make it past pilots.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-[52ch] text-[17px] leading-relaxed text-graphite md:text-[19px]">
                Great models are not enough. Without the right operating system, AI stays in demos, drains budgets and
                fails to create lasting impact.
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {gapStats.map((s, i) => (
                <Reveal key={s.small} delay={0.06 * i}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-ivory-2/50 p-6 transition-colors hover:border-wine/30">
                    <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-wine transition-transform duration-500 group-hover:scale-x-100" />
                    <div className="display text-[clamp(2rem,3.2vw,2.7rem)] text-ink">{s.big}</div>
                    <div className="mt-3 text-[13px] leading-snug text-graphite">{s.small}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="relative flex items-center justify-center px-6 py-10 md:px-10 lg:py-16">
            <div className="pointer-events-none absolute right-6 top-1/2 hidden h-[62%] w-[62%] -translate-y-1/2 rounded-3xl bg-wine/10 lg:block" />
            <Reveal className="relative w-full">
              <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-3xl shadow-[0_50px_120px_-50px_rgba(12,12,13,0.6)]">
                <img src={asset("assets/scenes/02-implementation-gap-forest-portal.png")} alt="A figure before a towering lit portal" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ivory/90 px-4 py-2 text-[12px] font-semibold text-ink backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-wine" /> AIORA closes the gap
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-32 text-ivory md:py-44">
        <img src={asset("assets/stock/stock-15.png")} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-ink/10" />
        <div className="site-container relative grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal><p className="eyebrow text-ivory/55">The implementation gap</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-8 max-w-[14ch] text-[clamp(2.8rem,6.2vw,5.4rem)]">Most AI projects <span className="text-wine">never make it.</span></h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-[46ch] text-[16px] leading-relaxed text-ivory/70">
                Great ideas get stuck in pilots, lost in complexity, or fail to deliver real value. AIORA closes the gap
                with a structured, end-to-end operating system built for execution.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10"><Button to="/os" variant="outlineLight">See how it works</Button></div>
            </Reveal>
          </div>
          <div className="space-y-1">
            {gapFails.map((item, i) => (
              <Reveal key={item} delay={0.05 * i}>
                <div className="flex items-center gap-4 py-3.5">
                  <span className="text-wine" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                  </span>
                  <span className="text-[17px] text-ivory/90">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-32 text-ivory md:py-44">
        <VideoBg src={asset("assets/video/wave.mp4")} poster={asset("assets/posters/wave.jpg")} overlay="mist" />
        <div className="site-container relative">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <Reveal><p className="eyebrow text-ivory/55">Proven across industries</p></Reveal>
              <Reveal delay={0.05}>
                <h2 className="display mt-6 text-[clamp(2.5rem,5.8vw,4.6rem)]">Real companies.<br />Real results.</h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <p className="max-w-md text-[16px] leading-relaxed text-ivory/70">
                From global enterprises to fast growing startups, AIORA helps teams move from experimentation to
                measurable impact.
              </p>
              <div className="mt-7"><Button to="/#proof" variant="outlineLight">See customer stories</Button></div>
            </Reveal>
          </div>
          <div className="mt-20 grid gap-10 sm:grid-cols-3 sm:gap-0">
            {resultStats.map((s, i) => (
              <div key={s.label} className={i === 0 ? "" : "sm:border-l sm:border-ivory/20 sm:pl-10"}>
                <Stat value={s.value} suffix={s.suffix} display={s.display} label={s.label} light />
              </div>
            ))}
          </div>
        </div>
      </section>

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
                className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ivory hover:border-ink/25 hover:shadow-[0_30px_70px_-30px_rgba(12,12,13,0.35)]">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img src={asset(o.image)} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]" style={{ objectPosition: o.position }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="text-wine">{icons[o.art]}</span>
                      <span className="eyebrow text-graphite">{o.tag}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-medium leading-tight tracking-tight md:text-[1.7rem]">{o.title}</h3>
                    <p className="mt-4 max-w-md text-graphite">{o.body}</p>
                  </div>
                  <span className="link-arrow mt-8 text-ink">Explore <Arrow className="arw" /></span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light" pad="xl">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal>
            <p className="eyebrow text-ink/45">A more intelligent tomorrow</p>
            <h2 className="display mt-6 text-[clamp(2.5rem,5.8vw,4.6rem)]">Why adopt AI now?</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-md text-[16px] leading-relaxed text-graphite md:text-[17px]">
              AI is not just a technology shift. It is a once in a generation opportunity to reinvent how work gets done,
              unlock new growth and create better experiences for your customers and teams.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {whyCards.map((c, i) => (
            <Reveal key={c.title} delay={0.06 * i}>
              <div className="card-lift group relative h-full overflow-hidden rounded-3xl border border-ink/10 bg-ivory p-9 hover:border-wine/30 hover:shadow-[0_40px_90px_-50px_rgba(124,37,48,0.45)]">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-radial-crimson opacity-0 transition-opacity duration-500 group-hover:opacity-60" />
                <div className="relative flex items-center justify-between">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-wine/8 text-wine transition-colors duration-500 group-hover:bg-wine group-hover:text-ivory">{icons[c.icon]}</span>
                  <span className="font-tech-mono text-sm text-ink/25">0{i + 1}</span>
                </div>
                <h3 className="relative mt-8 text-[22px] font-semibold tracking-tight">{c.title}</h3>
                <p className="relative mt-3 text-[15px] leading-relaxed text-graphite">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Full-bleed edge-to-edge video, page ground matches the video */}
      <section className="relative min-h-[86vh] overflow-hidden bg-ink text-ivory">
        <VideoBg src={asset("assets/video/wave.mp4")} poster={asset("assets/posters/wave.jpg")} overlay="none" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink via-ink/55 to-ink/10" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink/70 to-transparent" />
        <div className="site-container relative flex min-h-[86vh] items-center py-28">
          <div className="max-w-2xl">
            <Reveal><p className="eyebrow text-crimson">Why adopt AI</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.6rem,6vw,5rem)]">
                A more capable and <span className="text-wine">human</span> future.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-7 max-w-[46ch] text-graphite-light">
                AI is not just a technology shift. It is a chance to amplify human potential, solve bigger problems
                and create a fairer, more prosperous world.
              </p>
            </Reveal>
            <Reveal delay={0.15}><div className="mt-10"><Button to="/os" variant="solidLight" arrow>Explore the possibilities</Button></div></Reveal>
          </div>
        </div>
      </section>

      <Section tone="light" pad="xl">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow text-crimson">What teams say</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-[clamp(2.2rem,5vw,3.8rem)]">People who run the work, not another dashboard.</h2>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonialsA.map((t, i) => (
            <Reveal key={t.who} delay={0.05 * i}>
              <figure className="card-lift flex h-full flex-col rounded-3xl border border-ink/10 bg-ivory p-8 hover:border-ink/25 hover:shadow-[0_30px_70px_-40px_rgba(12,12,13,0.4)] md:p-10">
                <span className="flex gap-0.5 text-wine" aria-hidden>
                  {Array.from({ length: 5 }).map((_, s) => (
                    <svg key={s} width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.9 5.9 20.3 7.2 13.6 2.2 9l6.8-.8z" /></svg>
                  ))}
                </span>
                <blockquote className="mt-6 flex-1 text-[19px] leading-relaxed text-ink md:text-[21px]">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-ink/10 pt-6">
                  <img src={asset(t.photo)} alt="" className="h-12 w-12 rounded-full object-cover object-top" />
                  <span>
                    <span className="block font-semibold text-ink">{t.who}</span>
                    <span className="mt-0.5 block text-sm text-graphite">{t.org}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Section>

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
              <div className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ivory hover:border-ink/25">
                {c.image && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={asset(c.image)} alt="" className="h-full w-full object-cover" />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-graphite">{c.kind}</span>
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${c.status === "Deployed" ? "bg-wine/12 text-wine" : "bg-ink/8 text-graphite"}`}>{c.status}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-medium tracking-tight">{c.name}</h3>
                  <p className="mt-4 text-graphite">{c.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><p className="mt-8 text-xs text-graphite">Evidence shown by delivery status. Measured outcomes are confirmed with each client before publication.</p></Reveal>
      </Section>

      <section className="bg-ink py-20 text-ivory md:py-28">
        <div className="site-container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-2xl">
              <img src={asset(testimonialFeatured.photo)} alt="" className="aspect-[4/3] w-full object-cover" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow text-ivory/55">From the floor</p>
            <blockquote className="display mt-6 text-[clamp(1.7rem,3.4vw,2.6rem)] font-light leading-[1.2]">
              {testimonialFeatured.quote}
            </blockquote>
            <figcaption className="mt-8 text-graphite-light">
              <span className="font-semibold text-ivory">{testimonialFeatured.who}</span>
              <span className="mt-1 block">{testimonialFeatured.org}</span>
            </figcaption>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </PageWrap>
  );
}
