// 检查公司是否已经签署协议，如果已经签署，那么进入下一步，否则返回主页

import {Button, Form, Input} from "antd";
import React from "react";
import {useNavigate} from "react-router-dom";

function AgreementCheck(props) {
    function handleConfirm() {
        props.setCheckAgreementResult(true);
    }
    function cancelConfirm() {
        props.setCheckAgreementResult(false);
    }
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }


    return (
        <div style={{minHeight: '70vh'}}>
            <h1>检查公司是否已经签署协议</h1>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="Agreement" label="Agreement">
                    <Input/>
                </Form.Item>
                <Form.Item name="Company" label="Agreement">
                    <Input/>
                </Form.Item>
                <Form.Item name="todo" label="Agreement">
                    <Input/>
                </Form.Item>
                <Form.Item label="Agreement">
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
export default AgreementCheck;