<!--
<<<<<<< HEAD
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
=======
 * @Author: 席鹏昊
 * @Date: 2019-12-02 18:38:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 10:38:06
 * @Description: 
 -->
<template>
  <div class="home" ref="roll">
    <div class="roll">
      <List v-for="(item,index) in list" :key="index" :data="item" ref="A" :ball="ball"></List>
    </div>
    <div class="floor">
      <p>#</p>
      <p v-for="(item,index) in list" :key="index" @click="to(index)">{{item.title}}</p>
    </div>
    <div :class="[isShow?'show':'shade']" class="box">
      <PopUp v-for="(item,index) in Rlist " :key="index" :item="item" :backs="backs"></PopUp>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import List from "../components/list";
import PopUp from "../components/popUp";
import { mapState, mapActions} from "vuex";
export default {
  props: {},
  components: { List, PopUp },
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    ...mapState({
      list: state => state.home.list,
      Rlist: state => state.home.Rlist
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
    ball(id, i) {
      this.sidebar(id);
      this.isShow = true;
    },
    backs() {
      this.isShow = false;
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
>>>>>>> 0ccf2a91b114997ca269e9a2443fdaca3d49e5ee
</style>
