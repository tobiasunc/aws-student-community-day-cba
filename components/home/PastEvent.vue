<!--
  Componente: PastEvent.vue
  Qué hace: recap visual de actividades previas de la comunidad.
  Dónde se usa: pages/index.vue.
  Datos: eventInfo.pastEvent; fotos desde public/img/event.
-->
<template>
  <v-container fluid>
    <v-row class="mb-0">
      <v-col md="12" sm="12" cols="12" class="text-center">
        <h1>La comunidad que estamos construyendo</h1>
        <p>
          {{ mainData.eventInfo.pastEvent.summary }}
        </p>
        <v-img
          style="max-height: 300px; border: 1.5px solid black"
          rounded="xl"
          alt="Foto destacada de actividades de la comunidad"
          cover
          class="mt-6"
          :src="`/img/event/${mainData.eventInfo.pastEvent.images[0]}`"
        ></v-img>
      </v-col>
      <v-col md="12" sm="12" cols="12">
        <v-container fluid class="px-0">
          <v-row>
            <v-col
              md="3"
              v-for="(item, index) in mainData.eventInfo.pastEvent.stats"
              :key="index"
              cols="6"
            >
              <div
                class="text-center py-3"
                :style="{
                  backgroundColor: `${colors[index]}`,
                  borderTopLeftRadius: index == 0 ? '23px' : '',
                  borderBottomLeftRadius: index == 0 ? '23px' : '',
                  borderTopRightRadius:
                    index == mainData.eventInfo.pastEvent.stats.length - 1
                      ? '23px'
                      : '',
                  borderBottomRightRadius:
                    index == mainData.eventInfo.pastEvent.stats.length - 1
                      ? '23px'
                      : '',
                }"
              >
                <h1>{{ item.value }}</h1>
                <p>{{ item.name }}</p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col md="6" sm="6">
        <v-img
          height="250"
          rounded="xl"
          cover
          alt="Participantes y comunidad en una actividad previa"
          :src="`/img/event/${mainData.eventInfo.pastEvent.images[1]}`"
          style="border: 1.5px solid black"
        ></v-img>
      </v-col>
      <v-col md="6" sm="6">
        <v-img
          height="250"
          rounded="xl"
          cover
          alt="Espacio de encuentro de una actividad previa"
          :src="`/img/event/${mainData.eventInfo.pastEvent.images[2]}`"
          style="border: 1.5px solid black"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
const colors = ref(["#C3ECF6", "#F8D8D8", "#FFE7A5", "#CCF6C5"]);
</script>
