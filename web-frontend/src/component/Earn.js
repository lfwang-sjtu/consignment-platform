import {Card, Col, Row} from "antd";

function Earn(props) {
    return (
        <Card title="结果" style={{ maxWidth: 600, margin: '20px auto' }}>
            <Row gutter={16}>
                <Col span={12}><strong>订单执行结果{props.income} $</strong></Col>
            </Row>
        </Card>
    );
}

export default Earn;