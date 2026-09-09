import PageWrap from "../components/PageWrap";
import { Reveal, Section } from "../components/ui";

export default function Legal({ kind }: { kind: "privacy" | "terms" }) {
  const title = kind === "privacy" ? "Privacy" : "Terms";
  return (
    <PageWrap>
      <Section tone="light" pad="xl">
        <Reveal>
          <p className="eyebrow text-crimson">AIORA</p>
          <h1 className="display mt-6 text-[clamp(2.4rem,6vw,4.4rem)]">{title}</h1>
          <p className="lead mt-8 max-w-prose2 text-graphite">
            Legal copy for this page is supplied by AIORA counsel before public launch. Until then this route exists so
            the footer links resolve. Write to hello@aiora.ai for the current policy.
          </p>
        </Reveal>
      </Section>
    </PageWrap>
  );
}
