import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@i18n': path.resolve(__dirname, './src/i18n'),
      '@projects': path.resolve(__dirname, './src/projects'),
    },
  },
  server: {
    host: '0.0.0.0', // Permite o acesso a partir de qualquer endereço IP
    port: 5173, // Porta em que o servidor rodará
  },
});
