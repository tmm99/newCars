/*
 * @Author: 席鹏昊
 * @Date: 2019-12-03 09:11:49
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 14:14:34
 * @Description: 
 */


import {getImageList} from "@/services/index";

const state={
    list:[]
}
const mutations={
    upDateList(state,payload){
        state.list=payload
    }
}
const actions={
    async getImageList({commit},payload){
        let res= await getImageList(payload)
        if(res.data.code===1){
            commit('upDateList',res.data.data)
        }
    }
}
export default{
    namespaced: true,
    state,
    mutations,
    actions
}