/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
<<<<<<< HEAD:src/store/index.js
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-10 16:18:10
=======
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-10 20:35:18
>>>>>>> e165cf250db2d7a4c9e8e72d943b5b32139e9751:call/src/store/index.js
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
<<<<<<< HEAD:src/store/index.js
//颜色数据
import hue from "./modules/hue";
=======
//引入城市数据
import CityDatas from './modules/cityDatas'
>>>>>>> e165cf250db2d7a4c9e8e72d943b5b32139e9751:call/src/store/index.js
export default new Vuex.Store({
  modules: {
    home,
    pic,
    detail,
    cityName,
    CityList,
<<<<<<< HEAD:src/store/index.js
    hue
=======
    CityDatas
>>>>>>> e165cf250db2d7a4c9e8e72d943b5b32139e9751:call/src/store/index.js
  },  
  plugins:[createLogger()]
})
