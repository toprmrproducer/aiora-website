import PageWrap from "../components/PageWrap";
import { PageHero } from "../components/blocks";
import { Reveal, Section, Button } from "../components/ui";
import CTASection from "../components/CTASection";
import { TestimonialMarquee } from "../components/Testimonials";
import { caseStudies, testimonialsA, praise, clientsWorkedWith, clientsOpenTo } from "../lib/data";
import { asset } from "../lib/asset";

const featured = { quote: "AIORA gave us the structure, speed and confidence to scale AI across the business.", who: "Priya Sharma", org: "Chief Innovation Officer, a multi-location retail group", photo: "assets/people/p8.jpg" };

export default function Customers() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="Customers"
        cosmic
        imageSrc={asset("assets/scenes/customers-team.jpg")}
        imagePosition="center 32%"
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

      <TestimonialMarquee items={praise} eyebrow="What teams say" title="Teams that stopped losing the moments that matter." />

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
        <div className="grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-crimson">Businesses we work with</p>
            <h2 className="display mt-6 text-[clamp(1.9rem,4vw,2.8rem)]">On the floor today.</h2>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {clientsWorkedWith.map((name) => (
                <li key={name} className="flex items-center gap-3 py-4 text-[17px] text-ink">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-wine" />
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow text-ink/45">Built to work with</p>
            <h2 className="display mt-6 text-[clamp(1.9rem,4vw,2.8rem)]">Where AIORA fits next.</h2>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {clientsOpenTo.map((name) => (
                <li key={name} className="flex items-center gap-3 py-4 text-[17px] text-graphite">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25" />
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs text-graphite">This roster is maintained by the AIORA team and changes as new deployments go live.</p>
          </Reveal>
        </div>
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
