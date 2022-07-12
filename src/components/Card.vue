<template>
  <router-link
    class="product_box"
    :to="{ name: 'products', params: { id: product.id } }"
  >
    <div class="card">
      <img class="product_img" :src="product.img" />
      <p class="product_title">{{ product.name }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
:root {
  --secondary-text-colour: #0b1108;
  --primary-text-colour: #c6c0b7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
}
.product_title {
  font-family: "Source Sans Pro", sans-serif;
  color: var(--primary-text-colour);
}
.product_img:hover {
  width: 120%;
  height: auto;
  transition: 3s;
}
.product_img {
  transition: 3s;
}
.product_box {
  width: 12rem;
  background: none;
  border: none;
}
.card {
  background: none;
}
</style>
