/*
 * @Author: 席鹏昊
 * @Date: 2019-12-05 11:48:47
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-05 13:59:40
 * @Description: 
 */
import Axios from "@/utils/index.js";

export let getModelImageYearColor=(id)=>{
    return Axios(`/v2-car-getModelImageYearColor.html?SerialID=${id}`)
}