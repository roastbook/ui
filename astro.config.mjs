import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://ui.roastbook.coffee',
  srcDir: './site/src',
  publicDir: './site/public',
  outDir: './site/dist',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
})
