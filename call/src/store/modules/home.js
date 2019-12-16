/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 19:07:10
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-03 19:03:33
 * @Description: 
 */
//引入axios方法
import { getMasterBrandList, sidebar } from "@/services/index";

const state = {
    //总数据
    list: [],
    //右边栏数据
    Rlist:[],
    //loading开启
    loadingName:true
}
const mutations = {
    //总数据
    UpdateList(state, payload) {
        state.list = payload
    },
    //右边栏的数据更改
    UpdateRlist(state,payload){
        state.Rlist=payload
    },
    //loading方法
    headLoading(state,payload){
        state.loadingName=payload
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
            //排序玩的数据
             commit("UpdateList", all)
             //控制loading
             commit("headLoading",false)
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