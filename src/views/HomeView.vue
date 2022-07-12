<template>
  <section>
    <form action="" class="login_form">
      <input type="text" placeholder="Full Name" /><input
        type="email"
        placeholder="Email"
      /><input type="password" placeholder="Password" /><button type="submit">
        Login
      </button>
      <p>Don't have an account?</p>
      <button>Sign-up</button>
    </form>
    <span></span>
  </section>
  <section id="pics">
    <div class="home">
      <div class="home-img">
        <img
          class="landing_image"
          src="../../images/oliver-johnson-yH0dth2yEQE-unsplash.jpg"
          alt=""
        />
        <p class="home-p">Face</p>
      </div>
      <div class="home-img">
        <img
          class="landing_image"
          src="../../images/kartik-gada--4iMX-4MIZ8-unsplash.jpg"
          alt=""
        />
        <p class="home-p">Nails</p>
      </div>
      <div class="home-img">
        <img
          class="landing_image"
          src="../../images/oleg-ivanov-Anf3n2ZEv-8-unsplash.jpg"
          alt=""
        />
        <p class="home-p">Hair</p>
      </div>
    </div>
  </section>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  padding-bottom: 100vh;
}
.nav_bar {
  z-index: -20;
  position: relative;
  background-color: crimson;
  opacity: 0.5;
  margin-top: 0;
  padding-top: 4rem;
}
section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

#pics {
  position: fixed;
  /*   z-index: -1; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  gap: 20px;
}
section:not(#pics) {
  background: crimson;
  opacity: 0.5;
  position: relative;
  z-index: 10;
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
.landing_image {
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
.col-12:hover {
  opacity: 0;
  transform: translateY(-100);
  transition: 3s;
}
.login_form {
  background: rgba(255, 255, 255, 0.47);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.6px);
  -webkit-backdrop-filter: blur(12.6px);
  border: 1px solid rgba(255, 255, 255, 0.23);

  align-self: baseline;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
}
input {
  border: none;
  border-radius: 0.5rem;
  background: black;
  opacity: 0.5;
  padding: 0.5rem;
}
button {
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem;
  background-color: crimson;
  color: var(--primary-text-colour);
}

@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300&display=swap");
</style>
<!-- <script>
window.addEventListener("scroll", () => {let cover = document.getElementsByClassName('col-12');
})
</script> -->
