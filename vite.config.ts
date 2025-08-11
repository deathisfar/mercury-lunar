// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      // only add componentTagger in development mode
      mode === "development" && componentTagger(),
    ].filter(Boolean),
    base: "/mercury-lunar/",

    // optional dev server config (only used locally)
    server: {
      host: "::",
      port: 8080,
    },

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
