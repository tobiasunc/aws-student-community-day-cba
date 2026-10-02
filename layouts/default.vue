<!--
  Componente: default.vue
  Qué hace: layout global con toolbar, drawer, contenido y footer.
  Dónde se usa: todas las páginas mediante NuxtLayout.
-->
<template>
  <v-app class="google-font site-shell">
    <CoreAppToolbar />
    <ClientOnly>
      <CoreAppDrawer />
    </ClientOnly>
    <div ref="animationRoot" class="animation-root">
      <v-main class="site-main">
        <slot></slot>
      </v-main>
      <CoreAppFooter />
    </div>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useGsapAnimations } from '~/composables/useGsapAnimations'

const animationRoot = ref<HTMLElement | null>(null);
useGsapAnimations(animationRoot);
</script>
