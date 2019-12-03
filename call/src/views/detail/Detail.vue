<!--
 * @Author: your name
 * @Date: 2019-12-03 09:08:57
 * @LastEditTime: 2019-12-03 10:39:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \call\src\components\detail\Detail.vue
 -->
<template>
    <div class="car">
        <div class="cont">
            <div class="img">
                <img src="http://img2.bitautoimg.com/autoalbum/files/20160831/022/12341202292972_5235269_8.jpg" />
                <span data-hover="hover">7942张照片</span>
            </div>
            <!-- 中 -->
            <div class="info">
                <div>
                    <p>21.22-32.88
                    <span>万</span>
                </p>
                <p>指导价 28.68-40.18万</p>
                </div>
                <div class="row">
                    <button >询问低价</button>
                </div>
            </div>
            <!-- 下 -->
            <div class="car-list">
                <div class="type">
                    <span class="all">全部</span>
                    <span>2019</span>
                </div>
            </div>

            <div>
                <p></p>
                <ul>
                    <li></li>
                </ul>
            </div>

        </div>
    </div>
</template>
<script>
import axios from 'axios'
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
        // axios.get('https://baojia.chelun.com/v2-car-getInfoAndListById.html').then(res=>{
        //     console.log(res)
        // })
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

.info p:nth-child(2){
    font-size: 12px;
   color: silver;
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
</style>