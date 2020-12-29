/**
 * 网易云音乐统一的登录接口，只要是 login 相关模块
 */
import request from '../utils/request';

/**
 * @description 手机登录
 * @params
 */
export function cellphoneLogin(params:any){
    return request({
        url: '/login/cellphone',
        method: 'post',
        data: params
    });
}

/**
 * @description 邮箱登录 @163 网易邮箱
 * @params
 */
export function emailLogin(params:any){
    return request({
        url: '/login',
        method: 'post',
        data: params
    });
}

/**
 * @description 刷新登录状态
 * @params
 */
export function refreshLoginStart(params:any){
    return request({
        url: '/login/refresh',
        method: 'post',
        data: params
    });
}

/**
 * @description 获取验证码
 * @params
 */
export function sendCaptcha(params:any){
    return request({
        url: '/captcha/sent',
        method: 'post',
        data: params
    });
}

/**
 * @description 验证验证码
 * @params
 */
export function verifyCaptcha(params:any){
    return request({
        url: '/captcha/verify',
        method: 'post',
        data: params
    });
}

/**
 * @description 用户注册-同时可修改密码
 * @params
 */
export function registerAccount(params:any){
    return request({
        url: '/register/cellphone',
        method: 'post',
        data: params
    });
}

/**
 * @description 检测手机号码是否已注册
 * @params
 */
export function cellphoneIsRegister(params:any){
    return request({
        url: '/cellphone/existence/check',
        method: 'post',
        data: params
    });
}

/**
 * @description 初始化昵称
 * @params
 */
export function initProfile(params:any){
    return request({
        url: '/activate/init/profile',
        method: 'post',
        data: params
    });
}

/**
 * @description 更换绑定手机
 * @params
 */
export function rebindCellPhone(params:any){
    return request({
        url: '/rebind',
        method: 'post',
        data: params
    });
}

/**
 * @description 退出登录
 * @params
 */
export function logout(params:any){
    return request({
        url: '/logout',
        method: 'post',
        data: params
    });
}

/**
 * @description 获取登录的状态
 * @params
 */
export function loginStatus(params:any){
    return request({
        url: '/login/status',
        method: 'post',
        data: params
    });
}

