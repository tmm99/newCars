/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 19:05:36
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-02 20:04:06
 * @Description: 
 */
import Axios from"@/utils/index.js";

export let getMasterBrandList=()=>{
    return Axios("/v2-car-getMasterBrandList.html")
}