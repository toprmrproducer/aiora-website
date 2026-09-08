import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, Split } from "../components/blocks";
import CTASection from "../components/CTASection";

export default function WhatsApp() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="WhatsApp AI"
        title={<>Every WhatsApp conversation has <span className="text-wine">context</span>.</>}
        body="Help customers find answers, browse options, book and place requests without making them wait for a person to reply."
        micro="Built around the way your business already works."
        primary={{ label: "See it in action", to: "/contact" }}
        secondary={{ label: "Explore the platform", to: "/os" }}
      />

      <Split
        eyebrow="The channel your customers already use"
        title="Meet customers where the conversation already happens."
        body="AIORA brings your business context into WhatsApp, so enquiries, catalog questions, bookings and orders move forward instead of sitting unread."
        points={[
          "Answer common questions with real business context.",
          "Share the catalog and help customers browse and choose.",
          "Book the slot, confirm the order, route the follow-up.",
        ]}
        imageSrc="/assets/curated/talks-route-memory.webp"
        imageLabel="Conversation memory"
      />

      <Steps
        eyebrow="How it works"
        title="From a message to a next step."
        tone="light2"
        steps={[
          { title: "Capture the request", body: "Understand what the customer wants the moment they message, with the context of your business." },
          { title: "Answer or route", body: "Resolve the common questions instantly and hand the rest to the right person with the details attached." },
          { title: "Move it forward", body: "Book, confirm, share the catalog or place the request without leaving the chat." },
        ]}
      />

      <CardRow
        eyebrow="Ways teams use it"
        title="One thread. Every next action."
        cards={[
          { title: "Catalog questions", body: "Answer availability, price and product questions from your real catalog.", icon: "whatsapp" },
          { title: "Photo to order", body: "Turn a customer's shopping-list photo into a clearer, faster route to fulfilment.", icon: "check" },
          { title: "Bookings", body: "Take the booking or reservation inside the conversation the customer started.", icon: "check" },
          { title: "Follow-up", body: "Keep the conversation moving until the customer has what they need.", icon: "check" },
        ]}
      />

      <CTASection
        eyebrow="Give every message somewhere to go"
        title="Every WhatsApp enquiry should reach an answer."
        body="Start with the conversation that creates the most pressure today and give it a reliable next step."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See AIORA Voice", to: "/voice" }}
      />
    </PageWrap>
  );
}
