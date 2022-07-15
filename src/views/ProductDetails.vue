<template>
  <!-- <form class="filters">
    <select name="" id="">
      <label>Sort By</label>
      <option>hellow</option>
    </select>
  </form> -->
  <div v-if="Product" class="prod">
    <h2><img :src="Product.img" /></h2>
    <div class="description">
      <div class="prod_desc">
        <span>Name</span>
        <p>{{ Product.name }}</p>
      </div>
      <div class="prod_desc">
        <span>Price</span>
        <p>R{{ Product.price }}</p>
      </div>
      <div class="prod_desc">
        <span>Category</span>
        <p>{{ Product.catergory }}</p>
      </div>
      <p>
        Infused with a Vanilla scent, suitable for all hair types- our super
        nourishing formulas will give you that VITAMIN BOOST to your hair and
        scalp without weighing it down. Say goodbye to dull, lifeless hair and
        hello to revitalised, smooth, shiny locks! All while gently cleaning
        your hair and scalp developing an A+ scalp environment for better hair
        days. Hair conditioner that replenishes and restores damaged hair,
        leaves a glossy shine and makes your hair feel lightweight.
      </p>
      <div class="product_button">
        <button>Buy</button
        ><router-link to="/products" id="close_button"
          ><span><i class="fa-solid fa-xmark"></i></span
        ></router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  computed: {
    Product() {
      return this.$store.state.Product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.id);
  },
};
</script>
<style>
.prod {
  display: flex;
  gap: 2rem;
  padding: 4rem;
  justify-content: center;
}
.prod img {
  width: 400px;
}
.prod_desc {
    display: flex;
    gap: 20px;
}
.description {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 500px;
}
.product_button {
  display: flex;
  gap: 2rem;
  justify-content: space-around;
}
button {
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem;
  padding-inline: 1rem;
  background-color: crimson;
  color: var(--primary-text-colour);
}
#close_button {
    color: var(--secondary-text-colour);
}
</style>
