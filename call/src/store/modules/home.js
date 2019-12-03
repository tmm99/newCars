/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 19:07:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 09:28:42
 * @Description: 
 */
import { getMasterBrandList, sidebar } from "@/services/index";

const state = {
    list: [],
    Rlist:[]
}
const mutations = {
    UpdateList(state, payload) {
        state.list = payload
    },
    UpdateRlist(state,payload){
        state.Rlist=payload
    }
}
const actions = {
    async getMasterBrandList({ commit }, payload) {
        let res = await getMasterBrandList();
        if (res.data.code == 1) {
            let arr = [];
            let brr = [];
            let all = []
            res.data.data.map((item, index) => {
                arr.push(item.Spelling[0]);
                arr = [...new Set(arr)];
            });
            arr.map(item1 => {
                brr = [];
                res.data.data.map((item, index) => {
                    if (item1 == item.Spelling[0]) {
                        brr.push(item);
                    }
                });
                all.push({ title: item1, children: brr });
            });
             commit("UpdateList", all)
        }
    },
    async sidebar({commit},payload){
        let res= await sidebar(payload)
        if(res.data.code===1){
            commit("UpdateRlist",res.data.data)
        }

    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}