/*
 * @Author: 席鹏昊
 * @Date: 2019-12-03 13:41:05
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-16 15:57:04
 * @Description: 
 */
import Axios from "@/utils/index.js";



export let getImageList=(id)=>{
        return Axios(`/v2-car-getImageList.html?SerialID=${id}`)
}