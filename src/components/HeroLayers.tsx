import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type CSSProperties } from "react";
import { asset } from "../lib/asset";

/*
  AIORA cosmic hero scene.
  Rebuilt from the "AI ORA HERO" Figma composition (Raisa Project, page 2).
  Layers are the background-removed cutouts, positioned as a percentage of the
  original 2961 x 1641 Figma frame, so the arrangement matches the board exactly.
  Solid subjects (woman, planets, asteroids) use their clean alpha; the bright
  additive layers (glow, atmosphere, rings, particles, flares) use multiply so
  their white plate drops away on the ivory background.
*/

type Layer = {
  src: string;
  l: number; // left, % of frame width
  t: number; // top, % of frame height
  w: number; // width, % of frame width
  blend?: "normal" | "multiply";
  opacity?: number;
  depth: number; // mouse-parallax strength (px at full deflection)
  fx?: number; // float amplitude x (px)
  fy?: number; // float amplitude y (px)
  rot?: number; // float rotation (deg)
  dur: number; // float loop seconds
  z: number;
  blur?: number;
};

// Back to front. Coordinates read off the Figma node transforms.
const LAYERS: Layer[] = [
  { src: "08_light_glow.png", l: 40, t: -4, w: 68, blend: "multiply", opacity: 0.5, depth: 8, fx: 0, fy: 10, dur: 22, z: 1, blur: 1 },
  { src: "10_atmosphere.png", l: 63, t: 20, w: 37, blend: "multiply", opacity: 0.55, depth: 14, fx: 12, fy: 14, rot: 2, dur: 20, z: 2 },
  { src: "07_orbit_flares.png", l: -6, t: 12, w: 35, blend: "multiply", opacity: 0.45, depth: 34, fx: 18, fy: 16, dur: 18, z: 2 },
  { src: "02_main_planet.png", l: 50, t: 8, w: 46, opacity: 1, depth: 20, fx: 10, fy: 16, rot: 1.5, dur: 26, z: 3 },
  { src: "06_orbit_rings.png", l: 50, t: 6, w: 30, blend: "multiply", opacity: 0.6, depth: 26, fx: 8, fy: 10, rot: 3, dur: 30, z: 4 },
  { src: "03_medium_planet.png", l: 58, t: -15, w: 26, opacity: 1, depth: 30, fx: 14, fy: 20, rot: 2, dur: 24, z: 4 },
  { src: "09_particles.png", l: 33, t: 10, w: 36, blend: "multiply", opacity: 0.5, depth: 40, fx: 20, fy: 18, dur: 16, z: 5 },
  // small planets drifting on the left, echoing the reference cluster
  { src: "04_small_planets.png", l: 6, t: 8, w: 15, opacity: 0.95, depth: 52, fx: 24, fy: 26, rot: 6, dur: 15, z: 5 },
  { src: "05_asteroids.png", l: 34, t: 22, w: 13, opacity: 1, depth: 60, fx: 30, fy: 24, rot: 4, dur: 14, z: 6 },
  { src: "04_small_planets.png", l: 58, t: 46, w: 20, opacity: 1, depth: 46, fx: 22, fy: 28, rot: 5, dur: 17, z: 6 },
  { src: "01_woman.png", l: 62, t: 13, w: 39, opacity: 1, depth: 10, fx: 6, fy: 8, dur: 28, z: 7 },
];

function SceneLayer({ layer, mx, my, tone }: { layer: Layer; mx: ReturnType<typeof useSpring>; my: ReturnType<typeof useSpring>; tone: "light" | "dark" }) {
  const reduce = useReducedMotion();
  const px = useTransform(mx, (v) => v * layer.depth);
  const py = useTransform(my, (v) => v * layer.depth);

  // Additive haze layers (glow, atmosphere, rings, particles, flares) carry a faint
  // rectangular white plate. On a light ground multiply drops it; on a dark ground
  // screen drops it and lets the red/amber glow bloom. Feather either with a soft
  // radial mask so the box edge never shows. Solid subjects keep their crisp alpha.
  const soft = layer.blend === "multiply";
  const mask = soft ? "radial-gradient(115% 115% at 50% 50%, #000 52%, transparent 100%)" : undefined;
  const style: CSSProperties = {
    position: "absolute",
    left: `${layer.l}%`,
    top: `${layer.t}%`,
    width: `${layer.w}%`,
    zIndex: layer.z,
    mixBlendMode: soft ? (tone === "dark" ? "screen" : "multiply") : "normal",
    opacity: (layer.opacity ?? 1) * (soft && tone === "dark" ? 1.3 : 1),
    filter: layer.blur ? `blur(${layer.blur}px)` : undefined,
    WebkitMaskImage: mask,
    maskImage: mask,
    willChange: "transform",
  };

  return (
    <motion.div style={{ ...style, x: reduce ? 0 : px, y: reduce ? 0 : py }}>
      <motion.img
        src={asset(`assets/cosmic/${layer.src}`)}
        alt=""
        aria-hidden
        draggable={false}
        className="block w-full select-none"
        animate={
          reduce
            ? undefined
            : {
                x: [0, layer.fx ?? 0, 0, -(layer.fx ?? 0) * 0.6, 0],
                y: [0, -(layer.fy ?? 0), 0, (layer.fy ?? 0) * 0.7, 0],
                rotate: layer.rot ? [0, layer.rot, 0, -layer.rot, 0] : undefined,
              }
        }
        transition={{ duration: layer.dur, ease: "easeInOut", repeat: Infinity, repeatType: "loop" }}
      />
    </motion.div>
  );
}

export default function HeroLayers({
  className = "",
  tone = "light",
  flip = false,
}: {
  className?: string;
  tone?: "light" | "dark";
  flip?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 20, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      rawX.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 2);
      rawY.set(((e.clientY - (r.top + r.height / 2)) / r.height) * 2);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [rawX, rawY]);

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Scene box maps the Figma frame onto the hero. On wide screens it fills the hero;
          on narrow screens it shifts right and scales up so the subject stays anchored. */}
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-y-0 right-[-14%] w-[128%] sm:right-[-6%] sm:w-[112%] lg:right-0 lg:w-full"
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        {LAYERS.map((layer, i) => (
          <SceneLayer key={`${layer.src}-${i}`} layer={layer} mx={mx} my={my} tone={tone} />
        ))}
      </motion.div>
    </div>
  );
}
