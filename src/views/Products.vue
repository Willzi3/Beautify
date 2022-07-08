<template>
   <div class="card-display">
   <Card v-for="product in Products" :key="product.id " :product="product"/>
   <p></p>
   </div>
   
</template>
<script>
import Card from "../components/Card.vue"
export default {
    components: {Card},
    data() {
         return {
        Products:[],
    }
    },
    mounted(){
        fetch("http://localhost:3000/products")
        .then((res) => res.json())
        .then((data) => (this.Products = data))
        .catch(err => console.log(err.message))
        }
    }
   
</script>
<style>
.card-display{
display: flex;
flex-wrap: wrap;
justify-content: center;
align-items: center;
gap: 10px;
}

a {
    text-decoration: none;
    color: black;
}
    .card{
        border: 1px solid black;
        width: 300px;
        height: 300px;
    }
</style>