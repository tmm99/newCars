/*
 * @Author: 席鹏昊
 * @Date: 2019-12-02 19:00:43
 * @LastEditors: 席鹏昊
 * @LastEditTime: 2019-12-02 19:57:47
 * @Description: 
 */
import Axios from "axios";

const instance = Axios.create({
    baseURL: 'https://baojia.chelun.com/',
    timeout: 1000,
    // headers: { 'X-Custom-Header': 'foobar' }
});

//请求截取
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor 响应截取
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default instance