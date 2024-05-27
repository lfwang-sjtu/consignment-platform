import React, {useEffect, useState} from "react";
import {Button, Input, message, Table} from "antd";
import {useNavigate} from "react-router-dom";
import {get} from "../util/fetch";
function ProductList(props) {
    /*
    * 搜索关键字
    * 产品列表
    * 用户历史购买记录，做推荐算法之用
    */
    const [searchKeyword, setSearchKeyword] = useState('');
    const [productData, setProductData] = useState([
        {
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
        {
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
        {
            "belong": {
                "manageFee": 0.02,
                "address": "55 East 52nd Street, New York, NY, USA",
                "agreement": "This agreement outlines the terms and conditions for BlackRock's products to be sold on the platform.",
                "password": "blackrock123",
                "joinDate": "1988-03-01",
                "phone": "212-810-5300",
                "intro": "BlackRock is a global investment management corporation based in New York City. Founded in 1988.",
                "company": "BlackRock",
                "id": 2,
                "email": "admin@blackrock.com",
                "username": "blackrock_admin",
                "status": 1
            },
            "minInvest": 1000.0,
            "rate": 0.15,
            "name": "Technology Innovation Fund",
            "description": "This fund aims to capture opportunities in the technology sector by investing in innovative companies with strong growth potential.",
            "risk": 3,
            "term": 36.0,
            "id": 3,
            "type": 1,
            "status": 1,
            "createDate": "2023-03-10"
        }
    ]);
    const [userTxData, setUserTxData] = useState([
        {
            "note": "du SE du de",
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
        }
    ]);
    const [sortedProduct, setSortedProduct] = useState([
        {
            "note": "du SE du de",
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
        }
    ]);
    const navigate = useNavigate();

    function handleUpdate() {
        message.info("getting product and tx info")
        get("Product")
            .then(data => {
                console.log(data);
                setProductData(data.filter(pro => pro.status === 2));       // only authorized product
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        get("Transaction")
            .then(data => {
                setUserTxData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
        const filteredTxData = userTxData.filter(tx => tx.buyer.username === JSON.parse(localStorage.getItem('IndividualUser')).username);
        console.log(filteredTxData);
        const userPurchases = filteredTxData.map(tx => tx.item);
        const similarityScores = [];

        const minRisk = Math.min(...productData.map(product => product.risk));
        const maxRisk = Math.max(...productData.map(product => product.risk));
        const minRate = Math.min(...productData.map(product => product.rate));
        const maxRate = Math.max(...productData.map(product => product.rate));
        const minInvest = Math.min(...productData.map(product => product.minInvest));
        const maxInvest = Math.max(...productData.map(product => product.minInvest));

        const normalize = (value, min, max) => (value - min) / (max - min);

        productData.forEach(product => {
            let totalSimilarity = 0;

            userPurchases.forEach(userProduct => {
                const userRisk = userProduct.risk;
                const userRate = userProduct.rate;
                const userMinInvest = userProduct.minInvest;

                const normalizedRisk = normalize(product.risk, minRisk, maxRisk);
                const normalizedRate = normalize(product.rate, minRate, maxRate);
                const normalizedMinInvest = normalize(product.minInvest, minInvest, maxInvest);

                const normalizedUserRisk = normalize(userRisk, minRisk, maxRisk);
                const normalizedUserRate = normalize(userRate, minRate, maxRate);
                const normalizedUserMinInvest = normalize(userMinInvest, minInvest, maxInvest);

                const distance = Math.sqrt(
                    Math.pow(normalizedRisk - normalizedUserRisk, 2) +
                    Math.pow(normalizedRate - normalizedUserRate, 2) +
                    Math.pow(normalizedMinInvest - normalizedUserMinInvest, 2)
                );
                const similarity = 1 / (1 + distance); // 相似度越高，距离越近
                totalSimilarity += similarity;
            });

            similarityScores.push({ product, totalSimilarity });
        });

        similarityScores.sort((a, b) => b.totalSimilarity - a.totalSimilarity);

        const sortedProducts = similarityScores.map(score => score.product);
        setSortedProduct(sortedProducts);
    }

    function handleRowClick(record) {
        message.info("I know you click[" + record.name + "]");
        props.setUserProduct(record)
        navigate("/user/product_details/" + record.id);
    }

    function handleSearch() {
        message.info("别叫");
        setSortedProduct(null);
    }

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
        },
        {
            title: "名称",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "回报率",
            dataIndex: "rate",
            key: "rate",
        },
        {
            title: "风险",
            dataIndex: "risk",
            key: "risk",
            render: (text, record) => {
                const value = record.risk;
                switch (value) {
                    case 1:
                        return "低风险";
                    case 2:
                        return "中风险";
                    case 3:
                        return "高风险";
                    default:
                        return "";
                }
            }
        },
        {
            title: "最低额度",
            dataIndex: "minInvest",
            key: "minInvest",
            render: (text, record) => (record.minInvest + "$")
        },
        {
            title: "上架日期",
            dataIndex: "createDate",
            key: "createDate",
        },
    ];
    // "minInvest": 1000.0,
    //     "rate": 0.07,
    //     "term": 24.0,
    return (
        <div>
            <Input
                placeholder="输入关键词搜索产品"
                value={searchKeyword}
                onChange={e => setSearchKeyword(e.target.value)}
                style={{ marginBottom: '16px' }}
            />
            <Button type="primary" onClick={handleSearch}>搜索</Button>
            <Button type="primary" onClick={handleUpdate}>更新</Button>
            <Table
                dataSource={sortedProduct}
                columns={columns}
                pagination={false}
                onRow={(record) => ({
                    onClick: () => handleRowClick(record), // 点击行触发handleRowClick函数
                })}
            />
        </div>
    );
}
export default ProductList;