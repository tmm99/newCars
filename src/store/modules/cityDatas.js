/*
 * @Author: your name
 * @Date: 2019-12-10 20:02:54
 * @LastEditTime: 2019-12-12 10:22:57
 * @LastEditors: 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\store\modules\cityDatas.js
 */
import {getCityDatas} from '@/services/index'

const state={
    getCityData:[]
}

const mutations= {
    getNewData(state,payload){
        state.getCityData=payload
    }
}

const actions={
    async getCityDatas({commit},payload){
       let res=await getCityDatas(payload)
       console.log(res.data.data)
        commit('getNewData',res.data.data)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}