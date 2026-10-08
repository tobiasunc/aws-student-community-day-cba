<!--
  Componente: speakerSocialButton.vue
  Qué hace: botones de redes sociales que solo aparecen cuando hay URL.
  Dónde se usa: tarjetas de speakers, equipo, footer y contacto.
-->
<template>
  <div class="mt-4">
    <template v-for="network in networks" :key="network.name">
      <v-btn
        v-if="socialLinks[network.key]"
        class="mr-1 mb-1"
        :href="socialLinks[network.key]"
        :aria-label="`Abrir ${network.name}`"
        target="_blank"
        rel="noreferrer"
        size="small"
        :color="dark ? 'white' : ''"
        variant="text"
      >
        <v-img
          v-if="network.icon"
          :class="{ 'social-icon-linkedin': network.key === 'linkedin' }"
          :src="network.icon"
          :alt="network.name"
          width="20"
          height="20"
        />
        <v-icon v-else :icon="network.mdiIcon" />
      </v-btn>
    </template>
  </div>
</template>

<script setup>
const networks = [
  { key: "meetup", name: "Meetup", icon: "/img/common/meetup-svgrepo-com.svg" },
  { key: "whatsapp", name: "WhatsApp", icon: "/img/common/whatsapp-fill-svgrepo-com.svg" },
  { key: "instagram", name: "Instagram", mdiIcon: "mdi-instagram" },
  { key: "linkedin", name: "LinkedIn", icon: "/img/common/linkedin-rounded-svgrepo-com.svg" },
  { key: "devto", name: "DEV Community", icon: "/img/common/dev-to-svgrepo-com.svg" },
  { key: "twitch", name: "Twitch", icon: "/img/common/twitch-182-svgrepo-com.svg" },
  { key: "twitter", name: "X", icon: "/img/common/x.svg" },
  { key: "youtube", name: "YouTube", icon: "/img/common/youtube-168-svgrepo-com.svg" },
  { key: "github", name: "GitHub", icon: "/img/common/github-142-svgrepo-com.svg" },
];

defineProps({
  socialLinks: {
    type: Object,
    default: () => ({}),
  },
  dark: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.social-icon-linkedin {
  filter: brightness(0) invert(1);
}
</style>
