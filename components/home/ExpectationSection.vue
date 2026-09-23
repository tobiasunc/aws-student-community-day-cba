<!--
  Componente: ExpectationSection.vue
  Qué hace: cuatro tarjetas de dinámicas destacadas.
  Dónde se usa: pages/index.vue.
  Datos: eventInfo.whatToExpect desde data/config.json.
-->
<template>
  <v-container fluid>
    <v-row>
      <v-col md="12" sm="12">
        <h1>What to Expect</h1>
        <p>
          Una jornada creada por estudiantes para conectar talento, comunidades,
          empresas y academia alrededor de la nube y la tecnología.
        </p>
      </v-col>
      <v-col
        md="4"
        sm="4"
        cols="12"
        v-for="(item, index) in mainData.eventInfo.whatToExpect"
        :key="index"
      >
        <div
          style="
            background-color: #eeeeee;
            border-radius: 20px;
            border: 1.5px solid black;
          "
        >
          <v-img
            :src="getImage(index + 1)"
            width="140"
            :alt="`Ilustración: ${item.title}`"
            class="float-right mr-5"
          ></v-img>
          <div class="pa-8">
            <h2>{{ item.title }}</h2>
            <p style="font-size: 95%">
              {{ item.description }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import img1 from "@/assets/img/section-elements/se-1.svg";
import img2 from "@/assets/img/section-elements/se-2.svg";
import img3 from "@/assets/img/section-elements/se-3.svg";

const { mainData } = useJSONData();
const sectionImages = [img1, img2, img3, img1];
const getImage = (index) => {
  return sectionImages[index - 1] || img1;
};
</script>

<style>
</style>
