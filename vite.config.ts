import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  // If your repo is username.github.io, use '/'
  // If your repo is username.github.io/repo-name, use '/repo-name/'
  // './' is generally safe for both but '/' is standard for root domains
  base: '/', 
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  }
});
