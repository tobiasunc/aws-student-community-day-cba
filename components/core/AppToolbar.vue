<!--
  Componente: AppToolbar.vue
  Qué hace: barra de navegación fija, marca AWS, enlaces principales y CTA de inscripción.
  Dónde se usa: layouts/default.vue.
  Datos: navbarData y eventInfo desde data/config.json y data/navbar.json.
-->
<template>
  <v-app-bar
    :elevation="0"
    fixed
    class="mt-0 px-2 toolbar-class mx-auto mt-4"
    rounded="xl"
    color="#0d0d12"
  >
  <v-app-bar-nav-icon
      class="d-md-none d-lg-none d-sm-flex d-flex"
      @click="drawerAction"
    ></v-app-bar-nav-icon>
    <div class="d-flex align-center px-2">
      <NuxtLink to="/" style="text-decoration: none; color: white">
        <v-img
          width="44"
          alt="Logo de AWS Student Builder Group UNC"
          :src="programIcon"
          class="mr-2"
        ></v-img>
      </NuxtLink>
      <a
        href="https://www.meetup.com/aws-sbg-at-national-university-of-cordoba/"
        class="community-link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="AWS Student Builder Group Universidad Nacional de Córdoba en Meetup"
      >
        <v-chip
          class="city-chip align-center"
          variant="outlined"
          color="#FF9900"
          size="small"
          >AWS Student Builder Group<br />Universidad Nacional de Córdoba</v-chip
        >
      </a>
    </div>

    <v-spacer></v-spacer>
    <div class="mx-4 d-none d-sm-none d-md-flex d-lg-flex">
      <template v-for="(item, index) in navbarData" :key="index">
        <v-btn
          rounded
          size="small"
          class="toolbar-link mx-1"
          color="white"
          :to="item.path"
          v-if="item.visible"
          >{{ item.name }}</v-btn
        >
      </template>
    </div>

    <ClientOnly>
      <v-btn
        rounded
        v-if="
          registrationIsOpen
        "
        :href="mainData.eventInfo.registration.link"
        class="register-button d-md-flex d-lg-flex d-sm-flex d-none mr-3"
        target="_blank"
        color="#FF9900"
        variant="flat"
        >Inscribite</v-btn
      >
    </ClientOnly>
    
  </v-app-bar>
</template>

<script setup>
import { useDisplay } from "vuetify";
import programIcon from "@/assets/img/Program Icon/SVG/AWS Student Builder Group_RGB_Program Icon_Amber.svg";

const { mainData, navbarData } = useJSONData();
const sidebar = useSideBar();
const registrationIsOpen = useRegistrationStatus();
useDisplay();

const drawerAction = () => {
  sidebar.value = !sidebar.value;
};
</script>

<style scoped>
.toolbar-class {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  margin-bottom: 80px;
  height: 72px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
}

.toolbar-link {
  color: #d9d9df !important;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.toolbar-link:hover {
  color: #ff9900 !important;
}

.city-chip {
  color: #ff9900 !important;
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.14), rgba(255, 153, 0, 0.03)) !important;
  max-width: min(58vw, 330px);
  min-height: 42px;
  padding: 5px 12px !important;
  border: 1px solid rgba(255, 153, 0, 0.7) !important;
  border-radius: 12px !important;
  height: auto !important;
  white-space: normal;
  text-align: left;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

.city-chip :deep(.v-chip__content) {
  display: block;
  color: #ffb84d;
  font-size: 0.68rem;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: 0.025em;
  white-space: normal;
}

.community-link {
  display: inline-flex;
  max-width: min(58vw, 360px);
  color: inherit;
  text-decoration: none;
}

.community-link:hover .city-chip {
  background: linear-gradient(135deg, rgba(255, 153, 0, 0.24), rgba(255, 153, 0, 0.06)) !important;
  box-shadow: 0 0 18px rgba(255, 153, 0, 0.26);
}

.register-button {
  border: 1px solid #ff9900;
  color: #0d0d12 !important;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.04em;
}
/* Mobile breakpoint */
@media (max-width: 700px) {
  .toolbar-class {
    max-width: 100% !important;
    margin-left: auto !important;
    margin-right: auto !important;
    margin-top: 0 !important;
    border-radius: 0 !important;
  }

  .city-chip,
  .community-link {
    max-width: 48vw;
  }
}

/* Tablet and larger screens */
@media (min-width: 700px) {
  .toolbar-class {
    max-width: 1000px !important;
    margin-left: auto !important;
    margin-right: auto !important;
  }
}
</style>
