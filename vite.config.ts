import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // Prevent pre-bundling
  },
  build: {
    rollupOptions: {
      external: ['lucide-react'], // Prevent Rollup from trying to bundle it
    },
  },
});
