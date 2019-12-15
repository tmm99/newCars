/*
 * @Author: your name
 * @Date: 2019-12-09 00:11:37
 * @LastEditTime: 2019-12-12 13:44:59
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
        state.cityList =payload
        // console.log(state.cityList,"1111111111111")
    }   
}

const actions={
    async getcityList({commit},payload){
        let res=await getcityList()
        // console.log(payload,"payload")
        // console.log(res)
        commit('newCityName',res.data.data)
        // console.log(res.data.data,11111111)
        // console.log(res.data.data[1].CityID,res.data.data[1].CityName)
        // console.log(res)
    }
}

export default{
    namespaced: true,//加上它  为了区分 vue文件中 解构mapActions里的方法时 需加文件名 eg:cityName/getcityList
    state,
    mutations,
    actions
}