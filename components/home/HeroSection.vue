<!--
  Componente: HeroSection.vue
  Qué hace: hero de la home con identidad del evento, fecha, sede e inscripción.
  Dónde se usa: pages/index.vue.
  Datos: eventInfo desde data/config.json.
-->
<template>
  <v-container fluid class="hero-section" data-gsap-reveal>
    <v-row justify-center align="center">
      <v-col md="6" sm="6" cols="12">
        <p class="eyebrow" data-gsap-hero>AWS STUDENT COMMUNITY DAY / UNC 2026</p>
        <h1 class="responsive-h1 my-4" data-gsap-hero>
          <span class="hero-line" data-gsap-hero-line>AWS Student Community Day</span>
          <span class="hero-line" data-gsap-hero-line>UNC 2026</span>
        </h1>
        <p class="hero-copy" data-gsap-hero :style="{ maxWidth: '90%' }">
          {{ mainData.eventInfo.description.short }}
        </p>
        <p class="text-subtitle-1 font-weight-medium hero-tagline" data-gsap-hero>
          {{ mainData.eventInfo.tagline }}
        </p>

        <p class="my-5 hero-meta" data-gsap-hero>
          <span class="mr-4">
            <v-icon class="mr-1">mdi-calendar-month</v-icon>
            {{ mainData.eventInfo.date }}
          </span>

          <span class="mr-4">
            <v-icon class="mr-1">mdi-map-legend</v-icon>
            <a :href="mainData.eventInfo.venue.mapLink" target="_blank" rel="noopener noreferrer">
              {{ mainData.eventInfo.venue.address }}
            </a>
            
          </span>
        </p>

        <div class="countdown-panel" data-gsap-hero aria-live="polite">
          <p class="countdown-label">EL EVENTO COMIENZA EN</p>
          <div v-if="countdown.ready && !countdown.started" class="countdown-grid">
            <div v-for="unit in countdownUnits" :key="unit.label" class="countdown-unit">
              <strong>{{ unit.value }}</strong>
              <span>{{ unit.label }}</span>
            </div>
          </div>
          <p v-else-if="countdown.started && !countdown.finished" class="countdown-status">
            El evento está en curso
          </p>
          <p v-else-if="countdown.finished" class="countdown-status">
            Gracias por ser parte del evento
          </p>
          <div v-else class="countdown-grid countdown-placeholder" aria-hidden="true">
            <div v-for="label in ['DÍAS', 'HORAS', 'MIN', 'SEG']" :key="label" class="countdown-unit">
              <strong>--</strong>
              <span>{{ label }}</span>
            </div>
          </div>
        </div>

        <v-btn
          rounded
          size="large"
          color="#FFD427"
          v-if="
            registrationIsOpen
          "
          :href="mainData.eventInfo.registration.link"
          class="register-button my-4 mt-3"
          data-gsap-hero
          target="_blank"
          rel="noopener noreferrer"
          variant="flat"
          >Inscribite ahora</v-btn
        >
      </v-col>
      <v-col md="6" sm="6" cols="12">
        <v-img class="hero-image" data-gsap-image data-gsap-parallax
          alt="AWS Student Community Day UNC"
          :src="heroImage"
          :lazy-src="heroImage"
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
import heroImage from "@/assets/img/foto_pagina_principal.png";
import { computed, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useJSONData } from "~/composables/useJSONData";
import { useRegistrationStatus } from "~/composables/useRegistrationStatus";

const { width, mobile } = useDisplay();
const screenWidth = ref(width);
const { mainData } = useJSONData();
const registrationIsOpen = useRegistrationStatus();

const eventInfo = mainData.eventInfo;
const eventStart = new Date(eventInfo.startDateTime).getTime();
const eventEnd = new Date(eventInfo.endDateTime).getTime();
const countdown = reactive({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  ready: false,
  started: false,
  finished: false,
});

const countdownUnits = computed(() => [
  { value: String(countdown.days).padStart(2, "0"), label: "DÍAS" },
  { value: String(countdown.hours).padStart(2, "0"), label: "HORAS" },
  { value: String(countdown.minutes).padStart(2, "0"), label: "MIN" },
  { value: String(countdown.seconds).padStart(2, "0"), label: "SEG" },
]);

let countdownTimer: number | undefined;

const updateCountdown = () => {
  const now = Date.now();
  const remaining = eventStart - now;

  countdown.ready = true;
  countdown.started = remaining <= 0;
  countdown.finished = now >= eventEnd;

  if (remaining <= 0) {
    countdown.days = 0;
    countdown.hours = 0;
    countdown.minutes = 0;
    countdown.seconds = 0;
    return;
  }

  const totalSeconds = Math.floor(remaining / 1000);
  countdown.days = Math.floor(totalSeconds / 86400);
  countdown.hours = Math.floor((totalSeconds % 86400) / 3600);
  countdown.minutes = Math.floor((totalSeconds % 3600) / 60);
  countdown.seconds = totalSeconds % 60;
};

onMounted(() => {
  updateCountdown();
  countdownTimer = window.setInterval(updateCountdown, 1000);
});

onBeforeUnmount(() => {
  if (countdownTimer !== undefined) {
    window.clearInterval(countdownTimer);
  }
});
</script>

<style scoped>
.hero-section {
  min-height: 540px;
  display: flex;
  align-items: center;
  padding-top: 68px;
}

.eyebrow {
  color: #ff9900;
  font: 700 0.8rem/1.2 monospace;
  letter-spacing: 0.16em;
}

.hero-copy,
.hero-meta {
  color: #bcbcc5;
}

.hero-tagline {
  color: #58e0c1 !important;
}

.hero-meta a {
  color: #f5f5f5;
}

.hero-meta a:hover {
  color: #ff9900;
}

.countdown-panel {
  width: min(100%, 490px);
  margin: 1.5rem 0 0.75rem;
  padding: 1rem;
  border: 1px solid rgba(255, 153, 0, 0.42);
  border-radius: 18px;
  background:
    linear-gradient(135deg, rgba(255, 153, 0, 0.13), rgba(13, 16, 25, 0.92) 55%),
    rgba(13, 16, 25, 0.82);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 0 26px rgba(255, 153, 0, 0.12);
  position: relative;
  overflow: hidden;
}

.countdown-panel::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: linear-gradient(110deg, transparent 25%, rgba(255, 255, 255, 0.1) 50%, transparent 75%);
  transform: translateX(-100%);
  animation: countdown-scan 6s ease-in-out infinite;
}

.countdown-label {
  position: relative;
  z-index: 1;
  margin: 0 0 0.7rem;
  color: #ffb84d;
  font: 700 0.72rem/1.2 monospace;
  letter-spacing: 0.18em;
}

.countdown-grid {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.6rem;
}

.countdown-unit {
  display: flex;
  min-width: 0;
  padding: 0.55rem 0.25rem;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.055);
  text-align: center;
  flex-direction: column;
}

.countdown-unit strong {
  color: #ffffff;
  font: 700 clamp(1.45rem, 4vw, 2.2rem)/1 monospace;
  letter-spacing: -0.06em;
  text-shadow: 0 0 16px rgba(255, 153, 0, 0.4);
}

.countdown-unit span {
  margin-top: 0.35rem;
  color: #cbd1dc;
  font: 700 0.62rem/1 monospace;
  letter-spacing: 0.12em;
}

.countdown-status {
  position: relative;
  z-index: 1;
  margin: 0.3rem 0;
  color: #ffffff;
  font-weight: 700;
}

.hero-image {
  width: min(100%, 520px);
  max-height: 470px;
  margin: 0 auto;
  filter: drop-shadow(0 18px 30px rgba(0, 0, 0, 0.35));
}

@media (max-width: 959px) {
  .hero-section {
    min-height: auto;
    padding-top: 92px;
  }

  .hero-image {
    max-height: 420px;
  }
}

@media (max-width: 599px) {
  .hero-section {
    padding-top: 76px;
  }

  .hero-image {
    max-height: 330px;
  }
}

.responsive-h1 {
  font-size: clamp(2.8rem, 6vw, 5.5rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
  perspective: 800px;
}

.hero-line {
  display: block;
  overflow: hidden;
  transform-origin: 50% 100%;
}

/* Media query for screens larger than 600px */
@keyframes countdown-scan {
  0%, 45% { transform: translateX(-100%); }
  75%, 100% { transform: translateX(100%); }
}

@media (min-width: 600px) {
  .responsive-h1 {
    font-size: 300%;
  }
}

@media (max-width: 599px) {
  .countdown-panel {
    margin-top: 1.25rem;
  }

  .countdown-grid {
    gap: 0.35rem;
  }

  .countdown-unit {
    padding-inline: 0.1rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .countdown-panel::after {
    animation: none;
  }
}
</style>
