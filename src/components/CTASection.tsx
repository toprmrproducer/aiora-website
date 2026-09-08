import { motion } from "framer-motion";
import { Reveal, Button } from "./ui";
import Orb from "./Orb";

export default function CTASection({
  eyebrow = "START WITH ONE WORKFLOW",
  title = "Your customers are already reaching out. Give every one of them a next step.",
  body = "Start with the customer conversation, call flow or order process that creates the most pressure today.",
  primary = { label: "Book a call", to: "/contact" },
  secondary = { label: "Explore the platform", to: "/os" },
}: {
  eyebrow?: string; title?: string; body?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <section className="grain relative overflow-hidden bg-ink py-28 text-ivory md:py-40">
      <motion.div
        className="absolute -right-40 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 opacity-90 md:block"
        initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 0.9, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }}
      >
        <Orb className="h-full w-full" />
      </motion.div>
      <div className="site-container relative">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow text-crimson">{eyebrow}</p></Reveal>
          <Reveal delay={0.05}>
            <h2 className="display mt-6 text-[clamp(2.4rem,6vw,4.6rem)]">{title}</h2>
          </Reveal>
          <Reveal delay={0.1}><p className="lead mt-7 max-w-prose2 text-graphite-light">{body}</p></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button to={primary.to} variant="solidLight" arrow>{primary.label}</Button>
              <Button to={secondary.to} variant="outlineLight">{secondary.label}</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
