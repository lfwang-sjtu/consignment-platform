import {Button, message, Table} from "antd";
import {useEffect, useState} from "react";

function TxUpdate(props) {
    // const [data, useData] = useState([
    //     // {
    //     //     "note": "make money",
    //     //     "amount": 1000.0,
    //     //     "item": {
    //     //         "belong": {
    //     //             "manageFee": 0.01,
    //     //             "address": "100 Vanguard Blvd, Malvern, PA, USA",
    //     //             "agreement": "This agreement outlines the terms and conditions for Vanguard's products to be sold on the platform.",
    //     //             "password": "vanguard123",
    //     //             "joinDate": "1975-09-24",
    //     //             "phone": "800-662-2739",
    //     //             "intro": "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.",
    //     //             "company": "Vanguard Group",
    //     //             "id": 1,
    //     //             "email": "admin@vanguard.com",
    //     //             "username": "vanguard_admin",
    //     //             "status": 1
    //     //         },
    //     //         "minInvest": 500.0,
    //     //         "rate": 0.08,
    //     //         "name": "Stable Growth Fund",
    //     //         "description": "This fund aims to provide stable growth opportunities through a diversified investment portfolio for long-term returns.",
    //     //         "risk": 1,
    //     //         "term": 12.0,
    //     //         "id": 1,
    //     //         "type": 1,
    //     //         "status": 1,
    //     //         "createDate": "2023-01-15"
    //     //     },
    //     //     "id": 1,
    //     //     "type": 1,
    //     //     "orderDate": "2024-05-13",
    //     //     "status": 2,
    //     //     "buyer": {
    //     //         "address": "123 Main St, City, Country",
    //     //         "question": "What is your favorite color?",
    //     //         "birthDate": "1990-01-01",
    //     //         "realname": "John Doe",
    //     //         "password": "password1",
    //     //         "joinDate": "2024-01-01",
    //     //         "balance": 10000.0,
    //     //         "answer": "Blue",
    //     //         "phone": "0000000000",
    //     //         "idcard": "123456789012345678",
    //     //         "id": 1,
    //     //         "email": "user1@example.com",
    //     //         "username": "user1",
    //     //         "status": 1
    //     //     }
    //     // },
    //     // {
    //     //     "note": "better than genshin",
    //     //     "amount": 100.0,
    //     //     "item": {
    //     //         "belong": {
    //     //             "manageFee": 0.01,
    //     //             "address": "100 Vanguard Blvd, Malvern, PA, USA",
    //     //             "agreement": "This agreement outlines the terms and conditions for Vanguard's products to be sold on the platform.",
    //     //             "password": "vanguard123",
    //     //             "joinDate": "1975-09-24",
    //     //             "phone": "800-662-2739",
    //     //             "intro": "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.",
    //     //             "company": "Vanguard Group",
    //     //             "id": 1,
    //     //             "email": "admin@vanguard.com",
    //     //             "username": "vanguard_admin",
    //     //             "status": 1
    //     //         },
    //     //         "minInvest": 500.0,
    //     //         "rate": 0.08,
    //     //         "name": "Stable Growth Fund",
    //     //         "description": "This fund aims to provide stable growth opportunities through a diversified investment portfolio for long-term returns.",
    //     //         "risk": 1,
    //     //         "term": 12.0,
    //     //         "id": 1,
    //     //         "type": 1,
    //     //         "status": 1,
    //     //         "createDate": "2023-01-15"
    //     //     },
    //     //     "id": 2,
    //     //     "type": 1,
    //     //     "orderDate": "2024-05-14",
    //     //     "status": 2,
    //     //     "buyer": {
    //     //         "address": "123 Main St, City, Country",
    //     //         "question": "What is your favorite color?",
    //     //         "birthDate": "1990-01-01",
    //     //         "realname": "John Doe",
    //     //         "password": "password1",
    //     //         "joinDate": "2024-01-01",
    //     //         "balance": 10000.0,
    //     //         "answer": "Blue",
    //     //         "phone": "0000000000",
    //     //         "idcard": "123456789012345678",
    //     //         "id": 1,
    //     //         "email": "user1@example.com",
    //     //         "username": "user1",
    //     //         "status": 1
    //     //     }
    //     // },
    //     // {
    //     //     "note": "xxx",
    //     //     "amount": 100.0,
    //     //     "item": {
    //     //         "belong": {
    //     //             "manageFee": 0.01,
    //     //             "address": "100 Vanguard Blvd, Malvern, PA, USA",
    //     //             "agreement": "This agreement outlines the terms and conditions for Vanguard's products to be sold on the platform.",
    //     //             "password": "vanguard123",
    //     //             "joinDate": "1975-09-24",
    //     //             "phone": "800-662-2739",
    //     //             "intro": "Vanguard is one of the world's largest investment companies, offering a large selection of low-cost mutual funds, ETFs, advice, and related services.",
    //     //             "company": "Vanguard Group",
    //     //             "id": 1,
    //     //             "email": "admin@vanguard.com",
    //     //             "username": "vanguard_admin",
    //     //             "status": 1
    //     //         },
    //     //         "minInvest": 1000.0,
    //     //         "rate": 0.12,
    //     //         "name": "High-Yield Bond Fund",
    //     //         "description": "This fund seeks to provide a high level of current income by investing primarily in high-yield corporate bonds.",
    //     //         "risk": 2,
    //     //         "term": 24.0,
    //     //         "id": 2,
    //     //         "type": 1,
    //     //         "status": 1,
    //     //         "createDate": "2022-11-20"
    //     //     },
    //     //     "id": 3,
    //     //     "type": 1,
    //     //     "orderDate": "2024-05-15",
    //     //     "status": 2,
    //     //     "buyer": {
    //     //         "address": "456 Oak St, City, Country",
    //     //         "question": "What is your pet's name?",
    //     //         "birthDate": "1992-02-02",
    //     //         "realname": "Jane Smith",
    //     //         "password": "password2",
    //     //         "joinDate": "2024-01-01",
    //     //         "balance": 10000.0,
    //     //         "answer": "Max",
    //     //         "phone": "0000000001",
    //     //         "idcard": "234567890123456789",
    //     //         "id": 2,
    //     //         "email": "user2@example.com",
    //     //         "username": "user2",
    //     //         "status": 1
    //     //     },
    //     //
    //     // }
    // ]);
    // TX数据
    const [data, setData] = useState(null);
    const [middleData, setMiddleData] = useState(null);
    const [flag, setFlag] = useState('');

    useEffect(() => {
        fetch("http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/Transaction/",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((fetchedData) => {
                console.log(fetchedData.data);
                setData(fetchedData.data);
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    useEffect(() => {
        fetch("http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/Transaction/",{
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((fetchedData) => {
                setData(fetchedData.data)
            })
            .catch((error) => console.error('Error:', error));
    }, [flag]);

    function handleConfirm() {
        props.setTxResult(true);
    }
    function cancelConfirm() {
        props.setTxResult(false);
    }

    // 从本地获取公司信息
    // const companyName = localStorage.getItem('company_name');
    const companyName = 'Vanguard Group';

    // 筛选购买待处理1和赎回待处理3的数据
    const filterData = data ? data.filter(item => item.item.belong.company === companyName
        && (item.status === 1 || item.status === 3)) : null;

    const columns = [
        {
            title: 'Username',
            dataIndex: ['buyer','username'],
            key: 'username',
        },
        {
            title: 'Product Name',
            dataIndex: ['item','name'],
            key: 'productName',
        },
        {
            title: 'Purchase Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Order Date',
            dataIndex: ['item', 'createDate'],
            key: 'orderDate',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => (
                <span>
                    {text === 1 ? '购买待处理' : '赎回待处理'}
                </span>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button onClick={() => handleClick(record)}>
                    处理按钮
                </Button>
            ),
        }
    ]
    const handleClick = (record) => {
        message.info('点击处理');
        console.log(record);
        if(record.status === 1){
            record.status = 2; //购买已处理
        }else{
            record.status = 4; //赎回已处理
        }
        //TODO:对RMP平台的TX数据进行处理，并且修改data进行页面刷新
        fetch(`http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/Transaction/${record.id}`,{
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(record)
        })
            .then((response) => response.json())
            .then((result) => {
                console.log("fetch1:", result);
                //TODO: 对User的Balance余额进行修改
                // 用户信息为record.buyer.username，先GET到用户的余额
                fetch(`http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/IndividualUser/?IndividualUser.username=${record.buyer.username}`, {
                    method: "GET",
                })
                    .then((response) => response.json())
                    .then((result) => {
                        console.log("fetch2:", result);
                        if(result.data.length === 0){
                            message.error("TX不存在！");
                            return;
                        }
                        if(record.status === 2){
                            result.data[0].balance -= record.amount;
                        }else{
                            result.data[0].balance += record.amount;
                        }

                        // 需要将result.data[0]结合原本的TX数据，生成新的TX数据
                        record.buyer = result.data[0];
                        setMiddleData(JSON.stringify(record.buyer));
                    })
                //从values获取交易金额为record.amount，修改用户余额
                console.log(middleData);
                console.log(record.buyer.id)
                fetch(`http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/IndividualUser/${record.buyer.id}` ,{
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: middleData
                })
                    .then((response) => response.json())
                    .then((result) => {
                        console.log("fetch3:", result);
                    })
                })
        setFlag(record);
    }

    return (
        <div>
            <h1>TXUpdate</h1>
            <Table dataSource={filterData} columns={columns} />
            <Button type="primary" htmlType="submit" onClick={handleConfirm}>
                确认执行
            </Button>
            <Button onClick={cancelConfirm}>取消执行</Button>
        </div>
  );
}
export default TxUpdate;