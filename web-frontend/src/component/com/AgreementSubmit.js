// 提交Agreement

import {Button, Form, Input, message} from "antd";

function AgreementSubmit(props) {
    function handleConfirm() {
        props.setSubmitAgreementResult(true);
    }
    function cancelConfirm() {
        props.setSubmitAgreementResult(false);
    }

    // const companyInfo = localStorage.getItem('company');
    const companyInfo = {
        username: "vanguard_admin",
        password: "vanguard123"
    }
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        fetch(`http://202.120.40.107:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/CompanyUser/?CompanyUser.username=vanguard_admin`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.data.length === 0){
                    message.error("公司不存在！");
                    return;
                }
                if(result.data === null){
                    message.error("公司不存在");
                }else{
                    // 修改agreement的值
                    result.data[0].agreement = values.agreement;
                    fetch(`http://202.120.40.107:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/CompanyUser/${result.data[0].id}` ,{
                        method: "PUT",
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(result.data[0])
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Success:', data);
                        })
                }
            })
    }

    return (
        <div>
            <h1>填写并提交协议</h1>
            <Form layout="vertical" onFinish={onFinish}>
                <Form.Item name="agreement" label="AgreementName">
                    <Input/>
                </Form.Item>
                {/*<Form.Item name="company" label="UserName">*/}
                {/*    <Input/>*/}
                {/*</Form.Item>*/}
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