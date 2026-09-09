import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, FAQ, Split } from "../components/blocks";
import CTASection from "../components/CTASection";
import { Section, Reveal, Stat, Button } from "../components/ui";
import { asset } from "../lib/asset";

function XMark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.3" opacity="0.4" />
      <path d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex gap-1 text-wine" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.3 6.9.7-5.1 4.6 1.4 6.8L12 17.8 5.9 20.4l1.4-6.8L2.2 9l6.9-.7L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Affiliate() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA Affiliate Program"
        imageSrc={asset("assets/scenes/hero-full.png")}
        title={<>Real conversations. <span className="text-wine">Real revenue.</span></>}
        body="Partner with AIORA and earn a 50/50 revenue share by introducing businesses to AI agents that actually answer, qualify and book. You bring the relationship. We handle the build, the support and the payouts."
        micro="50/50 revenue share. Done-for-you support. Real partner success."
        primary={{ label: "Apply now", to: "/contact" }}
        secondary={{ label: "Book a call", to: "/contact" }}
      />

      <CardRow
        eyebrow="Why partner with AIORA"
        title="A powerful offer. Real opportunity."
        cards={[
          { title: "50/50 revenue share", body: "Split the recurring revenue on every business you bring on, for as long as they stay a customer.", icon: "growth" },
          { title: "High-demand offer", body: "AI voice, WhatsApp and vision agents solve a problem businesses already feel every day.", icon: "voice" },
          { title: "Done-for-you support", body: "We handle onboarding, the build and technical support. You stay focused on relationships.", icon: "smart" },
          { title: "Fast, reliable payouts", body: "Clear reporting in the AIORA Dashboard and payouts on a predictable schedule.", icon: "check" },
        ]}
      />

      {/* Partner success in numbers */}
      <Section tone="dark" pad="xl">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow text-crimson">Partner success in numbers</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,4rem)]">Real partners. <span className="text-wine">Real results.</span></h2>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <Stat display="50/50" label="Revenue share on every account you bring on" light />
          <Stat value={3.5} suffix="x" label="Average customer lifetime value versus one-off deals" light />
          <Stat display="10,000+" label="Businesses using AIORA agents" light />
          <Stat value={87} suffix="%" label="Partner retention rate year on year" light />
          <Stat display="$2M+" label="Paid to partners and growing" light />
          <Stat display="24h" label="From first intro to a live conversation with your lead" light />
        </div>
      </Section>

      {/* What this is not */}
      <Section tone="light2" pad="lg">
        <div className="mb-14 max-w-3xl">
          <Reveal><p className="eyebrow text-crimson">What this is not</p></Reveal>
          <Reveal delay={0.05}><h2 className="display mt-6 text-[clamp(2rem,5vw,3.4rem)]">A different kind of program.</h2></Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { t: "Not a get-rich-quick scheme", b: "This is recurring revenue built on real businesses getting real value. It compounds because customers stay." },
            { t: "Not low-ticket spam", b: "You are introducing a serious operating layer to serious businesses, not pushing a cheap link." },
            { t: "Not a generic affiliate network", b: "You get direct support, real product enablement and a share of the outcome, not a one-time bounty." },
          ].map((c, i) => (
            <Reveal key={c.t} delay={0.05 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-ink/10 bg-ivory p-7">
                <span className="text-wine"><XMark /></span>
                <h3 className="mt-6 text-lg font-semibold leading-snug">{c.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite">{c.b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Partner stories */}
      <Section tone="dark" pad="xl">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow text-crimson">Partner stories</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,4rem)]">Loved by partners. Built for the long term.</h2>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            { q: "The build and support are handled, so I can focus on the conversation and the relationship. The revenue share does the rest.", who: "Agency owner", role: "Marketing and automation agency" },
            { q: "My audience already trusts my recommendations. AIORA gave me an offer worth recommending, and it pays every month.", who: "Content creator", role: "Small-business audience" },
            { q: "I introduce it, AIORA delivers, and the client stays. That is the kind of partnership I was looking for.", who: "Consultant", role: "Operations consulting" },
          ].map((t, i) => (
            <Reveal key={t.who} delay={0.05 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-ivory/12 bg-charcoal p-8">
                <Stars />
                <p className="lead mt-6 text-ivory/85">{t.q}</p>
                <div className="mt-8 border-t border-ivory/12 pt-5">
                  <div className="font-semibold text-ivory">{t.who}</div>
                  <div className="mt-1 text-sm text-graphite-light">{t.role}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Split
        eyebrow="More than commissions"
        title="It is more than just a partnership."
        body="When a business you introduce grows because their customers finally get answered, that is a win you share in, month after month. Bigger businesses, happier people, and a revenue stream that grows with them."
        imageSrc={asset("assets/scenes/hero-full.png")}
        imageLabel="Partnership"
      />

      <Steps
        eyebrow="How it works"
        title="Three simple steps to start earning."
        steps={[
          { title: "Apply", body: "Tell us who you serve and how you reach them. We approve partners who can genuinely introduce AIORA to the right businesses." },
          { title: "Promote", body: "Introduce AIORA with the materials and support we provide. We handle the demo, the build and onboarding." },
          { title: "Earn", body: "Collect your 50/50 revenue share on every account, tracked transparently and paid on a predictable schedule." },
        ]}
      />

      <FAQ
        title="Questions before you apply."
        items={[
          { q: "Who can join the AIORA Affiliate Program?", a: "Agencies, consultants, creators and operators who work with customer-facing businesses and can make warm introductions." },
          { q: "How much can I earn?", a: "You earn a 50/50 share of the recurring revenue on every account you bring on, for as long as they remain a customer." },
          { q: "Do you provide marketing materials?", a: "Yes. You get partner materials, product enablement and direct support so you can introduce AIORA with confidence." },
          { q: "How and when do I get paid?", a: "Earnings are tracked in the AIORA Dashboard and paid out on a predictable schedule." },
          { q: "Can I get support?", a: "Yes. We handle the demo, the build, onboarding and technical support so you can stay focused on the relationship." },
        ]}
      />

      <CTASection
        eyebrow="Ready to build together"
        title="Ready for a new revenue stream, partner?"
        body="Apply to the AIORA Affiliate Program and start earning on every business you introduce."
        primary={{ label: "Apply now", to: "/contact" }}
        secondary={{ label: "Book a call", to: "/contact" }}
      />
    </PageWrap>
  );
}
