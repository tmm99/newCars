/*
<<<<<<< HEAD
 * @Author: your name
 * @Date: 2019-12-03 08:48:52
 * @LastEditTime: 2019-12-03 10:43:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \call\src\router\index.js
=======
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 10:42:22
 * @Description: 
>>>>>>> 0ccf2a91b114997ca269e9a2443fdaca3d49e5ee
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
<<<<<<< HEAD
import Detail from '../views/detail/Detail.vue'
=======

>>>>>>> 0ccf2a91b114997ca269e9a2443fdaca3d49e5ee
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
<<<<<<< HEAD
    path: '/detail',
    name: 'detail',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Detail
=======
    path: '/details',
    name: 'details',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/details.vue')
>>>>>>> 0ccf2a91b114997ca269e9a2443fdaca3d49e5ee
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
