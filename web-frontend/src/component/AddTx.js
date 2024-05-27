import React, { useState } from 'react';
import {Alert, Button, message} from "antd";
import {post, put} from "../util/fetch";

function AddTx(props) {
    const [status, setStatus] = useState(false);

    function handleOk() {
        if (props.createTxInfo.status === 0) {
            // create new TX
            props.setIncome("You have send an order to buy [" + props.createTxInfo.amount + "$] of [" + props.createTxInfo.name + "]");
            // todo add new tx
            const data_json = {
                "orderDate": props.createTxInfo.date,
                "amount": props.createTxInfo.amount,
                "status": 1,
                "buyer": {"id": props.createTxInfo.userid},
                "item": {"id": props.createTxInfo.productid}
            }
            post("Transaction", data_json);
        } else {
            // update TX
            const money = props.createTxInfo.amount * (1 + props.createTxInfo.rate);
            props.setIncome("After the company dealt your request, you will receive [" + money + "]");
            // todo update existed tx
            const data_json = {
                "orderDate": props.createTxInfo.date,
                "amount": props.createTxInfo.amount,
                "status": 3,
                "buyer": {"id": props.createTxInfo.userid},
                "item": {"id": props.createTxInfo.productid},
            }
            put("Transaction/", props.createTxInfo.id, data_json);
        }
        props.setAddTxResult(true);
    }

    return (
        <div style={{ maxWidth: 600, margin: '20px auto', padding: '20px', textAlign: 'center' }}>
            <Button type="primary" onClick={handleOk}>
                发送订单
            </Button>
        </div>
    );
}

export default AddTx;
