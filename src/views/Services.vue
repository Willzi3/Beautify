<template>
  <div class="card-display">
    <UsersCard v-for="user in Users" :key="user.id" :user="user" />
    
  

  </div>
</template>
<script>
import UsersCard from "../components/UsersCard.vue";
export default {
  components: { UsersCard },
  data() {
    return {
      Users: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/Users")
      .then((res) => res.json())
      .then((data) => (this.Users = data))
      .catch((err) => console.log(err.message));
  },
};
</script>
<style scoped>
.card-display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2.5rem;
}

/* a {
  text-decoration: none;
  color: black;
} */
.card {
  background: none;
}
.card:hover {
  background: black;
  color: white;
  box-shadow: 5px 5px 5px 5px lightslategray;
}
/* img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
} */
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;
}
p{
    color:white;
}

</style>
