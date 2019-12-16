<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-11 11:17:27
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-11 20:03:02
 * @Description: 
 -->

<template>
  <div class="wheel">
    <van-image-preview
      v-model="showPreview"
      :images="list"
      :loop="false"
      :start-position="current"
      @change="onChange"
    >
      <img v-for="(img,index) in imageList" v-lazy="img" :key="index" />
      <template v-slot:index>{{`${current}/${count}`}}</template>
    </van-image-preview>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  props: ["wheelShow"],
  components: {},
  data() {
    return {
      index:0
    };
  },
  computed: {
    ...mapState({
      imageList: state => state.pic.imageList,
      count: state => state.pic.count,
      page: state => state.pic.page,
      ImageID: state => state.pic.ImageID,
      current:state=>state.pic.current
    }),
    list() {
      return this.imageList.map(item => {
        return item.Url.replace("{0}", item.HighSize);
      });
    },
    showPreview:{
      get(){
        return this.wheelShow
      },
      set(value){
        this.$emit("update:wheelShow",false)
      }
    }
    
  },
  methods: {
    ...mapMutations({
      upCurrent: "pic/upCurrent"
    }),
    onChange(index) {
      if (index > this.list.length - 3) {
        if (this.list.length < 30) {
          this.getImageTypeList(1);
        } else {
          this.getImageTypeList(this.page + 1);
        }
      }
      this.upCurrent(index);
    },
    ...mapActions({
      getImageTypeList: "pic/getImageTypeList"
    })
  },
  created() {
    this.getImageTypeList();
  },
  mounted() {}
};
</script>
<style scoped lang="scss"> 
.wheel /deep/ .van-image-preview{
  background: #000;
}
</style>