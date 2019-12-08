<!--
 * @Author: your name
 * @Date: 2019-12-09 00:06:44
 * @LastEditTime: 2019-12-09 00:19:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\views\city\cityName.vue
 -->
<template>
    <div>
city
    </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
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
        ...mapState({
            cityList:state=>state.cityName.cityList
        })
    },
    methods:{
        ...mapActions({
            getcityList:"cityName/getcityList"
        })
    },
    created(){
        this.getcityList()
        console.log(this.cityList)
    },
    mounted(){

    }
}
</script>
<style scoped lang="">

</style>