/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 19:07:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-02 21:08:45
 * @Description: 
 */
import { getMasterBrandList } from "@/services/index";

const state = {
    list: []
}
const mutations = {
    UpdateList(state, payload) {
        console.log(payload)
        state.list = payload
    }
}
const actions = {
    async getMasterBrandList({ commit }, payload) {
        let res = await getMasterBrandList();
        if (res.data.code == 1) {
            let arr = [];
            let brr = [];
            let all=[]
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
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}