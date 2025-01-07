// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          colors: { 
            'linen-p': '#EFE6DD',
            'nyanza-s': "#D3FFE9",
            'vista-blue': "#8F95D3",
            'indian-red': "#B76D68",
            'davys-grey': "#494850",
          },
          fontFamily: {
            'noto-sans': ['Noto Sans Tamil Supplement', 'sans-serif'],
            'brawler': ['Brawler', 'serif'],
          },
        }
      }
    }
  }
})
