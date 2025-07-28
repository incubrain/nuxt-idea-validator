// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/scripts',
    '@nuxt/image',
    '@nuxt/test-utils'
  ],

  css: ['~/assets/css/main.css'],

  routeRules: {
    // Homepage - Pre-rendered at build time (fastest loading)
    '/': { prerender: true },
  },

  nitro: {
    // debug: true,
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },

  icon: {
    serverBundle: {
      collections: ['lucide', 'mdi']
    }
  },

  eslint: {
    config: {
      // replaces need for prettier
      // configure - https://github.com/eslint-stylistic/eslint-stylistic/blob/main/packages/eslint-plugin/configs/customize.ts
      // all rules - https://eslint.style/rules#rules
      stylistic: {
        pluginName: '@new-stylistic',
        indent: 2,
        quotes: 'single',
        semi: false,
        jsx: true,
        arrowParens: true,
        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
        quoteProps: 'consistent-as-needed',
        blockSpacing: true,
        severity: 'warn',
      },
    },
  },

  fonts: {
    families: [
      { name: 'Outfit', provider: 'google' },
      { name: 'IBM Plex Sans', provider: 'google' },
      { name: 'JetBrains Mono', provider: 'google' },
    ],
  },
})