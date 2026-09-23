<!--
  Componente: AppDrawer.vue
  Qué hace: navegación móvil desplegable y sincronizada con el estado global del sidebar.
  Dónde se usa: layouts/default.vue.
  Datos: navbarData y eventInfo desde los composables de datos.
-->
<template>
  <v-navigation-drawer v-model="sidebar" app floating temporary location="bottom">
    <v-list-item class="py-4" :title="mainData.eventInfo.name" :subtitle="mainData.communityName"></v-list-item>
    <v-divider></v-divider>
    <template v-for="(item) in navbarData" :key="index">
    <v-list-item v-if="item.visible" link :title="item.name" :to="item.path"></v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
const { mainData, navbarData } = useJSONData();
const sidebar = useSideBar();
</script>

<style>
</style>
