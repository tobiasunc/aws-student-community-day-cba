<!--
  Componente: SponsorsSection.vue
  Qué hace: contenedor visual de sponsors.
  Dónde se usa: pages/index.vue.
  Datos: delega en CommonSponsorInfo.
-->
<template>
  <v-container fluid >
    <v-row>
      <v-col md="12" data-gsap-reveal>
        <h1>Empresas y comunidades aliadas</h1>
        <p>Organizaciones que acompañan el aprendizaje, la innovación y el crecimiento de nuestra comunidad.</p>

        <v-container fluid class="pa-0 mt-4">
          <CommonSponsorInfo />
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
</script>

<style>
</style>