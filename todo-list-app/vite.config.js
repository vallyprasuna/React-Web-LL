import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://literate-tribble-r759v55r6j6cxpg6-3000.app.github.dev',
        changeOrigin: true,
      }
    }
  }
})
