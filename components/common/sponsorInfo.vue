<!--
  Componente: sponsorInfo.vue
  Qué hace: lista sponsors agrupados por categoría.
  Dónde se usa: components/home/SponsorsSection.vue.
  Datos: sponsorsData; logos desde public/img/sponsors con fallback local.
-->
<template>
  <v-container fluid class="pa-0 ma-0">
    <v-row
      v-for="(item, index) in sponsorsData"
      :key="index"
      class="google-font mb-5 mt-0"
    >
      <v-col md="12" cols="12" class="category-heading">
        <h2>{{ item.category_name }}</h2>
      </v-col>
      <v-col
        md="2"
        cols="6"
        sm="3"
        class="text-center"
        v-for="(sponsor, indexp) in item.sponsors"
        :key="indexp"
      >
        <a
          class="sponsor-card futuristic-surface pa-5"
          :aria-label="`Visitar el sitio de ${sponsor.name}`"
          :href="sponsor.link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-img
            :alt="`Logo de ${sponsor.name}`"
            :src="'/img/sponsors/' + sponsor.logo"
            @error="handleImageError"
          ></v-img>
          <span>{{ sponsor.name }}</span>
        </a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const { sponsorsData } = useJSONData();
const handleImageError = (event) => {
  if (event?.target?.src?.endsWith("/img/common/avatar.png")) return;
  event.target.src = "/img/common/avatar.png";
};
</script>

<style scoped>
.category-heading {
  padding-bottom: 0.5rem;
}

.category-heading h2 {
  color: #ffb52e;
  font-size: 1.2rem;
  letter-spacing: 0.02em;
}

.sponsor-card {
  display: flex;
  min-height: 150px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1.5px solid var(--aws-orange);
  border-radius: 15px;
  color: inherit;
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
}

.sponsor-card:hover,
.sponsor-card:focus-visible {
  border-color: #ffc400;
  box-shadow: 0 0 24px rgba(255, 153, 0, 0.2);
  transform: translateY(-4px);
}

.sponsor-card span {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
}
</style>