/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-10 15:38:25
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
    path:"/img",
    name:"gopic",
    component:()=>import("../views/pic.vue")
  },
  {
    path:"/lowPrice",
    name:"lowPrice",
    component:()=>import("../views/lowerPrice/LowerPrice.vue")
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
