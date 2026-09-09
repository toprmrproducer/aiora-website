import { useState } from "react";
import PageWrap from "../components/PageWrap";
import { Reveal, icons } from "../components/ui";
import { asset } from "../lib/asset";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", email: "", goal: "AIORA Voice", message: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0ABusiness: ${form.business}%0D%0AEmail: ${form.email}%0D%0AInterested in: ${form.goal}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:hello@aiora.ai?subject=AIORA enquiry from ${encodeURIComponent(form.name || "website")}&body=${body}`;
    setSent(true);
  };

  const field = "w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-graphite-light/70 focus:border-wine";

  return (
    <PageWrap>
      <section className="relative min-h-screen overflow-hidden bg-ink pt-32 text-ivory">
        <img src={asset("assets/scenes/support-human.png")} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/55" />
        <div className="site-container relative grid gap-16 pb-28 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Reveal><p className="eyebrow text-crimson">Talk to AIORA</p></Reveal>
            <Reveal delay={0.05}>
              <h1 className="display mt-6 text-[clamp(2.6rem,6vw,4.6rem)]">
                Start with the workflow that leaks the most <span className="text-wine">revenue</span>.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead mt-8 max-w-md text-graphite-light">
                Tell us the customer conversation, call flow or order process that creates the most pressure today.
                We define the result before we deploy, then measure the system against it.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-12 space-y-5">
                {[
                  ["One workflow", "We start with a single success metric, baseline and owner."],
                  ["A controlled path", "Expand only after the first result is visible and repeatable."],
                  ["Built around you", "Configured to the channels, rules and systems your team already uses."],
                ].map(([t, d]) => (
                  <div key={t} className="flex items-start gap-4 border-t border-ivory/10 pt-5">
                    <span className="text-wine">{icons.check}</span>
                    <div>
                      <div className="font-semibold">{t}</div>
                      <div className="text-sm text-graphite-light">{d}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href="mailto:hello@aiora.ai" className="link-arrow mt-10 inline-flex text-ivory/80 hover:text-ivory">hello@aiora.ai</a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ivory/12 bg-ivory p-8 text-ink md:p-10">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-start justify-center">
                  <span className="text-wine">{icons.check}</span>
                  <h2 className="display mt-6 text-3xl">Your draft is ready.</h2>
                  <p className="mt-4 text-graphite">We opened an email to hello@aiora.ai with your details. Send it and we will reply within one business day.</p>
                  <button onClick={() => setSent(false)} className="link-arrow mt-8 text-ink">Start again</button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-5">
                  <div>
                    <label className="eyebrow text-graphite">Your name</label>
                    <input required value={form.name} onChange={set("name")} className={`${field} mt-2`} placeholder="Jane Sharma" />
                  </div>
                  <div>
                    <label className="eyebrow text-graphite">Business</label>
                    <input required value={form.business} onChange={set("business")} className={`${field} mt-2`} placeholder="Your company" />
                  </div>
                  <div>
                    <label className="eyebrow text-graphite">Work email</label>
                    <input required type="email" value={form.email} onChange={set("email")} className={`${field} mt-2`} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="eyebrow text-graphite">What do you want to improve first?</label>
                    <select value={form.goal} onChange={set("goal")} className={`${field} mt-2`}>
                      <option>AIORA Voice</option>
                      <option>WhatsApp AI</option>
                      <option>AIORA Vision</option>
                      <option>AIORA OS (the full platform)</option>
                      <option>AIORA Sales</option>
                      <option>AIORA Ops</option>
                      <option>AIORA Talks</option>
                      <option>AIORA Tracks</option>
                      <option>AIORA Assists</option>
                      <option>Pricing / six agent lines</option>
                    </select>
                  </div>
                  <div>
                    <label className="eyebrow text-graphite">The workflow that leaks the most revenue</label>
                    <textarea value={form.message} onChange={set("message")} rows={4} className={`${field} mt-2 resize-none`} placeholder="Missed calls after hours, WhatsApp enquiries piling up, orders going elsewhere..." />
                  </div>
                  <button type="submit" className="btn btn-solid w-full">Book a call</button>
                  <p className="text-center text-xs text-graphite-light">We reply within one business day. No spam, ever.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </PageWrap>
  );
}
