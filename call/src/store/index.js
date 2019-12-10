/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-10 20:35:18
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
//引入经销商列表
import CityList from './modules/cityList'
//引入城市数据
import CityDatas from './modules/cityDatas'
export default new Vuex.Store({
  modules: {
    home,
    pic,
    detail,
    cityName,
    CityList,
    CityDatas
  },  
  plugins:[createLogger()]
})
