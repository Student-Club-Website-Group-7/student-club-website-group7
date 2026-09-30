import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), 'index.html'),
        clubs: resolve(process.cwd(), 'page/club.html'),
        contact: resolve(process.cwd(), 'page/contact.html'),
        join: resolve(process.cwd(), 'page/join.html'),
        stories: resolve(process.cwd(), 'page/stories.html'),
      },
    },
  },
})
