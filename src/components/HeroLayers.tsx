import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { asset } from "../lib/asset";

/*
  AIORA "AI ORA HERO" — the Figma "Section 1" stack rebuilt as a live scene.
  The Figma board is a pile of separate image layers (woman + main planet + rings
  baked into the plate, plus loose planets, asteroids and nebula haze). Here the
  plate is the pinned base and the loose layers sit on top at their own depth, so
  the whole thing gets a soft mouse parallax and drifts on idle. Pointer leaves →
  everything eases back to rest. Touch / reduced-motion → just the flat plate.
*/

const LAYER = (name: string) => asset(`assets/cosmic/hires/${name}`);
const PLATE_PNG = asset("assets/scenes/hero-full.png");
const PLATE_JPG = asset("assets/scenes/hero-full.jpg");

function Layer({
  children,
  depth,
  amp = 12,
  dur = 24,
  className = "",
  mx,
  my,
}: {
  children: ReactNode;
  depth: number;
  amp?: number;
  dur?: number;
  className?: string;
  mx: ReturnType<typeof useSpring>;
  my: ReturnType<typeof useSpring>;
}) {
  const px = useTransform(mx, (v) => v * depth);
  const py = useTransform(my, (v) => v * depth);
  return (
    <motion.div className={`absolute ${className}`} style={{ x: px, y: py, willChange: "transform" }}>
      <motion.div
        className="h-full w-full"
        animate={{ y: [0, -amp, 0, amp * 0.6, 0] }}
        transition={{ duration: dur, ease: "easeInOut", repeat: Infinity }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function HeroLayers({ className = "" }: { className?: string; tone?: "light" | "dark"; flip?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 45, damping: 20, mass: 0.7 });
  const my = useSpring(rawY, { stiffness: 45, damping: 20, mass: 0.7 });

  useEffect(() => {
    if (reduce) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    const onMove = (e: PointerEvent) => {
      const r = ref.current?.getBoundingClientRect();
      if (!r) return;
      // normalised -1..1 from the scene centre
      rawX.set(((e.clientX - (r.left + r.width / 2)) / r.width) * 2);
      rawY.set(((e.clientY - (r.top + r.height / 2)) / r.height) * 2);
    };
    const settle = () => {
      rawX.set(0);
      rawY.set(0);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("blur", settle);
    document.addEventListener("pointerleave", settle);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("blur", settle);
      document.removeEventListener("pointerleave", settle);
    };
  }, [reduce, rawX, rawY]);

  // Reduced motion / touch: flat plate only, no parallax rig.
  if (reduce) {
    return (
      <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
        <picture>
          <source srcSet={PLATE_PNG} type="image/png" />
          <img
            src={PLATE_JPG}
            alt=""
            className="h-full w-full select-none object-cover object-[78%_28%] sm:object-[76%_35%] lg:object-[right_center]"
            draggable={false}
            fetchPriority="high"
          />
        </picture>
      </div>
    );
  }

  return (
    <div ref={ref} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Base plate: woman + main planet + rings, pinned, faint counter-drift */}
      <Layer mx={mx} my={my} depth={-5} amp={6} dur={40} className="inset-0 h-full w-full">
        <picture>
          <source srcSet={PLATE_PNG} type="image/png" />
          <motion.img
            src={PLATE_JPG}
            alt=""
            draggable={false}
            loading="eager"
            decoding="async"
            fetchPriority="high"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1.04 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="h-full w-full select-none object-cover object-[78%_28%] sm:object-[76%_35%] lg:object-[right_center]"
          />
        </picture>
      </Layer>

      {/* Loose layers — desktop only. Kept faint and feathered so the left stays
          clean like the comp; they exist to give the scene real parallax depth.
          The group carries its own soft mask so no single layer's box edge can
          ever show against the ivory. */}
      <div className="hidden lg:block [mask-image:radial-gradient(80%_90%_at_46%_50%,#000_45%,transparent_92%)]">
        {/* deep nebula haze trailing off toward the centre, edges masked to nothing */}
        <Layer mx={mx} my={my} depth={14} amp={20} dur={32} className="left-[8%] top-[-10%] w-[52%] opacity-30">
          <img
            src={LAYER("layer-haze-a.png")}
            alt=""
            className="w-full select-none mix-blend-multiply blur-[3px] [mask-image:radial-gradient(60%_60%_at_60%_45%,#000_25%,transparent_78%)]"
            draggable={false}
          />
        </Layer>

        {/* low wisp under the planet, also fully feathered */}
        <Layer mx={mx} my={my} depth={20} amp={18} dur={29} className="bottom-[-14%] left-[30%] w-[46%] opacity-25">
          <img
            src={LAYER("layer-haze-b.png")}
            alt=""
            className="w-full select-none mix-blend-multiply blur-[4px] [mask-image:radial-gradient(55%_55%_at_50%_50%,#000_20%,transparent_80%)]"
            draggable={false}
          />
        </Layer>

        {/* faint scatter of distant planets + rocks in the centre gap */}
        <Layer mx={mx} my={my} depth={40} amp={22} dur={21} className="left-[24%] top-[24%] w-[30%] opacity-30">
          <img
            src={LAYER("layer-debris-planets.png")}
            alt=""
            className="w-full select-none [mask-image:radial-gradient(70%_70%_at_55%_45%,#000_35%,transparent_82%)]"
            draggable={false}
          />
        </Layer>

        {/* one crisp red planet drifting just left of her head */}
        <Layer mx={mx} my={my} depth={30} amp={16} dur={27} className="left-[33%] top-[-4%] w-[13%] opacity-90">
          <img src={LAYER("layer-planet-md.png")} alt="" className="w-full select-none" draggable={false} />
        </Layer>

        {/* foreground asteroids — nearest, largest travel, small + subtle */}
        <Layer mx={mx} my={my} depth={58} amp={26} dur={17} className="left-[20%] top-[44%] w-[18%] opacity-55">
          <img
            src={LAYER("layer-asteroids.png")}
            alt=""
            className="w-full select-none [mask-image:radial-gradient(75%_75%_at_50%_50%,#000_40%,transparent_85%)]"
            draggable={false}
          />
        </Layer>
      </div>
    </div>
  );
}
