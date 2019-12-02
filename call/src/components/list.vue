import { compileToFunctions } from 'vue-template-compiler';
<!--
 * @Author: 席鹏昊
 * @Date: 2019-11-29 19:45:23
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-11-30 21:12:55
 * @Description: 
 -->
<template>
  <div class="list">
    <p class="title">
      <b>{{data.title}}</b>
    </p>
    <div class="content" v-for="(item,index) in data.children" :key="index" @click="balls(item)">
      <p>
        <img :src="item.CoverPhoto" alt />
      </p>
      <p>{{item.Name}}</p>
    </div>
  </div>
</template>
<script>
// 111
export default {
  props: ["data","ball"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
      balls(item){

        this.ball(item.MasterID,1)
      }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.list {
  width: 100%;
  height: auto;
}
.title {
  width: 100%;
  height: 45px;
  background: #ccc;
  line-height: 45px;
  b {
    margin-left: 10px;
  }
}
.content {
  margin: 0 auto;
  width: 90%;
  height: auto;
  display: flex;
  border-bottom: .5px solid #ccc;
  p:nth-child(1) {
    width: 15%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 70%;
      height: 70%;
    }
  }
  p:last-child {
    display: flex;
    flex: 1;
    align-items: center;
  }
}
</style>