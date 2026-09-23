<!--
  Componente: default.vue
  Qué hace: layout global con toolbar, drawer, contenido y footer.
  Dónde se usa: todas las páginas mediante NuxtLayout.
-->
<template>
  <v-app style="background-color: #FFFFFF" class="google-font">
    <CoreAppToolbar />
    <ClientOnly>
      <CoreAppDrawer />
    </ClientOnly>
    <v-main
      class="mt-3"
      style="max-width: 1200px; margin-left: auto; margin-right: auto"
    >
      <slot></slot>
    </v-main>
    <CoreAppFooter />
  </v-app>
</template>

<script setup>
</script>
