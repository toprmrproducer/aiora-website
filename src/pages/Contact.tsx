import { useState } from "react";
import PageWrap from "../components/PageWrap";
import { Reveal, Section, icons } from "../components/ui";
import { FAQ } from "../components/blocks";
import { SoloTestimonial } from "../components/Testimonials";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", business: "", email: "", goal: "AIORA Voice", message: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${form.name}%0D%0ABusiness: ${form.business}%0D%0AEmail: ${form.email}%0D%0AInterested in: ${form.goal}%0D%0A%0D%0A${form.message}`;
    window.location.href = `mailto:hello@aiora.live?subject=AIORA enquiry from ${encodeURIComponent(form.name || "website")}&body=${body}`;
    setSent(true);
  };

  const field = "w-full rounded-xl border border-ink/15 bg-ivory px-4 py-3.5 text-ink outline-none transition-colors placeholder:text-graphite-light/70 focus:border-wine";

  return (
    <PageWrap>
      <section className="relative min-h-screen overflow-hidden bg-ink pt-32 text-ivory">
        <video autoPlay muted loop playsInline poster={asset("assets/scenes/support-human.png")} className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40">
          <source src={asset("assets/video/earth-beam.mp4")} type="video/mp4" />
        </video>
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
              <a href="mailto:hello@aiora.live" className="link-arrow mt-10 inline-flex text-ivory/80 hover:text-ivory">hello@aiora.live</a>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-ivory/12 bg-ivory p-8 text-ink md:p-10">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-start justify-center">
                  <span className="text-wine">{icons.check}</span>
                  <h2 className="display mt-6 text-3xl">Your draft is ready.</h2>
                  <p className="mt-4 text-graphite">We opened an email to hello@aiora.live with your details. Send it and we will reply within one business day.</p>
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

      {/* Why teams choose AIORA */}
      <Section tone="light" pad="xl">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="eyebrow text-crimson">Real reasons</p>
            <h2 className="display mt-6 text-[clamp(2.4rem,5.5vw,4rem)]">Why teams choose AIORA.</h2>
          </Reveal>
          <div className="space-y-8">
            {[
              ["One workflow with a single success metric", "Clear outcomes. No scattered pilots."],
              ["A controlled path that expands only after proof", "Start where it matters. Scale with confidence."],
              ["Built around the channels you already use", "Voice, WhatsApp, web and more. No rip and replace."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={0.05 * i}>
                <div className="flex items-start gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-wine/40 text-wine">{icons.check}</span>
                  <div>
                    <div className="text-xl font-semibold text-ink">{t}</div>
                    <div className="mt-1 text-graphite">{d}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Where we work */}
      <Section tone="light2" pad="lg">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr_1fr] md:items-start">
          <Reveal><h2 className="display text-[clamp(2.2rem,5vw,3.4rem)]">Where we work.</h2></Reveal>
          <Reveal delay={0.05}>
            <p className="eyebrow text-crimson">India</p>
            <p className="mt-4 leading-relaxed text-graphite">AIORA Technologies Pvt. Ltd.<br />Bengaluru, Karnataka<br />India</p>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-crimson">Get in touch</p>
            <a href="mailto:hello@aiora.live" className="mt-4 inline-block text-lg text-ink hover:text-wine">hello@aiora.live</a>
          </Reveal>
        </div>
      </Section>

      {/* Questions before you book */}
      <FAQ
        title="Questions before you book."
        items={[
          { q: "How fast can we go live?", a: "Most teams move from first call to a working pilot in days, not months." },
          { q: "Do you work with our tools?", a: "Yes. AIORA integrates with your existing systems, data sources and workflows." },
          { q: "What does a pilot look like?", a: "A focused, low-risk implementation designed to prove value quickly and identify next steps." },
        ]}
      />

      <SoloTestimonial
        tone="dark"
        quote="The first call turned into a live pilot in days, not weeks."
        who="Alex Chen"
        org="Founder, a services business"
        photo="assets/people/p1.jpg"
      />

      {/* Security first */}
      <Section tone="light" pad="xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow text-crimson">Trust by design</p>
            <h2 className="display mt-6 text-[clamp(2.4rem,5.5vw,4rem)]">Security first<span className="text-wine">.</span></h2>
            <p className="mt-6 max-w-md text-graphite">Your data, your customers and your business are protected by enterprise-grade security, compliance and privacy practices.</p>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              ["SOC 2", "Audited controls to protect your data and customers."],
              ["ISO 27001", "Information security management you can trust."],
              ["GDPR", "Built for global privacy and data protection."],
              ["HIPAA", "Healthcare-ready safeguards for sensitive data."],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={0.05 * i}>
                <div className="flex h-full flex-col rounded-2xl border border-ink/12 bg-ivory p-6">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-wine/40 text-wine">{icons.check}</span>
                  <div className="mt-5 text-lg font-semibold">{t}</div>
                  <p className="mt-2 text-[13px] leading-relaxed text-graphite">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection
        eyebrow="Ready when you are"
        title="Your customers are already reaching out."
        body="Give every one of them a next step. Start with the workflow that leaks the most revenue today."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "Explore the platform", to: "/os" }}
      />
    </PageWrap>
  );
}
