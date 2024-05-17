import {Button} from "antd";

function TxUpdate(props) {
    function handleConfirm() {
        props.setTxResult(true);
    }
    function cancelConfirm() {
        props.setTxResult(false);
    }
    return (
        <div>
            <h1>TXUpdate</h1>
            <Button type="primary" htmlType="submit" onClick={handleConfirm}>
                确认执行
            </Button>
            <Button onClick={cancelConfirm}>取消执行</Button>
        </div>
  );
}
export default TxUpdate;