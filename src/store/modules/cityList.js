/*
 * @Author: your name
 * @Date: 2019-12-09 15:19:24
 * @LastEditTime: 2019-12-15 19:53:41
 * @LastEditors: 席鹏昊
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
        let res =await getCityListS(payload)
        commit('newCityLists',res.data.data.list)
    }

}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}
