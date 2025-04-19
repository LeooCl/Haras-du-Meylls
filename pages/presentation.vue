<template>
    <section class="presentation">
      <div class="container">
        <header class="hero">
          <h1>Bienvenue au Haras du Meylls</h1>
          <p class="subtitle">Un monde équestre immersif, RP et communautaire</p>
          <img src="public/images/illustration.webp" alt="Vue du haras" class="hero-image" />
        </header>
  
        <section class="intro-block">
          <div class="intro-grid">
            <div>
              <h2>Notre philosophie</h2>
              <p>
                Le Haras du Meylls est un projet de cœur né début 2023, fondé par <strong>Marvel_07_22</strong>. Depuis janvier 2024, il rassemble une communauté soudée autour de valeurs d'immersion, de bienveillance et de passion.
              </p>
            </div>
            <div class="highlight">
              <h3>✨ Points clés :</h3>
              <ul>
                <li>+200 robes custom</li>
                <li>15 zones RP conçues à la main</li>
                <li>Système économique équilibré</li>
                <li>Progression et métiers personnalisés</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section class="team-block">
          <h2>Notre équipe</h2>
          <p class="section-subtitle">Des personnes passionnées au service de votre aventure</p>
          <div class="team-grid">
            <div class="card" v-for="member in team" :key="member.name">
              <h3>{{ member.name }}</h3>
              <p>{{ member.role }}</p>
            </div>
          </div>
        </section>
  
        <section class="features">
          <h2>Fonctionnalités principales</h2>
          <div class="features-grid">
            <div class="feature" v-for="f in features" :key="f.title">
              <h3>{{ f.title }}</h3>
              <p>{{ f.text }}</p>
            </div>
          </div>
        </section>
  
        <section class="community-block">
          <h2>Une communauté unique</h2>
          <p>
            Le Haras du Meylls, c'est aussi une ambiance chaleureuse, des animations, des concours, des giveaways, un Discord vivant et une équipe à l'écoute. Que vous soyez débutant ou expert RP, vous y trouverez votre place !
          </p>
        </section>
  
        <section class="legal">
          <h2>Propriété & éthique</h2>
          <p>
            Ce projet est juridiquement protégé (charte de PI, dépôt officiel). Le respect des créations et des auteurs est au cœur de notre démarche.
          </p>
        </section>
  
        <section class="cta">
          <h2>Rejoignez-nous !</h2>
          <p>Explorez, construisez, élevez vos chevaux, vivez une aventure RP immersive !</p>
          <div class="cta-buttons">
            <a href="/wiki" class="btn">Accéder au Wiki</a>
            <a href="/shop" class="btn btn-outline">Découvrir la Boutique</a>
          </div>
        </section>
      </div>
    </section>
  </template>
  
  <script setup>
  const team = [
    { name: 'Marvel', role: 'Fondatrice & administratrice' },
    { name: 'Sylo', role: 'Développeur & modérateur' },
    { name: 'Madokah', role: 'Modératrice & RP' },
    { name: 'Natsya', role: 'Guide' },
    { name: 'Galaxiline', role: 'Guide' },
    { name: 'Alicia', role: 'Guide' },
    { name: '7uScs', role: 'Animations & giveaways' },
  ]
  
  const features = [
    { title: '3 Mondes RP', text: 'Ressource, RP, Créatif avec accès personnalisé selon votre rang.' },
    { title: 'Métiers dynamiques', text: 'Revenus horaires, système économique personnalisé, Rankup méritocratique.' },
    { title: 'Équitation réaliste', text: 'Refuge, soins, reproduction, enchères et robes inédites SWEM.' },
    { title: 'Zones RP construites à la main', text: 'Club, écuries, ranchs, quartiers immersifs.' },
    { title: 'Boutique facultative', text: 'Kits, commandes, chevaux, skins en soutien au serveur.' },
    { title: 'Communauté active', text: 'Serveur Discord, événements réguliers et support.' },
  ]
  </script>
  
  <style scoped>
  .presentation {
    background: linear-gradient(to bottom, #ffffff, #f0f8f7);
    padding: 4rem 1rem;
    font-family: 'Segoe UI', sans-serif;
    color: #222;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .hero {
    text-align: center;
    margin-bottom: 4rem;
  }
  .hero h1 {
    font-size: 3.5rem;
    color: #007b83;
  }
  .subtitle {
    font-size: 1.3rem;
    color: #00a89d;
    margin-top: 0.5rem;
  }
  .hero-image {
    width: 100%;
    max-width: 720px;
    margin: 2rem auto 0;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }
  .intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin-bottom: 4rem;
    align-items: start;
  }
  .highlight {
    background: #e8f5f4;
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: inset 0 0 8px rgba(0,0,0,0.05);
  }
  .highlight h3 {
    color: #007b83;
    margin-bottom: 1rem;
  }
  .highlight ul {
    padding-left: 1.2rem;
  }
  .highlight li {
    margin-bottom: 0.5rem;
    list-style: disc;
  }
  .team-block {
    margin-bottom: 4rem;
  }
  .section-subtitle {
    text-align: center;
    color: #777;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1.5rem;
  }
  .card {
    background: #fff;
    padding: 1.2rem;
    border-radius: 1rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    text-align: center;
    transition: transform 0.3s;
  }
  .card:hover {
    transform: translateY(-4px);
  }
  .features {
    margin-bottom: 4rem;
  }
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
  .feature h3 {
    color: #F07167;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  .feature p {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  .community-block {
    background-color: #f9f9fb;
    padding: 2rem;
    border-radius: 1rem;
    margin-bottom: 4rem;
  }
  .community-block h2 {
    color: #00a89d;
  }
  .legal {
    background-color: #fff7f4;
    padding: 2rem;
    border-left: 5px solid #f4a493;
    border-radius: 12px;
    margin-bottom: 4rem;
  }
  .legal h2 {
    margin-bottom: 1rem;
    color: #d45d54;
  }
  .cta {
    text-align: center;
    margin-top: 3rem;
  }
  .cta-buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }
  .btn {
    background-color: #007b83;
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 999px;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.3s;
  }
  .btn:hover {
    background-color: #00646b;
  }
  .btn-outline {
    background: white;
    border: 2px solid #F07167;
    color: #F07167;
  }
  .btn-outline:hover {
    background: #F07167;
    color: white;
  }
  </style>