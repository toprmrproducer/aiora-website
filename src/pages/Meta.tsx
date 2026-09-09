import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow } from "../components/blocks";
import { Reveal, Section, Button, icons } from "../components/ui";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

const industries = [
  { title: "Beauty and skincare", body: "Answer product questions, share recommendations and turn DMs into loyal customers." },
  { title: "Fashion and apparel", body: "Help shoppers find the perfect fit, check availability and complete purchases faster." },
  { title: "Food and hospitality", body: "Take reservations, answer menu questions and keep guests coming back." },
  { title: "Local services", body: "Capture leads, answer common questions and book appointments automatically." },
];

export default function Meta() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Meta, Facebook and Instagram"
        cosmic
        imageSrc={asset("assets/scenes/hero-full.jpg")}
        imagePosition="72% 38%"
        title={<>Meet customers where they <span className="text-wine">already scroll</span>.</>}
        body="AIORA handles your Facebook and Instagram conversations with the same business context, so comments and messages turn into booked, answered and fulfilled requests."
        micro="Meta · Facebook · Instagram"
        primary={{ label: "See it in action", to: "/contact" }}
        secondary={{ label: "Explore the platform", to: "/os" }}
      />

      {/* The cost of slow replies */}
      <section className="relative overflow-hidden bg-ink py-28 text-ivory md:py-36">
        <img src={asset("assets/scenes/08-final-cta-cosmic-threshold.png")} alt="" aria-hidden className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/20" />
        <div className="site-container relative grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal><p className="eyebrow text-crimson">The cost of slow replies</p></Reveal>
            <Reveal delay={0.05}>
              <h2 className="display mt-6 max-w-[14ch] text-[clamp(2.4rem,5.6vw,4.4rem)]">A comment left waiting is a <span className="text-wine">customer lost.</span></h2>
            </Reveal>
          </div>
          <div className="space-y-4">
            {[
              "Answer comments before interest fades.",
              "Reply to direct messages with real context.",
              "Route the rest to the right team or system.",
            ].map((p, i) => (
              <Reveal key={p} delay={0.05 * i}>
                <div className="flex items-center gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-crimson/50 text-wine">{icons.check}</span>
                  <span className="text-[17px] text-ivory/90">{p}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Steps
        eyebrow="How it works"
        title="From a comment to a customer."
        steps={[
          { title: "Catch the comment or message", body: "AIORA monitors your Facebook and Instagram comments, DMs and mentions in real time." },
          { title: "Answer with context", body: "Get accurate, on-brand replies using your business knowledge, products, policies and past conversations." },
          { title: "Move to the next step", body: "Book appointments, create tickets, capture leads or hand over to your team, all without leaving the conversation." },
        ]}
      />

      <CardRow
        eyebrow="Built for real business"
        title="Every interaction has a next step."
        tone="light2"
        cards={[
          { title: "Comment replies", body: "Answer public comments with helpful, on-brand responses.", icon: "whatsapp" },
          { title: "Direct messages", body: "Handle DMs, answer questions and move conversations forward.", icon: "voice" },
          { title: "Story replies", body: "Respond to story mentions and drive engagement with next steps.", icon: "smart" },
          { title: "Ad enquiries", body: "Capture and qualify leads from your Meta ads and route them instantly.", icon: "growth" },
        ]}
      />

      {/* Same intelligence, every channel (comp 5) */}
      <Section tone="light" pad="xl">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow text-crimson">One context, every channel</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,4rem)]">The same intelligence, <span className="text-wine">wherever the customer is.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="lead mt-7 max-w-prose2 text-graphite">
              AIORA keeps every conversation, customer and insight in sync across Instagram, WhatsApp, Messenger and more, so your brand always shows up with the right context, on any channel.
            </p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {industries.map((c, i) => (
            <Reveal key={c.title} delay={0.05 * i}>
              <div className="card-lift flex h-full flex-col rounded-2xl border border-ink/10 bg-ivory p-7 hover:border-ink/25 hover:shadow-[0_24px_60px_-30px_rgba(12,12,13,0.3)]">
                <h3 className="text-lg font-semibold leading-snug">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Social AI for a brighter tomorrow"
        title="Turn social conversations into customers."
        body="Bring the same business context to every comment, DM and story reply across Facebook and Instagram."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See WhatsApp AI", to: "/whatsapp" }}
      />
    </PageWrap>
  );
}
