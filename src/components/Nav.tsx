import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, productLinks } from "../lib/data";
import { Arrow } from "./ui";
import { Wordmark } from "./Logo";

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openProducts, setOpenProducts] = useState(false);
  const [mobile, setMobile] = useState(false);
  const { pathname } = useLocation();
  const onHome = pathname === "/";
  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
    const prev = (scrollY.getPrevious() ?? 0);
    setHidden(v > 80 && v > prev);
  });

  // dark hero only exists at top of Home; elsewhere start solid
  const solid = scrolled || !onHome;
  const textCls = solid ? "text-ink" : "text-ivory";

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: hidden && !mobile ? -88 : 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500 ${
          solid ? "bg-ivory/85 shadow-[0_1px_0_rgba(12,12,13,0.08)] backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <nav className="site-container flex h-[72px] items-center justify-between">
          <Wordmark invert={!solid} />

          <ul className={`hidden items-center gap-9 lg:flex ${textCls}`}>
            {navLinks.map((l) => (
              <li
                key={l.label}
                className="relative"
                onMouseEnter={() => l.children && setOpenProducts(true)}
                onMouseLeave={() => l.children && setOpenProducts(false)}
              >
                {l.to ? (
                  <Link to={l.to} className="text-[14px] font-medium opacity-80 transition-opacity hover:opacity-100">
                    {l.label}
                  </Link>
                ) : (
                  <button className="flex items-center gap-1 text-[14px] font-medium opacity-80 transition-opacity hover:opacity-100">
                    {l.label}
                    <svg width="11" height="11" viewBox="0 0 12 12" className="mt-[2px] opacity-70"><path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" /></svg>
                  </button>
                )}

                {l.children && (
                  <AnimatePresence>
                    {openProducts && (
                      <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-[440px] -translate-x-1/2 pt-4"
                      >
                        <div className="overflow-hidden rounded-2xl border border-ink/10 bg-ivory p-2 shadow-[0_30px_80px_-20px_rgba(12,12,13,0.35)]">
                          {productLinks.map((c) => (
                            <Link key={c.to} to={c.to} className="group flex items-start gap-3 rounded-xl px-4 py-3.5 transition-colors hover:bg-ivory-2">
                              <div>
                                <div className="flex items-center gap-1.5 text-[15px] font-semibold text-ink">
                                  {c.label}
                                  <Arrow className="translate-y-[1px] opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                                </div>
                                <div className="mt-0.5 text-[13px] leading-snug text-graphite">{c.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={`hidden rounded-full px-5 py-2.5 text-[13px] font-medium transition-all duration-300 md:inline-flex ${
                solid
                  ? "bg-ink text-ivory hover:bg-wine"
                  : "border border-ivory/45 text-ivory hover:border-ivory hover:bg-ivory/10"
              }`}
            >
              Book a call
            </Link>
            <button onClick={() => setMobile(true)} className={`lg:hidden ${textCls}`} aria-label="Menu">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* mobile panel */}
      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink text-ivory lg:hidden"
          >
            <div className="site-container flex h-[72px] items-center justify-between">
              <Wordmark invert />
              <button onClick={() => setMobile(false)} aria-label="Close">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
              </button>
            </div>
            <motion.ul
              initial="hidden" animate="show"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="site-container mt-6 flex flex-col gap-1"
            >
              {[...productLinks, { label: "Pricing", to: "/pricing", desc: "" }, { label: "Contact", to: "/contact", desc: "" }].map((c) => (
                <motion.li key={c.to} variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}>
                  <Link to={c.to} onClick={() => setMobile(false)} className="block border-b border-ivory/10 py-5 text-3xl font-light tracking-tightest">
                    {c.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }} className="mt-8">
                <Link to="/contact" onClick={() => setMobile(false)} className="btn btn-solid-light w-full">Book a call</Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
