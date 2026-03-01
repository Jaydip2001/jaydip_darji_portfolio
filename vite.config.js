import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === "production" ? "/jaydip_darji_portfolio/" : "/",
  build: {
    target: "es2015",
  },
}));