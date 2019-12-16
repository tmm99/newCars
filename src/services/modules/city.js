/*
 * @Author: 席鹏昊
 * @Date: 2019-12-09 18:12:58
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-09 21:06:39
 * @Description: 
 */
import Axios from "@/utils/index";
export let City=(params)=>{
    return Axios("/v1-city-alllist.html",{params})
}