import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://roastbook.github.io',
  base: '/ui',
  srcDir: './site/src',
  outDir: './site/dist',
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
})
