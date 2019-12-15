<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 20:15:43
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-13 16:19:38
 * @Description: 
 -->
<template>
  <div class="imgSh">
    <CommonList
      :list="{
            query: {page},
            limit: 30,
            count: count,
            refreshDispatch: 'pic/getImageTypeList',
            loadMoreDispatch: 'pic/getImageTypeList',
            value:value
        }"
    >
      <template v-slot:default="slotProps">
        <ul>
          <span
            :key="index"
            v-for="(item, index) in slotProps.value"
             v-lazy:background-image="`${item.Url.replace('{0}',item.LowSize)}`"
            @click="showSwiper(index)"
          />
        </ul>
      </template>
    </CommonList>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CommonList from "./CommonList";
export default {
  props:["wheelShow"],
  components: {
    CommonList
  },
  computed: {
    ...mapState({
      imageList: state => state.pic.imageList,
      value: state => state.pic.imageList,
      page: state => state.pic.page,
      count: state => state.pic.count
    })
  },
  methods: {
    ...mapActions({
      getImageTypeList: "pic/getImageTypeList"
    }),
    ...mapMutations({
      upCurrent:"pic/upCurrent"
    }),
    showSwiper(index){
      this.upCurrent(index)
      this.$emit("update:wheelShow",true)
    }
  },
  created() {
    this.getImageTypeList();
  }
};
</script>
<style scoped lang="scss">
.imgSh {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 99;
}
ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
ul span {
  display: inline-block;
  width: 32.7vw;
  height: 32.7vw;
  margin-bottom: 1vw;
  background-size: cover;
  background-position: center;
}
</style>