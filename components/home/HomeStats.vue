<!--
  Componente: HomeStats.vue
  Qué hace: resume las proyecciones y oportunidades principales del evento.
  Dónde se usa: pages/index.vue.
  Datos: eventInfo.stats desde data/config.json.
-->
<template>
  <v-container fluid class="mx-3">
    <v-row class="stats-panel" data-gsap-reveal>
      <v-col cols="12" md="12" sm="12">
        <v-container fluid class="pa-6 pa-md-8">
          <p class="section-eyebrow">Una mirada rápida</p>
          <h2 class="section-heading">El evento en números</h2>
          <p class="stats-intro">
            Proyecciones y oportunidades para entender la escala de la jornada
            antes de sumarte como asistente, speaker, voluntario o aliado.
          </p>
          <v-row>
            <v-col
              md="3"
              sm="3"
              cols="6"
              class="stats-container"
              data-gsap-image
              data-gsap-box
              :style="{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: 'center',
                height: '200px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }"
              v-for="(item, index) in mainData.eventInfo.stats"
              :key="index"
            >
              <h3 class="responsive-title" data-gsap-stat :data-value="item.value">{{ item.value }}</h3>
              <p>
                {{ item.name }}
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { mainData } = useJSONData();
</script>

<style scoped>
.stats-panel {
  background:
    linear-gradient(145deg, rgba(25, 31, 43, 0.98), rgba(13, 16, 25, 0.98));
  border: 1px solid rgba(255, 153, 0, 0.34);
  border-radius: 20px;
  box-shadow: 0 16px 34px rgba(0, 0, 0, 0.24);
}

.section-eyebrow {
  margin-bottom: 0.45rem;
  color: #ffc400;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.stats-intro {
  max-width: 760px;
  margin: 0 0 1.25rem;
  color: #e0e4eb;
}

.stats-container p {
  max-width: 170px;
  margin: 0;
  color: #d1d5dd;
  text-align: center;
}

.responsive-title {
  margin-bottom: 0.65rem;
  font-size: 2.7rem;
  color: #ff9900;
  font-family: monospace;
}
.stats-container {
  background-size: 70%;
}

@media (max-width: 1140px) {
  .responsive-title {
    font-size: 2.25rem;
  }
}

@media (max-width: 860px) {
  .responsive-title {
    font-size: 2rem;
  }
}
@media (max-width: 600px) {
  .responsive-title {
    font-size: 2rem;
  }
}
@media (max-width: 460px) {
  .responsive-title {
    font-size: 1.6rem;
  }
}
</style>
