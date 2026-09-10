import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, Split } from "../components/blocks";
import { Reveal, Section, Button, Stat } from "../components/ui";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

export default function Clinics() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="By industry, Clinics and services"
        imageSrc={asset("assets/scenes/sc-clinics-hero.jpg")}
        imagePosition="55% center"
        title={<>Capture the enquiry. Book the <span className="text-wine">slot</span>.</>}
        body="Clinics and service businesses live and die by the appointment book. AIORA answers the call or message, asks the right first questions, checks the calendar and confirms the booking, so the front desk is never the bottleneck."
        micro="Clinics, salons, repair, legal, property and field services."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/os" }}
      />

      <Split
        eyebrow="The leak"
        title="A missed call is a booking that never happened."
        body="The front desk is with a patient, the phone rings out, the caller tries the next name on the list. The enquiry was ready to book. It just needed answering."
        imageSrc={asset("assets/scenes/sc-team-night.jpg")}
        imageLabel="Front desk"
        reverse
        points={[
          "Every call and message answered, in your languages, at any hour.",
          "The right intake questions asked before a human is involved.",
          "Booking, reschedule and reminder handled end to end.",
        ]}
      />

      <Section tone="light2" pad="lg">
        <div className="grid gap-10 sm:grid-cols-3">
          <Stat display="0" label="Missed enquiries to call back at the end of a full day" />
          <Stat value={2} suffix="x" label="More after-hours enquiries converted into booked slots, reported by early users" />
          <Stat display="1 flow" label="Intake, booking and reminder your team stays in control of" />
        </div>
      </Section>

      <CardRow
        eyebrow="What AIORA runs for services"
        title="The front desk that answers on the first ring."
        tone="light"
        cols={4}
        cards={[
          { title: "Intake and triage", body: "Ask the reason for the visit, urgency and details your team needs before booking.", icon: "voice" },
          { title: "Booking and reschedule", body: "Offer real slots, confirm the appointment and handle changes without a call back.", icon: "check" },
          { title: "Reminders", body: "Send confirmations and reminders that cut no-shows, with an easy way to rebook.", icon: "whatsapp" },
          { title: "After-hours", body: "Give evening and weekend callers a booked slot instead of a voicemail.", icon: "pin" },
        ]}
      />

      <Steps
        eyebrow="How it goes live"
        title="Start with the calls the front desk keeps missing."
        tone="light2"
        steps={[
          { title: "Connect your calendar and number", body: "Bring in the booking system and the phone or WhatsApp line customers use." },
          { title: "Set your intake and rules", body: "The questions to ask, the slots to offer and when a human should take over." },
          { title: "Go live on booking", body: "Prove it on inbound booking, then add reminders, reschedules and recalls." },
        ]}
      />

      <CTASection
        eyebrow="Start with one workflow"
        title="Never lose a ready-to-book enquiry to a ringing phone."
        body="Connect the calendar, set the intake questions and let every caller leave with a slot."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See AIORA Talks", to: "/voice" }}
      />
    </PageWrap>
  );
}
