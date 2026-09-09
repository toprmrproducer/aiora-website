import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, type NavChild } from "../lib/data";
import { Wordmark } from "./Logo";
import { BrandIcon } from "./BrandIcon";

export default function Nav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setPastHero(v > window.innerHeight * 0.72));

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(null);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const activeMega = navLinks.find((l) => l.label === open);
  const light = pastHero;
  const ink = light ? "text-ink" : "text-ivory";

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-5 md:pt-4">
        <div ref={wrap} className="pointer-events-auto mx-auto max-w-[1240px]">
          <nav className="relative flex h-[58px] items-center rounded-2xl bg-transparent px-3 md:h-[64px] md:px-5">
            <Wordmark invert={!light} />

            <ul className={`absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 lg:flex ${ink}`}>
              {navLinks.map((l) => {
                const isOpen = open === l.label;
                const isOn = l.to ? pathname === l.to : Boolean(l.children?.some((c) => c.to === pathname));
                return (
                  <li key={l.label}>
                    {l.to && !l.children ? (
                      <Link
                        to={l.to}
                        onMouseEnter={() => setOpen(null)}
                        className={`rounded-lg px-3.5 py-2 text-[13px] font-medium tracking-wide opacity-80 transition-opacity hover:opacity-100 ${isOn ? "opacity-100 underline decoration-current decoration-1 underline-offset-[10px]" : ""}`}
                      >
                        {l.label.toUpperCase()}
                      </Link>
                    ) : (
                      <button
                        onMouseEnter={() => setOpen(l.label)}
                        onClick={() => setOpen(isOpen ? null : l.label)}
                        className={`rounded-lg px-3.5 py-2 text-[13px] font-medium tracking-wide opacity-80 transition-opacity hover:opacity-100 ${isOpen || isOn ? "opacity-100 underline decoration-current decoration-1 underline-offset-[10px]" : ""}`}
                      >
                        {l.label.toUpperCase()}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="ml-auto flex items-center gap-2">
              <Link
                to="/contact"
                className={`hidden rounded-full border px-5 py-2 text-[13px] font-medium transition-colors md:inline-flex ${
                  light ? "border-ink/25 text-ink hover:bg-ink hover:text-ivory" : "border-ivory/40 text-ivory hover:bg-ivory hover:text-ink"
                }`}
              >
                Book a call
              </Link>
              <button onClick={() => setMobile(true)} className={`${ink} lg:hidden`} aria-label="Menu">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>
          </nav>

          <AnimatePresence>
            {activeMega?.children && (
              <motion.div
                key={activeMega.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setOpen(activeMega.label)}
                className="mt-2 overflow-hidden rounded-2xl bg-ivory shadow-[0_24px_80px_-24px_rgba(12,12,13,0.4)] ring-1 ring-ink/10"
              >
                <Mega items={activeMega.children} onPick={() => setOpen(null)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <AnimatePresence>
        {mobile && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-ivory text-ink lg:hidden">
            <div className="flex h-[64px] items-center justify-between px-5">
              <Wordmark />
              <button onClick={() => setMobile(false)} aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>
            <div className="space-y-6 overflow-y-auto px-6 pb-10">
              {navLinks.map((l) => (
                <div key={l.label}>
                  <div className="eyebrow text-ink/40">{l.label}</div>
                  <div className="mt-3 space-y-2">
                    {(l.children ?? (l.to ? [{ label: l.label, to: l.to, desc: "" }] : [])).map((c) => (
                      <Link key={c.to + c.label} to={c.to} onClick={() => setMobile(false)} className="block py-1 text-2xl font-light tracking-tight">
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link to="/contact" onClick={() => setMobile(false)} className="btn btn-solid mt-4 inline-flex">Book a call</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Mega({ items, onPick }: { items: NavChild[]; onPick: () => void }) {
  const groups = items.some((i) => i.group)
    ? [...new Set(items.map((i) => i.group || ""))].map((g) => ({ g, rows: items.filter((i) => (i.group || "") === g) }))
    : [{ g: "", rows: items }];

  if (groups.length === 1) {
    return (
      <div className="grid gap-2 p-5 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((c) => (
          <Link key={c.to + c.label} to={c.to} onClick={onPick} className="rounded-xl p-4 transition-colors hover:bg-ivory-2">
            <BrandIcon name={c.icon} />
            <div className="mt-3 text-[16px] font-semibold text-ink">{c.label}</div>
            <div className="mt-1 text-[13px] leading-snug text-graphite">{c.desc}</div>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((g) => (
        <div key={g.g}>
          <div className="eyebrow text-ink/40">{g.g}</div>
          <ul className="mt-4 space-y-3">
            {g.rows.map((c) => (
              <li key={c.to + c.label}>
                <Link to={c.to} onClick={onPick} className="flex items-start gap-3">
                  {c.icon && <BrandIcon name={c.icon} className="mt-0.5" />}
                  <span>
                    <span className="block text-[16px] font-semibold text-ink">{c.label}</span>
                    {c.desc && <span className="mt-0.5 block text-[13px] text-graphite">{c.desc}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
