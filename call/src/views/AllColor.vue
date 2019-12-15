import { mapActions, mapState } from 'vuex';
<!--
 * @Author: your name
 * @Date: 2019-12-12 19:42:39
 * @LastEditTime: 2019-12-15 21:01:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\views\AllColor.vue
 -->
<template>
    <div class="colorBox">
        <div class="colorHead" @click="concelColor">全部颜色</div>
        <div class="colorDate">2017</div>
        <div class="colorCont">颜色</div>
        <!-- <div>{{carid}}</div> -->
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
        console.log(this.getYear)
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

        }
        .colorCont{
            width: 100%;
            height: auto;
            background: #fff;
            margin-top: 10px;
        }
}
</style>