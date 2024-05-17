import {Button} from "antd";

function Pay(props) {
    function handleConfirm() {
        props.setPayResult(true);
    }
    function cancelConfirm() {
        props.setPayResult(false);
    }

    return (
        <div>
            <h1>Pay</h1>
            <Button type="primary" htmlType="submit" onClick={handleConfirm}>
                确认执行
            </Button>
            <Button onClick={cancelConfirm}>取消执行</Button>
        </div>
    );
}
export default Pay;