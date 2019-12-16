/*
 * @Author: your name
 * @Date: 2019-12-13 19:33:58
 * @LastEditTime: 2019-12-16 08:33:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vueparamse:\call\src\store\modules\getYear.js
 */
import {getYear} from '../../services/index'

const state={
    year:{}
}

// function listYear(){
//     year=year.map
// }

const mutations= {
    getNewYear(state,payload){
        console.log(payload)
        state.year=payload
        console.log( state.year)
    }
}

const actions={
    async getYear({commit},payload){
        console.log(payload)
        let res=await getYear(payload)
        commit('getNewYear',res.data.data)
        // console.log(res)
    }
}

export default{
    namespaced: true,
    state,
    mutations,
    actions
}

