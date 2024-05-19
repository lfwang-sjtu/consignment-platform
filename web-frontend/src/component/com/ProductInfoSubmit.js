// 公司填写基金产品的信息，如果合乎格式，那么进入下一步，否则重新填写或返回主页
import {useNavigate} from "react-router-dom";
import {Button, Form, Input} from "antd";
import React from "react";

function ProductInfoSubmit(props){
    function handleConfirm() {
        props.setSubmitProductInfoResult(true);
    }
    function cancelConfirm() {
        props.setSubmitProductInfoResult(false);
    }
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Form name="product_form" onFinish={onFinish} style={{width: '1000px'}}>
                    <Form.Item>
                        <h1>填写产品信息</h1>
                    </Form.Item>
                    <Form.Item
                        name="minInvest"
                        rules={[{required: true, message: 'Please input the product minInvest!'}]}
                    >
                        <Input placeholder="Product minInvest"/>
                    </Form.Item>
                    <Form.Item
                        name="rate"
                        rules={[{required: true, message: 'Please input the product rate!'}]}
                    >
                        <Input placeholder="Product rate"/>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        rules={[{required: true, message: 'Please input the product name!'}]}
                    >
                        <Input placeholder="Product name"/>
                    </Form.Item>
                    <Form.Item
                        name="description"
                        rules={[{required: true, message: 'Please input the product desc!'}]}
                    >
                        <Input placeholder="Product description"/>
                    </Form.Item>
                    <Form.Item
                        name="risk"
                        rules={[{required: true, message: 'Please input the product risk!'}]}
                    >
                        <Input placeholder="Product risk"/>
                    </Form.Item>
                    <Form.Item
                        name="term"
                        rules={[{required: true, message: 'Please input the product term!'}]}
                    >
                        <Input placeholder="Product term"/>
                    </Form.Item>
                    <Form.Item
                        name="company"
                        rules={[{required: true, message: 'Please input the product company!'}]}
                    >
                        <Input placeholder="Product Company"/>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button style={{margin: '0 8px'}} onClick={() => navigate("/")}>
                            Back
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button onClick={handleConfirm}>确认执行</Button>
                        <Button onClick={cancelConfirm}>取消执行</Button>
                    </Form.Item>
                </Form>
            </div>
    );
}
export default ProductInfoSubmit;
