/*
 * @Author: 席鹏昊
 * @Date: 2019-12-06 14:22:42
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-06 14:29:11
 * @Description: 
 */
import Axios from "@/utils/index";

export let Picture=(params)=>{
    return Axios("/v2-car-getCategoryImageList.html",{params})
}