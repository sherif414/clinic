import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'reka-ui/nuxt',
    '@nuxt/icon'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      title: 'Apex Sports & Physical Therapy | Clinical Performance & Human Rehab',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Evidence-based clinical rehabilitation, biomechanical analysis, and 1-on-1 sports physical therapy tailored for competitive athletes and active professionals.' }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 5
  },
  compatibilityDate: '2026-09-06',

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/book']
    }
  },

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    serverBundle: {
      collections: ['lucide']
    }
  }
})
