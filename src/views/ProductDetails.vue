<template>
    <div v-if="product" class="prod">
        <!-- <h1>This is product Details</h1> -->
        <!-- <p>The Job id is {{ $route.params.id}}</p> -->
           <div class="container">
            <img class="prodImg" :src="product.img" />
            <div class="productDetails">
            <h1>{{ product.catergory }}</h1>
            <h1>{{ product.name }}</h1>
            <h1>R{{ product.price }}</h1>
            
            </div>
            <button type="submit" class="btn">Add to Cart</button>
           </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            // id: this.$route.params.id
        product: null
        }
    },
    mounted() {
    fetch("http://localhost:3000/products/" + this.$route.params.id)
    .then (res  => res.json())
    .then (data => {
        this.product = data
        console.log(data)
        })
    }
}
</script>
<style>
    .prodImg img{

        width: 500px;
    }
</style>