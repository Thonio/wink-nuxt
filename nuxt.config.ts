export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui'],
  css: ['~/assets/css/main.css'],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    classSuffix: ''
  },
  ui: {
    theme: {
      colors: ['primary', 'secondary', 'brand', 'info', 'warning', 'error']
    }
  }
})
