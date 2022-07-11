<template>
   <div class="card-display">
   <Card v-for="hair in hairs" :key="hair.id " :hair="hair"/>
   </div>
   
</template>
<script>
import Card from "../components/Card.vue"
export default {
    components: {Card},
    data() {
         return {
        hairs:[],
    }
    },
    mounted(){
        fetch("http://localhost:3000/hairs")
        .then((res) => res.json())
        .then((data) => (this.hairs = data))
        .catch(err => console.log(err.message))
        }
    }
   
</script>
<style>
    
</style>