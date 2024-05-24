// 公司身份验证

import {Button, Form, Input, message} from "antd";
import React, {useState} from "react";

function CompanyCheck(props) {
    function handleConfirm() {
        props.setCheckCompanyResult(true);
    }
    function cancelConfirm() {
        props.setCheckCompanyResult(false);
    }
    const companyInfo = JSON.parse(localStorage.getItem('CompanyUser'));
    console.log(companyInfo);
    // const companyInfo = {
    //     username: "vanguard_admin",
    //     password: "vanguard123"
    // }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        fetch("http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/CompanyUser/", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                console.log(result.data)
                if(result.data.length === 0){
                    message.error("公司不存在！");
                    return;
                }
                if (Array.isArray(result.data)) {
                    // Attention，筛选出来的是数组数据
                    const companyUser = result.data.filter(user => user.username === companyInfo.username);
                    if(companyUser === undefined) {
                        message.error("公司不存在！！");
                        return;
                    }
                    if (companyUser[0].password === values.password) {
                        message.success("公司信息正确");
                    } else {
                        message.error("公司信息错误");
                    }
                } else {
                    console.error("Expected an array but received:", result);
                }
            })
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