<!--
  Componente: index.vue
  Qué hace: página principal que compone el hero y todas las secciones del evento.
  Datos: eventInfo desde data/config.json.
-->
<template>
  <NuxtLayout name="default">
    <v-container fluid>
      <v-row>
        <!-- Hero -->
        <HomeHeroSection class="my-0 my-md-10" />
        <!-- Hero -->

        <!-- Stats -->
        <HomeStats class="my-0 my-md-5" />
        <!-- Stats -->

        <!-- Qué vas a encontrar -->
        <HomeExpectationSection class="mt-md-10" />
        <!-- Fin de qué vas a encontrar -->

        <HomeEventProgram class="mb-md-10" />

        <!-- Tecnologías -->
        <HomeTechSection class="mb-md-10" />
        <!-- Fin de tecnologías -->

        <!-- Tecnologías y comunidad -->
        <HomePastEvent class="mb-md-10" />
        <!-- Fin de tecnologías y comunidad -->

        <!-- Sponsors -->
        <HomeSponsorsSection />
        <!-- Sponsors -->

        <!-- Contacto -->
        <HomeCommunityContact />
        <!-- Fin de contacto -->
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const { mainData } = useJSONData();
definePageMeta({
  layout: false,
});

useEventSeo();
</script>

<style scoped></style>
