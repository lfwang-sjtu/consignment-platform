import {Alert, Button} from "antd";
import React from "react";

function EndTx(props) {
    function handleEnd() {
        props.setEndTxResult(true);
    }
    return(
        <div style={{ maxWidth: 600, margin: '20px auto', padding: '20px', textAlign: 'center' }}>
            <Button type="primary" onClick={handleEnd}>
                确认赎回
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
export default EndTx;