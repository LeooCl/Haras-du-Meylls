<template>
    <nav>
        <ul class="nav-links">
            <li><NuxtLink to="/">Accueil</NuxtLink></li>
            <li><NuxtLink to="/presentation">Présentation</NuxtLink></li>
            <li><NuxtLink to="/wiki">Wiki</NuxtLink></li>
        </ul>

        <NuxtImg src="/images/Logo_Haras_du_Meylls.png" class="logo" alt="Logo Haras du Meylls"/>

        <ul class="nav-links">
            <li><NuxtLink to="/credit">Remerciements</NuxtLink></li>
            <li><NuxtLink to="/shop">À venir</NuxtLink></li>
            <li><NuxtLink to="/vote">À venir</NuxtLink></li>
        </ul>
    </nav>
</template>

<script setup>

</script>


<style scoped>
/* ---- Barre de navigation ---- */
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    width: 100%;
    background-color: #141811;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
}

/* ---- Liste des liens ---- */
.nav-links {
    display: flex;
    justify-content: space-evenly;
    list-style: none;
    padding: 0;
    margin: 0;
    flex-grow: 1;
}

/* ---- Liens ---- */
nav a {
    text-decoration: none;
    color: white;
    font-size: 20px;
    font-family: "Julius Sans One", serif;
    font-weight: bold;
    position: relative;
    overflow: hidden;
    transition: color 0.4s ease;
}

/* ---- Animation du texte au survol ---- */
nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #d8e2dc;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.4s ease;
}

/* ---- Lorsque l'on survole un lien ---- */
nav a:hover {
    color: #d8e2dc;
}

nav a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

/* ---- Logo ---- */
.logo {
    width: 150px;
    height: auto;
    flex-shrink: 0;
}

</style>