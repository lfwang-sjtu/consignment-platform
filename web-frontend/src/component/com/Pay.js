import {Button, message, QRCode} from "antd";

function Pay(props) {
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
        <div>
            <h1>Pay</h1>
            <QRCode value={amount_pay} />
            <p>待支付的金额： {amount_pay}</p>
            <Button type="primary" htmlType="submit" onClick={handleConfirm}>
                确认执行
            </Button>
            <Button onClick={cancelConfirm}>取消执行</Button>
        </div>
    );
}
export default Pay;