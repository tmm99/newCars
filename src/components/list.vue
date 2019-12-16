import { compileToFunctions } from 'vue-template-compiler';
<!--
 * @Author: 席鹏昊
 * @Date: 2019-11-29 19:45:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-16 16:21:26
 * @Description: 
 -->
<template>
  <div class="list">
    <meta name="referrer" content="never" />
    <p class="title">
      <b>{{data.title}}</b>
    </p>
    <div class="content" v-for="(item,index) in data.children" :key="index" @click="balls(item)">
      <p>
        <img  v-lazy="item.CoverPhoto"/>
      </p>
      <p>{{item.Name}}</p>
    </div>
  </div>
</template>
<script>
// import Vue from "vue";
// import { Lazyload, Loading } from "vant";
// import loader from "sass-loader";
// Vue.use(Lazyload, {
//   attempt:4,
//   loading: require('../assets/1.jpg'),
//   error: require('../assets/1.jpg')
   
// });

export default {
  props: ["data", "ball"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    balls(item) {
      this.ball(item.MasterID, 1);
    },
    imgs() {
      this.data.children.map(item => {
        this.imageList = [];
        this.imageList.push(item.CoverPhoto);
      });
    }
  },
  created() {
    this.imgs();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.list {
  width: 100%;
  height: auto;
  div:last-child {
    border: 0;
  }
}
.title {
  width: 100%;
  height: 0.4rem;
  background: #f4f4f4;
  line-height: 0.4rem;
  font-size: 0.28rem;
  b {
    margin-left: 0.3rem;
    color: #aaa;
  }
}
.content {
  margin: 0 0.3rem;
  width: 90%;
  display: flex;
  border-bottom: 1px solid #ddd;
  p:nth-child(1) {
    width: 15%;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      height: 0.8rem;
    }
  }
  p:last-child {
    display: flex;
    flex: 1;
    align-items: center;
    font-size: 0.32rem;
    padding-left: 0.4rem;
  }
  img{
    width: 100%;
  }
}
</style>