<template>
  <nav>
    <!-- Burger pour mobile -->
    <div class="burger" @click="toggleMenu">
      <span>{{ menuOpen ? '✖' : '☰' }}</span>
    </div>

    <!-- Logo centré avec animation -->
    <NuxtImg
      src="/images/Logo_Haras_du_Meylls.png"
      class="logo"
      alt="Logo Haras du Meylls"
    />

    <!-- Liens -->
    <ul :class="['nav-links', { open: menuOpen }]">
      <li><NuxtLink to="/" @click="closeMenu">Accueil</NuxtLink></li>
      <li><NuxtLink to="/presentation" @click="closeMenu">Présentation</NuxtLink></li>
      <li><NuxtLink to="/wiki" @click="closeMenu">Wiki</NuxtLink></li>
      <li><NuxtLink to="/credit" @click="closeMenu">Remerciements</NuxtLink></li>
      <li><NuxtLink to="/shop" @click="closeMenu">Boutique</NuxtLink></li>
      <li><NuxtLink to="/vote" @click="closeMenu">Vote</NuxtLink></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
/* ------ NAVBAR PRINCIPALE ------ */
nav {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  padding: 15px 40px;
  width: 90%;
  position: fixed;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  border-radius: 30px;

  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* ------ LOGO + ANIMATION ------ */
.logo {
  width: 120px;
  height: auto;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05) rotate(-1.5deg);
}

/* ------ LIENS ------ */
.nav-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

/* ------ STYLES DES LIENS ------ */
nav a {
  text-decoration: none;
  color: #141811;
  font-size: 18px;
  font-family: "Julius Sans One", serif;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #141811;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease;
}

nav a:hover {
  color: #141811;
}

nav a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

nav a:active {
  transform: scale(0.95);
}

/* ------ BURGER ICON ------ */
.burger {
  display: none;
  font-size: 2rem;
  color: #141811;
  cursor: pointer;
  z-index: 110;
}

/* ------ RESPONSIVE ------ */
@media (max-width: 768px) {
  nav {
    grid-template-columns: 1fr auto 1fr;
    padding: 10px 20px;
  }

  .burger {
    display: block;
    justify-self: start;
  }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
    flex-direction: column;
    align-items: center;
    padding: 1rem 0;
    gap: 1rem;
    transform: translateY(-200%);
    transition: transform 0.4s ease;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .nav-links.open {
    transform: translateY(0);
  }

  .logo {
    justify-self: center;
  }
}
</style>