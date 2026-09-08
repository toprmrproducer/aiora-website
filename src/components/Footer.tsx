import { Link } from "react-router-dom";
import { footerCols } from "../lib/data";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ivory/10 bg-ink text-ivory">
      <div className="site-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="text-2xl font-semibold uppercase tracking-[0.34em]">AIORA</div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite-light">
              AI operations built around return. One operating layer for voice, WhatsApp, vision and orders.
            </p>
            <a href="mailto:hello@aiora.ai" className="link-arrow mt-6 inline-flex text-ivory/80 hover:text-ivory">
              hello@aiora.ai
            </a>
          </div>
          {footerCols.map((col) => (
            <div key={col.title}>
              <div className="eyebrow text-graphite-light">{col.title}</div>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label + l.to}>
                    <Link to={l.to} className="text-[15px] text-ivory/75 transition-colors hover:text-ivory">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-ivory/10 pt-8 text-[13px] text-graphite-light md:flex-row md:items-center">
          <span>AIORA {new Date().getFullYear()}. AI for a brighter tomorrow.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ivory">Privacy</a>
            <a href="#" className="hover:text-ivory">Terms</a>
            <span className="text-ivory/40">Built by RapidXAI</span>
          </div>
        </div>
      </div>

      {/* oversized watermark wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden">
        <div className="whitespace-nowrap text-center text-[22vw] font-bold leading-[0.8] tracking-tightest text-ivory/[0.04]">AIORA</div>
      </div>
    </footer>
  );
}
