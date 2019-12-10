/*
 * @Author: 席鹏昊
 * @Date: 2019-12-09 18:15:38
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-10 10:36:27
 * @Description: 
 */
import { City,Client } from "@/services/index";

const state = {
    //省
    list:[],
    //定位
    location:[],
    //城镇
    town:[]
}

const mutations = {
    //市级数据
    upList(state,payload){
        state.list=payload;
    },
    //定位
    uplocation(state,payload){
    
        state.location=payload
    }, 
    //城镇
    uptown(state,payload){
        console.log(payload,"777777")
        state.town=payload;
    }
}

const actions = {
    //市级数据
    async City({ commit }, payload) {
        let params={provinceid:payload};
        let src = await City(params);
        if(payload){
            console.log(src,"++++")
            if(src.data.code===1){
                commit("uptown",src.data.data)
            }
        }else{
            if(src.data.code===1){
                commit("upList",src.data.data)
            }
        }
        
        
       
    },
    //定位的数据
    async location({commit},payload){
        let src =await Client();
        if(src.data.code===1){
            commit("uplocation",src.data.data);
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}