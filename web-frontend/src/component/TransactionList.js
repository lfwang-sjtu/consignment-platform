import {useState} from "react";
import {
    CheckCircleOutlined,
    ExclamationCircleOutlined,
    MoneyCollectOutlined,
    SnippetsOutlined
} from "@ant-design/icons";
import {Avatar, Button, List, Menu} from "antd";
import {useNavigate} from "react-router-dom";

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
        {
            "note": "better than genshin",
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
                "name": "Stable Growth Fund",
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
        {
            "note": "xxx",
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
                "minInvest": 1000.0,
                "rate": 0.12,
                "name": "High-Yield Bond Fund",
                "description": "This fund seeks to provide a high level of current income by investing primarily in high-yield corporate bonds.",
                "risk": 2,
                "term": 24.0,
                "id": 2,
                "type": 1,
                "status": 1,
                "createDate": "2022-11-20"
            },
            "id": 3,
            "type": 1,
            "orderDate": "2024-05-15",
            "status": 2,
            "buyer": {
                "address": "456 Oak St, City, Country",
                "question": "What is your pet's name?",
                "birthDate": "1992-02-02",
                "realname": "Jane Smith",
                "password": "password2",
                "joinDate": "2024-01-01",
                "balance": 10000.0,
                "answer": "Max",
                "phone": "0000000001",
                "idcard": "234567890123456789",
                "id": 2,
                "email": "user2@example.com",
                "username": "user2",
                "status": 1
            }
        }
    ]);
    const [current, setCurrent] = useState('mail');
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
    };

    function handleRefund() {
        props.setUserBusiness("refund");
        navigate("/userprocess");
    }

    return(
        <div>
            <Menu onClick={onClickMenu} selectedKeys={[current]} mode="horizontal" items={items} />
            <List
                itemLayout="vertical"
                size="large"
                pagination={false}
                dataSource={userTxData}
                renderItem={(item) => (
                    <List.Item
                        key={item.id}
                    >
                        <List.Item.Meta
                            avatar={<Button onClick={handleRefund}>赎回</Button>}
                            title={<a>{item.item.name}[{item.amount}$]</a>}
                            description={item.item.belong.company}
                        />
                        购买日期[{item.orderDate}],交易ID[{item.id}],注释[{item.note}]
                    </List.Item>
                )}
            />
        </div>
    );
}
export default TransactionList;