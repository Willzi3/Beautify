<template>
    <div>
        <h1>LOGIN</h1>
        <form @submit.prevent="login" class="login_form">
            <input type="text" v-model="email" placeholder="Email">
            <input type="text" v-model="password" placeholder="Password">
            <button type="submit">Login</button>
        </form>
        <div v-if="Users">
            Welcome {{ Users.FullName }}
        </div>
    </div>
</template>
<script>
export default {
    computed: {
        Users() {
            return this.$store.state.Users;
        }
    },
    data() {
        return{
            email: "",
            password: "",
        }
    },
    methods: {
        login() {
           this.$store.dispatch("login", { email: this.email, password: this.password })
        },
    },
};
</script>
<style>
</style>