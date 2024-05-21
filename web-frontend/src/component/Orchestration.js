import React, {useEffect, useState} from "react";
import {Button, Form, Input, Modal, Space, Table, Tag, Typography} from "antd";
import Column from "antd/es/table/Column";
import {Link, useNavigate} from "react-router-dom";
import {createprocess, deleteprocess, getFieldList, putprocess} from "../services/atomicservice";



function Orchestration() {
    const columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'process',
            key: 'process',
            dataIndex: 'process',

        },
        {
            title: '操作',
            key: 'action',
            render: (_,record) => (
                <Space>
                    <Link to={'/process?id='+record.id}>查看详情</Link>
                    <Button danger={true} onClick={()=>{
                        deleteprocess(record.id).then(
                            data=>{
                                console.log(data);
                                var neworlist = orlist.filter(item => {
                                    return item.id !== data;
                                });
                                setOrlist(neworlist);
                            }
                        ).catch(
                            (error) =>{
                                console.log('ERROR:'+error);
                            }
                        )
                    }}>删除</Button>
                </Space>
            ),
        },
    ];

    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        form.submit();
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onSubmit = (values) =>{
        console.log(values)
        createprocess(values).then(data =>{
            navigate('/process?id='+data.id)
        }).catch((error)=>{
            console.error("Error:", error);
        })

        form.resetFields();
    }

    const [orlist, setOrlist] = useState([]);
    useEffect(() => {
        if (orlist.length === 0) { // 修改判断条件，确保在 fieldList 为空数组时调用
            // fetch("http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/test/", {
            //     method: "GET",
            // })
            //     .then((response) => response.json())
            //     .then((result) => {
            //         console.log("Success:", result);
            //         setOrlist(result.data);
            //     })
            //     .catch((error) => {
            //         console.error("Error:", error);
            //     });

            getFieldList().then(data =>{
                setOrlist(data);
            } ).catch((error) => {
                console.error("Error:", error);
            });
        }
    }, []);

    return (
        <div style={{padding:"10px 10%"}}>
            <Button style={{marginBottom:"10px"}} type="primary" onClick={showModal}>新建流程</Button>
            <Modal title="新建流程" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} okText={'确定'} cancelText={'取消'}>
                <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 16 }} onFinish={onSubmit}>
                    <Form.Item
                        label="流程名称"
                        name="name"
                        rules={[{ required: true, message: '请输入流程名称!' }]}
                    >
                        <Input placeholder="请输入创建流程的名称"/>
                    </Form.Item>
                    <Form.Item
                        label="流程描述"
                        name="description"
                        rules={[{ required: true, message: '请输入流程描述!' }]}
                    >
                        <Input placeholder="请输入流程描述"/>
                    </Form.Item>
                </Form>

            </Modal>
            <Table columns={columns} dataSource={orlist} />
        </div>
    );






}
export default Orchestration;