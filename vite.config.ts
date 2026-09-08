import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { copyFileSync } from "fs";
import { resolve } from "path";

function copy404Plugin() {
  return {
    name: "copy-404",
    closeBundle() {
      try {
        copyFileSync(resolve(__dirname, "dist/index.html"), resolve(__dirname, "dist/404.html"));
        console.log("Copied dist/index.html to dist/404.html for GitHub Pages SPA routing");
      } catch (e) {
        // ignore if dist not built
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig(() => ({
  base: process.env.VITE_BASE_PATH || (process.env.NODE_ENV === "production" ? "/archivest/" : "/"),
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    copy404Plugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
