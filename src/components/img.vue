<!--
 * @Author: 席鹏昊
 * @Date: 2019-12-03 20:15:43
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 20:22:17
 * @Description: 
 -->
<template>
    <div>
        <img :src="url" alt="">
       
     
    </div>
</template>
<script>
export default {
    props:["url"],
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
        console.log(this)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>