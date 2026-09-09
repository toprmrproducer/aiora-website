import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, Split, FAQ } from "../components/blocks";
import CTASection from "../components/CTASection";

export default function Voice() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA Voice"
        imageSrc="/assets/scenes/05-aiora-talks-acoustic-portrait.png"
        title={<>Your phone should create <span className="text-wine">momentum</span>, not missed opportunities.</>}
        body="AIORA Voice helps your business handle inbound calls, understand why the customer called and move them toward a booking, order or qualified handoff."
        micro="Configured around your hours, services and escalation rules."
        primary={{ label: "Hear how it works", to: "/contact" }}
        secondary={{ label: "Build my call flow", to: "/contact" }}
      />

      <Split
        eyebrow="The real cost"
        title="A missed call is rarely just a missed call."
        body="It can be the appointment that never gets booked, the order that goes elsewhere or the customer who never calls back. When your team is serving people, driving or simply overloaded, the phone cannot be the weak point."
        imageSrc="/assets/curated/talks-route-hero.webp"
        imageLabel="Voice route"
      />

      <Steps
        eyebrow="How it works"
        title="Every caller gets a clearer path."
        steps={[
          { title: "Answer with your business context", body: "Introduce the business, understand the reason for the call and handle the questions your team answers every day." },
          { title: "Collect what matters", body: "Capture the request, preferred time, location or order details instead of leaving a vague missed-call notification." },
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

      <Split
        reverse
        tone="light2"
        eyebrow="You stay in control"
        title="The call should feel like your business, only more consistent."
        body="The voice, rules, handoff conditions and business information are configured around your workflow. The goal is not to replace every conversation. It is to make sure the right conversation reaches the right person."
        points={[
          "Define which calls need a person and where they go.",
          "Follow the booking or order process you already use.",
          "Set a clear fallback and human escalation route.",
        ]}
        imageSrc="/assets/curated/talks-route-handoff.webp"
        imageLabel="Human handoff"
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
