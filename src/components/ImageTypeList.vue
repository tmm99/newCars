<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-10 15:20:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-10 22:30:27
 * @Description: 
 -->
<template>
  <div class="wrap">
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
            :style="{backgroundImage: 'url('+item.Url.replace('{0}', item.LowSize)+')'}"
          />
        </ul>
      </template>
    </CommonList>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CommonList from "./CommonList";

export default {
  computed: {
    ...mapState({
      count: state => state.pic.count,
      value: state => state.pic.imageList,
      page: state => state.pic.page
    })
  },
  components: {
    CommonList
  },
  methods: {
    ...mapActions({
      getImageTypeList: "pic/getImageTypeList"
    })
  },
  mounted() {
    this.getImageTypeList();
  }
};
</script>

<style lang="scss" scoped>
.wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
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