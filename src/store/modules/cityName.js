/*
 * @Author: your name
 * @Date: 2019-12-09 00:11:37
 * @LastEditTime: 2019-12-15 19:56:03
 * @LastEditors: 席鹏昊
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\store\modules\cityName.js
 */
import { getcityList } from '../../services/modules/cityName';

const state={
    cityList:[]
}

const mutations={
    newCityName(state,payload){
        state.cityList =payload
    }   
}

const actions={
    async getcityList({commit},payload){
        let res=await getcityList()
        commit('newCityName',res.data.data)
    }
}

export default{
    namespaced: true,//加上它  为了区分 vue文件中 解构mapActions里的方法时 需加文件名 eg:cityName/getcityList
    state,
    mutations,
    actions
}