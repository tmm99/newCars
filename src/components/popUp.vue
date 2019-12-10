<!--
 * @Author: 席鹏昊
 * @Date: 2019-11-30 11:37:48
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-10 15:40:45
 * @Description: 
 -->
<template>
  <div class="popUp">
    <p class="title" @click="back"><span>{{item.GroupName}}</span></p>
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
      localStorage.setItem("car",JSON.stringify({id:item.SerialID,Name:item.AliasName,Picture:item.Picture}))
      this.$router.push({path:"/details",query:{SerialID:i}});
    }
  },
  created() {
    console.log()
  },
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
  height: .48rem;
  line-height: .48rem;
  background: #f2f2f2;
  color: #717171;
  font-size: .28rem;
  span{
    margin-left: 1px;
      padding-left: .3rem;
  }

}
.content {
  width: 100%;
  flex: 1;
  .list {
    width: 100%;
    height: 1.4rem;
    display: flex;
    align-items: center;
    border-bottom: .02rem solid #ddd;
    
    p:nth-child(1) {
      margin: 0 .1rem 0 .2rem;
      width: 1.8rem;
      height: 1.2rem;
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
        font-size: .34rem;
        color: #5f687a;
      }
      span:last-child {
        width: 100%;
        flex: 1;
        color: red;
        display: flex;
        align-items: flex-start;
        font-size: .28rem;
      }
    }
  }
 
}
</style>