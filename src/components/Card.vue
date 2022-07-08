<template>
    <router-link :to="{name: 'products', params: {id: product.id}}">
        <div class="card">
           <img :src="product.img">
           <h1>{{ product.name}}</h1>
        </div>
    </router-link>
</template>
<script>
export default {
    props: ['product'],
}
</script>
<style lang="">
    /* .card img{
        width: 100px;
        height: 100px;
    } */
</style>