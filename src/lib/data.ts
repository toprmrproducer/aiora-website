// AIORA site content model.
// Copy sourced from client-approved mockups + AIORA Funnel Copy (vault).
// PROOF DISCIPLINE: no fabricated client identities. Aggregate stats + testimonials
// are illustrative/placeholder and listed in README "Claims to approve".

export type NavChild = { label: string; to: string; desc: string; group?: string; icon?: string };
export type NavLink = { label: string; to?: string; children?: NavChild[] };

export const productLinks: NavChild[] = [
  { label: "AIORA Talks", to: "/voice", desc: "Inbound and outbound calls, answered and captured.", icon: "voice" },
  { label: "AIORA Sales Automation", to: "/whatsapp", desc: "WhatsApp selling, from first enquiry to money received.", icon: "whatsapp" },
  { label: "AIORA Ops", to: "/os", desc: "The daily order desk: POs, SOs, reconciliation and reports.", icon: "os" },
  { label: "AIORA Integrates", to: "/integrates", desc: "Connect the tools you already run so nothing is re-keyed.", icon: "build" },
  { label: "AIORA Tracks", to: "/tracks", desc: "Inventory, delivery status and field-team location, live.", icon: "pin" },
  { label: "AIORA Assist", to: "/assist", desc: "Ask your own business data in plain language.", icon: "smart" },
  { label: "AIORA Vision", to: "/vision", desc: "Camera activity turned into reviewable alerts.", icon: "vision" },
  { label: "Meta", to: "/meta", desc: "Facebook and Instagram conversations, handled with context.", icon: "meta" },
];

export const solutionLinks: NavChild[] = [
  { group: "By workflow", label: "Talks", to: "/voice", desc: "Answer the phone and move the caller forward.", icon: "voice" },
  { group: "By workflow", label: "Sales Automation", to: "/whatsapp", desc: "Give every message a next step, all the way to the sale.", icon: "whatsapp" },
  { group: "By workflow", label: "Ops", to: "/os", desc: "Run the order desk without the manual paperwork.", icon: "os" },
  { group: "By workflow", label: "Vision", to: "/vision", desc: "Surface the footage that needs a human.", icon: "vision" },
  { group: "By industry", label: "Retail and grocery", to: "/retail", desc: "Catalog, orders and follow-up in one loop." },
  { group: "By industry", label: "Clinics and services", to: "/clinics", desc: "Capture the enquiry and book the slot." },
  { group: "By industry", label: "Hospitality", to: "/hospitality", desc: "Answer, book and route before they go elsewhere." },
];

export const companyLinks: NavChild[] = [
  { group: "Company", label: "Talk to AIORA", to: "/contact", desc: "Start with the workflow that leaks the most revenue." },
  { group: "Company", label: "Customers", to: "/customers", desc: "Deployments, labelled honestly." },
  { group: "Company", label: "Pricing", to: "/pricing", desc: "Seven agent lines. One monthly price." },
  { group: "Company", label: "Affiliate Program", to: "/affiliate", desc: "Earn a 50/50 revenue share as an AIORA partner." },
];

export const navLinks: NavLink[] = [
  { label: "Products", children: productLinks },
  { label: "Solutions", children: solutionLinks },
  { label: "Pricing", to: "/pricing" },
  { label: "Company", children: companyLinks },
];

// Real deployments (honest trust strip). Edit these lists freely as the roster changes.
export const deployments = [
  "K V Toys",
  "Mehta Emporium Jewellers",
  "Society Stores",
  "Mehta Sawantraj Hanwantraj",
  "Badlapur Textiles Industries Pvt Ltd",
];

// Businesses AIORA has deployed for. Safe to add or remove any time.
export const clientsWorkedWith = [
  "K V Toys",
  "Mehta Emporium Jewellers",
  "Society Stores",
  "Mehta Sawantraj Hanwantraj",
  "KV Toys India Ltd",
  "Badlapur Textiles Industries Pvt Ltd",
];

// Businesses AIORA is set up to work with next. Editable placeholder roster.
export const clientsOpenTo = [
  "Retail and grocery chains",
  "Jewellery and bullion houses",
  "Textile and apparel manufacturers",
  "Distributors and importers",
  "Clinics and multi-location services",
  "Restaurants, hotels and venues",
];

export const offerings = [
  {
    tag: "AIORA TALKS",
    title: "Your phone becomes a reliable first response.",
    body: "Handle common calls, capture intent and move customers toward the right next action.",
    to: "/voice",
    art: "voice",
    image: "assets/scenes/voice-human.png",
    position: "center 34%",
  },
  {
    tag: "AIORA SALES AUTOMATION",
    title: "Every WhatsApp conversation moves toward the sale.",
    body: "Help customers find answers, browse options, book and place requests without waiting for a person.",
    to: "/whatsapp",
    art: "whatsapp",
    image: "assets/scenes/team.png",
    position: "center 44%",
  },
  {
    tag: "AIORA VISION",
    title: "Do not wait for an incident to start paying attention.",
    body: "Turn camera activity into reviewable alerts, so your team focuses on the moments that matter.",
    to: "/vision",
    art: "vision",
    image: "assets/scenes/06-aiora-vision-human-review-abstract.png",
    position: "center center",
  },
  {
    tag: "AIORA OPS",
    title: "One operating layer your team can actually run.",
    body: "Bring calls, WhatsApp, orders and follow-up into one place, so every enquiry has somewhere to go.",
    to: "/os",
    art: "os",
    image: "assets/scenes/07-aiora-os-orchestration-landscape.png",
    position: "center center",
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

// Real, scope-honest case studies. Descriptions state what the deployment does;
// no invented ROI figures. Edit freely as the roster changes.
export const caseStudies = [
  {
    name: "K V Toys",
    kind: "AIORA Ops",
    result: "The order desk runs on AIORA Ops. Purchase orders are punched and reconciled, sales orders are raised against them, and the daily sales and pending reports go out on their own instead of being built by hand every evening.",
    status: "Deployed",
    image: "assets/scenes/03-real-business-operations-panorama.png",
  },
  {
    name: "Mehta Emporium Jewellers",
    kind: "AIORA Talks",
    result: "Inbound calls to the counter are answered in the customer's language, rate and availability questions are handled on the spot, and anything that needs a person is routed with the details already captured.",
    status: "Deployed",
    image: "assets/scenes/sc-voice-hero.jpg",
  },
  {
    name: "Society Stores",
    kind: "AIORA Sales Automation",
    result: "Product and stock questions on WhatsApp are answered from the live catalogue, orders are taken inside the same thread, and repeat customers get their usual list rebuilt in a few messages.",
    status: "Deployed",
    image: "assets/scenes/sc-whatsapp-hero.jpg",
  },
  {
    name: "Mehta Sawantraj Hanwantraj",
    kind: "AIORA Sales Automation + Tracks",
    result: "Enquiries from buyers are qualified and quoted, dispatch and logistics status is handled without a person chasing it, and the team sees every open deal in one place.",
    status: "Deployed",
    image: "assets/scenes/sc-os-hero.jpg",
  },
  {
    name: "KV Toys India Ltd",
    kind: "AIORA Integrates",
    result: "Catalogue selling and the order desk run together: shopping-list messages become structured orders, the paperwork is reconciled automatically across the existing tools, and the daily reports land without manual work.",
    status: "Deployed",
    image: "assets/scenes/sc-retail-hero.jpg",
  },
  {
    name: "Badlapur Textiles Industries Pvt Ltd",
    kind: "AIORA Vision",
    result: "Staff attendance is read from the existing cameras, restricted-zone and after-hours activity is flagged for review, and the floor team gets a shortlist of clips to check instead of hours of footage.",
    status: "Deployed",
    image: "assets/scenes/sc-vision-hero.jpg",
  },
];

// Illustrative testimonials. Portraits are generated art direction, not named clients.
export const testimonialsA = [
  { quote: "AIORA gave us the structure, speed and confidence to scale AI across the business.", who: "Chief Innovation Officer", org: "Multi-location retail group", photo: "assets/people/p8.jpg" },
  { quote: "The difference is they start with the result, then deploy only what moves it.", who: "Operations Lead", org: "Hospitality brand", photo: "assets/people/p2.jpg" },
  { quote: "Our phone stopped being the weak point. Every caller now has somewhere to go.", who: "Owner", org: "Service business", photo: "assets/people/p6.jpg" },
  { quote: "It sounds like our business, only more consistent, at every hour.", who: "Founder", org: "D2C brand", photo: "assets/people/p5.jpg" },
];

// Praise wall (role-based, illustrative until named clients approve attribution).
export const praise = [
  { quote: "Our phone stopped being the weak point. Every caller now has somewhere to go.", who: "Owner", org: "Multi-location service business", photo: "assets/people/p6.jpg" },
  { quote: "It sounds like our business, only more consistent, at every hour of the day.", who: "Founder", org: "D2C brand", photo: "assets/people/p5.jpg" },
  { quote: "We started with one agent, saw the return, then added three more.", who: "Director", org: "Multi-location retailer", photo: "assets/people/p2.jpg" },
  { quote: "Comments and DMs used to sit for hours. Now every one gets a reply and a next step.", who: "Marketing Lead", org: "Beauty brand", photo: "assets/people/p3.jpg" },
  { quote: "The team finally spends time on the customers in front of them, not the phone.", who: "Operations Lead", org: "Hospitality group", photo: "assets/people/p8.jpg" },
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
      { label: "Customers", to: "/customers" },
      { label: "Affiliate Program", to: "/affiliate" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "AIORA Talks", to: "/voice" },
      { label: "AIORA Sales Automation", to: "/whatsapp" },
      { label: "AIORA Ops", to: "/os" },
      { label: "AIORA Vision", to: "/vision" },
    ],
  },
];
