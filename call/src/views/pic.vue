import { mapActions, mapState } from 'vuex';
<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 13:40:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 20:38:27
 * @Description: 
 -->
<template>
  <div class="pic">
    <div class="title">
      <p>颜色</p>
      <p>车款</p>
    </div>
    <div class="main">
      <div class="img" v-for="(item,index) in list" :key="index">
        <div>
          <p v-for="(item1,index1) in item.List" :key="index1">
            <img
              src="http://img3.bitautoimg.com/autoalbum/files/20181124/920/201811241542274227344_6387126_{0}.jpg"
              alt
            />
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import Imgs from "@/components/img.vue";
export default {
  props: {},
  components: { Imgs },
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
    this.list = this.getImageList(this.$route.query.id);
    console.log(this.list);
  },
  mounted() {}
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
 flex-wrap: wrap;
  p {
    flex: 1;
    text-align: center;
    font-size: 16px;
  }
  p:first-child {
    border-right: 1px solid;
  }
}
.main {
  width: 100%;
  flex: 1;
  o
  .img {
    width: 100%;
    height: 200px;
    div {
      width: 33%;
      height: 50px;
      p {
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>