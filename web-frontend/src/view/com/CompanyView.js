import React, { useState } from 'react';
import {Descriptions, Button, Modal, Form, Input, Layout, Menu} from 'antd';
import {Footer, Header} from "antd/es/layout/layout";
import FootInfo from "../../component/FootInfo";

function CompanyView() {
    const [modalVisible, setModalVisible] = useState(false);
    const [formData, setFormData] = useState({
        company: '天天好',
        password: '123',
        username: 'User1',
        email: '123@qq.com',
        phone: '123456',
        address: '东川路800号',
        intro: '一家公司',
        status: '1',
        agreement: 'hash号码',
        joinData: '2024-01-01',
        manageFee: 'XXX',
    });

    const onFinish = (values) => {
        console.log(values); // 打印用户输入的数据
        setFormData(values);
        setModalVisible(false);
    };

    return (
        <Layout style={{minHeight: "100vh"}}>
            <Header>
                <Menu theme="dark" mode="horizontal"/>
            </Header>
            <div>
                <Descriptions title="Company User Info" bordered>
                    {Object.entries(formData).map(([key, value]) => (
                        <Descriptions.Item label={key} key={key}>{value}</Descriptions.Item>
                    ))}
                </Descriptions>
                <Button type="primary" onClick={() => setModalVisible(true)}>
                    Update
                </Button>
                <Modal title="Update" visible={modalVisible} onCancel={() => setModalVisible(false)} footer={null}>
                    <Form name="update_form" onFinish={onFinish}>
                        {Object.keys(formData).map((key) => (
                            <Form.Item
                                name={key}
                                key={key}
                                rules={[{required: true, message: `Please input the ${key}!`}]}
                            >
                                <Input placeholder={key}/>
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button type="primary" htmlType="update">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
            <Footer
                style={{
                    textAlign: 'center',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%'
                }}
            >
                <FootInfo />
            </Footer>
        </Layout>

    );
}

export default CompanyView;