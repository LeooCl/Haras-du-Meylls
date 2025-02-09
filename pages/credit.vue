<template>
  <h1>Remerciements et crédits</h1>
  <p>
    Cette page a pour but de créditer et de remercier chaleureusement les
    artistes ayant créé les robes custom des chevaux SWEM actuellement
    disponibles sur le serveur. Au nom du Haras du Meylls, nous souhaitons
    exprimer notre profonde gratitude à RAK Madokah, Asheerah's Livery, Naomi,
    Reese, Lisssa pour leurs robes customs ainsi qu'à Just Peachy pour ses
    créations de builds. Le serveur du Haras du Meylls propose plus d’une
    centaine de robes custom, réalisées par les artistes mentionnés ci-dessus.
    Vous retrouverez sur cette page l’ensemble des robes présentes sur le
    serveur, accompagnées du nom de leur créateur et d’un lien vers leur Ko-fi.
    Nous souhaitons également adresser un remerciement tout particulier à
    Madokah, une joueuse de notre serveur, qui a créé spécialement pour nous un
    ensemble unique de robes. Vous pourrez découvrir ses magnifiques créations
    en photo ci-dessous. Nous témoignons un immense respect et une profonde
    gratitude à tous ces artistes pour leur travail exceptionnel. Nous demandons
    à chacun de respecter leur travail et de ne pas l’utiliser à des fins
    personnelles. Si les robes d’artistes vous intéressent, vous pouvez les
    retrouver directement sur leur Ko-fi via les liens fournis.
  </p>

  <!-- Créateurs -->
  <div>
    <h1>Nos Créateurs</h1>
    <div class="creators-container">
      <CreatorCard
        v-for="creator in creators"
        :key="creator.id"
        :creator="creator"
        :isSelected="creator.name === selectedCreator"
        @select="toggleSelection(creator.name)"
      />
    </div>
  </div>

  <!-- Skins personnalisés -->
  <div>
    <h1>Skins Personnalisés</h1>
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

// Créateur sélectionné
const selectedCreator = ref(null);

// Fonction pour sélectionner/désélectionner un créateur
const toggleSelection = (creatorName) => {
  selectedCreator.value = selectedCreator.value === creatorName ? null : creatorName;
};

// Filtrage des skins en fonction du créateur sélectionné
const filteredSwemCoats = computed(() => {
  return selectedCreator.value
    ? swemCoats.filter((skin) => skin.creator === selectedCreator.value)
    : swemCoats;
});
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 50px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  font-family: "Julius Sans One", serif;
}

p {
  padding: 0 300px;
  text-align: center;
}

.creators-container, .swemcoat-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
