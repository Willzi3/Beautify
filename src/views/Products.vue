<template>
  <div class="card-display">
    <Card v-for="product in Products" :key="product.id" :product="product" />
    <p></p>
  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      Products: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => (this.Products = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style scoped>
.card-display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2.5rem;
}

a {
  text-decoration: none;
  color: black;
}
.card {
  background: none;
}
/* .card:hover { */
  /* background: black;
  color: white;
  box-shadow: 5px 5px 5px 5px lightslategray; */
/* } */
img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;
}
</style>
