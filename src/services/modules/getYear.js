/*
 * @Author: your name
 * @Date: 2019-12-13 19:34:28
 * @LastEditTime: 2019-12-15 19:32:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\services\modules\getYear.js
 */
import Axios from '@/utils/index'

export let getYear=(id)=>{
    return Axios(`/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}