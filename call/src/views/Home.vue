<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-02 21:07:55
 * @Description: 
 -->
<template>
  <div class="home" ref="roll">
    <div class="roll">
      <List v-for="(item,index) in data" :key="index" :data="item" ref="A"></List>
    </div>
    <div class="floor">
      <p>#</p>
      <p v-for="(item,index) in data" :key="index" @click="to(index)">{{item.title}}</p>
    </div>
    <div :class="[isShow?'show':'shade']" class="box">
      <PopUp v-for="(item,index) in classify " :key="index" :item="item" :backs="backs"></PopUp>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import List from "../components/list";
import PopUp from "../components/popUp";
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {List,PopUp},
  data() {
    return {
      data: [],
      isShow: false,
      classify: {}
    };
  },
  computed: {
    ...mapState({
      list: state => state.list
    })
    
  },
  methods: {
    ...mapActions({
      getMasterBrandList: "home/getMasterBrandList"
    }),
    to(i) {
      let LH = this.$refs.A;
      let el = LH[i].$el;
      this.scroll.scrollToElement(el, 1000, 0, 0);
    }
  },
  created() {
    this.getMasterBrandList();
  },
  mounted() {
    this.data = this.$store.state.home.list;
    console.log(this.data)
    this.$nextTick(() => {
      (this.scroll = new BScroll(this.$refs.roll, {
        scrollbar: true,
        click: true
      }))
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
.roll {
  width: 100%;
  height: auto;
}
.floor {
  position: fixed;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  height: auto;
  color: #666666;
  p {
    line-height: 22px;
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
