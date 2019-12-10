<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-09 10:25:30
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-09 18:49:53
 * @Description: 
 -->
<template>
  <div class="low">
    <div class="connter">
      <header class="header">
        <p>可向多个商家咨询最低价，商家及时回复</p>
      </header>
      <main class="main">
        <div class="title">
          <div>
            <img :src="this.Picture" alt />
          </div>
          <div>
            <p>{{name}}</p>
            <p>{{year}}{{carName}}</p>
          </div>
        </div>
        <div class="message">
          <p class="titles">个人信息</p>
          <div class="lose">
            <p>
              <span>姓名</span>
              <input type="text" placeholder="输入你的真实中文姓名" />
            </p>
            <p>
              <span>手机</span>
              <input type="text" placeholder="输入你的真实手机号码" />
            </p>
            <p>
              <span>城市</span>
              <span @click="isShow">
                北京
                <b></b>
              </span>
            </p>
          </div>
          <p class="button">
            <span>询问低价</span>
          </p>
        </div>
        <div class="dealer">
          <p>选择报价经销商</p>
          <div class="seller"></div>
        </div>
      </main>
    </div>

    <transition name="slide-fade">
      <div v-if="jubge" class="animation">
        <City></City>
      </div>
    </transition>

    <footer class="footer">
      <p>询问低价</p>
    </footer>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import City from "@/components/city.vue";
export default {
  components: { City },
  data() {
    return {
      year: "",
      name: "",
      carName: "",
      Picture: "",
      jubge: false
    };
  },
  computed: {
    ...mapState({
      cityName: state => state.low.cityName
    })
  },
  methods: {
    ...mapActions({
      lowprice: "low/lowprice"
    }),
    //从本地存储中获取数据
    obtain() {
      let car = JSON.parse(localStorage.getItem("car"));
      let type = JSON.parse(localStorage.getItem("type"));
      //名字
      this.name = car.Name;
      //图片
      this.Picture = car.Picture;
      //款式
      this.carName = type.car_name;
      //年份
      this.year = type.year;
    },
    isShow() {
      this.jubge = true;
      console.log(this);
    }
  },
  created() {
    this.obtain();
    this.lowprice(this.$route.query.lowerid);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.low {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.connter {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  width: 100%;
  height: 23px;
  background-color: #79cd92;
  line-height: 23px;
  p {
    width: 80%;
    margin: 0 auto;
    font-size: 0.3rem;
    color: #fff;
  }
}
.main {
  width: 100%;
  flex: 1;
  background-color: #fff;
}
.title {
  width: 100%;
  height: 75px;
  background: #fff;
  display: flex;
  padding: 0.32rem 0.18rem 0.24rem;
  box-sizing: border-box;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0.9rem;
    right: 0.26rem;
    padding-top: 0.16rem;
    padding-right: 0.16rem;
    border-top: 2px solid #ccc;
    border-right: 2px solid #ccc;
    transform: rotate(45deg);
    display: inline-block;
  }
  div:first-child {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 87px;
      height: 53px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }
  div:last-child {
    margin-left: 0.2rem;
    width: 4.3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p:first-child {
      font-size: 0.36rem;
      line-height: 1;
    }
    p:last-child {
      margin-top: 0.26rem;
      font-size: 0.32rem;
      line-height: 1.2;
      color: #333;
    }
  }
}
.message {
  width: 100%;
  height: 165px;
  display: flex;
  flex-direction: column;
  .titles {
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.2rem;
    font-size: 0.24rem;
    color: #666;
    background: #eee;
  }
  .button {
    width: 100%;
    height: 50px;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    span {
      width: 80%;
      height: 0.7rem;
      text-align: center;
      line-height: 0.7rem;
      display: block;
      font-size: 0.32rem;
      background: #3aacff;
      border-radius: 0.1rem;
      color: #fff;
    }
  }
}
.lose {
  width: 100%;
  flex: 1;
  background: #fff;
  padding: 0 0.2rem;
  p {
    width: 100%;
    height: 0.88rem;
    line-height: 0.88rem;
    font-size: 0.32rem;
    border-bottom: 1px solid #eee;
    color: #000;

    input {
      width: 88%;
      border: none;
      text-align: right;
      font-size: 0.33rem;
      padding-right: 0.2rem;
      box-sizing: border-box;
      color: #555;
      outline: none;
    }
    span:last-child {
      display: inline-block;
      width: 83%;
      color: #555;
      text-align: right;
      box-sizing: border-box;
      position: relative;
      b {
        content: "";
        display: inline-block;
        padding-top: 0.16rem;
        padding-right: 0.16rem;
        border-top: 1px solid silver;
        border-right: 1px solid silver;
        transform: rotate(45deg);
        z-index: 999;
      }
    }
  }
}
.dealer {
  width: 100%;
  height: auto;
  background: #fff;
  p {
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    padding: 0 0.2rem;
    color: #666;
    font-size: 0.24rem;
    background: #eee;
  }
}
.footer {
  position: fixed;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: 39px;
  p {
    width: 100%;
    height: 100%;
    background-color: #3aacff;
    text-align: center;
    line-height: 39px;
    color: #fff;
    font-size: 14px;
  }
}
.animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.slide-fade-enter,
.silde-fade-leave-to {
  transform: translate3d(0, 100%, 0);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: transform 1s linear;
}
</style>