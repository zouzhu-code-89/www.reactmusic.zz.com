import React, { useState } from 'react';
import loginServices from '../../services/login/login';
import * as Antd from 'antd';

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
        loginServices.registeredAccount(loginFrom);
    }

    /**
     * 用户登录
     * @time 2020/12/27
     */
    let userLogin = () => {
        alert("触发登录回调成功 ！！");
    }

    /**
     * 当提交表单的时候，将触发这个回调函数
     * @time 2020-12-29
     */
    const submitFromStart = {
        onFinish: () => {
            userLogin();
        },
        onFinishFailed: () => {
            userRegister();
        }
    }

    return (
        <>
            <Antd.Form name="basic" initialValues={{ remember: true }} 
                                    onFinish={ submitFromStart.onFinish } 
                                    onFinishFailed={ submitFromStart.onFinishFailed }>
                <Antd.Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Antd.Input value={ loginFrom.phone } onChange={(event) => { setLoginFroms(Object.assign({}, loginFrom, { ['phone']: event.target.value })) }}/>
                </Antd.Form.Item>
                <Antd.Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Antd.Input.Password value={ loginFrom.password } onChange={(event) => { setLoginFroms(Object.assign({}, loginFrom, { ['password']: event.target.value })) }}/>
                </Antd.Form.Item>
            </Antd.Form>
            <Antd.Button type="primary">注册</Antd.Button>
            <div>
                phone : { loginFrom.phone }
                <br/>
                password : { loginFrom.password }
            </div>
        </>
    )
}

export default LoginPageComponent;