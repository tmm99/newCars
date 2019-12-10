<!--
 * @Author: your name
 * @Date: 2019-12-09 14:26:15
 * @LastEditTime: 2019-12-10 20:53:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\views\province\province.vue
 -->
<template>
    <div class="province">
        <!-- 左边组件 -->
       <div class="left" @click="citySonCom">left</div>
        <!-- 右边组件 -->
       <div class="right" >right</div>
    </div> 
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    props:["cityCom"],
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

        ...mapActions({
            getCityDatas:'CityDatas/getCityDatas'
        })
    },
    created(){
        this.getCityDatas()
    },
    mounted(){
        console.log(this.getCityData.CityID)
    }
}
</script>
<style scoped lang="scss">
    .province{
        width: 100%;
        height: 100%;
        display: flex;
        .left{
            width: 20%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
        }
        .right{
            flex: 1;
            background: #fff;
        }

    }

     
    
</style>