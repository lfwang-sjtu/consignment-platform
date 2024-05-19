import React, {useState} from "react";
import {Button, Layout, Menu, message, Steps, Tag, theme} from "antd";
import ProductInfoSubmit from "../../component/com/ProductInfoSubmit";
import CompanyCheck from "../../component/com/CompanyCheck";
import AgreementCheck from "../../component/com/AgreementCheck";
import AgreementSubmit from "../../component/com/AgreementSubmit";
import FeeGenerate from "../../component/com/FeeGenerate";
import {Content, Header} from "antd/es/layout/layout";
import TxUpdate from "../../component/com/TxUpdate";
import Pay from "../../component/com/Pay";
import {useNavigate} from "react-router-dom";

// 原子服务包括：check_company, check_agreement, submit_product_info,
// submit_agreement, generate_fee, update_tx, pay

function ComProcessView(){
    const navigate = useNavigate();
    const [currentBusiness, setCurrentBusiness] = useState("uploadProduct");
    const [process, setProcess] = useState([
        {
            "process": "check_company,check_agreement,submit_product_info",
            "business": "uploadProduct",
            "id": 1
        },
        {
            "process": "check_company,submit_agreement",
            "business": "agreement",
            "id": 2
        },
        {
            "process": "check_company,update_tx,pay",
            "business": "makeOrder",
            "id": 3
        },
        {
            "process": "check_company,update_tx",
            "business": "redemption",
            "id": 4
        },
        {
            "process": "check_company,generate_fee",
            "business": "fee",
            "id": 5
        }
    ]);
    const currentProcess = process.find(item => item.business === currentBusiness)?.process.split(',') || [];
    const steps = currentProcess.map((step, index) => ({
        title: `Step ${index + 1}`,
        content: step,
    }));
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    const [current, setCurrent] = useState(0);
    const [checkCompanyResult, setCheckCompanyResult] = useState(false);
    const [checkAgreementResult, setCheckAgreementResult] = useState(false);
    const [submitProductInfoResult, setSubmitProductInfoResult] = useState(false);
    const [submitAgreementResult, setSubmitAgreementResult] = useState(false);
    const [generateFeeResult, setGenerateFeeResult] = useState(false);
    const [txResult, setTxResult] = useState(false);
    const [payResult, setPayResult] = useState(false);

    function getAtomicService1(current){
        let result;
        switch (steps[current].content) {
            case 'check_company':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CompanyCheck setCheckCompanyResult={setCheckCompanyResult} />
                        {checkCompanyResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'check_agreement':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <AgreementCheck setCheckAgreementResult={setCheckAgreementResult} />
                        {checkAgreementResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'submit_product_info':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <ProductInfoSubmit setSubmitProductInfoResult={setSubmitProductInfoResult} />
                        {submitProductInfoResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'submit_agreement':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <AgreementSubmit setSubmitAgreementResult={setSubmitAgreementResult} />
                        {submitAgreementResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'generate_fee':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <FeeGenerate setGenerateFeeResult={setGenerateFeeResult} />
                        {generateFeeResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'update_tx':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <TxUpdate setTxResult={setTxResult} />
                        {txResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            case 'pay':
                result = (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <Pay setPayResult={setPayResult} />
                        {payResult ? (
                            <Tag color="green">完成</Tag>
                        ) : (
                            <Tag color="red">未完成</Tag>
                        )}
                    </div>
                );
                break;
            default:
                result = <div>未知的原子服务</div>;
        }
        return result;
    }

    function next() {
        switch (steps[current].content){
            case 'check_company':
                if(checkCompanyResult){
                    setCurrent(current + 1);
                    setCheckCompanyResult(false);
                }
                break;
            case 'check_agreement':
                if(checkAgreementResult){
                    setCurrent(current + 1);
                    setCheckAgreementResult(false);
                }
                break;
            case 'submit_product_info':
                if(submitProductInfoResult){
                    setCurrent(current + 1);
                    setSubmitProductInfoResult(false);
                }
                break;
            case 'submit_agreement':
                if(submitAgreementResult){
                    setCurrent(current + 1);
                    setSubmitAgreementResult(false);
                }
                break;
            case 'generate_fee':
                if(generateFeeResult){
                    setCurrent(current + 1);
                    setGenerateFeeResult(false);
                }
                break;
            case 'update_tx':
                if(txResult){
                    setCurrent(current + 1);
                    setTxResult(false);
                }
                break;
            case 'pay':
                if(payResult){
                    setCurrent(current + 1);
                    setPayResult(false);
                }
                break;
            default:
                message.info("未知的原子服务！")
        };
    }
    function prev() {
        setCurrent(current - 1);
    }
    function done(){
        switch (steps[current].content){
            case 'check_company':
                if(checkCompanyResult){
                    message.success("公司信息检查完成！");
                    setCurrent(0);
                    setCheckCompanyResult(false);
                }
                break;
            case 'check_agreement':
                if(checkAgreementResult){
                    message.success("协议检查完成！");
                    setCurrent(0);
                    setCheckAgreementResult(false);
                }
                break;
            case 'submit_product_info':
                if(submitProductInfoResult){
                    message.success("产品信息提交完成！");
                    setCurrent(0);
                    setSubmitProductInfoResult(false);
                }
                break;
            case 'submit_agreement':
                if(submitAgreementResult){
                    message.success("协议提交完成！");
                    setCurrent(0);
                    setSubmitAgreementResult(false);
                }
                break;
            case 'generate_fee':
                if(generateFeeResult){
                    message.success("费用生成完成！");
                    setCurrent(0);
                    setGenerateFeeResult(false);
                }
                break;
            case 'update_tx':
                if(txResult){
                    message.success("事务处理完成！");
                    setCurrent(0);
                    setTxResult(false);
                }
                break;
            case 'pay':
                if(payResult){
                    message.success("支付完成！");
                    setCurrent(0);
                    setPayResult(false);
                    // navigate("/com")
                }
                break;
            default:
                message.info("未知的原子服务！");
        }
    }

    return(
        <Layout style={{ height: '100vh' }}>
            <Header style={{ height: '10%' }}>
                <Menu theme="dark" mode="horizontal" />
            </Header>
            <Content style={{ minHeight: '80vh',margin: '5%', height: '80%', overflow: 'auto'}}>
                    <Steps current={current} items={items} />
                    <div style={{minHeight: '70vh',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <div>
                            {getAtomicService1(current)}
                        </div>
                        <div style={{margin: '18px'}}>
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
        </Layout>
    )
}

export default ComProcessView;