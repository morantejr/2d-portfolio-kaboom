import { defineConfig } from "vite";

export default defineConfig({
  base: "/morantejr.github.io",
  build: {
    minify: "terser",
  },
});
