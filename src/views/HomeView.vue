<template>
  <div class="home">
    <div class="home-img">
      <img src="../../images/oliver-johnson-yH0dth2yEQE-unsplash.jpg" alt="" />
      <p class="home-p">Face</p>
    </div>
    <div class="home-img">
      <img src="../../images/kartik-gada--4iMX-4MIZ8-unsplash.jpg" alt="" />
      <p class="home-p">Nails</p>
    </div>
    <div class="home-img">
      <img src="../../images/oleg-ivanov-Anf3n2ZEv-8-unsplash.jpg" alt="" />
      <p class="home-p">Hair</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  // mounted({
  //   fetch("")
  //   .then(res => res.json())
  //    .then((data) => (this.hair =data))
  //       .catch(err => console.log(err.message))
  // })
};
</script>
<style>
:root {
  --secondary-text-colour: #0b1108;
  --primary-text-colour: #c6c0b7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
}
.home {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: baseline;
  gap: 40px;
  margin-top: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  padding: 10%;
}
img {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.home-img {
  position: relative;
}
.home-p {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Source Sans Pro", sans-serif;
  color: var(--primary-text-colour);
}
body {
  background-color: black;
  font-family: "Source Sans Pro", sans-serif;
}

@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");
</style>
