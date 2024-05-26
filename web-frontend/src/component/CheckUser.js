import React, { useState } from 'react';
import {Button, Form, Input} from "antd";

function CheckUser(props) {
    const [password, setPassword] = useState('');
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    };
    function handleSubmit () {
        // todo
        if (password === props.userInfo.password) {
            props.setCheckUserResult(true);
        } else {
            props.setCheckUserResult(false);
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '0 auto', padding: '20px', border: '1px solid #d9d9d9', borderRadius: '4px' }}>
            <Form layout="vertical">
                <Form.Item label="用户名">
                    <Input value={props.userInfo.username} disabled />
                </Form.Item>
                <Form.Item label="真实姓名">
                    <Input value={props.userInfo.realname} disabled />
                </Form.Item>
                <Form.Item label="密码" required>
                    <Input.Password value={password} onChange={handlePasswordChange} placeholder="请输入密码" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleSubmit}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CheckUser;
