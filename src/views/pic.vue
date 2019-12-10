import { mapActions, mapState } from 'vuex';
<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 13:40:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-06 14:08:17
 * @Description: 
 -->
<template>
  <div class="pic">
    <div class="title">
      <p @click="to">
        <span>{{name}}</span>
        <span class="iconfont">&#xe69b;</span>
      </p>
      <p @click="toCar">
        <span>{{car}}</span>
        <span class="iconfont">&#xe69b;</span>
      </p>
    </div>
    <div class="main">
      <div class="img" :v-if="list.length" v-for="(item,index) in list" :key="index">
        <div>
          <div
            v-for="(item1,index1) in item.List"
            :key="index1"
            :style="{
            background:'url('+item1.Url+')',
            backgroundSize:'cover',  
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'}"
            class="imgS"
          >
            <div v-if="index1==0">
              <span>{{item.Name}}</span>
              <span>{{item.Count}}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <transition name="scroll-top">
      <div v-show="judgeC" class="colour">
        <Hue :judgeC.sync="judgeC" :name.sync="name"></Hue>
      </div>
    </transition>
    <transition name="scroll-top">
      <div v-show="tie" class="car">
        <Tie :tie.sync="tie" :car.sync="car"></Tie>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
//引入颜色组件
import Hue from "./hue";
//引入车款组件
import Tie from "./tie";
import Imgs from "@/components/img.vue";
export default {
  components: { Imgs, Hue, Tie },
  data() {
    return {
      // 控制颜色组件
      judgeC: false,
      name: "颜色",
      //控制车系组件
      tie: false,
      car: "车款"
    };
  },
  watch: {
    //监听judgeC 的变化
    judgeC(a, b) {
      //重新渲染页面
      this.getImageList(this.$route.query.id);
    },
    //监听tie 的变化
    tie() {
      //重新渲染页面
      this.getImageList(this.$route.query.id);
    }
  },
  computed: {
    ...mapState({
      list: state => state.pic.list
    })
  },
  methods: {
    ...mapActions({
      getImageList: "pic/getImageList"
    }),
    //跳到颜色页面
    to() {
      // this.$router.push(`/hue?SerialID=${this.$route.query.id}`);
      this.judgeC = true;
    },
    //跳到车系页面
    toCar() {
      // this.$router.push(`/tie?id=${this.$route.query.id}`);
      this.tie = true;
    }
  },
  created() {
    this.getImageList(this.$route.query.id);
  }
};
</script>
<style scoped lang="scss">
.scroll-top-enter,
.scroll-top-leave-to {
  transform: translate3d(0, 100%, 0);
}
.scroll-top-enter-active,
.scroll-top-leave-active {
  transition: transform 0.3s linear;
}
.pic {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  height: 0.8rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  p {
    flex: 1;
    text-align: center;
    font-size: 0.28rem;
    display: flex;
    justify-content: center;
    .iconfont {
      line-height: 0.3rem;
      color: #ccc;
    }
  }
  p:first-child {
    border-right: 1px solid #ececec;
  }
}
.main {
  width: 100%;
  flex: 1;
}
.img {
  margin-top: 0.2rem;
  width: 100%;
  height: auto;
  div {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    div {
      width: 2.46rem;
      height: 2.46rem;
      margin: 0.02rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
.imgS div{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
}
.imgS span {
  color: #fff;
  font-size: 0.28rem;
  
}
.colour,
.car {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>