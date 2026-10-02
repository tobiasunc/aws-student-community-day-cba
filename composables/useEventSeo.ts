import type { EventConfig } from '~/types'
import { useJSONData } from '~/composables/useJSONData'
import { useRoute, useRuntimeConfig, useSeoMeta, useHead } from '#imports'

/**
 * Centraliza SEO, canonical y metadatos sociales de cada página.
 * Ejemplo: useEventSeo('Agenda') dentro de pages/agenda.vue.
 */
export const useEventSeo = (pageTitle?: string, event?: EventConfig) => {
  const { mainData } = useJSONData()
  const config = event ?? mainData
  const title = pageTitle
    ? `${pageTitle} - ${config.eventInfo.name}`
    : config.eventInfo.name
  const siteUrl = useRuntimeConfig().public.siteUrl as string
  const route = useRoute()
  const baseUrl = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`
  const pageUrl = new URL(route.fullPath, baseUrl).toString()
  const image = new URL('thumbnail.png', baseUrl).toString()

  useSeoMeta({
    contentType: 'text/html; charset=utf-8',
    title,
    description: config.eventInfo.description.short,
    keywords: config.seo.keywords,
    ogLocale: 'es_AR',
    author: config.communityName,
    creator: config.communityName,
    viewport: 'width=device-width, initial-scale=1.0',
    ogTitle: title,
    ogDescription: config.eventInfo.description.short,
    ogImage: image,
    ogUrl: pageUrl,
    ogType: 'website',
    twitterTitle: title,
    twitterDescription: config.eventInfo.description.short,
    twitterImage: image,
    twitterCard: 'summary_large_image',
  })

  useHead({
    link: [{ rel: 'canonical', href: pageUrl }],
    meta: [{ property: 'twitter:url', content: pageUrl }],
  })
}
