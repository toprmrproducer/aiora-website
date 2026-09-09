/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: "#F4F1EA", 2: "#ECE7DD", 3: "#E4DED2" },
        ink: { DEFAULT: "#0C0C0D", soft: "#141416" },
        charcoal: { DEFAULT: "#131315", 2: "#1B1B1E" },
        graphite: { DEFAULT: "#6B6862", light: "#9A968E" },
        wine: "#7C2530",
        crimson: { DEFAULT: "#A32E33", bright: "#C0392B" },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
        display: ["Outfit", "Manrope", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        label: "0.22em",
        tightest: "-0.03em",
      },
      maxWidth: { site: "1280px", prose2: "680px" },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-14px)" } },
        spinSlow: { to: { transform: "rotate(360deg)" } },
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        shimmer: { "0%": { backgroundPosition: "0% 50%" }, "100%": { backgroundPosition: "200% 50%" } },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        spinSlow: "spinSlow 60s linear infinite",
        marquee: "marquee 38s linear infinite",
        shimmer: "shimmer 8s linear infinite",
      },
    },
  },
  plugins: [],
};
