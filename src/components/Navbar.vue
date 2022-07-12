<template>
  <nav class="nav_bar" id="nav_bar">
    <h3 id="logo">Curl Me Crazy</h3>
    <div class="nav_bar_links">
      <router-link class="nav-links" to="/home">Home</router-link>
      <router-link class="nav-links" to="/about">About</router-link>
      <router-link class="nav-links" to="/contact">Contact</router-link>
      <router-link class="nav-links" to="/services">Services</router-link>
      <!-- <router-link class="nav-links" to="/admin">Admin</router-link> -->
      <router-link class="nav-links" to="/login">Login</router-link>
    </div>
    <router-link class="nav-links" to="/register">Register</router-link>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style>
:root {
  --secondary-text-colour: #0b1108;
  --primary-text-colour: #c6c0b7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
}
#logo {
  color: var(--primary-text-colour) !important;
  font-family: "Source Sans Pro", sans-serif;
}
.nav_bar {
  display: flex;
  justify-content: space-evenly;
  margin-top: 40px;
}
.nav_bar_links {
  display: flex;
  justify-content: space-around;
  width: 30rem;
}
.nav-links {
  text-decoration: none;
  color: var(--primary-text-colour) !important;
  font-family: "Source Sans Pro", sans-serif;
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
