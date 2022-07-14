<template>
<h1></h1>
    <div class="card">
     <i class="fa-solid fa-user"></i>
      <p class="user_fullname">{{ user.Fullname }}</p>
      <p class="user_email">{{ user.email }}</p>
      <p class="user_role">{{ user.role}}</p>
       <p class="contact">{{ user.call}}</p>
    </div>
</template>
<script>
export default {
  props: ["user"],
};
</script>
<style>
/* :root {
  --secondary-text-colour: #0B1108;
  --primary-text-colour: #C6C0B7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
} */

</style>