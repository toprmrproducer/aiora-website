import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, Split } from "../components/blocks";
import { Reveal, Section, Button, Stat } from "../components/ui";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

export default function Retail() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="By industry, Retail and grocery"
        imageSrc={asset("assets/scenes/sc-retail-hero.jpg")}
        imagePosition="60% center"
        title={<>Every catalog question and shopping list, <span className="text-wine">answered</span>.</>}
        body="Retail and grocery businesses lose orders to slow replies and manual chats. AIORA handles the catalog questions, takes the shopping-list order and keeps the follow-up moving, on the phone and on WhatsApp."
        micro="Retail, grocery, distribution and D2C."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/os" }}
      />

      <Split
        eyebrow="The leak"
        title="Orders slip away between the enquiry and the reply."
        body="A customer asks if something is in stock. By the time someone answers, they have bought it elsewhere. Multiply that across every hour of every day and it is a real number on the P&L."
        imageSrc={asset("assets/scenes/sc-customers-band.jpg")}
        imageLabel="Retail floor"
        points={[
          "Stock and price questions answered instantly from your real catalog.",
          "Shopping-list photos turned into a clean, checkable order.",
          "Delivery and order status handled without a human chasing it.",
        ]}
      />

      <Section tone="light2" pad="lg">
        <div className="grid gap-10 sm:grid-cols-3">
          <Stat display="24/7" label="Catalog and order desk, every hour the shop is closed included" />
          <Stat value={30} suffix="%" label="Fewer manual back-and-forth messages per order, reported by early users" />
          <Stat display="1 thread" label="From first question to confirmed order, in the channel the customer chose" />
        </div>
      </Section>

      <CardRow
        eyebrow="What AIORA runs for retail"
        title="The desk that never goes to lunch."
        tone="light"
        cols={4}
        cards={[
          { title: "Catalog questions", body: "Answer availability, price, pack size and substitute questions from your live catalog.", icon: "whatsapp" },
          { title: "Photo to order", body: "Turn a customer's handwritten or typed list into a structured order your team can pick.", icon: "check" },
          { title: "Order status", body: "Handle where-is-my-order and delivery-window questions without pulling a person off the floor.", icon: "pin" },
          { title: "Reorders", body: "Recognise a repeat customer and rebuild their usual basket in a few messages.", icon: "growth" },
        ]}
      />

      <Steps
        eyebrow="How it goes live"
        title="Start with the counter that is busiest."
        tone="light2"
        steps={[
          { title: "Connect your catalog and channel", body: "Bring in the product list and the phone or WhatsApp number customers already use." },
          { title: "Set your rules", body: "Hours, delivery areas, substitution policy and when a human should take over." },
          { title: "Go live on one workflow", body: "Prove it on catalog-and-order, then add status, reorders and outbound offers." },
        ]}
      />

      <CTASection
        eyebrow="Start with one workflow"
        title="Stop losing the basket to a slow reply."
        body="Pick the busiest counter, connect the catalog and give every enquiry a next step."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See AIORA Talks", to: "/voice" }}
      />
    </PageWrap>
  );
}
