<!--
  Componente: scheduleDetails.vue
  Qué hace: muestra los bloques horarios de un día y resuelve cada sesión.
  Dónde se usa: pages/agenda.vue.
  Datos: ScheduleDay desde schedule.json y Session desde sessions.json.
-->
<template>
  <v-container fluid class="pa-0 ma-0" v-if="props.data" style="">
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
        class="my-0 schedule-details-white col-border-white"
        cols="9"
        md="10"
      >
        <ClientOnly>
          <CommonScheduleDialog :data="getSessionData(item.session)" />
        </ClientOnly>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import type { ScheduleDay } from '~/types'

const { sessionsData } = useJSONData();

const props = defineProps<{ data: ScheduleDay }>();

const getSessionData = (id) => {
  return sessionsData.find((session) => session.id === String(id));
};
</script>


<style scoped>
.schedule-details-white:hover {
  background: #fafafa;
}
.row-border-white {
  border-bottom: 1px solid #e0e0e0;
}
.col-border-white {
  border-left: 1px solid #e0e0e0;
}
</style>