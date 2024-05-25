import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Button, Form, Input, Layout, message, Modal, Select} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import FootInfo from "../../component/FootInfo";
import logo from "../../logo192.png"

const {Option} = Select;

function LoginView() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showRegisterModal = () => {
        setIsModalVisible(true);
    };

    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log(values);
        // 如果values是company，那么fetch到CompanyUser
        // 如果values是personal，那么fetch到IndividualUser
        const userType = values.userType === "company" ? "CompanyUser" : "IndividualUser";
        console.log(userType)
        fetch(`http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/${userType}/?${userType}.username=${values.username}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                if(result.data.length === 0){
                    message.error("用户不存在！");
                    return;
                }
                if(result.data[0].status === 0){
                    message.error("用户已被封禁！");
                    return;
                }
                message.success("登录成功！");
                console.log("fetch1: " , result.data)
                localStorage.setItem(userType, JSON.stringify(result.data[0]));
                navigate("/com")
            })
    }

    const handleRegister = (values) => {
        console.log('Received values of form: ', values);
        values.manageFee = Number(values.manageFee);
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const currentDate = `${year}-${month}-${day}`;
        const newValues = {...values, status: 0, joinDate: currentDate};
        console.log(JSON.stringify(newValues));
        // TODO: 发送注册请求
        fetch('http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/CompanyUser/', {
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

        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header theme="dark" mode="horizontal">
            </Header>
            <Content style={{padding: '10 80px', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div>
                        <img src={logo} alt="logo"/>
                    </div>
                    <Form layout="vertical" onFinish={onFinish}>
                        <Form.Item name="username" label="Username">
                            <Input/>
                        </Form.Item>
                        <Form.Item name="password" label="Password">
                            <Input.Password/>
                        </Form.Item>
                        <Form.Item name="userType" label="User Type">
                            <Select placeholder="Select a user type">
                                <Option value="company">Company User</Option>
                                <Option value="personal">Personal User</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" style={{display: 'block', margin: '0 auto'}}>
                                Login
                            </Button>
                            <Button onClick={showRegisterModal} style={{display: 'block', margin: '0 auto'}}>
                                Register
                            </Button>
                            <Modal title="Register" visible={isModalVisible} onCancel={handleCancel} footer={null}>
                                <Form layout="vertical" onFinish={handleRegister}>
                                    <Form.Item name="manageFee" label="ManageFee">
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item name="address" label="Address">
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item name="agreement" label="Agreement">
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item name="password" label="Password">
                                        <Input.Password/>
                                    </Form.Item>
                                    <Form.Item name="phone" label="Phone">
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item name="intro" label="Intro">
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item name="company" label="Company">
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item name="email" label="Email">
                                        <Input/>
                                    </Form.Item>
                                    <Form.Item name="username" label="Username">
                                        <Input/>
                                    </Form.Item>
                                    {/*<Form.Item name="userType" label="User Type">*/}
                                    {/*    <Select placeholder="Select a user type">*/}
                                    {/*        <Option value="company">Company User</Option>*/}
                                    {/*        <Option value="personal">Personal User</Option>*/}
                                    {/*    </Select>*/}
                                    {/*</Form.Item>*/}
                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" style={{display: 'block', margin: '0 auto'}}>
                                            Register公司用户
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%'
                }}
            >
                <FootInfo/>
            </Footer>
        </Layout>
    );
}

export default LoginView;