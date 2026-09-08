import { motion, useInView, useScroll, useSpring, animate } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { fadeUp, viewport } from "../lib/motion";

/* ---------- Reveal ---------- */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Button ---------- */
type BtnProps = {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "solidLight" | "outline" | "outlineLight" | "link" | "linkLight";
  className?: string;
  arrow?: boolean;
};
export function Button({ children, to, href, onClick, variant = "solid", className = "", arrow }: BtnProps) {
  const cls =
    variant === "link" || variant === "linkLight"
      ? `link-arrow ${variant === "linkLight" ? "text-ivory" : "text-ink"} ${className}`
      : `btn ${{
          solid: "btn-solid",
          solidLight: "btn-solid-light",
          outline: "btn-outline",
          outlineLight: "btn-outline-light",
        }[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {(arrow || variant === "link" || variant === "linkLight") && <Arrow className="arw" />}
    </>
  );
  if (to) return (<Link to={to} className={cls}>{inner}</Link>);
  if (href) return (<a href={href} className={cls}>{inner}</a>);
  return (<button onClick={onClick} className={cls}>{inner}</button>);
}

/* ---------- Section ---------- */
export function Section({
  children, id, tone = "light", className = "", pad = "lg",
}: { children: ReactNode; id?: string; tone?: "light" | "light2" | "dark"; className?: string; pad?: "sm" | "lg" | "xl" }) {
  const bg = tone === "dark" ? "bg-ink text-ivory" : tone === "light2" ? "bg-ivory-2 text-ink" : "bg-ivory text-ink";
  const p = pad === "xl" ? "py-28 md:py-40" : pad === "sm" ? "py-14 md:py-20" : "py-20 md:py-32";
  return (
    <section id={id} className={`relative ${bg} ${p} ${className}`}>
      <div className="site-container">{children}</div>
    </section>
  );
}

/* ---------- Icons ---------- */
export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path d="M2 8h11M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
const P = (d: string) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d={d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
export const icons: Record<string, JSX.Element> = {
  growth: P("M4 19V5M4 19h16M8 15l3-4 3 2 4-6"),
  smart: P("M12 3a5 5 0 0 1 3 9c-.6.5-1 1-1 2v1H10v-1c0-1-.4-1.5-1-2a5 5 0 0 1 3-9ZM10 20h4"),
  build: P("M4 7h7v7H4zM13 4h7v7h-7zM13 15h7v5h-7zM4 17h7v3H4z"),
  voice: P("M12 3v10M12 3a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3ZM6 11a6 6 0 0 0 12 0M12 17v4M9 21h6"),
  whatsapp: P("M20 12a8 8 0 0 1-11.7 7.1L4 20l1-4.2A8 8 0 1 1 20 12ZM9 9c0 4 2 6 6 6"),
  vision: P("M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"),
  os: P("M4 5h16v11H4zM2 20h20M9 9h6M9 12h4"),
  check: P("M4 12l5 5L20 6"),
  play: P("M8 5v14l11-7z"),
};

/* ---------- Animated Stat ---------- */
export function Stat({ value, suffix = "", label, light }: { value: number; suffix?: string; label: string; light?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6, ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value]);
  const isFloat = !Number.isInteger(value);
  return (
    <div ref={ref}>
      <div className="display text-[clamp(2.6rem,6vw,4.4rem)]">
        {isFloat ? display.toFixed(1) : Math.round(display)}
        <span className="text-wine">{suffix}</span>
      </div>
      <div className={`mt-3 text-sm leading-snug ${light ? "text-graphite-light" : "text-graphite"}`}>{label}</div>
    </div>
  );
}

/* ---------- Marquee ---------- */
export function Marquee({ items, light }: { items: string[]; light?: boolean }) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden">
      <div className="flex w-max animate-marquee gap-16 md:gap-24">
        {row.map((it, i) => (
          <span key={i} className={`whitespace-nowrap text-xl font-semibold tracking-tight md:text-2xl ${light ? "text-ivory/55" : "text-ink/45"}`}>
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- ImageSlot (graceful fallback until real asset drops) ---------- */
export function ImageSlot({
  src, alt, className = "", label, dark = true,
}: { src?: string; alt: string; className?: string; label?: string; dark?: boolean }) {
  const [ok, setOk] = useState(Boolean(src));
  useEffect(() => setOk(Boolean(src)), [src]);
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {ok && src ? (
        <img src={src} alt={alt} loading="lazy" onError={() => setOk(false)} className="h-full w-full object-cover" />
      ) : (
        <div className={`grain relative flex h-full w-full items-end ${dark ? "bg-ink" : "bg-ivory-2"}`}>
          <div className="absolute inset-0 bg-radial-crimson opacity-70" />
          <div className={`absolute inset-0 ${dark ? "bg-gradient-to-t from-ink via-ink/40 to-transparent" : ""}`} />
          <span className={`relative m-6 text-[11px] uppercase tracking-label ${dark ? "text-ivory/60" : "text-ink/50"}`}>
            {label ?? alt}
          </span>
        </div>
      )}
    </div>
  );
}

/* ---------- Scroll progress bar ---------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return <motion.div style={{ scaleX }} className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-wine" />;
}

/* ---------- Scroll to top / hash on route change ---------- */
export function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) { el.scrollIntoView({ behavior: "smooth" }); return; }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);
  return null;
}
