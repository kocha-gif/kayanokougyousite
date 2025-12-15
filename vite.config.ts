import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Defines process.env as a global object to prevent "process is not defined" errors in browser
    'process.env': {}
  }
})