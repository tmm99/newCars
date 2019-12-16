/*
 * @Author: 席鹏昊
 * @Date: 2019-12-09 10:32:00
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-09 13:53:58
 * @Description: 
 */

//引入组件
import {Client} from "@/services/index";

const state={
        cityName:{}
}

const mutations={

    alterName(state,payload){
          state.cityName=payload
    }
}

const actions={
    async lowprice({commit}){
      
        let src=await Client();
        if(src.data.code===1){
            commit("alterName",src.data.data)
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}