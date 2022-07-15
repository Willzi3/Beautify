<template>
   <div class="booking">
    <div class="booking_sections"></div>
    <div class="booking_sections"></div>
    <div class="booking_sections"></div>
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