<!--
 * @Author: your name
 * @Date: 2019-12-09 14:26:15
 * @LastEditTime: 2019-12-11 19:34:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\views\province\province.vue
 -->
<template>
    <div class="province">
        <!-- 左边组件 -->
       <div class="left" @click="citySonCom"></div>
        <!-- 右边组件 -->
       <div class="right" >
          <div v-for="(item,index) in getCityData" :key="index" class="littleCity">
              <p  @click="littleCityClose(item.CityName)">{{item.CityName}}</p>
          </div>
       </div>
    </div> 
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    props:["cityCom",'Id',"changeSon"],
    watch:{
        Id(){
            // console.log('111111')
            this.getCityDatas(this.Id)
            console.log(this.getCityData)
        }
    },
    components:{

    },
    data(){
        return {
                
        }
    },
    computed:{
        ...mapState({
            getCityData:state=>state.CityDatas.getCityData
        })
    },
    methods:{
        //此子组件
        citySonCom(){
            this.cityCom()
           
        },
        //点击小城市回到表单城市页面
        littleCityClose(itemLittleName){
            // console.log(itemLittleName)
              this.cityCom()                    //取消此小城市动画
               this.changeSon(itemLittleName) //取消省份动画 并传值回去到cityName文件里
        },
        ...mapActions({
            getCityDatas:'CityDatas/getCityDatas'
        })
    },
    created(){
    },
    mounted(){
        console.log(this.getCityData)
        // console.log(this.cityList,'000000000000000')
    }
}
</script>
<style scoped lang="scss">
    .province{
        width: 100%;
        height: 100%;
        display: flex;
        .left{
            width: 30%;
            height: 100%;
            background: rgba(0, 0, 0, 0.4);
        }
        .right{
            flex: 1;
            background: #fff; 
            overflow: hidden;
            overflow-y: auto;
            font-size: 12px;
              .littleCity{
                height: 40px;
                line-height: 40px;
                border-bottom: 1px solid #eee;
                padding-left: 12px;
            }
            
        

        }
       
    }

     
    
</style>