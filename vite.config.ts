import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkSourcePlugin from './src/plugin'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({
      root: '.'
    }),
    vanillaExtractPlugin(),
    mdx({
      remarkPlugins: [remarkSourcePlugin]
    }),
    react()
  ],
  resolve: {
    alias: {
      "react/jsx-runtime": "react/jsx-runtime.js"
    }
  }
})
