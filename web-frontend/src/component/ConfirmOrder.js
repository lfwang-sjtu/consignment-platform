import React, { useState } from 'react';
import {Button, Card, Tag} from "antd";

function ConfirmOrder(props) {
    function handleConfirm() {
        props.setConfirmOrderResult(true);
    }
    function renderStatus (status) {
        // 根据状态渲染不同的 Tag 样式，假设状态有 "Pending", "Completed", "Cancelled" 等
        switch (status) {
            case 'buy':
                return <Tag color={'orange'}>购买</Tag>;
            case 'refund':
                return <Tag color={'green'}>赎回</Tag>;
            default:
                return <Tag color={'blue'}>未知状态</Tag>;
        }
    };
    return (
        <div>
            <Card style={{ maxWidth: 600, margin: '20px auto', padding: '20px' }}>
                <div style={{ marginBottom: '16px' }}>
                    <strong>产品名称:</strong> {props.createTxInfo.name}
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <strong>购买数量:</strong> {props.createTxInfo.amount}
                </div>
                <div style={{ marginBottom: '16px' }}>
                    <strong>下单时间:</strong> {props.createTxInfo.date}
                </div>
                <div>
                    <strong>状态:</strong> {renderStatus(props.userBusiness)}
                </div>
                <Button onClick={handleConfirm}>确认执行</Button>
            </Card>
        </div>
    );
}

export default ConfirmOrder;