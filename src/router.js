/*
  W pliku src
            |-------router.js
            Określamy jakie ścieżki są możliwe w aplikacji
            Oraz jakie komponenty ładujemy

  DO ROUTERA IMPORTOWANE SA CAŁE WIDOKI "STRONY"
  A NIE KOMPONENTY
*/

import { createRouter, createWebHistory } from 'vue-router'

/* 
  Aplikacja używa dwóch stron:
  - strona główna
  - strona kontakt
*/

/* Strona główna */
import HomeView from './views/HomeView.vue'

/* Strona kontakt */
import AdminAddPostView from './views/AdminAddPostView.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/addPost',
      component: AdminAddPostView,
    }
  ]
})