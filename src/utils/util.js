/*
 * @Author: 席鹏昊
 * @Date: 2019-12-12 15:54:43
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-13 23:48:10
 * @Description: 
 */
// 函数防抖 直到事件之间间隔大于500ms才会触发      
let timer = null;
export function debounce(func, delay = 3000) {
    // console.log(func)
    return function (id) {
        console.log(timer, "+++++")
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(id);
        }, delay);

    }
}

// 函数节流 事件每隔500ms就会触发一次
export function throttle(func, delay = 500) {
    let start = + new Date();

    return function () {
        let now = +new Date();
        if (now - start > delay) {
            func();
            start = now;
        }
    }
}