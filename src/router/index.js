import { createRouter, createWebHistory } from 'vue-router'
import HealBoby from '../views/HealBoby.vue'
import HealPage from '../views/HealPage.vue'
import GameView from '../views/GameView.vue'
import PhotographyView from '../views/PhotographyView.vue'
import Product_Vue from '../views/Product_Vue.vue'
import cart_vue from '../views/Cart_Vue.vue'
import Product_Game from '../views/Product_Game.vue'
import Product_Photpgraphy from '../views/Product_Photpgraphy.vue'
import loginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import  HomeLogin from '../views/HomeLogin.vue'
import  homepage from '../views/HomePage.vue'
import  FoodHeal from '../views/FoodHeal.vue'
import  HospitelPage from '../views/HospitelPage.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/homelogin',
      name: 'HomeLogin',
      component: HomeLogin
    },
    {
      path: '/heal',
      name: 'healPage',
      component: HealPage
    },
    {
      path: '/GameView',
      name: 'GameView',
      component: GameView
    },
    {
      path: '/PhotographyView',
      name: 'PhotographyView',
      component: PhotographyView
    },
    {
      path: '/Product_Vue/:id',
      name: 'Product_Vue',
      component: Product_Vue
    },
    {
      path: '/cart_vue',
      name: 'cart_vue',
      component: cart_vue
    },
    {
      path: '/Product_Game/:id',
      name: 'Product_Game',
      component: Product_Game
    },
    {
      path: '/Product_Photpgraphy/:id',
      name: 'Product_Photpgraphy',
      component: Product_Photpgraphy
    },

    {
      path: '/loginPage',
      name: 'LoginPage',
      component: loginPage
    },

    {
      path: '/registerPage',
      name: 'RegisterPage',
      component: RegisterPage
    },

    {
      path: '/healboby',
      name: 'healboby',
      component: HealBoby
    },

    {
      path: '/',
      name: 'homepage',
      component: homepage
    },

    {
      path: '/foodHeal',
      name: 'FoodHeal',
      component: FoodHeal
    },
    {
      path: '/hospitelPage',
      name: 'hospitelPage',
      component: HospitelPage
    },

  ]
  
})

export default router
