<!--
 * @Author: your name
 * @Date: 2019-12-03 08:48:52
 * @LastEditTime: 2019-12-03 10:43:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \call\src\views\Home.vue
 -->
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Detail></Detail>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import List from '../components/list.vue'
import Detail from '../views/detail/Detail.vue'

export default {
  name: 'home',
  components: {
    Detail
    // List
    // HelloWorld
  }
}
</script>
<style scoped lang="css">
  .home{
    width: 100%;
    height: 100%;
  }
</style>
