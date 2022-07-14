<template>
<div>
  
</div>
 <div v-if="Products" class="card_display">
  <Card
   v-for="Product in Products" 
   :key="Product.id" 
   :Product="Product"/>

  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  components: { Card },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    Products() {
      return this.$store.state.Products
    }
  }
};
</script>
<style scoped>
.card_display {
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
