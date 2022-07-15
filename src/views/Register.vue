<template>
  <section id="register_section">
    <div>
      <form @submit.prevent="register" class="login_form">
        <input type="text" v-model="FullName" placeholder="Full Name" />
        <input type="text" v-model="email" placeholder="Email" />
        <input type="text" v-model="password" placeholder="Password" />
        <button type="submit">Register</button>
        <p>Already a member?</p>
        <router-link to="/Login"
          ><button style="padding-inline: 5px">Login</button></router-link
        >
      </form>
      <div v-if="Users">Welcome {{ Users.FullName }}</div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      FullName: "",
      email: "",
      password: "",
    };
  },
  computed: {
    Users() {
      return this.$store.state.Users;
    },
  },
  methods: {
    register() {
      return this.$store.dispatch("register", {
        FullName: this.FullName,
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>
<style>
:root {
  --secondary-text-colour: #0b1108;
  --primary-text-colour: #c6c0b7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
  --heading-font: "Noto Serif Display", serif;
}
#register_section {
  display: flex;
  justify-content: center;
}
.login_form {
  background: rgba(255, 255, 255, 0.47);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(12.6px);
  -webkit-backdrop-filter: blur(12.6px);
  border: 1px solid rgba(255, 255, 255, 0.23);
  align-self: baseline;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  width: 22rem;
  margin-top: 2rem;
}
input {
  border: none;
  border-radius: 0.5rem;
  background: black;
  opacity: 0.5;
  padding: 0.5rem;
  caret-color: var(--primary-text-colour);
  color: var(--primary-text-colour);
}
button {
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem;
  padding-inline: 1rem;
  background-color: crimson;
  color: var(--primary-text-colour);
}
</style>
