import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, Split } from "../components/blocks";
import { Reveal, Section, Stat } from "../components/ui";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

export default function Tracks() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA Tracks"
        cosmic
        imageSrc={asset("assets/scenes/03-real-business-operations-panorama.png")}
        imagePosition="center 40%"
        title={<>Know where every order, van and rep <span className="text-wine">actually is</span>.</>}
        body="AIORA Tracks keeps stock levels, delivery status and the live location of your field sales reps and delivery riders in one view, so 'where is my order' is answered before the customer has to ask."
        micro="Inventory, dispatch, logistics status and field-team location."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/os" }}
      />

      <Split
        eyebrow="The leak"
        title="Every status check is a phone call to someone on the road."
        body="A customer asks when their order ships. The office calls the warehouse. The warehouse calls the driver. Twenty minutes later there is an answer, and it is already out of date. Tracking should be a glance, not a chain of calls."
        imageSrc={asset("assets/scenes/sc-retail-hero.jpg")}
        imageLabel="One view"
        reverse
        points={[
          "Stock levels that update as orders are raised and fulfilled.",
          "Delivery and dispatch status without calling the warehouse.",
          "Live location of field reps and riders on one map.",
        ]}
      />

      <Section tone="light2" pad="lg">
        <div className="grid gap-10 sm:grid-cols-3">
          <Stat display="1 map" label="Orders, vehicles and field team, in one place" />
          <Stat display="Live" label="Stock and delivery status, not yesterday's sheet" />
          <Stat display="0" label="Status calls to the warehouse to answer a customer" />
        </div>
      </Section>

      <CardRow
        eyebrow="What AIORA Tracks watches"
        title="The answer to 'where is it' before anyone has to chase."
        tone="light"
        cols={4}
        cards={[
          { title: "Inventory", body: "See what is in stock, what is committed and what is running low, updated as orders move.", icon: "os" },
          { title: "Delivery status", body: "Track dispatch, in-transit and delivered without a call to the loading bay.", icon: "pin" },
          { title: "Field team", body: "Live location of sales reps and delivery riders so routing and ETAs are real.", icon: "voice" },
          { title: "Customer updates", body: "Send accurate status to the customer automatically instead of a guessed date.", icon: "whatsapp" },
        ]}
      />

      <Steps
        eyebrow="How it goes live"
        title="Start with the question your office gets asked most."
        tone="light2"
        steps={[
          { title: "Connect the sources", body: "Bring in the ordering system, the dispatch process and the field-team app or numbers." },
          { title: "Set the thresholds", body: "Low-stock alerts, delivery-window rules and who sees which part of the map." },
          { title: "Go live on one lane", body: "Prove it on delivery status, then add inventory and field tracking." },
        ]}
      />

      <CTASection
        eyebrow="Start with one lane"
        title="Turn 'let me check and call you back' into a glance."
        body="Connect the ordering and dispatch systems and put the whole picture on one screen."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See AIORA Ops", to: "/os" }}
      />
    </PageWrap>
  );
}
