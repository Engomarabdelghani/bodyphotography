import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
    sourcemap: false,
  },
  build: {
    minify: 'esbuild',
    sourcemap: false,
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]',
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          framer: ['framer-motion'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  publicDir: 'public',
});
