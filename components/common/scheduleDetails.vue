<!--
  Componente: scheduleDetails.vue
  Qué hace: muestra los bloques horarios de un día y resuelve cada sesión.
  Dónde se usa: pages/agenda.vue.
  Datos: ScheduleDay desde schedule.json y Session desde sessions.json.
-->
<template>
  <v-container
    fluid
    class="pa-0 ma-0 schedule-track"
    v-if="props.data"
    :style="{ '--track-color': props.trackColor }"
    :class="`schedule-track-${props.trackId}`"
  >
    <v-row
      justify-center
      align="center"
      v-for="(item, index) in props.data['schedule']"
      :key="index"
      class="pa-0 my-0 row-border-white"
    >
      <v-col md="2" cols="3" class="text-right my-0 py-0">
        <p style="font-size: 110%" class="mb-0 google-font">
          {{ item.startTime }} ART
        </p>
        <p style="font-size: 70%" class="ma-0 google-font">
          {{ item.endTime }} ART
        </p>
        <p class="mt-1 google-font" style="font-size: 60%">
          <b style="color: grey">Argentina (UTC−3)</b>
        </p>
      </v-col>
      <v-col
        class="my-0 schedule-details-white col-border-white futuristic-surface"
        cols="9"
        md="10"
      >
        <CommonScheduleDialog :data="getSessionData(item.session)" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { ScheduleDay } from '~/types'
import { useJSONData } from '~/composables/useJSONData'

const { sessionsData } = useJSONData();

const props = defineProps<{
  data: ScheduleDay;
  trackColor?: string;
  trackId?: string;
}>();

const getSessionData = (id: string | number) => {
  return sessionsData.find((session) => session.id === String(id));
};
</script>


<style scoped>
.schedule-details-white:hover {
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--track-color) 26%, #1b2638),
      #283c55
    ) !important;
}
.row-border-white {
  border-bottom: 1px solid rgba(255, 255, 255, 0.18);
}
.col-border-white {
  border-left: 2px solid color-mix(in srgb, var(--track-color) 65%, rgba(255, 255, 255, 0.18));
}

.schedule-track {
  border: 1px solid color-mix(in srgb, var(--track-color) 35%, transparent);
  border-radius: 18px;
  overflow: hidden;
  background: color-mix(in srgb, var(--track-color) 7%, transparent);
}

.schedule-track :deep(.schedule-details-white) {
  background:
    linear-gradient(
      135deg,
      color-mix(in srgb, var(--track-color) 13%, #151b29),
      #101622
    ) !important;
}

.schedule-track :deep(.v-chip) {
  border-color: color-mix(in srgb, var(--track-color) 45%, rgba(255, 255, 255, 0.18));
}
</style>