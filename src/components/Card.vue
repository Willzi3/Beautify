<template>
  <router-link
    class="product_box"
    :to="{ name: 'ProductDetails', params: { id: Product.id } }"
  >
    <div class="card">
      <img class="product_img" :src="Product.img" />
      <p class="product_title">{{ Product.name }}</p>
       <p class="product_price">R{{ Product.price }}</p>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["Product"],
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
  color: var(--secondary-text-colour);
}
.product_img {
  width: 200px;
  height: 200px;
  transition: 0.1s all ease-in-out;
  border-radius: 5px;
}
.product_box {
  width: 13rem;
  background: none;
  border: none;
}
.card{
  width: 200px;
  background: none;
  border: none;
}
.card:hover {
  display: flex;
  /* justify-content: center;
  align-items: center; */
  border: none;
  box-shadow: 5px 5px 5px 5px #cfa982;
  
 
  
}
.card-display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2.5rem;
}
.prods{
  display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    align-content: center;
    margin-inline: 5%;
    background: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: #cfa982 4px 4px 4px 4px;
    margin-bottom: 20px;
}
</style>
