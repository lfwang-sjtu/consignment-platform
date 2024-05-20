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
        //TODO: 对RMP平台的Product数据进行处理,提交values(values + 后端获取的belong数据)

        // const belong = JSON.parse(localStorage.getItem('belong'));
        const belong = {
            "manageFee": 0.01,
            "address": "100 Vanguard Blvd, Malvern, PA, USA",
            "agreement": "123",
            "password": "vanguard123",
            "joinDate": "1975-09-24",
            "phone": "800-662-2739",
            "intro": "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.",
            "company": "Vanguard Group",
            "id": 1,
            "email": "admin@vanguard.com",
            "username": "vanguard_admin",
            "status": 1
        };

        // 手动修改属性
        values.type = Number(values.type);
        values.term = Number(values.term);
        values.minInvest = Number(values.minInvest);
        values.rate = Number(values.rate);
        values.risk = Number(values.risk);
        const newValues = {...values, status: 1, createData: "2024-01-01", belong: belong};

        console.log(JSON.stringify(newValues));
        //TODO: 拼接values的status、createDate和belong
        fetch('http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/Product/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newValues)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
        })
    };

    return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Form name="product_form" onFinish={onFinish} style={{width: '1000px'}}>
                    <Form.Item>
                        <h1>填写产品信息</h1>
                    </Form.Item>
                    <Form.Item
                        name="name"
                        rules={[{required: true, message: 'Please input the product minInvest!'}]}
                    >
                        <Input placeholder="Product name"/>
                    </Form.Item>
                    <Form.Item
                        name="description"
                        rules={[{required: true, message: 'Please input the product rate!'}]}
                    >
                        <Input placeholder="Product description"/>
                    </Form.Item>
                    <Form.Item
                        name="type"
                        rules={[{required: true, message: 'Please input the product name!'}]}
                    >
                        <Input placeholder="Product type"/>
                    </Form.Item>
                    <Form.Item
                        name="risk"
                        rules={[{required: true, message: 'Please input the product desc!'}]}
                    >
                        <Input placeholder="Product risk"/>
                    </Form.Item>
                    <Form.Item
                        name="rate"
                        rules={[{required: true, message: 'Please input the product risk!'}]}
                    >
                        <Input placeholder="Product rate"/>
                    </Form.Item>
                    <Form.Item
                        name="minInvest"
                        rules={[{required: true, message: 'Please input the product term!'}]}
                    >
                        <Input placeholder="Product minInvest"/>
                    </Form.Item>
                    <Form.Item
                        name="term"
                        rules={[{required: true, message: 'Please input the product company!'}]}
                    >
                        <Input placeholder="Product term"/>
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
