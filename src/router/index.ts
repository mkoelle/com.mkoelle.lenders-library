import Vue from "vue"
import Router from "vue-router";

import HomePage from '@/home/HomePage.vue'
import CatalogPage from '@/catalog/CatalogPage.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      component: HomePage
    },
    {
      path:'/catalog',
      name:'Catalog',
      component: CatalogPage
    }
  ]
})