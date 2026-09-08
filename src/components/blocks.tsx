import type { ReactNode } from "react";
import { Reveal, Button, Section, ImageSlot, icons } from "./ui";
import Orb from "./Orb";

export function PageHero({
  eyebrow, title, body, micro, primary, secondary,
}: {
  eyebrow: string; title: ReactNode; body: string; micro?: string;
  primary: { label: string; to: string }; secondary?: { label: string; to: string };
}) {
  return (
    <section className="grain relative flex min-h-[80svh] items-center overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-radial-crimson opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>
      <div className="absolute right-[5%] top-1/2 hidden h-[340px] w-[340px] -translate-y-1/2 md:block lg:h-[460px] lg:w-[460px]">
        <Orb className="h-full w-full" />
      </div>
      <div className="site-container relative w-full pt-24">
        <Reveal><p className="eyebrow text-ivory/70">{eyebrow}</p></Reveal>
        <Reveal delay={0.06}>
          <h1 className="display mt-7 max-w-[15ch] text-[clamp(2.8rem,7vw,5.8rem)]">{title}</h1>
        </Reveal>
        <Reveal delay={0.12}><p className="lead mt-8 max-w-xl text-graphite-light">{body}</p></Reveal>
        <Reveal delay={0.18}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button to={primary.to} variant="solidLight" arrow>{primary.label}</Button>
            {secondary && <Button to={secondary.to} variant="outlineLight">{secondary.label}</Button>}
          </div>
        </Reveal>
        {micro && <Reveal delay={0.24}><p className="mt-6 text-[13px] text-ivory/50">{micro}</p></Reveal>}
      </div>
    </section>
  );
}

export function Steps({ eyebrow, title, steps, tone = "light" }: {
  eyebrow: string; title: string; steps: { title: string; body: string }[]; tone?: "light" | "light2";
}) {
  return (
    <Section tone={tone} pad="xl">
      <div className="max-w-3xl">
        <Reveal><p className="eyebrow text-crimson">{eyebrow}</p></Reveal>
        <Reveal delay={0.05}><h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,4rem)]">{title}</h2></Reveal>
      </div>
      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.title} delay={0.06 * i}>
            <div className="flex h-full flex-col bg-ivory p-8 md:p-10">
              <span className="display text-4xl text-wine">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-graphite">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function CardRow({ eyebrow, title, cards, tone = "light2", cols = 4 }: {
  eyebrow?: string; title?: string; cards: { title: string; body: string; icon?: string }[]; tone?: "light" | "light2"; cols?: 3 | 4;
}) {
  return (
    <Section tone={tone} pad="lg">
      {(eyebrow || title) && (
        <div className="mb-14 max-w-3xl">
          {eyebrow && <Reveal><p className="eyebrow text-crimson">{eyebrow}</p></Reveal>}
          {title && <Reveal delay={0.05}><h2 className="display mt-6 text-[clamp(2rem,5vw,3.4rem)]">{title}</h2></Reveal>}
        </div>
      )}
      <div className={`grid gap-6 ${cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-3"}`}>
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={0.05 * i}>
            <div className="card-lift flex h-full flex-col rounded-2xl border border-ink/10 bg-ivory p-7 hover:border-ink/25 hover:shadow-[0_24px_60px_-30px_rgba(12,12,13,0.3)]">
              {c.icon && <span className="text-wine">{icons[c.icon]}</span>}
              <h3 className="mt-6 text-lg font-semibold leading-snug">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Split({ eyebrow, title, body, points, imageSrc, imageLabel, reverse, tone = "light" }: {
  eyebrow: string; title: string; body: string; points?: string[];
  imageSrc?: string; imageLabel?: string; reverse?: boolean; tone?: "light" | "light2";
}) {
  return (
    <Section tone={tone} pad="xl">
      <div className={`grid items-center gap-14 lg:grid-cols-2 ${reverse ? "" : ""}`}>
        <Reveal className={reverse ? "lg:order-2" : ""}>
          <p className="eyebrow text-crimson">{eyebrow}</p>
          <h2 className="display mt-6 text-[clamp(2.2rem,5vw,3.6rem)]">{title}</h2>
          <p className="lead mt-7 max-w-prose2 text-graphite">{body}</p>
          {points && (
            <ul className="mt-8 space-y-4">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-1 text-wine">{icons.check}</span>
                  <span className="text-graphite">{p}</span>
                </li>
              ))}
            </ul>
          )}
        </Reveal>
        <Reveal delay={0.08} className={reverse ? "lg:order-1" : ""}>
          <ImageSlot src={imageSrc} alt={title} label={imageLabel ?? "Product visual"} className="aspect-[4/3] w-full rounded-2xl" />
        </Reveal>
      </div>
    </Section>
  );
}

export function FAQ({ title, items }: { title: string; items: { q: string; a: string }[] }) {
  return (
    <Section tone="light2" pad="xl">
      <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal><h2 className="display text-[clamp(2.2rem,5vw,3.6rem)]">{title}</h2></Reveal>
        <div className="divide-y divide-ink/12">
          {items.map((it, i) => (
            <Reveal key={it.q} delay={0.04 * i}>
              <div className="py-7">
                <h3 className="text-xl font-semibold">{it.q}</h3>
                <p className="mt-3 max-w-prose2 text-graphite">{it.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function ResponsibleNote({ title, body }: { title: string; body: string }) {
  return (
    <section className="bg-ink py-16 text-ivory md:py-20">
      <div className="site-container">
        <Reveal>
          <div className="rounded-2xl border border-crimson/30 bg-charcoal p-8 md:p-12">
            <p className="eyebrow text-crimson">Responsible use</p>
            <h3 className="display mt-5 text-[clamp(1.6rem,3.4vw,2.4rem)]">{title}</h3>
            <p className="mt-5 max-w-2xl text-graphite-light">{body}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
