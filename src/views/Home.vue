<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-16 16:42:09
 * @Description: 
 -->
<template>
  <div class="home">
    <!-- loading 组件 -->
    <Loading v-show="loadingName"></Loading>
    <div class="scroll" ref="roll" v-stricky="letter">
      <div class="roll">
        <List :id="item.title" v-for="(item,index) in list" :key="index" :data="item" :ball="ball"></List>
      </div>
    </div>
    <!-- 楼层组件 -->
    <div
      class="floor"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
      ref="container"
    >
      <p>#</p>
      <p
        v-for="(item,index) in list"
        :key="index"
        :class="index"
        :id="item.title"
        @click="to(item.title)"
      >{{item.title}}</p>
    </div>
    <!-- 侧边栏组件 -->
    <div :class="[isShow?'show':'shade']" class="box">
      <PopUp v-for="(item,index) in Rlist " :key="index" :item="item" :backs="backs"></PopUp>
    </div>
  </div>
</template>
<script>
// import BScroll from "better-scroll";
//主要渲染的部分组件
import List from "../components/list";
//侧边栏组件
import PopUp from "../components/popUp";
//预加载组件
import Loading from "../components/loading";
//引入vuex
import { mapState, mapActions } from "vuex";
//引入防抖
import {debounce,throttle} from "../utils/util"

export default {
  props: {},
  components: { List, PopUp, Loading },
  data() {
    return {
      isShow: false,
      letter: ""
    };
  },
  computed: {
    ...mapState({
      list: state => state.home.list,
      Rlist: state => state.home.Rlist,
      loadingName: state => state.home.loadingName
    })
  },
  methods: {
    ...mapActions({
      getMasterBrandList: "home/getMasterBrandList",
      sidebar: "home/sidebar"
    }),
    to(title) {
      console.log(title);
      this.idScroll = title;
      //滚动的元素的top值就等于我点击的dao目
      // document.querySelector(".scroll").scrollTop = document.querySelector(
      //   `#${title}`
      // ).offsetTop;

      //自定义指令传入的值F
      this.letter = title;
    },
    ball(id) {
      // this.sidebar(id)
      debounce(this.sidebar(id))
      // throttle(this.sidebar(id))
      
      this.isShow = true;
    },
    backs() {
      this.isShow = false;
    },
    touchstart(e) {
      this.offsetTop =
        (window.innerHeight - this.$refs.container.offsetHeight) / 2;
      let y = e.touches[0].pageY - this.offsetTop;
      let index = Math.floor(y / 21);
      index < 1
        ? (index = 0)
        : index > this.list.length - 1
        ? (index = this.list.length - 1)
        : null;
      //滚动的元素的top值就等于我划过的标签的top
      document.querySelector(".scroll").scrollTop = document.querySelector(
        `#${this.list[index].title}`
      ).offsetTop;
    },
    touchmove(e) {
      //给this添加属性   整个页面的高度减去container的高度除以2
      this.offsetTop =
        (window.innerHeight - this.$refs.container.offsetHeight) / 2;
      //y等于划过的高减去this.offsetTop的高
      let y = e.touches[0].pageY - this.offsetTop;
      //向前取整判断出下标
      let index = Math.floor(y / 21);
      //给下标赋值
      index < 1
        ? (index = 0)
        : index > this.list.length - 1
        ? (index = this.list.length - 1)
        : null;
      //滚动的元素的top值就等于我划过的标签的top
      // document.querySelector(".scroll").scrollTop = document.querySelector(
      //   `#${this.list[index].title}`
      // ).offsetTop;

      //自定义指令传入的值
      this.letter = this.list[index].title;
    },
    touchend(e) {}
  },
  created() {
    this.getMasterBrandList();
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  background: #fff;
  position: relative;
}
.scroll {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
}
.roll {
  width: 100%;
  height: auto;
}
.floor {
  width: 0.4rem;
  position: fixed;
  top: 50%;
  right: 0;
  padding-left: 0.2rem;
  transform: translateY(-50%);
  height: auto;
  color: #666666;
  text-align: center;
  p {
    line-height: 0.31rem;
    font-weight: 500;
    font-size: 0.24rem;
    padding: 0.02rem 0rem;
    color: #666;
  }
}
.box {
  position: fixed;
  top: 0;
  right: 0;
  width: 72%;
  height: 100%;
  background: #fff;
  overflow-y: scroll;
  z-index: 999;
}
.shade {
  transition-delay: 0s;
  transition-duration: 1s;
  transform: translateX(100%);
}
.show {
  transition-delay: 0s;
  transition-duration: 2s;
  transition-timing-function: linear;
  transform: translateX(0%);
}
</style>