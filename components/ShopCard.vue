<template>
    <div class="shop-card">
      <div class="shop-card-image">
        <img :src="item.image" :alt="item.name" />
      </div>
      <h3>{{ item.name }}</h3>
      <p>{{ item.price }} €</p>
      <button @click="$emit('add-to-cart', item)">Ajouter au panier</button>
    </div>
  </template>
  
  <script setup>
  defineProps({
    item: {
      type: Object,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .shop-card {
    background-color: white;
    border: 2px solid #e8e9d9;
    border-radius: 2rem;
    padding: 1.5rem 1rem;
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
  .shop-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  .shop-card-image {
    width: 100px;
    height: 100px;
    margin: 0 auto 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 1rem;
    background-color: #FDFCDC;
  }
  .shop-card-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .shop-card h3 {
    color: #2E2E2E;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
  }
  .shop-card p {
    color: #2E2E2E;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .shop-card button {
    background-color: #dedfce;
    color: #2E2E2E;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  .shop-card button:hover {
    background-color: #c9cbb2;
  }
  </style>
  