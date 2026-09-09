import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, Split } from "../components/blocks";
import { Reveal, Section, Button, Stat } from "../components/ui";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

export default function Hospitality() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="By industry, Hospitality"
        imageSrc={asset("assets/scenes/sc-hospitality-hero.jpg")}
        imagePosition="60% 40%"
        title={<>Answer, book and route before they <span className="text-wine">go elsewhere</span>.</>}
        body="Restaurants, hotels and venues lose covers and rooms to the enquiry that waited. AIORA answers the question, takes the reservation and routes the special request, so the team stays with the guests in front of them."
        micro="Restaurants, hotels, venues and travel."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/os" }}
      />

      <Split
        eyebrow="The leak"
        title="The booking goes to whoever answers first."
        body="A guest messages to ask about a table for six on Friday. Twenty minutes later someone replies. By then the party is booked down the street. Hospitality runs on the speed of the first answer."
        imageSrc={asset("assets/scenes/sc-customers-band.jpg")}
        imageLabel="Front of house"
        points={[
          "Menu, availability and policy questions answered on the spot.",
          "Reservations and room enquiries taken inside the same conversation.",
          "Special requests routed to the right person with the detail attached.",
        ]}
      />

      <Section tone="light2" pad="lg">
        <div className="grid gap-10 sm:grid-cols-3">
          <Stat display="24/7" label="Reservations and enquiries answered, including the hours the line is unattended" />
          <Stat value={15} suffix="%" label="More enquiries converted to confirmed bookings, reported by early users" />
          <Stat display="1 place" label="Every request, review and follow-up in one view for the team" />
        </div>
      </Section>

      <CardRow
        eyebrow="What AIORA runs for hospitality"
        title="Front of house that never leaves the phone unanswered."
        tone="light"
        cols={4}
        cards={[
          { title: "Reservations", body: "Take the table or room booking in the conversation the guest already started.", icon: "check" },
          { title: "Menu and policy", body: "Answer dietary, timing, pricing and cancellation questions from your real information.", icon: "whatsapp" },
          { title: "Special requests", body: "Capture the occasion, allergy or access need and route it to the right team member.", icon: "pin" },
          { title: "Follow-up and reviews", body: "Confirm, remind and invite a review so repeat guests come back through you.", icon: "growth" },
        ]}
      />

      <Steps
        eyebrow="How it goes live"
        title="Start with the channel guests message first."
        tone="light2"
        steps={[
          { title: "Connect your booking and channel", body: "Bring in the reservation system and the number or inbox guests use." },
          { title: "Set your information and rules", body: "Menu, hours, policies, table or room rules and when a manager should step in." },
          { title: "Go live on reservations", body: "Prove it on booking, then add requests, reminders and review follow-up." },
        ]}
      />

      <CTASection
        eyebrow="Start with one workflow"
        title="Win the booking that goes to the fastest reply."
        body="Connect the reservation system, load the information and answer every guest before they move on."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See WhatsApp AI", to: "/whatsapp" }}
      />
    </PageWrap>
  );
}
