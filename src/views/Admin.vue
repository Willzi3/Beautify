<template>
 <!-- <Card v-for="product in Products" :key="product.id" :product="product" /> -->
     <div class="table-responsive">
  <table class="table">
  <!-- <Heading>List of products</Heading> -->
  <thead>
    <tr>
      <th>#</th>
      <th >Name of the Product</th>
      <th >Price of the Product</th>
      <th >Catergory</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody  v-for="product in Products" :key="product.id" >
    <td>{{product.id}}</td>
     <td>{{product.name}} </td>
      <td>R{{product.price}} </td>
      <td>{{product.catergory}}</td>
      <td><button class="btn" @click="editProduct"><i class="fa fa-pen"></i></button> </td>
    <td><button class="btn" @click="deleteProduct(Product)"><i class="fa fa-trash"></i></button> </td>
   </tbody>
  </table>
  
</div>
<!-- Button trigger modal -->
<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="add(Product)">
 Add a Product
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel"> <box-icon name='store' type='solid' ></box-icon></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Id |</label>
            <input type="text" class="id" id="id" >
            </div>
             <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name of product |</label>
            <input type="text" class="product" id="product" >
             </div>
              <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Price |</label>
            <input type="text" class="price" id="price" >
            </div>


          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Catergory |</label>
            <select name="select" id="select">
              <option value="man's clothes"> Hair</option>
              <option value="woman's clothes"> Nails</option>
              </select>
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Add to the table</label>
          </div>
          <button type="submit" class="btn btn-warning" ><box-icon name='add-to-queue' ></box-icon></button>
        </form>
        </div>
      </div>
  </div>
</div>



</template>
<script>
import Card from "../components/Card.vue";
export default {
  components: { Card },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    Products() {
      return this.$store.state.Products
    }
  },
  methods: {
    deleteProduct(Products) {
        this.$store.dispatch('deleteProduct', Products);
    }
  }
};
</script>
<style scoped>
.card-display {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  padding: 2.5rem;
}

a {
  text-decoration: none;
  color: black;
}
.card {
  background: none;
}
img {
  width: 200px;
  height: 200px;
  border-radius: 10px;
}
h1 {
  font-size: 1.5rem;
  font-weight: bold;
  z-index: 10;
}
.btn-warning:hover {
    color: #f8f9fa;
    background-color: #ffca2c;
    border-color: #ffc720;
}
input{
    background-color:white;
}
.table-responsive{
    border: 1px solid black;
}
tbody{
    border: 1px solid black;
}
td{
    border:1px solid black;
}
th{
    border: 1px solid black;
    background: lightslategray;
}
</style>
