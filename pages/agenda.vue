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
            tracks escalables. Blue y Yellow se habilitan según la demanda.
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
                slider-color="primary"
                centered
                class="px-3"
              >
                <v-tab v-for="(item, index) in scheduleData" :key="index">{{
                  item.date
                }}</v-tab>
              </v-tabs>
            </v-toolbar>

            <v-tabs-window
              v-model="model"
              class="mt-5 py-0"
              style="background-color: white; border-radius: 15px"
            >
              <v-tabs-window-item
                v-for="(item, index) in scheduleData"
                :key="index"
                class="pa-0 ma-0"
              >
                <CommonScheduleDetails :data="item" />
              </v-tabs-window-item>
            </v-tabs-window>
          </v-col>
        </v-row>
      </ClientOnly>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const model = ref("");
const { mainData, scheduleData } = useJSONData();
definePageMeta({
  layout: false,
});

useEventSeo("Agenda");
</script>
<style scoped>
</style>
