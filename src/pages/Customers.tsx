import PageWrap from "../components/PageWrap";
import { PageHero } from "../components/blocks";
import { Reveal, Section, Button } from "../components/ui";
import CTASection from "../components/CTASection";
import { caseStudies, testimonialsA, deployments } from "../lib/data";
import { asset } from "../lib/asset";

// Honest "trusted" strip: real AIORA deployments and pilots, by sector.
// Replaces the mockup's placeholder third-party brand logos (M&S / IHG / Zendesk),
// which AIORA is not entitled to display as customers.
const trusted = [
  { name: "Mehta Emporium", sector: "Retail" },
  { name: "KV Toys", sector: "Distribution" },
  { name: "Anytime Fitness", sector: "Fitness" },
  { name: "Red Bean Hospitality", sector: "Hospitality" },
];

const featured = testimonialsA[0];

export default function Customers() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Customers"
        cosmic
        imageSrc={asset("assets/scenes/05-aiora-talks-acoustic-portrait.png")}
        imagePosition="70% 35%"
        title={<>Real businesses. <span className="text-wine">Real progress.</span></>}
        body="See how AIORA helps customer-facing businesses answer every enquiry and move it forward."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/os" }}
      />

      {/* What teams say */}
      <Section tone="light" pad="xl">
        <Reveal><p className="eyebrow text-crimson">What teams say</p></Reveal>
        <div className="mt-8 grid gap-12 lg:grid-cols-[1.5fr_0.8fr] lg:items-center">
          <Reveal delay={0.05}>
            <blockquote className="display text-[clamp(2rem,4.6vw,3.4rem)] font-light leading-[1.15]">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-10 flex items-center gap-4">
              <img src={asset(featured.photo)} alt="" className="h-14 w-14 rounded-full object-cover object-top" />
              <span>
                <span className="block font-semibold text-ink">{featured.who}</span>
                <span className="mt-0.5 block text-sm text-graphite">{featured.org}</span>
              </span>
            </figcaption>
            <span className="mt-8 block h-px w-16 bg-wine" />
          </Reveal>
        </div>
      </Section>

      {/* Proof, by delivery status */}
      <Section tone="light" pad="lg">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow text-crimson">Deployments, labelled honestly</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-[clamp(2.2rem,5.5vw,4rem)]">Proof, by delivery status.</h2>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {caseStudies.map((c, i) => (
            <Reveal key={c.name} delay={0.05 * i}>
              <div className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ivory hover:border-ink/25">
                <div className="flex items-center justify-between p-8 pb-0">
                  <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold ${c.status === "Deployed" ? "bg-emerald-500/12 text-emerald-700" : "bg-amber-500/15 text-amber-700"}`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${c.status === "Deployed" ? "bg-emerald-600" : "bg-amber-500"}`} />
                    {c.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-8 pt-6">
                  <h3 className="text-2xl font-medium tracking-tight">{c.name}</h3>
                  <p className="mt-1 text-sm font-medium text-wine">{c.kind}</p>
                  <p className="mt-4 text-graphite">{c.result}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal><p className="mt-8 text-xs text-graphite">Evidence shown by delivery status. Measured outcomes are confirmed with each client before publication.</p></Reveal>
      </Section>

      {/* Trusted across industries — honest, real deployments only */}
      <Section tone="light2" pad="lg">
        <div className="text-center">
          <Reveal><h2 className="display text-[clamp(1.9rem,4.4vw,3rem)]">Trusted across industries.</h2></Reveal>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 md:grid-cols-4">
          {trusted.map((t) => (
            <div key={t.name} className="flex flex-col items-center gap-2 bg-ivory px-6 py-10 text-center">
              <span className="text-lg font-semibold tracking-tight text-ink">{t.name}</span>
              <span className="text-[11px] uppercase tracking-label text-graphite">{t.sector}</span>
            </div>
          ))}
        </div>
        <Reveal><p className="mt-6 text-center text-xs text-graphite">Real AIORA deployments and active pilots. {deployments.length}+ businesses onboarded.</p></Reveal>
      </Section>

      <CTASection
        eyebrow="A brighter tomorrow"
        title="Ready to be the next story?"
        body="See how AIORA fits your business and get a tailored plan in a 30-minute call."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "Explore the platform", to: "/os" }}
      />
    </PageWrap>
  );
}
