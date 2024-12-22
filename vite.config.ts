import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        target: "https://www.google.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});

// '/api': {
//   target: 'https://www.google.com',
//   changeOrigin: true,
//   rewrite: (path) => path.replace(/^\/api/, '/recaptcha/api'),
// },
