<template>
  <div
    class="card"
    :class="{ selected: isSelected }"
    @click="$emit('select', creator.name)"
  >
    <img class="image-creator" :src="creator.image" :alt="creator.name" />
    <h2 class="creator-name">{{ creator.name }}</h2>
    <p class="creator-creation">{{ creator.creations }}</p>

    <!-- Liens des créateurs -->
    <div class="creator-links" v-if="creator.links.length > 0">
      <a
        v-for="link in creator.links"
        :key="link.url"
        :href="link.url"
        target="_blank"
        class="link-container"
        :title="link.url"
      >
        <img
          :src="`/logos/${link.type}.svg`"
          :alt="link.type"
          class="link-logo"
        />
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  creator: Object,
  isSelected: Boolean,
});

defineEmits(["select"]);

// Dictionnaire des logos associés aux plateformes
const logos = ref({
  "ko-fi": "/logos/ko-fi.svg",
  youtube: "/logos/youtube.svg",
  twitter: "/logos/twitter.svg",
  instagram: "/logos/instagram.svg",
  facebook: "/logos/facebook.svg",
  discord: "/logos/discord.svg",
});
</script>

<style scoped>
/* Style de la carte */
.card {
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  transition: transform 0.2s ease-in-out,
}

.card:hover {
  transform: scale(1.05);
  background-color: #f8f9fa;
}

.selected {
  border: 2px solid #28a745;
  background-color: rgba(40, 167, 69, 0.1);
  box-shadow: 0 0 10px rgba(40, 167, 69, 0.5);
}

/* Image du créateur */
.image-creator {
  width: 100%;
  border-radius: 50%;
  object-fit: cover;
}

/* Nom du créateur */
.creator-name {
  font-size: 1.5em;
  font-weight: bold;
  margin: 10px 0;
}

/* Description */
.creator-creation {
  font-size: 1em;
  color: #666;
}

/* Conteneur des liens */
.creator-links {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

/* Icônes des liens */
.link-logo {
  width: 30px;
  height: 30px;
  transition: transform 0.2s;
  filter: grayscale(100%) sepia(50%) hue-rotate(90deg) brightness(120%);
}

.link-logo:hover {
  transform: scale(1.1);
}
</style>
