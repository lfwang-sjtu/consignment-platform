// 银行生成公司需要付的服务费

import {Button} from "antd";

function FeeGenerate(props) {
    function handleConfirm() {
        props.setGenerateFeeResult(true);
    }
    function cancelConfirm() {
        props.setGenerateFeeResult(false);
    }
    return(
        <div>
            <h1>银行生成公司需要付的服务费</h1>
            <Button onClick={handleConfirm}>确认执行</Button>
            <Button onClick={cancelConfirm}>取消执行</Button>
        </div>
    )
}
export default FeeGenerate;