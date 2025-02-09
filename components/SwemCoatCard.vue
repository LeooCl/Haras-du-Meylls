<template>
  <div class="swemcoat-card" v-if="swemCoat">
    <img v-if="swemCoat.gif" :src="swemCoat.gif" alt="Skin GIF" class="swemcoat-image" />
    <div class="swemcoat-info">
      <h3 v-if="swemCoat.name" class="swemcoat-name">{{ swemCoat.name }}</h3>
      <p v-if="swemCoat.creator" class="creator-name">Créé par : {{ swemCoat.creator }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  swemCoat: {
    type: Object,
    required: true,
  },
});
</script>
  
<style scoped>
.swemcoat-card {
  background: #f8f9fa;
  border: 2px solid #d4d4d4;
  border-radius: 12px;
  overflow: hidden;
  width: 280px;
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.swemcoat-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.swemcoat-image {
  width: 100%;
  max-width: 250px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.swemcoat-info {
  margin-top: 10px;
  padding: 10px;
  background: rgba(128, 192, 128, 0.1); /* Fond léger vert */
  border-radius: 8px;
  width: 100%;
}

.swemcoat-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
}

.creator-name {
  font-size: 0.9rem;
  color: #666;
  font-style: italic;
}
</style>