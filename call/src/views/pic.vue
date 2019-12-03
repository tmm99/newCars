import { mapActions, mapState } from 'vuex';
<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 13:40:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 14:28:41
 * @Description: 
 -->
<template>
  <div class="pic">
    <div class="title">
      <p>颜色</p>
      <p>车款</p>
    </div>
    <div class="main"></div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      list: state => state.pic.list
    })
  },
  methods: {
    ...mapActions({
      getImageList: "pic/getImageList"
    })
  },
  created() {
    this.getImageList(this.$route.query.id);
  },
  mounted() {
    console.log(this.list);
  }
};
</script>
<style scoped lang="scss">
.pic {
  width: 100%;
  height: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  height: 42px;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
  p:first-child{
      border-right: 1px solid;
  }
}
.main {
  width: 100%;
  flex: 1;
}
</style>