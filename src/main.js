/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-13 16:12:33
 * @Description: 
 */
import "./reset.css"
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false
import "./assets/font_1138472_nrhzb59f50n/iconfont.css";


import { Swipe, SwipeItem, ImagePreview ,Skeleton, Lazyload} from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.use(ImagePreview);
Vue.use(Skeleton);
Vue.use(Lazyload, {
  attempt:4,
  loading: require('@/assets/1.jpg'),
  error: require('@/assets/1.jpg')
});
import 'vant/lib/index.css';


//引入自定义指令
import "@/directions/strickys.js"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
