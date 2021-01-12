import axios from 'axios';

const configHttp = {
    baseURL: "http://127.0.0.1:3000",
    timeout: 5000
}

const errorCode:Array<Number> = [500, 501, 502, 503, 504, 505];

const services = axios.create(configHttp);

/**
 * 请求拦截器
 * @time 2020/12/18
 */
services.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        Promise.reject(error);
    }    
);

/**
 * 响应拦截器
 * @time 2020/12/18
 */
services.interceptors.response.use(
    response => {
        if(errorCode.includes(response.data.code)){
            return Promise.reject(new Error(response.data.message || 'Error'))
        }else{
            return Promise.resolve(response.data);
        }
    },
    error => {
        alert(error);
    }    
);

export default services;