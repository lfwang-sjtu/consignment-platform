// 检查公司是否已经签署协议，如果已经签署，那么进入下一步，否则返回主页

import {Button, Form, Input, message} from "antd";
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

    // const companyInfo = localStorage.getItem('company');
    const companyInfo = {
        username: "vanguard_admin",
        password: "vanguard123"
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        //TODO: 对RMP平台的CompanyUser.agreement数据进行处理
        fetch("http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/CompanyUser/", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.data.length === 0){
                    message.error("公司不存在！");
                    return;
                }
                if (Array.isArray(result.data)) {
                    // Attention，筛选出来的是数组数据
                    const companyUser = result.data.filter(user => user.username === companyInfo.username);
                    if(companyUser === undefined) {
                        message.error("公司不存在");
                        return;
                    }
                    if (companyUser[0].agreement === values.agreement) {
                        message.success("公司协议正确");
                    } else {
                        message.error("公司协议错误");
                    }
                } else {
                    console.error("Expected an array but received:", result);
                }
            })

    }


    return (
        <div style={{minHeight: '70vh'}}>
            <h1>检查公司是否已经签署协议</h1>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="agreement" label="Agreement">
                    <Input/>
                </Form.Item>
                <Form.Item name="company" label="CompanyUser">
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