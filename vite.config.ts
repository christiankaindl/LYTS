import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsconfigPaths({ root: '.' }),
    vanillaExtractPlugin(),
    react(),
    // Generate TypeScript types
    dts({
      outputDir: './dist',
      skipDiagnostics: false,
      logDiagnostics: true
    })
  ],
  resolve: {
    alias: {
      // Wihtout this alias, TS path aliases (e.g. "@lib/" are not resolved)
      '@lib': path.resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'lyts',
      fileName: (format) => `lyts.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React'
        }
      }
    }
  }
})
