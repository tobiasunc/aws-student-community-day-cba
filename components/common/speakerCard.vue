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
        <p style="font-size: 90%">{{ props.data.company.name }}</p>
      </button>
    </template>

    <v-card
      max-width="800"
      class="pa-4 speaker-dialog futuristic-surface"
      style="border-radius: 12px; border: 2px solid var(--aws-orange)"
    >
      <v-container fluid>
        <v-row>
          <v-col md="4" cols="12" class="d-flex justify-center">
            <div class="dialog-portrait">
              <v-img
                class="dialog-avatar"
                :alt="props.data.name"
                cover
                :src="
                  props.data.image.length
                    ? '/img/speakers/' + props.data.image
                    : '/img/common/avatar.png'
                "
              ></v-img>
            </div>
          </v-col>
          <v-col md="8" cols="12">
            <h1 class="mt-3 mb-0">{{ props.data.name }}</h1>
            <p style="font-weight: 500" class="mt-1">
              {{ props.data.community_title }} |
              {{ props.data.company.designation }},
              {{ props.data.company.name }}
            </p>

            <p class="mt-4">{{ props.data.bio }}</p>

            <div v-if="speakerSessions.length" class="mt-4">
              <p style="font-weight: 600" class="mb-2">
                {{ speakerSessions.length > 1 ? 'Sus charlas' : 'Su charla' }}
              </p>
              <NuxtLink
                v-for="session in speakerSessions"
                :key="session.id"
                :to="sessionLink(session)"
                class="session-link"
                :aria-label="`Ver en la agenda: ${session.title}`"
              >
                <v-icon size="small" class="session-link__icon">mdi-calendar-text</v-icon>
                <span class="session-link__title">{{ session.title }}</span>
                <v-icon size="small" class="session-link__arrow">mdi-arrow-right</v-icon>
              </NuxtLink>
            </div>

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
import type { Session, Speaker } from '~/types'
import { computed, ref } from 'vue'
import { useJSONData } from '~/composables/useJSONData'

const props = defineProps<{ data: Speaker }>()

// Reactive variables
const dialog = ref(false);

const { sessionsData, mainData } = useJSONData();

// Charlas en las que participa este speaker (excluye networking/cena).
const speakerSessions = computed(() =>
  sessionsData.filter(
    (session) =>
      session.format !== 'Networking' &&
      (session.speakers || []).map(String).includes(String(props.data.id)),
  ),
);

// Link a la agenda, filtrando por el track de la charla (/agenda?track=<id>).
const sessionLink = (session: Session) => {
  const track = mainData.eventInfo.tracks.find(
    (t) => `${t.name} Track` === session.track,
  );
  return track ? { path: '/agenda', query: { track: track.id } } : { path: '/agenda' };
};
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

/* Diálogo de detalle del speaker */
.dialog-portrait {
  width: 100%;
  max-width: 220px;
  aspect-ratio: 1;
  filter: drop-shadow(0 0 14px rgba(255, 153, 0, 0.28));
}

.dialog-avatar {
  width: 100%;
  height: 100%;
  clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);
  background: #15151d;
}

.speaker-dialog :deep(h1),
.speaker-dialog :deep(p) {
  position: relative;
  z-index: 1;
  color: #ffffff;
}

.session-link {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  padding: 12px 14px;
  border: 1px solid rgba(255, 196, 0, 0.45);
  border-radius: 12px;
  background: rgba(255, 196, 0, 0.06);
  color: #ffd84d !important;
  text-decoration: none;
  line-height: 1.3;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.session-link:hover,
.session-link:focus-visible {
  background: rgba(255, 196, 0, 0.14);
  border-color: #ffc400;
  transform: translateY(-1px);
}

.session-link__icon {
  flex: 0 0 auto;
  opacity: 0.9;
}

.session-link__title {
  flex: 1 1 auto;
  font-weight: 600;
  font-size: 0.92rem;
}

.session-link__arrow {
  flex: 0 0 auto;
  opacity: 0.8;
}
</style>
