<!--
 * @Author: your name
 * @Date: 2019-12-03 09:08:57
 * @LastEditTime: 2019-12-05 23:08:16
 * @LastEditors: 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \call\src\components\detail\Detail.vue
 -->
<template>
  <div class="car">
    <div class="cont">
      <!-- 图片部分 -->
      <div class="img">
        <img :src="this.detailData.CoverPhoto" @click="goPic(detailData.SerialID)" />
        <span data-hover="hover">{{this.detailData.pic_group_count}}张照片</span>
      </div>
      <!-- 询问低价 -->
      <div class="info">
        <div>
          <p v-if="Object.keys(detailData).length">{{this.detailData.market_attribute.dealer_price}}</p>
          <p
            v-if="Object.keys(detailData).length"
          >指导价 {{this.detailData.market_attribute.official_refer_price}}</p>
        </div>
        <div class="row">
          <button @click="lowerPrice(detailData.SerialID)">询问低价</button>
        </div>
      </div>
      <!-- 相关信息 -->
      <div class="car-list">
        <div class="type">
          <!-- <span v-if="name=='全部'" class="all" @click="cut('全部')">全部</span> -->
          <span
            v-for="(item,index) in year"
            :key="index"
            @click="cut(item)"
            :class="{all:name==item}"
          >{{item}}</span>
        </div>
      </div>

      <div v-for="(item,index) in list" :key="index" class="list">
        <p class="p">{{item.key}}</p>
        <ul class="ul">
          <li v-for="(item1,index1) in item.list" :key="index1">
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
            <p class="price" @click="everyLower">询问底价</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <p>询问低价</p>
      <p>本地经销商为你报价</p>
    </div>
  </div>
</template>
<script>
//引入vuex
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  props: {},
  components: {},
  data() {
    return {
      newId: "",
      //刚进页面的数据
      name: "全部"
    };
  },
  computed: {
    ...mapState({
      detailData: state => state.detail.list,
      list: state => state.detail.Slist,
      year: state => state.detail.year
    })
  },
  methods: {
    //底价路由
    lowerPrice(lowerId) {
      console.log(lowerId);
      this.$router.push({ path: "/lowerPrice", query: { lowerid: lowerId } });
    },
    //顶部图片路由
    goPic(newId) {
      console.log(newId);
      this.$router.push({ path: "/lowerPrice", query: { id: newId } });
    },
    everyLower() {
      this.$router.push("/lowerPrice");
    },
    //结构vuex方法
    ...mapActions({
      getInfoAndListById: "detail/getInfoAndListById"
    }),
    ...mapMutations({
      UpCurrent: "detail/UpCurrent"
    }),
    cut(i) {
      this.name = i;
      this.UpCurrent(i);
      this.getInfoAndListById(this.$route.query.SerialID);
    }
  },
  created() {
    this.getInfoAndListById(this.$route.query.SerialID);
  }
};
</script>
<style scoped lang="scss">
.car {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #eee;
  display: flex;
  flex-direction: column;
}
.cont {
  width: 100%;
  flex: 1;
  overflow: hidden;
  overflow-y: scroll;
}
.footer {
  width: 100%;
  height: 1.19rem;
  background: #00afff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
  }
  p:first-child {
    font-size: 0.32rem;
  }
  p:last-child {
    font-size: 0.24rem;
  }
}
.img {
  position: relative;
  height: 3.29rem;
  overflow: hidden;
  img {
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    position: absolute;
  }
  span {
    position: absolute;
    bottom: 0.3rem;
    right: 0.3rem;
    color: #fff;
    padding: 1px 0.1rem;
    border-radius: 0.2rem;
    background: rgba(0, 0, 0, 0.6);
    font-size: 0.24rem;
  }
}

.info {
  height: 30px;
  padding: 15px 10px 5px;
  position: relative;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    flex: 1;
    height: 100%;
    p:first-child {
      font-size: 0.36rem;
      color: red;
      font-weight: 500;
    }
    p:last-child {
      padding-top: 0.1rem;
      font-size: 0.26rem;
      color: silver;
    }
  }
  .row {
    display: flex;
    color: #fff;
    flex: 1;
    height: 100%;
    border-radius: 5px;
    button {
      border-radius: 5px;
      padding: 0.2rem 1.2rem;
      font-size: 0.27rem;
      border: none;
      background: #00afff;
      color: #fff;
    }
  }
}

.type {
  border-top: 10px solid #f4f4f4;
  padding: 0 5px;
  font-size: 0.32rem;
  height: 0.77rem;
  line-height: 30px;
  background: #fff;
  span {
    padding: 0 0.3rem;
  }
}
.all {
  color: #00afff;
}

.ul {
  height: auto;
  background: #fff;
  li {
    padding: 0 0.2rem;
    width: 100%;
    height: 2.4rem;
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
.price {
  height: 0.8rem;
  line-height: 0.8rem;
  text-align: center;
  border-top: 1px solid #eee;
  color: #00afff;
  font-size: 0.32rem;
}
</style>