import {Card, Col, Row} from "antd";

function Earn() {
    return (
        <Card title="基金订单详情" style={{ maxWidth: 600, margin: '20px auto' }}>
            <Row gutter={16}>
                <Col span={12}><strong>基金名字:</strong></Col>
                <Col span={12}>稳健医疗</Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}><strong>购买金额:</strong></Col>
                <Col span={12}>10000 元</Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}><strong>收益率:</strong></Col>
                <Col span={12}>-50 %</Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}><strong>基金周期:</strong></Col>
                <Col span={12}>114514 月</Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}><strong>总金额:</strong></Col>
                <Col span={12}>250 元</Col>
            </Row>
        </Card>
    );
}

export default Earn;