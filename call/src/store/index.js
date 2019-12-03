<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
=======
/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-02 19:36:17
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger  from"vuex/dist/logger"
Vue.use(Vuex)

import home from "./modules/home"

export default new Vuex.Store({
  modules: {
    home
  },  
  plugins:[createLogger()]
>>>>>>> 0ccf2a91b114997ca269e9a2443fdaca3d49e5ee
})
