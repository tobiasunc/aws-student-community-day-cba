<!--
  Componente: AppFooter.vue
  Qué hace: pie institucional, enlaces de comunidad y contacto oficial.
  Dónde se usa: layouts/default.vue.
  Datos: communityName y communityLinks desde data/config.json.
-->
<template>
  <v-container fluid class="px-5 mt-8" style="background-color: #232F3E">
    <v-row
      justify-center
      align="center"
      style="max-width: 1400px; margin-left: auto; margin-right: auto"
    >
      <v-col md="2" cols="12">
        <h2 style="color: white">{{ mainData.communityName }}</h2>
        <a
          href="mailto:tobias.cruz@mi.unc.edu.ar"
          style="text-decoration: none; color: white"
          ><p style="font-size: 70%"><i>tobias.cruz@mi.unc.edu.ar</i></p></a
        >
      </v-col>
      <v-col md="10" cols="12">
        <v-container fluid class="pa-0">
          <v-row justify-center align="center">
            <v-col md="9" cols="12">
              <a
                href="https://aws.amazon.com/developer/community/usergroups/cordoba/"
                target="_blank"
                rel="noreferrer"
                aria-label="link"
                class="grey--text text--darken-3 mr-6 google-font"
                style="text-decoration: none; color: white"
                >AWS User Group Córdoba</a
              >
              <br class="hidden-md-and-up" />
              <a
                href="https://aws.amazon.com/education/awseducate/"
                target="_blank"
                rel="noreferrer"
                aria-label="link"
                class="grey--text text--darken-3 mr-6 google-font"
                style="text-decoration: none; color: white"
                >AWS Educate</a
              >

              <br class="hidden-md-and-up" />
              <router-link
                to="/faq"
                rel="noreferrer"
                aria-label="link"
                class="mr-6 google-font grey--text text--darken-3"
                style="text-decoration: none; color: white"
                >FAQ</router-link
              >
              <br class="hidden-md-and-up" />
              <router-link
                to="/coc"
                style="text-decoration: none; color: white"
                rel="noreferrer"
                aria-label="link"
                class="mr-6 google-font grey--text text--darken-3"
                >Code of conduct</router-link
              >
              <br class="hidden-md-and-up" />
              <a
                href="https://aws.amazon.com/codeofconduct/"
                target="_blank"
                rel="noreferrer"
                aria-label="link"
                class="mr-6 google-font grey--text text--darken-3"
                style="text-decoration: none; color: white"
                >AWS Community Code of Conduct</a
              >
            </v-col>

            <v-col md="3" cols="12">
              <CommonSpeakerSocialButton
                :socialLinks="mainData.communityLinks"
                :dark="true"
                class="footer-icons"
              />
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

<style></style>
