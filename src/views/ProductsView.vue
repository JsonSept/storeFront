<template>
    <div class="products-page">
      <h2>Our Products</h2>
      
      <div class="product-card" v-for="product in products" :key="product.id">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p class="product-description">{{ product.desc }}</p>
          <p class="product-price">{{ product.price }}</p>
          <button @click="addToCart(product.id)" class="add-to-cart-button">Add to Cart</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        products: false,
        image: null,
        name: null,
        description: null,
        price: null,
      };
    },
    methods: {
      addToCart(productId) {
        
        console.log(`Product ${productId} added to cart`);
      },
      computed: {
        
      }
    },
  };
  </script>
  
  <style scoped>
  .products-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .product-card {
    display: flex;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-bottom: 20px;
  }
  
  .product-image {
    width: 150px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px 0 0 5px;
  }
  
  .product-details {
    padding: 10px;
  }
  
  .product-details h3 {
    margin-bottom: 10px;
  }
  
  .product-description {
    margin-bottom: 10px;
  }
  
  .product-price {
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .add-to-cart-button {
    background-color: #4caf50;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .add-to-cart-button:hover {
    background-color: #45a049;
  }
  </style>
  