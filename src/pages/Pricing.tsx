import PageWrap from "../components/PageWrap";
import { PageHero } from "../components/blocks";
import { Reveal, Section, Button, icons } from "../components/ui";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

const lines = [
  { name: "AIORA Sales", tag: "Wins and closes business on WhatsApp", icon: "growth",
    body: "Marketing campaigns, lead qualification, quotations, invoicing, collections and WhatsApp catalogue selling. One agent from first enquiry to money received." },
  { name: "AIORA Ops", tag: "Runs the daily order desk", icon: "os",
    body: "PO punching, PO reconciliation, PO tracker, PO-to-SO conversion, daily sales reports and pending reports. The paperwork your team currently does by hand." },
  { name: "AIORA Talks", tag: "Handles the phone", icon: "voice",
    body: "Inbound order calls, outbound calling campaigns and appointment booking, in Indian languages, on a real phone number." },
  { name: "AIORA Tracks", tag: "Knows where everything is", icon: "pin",
    body: "Inventory levels, delivery and logistics status, and live location of field sales reps and delivery riders." },
  { name: "AIORA Vision", tag: "Watches the site", icon: "vision",
    body: "Staff attendance from camera, theft detection, heat mapping and perimeter breach alerts on your existing CCTV." },
  { name: "AIORA Assists", tag: "Answers anything about your business", icon: "smart",
    body: "Ask in plain language about orders, sales, purchases, clients, vendors, stock and batches, and get the answer from your own data, instantly." },
];

const usage = [
  { k: "AIORA Vision, cameras", v: "4 cameras included in the Rs. 3,999 subscription. Each additional camera Rs. 1,999 / month." },
  { k: "AIORA Talks, call minutes", v: "Rs. 5.50 per minute, billed monthly on actual usage or bought as a prepaid block." },
  { k: "WhatsApp conversations", v: "Meta's per-conversation charges are billed to you at cost, with no markup." },
  { k: "Advertising spend", v: "Where campaigns are run, ad spend is billed at cost, with no markup." },
];

const examples = [
  { who: "Retail shop", cfg: "Sales + Vision (4 cameras)", cost: "2 x 3,999 = Rs. 7,998 / month", setup: "Setup Rs. 9,999 one time" },
  { who: "Distributor", cfg: "Sales + Ops + Tracks + Assists", cost: "4 x 3,999 = Rs. 15,996 / month", setup: "Setup Rs. 9,999 one time" },
  { who: "Clinic", cfg: "Talks + Sales, ~1,000 call minutes", cost: "2 x 3,999 = 7,998 + (1,000 x 5.50) = Rs. 13,498 / month", setup: "Setup Rs. 9,999 one time" },
  { who: "Factory", cfg: "Vision with 10 cameras + Ops", cost: "2 x 3,999 = 7,998 + (6 x 1,999) = Rs. 19,992 / month", setup: "Setup Rs. 9,999 one time" },
];

export default function Pricing() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA, six agent lines"
        cosmic
        imageSrc={asset("assets/scenes/pricing-rings-wide.jpg")}
        imagePosition="60% center"
        title={<>Not a chatbot. Agents that <span className="text-wine">act</span> inside your systems.</>}
        body="Each agent captures, understands, decides and acts inside your own systems. Every agent comes with a WhatsApp interface for your team and customers, plus the AIORA Dashboard."
        micro="One flat price per agent. Run one, or run all six."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "Explore the platform", to: "/os" }}
      />

      {/* Core pricing */}
      <Section tone="light" pad="xl">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <Reveal>
            <div className="grain relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-ink p-10 text-ivory md:p-12">
              <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-radial-crimson opacity-70" />
              <div className="relative">
                <p className="eyebrow text-crimson">Per agent</p>
                <div className="mt-6 flex items-end gap-2">
                  <span className="display text-[clamp(3.4rem,9vw,6rem)]">Rs. 3,999</span>
                  <span className="mb-3 text-lg text-graphite-light">/ agent / month</span>
                </div>
                <p className="mt-4 max-w-md text-graphite-light">Every agent includes the WhatsApp UI and the AIORA Dashboard. No per-seat fees, no surprise tiers.</p>
              </div>
              <div className="relative mt-10">
                <Button to="/contact" variant="solidLight" arrow>Book a call</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex h-full flex-col divide-y divide-ink/12 rounded-3xl border border-ink/12 bg-ivory-2/50 p-8 md:p-10">
              {[
                ["One-time setup", "Rs. 9,999 flat, one time. Covers any number of agents."],
                ["Included with every agent", "WhatsApp UI and the AIORA Dashboard."],
                ["Monthly bill", "(number of agents x Rs. 3,999) + usage, where applicable."],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-col gap-1 py-5 first:pt-0 last:pb-0">
                  <span className="eyebrow text-graphite">{k}</span>
                  <span className="text-lg text-ink">{v}</span>
                </div>
              ))}
              <p className="pt-5 text-xs text-graphite-light">All prices exclusive of GST.</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* The six lines */}
      <Section tone="light2" pad="xl">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow text-crimson">The six lines</p></Reveal>
          <Reveal delay={0.05}><h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,4rem)]">One price. Six ways to run your business.</h2></Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {lines.map((l, i) => (
            <Reveal key={l.name} delay={0.04 * i}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-ink/10 bg-ivory p-8 hover:border-ink/25 hover:shadow-[0_24px_60px_-30px_rgba(12,12,13,0.3)]">
                <div className="flex items-start justify-between">
                  <span className="text-wine">{icons[l.icon]}</span>
                  <span className="rounded-full bg-wine/10 px-3 py-1 text-[13px] font-semibold text-wine">Rs. 3,999 / mo</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold">{l.name}</h3>
                <p className="mt-1 text-sm font-medium text-graphite">{l.tag}</p>
                <p className="mt-4 text-sm leading-relaxed text-graphite">{l.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Usage billed separately */}
      <section className="grain bg-ink py-24 text-ivory md:py-32">
        <div className="site-container">
          <div className="max-w-3xl">
            <Reveal><p className="eyebrow text-crimson">Usage billed separately</p></Reveal>
            <Reveal delay={0.05}><h2 className="display mt-6 text-[clamp(2rem,5vw,3.4rem)]">Four lines run flat. Two carry real usage.</h2></Reveal>
            <Reveal delay={0.1}><p className="lead mt-6 text-graphite-light">Four of the six lines run entirely on the monthly subscription. Two carry real per-unit cost and are billed on usage.</p></Reveal>
          </div>
          <div className="mt-12 divide-y divide-ivory/12 border-y border-ivory/12">
            {usage.map((u, i) => (
              <Reveal key={u.k} delay={0.04 * i}>
                <div className="grid gap-3 py-6 md:grid-cols-[0.9fr_1.6fr] md:gap-10">
                  <span className="text-lg font-semibold">{u.k}</span>
                  <span className="text-graphite-light">{u.v}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <Section tone="light" pad="xl">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow text-crimson">Examples</p></Reveal>
          <Reveal delay={0.05}><h2 className="display mt-6 text-[clamp(2rem,5vw,3.4rem)]">What real setups cost.</h2></Reveal>
        </div>
        <div className="mt-14 overflow-hidden rounded-2xl border border-ink/12">
          {examples.map((e, i) => (
            <Reveal key={e.who} delay={0.04 * i}>
              <div className={`grid gap-3 p-7 md:grid-cols-[0.7fr_1.2fr_1.4fr] md:items-center md:gap-8 md:p-8 ${i % 2 ? "bg-ivory" : "bg-ivory-2/50"}`}>
                <span className="text-lg font-semibold">{e.who}</span>
                <span className="text-graphite">{e.cfg}</span>
                <span>
                  <span className="block font-medium text-ink">{e.cost}</span>
                  <span className="block text-sm text-graphite">{e.setup}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <p className="mt-8 max-w-2xl text-sm text-graphite">
            Run one agent or all six. The setup fee is charged once, not per agent, and covers configuration, integration with your existing systems, and team onboarding.
          </p>
        </Reveal>
      </Section>

      {/* Every agent, fully equipped */}
      <section className="grain relative overflow-hidden bg-ink py-24 text-ivory md:py-32">
        <div className="site-container relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <Reveal>
              <p className="eyebrow text-crimson">Built for real work</p>
              <h2 className="display mt-6 text-[clamp(2.2rem,5.2vw,3.8rem)]">Every agent, fully equipped<span className="text-wine">.</span></h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-graphite-light lg:pb-2">
                From customer conversations to operations, AIORA gives your team everything they need to perform from day one.
              </p>
            </Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="flex h-full flex-col rounded-2xl border border-ivory/12 bg-charcoal p-8 md:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366] text-ink">{icons.whatsapp}</span>
                <h3 className="mt-7 text-2xl font-medium">WhatsApp UI</h3>
                <p className="mt-4 text-graphite-light">
                  Your team works where your customers already are. Natural conversations, instant answers, real results.
                </p>
                <div className="mt-8 space-y-3">
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-[#25D366]/90 px-4 py-2.5 text-sm text-ink">Do you have this in stock?</div>
                  <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-ivory/10 px-4 py-2.5 text-sm text-ivory/90">Yes, it is in stock. Would you like me to place an order for you?</div>
                  <div className="ml-auto max-w-[60%] rounded-2xl rounded-br-sm bg-[#25D366]/90 px-4 py-2.5 text-sm text-ink">Yes, please.</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div className="flex h-full flex-col rounded-2xl border border-ivory/12 bg-charcoal p-8 md:p-10">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-wine/20 text-wine">{icons.os}</span>
                <h3 className="mt-7 text-2xl font-medium">AIORA Dashboard</h3>
                <p className="mt-4 text-graphite-light">
                  Get full visibility across conversations, customers, revenue and operations, all in one place.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-ivory/10 bg-ink/60 p-5">
                    <div className="text-[11px] uppercase tracking-label text-graphite-light">Total revenue</div>
                    <div className="display mt-2 text-2xl">Rs. 2,48,930</div>
                    <div className="mt-1 text-xs text-emerald-400">&uarr; 12%</div>
                  </div>
                  <div className="rounded-xl border border-ivory/10 bg-ink/60 p-5">
                    <div className="text-[11px] uppercase tracking-label text-graphite-light">Conversations</div>
                    <div className="display mt-2 text-2xl">1,429</div>
                    <div className="mt-1 text-xs text-emerald-400">&uarr; 28%</div>
                  </div>
                </div>
                <p className="mt-4 text-[11px] text-graphite-light">Illustrative dashboard. Figures shown are sample data.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Partner testimonial */}
      <Section tone="light" pad="lg">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal><p className="eyebrow text-crimson">Real partners. Real impact.</p></Reveal>
          <Reveal delay={0.05}>
            <blockquote className="display mt-8 text-[clamp(1.9rem,4.4vw,3.2rem)] font-light leading-[1.2]">
              &ldquo;We started with one agent, saw the return, then added three more.&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 text-sm text-graphite">Founder, a multi-location retailer</p>
          </Reveal>
        </div>
      </Section>

      <CTASection
        eyebrow="Start with one line"
        title="Pick the agent that pays for itself first."
        body="Start with the one line that removes the most manual work or wins the most revenue today, then add the rest when it is proven."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See the six lines", to: "/os" }}
      />
    </PageWrap>
  );
}
