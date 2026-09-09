import { Link } from "react-router-dom";
import { asset } from "../lib/asset";

export function Wordmark({
  invert = false, className = "", to = "/",
}: { invert?: boolean; className?: string; to?: string }) {
  const img = (
    <img
      src={asset("assets/logos/wordmark.png")}
      alt="ai.ora"
      className={`h-[22px] w-auto md:h-[24px] ${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );
  if (to) return <Link to={to} aria-label="ai.ora home">{img}</Link>;
  return img;
}

export function Monogram({ invert = false, className = "" }: { invert?: boolean; className?: string }) {
  return (
    <img
      src={asset("assets/logos/ao.png")}
      alt=""
      aria-hidden
      className={`h-8 w-auto ${invert ? "brightness-0 invert" : ""} ${className}`}
    />
  );
}
