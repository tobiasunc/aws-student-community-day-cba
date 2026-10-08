import type { EventConfig } from '~/types'
import { useJSONData } from '~/composables/useJSONData'
import { useRoute, useRuntimeConfig, useSeoMeta, useHead } from '#imports'

/**
 * Centraliza SEO, canonical y metadatos sociales de cada página.
 * Ejemplo: useEventSeo('Agenda') dentro de pages/agenda.vue.
 */
export const useEventSeo = (pageTitle?: string, event?: EventConfig) => {
  const { mainData, faqData } = useJSONData()
  const config = event ?? mainData
  const title = pageTitle
    ? `${pageTitle} - ${config.eventInfo.name}`
    : config.eventInfo.name
  const siteUrl = useRuntimeConfig().public.siteUrl as string
  const route = useRoute()
  const baseUrl = siteUrl.endsWith('/') ? siteUrl : `${siteUrl}/`
  const canonicalPath = route.path === '/' ? '/' : `${route.path.replace(/\/+$/, '')}/`
  const pageUrl = new URL(canonicalPath, baseUrl).toString()
  const image = new URL('thumbnail.png', baseUrl).toString()

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: config.eventInfo.name,
    description: config.eventInfo.description.long,
    inLanguage: 'es-AR',
    startDate: config.eventInfo.startDateTime,
    endDate: config.eventInfo.endDateTime,
    isAccessibleForFree: true,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: [image],
    performer: {
      '@type': 'Organization',
      name: config.communityName,
      url: baseUrl,
    },
    location: {
      '@type': 'Place',
      name: config.eventInfo.venue.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: config.eventInfo.venue.address,
        addressLocality: config.eventInfo.venue.city,
        addressCountry: config.eventInfo.venue.country,
      },
      hasMap: config.eventInfo.venue.mapLink,
    },
    organizer: {
      '@type': 'Organization',
      name: config.communityName,
      url: baseUrl,
      sameAs: Object.values(config.communityLinks).filter(Boolean),
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'ARS',
      availability: 'https://schema.org/InStock',
      url: config.eventInfo.registration.link,
      validFrom: (config.eventInfo as any).registration?.startDate || '2026-01-01T00:00:00-03:00',
      validThrough: config.eventInfo.registration.endDate,
    },
  }
  const faqSchema =
    pageTitle === 'FAQ'
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer.replace(/<[^>]*>/g, ' '),
            },
          })),
        }
      : null

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
    ogImageAlt: `${config.eventInfo.name} - AWS Student Community Day UNC 2026`,
    ogImageType: 'image/png',
    ogImageWidth: '1365',
    ogImageHeight: '768',
    ogUrl: pageUrl,
    ogType: 'website',
    twitterTitle: title,
    twitterDescription: config.eventInfo.description.short,
    twitterImage: image,
    twitterImageAlt: `${config.eventInfo.name} - AWS Student Community Day UNC 2026`,
    twitterCard: 'summary_large_image',
  })

  useHead({
    link: [{ rel: 'canonical', href: pageUrl }],
    meta: [
      { property: 'twitter:url', content: pageUrl },
      { property: 'og:image:url', content: image },
      { property: 'og:image:secure_url', content: image },
    ],
    script: [
      { type: 'application/ld+json', children: JSON.stringify(eventSchema) },
      ...(faqSchema
        ? [{ type: 'application/ld+json', children: JSON.stringify(faqSchema) }]
        : []),
    ],
  })
}