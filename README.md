# AWS Student Community Day UNC 2026

Sitio oficial del AWS Student Community Day UNC 2026, un evento estudiantil
gratuito sobre cloud, tecnología y comunidad en Córdoba, Argentina.

## Requisitos

- Node.js 20 o superior.
- npm 10 o superior.
- Firebase CLI únicamente si se publica en Firebase Hosting.

## Desarrollo local

```powershell
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Comandos del proyecto

| Comando | Uso |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga automática. |
| `npm run typecheck` | Verificación de TypeScript y componentes Vue. |
| `npm run build` | Build de producción de Nuxt. |
| `npm run generate` | Generación estática para hosting. |
| `npm run preview` | Vista local de la salida de producción. |

Antes de abrir un pull request, ejecutar:

```powershell
npm run typecheck
npm run generate
git diff --check
```

## Contenido y estructura

El contenido editable vive en [`data/`](data/). Las imágenes importadas por
componentes están en [`assets/`](assets/) y los archivos servidos directamente
desde una URL pública están en [`public/`](public/).

La guía detallada para modificar tracks, agenda, speakers, equipo, sponsors,
imágenes y redes está en [`docs/CONTENT_GUIDE.md`](docs/CONTENT_GUIDE.md).

Páginas principales:

- `/`: portada y presentación del evento.
- `/agenda`: agenda filtrable por track.
- `/speakers`: speakers.
- `/team`: equipo organizador.
- `/faq`: preguntas frecuentes.
- `/coc`: código de conducta.

## Despliegue en Cloudflare Pages

La configuración actual de Cloudflare Pages utiliza `dist` como directorio de salida.
Configurá el proyecto con:

```powershell
Build command: npm run generate
Build output directory: dist
```

El dominio público es
`https://awstudentcommunitydaycba.com/`.

El archivo [`firebase.json`](firebase.json) se conserva únicamente para un flujo
alternativo de Firebase Hosting y no representa el despliegue principal.

## Analítica

Google Analytics es opcional. Definir `NUXT_PUBLIC_GTAG_ID` únicamente en el
entorno de build:

```powershell
$env:NUXT_PUBLIC_GTAG_ID="G-XXXXXXXXXX"
npm run generate
```

## Contribuir

Mantener los cambios enfocados, no incluir secretos ni artefactos generados
(`.nuxt`, `.output`, `.firebase`) y revisar el resultado visual en desktop y
mobile. Los datos personales y los perfiles de ejemplo deben confirmarse antes
de publicar el evento.

## Licencia y contacto

Para reportar un problema, abrir un issue en el repositorio. La información de
los organizadores y sus enlaces se mantiene en los archivos de datos del
proyecto.
