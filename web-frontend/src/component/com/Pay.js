import {Button, message, QRCode} from "antd";
import {useState} from "react";

function Pay(props) {
    const [text, setText] = useState('https://ant.design/');
    const amount_pay = 1000;

    function handleConfirm() {
        props.setPayResult(true);
        message.info("支付成功")
        console.log('pay ' + amount_pay + ' to bank');
    }
    function cancelConfirm() {
        props.setPayResult(false);
    }

    return (
        <div style={{minHeight: '70vh'}}>
            <div>
                <h1>Pay页面</h1>
                <QRCode style={{minHeight:'20vh', minWidth: '20vh'}} value={text || '-'}/>
                <p>待支付的金额： {amount_pay}</p>
            </div>
            <div>
                <Button type="primary" htmlType="submit" onClick={handleConfirm}>
                    确认执行
                </Button>
                <Button onClick={cancelConfirm}>取消执行</Button>
            </div>
        </div>
    );
}
export default Pay;