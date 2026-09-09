import { Reveal } from "./ui";
import { asset } from "../lib/asset";

const Stars = ({ light }: { light?: boolean }) => (
  <span className={`flex gap-0.5 ${light ? "text-crimson" : "text-wine"}`} aria-hidden>
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.2 6.8.8-5 4.6 1.3 6.7L12 17.9 5.9 20.3 7.2 13.6 2.2 9l6.8-.8z" /></svg>
    ))}
  </span>
);

export type Praise = { quote: string; who: string; org: string; photo: string };

// Sliding praise wall (adapted from the 21st.dev sliding testimonial).
export function TestimonialMarquee({ items, eyebrow = "What clients say", title = "Teams that stopped losing the moments that matter." }: { items: Praise[]; eyebrow?: string; title?: string }) {
  const row = [...items, ...items];
  return (
    <section className="overflow-hidden bg-ivory-2 py-24 md:py-32">
      <div className="site-container">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><p className="eyebrow text-crimson">{eyebrow}</p></Reveal>
          <Reveal delay={0.05}><h2 className="display mt-6 text-[clamp(2rem,4.8vw,3.4rem)]">{title}</h2></Reveal>
        </div>
      </div>
      <div className="mt-14" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
        <div className="flex w-max gap-5 animate-testi-slide hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <figure key={i} className="flex w-[340px] shrink-0 flex-col rounded-3xl border border-ink/10 bg-ivory p-8 md:w-[440px]">
              <Stars />
              <blockquote className="mt-5 flex-1 text-[17px] leading-relaxed text-ink md:text-lg">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-7 flex items-center gap-3 border-t border-ink/10 pt-5">
                <img src={asset(t.photo)} alt="" className="h-11 w-11 rounded-full object-cover object-top" />
                <span>
                  <span className="block text-[15px] font-semibold text-ink">{t.who}</span>
                  <span className="mt-0.5 block text-[13px] text-graphite">{t.org}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// Single elegant testimonial (adapted from the 21st.dev masked-lines testimonial).
export function SoloTestimonial({ quote, who, org, photo, tone = "light" }: Praise & { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <section className={dark ? "bg-ink py-24 text-ivory md:py-28" : "bg-ivory py-24 md:py-28"}>
      <div className="site-container">
        <figure className="mx-auto flex max-w-3xl flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="relative shrink-0">
            <span className={`absolute -inset-6 border-y ${dark ? "border-ivory/15" : "border-ink/12"}`} style={{ maskImage: "linear-gradient(to right, transparent, black, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black, transparent)" }} />
            <img src={asset(photo)} alt="" className="relative h-28 w-28 rounded-2xl object-cover object-top md:h-32 md:w-32" />
          </div>
          <figcaption className="text-center md:text-left">
            <Stars light={dark} />
            <blockquote className={`mt-5 text-[clamp(1.4rem,2.6vw,2rem)] font-light leading-snug ${dark ? "text-ivory" : "text-ink"}`}>&ldquo;{quote}&rdquo;</blockquote>
            <cite className={`mt-6 block not-italic font-semibold ${dark ? "text-ivory" : "text-ink"}`}>{who}</cite>
            <span className={`text-sm ${dark ? "text-graphite-light" : "text-graphite"}`}>{org}</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
