import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({ algorithm: "gzip" }), 
    compression({ algorithm: "brotliCompress" }), 
  ],
  base: "/",
  esbuild: {
    loader: "jsx",
  },
  assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"],
});
