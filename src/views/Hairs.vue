<template>
<h1>Hairs</h1>
  <div v-if="Hairs">
    <HairCard />
  </div>
</template>
<script>
export default {
    mounted() {
        this.$store.dispatch("getHairs");
    },
    computed: {
        Hairs() {
            return this.$store.state.Hairs;
        }
    },
    components: { HairCard }
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