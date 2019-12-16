<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 18:06:34
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-12 16:34:59
 * @Description: 
 -->
<template>
  <div class="loading">
    <!-- <img src="@/assets/1.jpeg" alt=""> -->
    <van-loading type="spinner" color="#1989fa" size="60px"/>
  </div>
</template>
<script>
import Vue from "vue";
import { Loading } from "vant";
Vue.use(Loading);
export default {};
</script>
<style scoped lang="scss">
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
</style>