import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES === "1" ? "/aiora-website/" : "/",
  server: { port: 5250, host: true },
  preview: { port: 5250, host: true },
});
