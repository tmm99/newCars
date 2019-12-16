/*
 * @Author: your name
 * @Date: 2019-12-09 00:09:03
 * @LastEditTime: 2019-12-11 15:06:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\services\modules\cityName.js
 */
import Axios from '@/utils/index'

export let getcityList=()=>{
    return Axios('/v1-city-alllist.html')
}