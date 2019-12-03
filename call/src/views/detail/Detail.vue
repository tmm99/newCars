<!--
 * @Author: your name
 * @Date: 2019-12-03 09:08:57
 * @LastEditTime: 2019-12-03 18:43:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \call\src\components\detail\Detail.vue
 -->
<template>
    <div class="car">
        <div class="cont">
            <!-- 图片部分 -->
            <div class="img">
                <img :src='this.detailData.CoverPhoto' @click="goPic(detailData.SerialID)"/>
                <span data-hover="hover">{{this.detailData.pic_group_count}}</span>
            </div>
            <!-- 询问低价 -->
            <div class="info">               
                <div>
                    <p>{{this.detailData.market_attribute.dealer_price}}</p>
                    <p>指导价 {{this.detailData.market_attribute.official_refer_price}}</p>
                </div>
                <div class="row">
                    <button @click="lowerPrice(detailData.SerialID)">询问低价</button>
                </div>
            </div>
            <!-- 相关信息 -->
            <div class="car-list">
                <div class="type">
                    <span class="all">全部</span>
                    <span>2019</span>
                </div>
            </div>

            <div v-for="(item,index) in detailData.list" :key="index">
                <p class="p">
                    <span>{{item.exhaust_str}}</span>
                    <span>{{item.max_power_str}}</span>
                    <span>{{item.inhale_type}}</span>
                </p>
                <ul class="ul">
                    <li>
                        <p><span>{{item.market_attribute.year}}款</span><span>{{item.car_name}}</span></p>
                        <p><span>{{item.horse_power}}马力</span><span>{{item.gear_num}}档</span><span>{{item.trans_type}}</span></p>
                        <p>指导价<span>{{item.market_attribute.dealer_price_max}}</span><span class="twospan">{{item.market_attribute.dealer_price_min}}起</span></p>                     
                         <p class="price" @click="everyLower">询问底价</p>
                    </li>
                </ul> 
            </div>
       
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props:{},
    components:{

    },
    data(){
        return {
            detailData:[],
            newId:''
        }
    },
    computed:{ 

    },
    methods:{
        //底价路由
        lowerPrice(lowerId){
            console.log(lowerId)
            this.$router.push({path:'/lowerPrice',query:{lowerid:lowerId}})
        },
        //顶部图片路由
          goPic(newId){
            console.log(newId)
            this.$router.push({path:'/lowerPrice',query:{id:newId}})
        },
        everyLower(){
            this.$router.push('/lowerPrice')

        }
    },
    created(){
        axios.get('https://baojia.chelun.com/v2-car-getInfoAndListById.html',{params:{SerialID:this.$route.query.SerialID}}).then(res=>{
            console.log(res.data.data)
            //如果收到id 并且请求成功 
            if(res.data.code==1){
             this.detailData=res.data.data
            }
            
        })
    },
    mounted(){

    }
}
</script>
<style scoped lang="css">
    .car{
        width: 100%;
        height: 100%;
        background: #eee;
    }
    .cont{
          width: 100%;
        height: 100%;
    }
    .img{
        position: relative;
        height: 140px;
        overflow: hidden;
       }
       

.img>img{
    width: 100%;
    height:180px;
    
}
.img>span{
    position: absolute;
    bottom: 15px;
    right: 10px;
    color: #fff;
    padding: 1px 3px;
    border-radius: 10px;
    background: rgba(0,0,0,.6);
    font-size:12px;
}
.info{
    height: 63px;
    padding: 15px 10px 5px;
    position: relative;
    background: #fff;
    display: flex;
    justify-content: space-around;
}
.info p:first-child {
    font-size: 15px;
    color: red;
    font-weight: 500;
}
.info p:first-child span{
    font-size: 14px;
    font-weight: 400;
}

.info p{
    padding-top: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
 
}

.row{
    width: 50%;
    /* background: #00afff; */
    color: #fff;
    height:30px;
    border-radius:5px;
    margin-top: 10px;
  
}
.row button{
    border-radius:5px;
    font-size: 18px;
    height: 30px;
    width: 100%;
    border: none;
    outline: none;
    background: #00afff;
    color: #fff;
    box-sizing: border-box;

}
.type{
    border-top: 10px solid #f4f4f4;
    padding: 0 5px;
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    background: #fff;
}


.all{
    margin-right: 10px;
      color: #00afff;
}

.ul{
    height: 110px;
    background: #fff;

}
.ul li p:first-child{
    font-size: 15px;
    padding: 8px;
}
.ul li p:nth-child(2){
    font-size: 12px;
    color: silver;
    padding-left: 8px;
    padding-bottom: 8px;

}
.ul li p:nth-child(3){
    font-size: 12px;
    color: silver;
    padding-left: 8px;
    padding-bottom: 8px;
    margin-left: 45%;
   
}

.twospan{
    color: red;
    font-size: 14px;
    padding-left: 10px;
}

.p{
    height: 20px;
    line-height: 20px;
    background: #eee;
    width: 100%;
}
.price{
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-top: 1px solid #eee;
    color: #00afff;
    font-size: 18px;
}
</style>