<template>
 <form class="filters">
    <!-- <select name="" class="inp" v-model="price">
        <label>Sort By Price</label>
        <option value="All" selected>All</option>
        <option value="100">R100</option>
        <option value="200">R200</option>
        <option value="250">R250</option>
    </select> -->
    <button @click="sort">Sort</button>
    <select name="" class="inp" v-model="Catergory">
        <label>Sort By Catergory</label>
        <option value="All" selected>All</option>
        <option value="Nails">Nail</option>
        <option value="Hair">Hair</option>
        <option value="Facial">Facial</option>
    </select>
    <input type="text" v-model="search" placeholder="search..."  class="inp" />
    {{ search }}
</form>
 <div v-if="Products" class="prods">
  <Card
   v-for="Product of filteredProducts" 
   :key="Product.id" 
   :Product="Product"/>

  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  data() {
    return{
      search: "",
      price: "All",
      catergory: "All"
      // filteredProducts: [...this.Products]
    }
  },
  computed: {
    Products() {
      return this.$store.state.Products
    },
  filteredProducts() {
    return this.$store.state.Products?.filter((Product) => {
      let isMatch = true;
      if (!Product.name.toLowerCase().includes(this.search.toLowerCase())) isMatch = false

      if(this.catergory !== "All" && Product.catergory !== this.catergory)
      isMatch = false;
      return isMatch
      // return Product.name.toLowerCase().includes(this.search.toLowerCase())
    });
  },
  },
  methods: {
sort() {
  this.$store.commit("sortByPrice");
}
  },
  components: { Card },
  mounted() {
    this.$store.dispatch("getProducts");
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
  margin-inline: 20%;
  height: 100px;
  display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-bottom: -20px;
    border-radius: 10px;
    background: #cfa982;
}
.inp {
  border: none;
    border-radius: 5px;
    height: 30px
}
</style>
