import { mapActions, mapState } from 'vuex';
<!--
 * @Author: your name
 * @Date: 2019-12-12 19:42:39
 * @LastEditTime: 2019-12-16 12:03:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\views\AllColor.vue
 -->
<template>
    <div class="colorBox">
        <div class="colorHead" @click="concelColor">全部颜色</div>
        <div class="colorDate">
            <!-- <div  > -->
                 <p v-for="(val,key,index) in getYears" :key="index" class="yearList">{{key}}</p>
            <!-- </div> -->
        </div>
        <div class="colorCont">颜色</div>
       
    </div>
</template>
<script>
import {mapActions,mapState,mapMutations} from 'vuex'
export default {
    props:['colorSonCom','carid'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState({
            getYears:state=>state.getYear.year,
        })
    },
    methods:{
        ...mapActions({
                getYear:'getYear/getYear',
        }),
     
        //点击取消动画
        concelColor(){
            this.colorSonCom()
        }
    },
    created(){
        this.getYear(this.carid)
       
    },
    mounted(){
        console.log(this.getYears)
    }
}
</script>
<style scoped lang="scss">
.colorBox{
    width: 100%;
    height: 100%;
    background: #eee;
    .colorHead{
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #fff;
        color: skyblue;
        margin-top: 10px;
        text-align: center;      
    }
    .colorDate{
            width: 100%;
            height: 30px;
            line-height: 30px;
            background: #fff;
            margin-top: 10px;
            display: flex;
            overflow: scroll;
            .yearList{
                display: flex;
                flex-wrap: nowrap;
                width: 100px;
                overflow: scroll;
                flex-shrink: inherit;
                // background: #eee;
                height: 30px;
                // line-height: 30px;
            }

        }
        .colorCont{
            width: 100%;
            height: auto;
            background: #fff;
            margin-top: 10px;
        }
}
</style>