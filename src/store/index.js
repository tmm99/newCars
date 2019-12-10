/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-10 16:18:10
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
//引入城市
import cityName from './modules/cityName'
//引入城市列表
import CityList from './modules/cityList'
//颜色数据
import hue from "./modules/hue";
export default new Vuex.Store({
  modules: {
    home,
    pic,
    detail,
    cityName,
    CityList,
    hue
  },  
  plugins:[createLogger()]
})
