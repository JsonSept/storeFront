import { createRouter, createWebHistory } from 'vue-router'
import SignupView from '../views/SignupView.vue'

const routes = [
  {
    path: '/',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/ProductsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
