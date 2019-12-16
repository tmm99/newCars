/*
 * @Author: 席鹏昊
 * @Date: 2019-12-04 10:59:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-09 16:16:05
 * @Description: 
 */
import Axios from "@/utils/index";

export let getInfoAndListById=(id,carid)=>{
    return Axios(`/v2-car-getInfoAndListById.html?SerialID=${id}&carId=${carid}`)
}