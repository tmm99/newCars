/*
 * @Author: 席鹏昊
 * @Date: 2019-12-03 09:06:44
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 09:16:29
 * @Description: 
 */

import Axios from "@/utils/index";

export let sidebar=(id)=>{
    return Axios(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${id}`)
}