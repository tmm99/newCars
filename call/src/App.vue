<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 16:31:43
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
html {
  font-size: calc(100vw / 750 * 100);
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  font-size: 0.32rem;
}
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
