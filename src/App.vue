<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="#" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </router-link>
      <router-link to="views/products.html" class="top-bar-link">
        <span>Products</span>
      </router-link>
      <router-link to="views/past-orders.html" class="top-bar-link">
        <span>Past Orders</span>
      </router-link>
    </nav>
    <!-- <router-link @click="toggleSideBar" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ totalQuantity }})</span>
    </router-link> -->
  </header>

  <!-- Router View Component -->
  <router-view/>

</template>
