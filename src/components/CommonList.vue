<template>
  <!-- 
        /**
        * list 下拉刷新 加载更多
        * @props {
        *   list: {
        *     query?: {[key:string]:any}, 查询条件
        *     limit?: number, 每次查询的数量 默认10
        *     count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
        *     refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
        *     loadMoreDispatch: string loadMore 查询的store dispacthName
        *     value: Array<{[key:string]:any}> 查询结果
        *   }
        * }
        * slotName: 'item' 显示列表项
        */
  -->
  <div class="container">
    <div class="load">
      <!-- <p class="top-tip">释放刷新...</p> -->
      <slot :value="list.value"></slot>
      <!-- <p class="top-bottom"></p> -->
    </div>
    <!-- <ul> -->
    <!-- <li v-for="(item, index) in list.value" :key="index">
                <slot :item="item"></slot>
    </li>-->
    <!-- </ul> -->
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapActions } from "vuex";

export default {
  props: {
    list: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  methods: {
    // ...mapActions({
    //     refreshDispatch: this.list.refreshDispatch,
    //     loadMoreDispatch: this.list.loadMoreDispatch
    // }),
    refreshDispatch(page) {
      this.$store.dispatch(this.list.refreshDispatch, page);
    },
    loadMoreDispatch(page) {
      this.$store.dispatch(this.list.loadMoreDispatch, page);
    }
  },
  mounted() {
    this.scroll = new BScroll(".container", {
      scrollbar: true,
      scrollY: true,
      click: true,
      pullUpLoad: {
        threshold: -140
      },
      pullDownRefresh: {
        threshold: 50,
        stop: 30
      }
    });
    //触发上拉事件，在里面做一些重新请求数据
    this.scroll.on("pullingUp", async () => {
      //调用数据接口
      setTimeout(() => {
        this.loadMoreDispatch(this.list.query.page + 1);
      }, 1000);
      //在数据添加完成之后，告诉this.scroll 数据加载完成了，否则不会再次触发 pullingUp事件 没有此事件 会多次触发
      await this.scroll.finishPullUp(() => {
        //重新计算高度值
        this.scroll.refresh();
      });
    });
    this.scroll.on("pullingDown", async () => {
      setTimeout(() => {
       this.refreshDispatch(1); 
      }, 1000);
      this.scroll.finishPullDown();
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
}
.load::before {
  position: absolute;
  top: -30px;
  display: inline-block;
  content: "下拉刷新...";
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: skyblue;
  color: #fff;
}
.load::after {
  position: absolute;
  bottom: -30px;
  display: inline-block;
  content: "上拉加载...";
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background: skyblue;
  color: #fff;
}

.top-tip {
  width: 100%;
  height: 30px;
  line-height: 30px;
  position: absolute;
  top: -30px;
  text-align: center;
  background: skyblue;
  color: #fff;
}
.top-bottom {
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: skyblue;
  color: #fff;
  position: absolute;
  bottom: -30px;
}
</style>