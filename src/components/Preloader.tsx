import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Wordmark } from "./Logo";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = window.setTimeout(() => setShow(false), reduce ? 200 : 1200);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Wordmark invert to="" className="h-8 md:h-9" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
