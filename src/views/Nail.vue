<template>
  <div v-if="Nail">
    <h2>
      {{ Nail.role }}
    </h2>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    Nail() {
      return this.$store.state.Nail;
    },
  },
  mounted() {
    this.$store.dispatch("getNail", this.id)
  }
};
</script>

<style></style>
