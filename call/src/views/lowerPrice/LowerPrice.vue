<!--
 * @Author: your name
 * @Date: 2019-12-05 11:28:38
 * @LastEditTime: 2019-12-09 21:05:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \call\src\views\lowerPrice\LowerPrice.vue
 -->
<template>
    <div class="lowPrice">
        <header>
            <p>可向多个商家询问最低价,商家及时回复</p>
            <img src="">
        </header>
        <div class="content">
            <div class="top">
                <img :src="detailData.Picture" class="img"/>
                <div class="contLeft">
                    <p>{{carName}}</p>
                    <p><span>{{detailData.list[0].market_attribute.year}}款</span><span class="twospan">{{detailData.list[0].car_name}}</span></p>
                </div>
            </div>
            <div class="middle">
                <p class="tip">个人信息</p>
                <ul>
                    <li>
                        <span>姓名</span>
                        <input placeholder="输入你的真实中文姓名"/>
                    </li>
                    <li>
                         <span>手机</span>
                        <input placeholder="输入你的真实手机号码"/>
                    </li>
                    <li>
                         <span>城市</span>
                         <span @click="city">北京</span>
                    </li>
                </ul> 
                <div></div>

            </div>
            <div class="bottom">
                <button>询问最低价</button>
            </div>

        </div>
        <div class="footer">
            <p class="tip">选择报价经销商</p>
            <ul>
                <li v-for="(item,index) in CityLists" :key="index">
                    <p>
                        <span>{{item.dealerShortName}}</span>
                        <span>万</span>
                    </p>
                    <p>
                        <span>{{item.address}}</span>
                        <span>售多是</span>
                    </p>
                </li>
               
               
            </ul>
        </div>
        <!-- 动画 -->
        <div :class="[isShow?'show':'shade']" class="box">
              <CityName :changeCom="changeCom"></CityName>
        </div>
      
    </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import CityName from '../city/cityName'
export default {
    props:{

    },
    components:{
        CityName
    },
    data(){
        return {
            isShow:false,
            cityId:201
        }
    },
    computed:{
       ...mapState({
            carName:state=>state.detail.carName,
            detailData: state => state.detail.list,
            // 城市ID
            cityList:state=>state.cityName.cityList,
            //经商列表
            CityLists:state=>state.CityList.CityLists
         
       })
    },
    methods:{
         //结构vuex方法
            ...mapActions({
                 getInfoAndListById: "detail/getInfoAndListById",
                 getCityListS:'CityList/getCityListS',
                // 城市ID
                // getcityList:"cityName/getcityList",
            }),
            ...mapMutations({
                UpCurrent: "detail/UpCurrent"
            }),
            //城市跳转
            city(){
                this.isShow=true
            },
            //动画组件传值
            changeCom(){
                this.isShow=false
            }
    },
    created(){
         this.getInfoAndListById(this.$route.query.SerialID,this.$route.query.carid);
        //城市ID
        // let cityName = this.$store.state.cityName
        // console.log(cityName.cityList,"qqqqqqqqq")
         console.log(this.$route.query.carid,"carId")
         console.log(this.cityId,"1212122")
        this.getCityListS({carId:this.$route.query.carid,cityId:this.cityId})
    },
    mounted(){
        // console.log(this.$route.query.lowerid)
        // console.log(this.detailData)
        // console.log(this.$route.query.carid,"carId 111111111111")
        
        console.log(this.$store.state)
    }
}
</script>
<style scoped lang="scss">
    .lowPrice{
        width: 100%;
        height: 100%;
        overflow: hidden;
        overflow-y: scroll;
        header{
            height: .6rem;
            width: 100%;
            line-height: .6rem;
            background: #79cd92;
            z-index: 99;
            text-align: center;
            p{
                  color: #fff;
                  font-size: .3rem;
                  display: inline-block;
            }
        }
        .content{
            width: 100%;
            height: auto;          
            flex: 1;
            .top{
                padding:.32rem .18rem .24rem;
                height: 2rem;
                // background: ;
                box-sizing: border-box;
                display: flex;
                .img{
                    width: 2.3rem;
                    height: 1.41rem;
                    border: 1px solid #eee;
                    box-sizing: border-box;
                    border-radius: 5px;
                }
                .contLeft{  
                    margin-left: .2rem;
                    width: 4.3rem;
                    margin-top: .2rem;
                    :nth-child(2){
                        padding-top: .2rem;
                       .twospan{
                            padding-left: .2rem;
                       }
                    }
                }
            }
        }

        .middle{
            width: 100%;
            height: 100%;
            .tip {
                    padding: 0 .2rem;
                    height: .6rem;
                    line-height: .6rem;
                    font-size: .24rem;
                    color: #666;
                    background: #eee;
                }
                ul{
                    background: #fff;
                    padding: 0 .2rem;
                        li{
                            font-size: .32rem;
                            height: .88rem;
                            line-height: .88rem;
                            border-bottom: 1px solid #eee;
                            box-sizing: border-box;
                            color: #000;
                            input{
                                font-size: .32rem;
                                padding-right: .2rem;
                                width: 88%;
                                text-align: right;
                                box-sizing: border-box;
                                color: #555;
                                border: none;
                                outline: none;
                            }
                            
                        }
                }
                li, ul {
                    list-style-type: none;
                }
                ul li span:nth-child(2){
                    display: inline-block;
                    width: 88%;
                    color: #555;
                    text-align: right;
                    box-sizing: border-box;
                }
        }

        .bottom{
            background: #fff;
            text-align: center;
            padding-top: .3rem;
            padding-bottom: .28rem;
            button{
                    font-size: .32rem;
                    color: #fff;
                    width: 80%;
                    background: #3aacff;
                    height: .7rem;
                    border-radius: .1rem;
                    outline: none;
                    -webkit-appearance: none;
                    border: none;
            }
        }

        .footer{
            width:100%;
            // height:100%;
          
            .tip{
                height:.6rem;
                background:#eee;
                font-size:.24rem;
                color:#666;
                line-height:.6rem;
                padding:0 .2rem;
            }
            ul {
                background: #fff;
                padding: 0 .10rem;
                display: block;
                list-style-type: disc;
                margin-block-start: 1em;
                margin-block-end: 1em;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
                padding-inline-start: 32px;
                list-style: none;
                flex: 1;
                    li{
                        position: relative;
                        padding: .26rem 0 .26rem .20rem;
                        border-bottom: 1px solid #eee;
                        box-sizing: border-box;
                        height: 1.65rem;
                        p{
                            display: flex;
                            justify-content: space-between;
                            padding-top: .2rem;
                        }
                         p:first-child{
                            font-size: .3rem;
                        }
                         p:first-child span:last-child{
                            color:red;
                        }

                          p:nth-child(2){
                            font-size: .24rem;
                            color: #a2a2a2;
                        }
                    }
            }
        }
      
    .box{
           position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background:#fff;
            overflow: hidden;
            overflow-y: auto;
            
    }
        
     .show{
         transition-delay: 1s;
         transition-duration: 3s;
         transform: translateY(0%);
         z-index: 999;
     }
      .shade{
         transition-delay: 1s;
         transition-duration: 3s;
        transform: translateY(100%);
     }
    }
</style>