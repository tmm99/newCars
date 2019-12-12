/*
 * @Author: your name
 * @Date: 2019-12-10 19:58:11
 * @LastEditTime: 2019-12-12 10:21:57
 * @LastEditors: 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\services\modules\cityDatas.js
 */
import Axios from '@/utils/index'

export let getCityDatas=(id)=>{
    console.log(id,'77777777')
    return Axios(`/v1-city-alllist.html?provinceid=${id}`)
}