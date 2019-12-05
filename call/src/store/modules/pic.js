/*
 * @Author: 席鹏昊
 * @Date: 2019-12-03 09:11:49
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-05 21:00:00
 * @Description: 
 */

// 引入axios的返回数据
import { getImageList } from "@/services/index";

const state = {
    list: [],
    CarId:"",//车款ID
    ColorID:""//颜色id
}
const mutations = {
    //详情数据的更改
    upDateList(state, payload) {
        state.list = payload
    },
    //改变颜色id
    alterId(state,payload){
        state.ColorID=payload;
    },
    //改变车系id
    CarId(state, payload){
        state.CarId=payload;
    }
}
const actions = {
    //详情数据的请求
    async getImageList({ commit,state }, payload) {
        let params={SerialID:payload}
        //判断颜色id存不存在
        if(state.ColorID){
            params.ColorID=state.ColorID
        }

        let res = await getImageList(params)
        if (res.data.code === 1) {
            res.data.data.forEach(item=>{
                item.List.forEach(value=>{
                   return value.Url=value.Url.replace("{0}",3)
                })
            })
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