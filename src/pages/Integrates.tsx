import PageWrap from "../components/PageWrap";
import { PageHero, Steps, CardRow, Split } from "../components/blocks";
import { Reveal, Section, Stat } from "../components/ui";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

export default function Integrates() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA Integrates"
        cosmic
        imageSrc={asset("assets/scenes/sc-card-os.jpg")}
        imagePosition="center center"
        title={<>Your systems, finally <span className="text-wine">talking to each other</span>.</>}
        body="AIORA Integrates connects the tools you already run, so an order taken on WhatsApp lands in your ERP, a call becomes a ticket, and your reports pull from one set of numbers instead of five spreadsheets."
        micro="Tally, Zoho, Busy, Google Sheets, your ERP, your CRM, your ordering system."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See the platform", to: "/os" }}
      />

      <Split
        eyebrow="The leak"
        title="Every hand-off is a re-typed record."
        body="A staff member reads an order off WhatsApp and keys it into Tally. Someone copies the day's sales into a sheet. The same customer exists three times with three spellings. Integration is the difference between one source of truth and a pile of them."
        imageSrc={asset("assets/scenes/sc-pricing-dash.jpg")}
        imageLabel="One record"
        points={[
          "Orders, calls and messages flow into the systems you already use.",
          "Customers, items and invoices stay matched across tools.",
          "Reports read from one set of numbers, not five exports.",
        ]}
      />

      <Section tone="light2" pad="lg">
        <div className="grid gap-10 sm:grid-cols-3">
          <Stat display="0" label="Records re-typed by hand between your channel and your books" />
          <Stat value={1} suffix="" label="Source of truth for customers, items and orders" />
          <Stat display="Live" label="Sync, so the dashboard and the ledger never disagree" />
        </div>
      </Section>

      <CardRow
        eyebrow="What AIORA Integrates connects"
        title="The wiring between the front desk and the back office."
        tone="light"
        cols={4}
        cards={[
          { title: "Accounting", body: "Push confirmed orders and invoices into Tally, Zoho, Busy or your ERP without a person re-keying them.", icon: "os" },
          { title: "Ordering and catalogue", body: "Keep items, prices and stock in step with your ordering system so quotes are always current.", icon: "build" },
          { title: "CRM and contacts", body: "One customer record, matched across calls, WhatsApp and orders, with the history attached.", icon: "smart" },
          { title: "Sheets and reports", body: "Feed the spreadsheets your team already trusts from live data instead of manual exports.", icon: "growth" },
        ]}
      />

      <Steps
        eyebrow="How it goes live"
        title="Start with the two systems that cause the most double entry."
        tone="light2"
        steps={[
          { title: "Map the systems", body: "Name the tools an order touches today and where the same data gets typed twice." },
          { title: "Wire the first link", body: "Connect the channel to the system of record, with your field mapping and rules." },
          { title: "Watch it flow", body: "Confirm records land clean, then add the next system and retire the manual step." },
        ]}
      />

      <CTASection
        eyebrow="Start with one link"
        title="Stop paying people to move data between tabs."
        body="Pick the two systems that cause the most re-typing and connect them first."
        primary={{ label: "Book a call", to: "/contact" }}
        secondary={{ label: "See AIORA Ops", to: "/os" }}
      />
    </PageWrap>
  );
}
