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

        <!-- Whats New -->
        <HomeExpectationSection class="mt-md-10" />
        <!-- Whats New -->

        <HomeEventProgram class="mb-md-10" />

        <!-- Technologies -->
        <HomeTechSection class="mb-md-10" />
        <!-- Technologies -->

        <!-- Recap de actividades anteriores de la comunidad -->
        <HomePastEvent class="mb-md-10" />
        <!-- Fin del recap -->

        <!-- Sponsors -->
        <HomeSponsorsSection />
        <!-- Sponsors -->

        <!-- Keep in Touch -->
        <HomeCommunityContact />
        <!-- Keep in Touch -->
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
