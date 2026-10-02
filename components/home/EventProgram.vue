<!--
  Componente: EventProgram.vue
  Qué hace: presenta tracks, espacios, tópicos y sponsorship.
  Dónde se usa: pages/index.vue.
  Datos: tracks, spaces, topics y sponsorshipTiers desde data/config.json.
-->
<template>
  <v-container fluid class="py-8">
    <v-row>
      <v-col cols="12" data-gsap-reveal>
        <h2 class="text-h3 mb-2 section-heading">Un evento, cinco tracks</h2>
        <p class="text-body-1 mb-6 muted-copy">
          Elegí el track que más te interese y descubrí las sesiones disponibles
          para cada temática.
        </p>
      </v-col>
      <v-col v-for="track in mainData.eventInfo.tracks" :key="track.id" cols="12" sm="6" md="4" lg="3" data-gsap-reveal>
        <v-card
          class="aws-card track-card h-100 pa-5"
          data-gsap-box
          data-gsap-track
          :class="`track-${track.id}`"
          :style="{
            '--track-color': track.color,
            borderTop: `6px solid ${track.color}`,
          }"
          :to="{ path: '/agenda', query: { track: track.id } }"
          link
          :aria-label="`Ver agenda del track ${track.name}`"
        >
          <v-chip size="small" :color="track.color" class="track-chip mb-4">{{ track.name }}</v-chip>
          <p class="text-caption track-copy mb-2">{{ track.category }}</p>
          <p class="track-copy mb-0">{{ track.description }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12" data-gsap-reveal>
        <h2 class="text-h4 mb-4 section-heading">Espacios del evento</h2>
      </v-col>
      <v-col v-for="space in mainData.eventInfo.spaces" :key="space.id" cols="12" sm="6" md="4">
        <v-card class="aws-card feature-card h-100 pa-5" data-gsap-box>
          <v-icon color="#55B7E8" size="32" class="mb-3">mdi-map-marker-radius-outline</v-icon>
          <h3 class="text-h6 mb-2">{{ space.title }}</h3>
          <p class="mb-0 text-body-2">{{ space.description }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12" data-gsap-reveal>
        <h2 class="text-h4 mb-4 section-heading">Áreas y tópicos</h2>
      </v-col>
      <v-col v-for="group in mainData.eventInfo.topics" :key="group.id" cols="12" md="4">
        <v-card class="aws-card h-100 pa-5" data-gsap-box>
          <h3 class="text-h6 mb-3" style="color: #146eb4">{{ group.title }}</h3>
          <v-chip v-for="topic in group.topics" :key="topic" class="ma-1 topic-chip" size="small">
            {{ topic }}
          </v-chip>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12" data-gsap-reveal>
        <h2 class="text-h4 mb-2 section-heading">Sponsorship</h2>
        <p class="mb-4 muted-copy">La organización puede evaluar propuestas diferentes a las listadas.</p>
      </v-col>
      <v-col v-for="tier in mainData.eventInfo.sponsorshipTiers" :key="tier.id" cols="12" md="4">
        <v-card class="aws-card h-100 pa-5" data-gsap-box>
          <h3 class="text-h6">{{ tier.name }}</h3>
          <div class="text-h5 font-weight-bold my-3" style="color: #ec7211">{{ tier.price }}</div>
          <p class="text-body-2 muted-copy mb-4">{{ tier.condition }}</p>
          <v-list density="compact" class="bg-transparent">
            <v-list-item v-for="item in tier.includes" :key="item" prepend-icon="mdi-check">
              {{ item }}
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useJSONData } from '~/composables/useJSONData'

const { mainData } = useJSONData()
</script>

<style scoped>
.track-card {
  background: linear-gradient(145deg, var(--track-tint), #0e131d 82%) !important;
  border-color: var(--track-border) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.16),
    0 14px 28px rgba(0, 0, 0, 0.28),
    0 0 18px var(--track-glow);
}

.track-card:hover {
  border-color: var(--track-color) !important;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 20px 36px rgba(0, 0, 0, 0.38),
    0 0 28px var(--track-glow);
}

.track-copy {
  color: #ffffff !important;
}

.track-chip {
  color: #ffffff !important;
  font-weight: 700;
  box-shadow: 0 0 14px var(--track-glow);
}

.track-red {
  --track-tint: rgba(209, 50, 18, 0.3);
  --track-border: rgba(209, 50, 18, 0.75);
  --track-glow: rgba(209, 50, 18, 0.22);
}

.track-blue {
  --track-tint: rgba(20, 110, 180, 0.3);
  --track-border: rgba(20, 110, 180, 0.75);
  --track-glow: rgba(20, 110, 180, 0.22);
}

.track-green {
  --track-tint: rgba(46, 125, 50, 0.3);
  --track-border: rgba(46, 125, 50, 0.75);
  --track-glow: rgba(46, 125, 50, 0.22);
}

.track-orange {
  --track-tint: rgba(236, 114, 17, 0.3);
  --track-border: rgba(236, 114, 17, 0.75);
  --track-glow: rgba(236, 114, 17, 0.22);
}

.track-yellow {
  --track-tint: rgba(255, 196, 0, 0.28);
  --track-border: rgba(255, 196, 0, 0.78);
  --track-glow: rgba(255, 196, 0, 0.2);
}

.feature-card {
  background:
    linear-gradient(145deg, rgba(25, 48, 68, 0.92), rgba(13, 19, 30, 0.98)) !important;
}

.topic-chip {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #ffffff !important;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
