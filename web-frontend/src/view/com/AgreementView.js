import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useParams, useNavigate } from 'react-router-dom';

function AgreementView() {
    let { param } = useParams();
    let navigate = useNavigate();

    if (param === 'submit') {
        return (
            <Form onFinish={(values) => console.log(values)}>
                <Form.Item name="agreement" rules={[{ required: true, message: 'Please input your agreement!' }]}>
                    <Input placeholder="Input agreement" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        );
    } else if (param === 'check') {
        return (
            <div>
                <Upload beforeUpload={() => false}>
                    <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
                <Button onClick={() => navigate('/')}>No Agreement</Button>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Agreement</h1>
            </div>
        );
    }
}

export default AgreementView;