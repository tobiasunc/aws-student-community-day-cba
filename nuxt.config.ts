// Configuración global: Nuxt genera un sitio estático que Firebase Hosting sirve
// desde .output/public. Las variables públicas se leen desde el entorno de build.
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
const gtagId = process.env.NUXT_PUBLIC_GTAG_ID;

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: process.env.NODE_ENV !== "production" },
  build: {
    transpile: ["vuetify"],
  },
  css: ['~/assets/main.css'],
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    ...(gtagId ? ["nuxt-gtag"] : [])
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // Google Analytics queda desactivado si no existe NUXT_PUBLIC_GTAG_ID.
  // Para activarlo: NUXT_PUBLIC_GTAG_ID=G-XXXXXXXXXX npm run generate.
  gtag: gtagId ? { id: gtagId } : undefined,
  runtimeConfig: {
    public: {
      siteUrl: "https://awstudentcommunitydaycba.com/",
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/svg+xml", href: "/img/common/aws-sbg-logo.svg" }],
    },
  },
});
