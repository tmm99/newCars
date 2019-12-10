/*
 * @Author: 席鹏昊
 * @Date: 2019-12-04 11:03:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-05 18:54:42
 * @Description: 
 */
import { getInfoAndListById } from '@/services/index';

const state = {
    list: [],//总数数据
    Slist: [],//当前年份数据
    year: [],//所有年份
    current: "全部",//你所在的年份
    carName:""   //传到底价的车名
}
//格式化数据
function concatList(list) {
    // 给list添加keys 属性
    list = list.map(item => {
        item.keys = `${item.exhaust_str}${item.max_power_str} ${item.inhale_type}`;
        return item
    })
    //newlist 的格式
    // let newList = [{
    //     key: "",
    //     list: []
    // }]
    let newList = [];
    list.forEach(item => {
        //查找keys
        let index = newList.findIndex(value => value.key === item.keys);
        //如果不等于-1找到了往list里面push没找到就直接push
        if (index !== -1) {
            newList[index].list.push(item);
        } else {
            newList.push({
                key: item.keys,
                list: [item]
            })
        }
    });
    return newList
}

//排序数据
function sortList(list) {
    list.sort((a, b) => {
        if (a["exhaust"] === b["exhaust"]) {
            if (a["max_power"] === b["max_power"]) {
                return a["inhale_type "] - b["max_power"]
            } else {
                return a["max_power"] - b["max_power"]
            }
        } else {
            return a["exhaust"] - b["exhaust"]
        }
    })
    return list
}
const mutations = {
    UpDateState(state, payload) {
        state.list = payload;
        state.year=[];
        state.carName=payload.AliasName
        console.log(state.carName)
        //拿到年份
        let year = payload.list.map(item => item.market_attribute.year);
        //去重 拿到应有的年份
        state.year = state.year.concat(["全部"],[...new Set(year)]);
        let arr = []
        if (state.current === "全部") {
            arr = payload.list
        } else {
            arr = payload.list.filter(item => item.market_attribute.year == state.current)
        }
        //排序
        let newSort = sortList(arr)
        //格式化数据
        state.Slist = concatList(newSort)
    },
    UpCurrent(state,payload){
        state.current=payload;
    }
}
const actions = {
    async getInfoAndListById({ commit }, payload) {
        let res = await getInfoAndListById(payload)
        if (res.data.code === 1) {
            commit("UpDateState", res.data.data)
        }
        // console.log(res.data.data.AliasName)
    }
}
export default {
    namespaced: true,
    state,
    mutations,
    actions
}