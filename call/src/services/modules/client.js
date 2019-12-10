/*
 * @Author: 席鹏昊
 * @Date: 2019-12-09 10:26:42
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-09 18:15:16
 * @Description: 
 */
import Axios from "@/utils";

export let Client=()=>{
    return Axios("/location-client.html")
}