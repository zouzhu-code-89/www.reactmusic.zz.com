import axios from 'axios';

const configHttp = {
    baseURL: "",
    timeout: 5000
}

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
        return response;
    },
    error => {
        Promise.reject(error);
    }    
);

export default services;