<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 18:06:34
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 18:09:21
 * @Description: 
 -->
<template>
  <div class="loading">
        <img src="@/assets/1.jpeg" alt="">
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.loading{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left:0 ;
    z-index: 99;
    img{
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
}
</style>