<!--
  Componente: techSection.vue
  Qué hace: muestra tecnologías AWS relacionadas y aplica fallback a logos.
  Dónde se usa: pages/index.vue.
  Datos: lista local de enlaces; logos externos o aws-sbg-logo.svg.
-->
<template>
  <v-container fluid>
    <v-row>
      <v-col md="9" sm="7" cols="12">
        <div
          class="pa-8 futuristic-surface"
          data-gsap-box
          data-gsap-reveal
        >
          <h1>Explorá tecnologías para construir en la nube</h1>
          <p>
            Explorá herramientas AWS y tecnologías abiertas que ayudan a crear,
            desplegar y operar soluciones reales.
          </p>
          <v-container fluid>
            <v-row justify-start align="start">
              <v-col
                md="1"
                sm="2"
                cols="3"
                v-for="(item, index) in tech"
                :key="index"
              >
                <a :href="item.link" target="_blank" :aria-label="`Conocer ${item.name}`">
                  <v-avatar
                    size="60"
                    class="pa-3"
                    color="#15151d"
                    style="border: 1px solid var(--aws-orange)"
                  >
                    <v-img :alt="`Logo de ${item.name}`" :src="item.logo" :lazy-src="item.logo" @error="useFallback"></v-img>
                  </v-avatar>
                </a>
              </v-col>
            </v-row>
          </v-container>
        </div>
      </v-col>

      <v-col md="3" sm="5" cols="12">
        <div
          class="pa-8 text-center futuristic-surface"
          data-gsap-box
          data-gsap-reveal
        >
          <v-img alt="AWS Student Builder Group UNC" style="width: 100%;margin: auto;" :src="programIcon"></v-img>
          <v-chip class="mt-n12" variant="outlined" color="#FF9900">{{ mainData.communityLocation.city }}</v-chip>
          <v-img alt="AWS Student Builder Group UNC" style="width: 90%;margin: auto;" :src="programIcon"></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import programIcon from "@/assets/img/Program Icon/SVG/AWS Student Builder Group_RGB_Program Icon_Amber.svg";

const { mainData } = useJSONData();
const fallbackLogo = "/img/common/avatar.png";
const useFallback = (event) => {
  if (event?.target?.src !== fallbackLogo) {
    event.target.src = fallbackLogo;
  }
};
var tech = ref([
  {
    name: "AWS Cloud",
    link: "https://aws.amazon.com/",
    logo: programIcon,
  },
  {
    name: "AWS Academy",
    link: "https://aws.amazon.com/training/awsacademy/",
    logo: programIcon,
  },
  {
    name: "AWS Lambda",
    link: "https://aws.amazon.com/lambda/",
    logo: programIcon,
  },
  {
    name: "Amazon EC2",
    link: "https://aws.amazon.com/ec2/",
    logo: programIcon,
  },
  {
    name: "Amazon S3",
    link: "https://aws.amazon.com/s3/",
    logo: programIcon,
  },
]);
</script>

<style>
</style>
