// Configuración global: Nuxt genera un sitio estático que Cloudflare Pages sirve
// desde dist. Las variables públicas se leen desde el entorno de build.
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
  // nuxt-gtag añade esta propiedad mediante su módulo en tiempo de ejecución.
  // @ts-expect-error nuxt-gtag no expone la extensión en InputConfig.
  gtag: gtagId ? { id: gtagId } : undefined,
  runtimeConfig: {
    public: {
      siteUrl: "https://awstudentcommunitydaycba.com/",
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "shortcut icon",
          type: "image/svg+xml",
          href: "/favicon.svg",
        },
        {
          rel: "apple-touch-icon",
          href: "/favicon.svg",
        },
      ],
      meta: [
        { property: "og:image", content: "https://awstudentcommunitydaycba.com/thumbnail.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://awstudentcommunitydaycba.com/thumbnail.png" },
      ],
    },
  },
});