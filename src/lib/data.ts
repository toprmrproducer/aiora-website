// AIORA site content model.
// Copy sourced from client-approved mockups + AIORA Funnel Copy (vault).
// PROOF DISCIPLINE: no fabricated client identities. Aggregate stats + testimonials
// are illustrative/placeholder and listed in README "Claims to approve".

export type NavChild = { label: string; to: string; desc: string; group?: string };
export type NavLink = { label: string; to?: string; children?: NavChild[] };

export const productLinks: NavChild[] = [
  { label: "AIORA Voice", to: "/voice", desc: "Inbound calls that create momentum, not missed opportunities." },
  { label: "WhatsApp AI", to: "/whatsapp", desc: "Every WhatsApp conversation, answered with context." },
  { label: "AIORA Vision", to: "/vision", desc: "Camera activity turned into reviewable alerts." },
  { label: "AIORA OS", to: "/os", desc: "One operating layer for calls, chats, orders and follow-up." },
];

export const solutionLinks: NavChild[] = [
  { group: "By workflow", label: "Voice", to: "/voice", desc: "Answer the phone and move the caller forward." },
  { group: "By workflow", label: "WhatsApp", to: "/whatsapp", desc: "Give every message a next step." },
  { group: "By workflow", label: "Vision", to: "/vision", desc: "Surface the footage that needs a human." },
  { group: "By industry", label: "Retail and grocery", to: "/os", desc: "Catalog, orders and follow-up in one loop." },
  { group: "By industry", label: "Clinics and services", to: "/os", desc: "Capture the enquiry and book the slot." },
  { group: "By industry", label: "Hospitality", to: "/os", desc: "Answer, book and route before they go elsewhere." },
];

export const companyLinks: NavChild[] = [
  { group: "Company", label: "Talk to AIORA", to: "/contact", desc: "Start with the workflow that leaks the most revenue." },
  { group: "Company", label: "Customers", to: "/#proof", desc: "Deployments, labelled honestly." },
  { group: "Company", label: "Pricing", to: "/pricing", desc: "Six agent lines. One monthly price." },
];

export const navLinks: NavLink[] = [
  { label: "Products", children: productLinks },
  { label: "Solutions", children: solutionLinks },
  { label: "Pricing", to: "/pricing" },
  { label: "Company", children: companyLinks },
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
    image: "assets/scenes/voice-human.png",
  },
  {
    tag: "WHATSAPP AI",
    title: "Every WhatsApp conversation has context.",
    body: "Help customers find answers, browse options, book and place requests without waiting for a person.",
    to: "/whatsapp",
    art: "whatsapp",
    image: "assets/scenes/team.png",
  },
  {
    tag: "AIORA VISION",
    title: "Do not wait for an incident to start paying attention.",
    body: "Turn camera activity into reviewable alerts, so your team focuses on the moments that matter.",
    to: "/vision",
    art: "vision",
    image: "assets/scenes/forest-portal.png",
  },
  {
    tag: "AIORA OS",
    title: "One operating layer your team can actually run.",
    body: "Bring voice, WhatsApp, orders and follow-up into one place, so every enquiry has somewhere to go.",
    to: "/os",
    art: "os",
    image: "assets/scenes/07-aiora-os-orchestration-landscape.png",
  },
];

export const stills = [
  { src: "assets/scenes/01-home-hero-eclipse.png", label: "Threshold" },
  { src: "assets/scenes/voice-human.png", label: "Voice" },
  { src: "assets/scenes/forest-portal.png", label: "Vision" },
  { src: "assets/scenes/dunes.png", label: "Operations" },
  { src: "assets/scenes/04-future-of-work-human-data-horizon.png", label: "Horizon" },
  { src: "assets/scenes/08-final-cta-cosmic-threshold.png", label: "Next step" },
  { src: "assets/scenes/05-aiora-talks-acoustic-portrait.png", label: "Talks" },
  { src: "assets/scenes/06-aiora-vision-human-review-abstract.png", label: "Review" },
];

export const gapStats = [
  { big: "70%", small: "of AI projects never reach production" },
  { big: "Months", small: "lost to fragmented tools and unclear ownership" },
  { big: "Real value", small: "requires a unified strategy, platform and partner" },
];

export const resultStats: { value?: number; suffix?: string; display?: string; label: string }[] = [
  { value: 3.5, suffix: "x", label: "average productivity gain" },
  { value: 60, suffix: "%", label: "faster time to insight" },
  { display: "Higher", label: "revenue, happier customers and leaner operations" },
];

export const gapFails = [
  "Stuck in pilots",
  "Lack of clear ROI",
  "Fragmented tools",
  "No execution support",
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
    image: "assets/scenes/05-aiora-talks-acoustic-portrait.png",
  },
  {
    name: "KV Toys",
    kind: "Workflow automation",
    result: "Workflow streamlined. 30% error reduction and a 13% revenue lift reported.",
    status: "Deployed",
    image: "assets/scenes/03-real-business-operations-panorama.png",
  },
  {
    name: "Anytime Fitness",
    kind: "Voice + Vision",
    result: "Voice agent for member enquiries with AIORA Vision on the floor.",
    status: "In build",
    image: "assets/scenes/06-aiora-vision-human-review-abstract.png",
  },
];

// Illustrative testimonials. Portraits are generated art direction, not named clients.
export const testimonialsA = [
  { quote: "AIORA gave us the structure, speed and confidence to scale AI across the business.", who: "Chief Innovation Officer", org: "Multi-location retail group", photo: "assets/people/p1.jpg" },
  { quote: "The difference is they start with the result, then deploy only what moves it.", who: "Operations Lead", org: "Hospitality brand", photo: "assets/people/p2.jpg" },
  { quote: "Our phone stopped being the weak point. Every caller now has somewhere to go.", who: "Owner", org: "Service business", photo: "assets/people/p3.jpg" },
  { quote: "It sounds like our business, only more consistent, at every hour.", who: "Founder", org: "D2C brand", photo: "assets/people/p4.jpg" },
];

export const testimonialFeatured = {
  quote: "We stopped losing customers to a busy line. AIORA answers, captures intent and books the next step, so the team can actually serve the people in front of them.",
  who: "Operations Director",
  org: "Multi-location services group",
  photo: "assets/people/team.jpg",
};

export const footerCols = [
  { title: "Products", links: productLinks.map((p) => ({ label: p.label, to: p.to })) },
  {
    title: "Company",
    links: [
      { label: "About", to: "/contact" },
      { label: "Pricing", to: "/pricing" },
      { label: "Customers", to: "/#proof" },
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
