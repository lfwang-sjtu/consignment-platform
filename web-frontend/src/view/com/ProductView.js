import { Form, Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

function ProductView() {
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <h1>ProductView</h1>
            <Form name="product_form" onFinish={onFinish}>
                <Form.Item
                    name="productName"
                    rules={[{ required: true, message: 'Please input the product name!' }]}
                >
                    <Input placeholder="Product Name" />
                </Form.Item>
                <Form.Item
                    name="productDescription"
                    rules={[{ required: true, message: 'Please input the product description!' }]}
                >
                    <Input placeholder="Product Description" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button style={{ margin: '0 8px' }} onClick={() => navigate("/")}>
                        Back
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ProductView;