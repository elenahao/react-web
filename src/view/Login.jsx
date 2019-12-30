import React from "react";
import "../static/index.css";
import {Button, Input} from 'antd';


class Login extends React.Component {
    render() {
        return (
            <div class="login">
                <div class="login-cont">
                    <h1>
                        <i class="el-icon-s-platform"></i>xtime
                    </h1>
                    <p>请登录您的ID</p>
                    <div class="cont">
                        <Input placeholder="ID"></Input>
                        <Input.Password placeholder="密码"></Input.Password>
                        {/* <Button type="primary" onClick="loginHandler">登录</Button> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
