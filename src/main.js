/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-11 15:35:17
 * @Description: 
 */
import "./reset.css"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import "./assets/font_1138472_nrhzb59f50n/iconfont.css";

import Vant from 'vant';
import { Swipe, SwipeItem, ImagePreview } from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.use(ImagePreview);
import 'vant/lib/index.css';
Vue.use(Vant);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
