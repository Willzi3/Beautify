<template>
<h1>Hair Service Providers</h1>
   <div class="card-display">
    <HairsCard v-for="hair in Hairs" :key="hair.id" :hair="hair" />
   </div>
</template>
<script>
import HairsCard from "../components/HairCard.vue";
export default {
  components: {HairsCard},
  data() {
    return {
        Hairs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/hair")
    .then((res) => res.json())
    .then((data) => (this.Hairs = data))
    .catch((err) => console.log(err.message))
  },
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
