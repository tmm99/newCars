/*
 * @Author: 席鹏昊
 * @Date: 2019-12-03 13:41:05
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-05 18:55:07
 * @Description: 
 */
import Axios from "@/utils/index.js";

export let getImageList=(params)=>{
        return Axios("/v2-car-getImageList.html",{params})
}