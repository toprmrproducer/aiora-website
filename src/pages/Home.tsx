import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrap from "../components/PageWrap";
import { Reveal, Button, Section, Stat, icons, Arrow } from "../components/ui";
import { VideoBg, VideoFrame } from "../components/Media";
import CTASection from "../components/CTASection";
import {
  offerings, gapStats, resultStats, whyCards,
  caseStudies, testimonialsA, testimonialFeatured, gapFails, stills,
} from "../lib/data";
import { asset } from "../lib/asset";

export default function Home() {
  return (
    <PageWrap>
      <section className="relative z-10 flex h-svh min-h-[640px] items-center overflow-hidden bg-[#171515] text-ivory">
        {/* Portrait lives on the right with no wash over the face, matching the selected comp. */}
        <div className="absolute inset-y-0 right-0 w-[70%] lg:w-[68%]" aria-hidden>
          <img
            src={asset("assets/posters/hero-planets.jpg")}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{ objectPosition: "72% center" }}
          />
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[52%] bg-gradient-to-r from-[#171515] from-40% via-[#171515]/80 to-transparent" />

        <div className="site-container relative z-10 w-full pb-16 pt-28">
          <div className="max-w-[38rem]">
            <motion.p
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.12 }}
              className="eyebrow max-w-[22ch] text-ivory/75"
            >
              Artificial intelligence for<br />real business
            </motion.p>

            <h1 aria-label="From potential to performance." className="display mt-8 text-[clamp(3.4rem,7.6vw,6.4rem)] text-ivory">
              {["From", "potential", "to performance."].map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={{ opacity: 0, y: 36 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.22 + i * 0.1 }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.62 }}
              className="mt-8 max-w-[34ch] text-[16px] leading-relaxed text-ivory/78 md:text-[17px]"
            >
              AIORA builds the AI operating system for modern companies. We help you turn ambitious ideas into
              measurable outcomes across your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.78 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Button to="/contact" variant="solidLight">Book a call</Button>
              <Button to="/os" variant="outlineLight">Explore our products</Button>
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
          <div className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-28 lg:pl-[max(2.5rem,calc((100vw-1280px)/2+2.5rem))] lg:pr-16">
            <Reveal><p className="eyebrow text-ink/45">The implementation gap is real</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 max-w-[16ch] text-[clamp(2.5rem,5.4vw,4.4rem)] text-ink">Most AI initiatives never make it past pilots.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[46ch] text-[16px] leading-relaxed text-graphite md:text-[17px]">
                Great models are not enough. Without the right operating system, AI stays in demos, drains budgets and
                fails to create lasting impact.
              </p>
            </Reveal>
            <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0">
              {gapStats.map((s, i) => (
                <Reveal key={s.small} delay={0.05 * i}>
                  <div className={`sm:px-6 ${i === 0 ? "sm:pl-0" : "sm:border-l sm:border-ink/12"}`}>
                    <div className="display text-[clamp(2rem,3.2vw,2.7rem)] text-ink">{s.big}</div>
                    <div className="mt-3 max-w-[18ch] text-[13px] leading-snug text-graphite">{s.small}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div className="relative min-h-[52vh] lg:min-h-full">
            <img src={asset("assets/scenes/canyon-portal.png")} alt="A figure before a towering lit portal" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink py-24 text-ivory md:py-32">
        <img src={asset("assets/scenes/canyon-portal.png")} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/70 to-ink/35" />
        <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal><p className="eyebrow text-ivory/55">The implementation gap</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.4rem,5.6vw,4.4rem)]">Most AI projects <span className="text-wine">never make it.</span></h2>
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

      <section className="relative overflow-hidden bg-ink py-24 text-ivory md:py-36">
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
                  <img src={asset(o.image)} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
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
        <div className="mt-20 grid gap-12 sm:grid-cols-3 sm:gap-0">
          {whyCards.map((c, i) => (
            <Reveal key={c.title} delay={0.05 * i}>
              <div className={`text-center ${i === 0 ? "" : "sm:border-l sm:border-ink/12"} sm:px-10`}>
                <span className="inline-flex justify-center text-ink/70">{icons[c.icon]}</span>
                <h3 className="mt-7 text-[18px] font-semibold tracking-tight">{c.title}</h3>
                <p className="mx-auto mt-3 max-w-[28ch] text-[14px] leading-relaxed text-graphite">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="light2" pad="xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <p className="eyebrow text-ink/45">Why adopt AI</p>
            <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.5rem,5.6vw,4.4rem)]">
              A more capable and <span className="text-wine">human</span> future.
            </h2>
            <p className="mt-7 max-w-[46ch] text-[16px] leading-relaxed text-graphite">
              AI is not just a technology shift. It is a chance to amplify human potential, solve bigger problems
              and create a fairer, more prosperous world.
            </p>
            <div className="mt-10"><Button to="/os" variant="solid">Explore the possibilities</Button></div>
          </Reveal>
          <Reveal delay={0.1}>
            <VideoFrame
              src={asset("assets/video/helix.mp4")}
              poster={asset("assets/posters/helix.jpg")}
              object="contain"
              className="aspect-[4/5] w-full bg-ivory"
            />
          </Reveal>
        </div>
      </Section>

      <section className="bg-ink py-20 text-ivory md:py-28">
        <div className="site-container mb-10">
          <Reveal><p className="eyebrow text-ivory/55">The world we are building in</p></Reveal>
          <Reveal delay={0.05}><h2 className="display mt-5 text-[clamp(2rem,4.5vw,3.4rem)]">Cinematic stills from the operating day.</h2></Reveal>
        </div>
        <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-4 md:gap-3 md:px-4">
          {stills.map((s, i) => (
            <Reveal key={s.src} delay={0.03 * i}>
              <figure className="group relative aspect-[4/5] overflow-hidden">
                <img src={asset(s.src)} alt={s.label} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-4 text-[12px] uppercase tracking-label text-ivory/80">{s.label}</figcaption>
              </figure>
            </Reveal>
          ))}
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
              <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ivory-2/40 md:flex-row">
                <div className="relative aspect-[4/5] w-full shrink-0 md:aspect-auto md:w-[42%]">
                  <img src={asset(t.photo)} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
                </div>
                <div className="flex flex-1 flex-col justify-between p-7 md:p-8">
                  <blockquote className="text-[17px] leading-relaxed text-ink">{t.quote}</blockquote>
                  <figcaption className="mt-8">
                    <div className="font-semibold text-ink">{t.who}</div>
                    <div className="mt-1 text-sm text-graphite">{t.org}</div>
                  </figcaption>
                </div>
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
