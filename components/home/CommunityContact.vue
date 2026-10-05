<!--
  Componente: CommunityContact.vue
  Qué hace: CTA de contacto y enlaces de la comunidad AWS SBG UNC.
  Dónde se usa: pages/index.vue.
  Datos: communityName y communityLinks.
-->
<template>
  <v-container fluid>
    <v-row>
      <v-col md="12" data-gsap-reveal>
        <v-container fluid class="community-contact-card">
          <v-row justify-center align="center" class="pa-5">
            <v-col md="5" sm="6" cols="12" data-gsap-reveal>
              <p class="eyebrow">Comunidad AWS en Córdoba</p>
              <h1>Sumate a la comunidad</h1>
              <p class="mb-3">
                Conocé nuevas oportunidades, actividades y personas con quienes
                aprender sobre tecnología en la nube.
              </p>

              <CommonSpeakerSocialButton
                :socialLinks="mainData.communityLinks"
              />
            </v-col>
            <v-col md="4" sm="1"></v-col>
            <v-col md="3" sm="5" cols="12" data-gsap-reveal>
              <v-img
                alt="Logo de AWS Student Builder Group UNC"
                :src="programIcon"
                data-gsap-image
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import programIcon from "@/assets/img/Program Icon/SVG/AWS Student Builder Group_RGB_Program Icon_Amber.svg";

const { mainData } = useJSONData();
</script>

<style scoped>
.community-contact-card {
  border: 1px solid rgba(255, 153, 0, 0.72);
  border-radius: 20px;
  background:
    linear-gradient(120deg, rgba(112, 51, 0, 0.98), rgba(56, 27, 5, 0.98)),
    #4a2405;
  box-shadow: 0 18px 42px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255, 196, 0, 0.16);
  color: #ffffff;
}

.community-contact-card h1 {
  max-width: 520px;
  line-height: 1.08;
}

.community-contact-card p:not(.eyebrow) {
  max-width: 520px;
  color: rgba(255, 255, 255, 0.84);
}

.eyebrow {
  margin-bottom: 0.55rem;
  color: #ffc400;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
</style>