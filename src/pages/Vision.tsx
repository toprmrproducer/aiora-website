import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, ResponsibleNote, FAQ } from "../components/blocks";
import { Reveal, Section } from "../components/ui";
import CTASection from "../components/CTASection";
import { VisionAlertMock } from "../components/ProductMock";
import { asset } from "../lib/asset";

export default function Vision() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA Vision"
        cosmic
        imageSrc={asset("assets/scenes/06-aiora-vision-human-review-abstract.png")}
        imagePosition="center center"
        title={<>Do not wait for an incident to <span className="text-wine">start paying attention</span>.</>}
        body="AIORA Vision turns camera activity into reviewable alerts, so your team can focus on the moments that may need attention instead of watching hours of footage."
        micro="Detection and alert availability depend on approved camera setup and configured use cases."
        primary={{ label: "See a detection workflow", to: "/contact" }}
        secondary={{ label: "Assess my site", to: "/contact" }}
      />

      <Section tone="light" pad="xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-crimson">See the moment, then review it</p>
            <h2 className="display mt-6 text-[clamp(2.2rem,5vw,3.6rem)]">Your team should know where to look.</h2>
            <p className="lead mt-7 max-w-prose2 text-graphite">
              AIORA Vision turns camera activity into reviewable alerts, so people spend time on the footage that may need attention instead of watching hours of empty screens.
            </p>
          </Reveal>
          <Reveal delay={0.1}><VisionAlertMock /></Reveal>
        </div>
      </Section>

      <CardRow
        eyebrow="When something looks wrong"
        title="Your team should know where to look."
        tone="light"
        cols={3}
        cards={[
          { title: "Unexpected movement in restricted zones", body: "Flag movement where it should not be happening, then route the alert to the person responsible for review.", icon: "vision" },
          { title: "High-risk product or inventory activity", body: "Surface configured activity around controlled areas or high-value inventory so a manager can investigate quickly.", icon: "vision" },
          { title: "After-hours activity", body: "Bring unusual activity outside operating hours to attention without relying on someone to watch a monitor.", icon: "vision" },
        ]}
      />

      <ResponsibleNote
        title="An alert is a prompt to review, not a verdict."
        body="AIORA Vision helps teams surface footage for review. Your team decides what happened and what action is appropriate. Do not use the system to make automatic accusations, disciplinary decisions or identity-based conclusions."
      />

      <Steps
        eyebrow="From camera event to response"
        title="A clearer response, not more footage."
        steps={[
          { title: "Detect an approved event type", body: "Choose the areas, situations and event types that matter for your site." },
          { title: "Receive the relevant context", body: "Send the alert, camera location and short event window to the right reviewer." },
          { title: "Review and respond", body: "Open the footage, verify what happened and follow your existing operational or security process." },
        ]}
      />

      <CardRow
        eyebrow="Other eligible use cases"
        title="One system. Many moments worth surfacing."
        tone="light2"
        cards={[
          { title: "Queue and service visibility", body: "Identify configured congestion or unattended customer areas for staff review.", icon: "check" },
          { title: "Restricted-area monitoring", body: "Surface activity in areas that require attention outside normal access rules.", icon: "check" },
          { title: "Operational review", body: "Locate the moments that matter during a complaint, stock discrepancy or site incident.", icon: "check" },
          { title: "Safety review", body: "Bring configured safety-sensitive events to the relevant team for human assessment.", icon: "check" },
        ]}
      />

      <FAQ
        title="Security teams need context, not more footage."
        items={[
          { q: "Does AIORA Vision replace our security team?", a: "No. It helps the team find moments to review faster. Human review and your existing security process remain essential." },
          { q: "Can it tell us someone stole something?", a: "No. It can flag configured activity for review. A human must assess the footage and decide what happened." },
          { q: "Will it work with our existing cameras?", a: "This depends on the approved camera setup and integration. We assess the site before making a compatibility claim." },
        ]}
      />

      <CTASection
        eyebrow="Start with one zone"
        title="Give your team the footage that deserves attention."
        body="Start with one site, one high-risk zone or one use case. Prove the workflow before expanding."
        primary={{ label: "Assess my camera setup", to: "/contact" }}
        secondary={{ label: "Explore the platform", to: "/os" }}
      />
    </PageWrap>
  );
}
