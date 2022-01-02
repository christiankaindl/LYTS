import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx()
  ],
  resolve: {
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js"
    }
  }
})
