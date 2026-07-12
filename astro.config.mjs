// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://almanex.github.io',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'de'],
    routing: {
      prefixDefaultLocale: false
    }
  },

  integrations: [sitemap()],

  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  }
});