/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-16 15:58:17
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
//引入详情
import detail from "./modules/detail";
//引入城市
import cityName from './modules/cityName'
//引入经销商列表
import CityList from './modules/cityList'
//引入城市数据
import CityDatas from './modules/cityDatas'
//引入年份
import getYear from './modules/getYear'
export default new Vuex.Store({
  modules: {
    home,
    pic,
    detail,
    cityName,
    CityList,
    CityDatas,
    getYear
  },  
  plugins:[createLogger()]
})
