<template>
  <div class="shop-page">
    <div class="shop-header">
      <h1>.༻ Boutique du Haras du Meylls ༺.</h1>
      <div class="paragraph-container">
        <p>
          Tout ce que vous trouverez ici est entièrement optionnel : rien n’est
          nécessaire pour profiter pleinement de votre aventure sur notre
          serveur. Les articles en vente offrent simplement des avantages en
          jeu, accessibles en remerciement de votre soutien financier. L’argent
          récolté est intégralement utilisé pour couvrir les frais liés au bon
          fonctionnement du serveur.
        </p>
        <p class="paragraph-espace">
          En achetant ici, vous contribuez activement à la vie du Haras du
          Meylls, et pour cela, nous vous en sommes infiniment reconnaissants.
        </p>
        <p class="paragraph-espace">
          Attention : Tout paiement est définitif : aucune annulation, échange
          ou remboursement ne pourra être effectué, quel que soit l’article
          concerné. Si vous quittez le serveur, aucun remboursement ne sera
          possible.
        </p>
        <p class="paragraph-espace">
          En effectuant un achat, vous confirmez être majeur(e) ou, si vous êtes
          mineur(e), avoir l’autorisation d’un parent ou d’un responsable légal.
          En achetant sur cette boutique, vous acceptez les conditions générales
          de vente, attestez de votre majorité ou certifiez disposer d’une
          autorisation parentale.
        </p>
        <p class="paragraph-espace">
          Merci de faire partie de cette belle aventure avec nous !
        </p>
      </div>
    </div>

    <!-- Catégorie : Monnaie -->
    <div class="shop-category">
      <h2>.༻ Monnaie ༺.</h2>
      <div class="product-grid">
        <ShopCard
          v-for="item in shopItems.filter((i) =>
            ['500 Oryn', '2000 Oryn', '5000 Oryn'].includes(i.name)
          )"
          :key="item.name"
          :item="item"
          @add-to-cart="addToCart"
        />
      </div>
    </div>

    <!-- Catégorie : Formule Avantage -->
    <div class="shop-category">
      <h2>.༻ Formule Avantage ༺.</h2>
      <div class="product-grid">
        <ShopCard
          v-for="item in shopItems.filter((i) =>
            [
              '25 homes',
              'Téléportation',
              'Mariage',
              'Mini Bloc',
              'Double Salaire',
            ].includes(i.name)
          )"
          :key="item.name"
          :item="item"
          @add-to-cart="addToCart"
        />
      </div>
    </div>

    <!-- Catégorie : Services Premium -->
    <div class="shop-category">
      <h2>.༻ Services Premium ༺.</h2>
      <div class="product-grid">
        <ShopCard
          v-for="item in shopItems.filter((i) =>
            [
              'Achat de Cheval',
              'Pack Job',
              'Île Privée',
              'Kit Coach',
              'Kit Cavalier',
            ].includes(i.name)
          )"
          :key="item.name"
          :item="item"
          @add-to-cart="addToCart"
        />
      </div>
    </div>

    <!-- Catégorie : Dons -->
    <div class="shop-category">
      <h2>.༻ Dons ༺.</h2>
      <div class="product-grid">
        <ShopCard
          v-for="item in shopItems.filter((i) =>
            ['Donation', 'Carte Cadeau'].includes(i.name)
          )"
          :key="item.name"
          :item="item"
          @add-to-cart="addToCart"
        />
      </div>
    </div>

    <!-- Panier flottant -->
    <div class="cart-floating">
      <span>Panier</span>
      <span class="cart-count">{{ cart.length }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ShopCard from "~/components/ShopCard.vue";

const cart = ref([]);

const shopItems = [
  {
    name: "Kit Coach",
    price: 15,
    image: "/shopPicture/coach_kit.webp",
    category: "Packs",
  },
  {
    name: "Donation",
    price: "~",
    image: "/shopPicture/donation.webp",
    category: "Services",
  },
  {
    name: "Double Salaire",
    price: 5,
    image: "/shopPicture/double_salaire.webp",
    category: "Services",
  },
  {
    name: "Carte Cadeau",
    price: 10,
    image: "/shopPicture/gift_card.webp",
    category: "Packs",
  },
  {
    name: "25 homes",
    price: 10,
    image: "/shopPicture/home.webp",
    category: "Montures",
  },
  {
    name: "Achat de Cheval",
    price: 5,
    image: "/shopPicture/horse_purchase.webp",
    category: "Montures",
  },
  {
    name: "Pack Job",
    price: 2,
    image: "/shopPicture/job_purchase.webp",
    category: "Packs",
  },
  {
    name: "Mariage",
    price: 10,
    image: "/shopPicture/marriage.webp",
    category: "Services",
  },
  {
    name: "Mini Bloc",
    price: 7,
    image: "/shopPicture/mini_bloc.webp",
    category: "Divers",
  },
  {
    name: "500 Oryn",
    price: 5,
    image: "/shopPicture/money1.webp",
    category: "Divers",
  },
  {
    name: "2000 Oryn",
    price: 15,
    image: "/shopPicture/money2.webp",
    category: "Divers",
  },
  {
    name: "5000 Oryn",
    price: 30,
    image: "/shopPicture/money3.webp",
    category: "Divers",
  },
  {
    name: "Île Privée",
    price: 30,
    image: "/shopPicture/private_island.webp",
    category: "Montures",
  },
  {
    name: "Kit Cavalier",
    price: 7,
    image: "/shopPicture/rider_kit.webp",
    category: "Packs",
  },
  {
    name: "Téléportation",
    price: 5,
    image: "/shopPicture/teleportation.webp",
    category: "Services",
  },
];

const addToCart = (item) => {
  cart.value.push(item);
};
</script>

<style scoped>
h1,h2 {
  font-size: 70px;
  display: flex;
  justify-content: center;
  padding: 20px 0;
  font-family: "Mea Culpa", cursive;
}
.shop-category h2 {
  font-size: 50px;
  background-color: #e8e9d9;
}

.paragraph-container {
  margin: 0 300px;
}
.paragraph-espace {
  padding-top: 15px;
}
.shop-header {
  text-align: center;
  margin-bottom: 3rem;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 2rem;
  margin: 2em 0;
  justify-content: center;
  text-align: center;
}
.cart-floating {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: white;
  border: 2px solid #fed9b7;
  border-radius: 9999px;
  padding: 0.6rem 1rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.3s;
}
.cart-floating:hover {
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}
.cart-count {
  background-color: #f07167;
  color: white;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-size: 0.85rem;
}
</style>
