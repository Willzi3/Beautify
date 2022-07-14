<template lang="">
    <div>
       
        <section class="book">
            <h1>Booking</h1>
        <a href="#catergory">
             <button class="bookBtn">
                book
            </button>
        </a>
        </section >
        <!-- <section id="catergory">
            <div class="catergoryItem">
               <router-link to="/nails">
                <button>
                    Nails
                </button>
               </router-link>
            </div>
            <div class="catergoryItem">
                <router-link to="/hair">
                <button>
                    Hair
                </button>
               </router-link>
            </div>
            <div class="catergoryItem">
                <router-link to="/facial">
                <button>
                    Facials
                </button>
               </router-link>
            </div> -->
        <!-- </section> -->
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .book{
        border: 1px solid black;
        margin-bottom: 10px;
        display: flex;
        flex-direction: column;
    }
    .bookBtn{
        width: 200px;
        height: 200px;
    }
    #catergory{
        border: 1px solid black;
    }
    .catergoryItem{
        border:1px solid black;
        width: 200px;
        height: 200px;
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
</style>