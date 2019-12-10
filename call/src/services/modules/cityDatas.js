/*
 * @Author: your name
 * @Date: 2019-12-10 19:58:11
 * @LastEditTime: 2019-12-10 20:50:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\services\modules\cityDatas.js
 */
import Axios from '@/utils/index'

export let getCityDatas=(id)=>{
    return Axios(`/v1-city-alllist.html?provinceid=${id}`)
}