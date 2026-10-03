<!--
  Componente: techSection.vue
  Qué hace: muestra tecnologías AWS y open source con sus logos.
  Dónde se usa: pages/index.vue.
  Datos: lista local de enlaces y logos públicos versionados.
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
                v-for="item in technologies"
                :key="item.name"
              >
                <a :href="item.link" target="_blank" :aria-label="`Conocer ${item.name}`">
                  <v-avatar
                    size="60"
                    class="pa-3"
                    color="#15151d"
                    style="border: 1px solid var(--aws-orange)"
                  >
                    <v-img :alt="`Logo de ${item.name}`" :src="item.logo" :lazy-src="item.logo"></v-img>
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
const technologies = [
  {
    name: "AWS Cloud",
    link: "https://aws.amazon.com/",
    logo: programIcon,
  },
  {
    name: "AWS Lambda",
    link: "https://aws.amazon.com/lambda/",
    logo: "/img/technologies/awslambda.svg",
  },
  {
    name: "Amazon S3",
    link: "https://aws.amazon.com/s3/",
    logo: "/img/technologies/amazons3.svg",
  },
  {
    name: "Kubernetes",
    link: "https://kubernetes.io/",
    logo: "/img/technologies/kubernetes.svg",
  },
  {
    name: "Docker",
    link: "https://www.docker.com/",
    logo: "/img/technologies/docker.svg",
  },
  {
    name: "Terraform",
    link: "https://www.terraform.io/",
    logo: "/img/technologies/terraform.svg",
  },
  {
    name: "Python",
    link: "https://www.python.org/",
    logo: "/img/technologies/python.svg",
  },
  {
    name: "Node.js",
    link: "https://nodejs.org/",
    logo: "/img/technologies/nodedotjs.svg",
  },
];
</script>
