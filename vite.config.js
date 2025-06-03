import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: process.env.NODE_ENV === "development",
    }),
    tailwindcss(),
  ],
  build: {
    minify: "esbuild",
    sourcemap: false,
  },
});
