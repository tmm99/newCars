/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-09 00:07:45
 * @Description: 
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('../views/detail/Detail.vue')
  },
  {
    path:"/lowerPrice",
    name:"gopic",
    component:()=>import("../views/pic.vue")
  },
  {
    path:"/lowPrice",
    name:"lowPrice",
    component:()=>import("../views/lowerPrice/LowerPrice.vue")
  },
  {
    path:"/cityName",
    name:"cityName",
    component:()=>import("../views/city/cityName.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
