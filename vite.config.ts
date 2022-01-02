import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkSourcePlugin from './src/plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkSourcePlugin]
    })
  ],
  resolve: {
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js"
    }
  }
})
