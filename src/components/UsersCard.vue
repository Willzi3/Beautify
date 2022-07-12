<template>
 
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
:root {
  --secondary-text-colour: #0b1108;
  --primary-text-colour: #c6c0b7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
}
.product_title {
  font-family: "Source Sans Pro", sans-serif;
  color: var(--primary-text-colour);
}
.product_img:hover {
  width: 120%;
  height: auto;
  transition: 3s;
}
.product_img {
  transition: 3s;
}
.product_box {
  width: 12rem;
  background: none;
  border: none;
}
.card {
  background: none;
}
i{
  padding-top: 20px;

}
</style>