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
gap: 20px;
}

a {
    text-decoration: none;
    color: black;
}
    .card{
        width: 300px;
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
       box-shadow: 5px 5px 5px 5px;
    }
    .card:hover {
        background: black;
        color: white;
        box-shadow: 5px 5px 5px 5px lightslategray;
    }
    img{
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }
    h1{
        font-size: 1.5rem;
        font-weight: bold;
    }
    .productDetails{
        display: flex;
        flex-direction: column;
        height: 400px;
        width: 500px;
    border: 1px solid black;
    }

    .prod .container {
    height: 70vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 10px;
    }
    .btn{
        width: 500px;
        border: 1px solid black;
    }
</style>