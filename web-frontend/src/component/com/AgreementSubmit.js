// 提交Agreement

import {Button, Form, Input} from "antd";

function AgreementSubmit(props) {
    function handleConfirm() {
        props.setSubmitAgreementResult(true);
    }
    function cancelConfirm() {
        props.setSubmitAgreementResult(false);
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    }

    return (
        <div>
            <h1>填写并提交协议</h1>
            <Form onFinish={onFinish}>
                <Form.Item label="AgreementName">
                    <Input/>
                </Form.Item>
                <Form.Item label="Info">
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
export default AgreementSubmit;