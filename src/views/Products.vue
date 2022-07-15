<template>
  <div class="product_manipulation">
    <div class="dropdown">
      <span>Filter<i class="fa-solid fa-filter"></i></span>
      <div class="dropdown-content">
        <p>Nails</p>
        <p>hair</p>
        <p>Facials</p>
      </div>
    </div>
    <div class="dropdown">
      <span>Sort<i class="fa-solid fa-sort"></i></span>
      <div class="dropdown-content">
        <p>Ascending<i class="fa-solid fa-arrow-down-a-z"></i></p>
        <p>Descending<i class="fa-solid fa-arrow-down-z-a"></i></p>
      </div>
    </div>
    <div class="search_bar">
      <input type="text" placeholder="search product" class="search_input" />
      <i class="fa-solid fa-magnifying-glass icon"></i>
    </div>
  </div>
  <div v-if="Products" class="card_display">
    <Card v-for="Product in Products" :key="Product.id" :Product="Product" />
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
      return this.$store.state.Products;
    },
  },
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
}
.search_input {
  width: 7rem;
  border: none;
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
.dropdown-content p:hover {
  color: var(--hover-highlight);
}
.dropdown:hover .dropdown-content {
  display: block;
}
.product_manipulation {
  display: flex;
  width: 30%;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  padding-inline: 9rem;
}
</style>
