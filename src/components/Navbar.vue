<template>
  <nav class="nav_bar" id="nav_bar">
    <h3 id="logo">Beautify</h3>
    <div class="nav_bar_links">
      <router-link class="nav-links" to="/">Home</router-link>
      <router-link class="nav-links" to="/about">About</router-link>
      <router-link class="nav-links" to="/contact">Contact</router-link>
      <router-link class="nav-links" to="/products">Products</router-link>
      <router-link class="nav-links" to="/bookings">Bookings</router-link>
      <!-- <router-link class="nav-links" to="/admin">Admin</router-link> -->
      <router-link class="nav-links" to="/login">Login</router-link>
    </div>
    <router-link v-if="!User" class="nav-links" to="/register"
      >Register</router-link
    >
    <router-link v-else class="nav-links" to="/user">My Profile</router-link>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  computed: {
    Users() {
      return this.$store.state.Users;
    },
  },
};
</script>
<style>
:root {
  --secondary-text-colour: #0b1108;
  --primary-text-colour: #c6c0b7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
  --heading-font: "Noto Serif Display", serif;
}
#logo {
  font-family: var(--heading-font);
}
.nav_bar {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 50;
  background-color: rgba(237, 20, 61, 0.5);
    padding-top: 60px;
}
.nav_bar_links {
  display: flex;
  justify-content: space-around;
  width: 30rem;
}
.nav-links {
  text-decoration: none;
  color: var(--heading-font);
}
nav a.router-link-exact-active {
  color: var(--hover-highlight) !important;
}
.nav-links:hover {
  color: var(--hover-highlight) !important;
}
</style>
<!-- <script>
function showNav()
{
let navBar = document.getElementById("nav_bar");
window.addEventListener("scroll", navBar(){navBar.setAttribute("opacity", "0");})

}
</script> -->
