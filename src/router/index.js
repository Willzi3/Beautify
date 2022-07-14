import { createRouter, createWebHistory } from 'vue-router'


const routes = [
 
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../views/Services.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: () => import('../views/ProductDetails.vue'),
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue')
  },
  {
    path: '/nails',
    name: 'Nails',
    component: () => import('../views/Nails.vue')
  },
  {
    path: '/nails/:id',
    name: 'Nail',
    component: () => import('../views/Nail.vue'),
    props: true
  },
  {
    path: '/hair',
    name: 'Hairs',
    component: () => import('../views/Hairs.vue')
  },
  {
    path: '/hair/:id',
    name: 'Hair',
    component: () => import('../views/Hair.vue')
  },
  {
    path: '/facial:id',
    name: 'Facial',
    component: () => import('../views/Facial.vue')
  },
  {
    path: '/facial',
    name: 'Facial',
    component: () => import('../views/Facial.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
