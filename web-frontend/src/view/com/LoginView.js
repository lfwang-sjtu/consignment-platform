import {useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {Button, Form, Input, Layout, Select} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import FootInfo from "../../component/FootInfo";
import logo from "../../logo192.png"

const {Option} = Select;

function LoginView() {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState('');
    const onFinish = (values) => {
        console.log(values);
        // 如果values是company，那么fetch到CompanyUser
        // 如果values是personal，那么fetch到IndividualUser
        const userType = values.userType === "company" ? "CompanyUser" : "IndividualUser";
        console.log(userType)
        fetch(`http://202.120.40.107:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/${userType}/?${userType}.username=${values.username}`, {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                localStorage.setItem(userType, JSON.stringify(result.data[0]));
            })
    }

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
                            <Button style={{display: 'block', margin: '0 auto'}}>
                                Register
                            </Button>
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