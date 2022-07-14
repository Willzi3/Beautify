<template>
    <div v-if="Product" class="prod">
       <h2><img :src="Product.img"></h2>
       <p>{{ Product.name}}</p>
       <p>{{ Product.price}}</p>
       <p>{{ Product.catergory}}</p>
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
    this.$store.dispatch("getProduct", this.id)
   }
}
</script>
<style>
    .prodImg img{

        width: 500px;
    }
</style>