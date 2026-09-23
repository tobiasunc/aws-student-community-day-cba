<!--
  Componente: HeroSection.vue
  Qué hace: hero de la home con identidad del evento, fecha, sede e inscripción.
  Dónde se usa: pages/index.vue.
  Datos: eventInfo desde data/config.json.
-->
<template>
  <v-container fluid class="">
    <v-row justify-center align="center">
      <v-col md="6" sm="6" cols="12">
        <h1 class="responsive-h1 my-4">
          AWS Student Community Day <br />
          UNC 2026
        </h1>
        <p class="" :style="{ maxWidth: '90%' }">
          {{ mainData.eventInfo.description.short }}
        </p>
        <p class="text-subtitle-1 font-weight-medium" style="color: #EC7211">
          {{ mainData.eventInfo.tagline }}
        </p>

        <p class="my-5">
          <span class="mr-4">
            <v-icon class="mr-1">mdi-calendar-month</v-icon>
            {{ mainData.eventInfo.date }}
          </span>

          <span class="mr-4">
            <v-icon class="mr-1">mdi-map-legend</v-icon>
            <a :href="mainData.eventInfo.venue.mapLink" target="_blank" style="color:black">
              {{ mainData.eventInfo.venue.address }}
            </a>
            
          </span>
        </p>

        <v-btn
          rounded
          size="large"
          color="#FFD427"
          v-if="
            registrationIsOpen
          "
          :href="mainData.eventInfo.registration.link"
          class="my-4 mt-3"
          target="_blank"
          style="border: 1.5px solid #1e1e1e; color: black"
          variant="flat"
          >Register Now</v-btn
        >
      </v-col>
      <v-col md="6" sm="6" cols="12">
        <v-img
          alt="Ilustración AWS Student Community Day UNC"
          src="assets/img/hero-image.svg"
          lazy-src="assets/img/hero-image.svg"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useDisplay } from "vuetify";
const { width, mobile } = useDisplay();
const screenWidth = ref(width);
const { mainData } = useJSONData();
const registrationIsOpen = useRegistrationStatus();
</script>

<style scoped>
.responsive-h1 {
  font-size: 250%;
  line-height: 100%;
}

/* Media query for screens larger than 600px */
@media (min-width: 600px) {
  .responsive-h1 {
    font-size: 300%;
  }
}
</style>
