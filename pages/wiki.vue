<template>
    <section class="wiki-page">
      <div class="container">
        <h1 class="title">Wiki du Haras du Meylls</h1>
  
        <nav class="wiki-nav">
          <ul>
            <li v-for="(section, index) in sections" :key="index">
              <a :href="`#section-${index}`">{{ section.title }}</a>
            </li>
          </ul>
        </nav>
  
        <div class="section" v-for="(section, index) in sections" :key="index" :id="`section-${index}`">
          <h2>{{ section.title }}</h2>
          <div v-html="section.content"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const sections = [
    {
      title: '1. Présentation générale',
      content: `<p>Le Haras du Meylls est un serveur Minecraft francophone dédié à l’univers équestre et au roleplay. Accessible en 1.20.1 et basé sur le mod SWEM, il propose une expérience immersive, méritocratique et bienveillante, centrée sur l’équitation, les chevaux et la communauté.</p>`
    },
    {
      title: '2. Histoire & Philosophie',
      content: `<p>Créé début 2023, le Haras est le fruit d’une passion sincère. La version 1 a posé les bases d’une communauté solide. La version 2.0, lancée en 2025, incarne une refonte complète du serveur, plus fluide, plus immersive, et plus juste.</p>`
    },
    {
      title: '3. Les trois mondes',
      content: `
        <ul>
          <li><strong>L’île du Haras</strong> : monde RP principal, mode aventure, zones officielles uniquement.</li>
          <li><strong>Monde ressource</strong> : monde de farm libre, reboot régulier, accès End/Nether, sans PvP.</li>
          <li><strong>Monde construction</strong> : créatif RP protégé, parcelles payantes, /fly déblocable, projets perso.</li>
        </ul>
      `
    },
    {
      title: '4. Règlement du serveur',
      content: `<p>Le respect est la valeur fondamentale du Haras. Un règlement strict est appliqué sur le serveur Minecraft et Discord pour garantir un environnement sécurisé, respectueux et immersif pour tous.</p>`
    },
    {
      title: '5. Le staff',
      content: `
        <ul>
          <li><strong>Marvel</strong> : créatrice, responsable des builds, de l’organisation et de la communauté</li>
          <li><strong>Sylo</strong> : développeur principal, gestion technique et modération</li>
          <li><strong>Madokah</strong> : modération quotidienne</li>
          <li><strong>Guides</strong> : Natsya, Galaxiline, Alicia - accompagnement et ambiance</li>
          <li><strong>7uScs</strong> : gestion des giveaways et animations</li>
        </ul>
      `
    },
    {
      title: '6. Métiers, économie & rankup',
      content: `<p>Le serveur propose un système de métiers évolutif, un modèle économique immersif, et un système de rangs méritocratiques (Rankup) avec salaires horaires et avantages progressifs.</p>`
    },
    {
      title: '7. Les chevaux',
      content: `<p>Gestion réaliste, box RP, soins, achat/vente, robes custom, races variées, zones d'élevage, refuge, enchères, demi-pension...</p>`
    },
    {
      title: '8. Les zones RP',
      content: `<p>Centre-ville, zone urbaine, écuries, club, pôle de santé, zone de quarantaine, concours, élevage, ranch, Moonrise Pines, New Alpine, parc des retraités... Chaque zone a une fonction précise.</p>`
    },
    {
      title: '9. Boutique & commandes',
      content: `<p>La boutique propose des avantages facultatifs : /fly, homes, métiers supplémentaires, îles privées, chevaux supplémentaires. Toutes les commandes disponibles sont listées dans le wiki.</p>`
    },
    {
      title: '10. Foire aux Questions (FAQ)',
      content: `<p>Une FAQ est disponible pour répondre aux questions fréquentes des nouveaux joueurs.</p>`
    },
    {
      title: '11. Remerciements',
      content: `<p>Merci aux joueurs, au staff, aux artistes et créateurs de contenu qui font du Haras du Meylls une aventure humaine et communautaire exceptionnelle.</p>`
    }
  ]
  </script>
  
  <style scoped>
  .wiki-page {
    background-color: #ffffff;
    padding: 3rem 1.5rem;
    font-family: 'Segoe UI', sans-serif;
    color: #1f1f1f;
  }
  .container {
    max-width: 960px;
    margin: 0 auto;
  }
  .title {
    text-align: center;
    font-size: 2.8rem;
    font-weight: bold;
    color: #0081A7;
    margin-bottom: 2.5rem;
  }
  .wiki-nav {
    background: #f2f2f2;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .wiki-nav ul {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    list-style: none;
    padding: 0;
  }
  .wiki-nav a {
    color: #00AFB9;
    text-decoration: none;
    font-weight: 600;
  }
  .wiki-nav a:hover {
    text-decoration: underline;
  }
  .section {
    margin-bottom: 3rem;
  }
  .section h2 {
    font-size: 1.6rem;
    color: #F07167;
    border-left: 5px solid #FED9B7;
    padding-left: 1rem;
    margin-bottom: 1rem;
  }
  .section p,
  .section ul {
    font-size: 1.05rem;
    line-height: 1.7;
  }
  .section ul li {
    margin-left: 1.5rem;
    margin-bottom: 0.5rem;
  }
  </style>
  