import React, { useState } from 'react';
import {Alert, Button} from "antd";

function AddTx(props) {
    const [status, setStatus] = useState(false);

    function handleOk() {
        props.setAddTxResult(true);
    }

    return (
        <div style={{ maxWidth: 600, margin: '20px auto', padding: '20px', textAlign: 'center' }}>
            <Button type="primary" onClick={handleOk}>
                发送订单
            </Button>
            {props.request === true && (
                <Alert message="订单发送成功" type="success" showIcon style={{ marginTop: 20 }} />
            )}
            {props.request === false  && (
                <Alert message="订单发送失败" type="error" showIcon style={{ marginTop: 20 }} />
            )}
        </div>
    );
}

export default AddTx;
