<template>
  <div id="app">
    <!-- En-tête ou barre de navigation persistante -->
    <header class="navbar">
      <NuxtLink to="/" class="logo">HarasCraft</NuxtLink>
      <nav>
        <NuxtLink to="/" class="nav-link">Accueil</NuxtLink>
        <NuxtLink to="/about" class="nav-link">À propos</NuxtLink>
        <NuxtLink to="/server" class="nav-link">Serveur</NuxtLink>
        <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
      </nav>
    </header>

    <!-- Contenu principal -->
    <main>
      <NuxtPage />
    </main>

    <!-- Pied de page -->
    <footer class="footer">
      <p>© 2024 HarasCraft. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script setup></script>

<style>
/* Styles globaux */
body {
  margin: 0;
  font-family: "Arial", sans-serif;
  background-color: #f5f5f5;
  color: #2d3436;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Barre de navigation */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #e17055;
  color: #fff;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
}

.nav-link {
  margin: 0 10px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  transition: opacity 0.3s ease;
}

.nav-link:hover {
  opacity: 0.8;
}

/* Contenu principal */
main {
  flex: 1;
  padding: 20px;
}

/* Pied de page */
.footer {
  text-align: center;
  padding: 10px 0;
  background-color: #2d3436;
  color: #fff;
}
</style>
