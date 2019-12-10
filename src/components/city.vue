import index, { mapState, mapActions } from 'vuex';
<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-09 18:07:53
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-10 10:47:48
 * @Description: 
 -->
<template>
  <div class="city">
    <div class="location">
      <p>自动定位</p>
      <p>{{locations.CityName}}</p>
    </div>
    <div class="list">
      <p>省市</p>
      <ul>
        <li v-for="(item,index) in list" :key="index" @click="town(item.CityID)">{{item.CityName}}</li>
      </ul>
    </div>
    <transition name="town">
      <div v-if="a" class="towns">{{towns}}</div>
    </transition>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
        a:false
    };
  },
  computed: {
    ...mapState({
      list: state => state.city.list,
      locations: state => state.city.location,
      towns: state => state.city.town
    })
  },
  watch: {
    towns(a, b) {
      console.log(a, "++++");
      console.log(b, "bbbb");
    }
  },
  methods: {
    ...mapActions({
      City: "city/City",
      location: "city/location"
    }),
    town(i) {
      this.City(i);
      this.a=true
      console.log(this.towns, "town");
    }
  },
  created() {
    this.City();
    this.location();
    console.log(this.list);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.town-enter,
.town-leave-to{
    transform: translate3d(100%,0,0);
}
.town-enter-active,
.town-leave-active{
    transition: transform .3s linear;
}
.towns{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
}
.city {
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  overflow-y: scroll;
}
.location {
  width: 100%;
  height: 45px;
  background: #ccc;
  p:first-child {
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
    padding-left: 0.2rem;
    background: #f4f4f4;
  }
  p:last-child {
    width: 100%;
    padding-left: 0.4rem;
    height: 0.8rem;
    line-height: 0.8rem;
    background: #fff;
    font-size: 0.28rem;
  }
}
.list {
  width: 100%;
  flex: 1;
  p {
    width: 100%;
    height: 0.4rem;
    line-height: 0.4rem;
    font-size: 0.24rem;
    padding-left: 0.2rem;
    background: #f4f4f4;
  }
  ul {
    width: 100%;
    height: auto;
    li {
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      padding-left: 0.3rem;
      border-bottom: 1px solid #eee;
      font-size: 0.28rem;
    }
  }
}
</style>