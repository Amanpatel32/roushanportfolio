import { defineConfig } from "vite";
import path from "path";

// Server build configuration - DISABLED (no server code exists)
// Uncomment and add server code if needed in the future

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
  define: {
    "process.env.NODE_ENV": '"production"',
  },
});
