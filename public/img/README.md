# Imágenes públicas

Los archivos dentro de `public/img` se sirven directamente desde URLs que
comienzan con `/img/`. Nuxt no los procesa ni les agrega hash.

```text
public/img/
├── speakers/  Fotos de speakers; nombre recomendado: <id>-<nombre>.jpg
├── team/      Fotos del equipo; mismo criterio que speakers
├── sponsors/  Logos transparentes PNG/SVG con altura consistente
├── event/     Recursos visuales del evento, si se agregan en el futuro
└── common/   Fallbacks e imágenes genéricas, como avatar.png
```

Las fotos de speakers y equipo deben ser cuadradas y tener al menos 400x400px,
preferentemente JPG o WEBP. Los logos deben tener fondo transparente y no deben
incluir texto ilegible a tamaños pequeños.

Si falta una foto de speaker o miembro del equipo, las tarjetas utilizan
`/img/common/avatar.png`. Si falta un logo de sponsor o tecnología, el
componente aplica el mismo fallback para evitar imágenes rotas.

Las imágenes de `assets/` son distintas: esas son importadas y procesadas por
Vite/Nuxt durante el build. El logo del SBG y los recursos de marca viven allí.
