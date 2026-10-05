<!--
  Componente: team.vue
  Qué hace: grilla del equipo organizador.
  Datos: data/team.json; perfiles actuales son ejemplos a confirmar.
-->
<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="12" data-gsap-reveal>
          <h1>Equipo</h1>
          <p>
            Nuestro objetivo es brindar herramientas prácticas a la comunidad
            para compartir conocimientos y crear soluciones innovadoras en
            equipo.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2" sm="3" cols="6" v-for="(item, index) in teamData" :key="index" data-gsap-reveal>
          <common-team-card :data="item" />
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const { teamData, mainData } = useJSONData();
definePageMeta({
  layout: false,
});

useEventSeo("Equipo");
</script>

<style scoped>
</style>
