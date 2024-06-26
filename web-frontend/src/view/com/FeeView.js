import {Table, Button, Layout, Menu} from 'antd';
import FootInfo from "../../component/FootInfo";
import {useNavigate} from "react-router-dom";
import {Footer, Header} from "antd/es/layout/layout";
import React from "react";

function FeeView() {
    //Transaction Data
    const data = [
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
            },

        }
    ];

    const columns = [
        {
            title: 'Username',
            dataIndex: ['buyer', 'username'],
            key: 'username',
        },
        {
            title: 'Product Name',
            dataIndex: ['item', 'name'],
            key: 'productName',
        },
        {
            title: 'Purchase Amount',
            dataIndex: 'amount',
            key: 'purchaseAmount',
        },
        {
            title: 'Purchase Date',
            dataIndex: 'orderDate',
            key: 'endDate',
        },
        {
            title: 'Fee',
            key: 'fee',
            render: (text, record) => (
                <span>
                    {record.amount * 0.1}￥
                </span>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button onClick={() => handleSettle()}>
                    处理按钮
                </Button>
            ),
        }
    ];
    const navigate = useNavigate();

    const handleSettle = (key) => {
        console.log('Settle:', key);
    };
    //TODO:根据业务需求对data进行过滤处理


    return (
            <div>
                <Table columns={columns} dataSource={data} />
                <Button onClick={() => navigate('/com')}>跳转首页</Button>
            </div>
    );
}

export default FeeView;