import { useEffect, useRef, useState } from "react";

function prefersReduced() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function VideoBg({
  src, poster, className = "", overlay = "dark", objectPosition = "center",
}: {
  src: string; poster?: string; className?: string;
  overlay?: "dark" | "light" | "soft" | "hero" | "mist" | "none";
  objectPosition?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(prefersReduced());
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (prefersReduced()) {
          el.pause();
          return;
        }
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  const overlayCls =
    overlay === "dark"
      ? "bg-gradient-to-r from-ink via-ink/75 to-ink/20"
      : overlay === "soft"
        ? "bg-gradient-to-t from-ink via-ink/70 to-ink/45"
        : overlay === "mist"
          ? "bg-gradient-to-t from-ink/55 via-ink/30 to-ink/20"
          : overlay === "hero"
            ? ""
            : overlay === "light"
              ? "bg-gradient-to-r from-ivory via-ivory/70 to-transparent"
              : "";

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {reduce ? (
        poster ? <img src={poster} alt="" className="h-full w-full object-cover" style={{ objectPosition }} /> : null
      ) : (
        <video
          ref={ref}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
      {overlay === "hero" && (
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(18,16,16,0.32) 0%, rgba(18,16,16,0.10) 30%, rgba(18,16,16,0) 54%)" }}
        />
      )}
      {overlay !== "none" && overlay !== "hero" && <div className={`absolute inset-0 ${overlayCls}`} />}
      {overlay === "dark" && <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/35" />}
    </div>
  );
}

export function VideoFrame({
  src, poster, className = "", object = "cover",
}: {
  src: string; poster?: string; className?: string; object?: "cover" | "contain";
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(prefersReduced());
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (prefersReduced()) return;
        if (entry.isIntersecting) el.play().catch(() => {});
        else el.pause();
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  const fit = object === "contain" ? "object-contain" : "object-cover";

  return (
    <div className={`relative overflow-hidden bg-ivory-2 ${className}`}>
      {reduce && poster ? (
        <img src={poster} alt="" className={`h-full w-full ${fit}`} />
      ) : (
        <video
          ref={ref}
          className={`h-full w-full ${fit}`}
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-hidden
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
