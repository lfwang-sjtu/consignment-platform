import {useState} from "react";
import {
    CheckCircleOutlined,
    ExclamationCircleOutlined,
    MoneyCollectOutlined,
    SnippetsOutlined
} from "@ant-design/icons";
import {Avatar, Button, List, Menu} from "antd";
import {useNavigate} from "react-router-dom";
import {get} from "../util/fetch";

function TransactionList(props) {
    const navigate = useNavigate();
    const [userTxData, setUserTxData] = useState([
        {
            "note": "make money",
            "amount": 1000.0,
            "item": {
                "belong": {
                    "manageFee": 0.01,
                    "address": "100 Vanguard Blvd, Malvern, PA, USA",
                    "agreement": "This agreement outlines the terms and conditions for Vanguard's products to be sold on the platform.",
                    "password": "vanguard123",
                    "joinDate": "1975-09-24",
                    "phone": "800-662-2739",
                    "intro": "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.",
                    "company": "Vanguard Group",
                    "id": 1,
                    "email": "admin@vanguard.com",
                    "username": "vanguard_admin",
                    "status": 1
                },
                "minInvest": 500.0,
                "rate": 0.08,
                "name": "Stable Growth Fund",
                "description": "This fund aims to provide stable growth opportunities through a diversified investment portfolio for long-term returns.",
                "risk": 1,
                "term": 12.0,
                "id": 1,
                "type": 1,
                "status": 1,
                "createDate": "2023-01-15"
            },
            "id": 1,
            "type": 1,
            "orderDate": "2024-05-13",
            "status": 2,
            "buyer": {
                "address": "123 Main St, City, Country",
                "question": "What is your favorite color?",
                "birthDate": "1990-01-01",
                "realname": "John Doe",
                "password": "password1",
                "joinDate": "2024-01-01",
                "balance": 10000.0,
                "answer": "Blue",
                "phone": "0000000000",
                "idcard": "123456789012345678",
                "id": 1,
                "email": "user1@example.com",
                "username": "user1",
                "status": 1
            }
        },
    ]);
    const [holdTx, setHoldTx] = useState([]);
    const [historyTx, setHistoryTx] = useState([]);
    const [waitTx, setWaitTx] = useState([]);
    const [failTx, setFailTx] = useState([]);
    const [source, setSource] = useState([{
        "note": "du SE du de",
        "amount": 100.0,
        "item": {
            "belong": {
                "manageFee": 0.01,
                "address": "100 Vanguard Blvd, Malvern, PA, USA",
                "agreement": "This agreement outlines the terms and conditions for Vanguard's products to be sold on the platform.",
                "password": "vanguard123",
                "joinDate": "1975-09-24",
                "phone": "800-662-2739",
                "intro": "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.",
                "company": "Vanguard Group",
                "id": 1,
                "email": "admin@vanguard.com",
                "username": "vanguard_admin",
                "status": 1
            },
            "minInvest": 500.0,
            "rate": 0.08,
            "name": "Stable Growth Fund and fuckyou",
            "description": "This fund aims to provide stable growth opportunities through a diversified investment portfolio for long-term returns.",
            "risk": 1,
            "term": 12.0,
            "id": 1,
            "type": 1,
            "status": 1,
            "createDate": "2023-01-15"
        },
        "id": 2,
        "type": 1,
        "orderDate": "2024-05-14",
        "status": 2,
        "buyer": {
            "id": 1
        }
    },]);
    const [current, setCurrent] = useState('own');
    function handleUpdate() {
        get("Transaction")
            .then(data => {
                const user = data.filter(tx => tx.buyer.id === JSON.parse(localStorage.getItem('IndividualUser')).id);
                const hold = user.filter(tx => tx.status === 2);
                console.log(user);
                const history = user.filter(tx => tx.status === 4);
                const wait = user.filter(tx => (tx.status === 1 || tx.status === 3));
                const fail = user.filter(tx => (tx.status === 5 || tx.status === 6));
                setUserTxData(user);
                setHoldTx(hold);
                setHistoryTx(history);
                setWaitTx(wait);
                setFailTx(fail);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        console.log("userTxData");
        console.log(userTxData);
    }
    const items = [
        {
            label: '现在持有的基金',
            key: 'own',
            icon: <CheckCircleOutlined />,
        },
        {
            label: '历史交易',
            key: 'history',
            icon: <MoneyCollectOutlined />,
        },
        {
            label: '待处理交易',
            key: 'wait',
            icon: <SnippetsOutlined />,
        },
        {
            label: '失败交易',
            key: 'fail',
            icon: <ExclamationCircleOutlined />,
        },
    ];

    const onClickMenu = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
        //todo  set datasource
        switch (e.key) {
            case 'own': setSource(holdTx); break;
            case 'history': setSource(historyTx); break;
            case 'wait': setSource(waitTx); break;
            case 'fail': setSource(failTx); break;
            default: setSource(null);
        }
    };

    function handleRefund(record) {
        console.log(record);
        props.setCreateTxInfo({
            "userid": JSON.parse(localStorage.getItem('IndividualUser')).id,
            "productid": record.item.id,
            "amount": record.amount,
            "name": record.item.name,
            "date": record.orderDate,
            "status": 1,
            "id": record.id,
            "rate": record.item.rate
        });
        props.setUserBusiness("refund");
        navigate("/user/process");
    }

    return(
        <div>
            <Menu onClick={onClickMenu} selectedKeys={[current]} mode="horizontal" items={items} />
            <Button onClick={handleUpdate}>update</Button>
            <List
                itemLayout="vertical"
                size="large"
                pagination={false}
                dataSource={source}
                renderItem={(record) => (
                    <List.Item
                        key={record.id}
                    >
                        <List.Item.Meta
                            title={<a>{record.item.name}[{record.amount}$]</a>}
                            description={record.item.belong.company}
                        />
                        {record.status === 1 ? (<p1>待处理的购买订单,</p1>) : null}
                        {record.status === 3 ? (<p1>待处理的赎回订单,</p1>) : null}
                        购买日期[{record.orderDate}],交易ID[{record.id}],注释[{record.note}]
                        {current === 'own' ? (
                            <Button onClick={() => handleRefund(record)}>赎回</Button>
                        ) : null}
                    </List.Item>
                )}
            />
        </div>
    );
}
export default TransactionList;