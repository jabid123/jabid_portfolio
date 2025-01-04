import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss:  "./public/postcss.config.js",
    // Ensures Tailwind CSS is processed correctly
  },
  server: {
    open: true, // Automatically opens the app in the browser
    port: 5173, // Default port
  },
});
