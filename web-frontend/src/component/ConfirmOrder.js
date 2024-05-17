import React, { useState } from 'react';
import {Button, Card, Tag} from "antd";

function ConfirmOrder(props) {
    function handleConfirm() {
        props.setConfirmOrderResult(true);
    }
    function renderStatus (status) {
        // 根据状态渲染不同的 Tag 样式，假设状态有 "Pending", "Completed", "Cancelled" 等
        let color;
        switch (status) {
            case 'buy':
                return <Tag color={'orange'}>购买</Tag>;
            case 'earn':
                return <Tag color={'green'}>赎回</Tag>;
            default:
                return <Tag color={'blue'}>未知状态</Tag>;
                break;
        }
    };
    return (
        <Card style={{ maxWidth: 600, margin: '20px auto', padding: '20px' }}>
            <div style={{ marginBottom: '16px' }}>
                <strong>产品名称:</strong> 稳健医疗
            </div>
            <div style={{ marginBottom: '16px' }}>
                <strong>购买数量:</strong> 1000$
            </div>
            <div style={{ marginBottom: '16px' }}>
                <strong>下单时间:</strong> 1145-05-15
            </div>
            <div>
                <strong>状态:</strong> {renderStatus(props.status)}
            </div>
            <Button onClick={handleConfirm}>确认执行</Button>
        </Card>
    );
}

export default ConfirmOrder;