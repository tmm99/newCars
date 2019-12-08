/*
 * @Author: your name
 * @Date: 2019-12-09 00:11:37
 * @LastEditTime: 2019-12-09 00:28:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\store\modules\cityName.js
 */
import { getcityList } from '../../services/modules/cityName';

const state={
    cityList:[]
}

const mutations={
    newCityName(state,payload){
        state.cityList=payload
        console.log(state.cityList)
    }   
}

const actions={
    async getcityList({commit},payload){
        let res=await getcityList()
        commit('newCityName',res)
        console.log(res)
    }
}

export default{
    state,
    mutations,
    actions
}