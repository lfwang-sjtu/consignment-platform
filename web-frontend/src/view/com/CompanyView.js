import React, {useEffect, useState} from 'react';
import {Descriptions, Button, Modal, Form, Input, Layout, Menu} from 'antd';
import {Footer, Header} from "antd/es/layout/layout";
import FootInfo from "../../component/FootInfo";

function CompanyView() {
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState(JSON.parse(localStorage.getItem('CompanyUser')));
    const id = data.id;

    const onFinish = (values) => {
        console.log(values);
        fetch(`http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/CompanyUser/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
            .then(response => response.json())
            .then(result => {
                console.log('Success:', result.data);
                setData(result.data)
                localStorage.setItem('CompanyUser', JSON.stringify(data))
        })
        setModalVisible(false);
    };

    return (
            <div>
                <Descriptions title="Company User Info" bordered>
                    {Object.entries(data).map(([key, value]) => {
                        if (key !== 'id' && key !== 'status') {
                            return <Descriptions.Item label={key} key={key}>{value}</Descriptions.Item>
                        }
                        return null;
                    })}
                </Descriptions>
                <Button type="primary" onClick={() => setModalVisible(true)}>
                    Update
                </Button>
                <Modal title="Update" visible={modalVisible} onCancel={() => setModalVisible(false)} footer={null}>
                    <Form name="update_form" onFinish={onFinish} initialValues={data}>
                        {Object.keys(data).map((key) => {
                            if (key !== 'id' && key !== 'status') {
                                return (
                                    <Form.Item
                                        name={key}
                                        key={key}
                                        rules={[{required: true, message: `Please input the ${key}!`}]}
                                    >
                                        <Input placeholder={key}/>
                                    </Form.Item>
                                )
                            }
                            return null;
                        })}
                        <Form.Item>
                            <Button type="primary" htmlType="update">
                                Update
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>


    );
}

export default CompanyView;