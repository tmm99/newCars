<!--
 * @Author: 席鹏昊
 * @Date: 2019-11-30 11:37:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-01 20:35:02
 * @Description: 
 -->
<template>
  <div class="popUp">
    <p class="title" @click="back">{{item.GroupName}}</p>
    <div class="content">
      <div class="list" v-for="(item1,index1) in item.GroupList" :key="index1" @click="to(item1.SerialID,item1)">
        <p>
          <img :src="item1.Picture" alt />
        </p>
        <p>
          <span>{{item1.AliasName}}</span>
          <span>{{item1.DealerPrice}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item", "backs"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    back() {
      this.backs();
    },
    to(i,item) {
        console.log(item)
      this.$router.push({path:"/details",query:{SerialID:i}});
     
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.popUp {
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #ccc;
}
.content {
  width: 100%;
  flex: 1;
  .list {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    p:nth-child(1) {
      width: 30%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    p:last-child {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      span:first-child {
        width: 100%;
        height: 60%;
        display: flex;
        align-items: center;
        font-size: 20px;
      }
      span:last-child {
        width: 100%;
        flex: 1;
        color: red;
        display: flex;
        align-items: flex-start;
        font-size: 12px;
      }
    }
  }
}
</style>