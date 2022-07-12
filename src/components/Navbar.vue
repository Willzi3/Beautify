<template>
  <nav class="nav_bar" id="nav_bar">
    <h3 id="logo">Curl Me Crazy</h3>
    <div class="nav_bar_links">
      <router-link class="nav-links" to="/home">Home</router-link>
      <router-link class="nav-links" to="/about">About</router-link>
      <router-link class="nav-links" to="/contact">Contact</router-link>
      <router-link class="nav-links" to="/services">Services</router-link>
      <!-- <router-link class="nav-links" to="/admin">Admin</router-link> -->
      <router-link class="nav-links" to="/products">Products</router-link>
    </div>
    <router-link v-if="!User">Register</router-link>
    <router-link class="nav-links" to="/products" id="my_profile" v-else
      >My Profile
      <ul class="profile_options">
        <li class="profile_links">My Profile</li>
        <li class="profile_links">Settings</li>
        <li class="profile_links">Logout</li>
      </ul>
    </router-link>
  </nav>
  <router-view />
</template>
<script>
import { userInfo } from 'os'

export default {
  name: "Navbar",
  component {
    user(){
      return.this$store.state.user
    }
  }
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
  color: var(--secondary-text-colour) !important;
}
.nav-links:hover {
  color: var(--secondary-text-colour) !important;
}
li {
  list-style: none;
}
#my_profile {
  position: relative;
}
#my_profile:hover .profile_options {
  display: block;
  background: var(--hover-highlight);
  border-radius: 10px;
  padding: 20px;
  color: var(--primary-text-colour);
  width: 8rem;
}
.profile_options {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
}
.profile_links:hover {
  color: var(--secondary-text-colour);
}
</style>
<!-- <script>
function showNav()
{
let navBar = document.getElementById("nav_bar");
window.addEventListener("scroll", navBar(){navBar.setAttribute("opacity", "0");})

}
</script> -->
