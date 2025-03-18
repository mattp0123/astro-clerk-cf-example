// @ts-check
import cloudflare from '@astrojs/cloudflare'
import clerk from '@clerk/astro'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  integrations: [clerk({})],
  vite: {
    plugins: [tailwindcss()],
  },
})
