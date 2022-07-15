<template>
        <section class="book">
          <div class="catergoryItem">
              <input type="date">
               <input type="time">
               <router-link to="/categories">
                <button id="booking_button">
                    Book
                </button>
               </router-link>
            </div>
        </section >
</template>
<script>
export default {
}
</script>
<style scoped>
:root {
  --secondary-text-colour: #0b1108;
  --primary-text-colour: #c6c0b7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
  --heading-font: "Noto Serif Display", serif;
}
    .book{
        display: flex;
        justify-content: center;
        height: 100vh;
        background-image: url(../../images/facial.jpg);
        background-size: cover;
    }
    .bookBtn{
        width: 200px;
        height: 200px;
        border-radius: 10px;
    }
    .catergoryItem{
        display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px;
    align-self: center;
    }
    .catergoryItem input {
        width: 100%;
    }
    .catergory{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
    }
    .serviceProviders{
        border: 1px solid black;
    }
    #booking_button {
        border: none;
    padding: 0.2rem;
    width: 80px;
    border-radius: 10px;
    background: crimson;
    }
    input {
  border: none;
  border-radius: 0.5rem;
  opacity: 0.5;
  padding: 0.5rem;
  caret-color: var(--primary-text-colour);
  color: var(--primary-text-colour);
}
button {
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem;
  background-color: crimson;
  color: var(--primary-text-colour);
}
</style>
