<template>
 <router-link :to="{name:'Hairs', params: {id:Hairs.id}}">
  <h2>
      {{ Hairs.role }}
    </h2>
 </router-link>
</template>
<script>
export default {
  props: ["Hairs"],

};
</script>
<style>
:root {
  --secondary-text-colour: #0B1108;
  --primary-text-colour: #C6C0B7;
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