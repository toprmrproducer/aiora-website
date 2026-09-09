import PageWrap from "../components/PageWrap";
import { PageHero, CardRow, Steps, Split } from "../components/blocks";
import CTASection from "../components/CTASection";
import { asset } from "../lib/asset";

export default function OS() {
  return (
    <PageWrap>
      <PageHero
        eyebrow="AIORA OS"
        videoSrc={asset("assets/video/orbit-structure.mp4")}
        poster={asset("assets/posters/orbit-structure.jpg")}
        imageSrc={asset("assets/scenes/07-aiora-os-orchestration-landscape.png")}
        title={<>Your customers get an answer. Your business <span className="text-wine">keeps moving</span>.</>}
        body="AIORA brings voice, WhatsApp, orders and customer follow-up into one operating layer, so every enquiry has somewhere to go."
        micro="Built around the way your business already works."
        primary={{ label: "See AIORA in action", to: "/contact" }}
        secondary={{ label: "Book a call", to: "/contact" }}
      />

      <Split
        eyebrow="The operating layer"
        title="One system your team can actually run."
        body="Bring voice, WhatsApp, orders and follow-up into one place so every enquiry has somewhere to go. The object on the right is the idea: one core, many orbits."
        videoSrc={asset("assets/video/spin-form.mp4")}
        poster={asset("assets/posters/spin-form.jpg")}
        points={[
          "One place to review conversations, requests and customer activity.",
          "Configured around the channels and rules you already use.",
          "Expand only after the first workflow is working.",
        ]}
      />

      <CardRow
        eyebrow="Less chasing. Less waiting. Less getting lost."
        title="One operating layer for the moments that matter."
        tone="light"
        cols={3}
        cards={[
          { title: "Answer every enquiry", body: "Calls and messages are handled with the right business context, even when your team is busy.", icon: "voice" },
          { title: "Move customers to the next step", body: "Book the slot. Confirm the order. Share the catalog. Route the follow-up.", icon: "whatsapp" },
          { title: "See what is happening", body: "Give your team one place to review conversations, requests and customer activity.", icon: "os" },
        ]}
      />

      <CardRow
        eyebrow="One platform. Four ways to move faster."
        title="Built around the moments that decide whether a customer buys."
        tone="light2"
        cols={4}
        cards={[
          { title: "AIORA Voice", body: "Your phone becomes a reliable first response that captures intent and moves customers forward.", icon: "voice" },
          { title: "WhatsApp AI", body: "Every conversation has context, so customers find answers, browse, book and request without waiting.", icon: "whatsapp" },
          { title: "Photo to Order", body: "Turn a customer's shopping-list photo into a clearer, faster route to fulfilment.", icon: "check" },
          { title: "Smart Catalog", body: "Make products simple to find, share and browse across the channels customers already use.", icon: "os" },
        ]}
      />

      <CardRow
        eyebrow="One operating layer. Different ways to use it."
        title="Made for customer-facing businesses."
        tone="light"
        cols={4}
        cards={[
          { title: "Grocery and retail", body: "Handle catalog questions, shopping-list orders and order follow-up without turning every request into a manual chat." },
          { title: "Clinics and services", body: "Capture the enquiry, qualify the request and guide the customer toward a booking." },
          { title: "Restaurants and hospitality", body: "Help customers ask, order, book and get a response before they go elsewhere." },
          { title: "Property and services", body: "Make the first response immediate, then keep the conversation moving until a human takes over." },
        ]}
      />

      <Steps
        eyebrow="From setup to live"
        title="Start with the workflow that leaks the most revenue."
        tone="light2"
        steps={[
          { title: "Connect your customer channel", body: "Bring in the phone, WhatsApp or ordering workflow you want to improve first." },
          { title: "Configure your business context", body: "Add your hours, common requests, catalog or booking rules, then decide where people should be routed." },
          { title: "Go live with a system your team understands", body: "Review activity, refine responses and expand once the first workflow is working." },
        ]}
      />

      <CTASection
        eyebrow="Start with one workflow"
        title="Give every customer a next step, not a dead end."
        body="Start with the customer conversation, call flow or order process that creates the most pressure today."
        primary={{ label: "Talk to AIORA", to: "/contact" }}
        secondary={{ label: "See AIORA Voice", to: "/voice" }}
      />
    </PageWrap>
  );
}
