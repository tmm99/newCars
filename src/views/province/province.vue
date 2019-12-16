<!--
 * @Author: your name
 * @Date: 2019-12-09 14:26:15
 * @LastEditTime: 2019-12-15 19:54:56
 * @LastEditors: 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\views\province\province.vue
 -->
<template>
  <div class="province">
    <!-- 左边组件 -->
    <div class="left" @click="citySonCom"></div>
    <!-- 右边组件 -->
    <div class="right">
      <div v-for="(item,index) in getCityData" :key="index" class="littleCity">
        <p @click="littleCityClose(item.CityName,item.CityID)">{{item.CityName}}</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["cityCom", "Id", "changeSon"],
  watch: {
    Id() {
      this.getCityDatas(this.Id);
    }
  },
  computed: {
    ...mapState({
      getCityData: state => state.CityDatas.getCityData
    })
  },
  methods: {
    //此子组件
    citySonCom() {
      this.cityCom();
    },

    //点击小城市回到表单城市页面
    littleCityClose(itemLittleName, CityID) {
      this.getCityListS({ carId: this.$route.query.carid, cityId: CityID });
      this.changeSon(itemLittleName); //取消省份动画 并传值回去到cityName文件里
      this.cityCom(); //取消此小城市动画
     
    },
    ...mapActions({
      getCityDatas: "CityDatas/getCityDatas",
      getCityListS: "CityList/getCityListS"
    })
  }
};
</script>
<style scoped lang="scss">
.province {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 30%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
  .right {
    flex: 1;
    background: #fff;
    overflow: hidden;
    overflow-y: auto;
    font-size: 12px;
    .littleCity {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #eee;
      padding-left: 12px;
    }
  }
}
</style>