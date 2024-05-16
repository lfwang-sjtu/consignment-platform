import { Table, Button, Modal, Select } from 'antd';
import {useState} from "react";
const { Option } = Select;

function TXView() {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentMessage, setCurrentMessage] = useState(null);

    const data = [
        {
            key: '1',
            message: 'Message 1',
        },
        {
            key: '2',
            message: 'Message 2',
        },
        // 更多数据...
    ];

    const columns = [
        {
            title: 'Message',
            dataIndex: 'message',
            key: 'message',
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button onClick={() => handleOpenModal(record)}>Handle</Button>
            ),
        },
    ];

    const handleOpenModal = (record) => {
        setCurrentMessage(record);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <div>
            <h1>TXView</h1>
            <Table columns={columns} dataSource={data} />
            <Modal title="Handle Message" visible={modalVisible} onCancel={handleCloseModal} onOk={handleCloseModal}>
                <p>{currentMessage?.message}</p>
                <Select placeholder="Select a handling option">
                    <Option value="option1">Option 1</Option>
                    <Option value="option2">Option 2</Option>
                    {/* More options... */}
                </Select>
            </Modal>
        </div>
    );
}

export default TXView;