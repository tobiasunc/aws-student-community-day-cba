<!--
  Componente: teamCard.vue
  Qué hace: tarjeta y diálogo de detalle de una persona del equipo.
  Dónde se usa: pages/team.vue.
  Datos: un TeamMember; la foto sale de public/img/team y usa avatar.png como fallback.
-->
<template>
  <v-dialog v-model="dialog" width="800" persistent>
    <template v-slot:activator="{ props: activatorProps }">
      <button
        type="button"
        v-bind="activatorProps"
        style="cursor: pointer"
        :class="['text-center', 'image-container', accentClass]"
      >
        <div class="octagon-portrait" data-gsap-image data-gsap-box>
          <v-img
            class="avatar"
            cover
            :alt="props.data.name"
            :src="
              props.data.image.length
                ? '/img/team/' + props.data.image
                : '/img/common/avatar.png'
            "
          ></v-img>
          <span class="octagon-frame" aria-hidden="true"></span>
        </div>
        <h3 class="mt-n1" :class="accentClass">{{ props.data.name }}</h3>
        <v-chip size="x-small" color="#FFC400" class="mt-1">{{ props.data.company.designation }}</v-chip>
        <p style="font-size: 90%">{{ props.data.company.name }}</p>
      </button>
    </template>

    <v-card
      max-width="800"
      rounded="xl"
      :class="['team-dialog-card', 'pa-4', accentClass]"
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
                      ? '/img/team/' + props.data.image
                      : '/img/common/avatar.png'
                  "
                ></v-img>
                <span class="octagon-frame" aria-hidden="true"></span>
              </div>
            </div>
          </v-col>
          <v-col md="8" cols="12">
            <h1 class="mt-3 mb-0" :class="accentClass">{{ props.data.name }}</h1>
            <v-chip size="small" color="#FFC400">{{ props.data.company.designation }}</v-chip>
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
import type { TeamMember } from '~/types'
import { ref } from 'vue'
import { computed } from 'vue'

const props = defineProps<{ data: TeamMember }>()

// Reactive variables
const dialog = ref(false);
const accentClass = computed(() => props.data.accent ? `team-accent-${props.data.accent}` : '')
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

.team-accent-cyan .octagon-portrait {
  filter: drop-shadow(0 0 14px rgba(76, 201, 240, 0.9))
    drop-shadow(0 0 32px rgba(76, 201, 240, 0.45));
}

.team-accent-cyan h1,
.team-accent-cyan h3 {
  color: #ffffff;
}

.team-accent-blue .octagon-portrait {
  filter: drop-shadow(0 0 14px rgba(59, 130, 246, 0.9))
    drop-shadow(0 0 32px rgba(59, 130, 246, 0.45));
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

.team-dialog-card {
  border: 2px solid rgba(255, 153, 0, 0.8);
  background:
    linear-gradient(135deg, rgba(76, 36, 5, 0.98), rgba(18, 19, 27, 0.99)) !important;
  color: #ffffff;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.46);
}

.team-dialog-card h1,
.team-dialog-card p {
  color: #ffffff;
}

.team-dialog-card p {
  white-space: pre-line;
}

.team-dialog-card.team-accent-cyan {
  border-color: rgba(76, 201, 240, 0.9);
  box-shadow: 0 0 28px rgba(76, 201, 240, 0.3), 0 24px 70px rgba(0, 0, 0, 0.46);
}

.team-dialog-card.team-accent-blue {
  border-color: rgba(59, 130, 246, 0.9);
  box-shadow: 0 0 28px rgba(59, 130, 246, 0.3), 0 24px 70px rgba(0, 0, 0, 0.46);
}

h4,
p {
  position: relative;
  z-index: 10;
}

</style>
