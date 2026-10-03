<!--
  Componente: speakers.vue
  Qué hace: grilla de speakers y sus perfiles.
  Datos: data/speakers.json; perfiles actuales son ejemplos a confirmar.
-->
<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="12" data-gsap-reveal>
          <h1>Speakers</h1>
          <p>
            Conocé a las personas invitadas que comparten experiencias,
            conocimientos y herramientas para construir soluciones en la nube.
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          data-gsap-reveal
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
