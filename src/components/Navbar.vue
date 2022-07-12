<template>
        <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
     <router-link to="/contact">Contact</router-link> |
      <router-link to="/services">Services</router-link> |
       <router-link to="/admin">Admin</router-link> |
        <router-link to="/products">Products</router-link>
  </nav>
  <router-view/>
</template>
<script>
export default {
    name: "Navbar"
}
</script>
<style>
    
</style>