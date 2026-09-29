<!--
  Componente: agenda.vue
  Qué hace: agenda por día con tabs y diálogos de sesiones.
  Datos: schedule.json y sessions.json.
-->
<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="12">
          <h1>Agenda</h1>
          <p>
            Explorá workshops, charlas técnicas y flash talks organizadas en
            cinco tracks escalables. Seleccioná un track para ver sus sesiones.
          </p>
        </v-col>
      </v-row>
      <ClientOnly>
        <v-row class="mb-7">
          <v-col>
            <v-toolbar flat class="px-0" style="border-radius: 15px">
              <v-tabs
                v-model="model"
                color="primary"
                centered
                class="px-3"
              >
                <v-tab
                  v-for="track in tracks"
                  :key="track.id"
                  :value="track.id"
                  :color="track.color"
                >
                  {{ track.name }}
                </v-tab>
              </v-tabs>
            </v-toolbar>

            <v-tabs-window
              v-model="model"
              class="mt-5 py-0"
              style="background-color: white; border-radius: 15px"
            >
              <v-tabs-window-item
                v-for="trackSchedule in trackSchedules"
                :key="trackSchedule.track.id"
                :value="trackSchedule.track.id"
                class="pa-0 ma-0"
              >
                <CommonScheduleDetails
                  v-for="day in trackSchedule.days"
                  :key="day.date"
                  :data="day"
                />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-col>
        </v-row>
      </ClientOnly>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const { mainData, scheduleData, sessionsData } = useJSONData();
const route = useRoute();

const tracks = computed(() => mainData.eventInfo.tracks);
const defaultTrack = () => {
  const requestedTrack = String(route.query.track || "");
  return tracks.value.some((track) => track.id === requestedTrack)
    ? requestedTrack
    : tracks.value[0]?.id || "";
};
const model = ref(defaultTrack());

const trackSchedules = computed(() =>
  tracks.value.map((track) => ({
    track,
    days: scheduleData.map((day) => ({
      ...day,
      schedule: day.schedule.filter((item) => {
        const session = sessionsData.find(
          (candidate) => candidate.id === String(item.session),
        );
        return session?.track === `${track.name} Track`;
      }),
    })),
  })),
);

watch(
  () => route.query.track,
  () => {
    model.value = defaultTrack();
  },
);

definePageMeta({
  layout: false,
});

useEventSeo("Agenda");
</script>
<style scoped>
</style>
