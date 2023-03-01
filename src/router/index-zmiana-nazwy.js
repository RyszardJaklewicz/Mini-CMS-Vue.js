import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import About from '../views/AboutView.vue'

const routes = [
  {
    path: '/x',
    name: 'homex',
    component: HomeView,
  },
  {
    path: '/aboutxxx',
    name: 'aboutddd',
    component: About,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
