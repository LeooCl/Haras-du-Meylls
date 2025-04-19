<template>
    <div>
      <!-- FOOTER caché/animé -->
      <footer :class="['angled-footer', { visible: showFooter }]">
        <div class="footer-content">
          <p>&copy; 2025 Haras du Meylls. Tous droits réservés.</p>
        </div>
      </footer>
  
      <!-- Bouton en bas à droite -->
      <button class="toggle-footer-button" @click="toggleFooter">
        {{ showFooter ? '✖' : '▲' }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showFooter = ref(false)
  
  const toggleFooter = () => {
    showFooter.value = !showFooter.value
  }
  </script>
  
  <style scoped>
  .angled-footer {
    background-color: #383838;
    color: white;
    text-align: center;
    padding: 7rem 1rem 2rem;
    clip-path: polygon(0 0, 100% 5vw, 100% 100%, 0% 100%);
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
    opacity: 0;
    transition: transform 0.6s ease, opacity 0.6s ease;
    z-index: 999;
  }
  
  .angled-footer.visible {
    transform: translateY(0);
    opacity: 1;
  }
  
  .toggle-footer-button {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    background-color: #00AFB9;
    color: white;
    border: none;
    border-radius: 2rem;
    padding: 0.6rem 1rem;
    cursor: pointer;
    z-index: 1000;
    font-weight: bold;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
  }
  
  .toggle-footer-button:hover {
    background-color: #0081A7;
  }
  </style>