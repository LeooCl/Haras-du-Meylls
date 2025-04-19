<template>
  <h1>.༻ Remerciements et crédits ༺.</h1>
  <div class="paragraph-container">
  <p>
    Cette page a pour but de créditer et de remercier chaleureusement les
    artistes ayant créé les robes custom des chevaux SWEM actuellement
    disponibles sur le serveur.
  </p>
  <p>Au nom du Haras du Meylls, nous souhaitons
    exprimer notre profonde gratitude à RAK Madokah, Asheerah's Livery, Naomi,
    Reese, Lisssa pour leurs robes customs ainsi qu'à Just Peachy pour ses
    créations de builds.
  </p>
  <p class="paragraph-espace">Le serveur du Haras du Meylls propose plus d’une
    centaine de robes custom, réalisées par les artistes mentionnés ci-dessus.
    Vous retrouverez sur cette page l’ensemble des robes présentes sur le
    serveur, accompagnées du nom de leur créateur et d’un lien vers leur Ko-fi.
  </p>
  <p>Nous souhaitons également adresser un remerciement tout particulier à
    Madokah, une joueuse de notre serveur, qui a créé spécialement pour nous un
    ensemble unique de robes. Vous pourrez découvrir ses magnifiques créations
    en photo ci-dessous.
  </p>
  <p class="paragraph-espace">Nous témoignons un immense respect et une profonde
    gratitude à tous ces artistes pour leur travail exceptionnel. Nous demandons
    à chacun de respecter leur travail et de ne pas l’utiliser à des fins
    personnelles. Si les robes d’artistes vous intéressent, vous pouvez les
    retrouver directement sur leur Ko-fi via les liens fournis.
  </p>
</div>

  <!-- Créateurs -->
  <div>
  <h1>.༻ Les Créateurs ༺.</h1>

  <div class="carousel-wrapper">
    <button class="nav-btn left" @click="prevSlide" :disabled="currentIndex === 0">‹</button>

    <div class="creators-carousel">
      <CreatorCard
        v-for="creator in visibleCreators"
        :key="creator.id"
        :creator="creator"
        :isSelected="creator.name === selectedCreator"
        @select="toggleSelection(creator.name)"
      />
    </div>

    <button class="nav-btn right" @click="nextSlide" :disabled="endOfCarousel">›</button>
  </div>
</div>

  <!-- Skins personnalisés -->
  <div>
    <h1>.༻ Skins Personnalisés ༺.</h1>
    <div class="swemcoat-cards">
      <SwemCoatCard 
        v-for="skin in filteredSwemCoats" 
        :key="skin.id" 
        :swemCoat="skin" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import CreatorCard from "@/components/CreatorCard.vue";
import { creators } from "@/data/creators.js";
import SwemCoatCard from "~/components/SwemCoatCard.vue";
import { swemCoats } from "~/data/swemcoat";

// Sélection
const selectedCreator = ref(null);
const toggleSelection = (creatorName) => {
  selectedCreator.value = selectedCreator.value === creatorName ? null : creatorName;
};

// Filtrage des robes
const filteredSwemCoats = computed(() => {
  return selectedCreator.value
    ? swemCoats.filter((skin) => skin.creator === selectedCreator.value)
    : swemCoats;
});

// --- Carousel ---
const creatorsPerSlide = 3;
const currentIndex = ref(0);

const visibleCreators = computed(() => {
  const start = currentIndex.value * creatorsPerSlide;
  return creators.slice(start, start + creatorsPerSlide);
});

const endOfCarousel = computed(() => {
  return (currentIndex.value + 1) * creatorsPerSlide >= creators.length;
});

const nextSlide = () => {
  if (!endOfCarousel.value) currentIndex.value++;
};

const prevSlide = () => {
  if (currentIndex.value > 0) currentIndex.value--;
};
</script>

<style scoped>
h1 {
  font-size: 70px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  font-family: 'Mea Culpa', cursive;
}

p {
  text-align: center;
}

.paragraph-container {
  margin: 0 300px;
}

.paragraph-espace {
  padding-top: 15px;
}

.creators-container, .swemcoat-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 0;
}

.creators-carousel {
  display: flex;
  gap: 20px;
  transition: all 0.5s ease-in-out;
}

.swemcoat-cards {
  padding: 20px 0;
}

.nav-btn {
  background: #ffffffcc;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  padding: 10px 15px;
  border-radius: 10px;
  transition: background 0.2s;
}

.nav-btn:disabled {
  opacity: 0.3;
  cursor: default;
}
</style>