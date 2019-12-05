/*
 * @Author: 席鹏昊
 * @Date: 2019-12-03 09:11:49
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 20:07:27
 * @Description: 
 */

// 引入axios的返回数据
import { getImageList } from "@/services/index";

const state = {
    list: []
}
const mutations = {
    //详情数据的更改
    upDateList(state, payload) {
        state.list = payload
    }
}
const actions = {
    //详情数据的请求
    async getImageList({ commit }, payload) {
        let res = await getImageList(payload)
        if (res.data.code === 1) {
            commit('upDateList', res.data.data)
        }
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}