/*
 * @Author: your name
 * @Date: 2019-12-09 15:19:40
 * @LastEditTime: 2019-12-09 20:02:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\services\modules\cityList.js
 */
import Axios from '@/utils/index'
export let getCityListS=({carId,cityId})=>{
    return Axios(`/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}