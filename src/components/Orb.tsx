import { motion } from "framer-motion";

/**
 * Cinematic crimson planet — pure CSS + motion, no external image needed.
 * Reads as an expensive 3D hero element and upgrades gracefully beside real art.
 */
export default function Orb({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none relative aspect-square ${className}`} aria-hidden>
      {/* ambient glow */}
      <div className="absolute inset-0 rounded-full bg-radial-crimson blur-2xl opacity-80" />

      {/* rotating ring */}
      <motion.div
        className="absolute inset-[6%] rounded-full border border-crimson/25"
        animate={{ rotate: 360 }}
        transition={{ duration: 80, ease: "linear", repeat: Infinity }}
        style={{ borderTopColor: "rgba(163,46,51,0.7)" }}
      />

      {/* main planet */}
      <motion.div
        className="absolute inset-[14%] rounded-full"
        animate={{ y: [0, -14, 0] }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        style={{
          background:
            "radial-gradient(35% 35% at 32% 28%, #d75a52 0%, #a3282f 26%, #6f1d27 55%, #240a10 88%)",
          boxShadow:
            "inset -30px -24px 80px rgba(0,0,0,0.75), inset 24px 18px 60px rgba(215,90,82,0.35), 0 40px 120px rgba(124,37,48,0.45)",
        }}
      >
        {/* surface grain / terminator */}
        <div className="grain absolute inset-0 rounded-full opacity-40" />
        <div
          className="absolute inset-0 rounded-full"
          style={{ background: "radial-gradient(120% 120% at 78% 82%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 45%)" }}
        />
      </motion.div>

      {/* small moon */}
      <motion.div
        className="absolute left-[6%] top-[18%] h-[9%] w-[9%] rounded-full"
        animate={{ x: [0, 10, 0], y: [0, 16, 0] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
        style={{
          background: "radial-gradient(35% 35% at 35% 30%, #e7a19a 0%, #a3282f 55%, #3a121a 100%)",
          boxShadow: "inset -6px -5px 14px rgba(0,0,0,0.7), 0 8px 30px rgba(163,46,51,0.5)",
        }}
      />
    </div>
  );
}
