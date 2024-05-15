import {Content, Footer, Header} from "antd/es/layout/layout";
import {Button, Layout, List, Menu, message, Steps, theme} from "antd";
import FootInfo from "../component/FootInfo";
import React, {useState} from "react";
import CheckUser from "../component/CheckUser";
import ConfirmOrder from "../component/ConfirmOrder";
import AddTx from "../component/AddTx";
import Earn from "../component/Earn";

function ProcessView() {
    const [currentBusiness, setCurrentBusiness] = useState("buy")
    const [process, setProcess] = useState([
        {
            "process": "check_user,confirm_order,sub_money,add_tx",
            "business": "buy",
            "id": 1
        },
        {
            "process": "check_user,select_order,add_money,add_tx",
            "business": "refund",
            "id": 2
        }
    ]);
    const currentProcess = process.find(item => item.business === currentBusiness)?.process.split(',') || [];
    const steps = currentProcess.map((step, index) => ({
        title: `Step ${index + 1}`,
        content: step,
    }));

    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

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

    function getAtomicService(atomicService) {
        let result;
        switch (atomicService) {
            case 'check_user':
                result = <CheckUser />;
                break;
            case 'confirm_order':
                result = <ConfirmOrder />;
                break;
            case 'add_tx':
                result = <AddTx />;
                break;
            case 'earn':
                result = <Earn />;
                break;
            default:
                result = <div>Unknown service</div>;
        }
        return result;
    }


    return(
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu theme="dark" mode="horizontal" />
            </Header>
            <Content style={{ padding: '0 50px', flex: 1 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    <Steps current={current} items={items} />
                    <div style={contentStyle}>{getAtomicService(steps[current].content)}</div>
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
                            <Button type="primary" onClick={() => message.success('Processing complete!')}>
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