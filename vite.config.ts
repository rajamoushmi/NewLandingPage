import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false, // Disable sourcemaps to avoid errors
    outDir: "dist", // Ensure build files go into the correct folder
    assetsDir: "assets", // Place assets in a separate directory
  },
});
