<!--
  Componente: speakerCard.vue
  Qué hace: tarjeta y diálogo de detalle de un speaker.
  Dónde se usa: pages/speakers.vue.
  Datos: un Speaker; la foto sale de public/img/speakers y usa avatar.png como fallback.
-->
<template>
  <v-dialog v-model="dialog" width="900" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <button
        type="button"
        style="cursor: pointer"
        v-bind="activatorProps"
        class="text-center image-container"
      >
        <div class="octagon-portrait" data-gsap-image data-gsap-box>
          <v-img
            class="avatar"
            cover
            :alt="props.data.name"
            :src="
              props.data.image.length
                ? '/img/speakers/' + props.data.image
                : '/img/common/avatar.png'
            "
          ></v-img>
          <span class="octagon-frame" aria-hidden="true"></span>
        </div>
        <h3 class="mt-n1">{{ props.data.name }}</h3>
        <v-chip size="x-small" color="#FFC400" class="mt-1">Ejemplo — a confirmar</v-chip>
        <p style="font-size: 90%">{{ props.data.company.name }}</p>
      </button>
    </template>

    <v-card
      max-width="800"
      rounded="xl"
      class="pa-4"
      style="border: 2px solid black"
    >
      <v-container fluid>
        <v-row>
          <v-col md="4" cols="12">
            <div class="text-center image-container">
              <div class="octagon-portrait">
                <v-img
                  class="avatar"
                  :alt="props.data.name"
                  cover
                  :src="
                    props.data.image.length
                      ? '/img/speakers/' + props.data.image
                      : '/img/common/avatar.png'
                  "
                ></v-img>
                <span class="octagon-frame" aria-hidden="true"></span>
              </div>
            </div>
          </v-col>
          <v-col md="8" cols="12">
            <h1 class="mt-3 mb-0">{{ props.data.name }}</h1>
            <v-chip size="small" color="#FFC400">Ejemplo — a confirmar</v-chip>
            <p style="font-weight: 500" class="mt-n1">
              {{ props.data.community_title }} |
              {{ props.data.company.designation }},
              {{ props.data.company.name }}
            </p>

            <p class="mt-4">{{ props.data.bio }}</p>

            <common-speaker-social-button :socialLinks="props.data.social" />
          </v-col>
        </v-row>
      </v-container>
      <template v-slot:actions>
        <v-btn variant="text" @click="dialog = false">Cerrar</v-btn>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import type { Speaker } from '~/types'
import { ref } from 'vue'

const props = defineProps<{ data: Speaker }>()

// Reactive variables
const dialog = ref(false);
</script>

<style scoped>
.image-container {
  display: block;
  border: 0;
  padding: 0;
  color: inherit;
  background: transparent;
  font: inherit;
  position: relative;
  width: 80%;
  margin-top: 20px;
}

.octagon-portrait {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  filter: drop-shadow(0 0 14px rgba(255, 153, 0, 0.28));
}

.avatar {
  position: absolute;
  inset: 6%;
  z-index: 1;
  width: 88%;
  height: 88%;
  clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);
  background: #15151d;
}

.octagon-frame {
  display: none;
}

h4,
p {
  position: relative;
  z-index: 10;
}

</style>
