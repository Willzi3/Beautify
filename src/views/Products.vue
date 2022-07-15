<template>
 <h1>Products</h1>
 <form class="filters">
    <select name="" id="">
        <label>Sort By</label>
        <option>Price</option>
        <option>catergory</option>
    </select>
</form>
 <div v-if="Products" class="prods">
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
.card{
  width: 200px;
}
/* .card:hover { */
  /* background: black;
  color: white;
  box-shadow: 5px 5px 5px 5px lightslategray; */
/* } */
/* img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
} */
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;
}
.filters{
  border: 1px solid black;
  margin-inline: 20%;
  height: 100px;
}
</style>
