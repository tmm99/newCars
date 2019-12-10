/*
 * @Author: 席鹏昊
 * @Date: 2019-12-04 10:59:12
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-04 11:12:54
 * @Description: 
 */
import Axios from "@/utils/index";

export let getInfoAndListById=(id)=>{
    return Axios(`/v2-car-getInfoAndListById.html?SerialID=${id}`)
}