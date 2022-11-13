// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  runtimeConfig: {
    OPEN_AI_ORG_ID: process.env.OPEN_AI_ORG_ID, // only exposed server-side
    OPEN_AI_API_SECRET_KEY: process.env.OPEN_AI_API_SECRET_KEY // only exposed server-side
  }
})
