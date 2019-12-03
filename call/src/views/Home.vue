<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 18:49:18
 * @Description: 
 -->
<template>
  <div class="home">
    <Loading v-show="loadingName"></Loading>
    <div class="scroll" ref="roll">
      <div class="roll">
        <List v-for="(item,index) in list" :key="index" :data="item" ref="A" :ball="ball"></List>
      </div>
    </div>
    <div class="floor" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <p>#</p>
      <p v-for="(item,index) in list" :key="index" :class="index" @click="to(index)">{{item.title}}</p>
    </div>
    <div :class="[isShow?'show':'shade']" class="box">
      <PopUp v-for="(item,index) in Rlist " :key="index" :item="item" :backs="backs" ></PopUp>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import List from "../components/list";
import PopUp from "../components/popUp";
import Loading from "../components/loading";
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: { List, PopUp ,Loading },
  data() {
    return {
      isShow: false
    };
  },
  computed: {
    ...mapState({
      list: state => state.home.list,
      Rlist: state => state.home.Rlist,
      loadingName:state=>state.home.loadingName
    })
  },
  methods: {
    ...mapActions({
      getMasterBrandList: "home/getMasterBrandList",
      sidebar: "home/sidebar"
    }),
    to(i) {
      let LH = this.$refs.A;
      let el = LH[i].$el;
      this.scroll.scrollToElement(el, 1000, 0, 0);
    },
    ball(id) {
      this.sidebar(id);
      this.isShow = true;
    },
    backs() {
      this.isShow = false;
    },
    touchstart(e) {
      
    },
    touchmove(e) {
      let arr=["166","183","205","223","245","272","290","315","335","358","378","402","426","449","467","488","506","534","555","579","600"];
      arr.map((item,index)=>{
        if(e.touches[0].pageY>item&&e.touches[0].pageY<item+1){
              let LH = this.$refs.A;
               let el = LH[index].$el;
               this.scroll.scrollToElement(el,0, 0, 0);
        }
      })
    },
    touchend(e) {
    }
  },
  created() {
    this.getMasterBrandList();
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.roll, {
        scrollbar: true,
        click: true
      });
    });
  }
};
</script>
<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  position: relative;
}
.scroll {
  width: 100%;
  height: 100%;
}
.roll {
  width: 100%;
  height: auto;
}
.floor {
  width: 0.4rem;
  position: fixed;
  top: 50%;
  right: .20rem;
  transform: translateY(-50%);
  height: auto;
  color: #666666;
  text-align: center;
  p {
    font-size: 0.14rem;
    line-height: 0.4rem;
  }
}
.box {
  position: absolute;
  top: 0;
  right: 0;
  width: 70%;
  height: 100%;
  background: #fff;
  overflow-y: auto;
}
.shade {
  transition-delay: 2s;
  transition-duration: 1s;
  transform: translateX(100%);
}
.show {
  transition-delay: 2s;
  transition-duration: 2s;
  transition-timing-function: linear;
  transform: translateX(0%);
}
</style>
