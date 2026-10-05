<!--
  Componente: ParticipationForms.vue
  Qué hace: presenta las convocatorias oficiales para participar del evento.
  Dónde se usa: pages/index.vue.
-->
<template>
  <v-container fluid class="participation-section">
    <v-row>
      <v-col cols="12" data-gsap-reveal>
        <p class="section-eyebrow">Participá en la organización</p>
        <h2 class="section-heading">Tu lugar también está en este evento</h2>
        <p class="muted-copy section-intro">
          Elegí cómo querés ser parte de AWS Student Community Day Córdoba 2026.
          Recibimos propuestas, ideas y personas con ganas de construir comunidad.
        </p>
      </v-col>

      <v-col
        v-for="form in forms"
        :key="form.title"
        cols="12"
        md="4"
        data-gsap-reveal
      >
        <v-card class="form-card h-100 pa-6" data-gsap-box>
          <div class="form-icon" :class="`form-icon--${form.accent}`">
            <v-icon :icon="form.icon" size="28" />
          </div>
          <p class="form-label">{{ form.label }}</p>
          <h3>{{ form.title }}</h3>
          <p class="muted-copy form-description">{{ form.description }}</p>
          <v-btn
            :href="form.url"
            target="_blank"
            rel="noopener noreferrer"
            class="form-action"
            variant="outlined"
            append-icon="mdi-arrow-top-right"
          >
            {{ form.action }}
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
const forms = [
  {
    label: "Compartí tu experiencia",
    title: "Call for Speakers",
    description:
      "Proponé una charla, taller o experiencia práctica para inspirar a la comunidad.",
    action: "Postular una charla",
    icon: "mdi-microphone-outline",
    accent: "amber",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdu9b6dsptRDWx3DOsWQ5C4WT5QbMHKVbIPJZINTmHVqEwkqw/viewform?usp=header",
  },
  {
    label: "Construí la experiencia",
    title: "Convocatoria de voluntarios",
    description:
      "Sumate al equipo que hace posible cada detalle del evento y conecta a sus asistentes.",
    action: "Quiero ser voluntario",
    icon: "mdi-account-heart-outline",
    accent: "orange",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfP5qdaj8xa24l9X-Lsspc2UB0g5Tm2wKYx4HXsd3HCWhLG_g/viewform?usp=header",
  },
  {
    label: "Impulsá la comunidad",
    title: "Oportunidades de alianza",
    description:
      "Encontrá una forma de acompañar el crecimiento del talento y la tecnología en Córdoba.",
    action: "Explorar una alianza",
    icon: "mdi-handshake-outline",
    accent: "deep",
    url: "https://docs.google.com/forms/d/e/1FAIpQLScF027FxATgOt-ujnb5-i0Be1v_4kyquFhtusvADH-BicEjYg/viewform?usp=header",
  },
];
</script>

<style scoped>
.participation-section {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.section-eyebrow,
.form-label {
  color: #ffc400;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-eyebrow {
  margin-bottom: 0.5rem;
}

.section-intro {
  max-width: 720px;
  margin-bottom: 1.5rem;
}

.form-card {
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 153, 0, 0.3) !important;
  border-radius: 20px;
  background:
    linear-gradient(145deg, rgba(27, 31, 42, 0.98), rgba(14, 15, 22, 0.98)) !important;
}

.form-card:hover {
  border-color: rgba(255, 153, 0, 0.8) !important;
}

.form-icon {
  display: grid;
  width: 56px;
  height: 56px;
  margin-bottom: 1.4rem;
  place-items: center;
  border-radius: 16px;
}

.form-icon--amber {
  color: #ffc400;
  background: rgba(255, 196, 0, 0.14);
}

.form-icon--orange {
  color: #ff9900;
  background: rgba(255, 153, 0, 0.14);
}

.form-icon--deep {
  color: #ec7211;
  background: rgba(236, 114, 17, 0.14);
}

.form-label {
  margin-bottom: 0.65rem;
}

.form-card h3 {
  min-height: 3.6rem;
  margin-bottom: 0.75rem;
  font-size: 1.35rem;
  line-height: 1.2;
}

.form-description {
  min-height: 4.5rem;
  margin-bottom: 1.5rem;
}

.form-action {
  align-self: flex-start;
  margin-top: auto;
  border-color: rgba(255, 153, 0, 0.78) !important;
  color: #ffb52e !important;
}

.form-action:hover {
  background: rgba(255, 153, 0, 0.12) !important;
}
</style>
