import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite o acesso a partir de qualquer endereço IP
    port: 5173, // Porta em que o servidor rodará
  },
})
