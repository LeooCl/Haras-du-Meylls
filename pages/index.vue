<template>
  <div class="home">
    <header class="hero">
      <h1 class="title">Bienvenue sur <span>HarasCraft</span></h1>
      <p class="subtitle">
        Un serveur Minecraft unique dédié aux passionnés d'équitation et
        d'aventure !
      </p>
      <div class="buttons">
        <NuxtLink to="/about" class="btn">À propos</NuxtLink>
        <NuxtLink to="/server" class="btn">Serveur</NuxtLink>
        <NuxtLink to="/contact" class="btn">Contact</NuxtLink>
      </div>
    </header>
  </div>
</template>

<script setup></script>

<style scoped>
/* Style général */
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #74b9ff, #55efc4);
  color: #2d3436;
  text-align: center;
}

/* Style pour le bloc principal */
.hero {
  max-width: 800px;
  padding: 20px;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #2d3436;
  margin-bottom: 0.5rem;
}

.title span {
  color: #e17055;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #2d3436;
}

/* Style des boutons */
.buttons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.btn {
  display: inline-block;
  background-color: #e17055;
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.btn:hover {
  background-color: #d35400;
}
</style>