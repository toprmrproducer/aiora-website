import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, Split } from "../components/blocks";
import { Reveal, Section, Stat } from "../components/ui";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

export default function Assist() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA Assist"
        cosmic
        imageSrc={asset("assets/scenes/sc-pricing-dash.jpg")}
        imagePosition="60% center"
        title={<>Ask your own business, in <span className="text-wine">plain language</span>.</>}
        body="AIORA Assist answers questions about your orders, sales, purchases, clients, vendors, stock and batches from your own data, instantly, without you learning a report builder or waiting on the accounts team."
        micro="Your data, your questions, a straight answer."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/os" }}
      />

      <Split
        eyebrow="The leak"
        title="The answer is in the system. Getting it out takes a day."
        body="Which client hasn't ordered in sixty days. What did we buy from this vendor last quarter. How much of this batch is left. The data exists; it just needs someone free, a report, and an export. Assist is that someone, on call."
        imageSrc={asset("assets/scenes/sc-customers-band.jpg")}
        imageLabel="Straight answer"
        points={[
          "Ask in the words you already use, get the number back.",
          "Orders, sales, purchases, clients, vendors, stock, batches.",
          "No report builder, no waiting on the accounts desk.",
        ]}
      />

      <Section tone="light2" pad="lg">
        <div className="grid gap-10 sm:grid-cols-3">
          <Stat display="Seconds" label="From question to answer, instead of a day's wait" />
          <Stat display="0" label="Reports you have to learn to build yourself" />
          <Stat display="Your data" label="The answers come from your records, not a guess" />
        </div>
      </Section>

      <CardRow
        eyebrow="What AIORA Assist can answer"
        title="The questions you would ask if someone were always free."
        tone="light"
        cols={4}
        cards={[
          { title: "Sales and orders", body: "Top items this month, slow movers, which orders are still open, who bought what.", icon: "growth" },
          { title: "Purchases and vendors", body: "What you bought, from whom, at what price, and what is due to be paid.", icon: "os" },
          { title: "Clients", body: "Who has gone quiet, who is overdue, who is your steadiest account.", icon: "smart" },
          { title: "Stock and batches", body: "What is left of a batch, what is expiring, what needs reordering now.", icon: "pin" },
        ]}
      />

      <Steps
        eyebrow="How it goes live"
        title="Start with the question you ask the accounts team most."
        tone="light2"
        steps={[
          { title: "Connect your data", body: "Point Assist at the systems that hold your orders, purchases, stock and clients." },
          { title: "Set who can ask what", body: "Decide which people can see sales, costs, client-level detail or all of it." },
          { title: "Ask away", body: "Start with the recurring questions, then let the team ask their own." },
        ]}
      />

      <CTASection
        eyebrow="Start with one question"
        title="Stop waiting on a report to know how the business is doing."
        body="Connect your records and ask the questions you already ask, in plain language."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See AIORA Ops", to: "/os" }}
      />
    </PageWrap>
  );
}
