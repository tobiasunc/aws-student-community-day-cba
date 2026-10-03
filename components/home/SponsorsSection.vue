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
        <h1>Nuestros sponsors</h1>
        <p>Aliados que ayudan a construir una experiencia memorable.</p>

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