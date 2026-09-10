import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, FAQ } from "../components/blocks";
import { Reveal, Section, Button, icons } from "../components/ui";
import CTASection from "../components/CTASection";
import { VoiceOrbCard } from "../components/VoiceOrb";
import { VoiceCallMock } from "../components/ProductMock";
import { SoloTestimonial } from "../components/Testimonials";
import { praise } from "../lib/data";
import { asset } from "../lib/asset";

export default function Voice() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA Talks"
        cosmic
        imageSrc={asset("assets/scenes/sc-voice-hero.jpg")}
        imagePosition="82% center"
        title={<>Your phone should create <span className="text-wine">momentum</span>.</>}
        body="AIORA Talks handles inbound and outbound calls, understands why the customer called and moves them toward a booking, order or qualified handoff."
        micro="Configured around your hours, services and escalation rules."
        primary={{ label: "Hear how it works", to: "/contact" }}
        secondary={{ label: "Build my call flow", to: "/contact" }}
      />

      {/* Live orb demo */}
      <section className="grain relative overflow-hidden bg-ink py-24 text-ivory md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-radial-crimson opacity-40" />
        <div className="site-container relative grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-crimson">Live demo</p>
            <h2 className="display mt-6 text-[clamp(2.4rem,5.4vw,4.2rem)]">Talk to AIORA Talks.</h2>
            <p className="lead mt-7 max-w-prose2 text-graphite-light">
              The most affordable AI voice on the market, in a real conversation. Tap to speak and our sales associate answers, understands and moves you to the next step.
            </p>
            <ul className="mt-8 space-y-3">
              {["Answers in natural Indian languages, day or night.", "Books, confirms and captures the details as it talks.", "Escalates to a human exactly where you decide."].map((p) => (
                <li key={p} className="flex items-start gap-3 text-ivory/85">
                  <span className="mt-1 text-wine">{icons.check}</span>{p}
                </li>
              ))}
            </ul>
            <div className="mt-9"><Button to="/contact" variant="solidLight" arrow>Design my call flow</Button></div>
          </Reveal>
          <Reveal delay={0.1}>
            <VoiceOrbCard />
          </Reveal>
        </div>
      </section>

      {/* The real cost + live call */}
      <Section tone="light" pad="xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-crimson">The real cost</p>
            <h2 className="display mt-6 text-[clamp(2.2rem,5vw,3.6rem)]">A missed call is rarely just a missed call.</h2>
            <p className="lead mt-7 max-w-prose2 text-graphite">
              It is the appointment that never gets booked, the order that goes elsewhere, the customer who never calls back. When your team is serving people or overloaded, the phone cannot be the weak point.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
              {[["24/7", "answered, every hour"], ["0", "missed calls to chase"], ["1 flow", "you stay in control of"]].map(([b, s]) => (
                <div key={b}>
                  <div className="display text-[clamp(1.8rem,3vw,2.6rem)] text-ink">{b}</div>
                  <div className="mt-2 text-[13px] leading-snug text-graphite">{s}</div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}><VoiceCallMock /></Reveal>
        </div>
      </Section>

      <Steps
        eyebrow="How it works"
        title="Every caller gets a clearer path."
        tone="light2"
        steps={[
          { title: "Answer with your business context", body: "Introduce the business, understand the reason for the call and handle the questions your team answers every day." },
          { title: "Collect what matters", body: "Capture the request, preferred time, location or order details instead of a vague missed-call notification." },
          { title: "Move the customer forward", body: "Book, confirm, route or hand off based on the workflow you decide." },
        ]}
      />

      <CardRow
        eyebrow="Where it earns its place"
        title="Built for the calls you keep missing."
        cards={[
          { title: "Appointments", body: "Turn calls into booked slots, not notes someone has to chase later.", icon: "check" },
          { title: "Orders", body: "Capture the order details while the customer is ready to buy.", icon: "check" },
          { title: "Service enquiries", body: "Ask the first questions, qualify the request and send it to the right person.", icon: "check" },
          { title: "After-hours calls", body: "Give callers a useful next step when the business is closed.", icon: "check" },
        ]}
      />

      <SoloTestimonial
        tone="dark"
        quote={praise[0].quote}
        who={praise[0].who}
        org={praise[0].org}
        photo={praise[0].photo}
      />

      <FAQ
        title="You stay in control of the experience."
        items={[
          { q: "Can it transfer to our team?", a: "Yes. Define which calls need a person and where they should go." },
          { q: "Can it follow our booking or order process?", a: "That is the point. Configure the questions, information and next steps around the process you already use." },
          { q: "What happens when it does not know?", a: "Set a clear fallback and human escalation route instead of allowing it to guess." },
        ]}
      />

      <CTASection
        eyebrow="Stop losing the inbound"
        title="Stop treating every inbound call like an interruption."
        body="Build a call flow that protects your team's time and gives customers a direct path to the next step."
        primary={{ label: "Design my AI voice flow", to: "/contact" }}
        secondary={{ label: "Explore the platform", to: "/os" }}
      />
    </PageWrap>
  );
}
