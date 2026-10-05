# Guía de contenido y mantenimiento

Este proyecto es un sitio Nuxt 3 estático. El contenido del evento vive en
archivos JSON dentro de `data/`; los componentes Vue leen esos archivos durante
el build. No hay una API ni una base de datos que actualizar.

## Flujo de trabajo

1. Crear una rama descriptiva para el cambio.
2. Editar los archivos de `data/` y los componentes necesarios.
3. Validar los JSON y ejecutar `npm run generate`.
4. Revisar el resultado con `npm run dev`.
5. Commitear y hacer push. Cloudflare Pages publica `dist` después de
   ejecutar `npm run generate`.

## Cambiar la información general del evento

Editar [`data/config.json`](../data/config.json):

- `communityName`, `communityLocation` y `communityDescription`: identidad de
  la comunidad.
- `eventInfo.name`, `tagline`, `date` y `time`: textos principales.
- `eventInfo.startDateTime` y `eventInfo.endDateTime`: fechas ISO completas,
  incluyendo zona horaria, usadas por el contador. Deben mantenerse alineadas
  con `date` y `time`.
- `eventInfo.venue`: sede principal, dirección y enlace de Maps.
- `eventInfo.venues`: aulas, auditorios y espacios disponibles. Cada `id` debe
  ser único.
- `eventInfo.registration`: enlace de inscripción y fecha de cierre.
- `eventInfo.description`: textos corto y largo.
- `eventInfo.stats`: métricas que se muestran en la página.
- `eventInfo.whatToExpect`: tarjetas de experiencias destacadas.
- `eventInfo.spaces`: espacios descriptivos; `venueId` debe coincidir con una
  sede de `eventInfo.venues`.
- `eventInfo.tracks`: los cinco tracks disponibles. Cada track necesita `id`,
  `name`, `color`, `category` y `description`.
- `eventInfo.topics`: grupos de temas de la página principal.
- `eventInfo.sponsorshipTiers`: paquetes de sponsorship.
- `eventInfo.pastEvent`: imágenes y métricas de actividades anteriores.

Los `id` de tracks se usan en los enlaces de las tarjetas y en la URL de la
agenda (`/agenda?track=red`). Si se cambia un `id`, también deben actualizarse
los campos `track` de `data/sessions.json` y cualquier enlace que lo use.

## Agregar o modificar charlas

### `data/sessions.json`

Cada sesión debe tener:

- `id`: string único.
- `title` y `description`: contenido visible.
- `track`: nombre exacto del track seguido de ` Track`, por ejemplo
  `Green Track`.
- `date`, `time` y `timeDuration`: información temporal.
- `format`: tipo de sesión, como `Charla técnica`, `Taller` o `Conexiones`.
- `speakers`: array de IDs existentes en `data/speakers.json`.
- `link` y `slide`: opcionales; pueden quedar vacíos.

### `data/schedule.json`

Este archivo define el orden y horario de la agenda. Cada item necesita
`startTime`, `endTime` y un `session` que coincida con un `id` de
`data/sessions.json`.

Para agregar una charla, primero crear la sesión y después agregar su bloque al
horario. La página `/agenda` filtra automáticamente cada bloque por el track
seleccionado. Si una sesión no tiene un `id` válido o el `track` no coincide
exactamente, no aparecerá en el track esperado.

La cena y las conexiones son una sesión común de tipo `Conexiones`, no una regla
especial del código. Puede modificarse como cualquier otra sesión.

## Ponentes y equipo

- `data/speakers.json` contiene las personas asociadas a sesiones.
- `data/team.json` contiene organizadores.
- La relación se hace mediante el `id` del speaker.
- Las fotos de speakers y equipo se guardan en `public/img/speakers/` y
  `public/img/team/`.
- Si `image` está vacío, las tarjetas usan el fallback
  `/img/common/avatar.png`.

No publicar nombres, biografías o enlaces personales sin confirmación. Los
perfiles de ejemplo deben reemplazarse o eliminarse antes de anunciar una
agenda oficial.

## Imágenes, logos y fuentes

- `assets/img/`: logos, íconos e imágenes importadas por Vue/Nuxt. Se procesan
  durante el build y sus URLs reciben hash.
- `public/img/`: archivos públicos servidos directamente desde `/img/`.
- `assets/fonts/`: fuentes importadas por el bundle.

Para imágenes en `assets/`, usar imports en `<script setup>`:

```ts
import heroImage from "@/assets/img/foto_pagina_principal.png";
```

Para imágenes en `public/`, usar una URL absoluta:

```vue
<v-img src="/img/event/foto.jpg" />
```

Usar nombres sin espacios, tildes ni caracteres especiales. Mantener los
formatos vectoriales SVG para logos e íconos cuando estén disponibles.

## Navegación y preguntas frecuentes

- `data/navbar.json` controla los enlaces del menú.
- `data/faq.json` controla las preguntas de la página FAQ.
- `data/coc.json` controla el código de conducta.
- `data/sponsors.json` controla los sponsors y sus categorías.

Las redes de la comunidad se editan en `communityLinks` dentro de
`data/config.json`. El componente compartido
`components/common/speakerSocialButton.vue` las muestra en Contacto y Footer,
y también sirve para perfiles de speakers y equipo. Para agregar una red nueva,
hay que añadir su campo a `types/index.ts`, la URL a `config.json` y una entrada
en el array `networks` del componente. Los SVG públicos se referencian desde
`/img/common/`.

## Componentes principales

- `pages/index.vue`: compone la portada.
- `pages/agenda.vue`: tabs por track y agenda filtrada.
- `components/home/EventProgram.vue`: tarjetas enlazables de tracks.
- `components/home/ExpectationSection.vue`: tarjetas de experiencias e íconos.
- `components/common/scheduleDetails.vue`: filas horarias.
- `components/common/scheduleDialog.vue`: detalle de una sesión y sus speakers.
- `composables/useJSONData.ts`: punto central de importación de datos.

## Validación

Desde la raíz del proyecto:

```powershell
npm install
npm run generate
npm run dev
```

`npm run generate` debe finalizar sin errores y generar `dist`.
Cloudflare Pages debe usar:

```text
Build command: npm run generate
Build output directory: dist
```

Antes de commitear, revisar:

```powershell
git status
git diff
```
