// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    ["@storyblok/nuxt", {
      accessToken: process.env.STORYBLOK_ACCESS_TOKEN
    }],
    ['@nuxtjs/algolia', {
      apiKey: process.env.ALGOLIA_API_KEY,
      applicationId: process.env.ALGOLIA_APPLICATION_ID,
      indexer: {
        storyblok: {
          secret: process.env.INDEXER_SECRET,
          algoliaAdminApiKey: process.env.ALGOLIA_ADMIN_KEY,
          indexName: process.env.ALGOLIA_INDEX_NAME,
          accessToken: process.env.STORYBLOK_ACCESS_TOKEN
        }
      }
    }]
  ],
  image: {
    domains: ['a.storyblok.com']
  }
})
