// AIORA site content model.
// Copy sourced from client-approved mockups + AIORA Funnel Copy (vault).
// PROOF DISCIPLINE: no fabricated client identities. Aggregate stats + testimonials
// are illustrative/placeholder and listed in README "Claims to approve".

export type NavChild = { label: string; to: string; desc: string };
export type NavLink = { label: string; to?: string; children?: NavChild[] };

export const productLinks: NavChild[] = [
  { label: "AIORA Voice", to: "/voice", desc: "Inbound calls that create momentum, not missed opportunities." },
  { label: "WhatsApp AI", to: "/whatsapp", desc: "Every WhatsApp conversation, answered with context." },
  { label: "AIORA Vision", to: "/vision", desc: "Camera activity turned into reviewable alerts." },
  { label: "AIORA OS", to: "/os", desc: "One operating layer for calls, chats, orders and follow-up." },
];

export const navLinks: NavLink[] = [
  { label: "Products", children: productLinks },
  { label: "Solutions", to: "/os" },
  { label: "Customers", to: "/#proof" },
  { label: "Resources", to: "/#platform" },
  { label: "Company", to: "/contact" },
];

// Real deployments (honest trust strip — replaces the mockup's placeholder big-tech logos)
export const deployments = ["Mehta Emporium", "KV Toys", "Anytime Fitness", "Red Bean Hospitality"];

export const offerings = [
  {
    tag: "AIORA VOICE",
    title: "Your phone becomes a reliable first response.",
    body: "Handle common calls, capture intent and move customers toward the right next action.",
    to: "/voice",
    art: "voice",
  },
  {
    tag: "WHATSAPP AI",
    title: "Every WhatsApp conversation has context.",
    body: "Help customers find answers, browse options, book and place requests without waiting for a person.",
    to: "/whatsapp",
    art: "whatsapp",
  },
  {
    tag: "AIORA VISION",
    title: "Do not wait for an incident to start paying attention.",
    body: "Turn camera activity into reviewable alerts, so your team focuses on the moments that matter.",
    to: "/vision",
    art: "vision",
  },
  {
    tag: "AIORA OS",
    title: "One operating layer your team can actually run.",
    body: "Bring voice, WhatsApp, orders and follow-up into one place, so every enquiry has somewhere to go.",
    to: "/os",
    art: "os",
  },
];

export const gapStats = [
  { big: "70%", small: "of AI projects never reach production" },
  { big: "Months", small: "lost to fragmented tools and unclear ownership" },
  { big: "Real value", small: "requires a unified strategy, platform and partner" },
];

export const resultStats = [
  { value: 3.5, suffix: "x", label: "average productivity gain" },
  { value: 60, suffix: "%", label: "faster time to insight" },
  { value: 24, suffix: "h", label: "from first meeting to live" },
];

export const whyCards = [
  { title: "Grow faster", body: "Identify new opportunities and bring ideas to market sooner.", icon: "growth" },
  { title: "Work smarter", body: "Empower your teams with AI that helps, not replaces.", icon: "smart" },
  { title: "Build what is next", body: "Create new products, services and business models for the future.", icon: "build" },
];

// Real, scope-honest case studies (no invented ROI beyond supplied figures).
export const caseStudies = [
  {
    name: "Mehta Emporium",
    kind: "AI Voice",
    result: "Inbound calls answered with business context and routed to the right next step.",
    status: "Deployed",
  },
  {
    name: "KV Toys",
    kind: "Workflow automation",
    result: "Workflow streamlined — 30% error reduction and a 13% revenue lift reported.",
    status: "Deployed",
  },
  {
    name: "Anytime Fitness",
    kind: "Voice + Vision",
    result: "Voice agent for member enquiries with AIORA Vision on the floor.",
    status: "In build",
  },
];

// Illustrative testimonials — role-based, no fabricated names/photos. Swap on client approval.
export const testimonialsA = [
  { quote: "AIORA gave us the structure, speed and confidence to scale AI across the business.", who: "Chief Innovation Officer", org: "Multi-location retail group" },
  { quote: "The difference is they start with the result, then deploy only what moves it.", who: "Operations Lead", org: "Hospitality brand" },
  { quote: "Our phone stopped being the weak point. Every caller now has somewhere to go.", who: "Owner", org: "Service business" },
  { quote: "It sounds like our business, only more consistent, at every hour.", who: "Founder", org: "D2C brand" },
];

export const testimonialFeatured = {
  quote: "We stopped losing customers to a busy line. AIORA answers, captures intent and books the next step, so the team can actually serve the people in front of them.",
  who: "Operations Director",
  org: "Multi-location services group",
};

export const footerCols = [
  { title: "Products", links: productLinks.map((p) => ({ label: p.label, to: p.to })) },
  {
    title: "Company",
    links: [
      { label: "About", to: "/contact" },
      { label: "Customers", to: "/#proof" },
      { label: "Careers", to: "/contact" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Platform", to: "/os" },
      { label: "AIORA Voice", to: "/voice" },
      { label: "AIORA Vision", to: "/vision" },
      { label: "WhatsApp AI", to: "/whatsapp" },
    ],
  },
];
