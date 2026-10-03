<!--
  Componente: PastEvent.vue
  Qué hace: muestra tecnologías AWS y open source relacionadas con el evento.
  Dónde se usa: pages/index.vue.
  Datos: lista local de tecnologías y sus logos públicos.
-->
<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-center" data-gsap-reveal>
        <h1>Tecnologías para construir en la nube</h1>
        <p>
          Una selección de herramientas AWS y open source para aprender,
          experimentar y crear soluciones reales.
        </p>
      </v-col>
      <v-col
        v-for="technology in technologies"
        :key="technology.name"
        cols="6"
        sm="4"
        md="3"
        data-gsap-box
      >
        <a
          class="technology-card futuristic-surface"
          :href="technology.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Conocer ${technology.name}`"
        >
          <img :src="technology.logo" :alt="`Logo de ${technology.name}`" />
          <strong>{{ technology.name }}</strong>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import programIcon from "@/assets/img/Program Icon/SVG/AWS Student Builder Group_RGB_Program Icon_Amber.svg";

const technologies = [
  { name: "AWS", link: "https://aws.amazon.com/", logo: programIcon },
  { name: "AWS Lambda", link: "https://aws.amazon.com/lambda/", logo: "/img/technologies/awslambda.svg" },
  { name: "Amazon S3", link: "https://aws.amazon.com/s3/", logo: "/img/technologies/amazons3.svg" },
  { name: "Kubernetes", link: "https://kubernetes.io/", logo: "/img/technologies/kubernetes.svg" },
  { name: "Docker", link: "https://www.docker.com/", logo: "/img/technologies/docker.svg" },
  { name: "Terraform", link: "https://www.terraform.io/", logo: "/img/technologies/terraform.svg" },
  { name: "Python", link: "https://www.python.org/", logo: "/img/technologies/python.svg" },
  { name: "Node.js", link: "https://nodejs.org/", logo: "/img/technologies/nodedotjs.svg" },
];
</script>

<style scoped>
.technology-card {
  display: flex;
  min-height: 150px;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  flex-direction: column;
  padding: 1.25rem;
  border: 1px solid rgba(255, 153, 0, 0.28);
  color: #fff;
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.technology-card:hover {
  border-color: #ff9900;
  transform: translateY(-4px);
}

.technology-card img {
  width: 58px;
  height: 58px;
  object-fit: contain;
}
</style>
