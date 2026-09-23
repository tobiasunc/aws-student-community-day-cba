<!--
  Componente: coc.vue
  Qué hace: publica el código de conducta del evento.
  Datos: data/coc.json.
-->
<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="12">
          <h1>Code of Conduct</h1>
          <p>
            Todas las personas participantes, organizaciones aliadas, speakers y
            equipo del AWS Student Community Day UNC deben respetar estas pautas:
          </p>

          <v-container fluid class="ma-0 pa-0 mt-8">
            <v-row align="start" justify-start>
              <v-col
                md="4"
                cols="12"
                v-for="(item, index) in cocData"
                :key="index"
              >
                <p class="google-font" style="font-size: 1.2em">
                  <b>{{ item.name }}</b>
                </p>
                <p class="google-font mt-3" style="font-size: 100%">
                  {{ item.des }}
                </p>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const { cocData, mainData } = useJSONData();

definePageMeta({
  layout: false,
});

useEventSeo("Code of Conduct");
</script>
