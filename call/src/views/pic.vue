import { mapActions, mapState } from 'vuex';
<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 13:40:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-07 11:51:50
 * @Description: 
 -->
<template>
  <div class="pic">
    <Load v-show="loadingName"></Load>
    <div class="title">
      <p>颜色</p>
      <p>车款</p>
    </div>
    <div class="main"> 
      <div class="img" v-for="(item,index) in list" :key="index">
           <li v-for="(item1,index1) in item.List" :key="index1" >
            <img   :style="{background: 'url( '+ item1.Url.replace('{0}',3) +')', backgroundPosition:'center',backgroundRepeat:'no-repeat',backgroundSize:'cover'}"/>      
            <div class="imgIndex"></div>
            <!-- <div>  :src="item1.Url.replace('{0}',3)"   {background: 'url( '+ item1.Url.replace('{0}',3) +') no-repeat  30%,center'}
              <p>{{item1.Name}}</p> 
              <p>{{item1.Count}}张</p>  
            </div>     :index1==0 -->
          </li>
        
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { Image } from 'vant';
import Imgs from "@/components/img.vue";
//懒加载
import loader from 'sass-loader';



//引入loading
import Load from './lowerPrice/Loadding.vue'
// import class from '@vue/cli-service';

export default {
  props: {},
  components: { Imgs,Load },
  data() {
    return {
     
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
    })
  },
  created() {
    this.lists = this.getImageList(this.$route.query.id);
    console.log(this.lists);
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
    float: left;
    margin-right: .03rem;
    margin-bottom: .06rem;
    width: 2.46rem;
    height: 2.46rem;
    padding: 0;
    list-style: none;
    img{
        width: 100%;
        height: 100%;
    }
    .imgIndex{
      background: rgba(0,0,0,.3);
      position: absolute;
      top:0;
      left: 0;
      width: 10rem;
      height: 6.46rem;
      

    }

}
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