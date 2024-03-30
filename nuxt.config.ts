export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxt/fonts', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: true,
    },
  },

})
