/*
 * @Author: your name
 * @Date: 2019-12-09 15:19:24
 * @LastEditTime: 2019-12-09 21:06:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings EditS
 * @FilePath: \vueparamse:\call\src\store\modules\cityList.js
 */

import {getCityListS} from '@/services/index'

const state={
    CityLists:[]
}

const mutations={
    newCityLists(state,payload){
        state.CityLists = payload
    }
}

const actions={ 
    async getCityListS({commit},payload){
        console.log(payload,"payload")
        let res =await getCityListS(payload)

        // console.log(payload)
        commit('newCityLists',res.data.data.list)
        console.log(res.data.data.list,2222)
    }

}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}
