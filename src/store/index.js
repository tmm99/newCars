/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-09 18:22:05
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
//引入详情
import detail from "./modules/detail";
//引入颜色
import hue from "./modules/hue";
//引入低价数据
import low from "./modules/low";
//城市数据
import city from "./modules/city";
export default new Vuex.Store({
  modules: {
    home,
    pic,
    detail,
    hue,
    low,
    city
  },  
  plugins:[createLogger()]
})
