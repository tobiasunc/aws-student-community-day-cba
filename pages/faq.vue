<!--
  Componente: faq.vue
  Qué hace: muestra preguntas frecuentes en paneles expandibles.
  Datos: data/faq.json; answer admite HTML controlado.
-->
<template>
  <NuxtLayout name="default">
    <v-container fluid class="mt-5">
      <v-row>
        <v-col md="8">
          <h1>Preguntas frecuentes</h1>
          <p>Todo lo que necesitás saber sobre el evento.</p>

          <v-expansion-panels
            data-gsap-reveal
            class="mb-6 mt-10 futuristic-surface"
            rounded="12"
            flat
            variant="accordion"
          >
            <!-- :style="{ borderBottom: i<3?'1px solid black':'', borderTop: i!=0?'1px solid black':'' }" -->
            <v-expansion-panel
              v-for="(item, index) in faqData"
              :key="index"
              class="futuristic-faq-item"
            >
              <v-expansion-panel-title
                expand-icon="mdi-menu-down"
                class="futuristic-faq-title"
              >
                {{ item.question }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="pa-3">
                <div v-html="item.answer"></div>
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </NuxtLayout>
</template>

<script setup>
const { faqData, mainData } = useJSONData();

definePageMeta({
  layout: false,
});

useEventSeo("FAQ");
</script>

<style scoped>
</style>
