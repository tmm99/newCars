<!--
 * @Author: your name
 * @Date: 2019-12-06 18:21:58
 * @LastEditTime: 2019-12-06 18:24:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\views\lowerPrice\Loadding.vue
 -->
<template>
    <div class="loading">
           <img src="@/assets/fail.jpg" alt="">
    </div>
</template>
<script>
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="scss">
.loading{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left:0 ;
    z-index: 99;
    img{
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
}
</style>