<template>
  <!-- zach  -->

  <form class="filters">
    <!-- <button @click="sort">Price</button> -->
    <div class="category_filter">
      <p id="filter_text">Filter<i class="fa-solid fa-filter"></i></p>
      <select name="" class="inp" v-model="catergory">
        <label>Sort By Catergory</label>
        <option value="All" selected>All</option>
        <option value="Nails">Nail</option>
        <option value="Hair">Hair</option>
        <option value="Face">Facial</option>
      </select>
    </div>
    <div class="search_bar">
      <input
        type="text"
        v-model="search"
        placeholder="search..."
        class="search_input"
      />
      <i class="fa-solid fa-magnifying-glass icon"></i>
    </div>
    {{ search }}
  </form>
  <div v-if="Products" class="card_display">
    <Card
      v-for="Product of filteredProducts"
      :key="Product.id"
      :Product="Product"
    />
  </div>
</template>
<script>
import Card from "../components/Card.vue";
export default {
  data() {
    return {
      search: "",
      price: "All",
      catergory: "All",
      // filteredProducts: [...this.Products]
    };
  },
  computed: {
    Products() {
      return this.$store.state.Products;
    },
    filteredProducts() {
      return this.$store.state.Products?.filter((Product) => {
        let isMatch = true;
        if (!Product.name.toLowerCase().includes(this.search.toLowerCase()))
          isMatch = false;

        if (this.catergory !== "All" && Product.catergory !== this.catergory)
          isMatch = false;
        return isMatch;
        // return Product.name.toLowerCase().includes(this.search.toLowerCase())
      });
    },
  },
  methods: {
    sort() {
      this.$store.commit("sortByPrice");
    },
  },
  components: { Card },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style scoped>

.category_filter {
  display: flex;
   border: solid beige;
  border-radius: 10px;
  width: 12rem;
  height: 2rem;
  justify-content: space-evenly;
}
.inp {
align-self: flex-end;
  border: none;
}
.card_display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2.5rem;
}
.category_dropdown_button {
  border: none;
}
a {
  text-decoration: none;
  color: black;
}
i {
  padding: 10px;
}
.icon {
}
.search_bar {
  position: relative;
  border: solid beige;
  border-radius: 10px;
  width: 12rem;
  height: 2rem;
}
.search_input {
  width: 7rem;
  border: none;
}
.card {
  background: none;
}
.card {
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
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 10px;
}
.dropdown-content li {
  list-style: none;
}
.dropdown-content li:hover {
  color: var(--hover-highlight);
}
.dropdown:hover .dropdown-content {
  display: block;
}
.filters {
  margin-inline: 20%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 2rem;
}
</style>
