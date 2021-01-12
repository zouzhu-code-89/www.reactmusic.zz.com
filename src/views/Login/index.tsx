import React, { useState } from 'react';
import './index.css';
import loginServices from '../../services/login/login';
import * as Antd from 'antd';
import router from '../../router/router';

const LoginPageComponent: React.FC = (props: any) => {
    const [loginFrom, setLoginFroms] = useState({
        phone: "",
        password: "",
        nickname: "",
        captcha: ""
    });

    /**
     * 用户注册
     * @time 2020/12/27
     */
    let userRegister = () => {
        // loginServices.registeredAccount(loginFrom);
    }

    /**
     * 用户登录
     * @time 2020/12/27
     */
    let userLogin = () => {
        loginServices.login(loginFrom).then((message:any) => {
            if(message == 'ok'){
                props.history.push({
                    pathname: "/home"
                })
            }else{
                alert(message);
            }
        });
    }

    /**
     * 当提交表单的时候，将触发这个回调函数
     * @time 2020-12-29
     */
    const submitFromStart = {
        onFinish: () => {
            Antd.message.info('This is a normal message');
            // userLogin();
        },
        onFinishFailed: () => {
            Antd.message.info('This is a normal message');
            // userRegister();
        }
    }

    return (
        <div className="contain">
            <div className="login_box">
                <h3>Login User</h3>
                <Antd.Form name="basic" initialValues={{ remember: true }} 
                                        onFinish={ submitFromStart.onFinish } 
                                        onFinishFailed={ submitFromStart.onFinishFailed }>
                    <Antd.Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Antd.Input placeholder="请输入邮箱、电话号"
                                    value={ loginFrom.phone } 
                                    onChange={(event) => { setLoginFroms(Object.assign({}, loginFrom, { ['phone']: event.target.value })) }}/>
                    </Antd.Form.Item>
                    <Antd.Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Antd.Input.Password placeholder="请输入账号密码"
                                             value={ loginFrom.password } 
                                             onChange={(event) => { setLoginFroms(Object.assign({}, loginFrom, { ['password']: event.target.value })) }}/>
                    </Antd.Form.Item>
                    <Antd.Button type="primary" block={ true } loading={ false } shape="round" onClick={ userLogin } >登录</Antd.Button>
                </Antd.Form>
            </div>
        </div>
    )
}

export default LoginPageComponent;