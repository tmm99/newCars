/*
 * @Author: 席鹏昊
 * @Date: 2019-12-03 09:11:49
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-05 21:00:00
 * @Description: 
 */

// 引入axios的返回数据
import { getImageList,getImageTypeList } from "@/services/index";

const state = {
    list: [],   
    CarId: "",//车款id
    ColorID: "",//颜色id

    SerialID: "", //车系id
    ImageID: "", //分类id
    imageList: [], //分类图片列表
    count: '',  //当前分类图片总数
    page: 1,  //当前分页
    pageSize: 30 //每页数量
}
const mutations = {
    // 设置serialId
    setSerialId(state, payload){
        state.SerialID = payload;
    },
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
    },
    // 修改图片分类id
    setImageId(state, payload){
        state.ImageID = payload;
    },
    // 修改当前分类图片列表和总数
    setImageList(state, payload){
        state.count = payload.Count;
        // 实现上拉加载
        if (state.page == 1){
            state.imageList = payload.List;
        }else{
            state.imageList = state.imageList.concat(payload.List);
        }
    },
    // 修改当前分页
    setPage(state, payload){
        state.page = payload;
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
                   value.Url=value.Url.replace("{0}",3)
                })
            })
            commit('upDateList', res.data.data)
        }
    },
    
    // 图片分类列表的请求
    async getImageTypeList({commit, state}, payload){
        if (payload){
            commit('setPage', payload);
        }
        let params = {
            SerialID: state.SerialID,
            ImageID: state.ImageID,
            page: state.page,
            pageSize: state.pageSize
        }
        let res = await getImageTypeList(params);
        console.log('res...', res);
        let {Count, List} = res.data.data;
        commit('setImageList', {Count, List});
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}