import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/*
  Cycles through words with a clean swap (quick fade + slight rise), no typing.
  Respects prefers-reduced-motion by showing the first word statically.
  Keeps the name/props it had before so callers do not change.
*/
export default function Typewriter({
  words,
  className = "",
  holdMs = 2400,
}: {
  words: string[];
  className?: string;
  holdMs?: number;
}) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const t = window.setInterval(() => setI((v) => (v + 1) % words.length), holdMs);
    return () => window.clearInterval(t);
  }, [reduce, words.length, holdMs]);

  if (reduce || words.length < 2) {
    return <span className={className}>{words[0]}</span>;
  }

  return (
    <span className={`inline-block ${className}`}>
      <motion.span
        key={i}
        className="inline-block"
        initial={{ opacity: 0, y: "0.4em" }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {words[i]}
      </motion.span>
    </span>
  );
}
