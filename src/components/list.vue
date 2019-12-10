import { compileToFunctions } from 'vue-template-compiler';
<!--
 * @Author: 席鹏昊
 * @Date: 2019-11-29 19:45:23
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-04 16:50:30
 * @Description: 
 -->
<template>
  <div class="list">
    <p class="title">
      <b>{{data.title}}</b>
    </p>
    <div class="content" v-for="(item,index) in data.children" :key="index" @click="balls(item)">
      <p>
        <img  v-lazy="item.CoverPhoto"  />
        <!-- <img :src="item.CoverPhoto" alt /> -->
      </p>
      <p>{{item.Name}}</p>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Lazyload, Loading } from 'vant';
import loader from 'sass-loader';
Vue.use(Lazyload,{
  preload:2,
  loading:"http://cdn.duitang.com/uploads/item/201510/17/20151017095028_eGJMw.thumb.700_0.jpeg",
  error:"http://cdn.duitang.com/uploads/item/201507/09/20150709130218_F3Uf8.jpeg"
});

export default {
  props: ["data", "ball"],
  data() {
    return {
     
    };
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
  height: .4rem;
  background: #f4f4f4;;
  line-height: .4rem;
  font-size: .28rem;
  b {
    margin-left:.3rem;
    color: #aaa;
  }
}
.content {
  margin: 0 .3rem;
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
    
      height: .8rem;
    }
  }
  p:last-child {
    display: flex;
    flex: 1;
    align-items: center;
    font-size: .32rem;
    padding-left: .4rem;
  }
}
</style>