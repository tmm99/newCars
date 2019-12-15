import { mapActions, mapState } from 'vuex';
<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 13:40:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-15 20:47:17
 * @Description: 
 -->
<template>
  <div class="pic">
    <Load v-show="loadingName"></Load>
    <!-- 头部 -->
    <div class="title">
      <p @click="color">全部颜色</p>
      <p @click="carStyle">全部车款</p>
    </div>
    <!-- 图片渲染 -->
    <div class="main"> 
      <div class="img" v-for="(item,index) in list" :key="index">
         <li v-for="(item1,index1) in item.List" :key="index1" >
            <img   :style="{background: 'url( '+ item1.Url.replace('{0}',3) +')', backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}"/>      
           <div class="imgIndex" v-if="index1==0">
             <p >{{item.Name}}</p>
             <p>{{item.Count}}</p>
           </div>
          </li>
      </div>
    </div>
    <!-- 颜色组件 -->
    <AllColor :class="showColor?'Show':'Hide'" class="Scolor" :colorSonCom='colorSonCom' :carid='CarId'></AllColor>
    <!-- 车款组件 -->
    <AllCarStyle :class="showCar?'Show':'Hide'" class="Scolor" :carSonCom='carSonCom'></AllCarStyle>

  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { Image, Card } from 'vant';
import Imgs from "@/components/img.vue";
//懒加载
import loader from 'sass-loader';

//引入loading
import Load from './Loadding.vue'
// import class from '@vue/cli-service';

//引入图片组件
import AllColor from './AllColor.vue'
//引入车款组件
import AllCarStyle from './AllCarStyle.vue'

export default {
  props: {},
  components: { Imgs,Load,AllColor,AllCarStyle },
  data() {
    return {
      showColor:false,
      showCar:false,
      CarId:0,
    };
  },
  computed: {
    ...mapState({
      list: state => state.pic.list,
      loadingName: state => state.pic.loadingName
    })
  },
  methods: {
    ...mapActions({
      getImageList: "pic/getImageList"
    }),
    //全部颜色
    color(){
         this.showColor=true
    },
    //颜色组件取消
    colorSonCom(){
        this.showColor=false
    },
    //全部车款
    carStyle(){
      this.showCar=true
    },
   //车款组件取消
  carSonCom(){
    this.showCar=false
  }

  },
  created() {
    this.lists = this.getImageList(this.$route.query.id);
    console.log(this.$route.query.id);
  this.CarId=this.$route.query.id;
  },
  mounted() {
    // console.log(this)

    // console.log(this.list)
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
    overflow: hidden;
    position: absolute;
    background: #fff;
    top: .98rem;
    bottom: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    border-bottom: .4rem solid #f4f4f4;
   
   
li{
    position: relative;
    width: 101px;
    height: 93px;
    float: left;
    margin-right:5px;
    margin-bottom:3px;
    padding: 0;
    list-style: none;
    img{
        width: 100%;
        height: 100%;
    }
    .imgIndex{
      background: rgba(0,0,0,.6);
      position: absolute;
      top:0;
      left: 0;
      width: 100%;
      height: 100%;
      color: #fff;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
        p{
          padding-top: 5px;
        }
    }

}
  .img {
    width: 100%;
    height: 200px;
  }

}
.Scolor{
  width: 100%;
  height: 100%;
  background:#eee;
  position: fixed;
  top: 0;
  left: 0;
}
.Show{
  transition-delay: 0s;
  transition-duration: 1s;
  transform: translateY(0%);
  z-index: 999;
}
.Hide{
  transition-delay: 0s;
  transition-duration: 1s;
  transform: translateY(100%)
}

</style>