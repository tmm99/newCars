<!--
 * @Author: your name
 * @Date: 2019-12-09 00:06:44
 * @LastEditTime: 2019-12-16 16:44:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\views\city\cityName.vue
 -->
<template>
    <div class="cityBox">
                <p @click="changeSon">自动定位</p>
                <p @click="changeSon">北京</p>
                <p>省市</p>
                <div v-for="(item,index) in cityList" :key="index" class="cont">
                    <div class="contList"  @click="showCity(item.CityID)">
                        <div>{{item.CityName}}</div>
                        <div>></div>
                    </div>
                </div>
                <!-- 城市组件 -->
                <div :class="isShowCity?'cityShow':'cityHide'" class="city">
                      <Province :cityCom="cityCom" :Id='id' :changeSon='changeSon'></Province>
                </div>
            </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
import Province from './province/province.vue'
export default {
    props:["changeCom"],
        
    components:{
        Province
    },
    data(){
        return {
            isShowCity:false,
            id:''
        }
    },
    computed:{
        ...mapState({
            cityList:state=>state.cityName.cityList,
        })
    },
    methods:{
        ...mapActions({
            getcityList:"cityName/getcityList",
            
        }),
        // 动画组件接值
        changeSon(itemLittleName){          //接收传回的点击小城市值
            this.changeCom(itemLittleName)  //接收传回的点击小城市值 继续传回到LowerPricre里
            // console.log(itemLittleName)
        },
        //动画城市组件
        showCity(item){
            console.log(item)
            this.id=item
            this.isShowCity=true
        },
        //子父组件传值
        cityCom(){
            this.isShowCity=false
        }
    },
    created(){
        this.getcityList()
        
        // console.log(this.this.cityId,'22222222222')
    },
    mounted(){
        // console.log(this.cityList,'0000000000000000000000000000')
    }
}
</script>
<style scoped lang="scss">
 .cityBox{
     width: 100%;
     height: 100%;
     overflow: hidden;
     overflow-y: auto;

 }
    .cityBox p:first-child{
        height: 20px;
        background: #eee;
        line-height: 20px;
        padding-left: 5px;
        font-size: 10px;
    }
    .cityBox p:nth-child(2){
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
        font-size: 13px;
    }
      .cityBox p:nth-child(3){
        height: 20px;
        background: #eee;
        line-height: 20px;
        padding-left: 5px;
        font-size: 10px;
    }
    .contList{
        height: 40px;
        line-height: 40px;
        padding-left: 15px;
        font-size: 13px;
        border-bottom: 1px solid #eee; 
         display: flex;
        justify-content: space-between;
    }
    .contList div:nth-child(2){
        padding-right: 15px;
        font-size: 18px;
        color: #ccc;
    }
    .city{
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba(0, 0, 0, 0.3);
        top: 0;
        left: 0;
        overflow-y: auto;
           
    }
     .cityShow{
                transition-delay: 0s;
                transition-duration: .5s;
                transform: translateX(0%);
            }
    .cityHide{
                transition-delay: 0s;
                transition-duration: .5s;
                transform: translateX(100%);
            }        
    
   
   
</style>