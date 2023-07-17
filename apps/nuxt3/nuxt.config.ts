// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@monorepo/ui',
    '@nuxt/devtools',
  ],
  telemetry: false,
  typescript: {
    shim: true,
  },
})
