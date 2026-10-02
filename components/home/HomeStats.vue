<!--
  Componente: HomeStats.vue
  Qué hace: grilla de métricas oficiales del evento.
  Dónde se usa: pages/index.vue.
  Datos: eventInfo.stats desde data/config.json.
-->
<template>
  <v-container fluid class="mx-3">
    <v-row
      justify-center
      align="center"
      class="stats-panel"
      data-gsap-reveal
    >
      <v-col cols="12" md="12" sm="12">
        <v-container fluid>
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
              <h1 class="responsive-title" data-gsap-stat :data-value="item.value">{{ item.value }}</h1>
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
  background: #15151d;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
}

.stats-container p {
  color: #aaaab4;
  text-align: center;
}

.responsive-title {
  font-size: 300%;
  color: #ff9900;
  font-family: monospace;
}
.stats-container {
  background-size: 70%;
}

@media (max-width: 1140px) {
  .responsive-title {
    font-size: 250%;
  }
}

@media (max-width: 860px) {
  .responsive-title {
    font-size: 180%;
  }
}
@media (max-width: 600px) {
  .responsive-title {
    font-size: 250%;
  }
}
@media (max-width: 460px) {
  .responsive-title {
    font-size: 180%;
  }
}
</style>
