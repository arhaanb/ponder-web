export default {
  ssr: false,
  target: 'static',

  css: ['@/assets/css/skeleton.css', '@/assets/css/global.css'],

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ponder',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  components: true,

  modules: ['@nuxtjs/pwa', 'nuxt-seo'],

  pwa: {
    manifest: {
      lang: 'en',
    },
  },
}
