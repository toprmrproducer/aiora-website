import { motion, useReducedMotion } from "framer-motion";
import { asset } from "../lib/asset";

/*
  Full-resolution hero scene.
  The earlier version rebuilt the composition from small separated cutouts. Those
  layers exposed their plate edges and softened when enlarged. The supplied
  composed image is now the visual source of truth, so every viewport gets a
  clean edge-to-edge crop without seams or empty corners.
*/
export default function CosmicScene({
  className = "",
  src = asset("assets/scenes/hero-full.jpg"),
  objectPosition = "center center",
  flip = false,
}: {
  className?: string;
  src?: string;
  objectPosition?: string;
  tone?: "light" | "dark";
  flip?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <motion.img
        src={src}
        alt=""
        aria-hidden
        draggable={false}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        initial={reduce ? false : { opacity: 0, scale: 1.025 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: reduce ? 0 : 1.15, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 h-full w-full select-none object-cover"
        style={{ objectPosition, transform: flip ? "scaleX(-1)" : undefined }}
      />
    </div>
  );
}
