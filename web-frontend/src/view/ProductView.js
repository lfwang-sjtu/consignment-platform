import {useParams} from "react-router-dom";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Button, Descriptions, Layout, Menu} from "antd";
import FootInfo from "../component/FootInfo";
import React, {useEffect, useState} from "react";
import Title from "antd/es/skeleton/Title";
import Paragraph from "antd/es/skeleton/Paragraph";

function ProductView() {
    const [product, setProduct] = useState(
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
        }
    );
    const { id } = useParams();

    useEffect(() => {
        // Fetch product data based on id
        // setProduct
    }, [id]);

    return(
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu theme="dark" mode="horizontal" />
            </Header>
            <Content style={{ padding: '0 50px', flex: 1 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {product ? (
                        <div>
                            <Title level={2}>{product.name}</Title>
                            <Paragraph>{product.description}</Paragraph>
                            <Descriptions title="Product Details" bordered>
                                <Descriptions.Item label="Minimum Investment">
                                    ${product.minInvest}
                                </Descriptions.Item>
                                <Descriptions.Item label="Interest Rate">
                                    {product.rate * 100}%
                                </Descriptions.Item>
                                <Descriptions.Item label="Term">{product.term} months</Descriptions.Item>
                                <Descriptions.Item label="Risk Level">{product.risk}</Descriptions.Item>
                                <Descriptions.Item label="Status">
                                    {product.status === 1 ? 'Active' : 'Inactive'}
                                </Descriptions.Item>
                                <Descriptions.Item label="Create Date">
                                    {product.createDate}
                                </Descriptions.Item>
                            </Descriptions>
                            <Title level={3}>Belonging Company</Title>
                            <Descriptions bordered>
                                <Descriptions.Item label="Company">{product.belong.company}</Descriptions.Item>
                                <Descriptions.Item label="Email">{product.belong.email}</Descriptions.Item>
                                <Descriptions.Item label="Phone">{product.belong.phone}</Descriptions.Item>
                                <Descriptions.Item label="Address">{product.belong.address}</Descriptions.Item>
                                <Descriptions.Item label="Introduction">
                                    {product.belong.intro}
                                </Descriptions.Item>
                                <Descriptions.Item label="Join Date">
                                    {product.belong.joinDate}
                                </Descriptions.Item>
                            </Descriptions>
                            <Button>购买</Button>
                        </div>
                    ) : (
                        <div>Loading...</div>
                    )}
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
export default ProductView;