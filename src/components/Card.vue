<template>
    <router-link :to="{name: 'products', params: {id: hair.id}}">
        <div class="card">
           <img :src="hair.img">
           <h1>{{ hair.name}}</h1>
        </div>
    </router-link>
</template>
<script>
export default {
    props: ['hair'],
}
</script>
<style lang="">
    /* .card img{
        width: 100px;
        height: 100px;
    } */
</style>