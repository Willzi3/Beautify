<template>
    <div>
        <section id="category">
            <div class="categoryItem" id="categoryItem1">
               <router-link to="/nails">
                <button>
                    Nails
                </button>
               </router-link>
            </div>
            <div class="categoryItem" id="categoryItem2">
                <router-link to="/facial">
                <button>
                    Facials
                </button>
               </router-link>
            </div>
            <div class="categoryItem" id="categoryItem3">
                <router-link to="/hair">
                <button>
                    Hair
                </button>
               </router-link>
            </div>
        </section>
    </div>
</template>
<script>
export default {
}
</script>
<style>
#category {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 100vw;
    height: 100vh;
    gap: 1rem;
    padding: 20px;
}
.categoryItem {
    display: flex;
    justify-content: center;
    align-items: center;
}
.categoryItem button {
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem;
  background-color: crimson;
  color: var(--primary-text-colour);
  width: 4rem;
}
#categoryItem1 {
    background-image: url(../../images/nailscover.jpg);
    background-size: cover;
}
#categoryItem2 {
    background-image: url(../../images/image.jpg);
}
#categoryItem3 {
    background-image: url(../../images/haircover.jpg);
}
</style>