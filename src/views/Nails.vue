<template>
<h1>Nail Service Providers</h1>
   <div class="card-display">
    <NailsCard v-for="nail in Nails" :key="nail.id" :nail="nail" />
   </div> 
</template>
<script>
import NailsCard from "../components/NailsCard.vue";
export default {
  components: {NailsCard},
  data() {
    return {
        Nails: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/nails")
    .then((res) => res.json())
    .then((data) => (this.Nails = data))
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