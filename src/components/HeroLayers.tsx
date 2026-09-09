import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";
import { asset } from "../lib/asset";

/*
  AIORA "AI ORA HERO" composition (Raisa Project, Figma).
  A controlled build: the woman is the anchored subject on the right with her FULL
  face visible and her rectangular edges bled off-screen (no plate seam / wall).
  The red planets sit behind her; a few small planets and asteroids drift in the
  open left space. On mobile the left clutter is hidden and nothing overflows.
*/

function Float({
  children,
  depth,
  amp = 10,
  dur = 22,
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
  const reduce = useReducedMotion();
  const px = useTransform(mx, (v) => v * depth);
  const py = useTransform(my, (v) => v * depth);
  return (
    <motion.div className={`absolute ${className}`} style={{ x: reduce ? 0 : px, y: reduce ? 0 : py, willChange: "transform" }}>
      <motion.div
        animate={reduce ? undefined : { y: [0, -amp, 0, amp * 0.7, 0] }}
        transition={{ duration: dur, ease: "easeInOut", repeat: Infinity }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

const img = (src: string, cls: string) => (
  <img src={asset(`assets/cosmic/${src}`)} alt="" aria-hidden draggable={false} className={`select-none ${cls}`} />
);

export default function HeroLayers({ className = "" }: { className?: string; tone?: "light" | "dark"; flip?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 55, damping: 22, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 55, damping: 22, mass: 0.6 });

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
      {/* Subject group anchored to the right. Its own overflow is hidden so the
          woman's rectangular edges bleed off cleanly with no wall/gap. */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 right-0 top-0 w-[86%] overflow-hidden sm:w-[68%] lg:w-[58%]"
      >
        {/* main planet, large, behind the woman */}
        <Float mx={mx} my={my} depth={16} amp={12} dur={30} className="left-[6%] top-1/2 w-[86%] -translate-y-1/2">
          {img("02_main_planet.png", "w-full")}
        </Float>
        {/* orbit rings around the planet */}
        <Float mx={mx} my={my} depth={24} amp={8} dur={34} className="left-[2%] top-1/2 w-[92%] -translate-y-1/2 opacity-70 mix-blend-multiply">
          {img("06_orbit_rings.png", "w-full")}
        </Float>
        {/* medium planet, upper */}
        <Float mx={mx} my={my} depth={30} amp={16} dur={26} className="left-[2%] top-[-6%] w-[34%]">
          {img("03_medium_planet.png", "w-full")}
        </Float>
        {/* the woman — full face, bled off the right and bottom edges */}
        <Float mx={mx} my={my} depth={8} amp={5} dur={30} className="bottom-[-3%] right-[-10%] h-[100%]">
          <img src={asset("assets/cosmic/01_woman.png")} alt="" aria-hidden draggable={false} className="h-full w-auto select-none object-contain object-bottom" />
        </Float>
        {/* small planet drifting near her shoulder */}
        <Float mx={mx} my={my} depth={44} amp={22} dur={17} className="bottom-[10%] left-[24%] w-[13%]">
          {img("04_small_planets.png", "w-full")}
        </Float>
      </motion.div>

      {/* Open left space — subtle drifting accents, hidden on mobile so it never
          clutters the headline or overflows. */}
      <div className="hidden md:block">
        <Float mx={mx} my={my} depth={52} amp={26} dur={15} className="left-[12%] top-[22%] w-[7%] opacity-90">
          {img("04_small_planets.png", "w-full")}
        </Float>
        <Float mx={mx} my={my} depth={62} amp={30} dur={13} className="left-[34%] top-[46%] w-[8%] opacity-80 mix-blend-multiply">
          {img("05_asteroids.png", "w-full")}
        </Float>
        <Float mx={mx} my={my} depth={40} amp={18} dur={19} className="left-[6%] top-[52%] w-[5%] opacity-70">
          {img("04_small_planets.png", "w-full")}
        </Float>
      </div>
    </div>
  );
}
