import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ✅ REMOVE THIS:
  // optimizeDeps: {
  //   exclude: ['lucide-react'],
  // },
});
