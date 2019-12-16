<!--
 * @Author: your name
 * @Date: 2019-12-13 07:57:19
 * @LastEditTime: 2019-12-13 15:56:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\views\AllCarStyle.vue
 -->
<template>
    <div class="carsBox">
         <div class="carHead" @click="concelCar">全部车款</div>
        <div class="carDate">2017</div>
        <div class="carCont">内容</div>
    </div>
</template>
<script>
export default {
    props:['carSonCom'],
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        //点击取消动画
        concelCar(){
            this.carSonCom()
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
    .carsBox{
          width: 100%;
          height: 100%;
          background: #eee;
            .carHead{
                width: 100%;
                height: 40px;
                line-height: 40px;
                background: #fff;
                color: skyblue;
                margin-top: 10px;
                text-align: center;        
    }
    .carDate{
                width: 100%;
                height: 30px;
                line-height: 30px;
                background: #fff;
                margin-top: 10px;

            }
            .carCont{
                width: 100%;
                height: auto;
                background: #fff;
                margin-top: 10px;

            }
    }
</style>