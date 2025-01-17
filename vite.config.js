import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://tripgpt-backend-0xi5.onrender.com",
        changeOrigin: true,
      },
    },
  },
});
