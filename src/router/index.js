import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Products from "../views/Products.vue";
import ProductDetails from "../views/ProductDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/bookings",
    name: "bookings",
    component: () => import("../views/Bookings.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/Admin.vue"),
  },
  {
    path: "/products/:id",
    name: "ProductDetails",
    component: () => import("../views/ProductDetails.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/nails",
    name: "Nails",
    component: () => import("../views/Nails.vue"),
  },
  {
    path: "/hair",
    name: "Hair",
    component: () => import("../views/Hair.vue"),
  },
  {
    path: "/facial",
    name: "Facial",
    component: () => import("../views/Facial.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
