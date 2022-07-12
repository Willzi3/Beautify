<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  // mounted({
  //   fetch("")
  //   .then(res => res.json())
  //    .then((data) => (this.hair =data))
  //       .catch(err => console.log(err.message))
  // })
}
</script>
