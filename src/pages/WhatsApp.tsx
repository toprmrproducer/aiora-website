import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow } from "../components/blocks";
import { Reveal, Section, icons } from "../components/ui";
import CTASection from "../components/CTASection";
import { WhatsAppThreadMock } from "../components/ProductMock";
import { asset } from "../lib/asset";

export default function WhatsApp() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA Sales Automation"
        cosmic
        imageSrc={asset("assets/scenes/sc-whatsapp-hero.jpg")}
        imagePosition="60% center"
        title={<>Every WhatsApp conversation has <span className="text-wine">context</span>.</>}
        body="Help customers find answers, browse options, book and place requests without making them wait for a person to reply."
        micro="Built around the way your business already works."
        primary={{ label: "See it in action", to: "/contact" }}
        secondary={{ label: "Explore the platform", to: "/os" }}
      />

      <Section tone="light" pad="xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-crimson">The channel your customers already use</p>
            <h2 className="display mt-6 text-[clamp(2.2rem,5vw,3.6rem)]">Meet customers where the conversation already happens.</h2>
            <p className="lead mt-7 max-w-prose2 text-graphite">
              AIORA brings your business context into WhatsApp, so enquiries, catalog questions, bookings and orders move forward instead of sitting unread.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Answer common questions with real business context.",
                "Share the catalog and help customers browse and choose.",
                "Book the slot, confirm the order, route the follow-up.",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-graphite"><span className="mt-1 text-wine">{icons.check}</span>{p}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1}><WhatsAppThreadMock /></Reveal>
        </div>
      </Section>

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
        secondary={{ label: "See AIORA Talks", to: "/voice" }}
      />
    </PageWrap>
  );
}
