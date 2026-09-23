# Datos editables del evento

Los archivos de esta carpeta son la fuente de contenido del sitio. No hay API ni
base de datos: Nuxt los importa durante el build mediante
[`useJSONData.ts`](../composables/useJSONData.ts).

## `config.json`

Configuración general del evento:

- `communityName`, `communityLocation`: identidad y ubicación de la comunidad.
- `communityDescription`: descripción institucional.
- `communityLinks`: enlaces oficiales. `instagram` contiene la cuenta
  `@aws_sbg_unc`.
- `eventInfo.name`, `tagline`, `date`, `time`: textos principales del hero.
- `eventInfo.venue`: sede principal y `mapLink`.
- `eventInfo.venues`: sedes o espacios físicos disponibles.
- `eventInfo.registration`: `link` externo y `endDate` ISO (`YYYY-MM-DD`).
- `eventInfo.description`: textos corto y largo.
- `eventInfo.stats`: métricas visibles; cada objeto tiene `name` y `value`.
- `eventInfo.whatToExpect`: cuatro dinámicas destacadas, con `title`,
  `description` e ícono opcional.
- `eventInfo.spaces`: seis espacios de la experiencia; `venueId` relaciona el
  espacio con `eventInfo.venues`.
- `eventInfo.tracks`: tracks con color, categoría y `scalable`. `scalable: true`
  indica que el track se habilita según demanda.
- `eventInfo.topics`: tres grupos de tópicos, cada uno con un array `topics`.
- `eventInfo.sponsorshipTiers`: los paquetes Base, Socio de Interacción y
  Constructor del Ecosistema, con precio, condición y beneficios.
- `eventInfo.pastEvent`: recap de actividades previas, imágenes y métricas.
- `seo`: keywords y URL pública oficial.

## `navbar.json`

Define la navegación. Cada entrada tiene `name`, `path` y `visible`. Se consume
desde la toolbar y el drawer móvil.

## `schedule.json`

Agrupa la agenda por día. Cada bloque tiene `startTime`, `endTime` y `session`.
`session` debe coincidir exactamente con un `id` de `sessions.json`.

## `sessions.json`

Detalle de una sesión: `id`, `title`, `description`, `track`, `date`, `time`,
`timeDuration`, `format`, `link`, `slide` y un array `speakers` con IDs de
`speakers.json`.

## `speakers.json`

Perfiles de speakers con `id`, nombre, empresa, `community_title`, imagen, bio y
redes sociales. **Los perfiles heredados son datos de ejemplo y todavía deben
confirmarse; no representan una agenda oficial.**

## `team.json`

Perfiles del equipo organizador. Usa la misma estructura de perfil que
`speakers.json` y agrega `type` (`Core`, `Volunteer`, etc.). Las personas y
biografías actuales son placeholders de la plantilla hasta su confirmación.

## `sponsors.json`

Sponsors agrupados por `category_name`. Cada sponsor tiene `id`, `name`, `link`
y `logo`. Los elementos con nombres como “Partner announcement coming soon” son
placeholders intencionales.

## `faq.json`

Preguntas frecuentes con `question` y `answer`. `answer` puede contener HTML
controlado para enlaces y saltos de línea; si el contenido pasa a ser editable
por terceros, debe sanitizarse antes de usar `v-html`.

## `coc.json`

Reglas del código de conducta. Cada entrada contiene `name` y `des`.

## Reglas de edición

1. Mantener IDs únicos y usar strings para todas las relaciones.
2. Validar JSON antes de ejecutar el build.
3. No agregar datos personales o nombres confirmados sin autorización.
4. Mantener URLs HTTPS y actualizar los assets correspondientes.
