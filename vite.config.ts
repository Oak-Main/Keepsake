import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: false, // public/manifest.json is hand-authored and already linked in index.html
      workbox: {
        navigateFallback: '/index.html',
        // /privacy/ and /terms/ are server-rendered at the edge
        // (fleet-legal-pages), so the service worker must not answer them
        // with the app shell.
        navigateFallbackDenylist: [/^\/privacy/, /^\/terms/],
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },
    }),
  ],
})
