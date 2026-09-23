<!--
  Componente: team.vue
  Qué hace: grilla del equipo organizador.
  Datos: data/team.json; perfiles actuales son ejemplos a confirmar.
-->
<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="12">
          <h1>Team</h1>
          <p>
            Our mission is to equip our community members with practical skills,
            enabling them to communicate their insights and drive innovative
            solutions effectively. Whatever your challenge, these leaders on the
            front line of transformation, innovation, and exploration helped
            solve it with you.
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="2" sm="3" cols="6" v-for="(item, index) in teamData" :key="index">
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

useEventSeo("Team");
</script>

<style scoped>
</style>
