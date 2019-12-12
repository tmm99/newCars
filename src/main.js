/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-05 11:25:58
 * @Description: 
 */
import "./reset.css"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant
import { Swipe, SwipeItem, ImagePreview } from 'vant';
import 'vant/lib/index.css';
Vue.use(Swipe).use(SwipeItem);
Vue.use(ImagePreview);

// 引入自定义指令
import '@/directions/stricky';

Vue.config.productionTip = false
import "./assets/font_1138472_nrhzb59f50n/iconfont.css"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
