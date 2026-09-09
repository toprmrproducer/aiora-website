import { useEffect, useRef, useState } from "react";

/*
  Types a word out character by character, holds, deletes, and cycles to the next.
  Respects prefers-reduced-motion by showing the first word statically.
*/
export default function Typewriter({
  words,
  className = "",
  typeMs = 95,
  deleteMs = 45,
  holdMs = 1900,
}: {
  words: string[];
  className?: string;
  typeMs?: number;
  deleteMs?: number;
  holdMs?: number;
}) {
  const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  const [text, setText] = useState(reduce ? words[0] : "");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timer = useRef<number>();

  useEffect(() => {
    if (reduce) return;
    const word = words[wordIndex % words.length];
    let delay = typeMs;

    if (!deleting && text === word) {
      delay = holdMs;
      timer.current = window.setTimeout(() => setDeleting(true), delay);
      return () => window.clearTimeout(timer.current);
    }
    if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => (i + 1) % words.length);
      return;
    }
    delay = deleting ? deleteMs : typeMs;
    timer.current = window.setTimeout(() => {
      setText((t) => (deleting ? t.slice(0, -1) : word.slice(0, t.length + 1)));
    }, delay);
    return () => window.clearTimeout(timer.current);
  }, [text, deleting, wordIndex, words, typeMs, deleteMs, holdMs, reduce]);

  return (
    <span className={`caret ${className}`} aria-label={words[0]}>
      {text}
    </span>
  );
}
