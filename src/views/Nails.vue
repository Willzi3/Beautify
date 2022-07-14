<template>
<h1>Nails</h1>
  <div v-if="Nails">
  <NailsCard
   v-for="Nail in Nails" 
   :key="Nail.id" 
   :Nail="Nail"/>

  </div>
</template>
<script>
import NailsCard from "../components/NailsCard.vue";
export default {
  components: {NailsCard},

  mounted() {
    this.$store.dispatch("getNails");
  },

  computed: {
    Nails() {
      return this.$store.state.Nails
    }
  }

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