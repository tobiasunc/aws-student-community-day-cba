<!--
  Componente: CommunityContact.vue
  Qué hace: CTA de contacto y enlaces de la comunidad AWS SBG UNC.
  Dónde se usa: pages/index.vue.
  Datos: communityName y communityLinks.
-->
<template>
  <v-container fluid>
    <v-row>
      <v-col md="12">
        <v-container
          fluid
          style="
            background-color: #c3ecf6;
            border-radius: 20px;
            border: 1.5px solid black;
          "
        >
          <v-row justify-center align="center" class="pa-5">
            <v-col md="5" sm="6" cols="12">
              <h1 style="line-height: normal;">
                Mantenete en contacto con {{ mainData.communityName }}
              </h1>
              <p class="mb-3">
                Seguinos para recibir novedades, actividades y oportunidades de
                la comunidad.
              </p>

              <CommonSpeakerSocialButton
                :socialLinks="mainData.communityLinks"
              />
            </v-col>
            <v-col md="4" sm="1"></v-col>
            <v-col md="3" sm="5" cols="12">
              <v-img alt="Logo de AWS Student Builder Group UNC" src="/img/common/aws-sbg-logo.svg"></v-img>
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

<style>
</style>