/*
 * @Author: 席鹏昊
 * @Date: 2019-12-04 10:59:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 16:56:07
 * @Description: 
 */
import Axios from "@/utils/index";

export let getInfoAndListById=(id)=>{
    return Axios(`/v2-car-getInfoAndListById.html?SerialID=${id}`)
}