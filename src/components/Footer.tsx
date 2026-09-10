import { Link } from "react-router-dom";
import { footerCols, contactEmail } from "../lib/data";
import { Wordmark } from "./Logo";
import { asset } from "../lib/asset";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ivory/10 bg-ink text-ivory">
      <div className="site-container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Wordmark invert />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-graphite-light">
              AI operations built around return. One operating layer for voice, WhatsApp, vision and orders.
            </p>
            <a href={`mailto:${contactEmail}`} className="link-arrow mt-6 inline-flex text-ivory/80 hover:text-ivory">
              {contactEmail}
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
          <span>ai.ora {new Date().getFullYear()}. AI for a brighter tomorrow.</span>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-ivory">Privacy</Link>
            <Link to="/legal" className="hover:text-ivory">Terms</Link>
            <span className="text-ivory/40">Built by RapidXAI</span>
          </div>
        </div>
      </div>

      {/* oversized watermark wordmark */}
      <div aria-hidden className="pointer-events-none select-none overflow-hidden px-6 pb-4">
        <img src={asset("assets/logos/wordmark.png")} alt="" className="mx-auto w-[min(92vw,1100px)] brightness-0 invert opacity-[0.06]" />
      </div>
    </footer>
  );
}
