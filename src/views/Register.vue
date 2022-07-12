<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="register" class="login_form">
            <input type="text" v-model="FullName" placeholder="Full Name">
            <input type="text" v-model="email" placeholder="Email">
            <input type="text" v-model="password" placeholder="Password">
            <button type="submit">Register</button>
        </form>
         <div v-if="Users">
            
            <router-link to="/">
                Welcome {{ Users.FullName }}
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            FullName: "",
            email: "",
            password: "",
        }
    },
    computed: {
        Users() {
            return this.$store.state.Users
        }
    },
    methods: {
        register() {
           return this.$store.dispatch("register", {FullName: this.FullName, email: this.email, password: this.password} )
    },
}
}
</script>
<style>
</style>