import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@i18n': path.resolve(__dirname, './src/i18n'),
      '@projects': path.resolve(__dirname, './src/projects'),
      '@lib': path.resolve(__dirname, './src/lib'),
    },
  },
  server: {
    host: '0.0.0.0', // Permite o acesso a partir de qualquer endereço IP
    port: 5173, // Porta em que o servidor rodará
  },
});
