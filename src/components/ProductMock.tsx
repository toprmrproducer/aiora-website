import { motion } from "framer-motion";
import { viewport } from "../lib/motion";

/* Shared premium product-UI mockups. On-system ( ivory / ink / wine ), no real
   third-party logos, all figures illustrative. These replace the abstract
   placeholder art on the product pages with something concrete. */

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }),
};

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-ivory/12 bg-charcoal p-5 text-ivory shadow-[0_50px_120px_-50px_rgba(0,0,0,0.8)] md:p-6">
      <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-radial-crimson opacity-40" />
      <div className="relative mb-4 flex items-center gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-wine/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-ivory/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-ivory/25" />
        <span className="ml-3 font-tech-mono text-[11px] uppercase tracking-label text-ivory/40">{label}</span>
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function VoiceCallMock() {
  const lines = [
    { who: "caller", text: "Hi, do you have an opening this Saturday?" },
    { who: "aiora", text: "We do. I have 11:30am or 4pm on Saturday. Which suits you?" },
    { who: "caller", text: "11:30 works." },
    { who: "aiora", text: "Booked for 11:30am Saturday. I have sent a confirmation to your number." },
  ];
  return (
    <Frame label="AIORA Talks · live call">
      <div className="flex items-center justify-between rounded-2xl bg-ink/60 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-wine/20 text-wine">
            <span className="absolute inset-0 animate-ping rounded-full bg-wine/20" />
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3v10M12 3a3 3 0 0 1 3 3v4a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3ZM6 11a6 6 0 0 0 12 0M12 17v4M9 21h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <div>
            <div className="text-sm font-semibold">Incoming call</div>
            <div className="font-tech-mono text-[11px] text-ivory/45">connected · 00:42</div>
          </div>
        </div>
        <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-semibold text-emerald-400">Answered</span>
      </div>
      <div className="mt-4 space-y-2.5">
        {lines.map((l, i) => (
          <motion.div key={i} variants={rise} custom={i} initial="hidden" whileInView="show" viewport={viewport}
            className={l.who === "caller" ? "max-w-[82%]" : "ml-auto max-w-[82%]"}>
            <div className={`rounded-2xl px-4 py-2.5 text-[13px] leading-snug ${l.who === "caller" ? "rounded-bl-sm bg-ivory/10 text-ivory/85" : "rounded-br-sm bg-wine/85 text-ivory"}`}>{l.text}</div>
          </motion.div>
        ))}
      </div>
      <motion.div variants={rise} custom={5} initial="hidden" whileInView="show" viewport={viewport}
        className="mt-4 grid grid-cols-3 gap-2 rounded-2xl border border-ivory/10 bg-ink/50 p-3">
        {[["Intent", "Book appointment"], ["Slot", "Sat 11:30am"], ["Outcome", "Confirmed"]].map(([k, v]) => (
          <div key={k}>
            <div className="text-[10px] uppercase tracking-label text-ivory/40">{k}</div>
            <div className="mt-1 text-[12px] font-medium text-ivory/90">{v}</div>
          </div>
        ))}
      </motion.div>
    </Frame>
  );
}

export function WhatsAppThreadMock() {
  const msgs = [
    { me: false, t: "Do you have the 5L in stock?" },
    { me: true, t: "Yes, in stock. Want me to reserve one and share the price?" },
    { me: false, t: "Yes please, and can I pick up today?" },
    { me: true, t: "Reserved. Pickup is ready after 4pm. Sending the invoice now." },
  ];
  return (
    <Frame label="AIORA Sales Automation · thread">
      <div className="space-y-2.5">
        {msgs.map((m, i) => (
          <motion.div key={i} variants={rise} custom={i} initial="hidden" whileInView="show" viewport={viewport}
            className={m.me ? "ml-auto max-w-[80%]" : "max-w-[80%]"}>
            <div className={`rounded-2xl px-4 py-2.5 text-[13px] leading-snug ${m.me ? "rounded-br-sm bg-[#25D366]/85 text-ink" : "rounded-bl-sm bg-ivory/10 text-ivory/85"}`}>{m.t}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-full border border-ivory/10 bg-ink/50 px-4 py-2.5 text-[12px] text-ivory/40">
        <span className="flex-1">Type a message…</span>
        <span className="grid h-7 w-7 place-items-center rounded-full bg-[#25D366] text-ink">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M4 12l16-8-6 16-3-6-7-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
        </span>
      </div>
    </Frame>
  );
}

export function VisionAlertMock() {
  const alerts = [
    { zone: "Loading bay", t: "21:14", tag: "After-hours movement" },
    { zone: "Stockroom", t: "18:02", tag: "Restricted zone entry" },
    { zone: "Front desk", t: "13:47", tag: "Queue building" },
  ];
  return (
    <Frame label="AIORA Vision · review queue">
      <div className="relative overflow-hidden rounded-2xl border border-ivory/10 bg-ink/70">
        <div className="grain absolute inset-0 opacity-[0.06]" />
        <div className="relative flex aspect-[16/9] items-center justify-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewport} transition={{ duration: 0.5 }}
            className="absolute left-[46%] top-[34%] h-[38%] w-[26%] rounded-md border-2 border-wine">
            <span className="absolute -top-6 left-0 rounded bg-wine px-2 py-0.5 font-tech-mono text-[10px] text-ivory">flagged 0.91</span>
          </motion.div>
          <span className="font-tech-mono text-[11px] uppercase tracking-label text-ivory/30">camera 03 · live</span>
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {alerts.map((a, i) => (
          <motion.div key={i} variants={rise} custom={i} initial="hidden" whileInView="show" viewport={viewport}
            className="flex items-center justify-between rounded-xl border border-ivory/10 bg-ink/50 px-4 py-2.5">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-wine" />
              <div>
                <div className="text-[12px] font-medium text-ivory/90">{a.tag}</div>
                <div className="font-tech-mono text-[10px] text-ivory/40">{a.zone} · {a.t}</div>
              </div>
            </div>
            <span className="rounded-full border border-ivory/20 px-3 py-1 text-[11px] text-ivory/70">Review</span>
          </motion.div>
        ))}
      </div>
    </Frame>
  );
}

export function DashboardMock() {
  return (
    <Frame label="AIORA Dashboard">
      <div className="grid grid-cols-2 gap-3">
        {[["Total revenue", "Rs. 2,48,930", "+12%"], ["Conversations", "1,429", "+28%"], ["Answered", "98.6%", "+4%"], ["Avg response", "2.3s", "-31%"]].map(([k, v, d]) => (
          <motion.div key={k} variants={rise} custom={0} initial="hidden" whileInView="show" viewport={viewport}
            className="rounded-2xl border border-ivory/10 bg-ink/50 p-4">
            <div className="text-[10px] uppercase tracking-label text-ivory/40">{k}</div>
            <div className="display mt-2 text-xl">{v}</div>
            <div className="mt-1 font-tech-mono text-[11px] text-emerald-400">{d}</div>
          </motion.div>
        ))}
      </div>
      <div className="mt-3 flex items-end gap-1.5 rounded-2xl border border-ivory/10 bg-ink/50 p-4">
        {[38, 52, 44, 66, 58, 78, 72, 90, 84, 100].map((h, i) => (
          <motion.span key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={viewport}
            transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="w-full rounded-sm bg-gradient-to-t from-wine/40 to-wine" style={{ minHeight: 4 }} />
        ))}
      </div>
      <p className="mt-3 font-tech-mono text-[10px] text-ivory/35">Illustrative dashboard · sample data</p>
    </Frame>
  );
}
