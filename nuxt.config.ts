import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'reka-ui/nuxt',
    '@nuxt/icon',
    '@nuxtjs/seo'
  ],

  devtools: {
    enabled: true
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Apex Sports & Physical Therapy | Clinical Performance & Human Rehab',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://apexsportspt.com',
    name: 'Apex Sports & Physical Therapy',
    description: 'Evidence-based clinical rehabilitation, biomechanical analysis, and 1-on-1 sports physical therapy tailored for competitive athletes and active professionals.',
    defaultLocale: 'en'
  },

  future: {
    compatibilityVersion: 5
  },
  compatibilityDate: '2026-09-06',

  nitro: {
    preset: 'cloudflare_pages',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/book', '/robots.txt', '/sitemap.xml']
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
  },

  ogImage: {
    enabled: false
  },

  seo: {
    automaticTwitterTags: false
  }
})
