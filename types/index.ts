/** Enlaces oficiales de una persona o comunidad. */
export interface SocialLinks {
  /** Página principal o perfil de la comunidad. */
  page?: string
  /** Sitio web oficial. */
  website?: string
  /** Perfil de Instagram. */
  instagram?: string
  /** Perfil de LinkedIn. */
  linkedin?: string
  /** Perfil de GitHub. */
  github?: string
  /** Perfil de X/Twitter. */
  twitter?: string
  /** Canal de YouTube. */
  youtube?: string
  /** Enlace web alternativo heredado. */
  web?: string
}

export interface Venue {
  /** Identificador estable usado para relacionar espacios y sedes. */
  id: string
  /** Nombre visible del espacio. */
  name: string
  /** Dirección física. */
  address: string
  /** Ciudad. */
  city: string
  /** País. */
  country: string
  /** Enlace a la ubicación en mapas. */
  mapLink: string
  /** Capacidad estimada, si se conoce. */
  capacity?: number
  /** Descripción del uso del espacio. */
  description?: string
}

export interface EventStat {
  /** Etiqueta visible de la métrica. */
  name: string
  /** Valor destacado de la métrica. */
  value: string
  /** Imagen decorativa opcional. */
  image?: string
  /** Color del bloque de métrica. */
  color?: string
  /** Explicación ampliada opcional. */
  description?: string
}

export interface Expectation {
  /** Título de una dinámica destacada del evento. */
  title: string
  /** Texto explicativo de la dinámica. */
  description: string
  /** Ícono opcional de Vuetify. */
  icon?: string
}

export interface EventSpace {
  /** Identificador estable del espacio. */
  id: string
  title: string
  description: string
  venueId?: string
}

export interface Track {
  /** Identificador estable del track. */
  id: string
  name: string
  color: string
  category: string
  scalable: boolean
  description: string
}

export interface TopicGroup {
  /** Identificador estable del grupo temático. */
  id: string
  title: string
  topics: string[]
}

export interface SponsorshipTier {
  /** Identificador estable del paquete de sponsorship. */
  id: string
  name: string
  price: string
  condition?: string
  includes: string[]
}

export interface Registration {
  /** Enlace externo utilizado para inscribirse. */
  link: string
  endDate: string
}

export interface PastEvent {
  /** Contenido visual y métricas del recap de una edición anterior. */
  summary: string
  images: string[]
  stats: EventStat[]
}

export interface EventConfig {
  /** Identidad de la comunidad organizadora. */
  communityName: string
  communityLocation: { country: string; city: string }
  communityDescription: string
  communityLinks: SocialLinks
  eventInfo: {
    name: string
    tagline: string
    date: string
    time: string
    venue: Venue
    venues: Venue[]
    registration: Registration
    description: { short: string; long: string }
    stats: EventStat[]
    whatToExpect: Expectation[]
    spaces: EventSpace[]
    tracks: Track[]
    topics: TopicGroup[]
    sponsorshipTiers: SponsorshipTier[]
    /** Recap de una edición o actividad previa de la comunidad. */
    pastEvent: PastEvent
  }
  seo: { keywords: string; hostUrl: string }
}

export interface Session {
  /** Identificador de la sesión; coincide con schedule.json. */
  id: string
  slide?: string
  title: string
  description: string
  track: string
  link?: string
  time: string
  format: string
  date: string
  timeDuration: string
  speakers: string[]
}

export interface Person {
  /** Perfil editorial de speakers y equipo, pendiente de confirmación si es ejemplo. */
  id: string
  name: string
  company: { name: string; designation: string }
  community_title: string
  image: string
  bio: string
  social: SocialLinks
}

export interface Speaker extends Person {}

export interface TeamMember extends Person {
  type: string
}

export interface Sponsor {
  /** Identificador opcional del sponsor. */
  id?: string
  name: string
  link: string
  logo: string
}

export interface SponsorCategory {
  category_name: string
  sponsors: Sponsor[]
}

export interface ScheduleItem {
  startTime: string
  endTime: string
  session: string
}

export interface ScheduleDay {
  day: string
  date: string
  schedule: ScheduleItem[]
}
