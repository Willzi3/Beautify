<template>
<h1>Facial Service Providers</h1>
   <div class="card-display">
    <FacialCard v-for="facial in Facials" :key="facial.id" :facial="facial" />
   </div>
</template>
<script>
import FacialCard from "../components/FacialCard.vue";
export default {
  components: {FacialCard},
  data() {
    return {
        Facials: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Facial")
    .then((res) => res.json())
    .then((data) => (this.Facials = data))
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