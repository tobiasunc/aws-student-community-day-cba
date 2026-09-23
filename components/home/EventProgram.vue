<!--
  Componente: EventProgram.vue
  Qué hace: presenta tracks escalables, espacios, tópicos y sponsorship.
  Dónde se usa: pages/index.vue.
  Datos: tracks, spaces, topics y sponsorshipTiers desde data/config.json.
-->
<template>
  <v-container fluid class="py-8">
    <v-row>
      <v-col cols="12">
        <h2 class="text-h3 mb-2">Un evento, cinco tracks escalables</h2>
        <p class="text-body-1 mb-6">
          Red, Green y Orange comienzan como tracks principales. Blue y Yellow se
          habilitan según la demanda para que cada participante encuentre su espacio.
        </p>
      </v-col>
      <v-col v-for="track in mainData.eventInfo.tracks" :key="track.id" cols="12" sm="6" md="4" lg="3">
        <v-card class="aws-card h-100 pa-5" :style="{ borderTop: `6px solid ${track.color}` }">
          <v-chip size="small" :color="track.color" class="mb-4">{{ track.name }}</v-chip>
          <p class="text-caption text-medium-emphasis mb-2">{{ track.category }}</p>
          <p class="mb-0">{{ track.description }}</p>
          <v-chip v-if="track.scalable" class="mt-4" size="small" variant="outlined">
            Escalable según demanda
          </v-chip>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12">
        <h2 class="text-h4 mb-4">Espacios del evento</h2>
      </v-col>
      <v-col v-for="space in mainData.eventInfo.spaces" :key="space.id" cols="12" sm="6" md="4">
        <v-card class="aws-card h-100 pa-5" color="#232F3E" theme="dark">
          <v-icon color="#FF9900" size="32" class="mb-3">mdi-map-marker-radius-outline</v-icon>
          <h3 class="text-h6 mb-2">{{ space.title }}</h3>
          <p class="mb-0 text-body-2">{{ space.description }}</p>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12">
        <h2 class="text-h4 mb-4">Áreas y tópicos</h2>
      </v-col>
      <v-col v-for="group in mainData.eventInfo.topics" :key="group.id" cols="12" md="4">
        <v-card class="aws-card h-100 pa-5">
          <h3 class="text-h6 mb-3" style="color: #146eb4">{{ group.title }}</h3>
          <v-chip v-for="topic in group.topics" :key="topic" class="ma-1" size="small">
            {{ topic }}
          </v-chip>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="mt-8">
      <v-col cols="12">
        <h2 class="text-h4 mb-2">Sponsorship</h2>
        <p class="mb-4">La organización puede evaluar propuestas diferentes a las listadas.</p>
      </v-col>
      <v-col v-for="tier in mainData.eventInfo.sponsorshipTiers" :key="tier.id" cols="12" md="4">
        <v-card class="aws-card h-100 pa-5">
          <h3 class="text-h6">{{ tier.name }}</h3>
          <div class="text-h5 font-weight-bold my-3" style="color: #ec7211">{{ tier.price }}</div>
          <p class="text-body-2 mb-4">{{ tier.condition }}</p>
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
const { mainData } = useJSONData()
</script>
