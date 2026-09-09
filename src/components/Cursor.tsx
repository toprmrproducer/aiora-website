import { useEffect, useRef } from "react";

export default function Cursor() {
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const el = ring.current;
    if (!el) return;
    document.documentElement.classList.add("has-cursor");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;
    let hover = false;
    let raf = 0;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const over = (e: PointerEvent) => {
      const t = e.target as HTMLElement | null;
      hover = Boolean(t?.closest("a, button, [data-cursor='hover']"));
    };
    const loop = () => {
      cx += (x - cx) * 0.18;
      cy += (y - cy) * 0.18;
      el.style.transform = `translate3d(${cx - 16}px, ${cy - 16}px, 0) scale(${hover ? 1.7 : 1})`;
      el.style.opacity = hover ? "0.9" : "0.55";
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      document.documentElement.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ring}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-8 w-8 rounded-full border border-wine/80 md:block"
      style={{ mixBlendMode: "difference" }}
    />
  );
}
