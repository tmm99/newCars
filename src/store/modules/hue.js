/*
 * @Author: 席鹏昊
 * @Date: 2019-12-05 11:50:41
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-10 16:32:11
 * @Description: 
 */

//引入数据
import { getModelImageYearColor } from "@/services/index";

const state = {
    list: [],
    colorList:[]
}

const mutations = {
    //更改list
    Uplist(state,payload){
        state.list=payload.arr;
        state.colorList=payload.brr;
    }
}

const actions = {
    async getModelImageYearColors({ commit }, payload) {
        //获取数据
        let src = await getModelImageYearColor(payload)
        //判断
        if (src.data.code === 1) {
            let arr = [];
            let brr=[];
            for (let item in src.data.data) {
                //查找如果有就返回下标找不到就返回-1
                let index=arr.findIndex(value=>value.name===item)
                //判断不存在就给他添加进去
                if (index == -1) {
                    arr.push(item)
                    brr.push(src.data.data[item])
                }
            }
            commit("Uplist",{arr,brr})
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}