<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-05 11:36:29
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-12 16:24:25
 * @Description: 
 -->
<template>
  <div class="hue">
    <div class="title">全部颜色</div>
    <div class="content">
      <div class="year">
        <p
          v-for="(item,index) in list"
          :key="index"
          :class="{'all':index==indexs}"
          @click="alter(index)"
        >{{item}}</p>
      </div>
      <ul class="selectionC">
        <li v-for="(item,index) in colorList[indexs]" :key="index" @click="alterId(item.ColorId,item.Name)">
          <span :style="{background:item.Value}"></span>
          {{item.Name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: ["judgeC","name"],
  components: {},
  data() {
    return {
      indexs: 0
    };
  },
  computed: {
    ...mapState({
      list: state => state.hue.list,
      colorList: state => state.hue.colorList
    })
  },
  methods: {
    ...mapActions({
      getColour: "hue/getColour"
    }),
    ...mapMutations({
      alterIdx: "pic/alterId"
    }),
    //切换
    alter(i) {
      this.indexs = i;
    },
    alterId(i,name) {
      this.alterIdx(i);
      this.$emit("update:name",name)
      //让颜色组件消失
      this.$emit("update:judgeC",false)
    }
  },
  created() {
    this.getColour(this.$route.query.id);
  }
};
</script>
<style scoped lang="scss">
.hue {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  overflow: hidden;
  .title {
    width: 100%;
    height: 0.8rem;
    font-size: 0.34rem;
    color: #00afff;
    text-align: center;
    background: #fff;
    line-height: 0.8rem;
    margin: 0.18rem 0;
    box-sizing: border-box;
  }
  .content {
    width: 100%;
    height: auto;
  }
}
.year {
  width: 100%;
  height: 0.76rem;
  background: #fff;
  display: flex;
  overflow-x: scroll;
  p {
    flex-shrink: 0;
    width: 0.9rem;
    line-height: 0.76rem;
    text-align: center;
    font-size: 0.3rem;
    padding-right: 0.42rem;
  }
}
.selectionC {
  width: 100%;
  height: auto;
  margin-top: 0.15rem;
  display: flex;
  flex-wrap: wrap;
  background: #fff;
  margin-top: 0.15rem;
  overflow: hidden;
  padding: 0.2rem;
  li {
    width: 3.45rem;
    font-size: 0.32rem;
    line-height: 0.68rem;
    box-sizing: border-box;
    border-radius: 1px;
    margin: 0.2rem 0.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #3aacff;
    border-radius: 0.05rem;
    span {
      display: inline-block;
      width: 0.4rem;
      height: 0.4rem;
      margin-right: 0.1rem;
    }
  }
}
.all {
  color: #00afff;
}
</style>