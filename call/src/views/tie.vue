<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-05 19:02:24
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-05 23:36:23
 * @Description: 
 -->
<template>
  <div class="tie">
    <div class="title">全部车款</div>
    <div class="content">
      <div class="year">
        <p
          v-for="(item,index) in year"
          :key="index"
          :class="{'all':item==name}"
          @click="cut(item)"
        >{{item}}</p>
      </div>
      <div class="scroll_y">
        <div v-for="(item,index) in list" :key="index" class="list">
          <p class="p">{{item.key}}</p>
          <ul class="ul">
            <li v-for="(item1,index1) in item.list" :key="index1" @click="CarId(item.car_id)">
              <p>
                <span v-if="item1.market_attribute">{{item1.market_attribute.year}}款</span>
                <span>{{item1.car_name}}</span>
              </p>
              <p>
                <span>{{item1.horse_power}}马力</span>
                <span>{{item1.gear_num}}档</span>
                <span>{{item1.trans_type}}</span>
              </p>
              <p v-if="item1.market_attribute">
                指导价
                <span>{{item1.market_attribute.dealer_price_max}}</span>
                <span class="twospan">{{item1.market_attribute.dealer_price_min}}起</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
    props:["tie"],
  data() {
    return {
      name: "全部"
    };
  },
  computed: {
    ...mapState({
      list: state => state.detail.Slist,
      year: state => state.detail.year
    })
  },
  methods: {
    ...mapActions({
      getInfoAndListById: "detail/getInfoAndListById"
    }),
    ...mapMutations({
      UpCurrent: "detail/UpCurrent",
      CarIdx:"pic/alterId"
    }),
    cut(i) {
      this.name = i;
      this.UpCurrent(i);
      this.getInfoAndListById(this.$route.query.id);
    },
    CarId(i){
        console.log(111)
        this.CarIdx(i);
        this.$emit("update:tie",false)
        // window.history.go(-1)
    }
  },
  created() {
      console.log(this.list)
    this.getInfoAndListById(this.$route.query.id);
  }
};
</script>
<style scoped lang="scss">
.tie {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f4f4f4;
  display: flex;
  flex-direction: column;
}
.title {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.34rem;
  color: #00afff;
  text-align: center;
  margin: 0.15rem 0;
  background: #fff;
}
.content {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.year {
  width: 100%;
  height: 0.76rem;
  margin-top: 0.15rem;
  background: #fff;
  font-size: 0.3rem;
  display: flex;
  overflow-x: scroll;
  p {
    height: 100%;
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
  .all {
    color: #00afff;
  }
}
.scroll_y {
  width: 100%;
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;
}
.ul {
  height: auto;
  background: #fff;
  li {
    padding: 0 0.2rem;
    width: 100%;
    height: 1.6rem;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    p:first-child {
      font-size: 0.3rem;
      padding: 8px;
    }
    p:nth-child(2) {
      font-size: 0.26rem;
      color: silver;
      padding-left: 8px;
      padding-bottom: 8px;
    }
    p:nth-child(3) {
      font-size: 0.24rem;
      color: silver;
      padding-left: 8px;
      padding-bottom: 8px;
      margin-left: 45%;
    }
  }
  li:last-child{
      border: none;
  }
}
.twospan {
  color: red;
  font-size: 0.3rem;
  padding-left: 10px;
}

.p {
  padding: 0 0.2rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background: #f4f4f4;
  color: #999;
  font-size: 0.26rem;
  width: 100%;
  box-sizing: border-box;
}

</style>