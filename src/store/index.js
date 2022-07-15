import { createStore } from "vuex";
import router from "@/router/index";
export default createStore({
  state: {
    Users: null,
    Nail: null,
    Nails: null,
    Products: null,
    Product: null,
    asc: true,
  },
  mutations: {
    setProduct: (state, Product) => {
      state.Product = Product;
    },
    setProducts: (state, Products) => {
      state.Products = Products;
    },
    setusers: (state, Users) => {
      state.Users = Users;
    },
    setNail: (state, Nail) => {
      state.Nail = Nail;
    },
    setNails: (state, Nails) => {
      state.Nails = Nails;
    },
    setHair: (state, Hair) => {
      state, (Hair = Hair);
    },
    setHairs: (state, Hairs) => {
      state, (Hairs = Hairs);
    },
    setFacial: (state, Facial) => {
      state, (Facial = Facial);
    },
    setFacials: (state, Facials) => {
      state, (Facials = Facials);
    },
    sortByPrice: (state) => {
      state.Products.sort((a, b) => {
        return a.price - b.price; //like vanilla javascript, this is how you make a sort function
      });
      if (!state.asc) {
        //if the asc is not true, it reverses the current order of the list
        state.Products.reverse(); // reverts the order
      }
      state.asc = !state.asc; //states that when the function is run, asc becomes false instead of true
    },
  },
  actions: {
    login: async (context, data) => {
      const { email, password } = data;
      const response = await fetch(
        `http://localhost:3000/users?email=${email}&password=${password}`
      );
      const usersData = await response.json();
      console.log(usersData);
      router.push({
        name: "home",
      });
      context.commit("setusers", usersData[0]);
    },
    register: async (context, data) => {
      const { FullName, email, password } = data;
      fetch("http://localhost:3000/users", {
        method: "POST",
        body: JSON.stringify({
          FullName: FullName,
          email: email,
          password: password,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => context.commit("setusers", json));
      router.push({
        name: "Login",
      });
    },
    getNail: async (context, id) => {
      fetch(" http://localhost:3000/Nails/" + id)
        .then((res) => res.json())
        .then((Nail) => context.commit("setNail", Nail));
    },
    getNails: async (context) => {
      fetch(" http://localhost:3000/Nails")
        .then((res) => res.json())
        .then((Nails) => context.commit("setNails", Nails));
    },
    getHair: async (context, id) => {
      fetch(" http://localhost:3000/Hairs/" + id)
        .then((res) => res.json())
        .then((Hair) => context.commit("setHair", Hair));
    },
    getHairs: async (context) => {
      fetch(" http://localhost:3000/Hairs")
        .then((res) => res.json())
        .then((Hairs) => context.commit("setHairs", Hairs));
    },
    getFacial: async (context, id) => {
      fetch(" http://localhost:3000/Facials/" + id)
        .then((res) => res.json())
        .then((Facial) => context.commit("setFacial", Facial));
    },
    getFacials: async (context) => {
      fetch(" http://localhost:3000/Facials")
        .then((res) => res.json())
        .then((Facials) => context.commit("setFacials", Facials));
    },
    getProduct: async (context, id) => {
      fetch(" http://localhost:3000/Products/" + id)
        .then((res) => res.json())
        .then((Product) => context.commit("setProduct", Product));
    },
    getProducts: async (context) => {
      fetch(" http://localhost:3000/Products")
        .then((res) => res.json())
        .then((Products) => context.commit("setProducts", Products));
    },
    DeleteProduct: async (context, id) => {
      fetch(" http://localhost:3000/Products/" + id)
        .then((res) => res.json())
        .then((Products) => context.commit("DeleteProduct", Products));
    },
  },
  modules: {},
});
