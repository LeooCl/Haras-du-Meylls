<template>
    <section class="hero">
      <!-- Vidéo de fond -->
      <video autoplay muted loop playsinline class="hero-video">
        <source src="/videos/hero.mp4" type="video/mp4" />
        Ton navigateur ne supporte pas la vidéo HTML5.
      </video>
  
      <!-- Contenu centré -->
      <div class="hero-overlay">
        <div class="hero-container">
          <h1 class="hero-title">Haras du Meylls</h1>
          <a
            href="https://discord.gg/ton-invitation"
            target="_blank"
            class="discord-btn"
          >
            Rejoindre notre Discord
          </a>
        </div>
      </div>
    </section>
  </template>
  
  <style scoped>
  .hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hero-video {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    object-fit: cover;
    z-index: -2;
  }
  
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  
  .hero-container {
    text-align: center;
    z-index: 2;
  }
  
  .hero-title {
    font-family: 'Mea Culpa', cursive;
    font-size: 5rem;
    color: white;
    text-align: center;
  }
  
  .discord-btn {
    margin-top: 2rem;
    display: inline-block;
    background-color: #5865f2;
    color: white;
    padding: 0.8rem 1.6rem;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    font-family: 'Source Code Pro', serif;
    transition: background-color 0.3s ease;
  }
  
  .discord-btn:hover {
    background-color: #4752c4;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .hero-title {
      font-size: 3rem;
    }
  
    .discord-btn {
      padding: 0.6rem 1.2rem;
      font-size: 0.9rem;
    }
  }
  </style>
  