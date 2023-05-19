import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2015',
    assetsInlineLimit: 0,
    minify: true,
    rollupOptions: {
      output: {
        entryFileNames: 'your-bundle-name.js',
        manualChunks: undefined,
        chunkFileNames: undefined,
        assetFileNames: undefined,
      },
    },
  },
  plugins: [vue()],
})
