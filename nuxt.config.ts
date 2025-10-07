// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      title: 'M0NARQ - Decision Intelligence',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'M0NARQ builds Decision-Making Operating Systems. The AI engines transform complex data into a verifiable, defensible edge for our clients, moving beyond prediction to causal inference.' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ],
      script: [
          { src: '/js/7aefc33.js', defer: true, body: true },
          { src: '/js/e3cea04.js', defer: true, body: true },
          { src: '/js/e36d691.js', defer: true, body: true },
          { src: '/js/b6072a7.js', defer: true, body: true },
          { src: '/js/1475246.js', defer: true, body: true },
          { src: '/js/d5d162b.js', defer: true, body: true },
      ]
    }
  }
})