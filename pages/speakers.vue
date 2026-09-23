<!--
  Componente: speakers.vue
  Qué hace: grilla de speakers y sus perfiles.
  Datos: data/speakers.json; perfiles actuales son ejemplos a confirmar.
-->
<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="12">
          <h1>Speakers</h1>
          <p>
            Our speakers are influential leaders and allies actively involved in
            various communities within their organizations, cities, countries,
            and beyond, making a significant impact through their contributions
            and support.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          md="2"
          cols="6"
          sm="3"
          v-for="(item, index) in speakersData"
          :key="index"
        >
          <common-speaker-card :data="item" />
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const { mainData, speakersData } = useJSONData();

definePageMeta({
  layout: false,
});

useEventSeo("Speakers");
</script>

<style scoped></style>
