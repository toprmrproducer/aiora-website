import { useEffect, useRef } from "react";
import { asset } from "../lib/asset";

/*
  AIORA "AI ORA HERO" — the Figma "Section 1" stack, rebuilt layer for layer.
  Every layer is the real transparent cutout exported from the board, placed at
  its Figma coordinate (% of the 1920x1080 frame) on its own parallax depth.
  Pure CSS transforms only: framer-motion's per-element animation loop makes
  Chromium drop the paint of large transparent images. Pointer drives one pair
  of CSS custom properties on the stage; each layer multiplies them by its depth.
  Pointer leaves → the vars ease back to 0. Touch / reduced-motion → static stack.
*/

const FIG = (name: string) => asset(`assets/cosmic/fig/${name}`);
const PLATE_PNG = asset("assets/scenes/hero-full.png");
const PLATE_JPG = asset("assets/scenes/hero-full.jpg");

type L = {
  src: string;
  left: number;
  top: number;
  width: number;
  z: number;
  depth: number; // parallax travel multiplier
  amp: number; // idle float px
  dur: number; // idle float seconds
  opacity?: number;
  extra?: string;
};

// Figma frame 1920x1080, origin (4094,-32988). Positions are % of that frame.
// The crisp flat composite (woman + main planet + rings) is the pinned base;
// these are the loose accent layers from the board that parallax over it.
const LAYERS: L[] = [
  { src: "10_atmosphere.webp", left: 57.3, top: 5, width: 42.7, z: 2, depth: 0.6, amp: 12, dur: 40, opacity: 0.28, extra: "blur-[2px]" },
  { src: "02_mist_cloud.webp", left: 20, top: 16, width: 58, z: 3, depth: 1.2, amp: 16, dur: 34, opacity: 0.4 },
  { src: "07_debris_scatter.webp", left: 14, top: 0, width: 46, z: 4, depth: 3.2, amp: 20, dur: 24, opacity: 0.95 },
  { src: "05_asteroids.webp", left: 34, top: 24, width: 26, z: 5, depth: 4.4, amp: 24, dur: 19, opacity: 0.9 },
  { src: "04_small_planets.webp", left: 30, top: 40, width: 20, z: 6, depth: 3.6, amp: 22, dur: 21, opacity: 0.9 },
  { src: "03_medium_planet.webp", left: 40, top: -14, width: 22, z: 7, depth: 2.2, amp: 15, dur: 27, opacity: 0.9 },
  { src: "06_orbit_rings.webp", left: 40, top: 0, width: 52, z: 8, depth: 2.0, amp: 7, dur: 30, opacity: 0.55 },
];

function Stack({ reduce }: { reduce: boolean }) {
  return (
    <>
      {LAYERS.map((l) => {
        const parallax = l.depth > 0;
        return (
          <div
            key={l.src}
            className="pointer-events-none absolute"
            style={{
              left: `${l.left}%`,
              top: `${l.top}%`,
              width: `${l.width}%`,
              zIndex: l.z,
              opacity: l.opacity ?? 1,
              ...(parallax
                ? {
                    transform: `translate3d(calc(var(--hx,0px) * ${l.depth}), calc(var(--hy,0px) * ${l.depth}), 0)`,
                    transition: "transform .5s cubic-bezier(.22,1,.36,1)",
                    willChange: "transform",
                  }
                : null),
            }}
          >
            <div
              style={
                reduce || l.amp === 0
                  ? undefined
                  : ({ animation: `hl-float ${l.dur}s ease-in-out infinite`, animationDelay: `-${l.dur / 3}s`, "--amp": `${l.amp}px` } as React.CSSProperties)
              }
            >
              <img
                src={FIG(l.src)}
                alt=""
                draggable={false}
                loading="eager"
                decoding="async"
                className={`w-full select-none ${l.extra ?? ""}`}
              />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default function HeroLayers({ className = "" }: { className?: string; tone?: "light" | "dark"; flip?: boolean }) {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (reduce || !fine) return;
    const el = stage.current;
    if (!el) return;
    let raf = 0;
    let tx = 0;
    let ty = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty("--hx", `${tx.toFixed(2)}px`);
      el.style.setProperty("--hy", `${ty.toFixed(2)}px`);
    };
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      tx = ((e.clientX - (r.left + r.width / 2)) / r.width) * 14;
      ty = ((e.clientY - (r.top + r.height / 2)) / r.height) * 14;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    const settle = () => {
      tx = 0;
      ty = 0;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("blur", settle);
    document.addEventListener("pointerleave", settle);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", settle);
      document.removeEventListener("pointerleave", settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden bg-ivory ${className}`} aria-hidden>
      {/* Pinned base plate: the crisp flat composite (woman + main planet + rings). */}
      <picture>
        <source srcSet={PLATE_PNG} type="image/png" />
        <img
          src={PLATE_JPG}
          alt=""
          className="absolute inset-0 h-full w-full select-none object-cover object-[74%_22%] sm:object-[70%_32%] lg:object-[right_center]"
          style={{ zIndex: 1 }}
          draggable={false}
          fetchPriority="high"
        />
      </picture>

      {/* Desktop only: loose accent layers from the Figma board, parallaxing
          over the plate. */}
      <div
        ref={stage}
        className="absolute left-1/2 top-1/2 hidden aspect-[16/9] min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 lg:block"
      >
        <Stack reduce={Boolean(reduce)} />
      </div>
    </div>
  );
}
