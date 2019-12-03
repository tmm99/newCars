/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 19:04:12
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger  from"vuex/dist/logger"
Vue.use(Vuex)
//引入hom
import home from "./modules/home";
//引入pic
import pic from "./modules/pic";
export default new Vuex.Store({
  modules: {
    home,
    pic
  },  
  plugins:[createLogger()]
})
