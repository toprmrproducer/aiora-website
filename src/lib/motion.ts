import type { Variants } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1, ease: EASE } },
};

export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

export const revealChild: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export const clipUp: Variants = {
  hidden: { opacity: 0, y: 40, clipPath: "inset(0 0 100% 0)" },
  show: { opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)", transition: { duration: 0.9, ease: EASE } },
};

export const viewport = { once: true, margin: "-12% 0px -10% 0px" } as const;
