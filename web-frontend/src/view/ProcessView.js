import {Content, Footer, Header} from "antd/es/layout/layout";
import {Button, Layout, List, Menu, message, Steps, Tag, theme} from "antd";
import FootInfo from "../component/FootInfo";
import React, {useState} from "react";
import CheckUser from "../component/CheckUser";
import ConfirmOrder from "../component/ConfirmOrder";
import AddTx from "../component/AddTx";
import Earn from "../component/Earn";
import EndTx from "../component/EndTx";

function ProcessView(props) {
    const [process, setProcess] = useState([
        {
            "process": "check_user,confirm_order,add_tx",
            "business": "buy",
            "id": 1
        },
        {
            "process": "check_user,confirm_order,end_tx,earn",
            "business": "refund",
            "id": 2
        }
    ]);
    const currentProcess = process.find(item => item.business === props.userBusiness)?.process.split(',') || [];
    const steps = currentProcess.map((step, index) => ({
        title: `Step ${index + 1}`,
        content: step,
    }));
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const [current, setCurrent] = useState(0);

    const [checkUserResult, setCheckUserResult] = useState(false);
    const [confirmOrderResult, setConfirmOrderResult] = useState(false);
    const [addTxResult, setAddTxResult] = useState(false);
    const [endTxResult, setEndTxResult] = useState(false);
    const [earnResult, setEarnResult] = useState(false);

    function getAtomicService(current) {
        let result;
        switch (steps[current].content) {
            case 'check_user':
                // 要求用户验证身份，用户输入密码，如果密码正确就进入下一步，否则不能进入下一步
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckUser setCheckUserResult={setCheckUserResult}/>
                        {checkUserResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'confirm_order':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ConfirmOrder setConfirmOrderResult={setConfirmOrderResult} />
                        {confirmOrderResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'add_tx':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <AddTx setAddTxResult={setAddTxResult} />
                        {addTxResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'end_tx':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <EndTx setEndTxResult={setEndTxResult} />
                        {endTxResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'earn':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Earn setEarnResult={setEarnResult} />
                        {earnResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            default:
                result = <div>Unknown service</div>;
        }
        return result;
    }

    function next () {
        switch (steps[current].content) {
            case 'check_user':
                if (checkUserResult) {
                    setCurrent(current + 1);
                    setCheckUserResult(false);
                }
                break;
            case 'confirm_order':
                if (confirmOrderResult) {
                    setCurrent(current + 1);
                    setConfirmOrderResult(false);
                }
                break;
            case 'add_tx':
                if (addTxResult) {
                    setCurrent(current + 1);
                    setAddTxResult(false);
                }
                break;
            case 'end_tx':
                if (endTxResult) {
                    setCurrent(current + 1);
                    setEndTxResult(false);
                }
                break;
            case 'earn':
                if (earnResult) {
                    setCurrent(current + 1);
                    setEarnResult(false);
                }
                break;
            default:
                message.info("untracked atomic service!");
        }
    };
    function prev () {
        setCurrent(current - 1);
    };

    function done() {
        switch (steps[current].content) {
            case 'check_user':
                if (checkUserResult) {
                    message.success('Processing complete!');
                    setCurrent(0);
                    setCheckUserResult(false);
                }
                break;
            case 'confirm_order':
                if (confirmOrderResult) {
                    message.success('Processing complete!');
                    setCurrent(0);
                    setConfirmOrderResult(false);
                }
                break;
            case 'add_tx':
                if (addTxResult) {
                    message.success('Processing complete!');
                    setCurrent(0);
                    setAddTxResult(false);
                }
                break;
            case 'end_tx':
                if (endTxResult) {
                    message.success('Processing complete!');
                    setCurrent(0);
                    setEndTxResult(false);
                }
                break;
            case 'earn':
                if (earnResult) {
                    message.success('Processing complete!');
                    setCurrent(0);
                    setEarnResult(false);
                }
                break;
            default:
                message.info("untracked atomic service!");
        }
    }

    const { token } = theme.useToken();
    const contentStyle = {
        lineHeight: '260px',
        textAlign: 'center',
        color: token.colorTextTertiary,
        backgroundColor: token.colorFillAlter,
        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
    };
    return(
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu theme="dark" mode="horizontal" />
            </Header>
            <Content style={{ padding: '0 50px', flex: 1 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Steps current={current} items={items} />
                    <div style={contentStyle}>{getAtomicService(current)}</div>
                    <div
                        style={{
                            marginTop: 24,
                        }}
                    >
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" onClick={done}>
                                Done
                            </Button>
                        )}
                        {current > 0 && (
                            <Button
                                style={{
                                    margin: '0 8px',
                                }}
                                onClick={() => prev()}
                            >
                                Previous
                            </Button>
                        )}
                    </div>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                    position: 'fixed',
                    bottom: 0,
                    width: '100%'
                }}
            >
                <FootInfo />
            </Footer>
        </Layout>
    );
}
export default ProcessView;