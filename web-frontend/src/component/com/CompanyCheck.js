// 公司身份验证

import {Button, Form, Input} from "antd";
import React from "react";

function CompanyCheck(props) {
    function handleConfirm() {
        props.setCheckCompanyResult(true);
    }
    function cancelConfirm() {
        props.setCheckCompanyResult(false);
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        //TODO: 对RMP平台的CompanyUser数据进行处理

    }
    return (
        <div style={{minHeight: '70vh', minWidth: '80vh'}}>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item>
                    <h1>检查公司信息</h1>
                </Form.Item>
                <Form.Item name="company" label="CompanyName">
                    <Input/>
                </Form.Item>
                <Form.Item name="password" label="CompanyPassword">
                    <Input/>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" onClick={handleConfirm}>
                        确认执行
                    </Button>
                    <Button onClick={cancelConfirm}>取消执行</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default CompanyCheck;