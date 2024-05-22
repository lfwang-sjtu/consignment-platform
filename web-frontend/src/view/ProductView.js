import {Link, useNavigate, useParams} from "react-router-dom";
import {Content, Footer, Header} from "antd/es/layout/layout";
import {Button, Descriptions, Layout, Menu} from "antd";
import FootInfo from "../component/FootInfo";
import React, {useEffect, useState} from "react";
import Title from "antd/es/skeleton/Title";
import Paragraph from "antd/es/skeleton/Paragraph";

function ProductView(props) {
    console.log(props);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        // Fetch product data based on id
        // setProduct
    }, [id]);

    function handleBuy() {
        //
        props.setUserBusiness("buy");
        navigate("/userprocess");
    }

    return(
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu theme="dark" mode="horizontal" />
            </Header>
            <Content style={{ padding: '0 50px', flex: 1 }}>
                <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                    {props.userProduct ? (
                        <div>
                            <Title level={2}>{props.userProduct.name}</Title>
                            <Paragraph>{props.userProduct.description}</Paragraph>
                            <Descriptions title="Product Details" bordered>
                                <Descriptions.Item label="Minimum Investment">
                                    ${props.userProduct.minInvest}
                                </Descriptions.Item>
                                <Descriptions.Item label="Interest Rate">
                                    {props.userProduct.rate * 100}%
                                </Descriptions.Item>
                                <Descriptions.Item label="Term">{props.userProduct.term} months</Descriptions.Item>
                                <Descriptions.Item label="Risk Level">{props.userProduct.risk}</Descriptions.Item>
                                <Descriptions.Item label="Status">
                                    {props.userProduct.status === 1 ? 'Active' : 'Inactive'}
                                </Descriptions.Item>
                                <Descriptions.Item label="Create Date">
                                    {props.userProduct.createDate}
                                </Descriptions.Item>
                            </Descriptions>
                            <Title level={3}>Belonging Company</Title>
                            <Descriptions bordered>
                                <Descriptions.Item label="Company">{props.userProduct.belong.company}</Descriptions.Item>
                                <Descriptions.Item label="Email">{props.userProduct.belong.email}</Descriptions.Item>
                                <Descriptions.Item label="Phone">{props.userProduct.belong.phone}</Descriptions.Item>
                                <Descriptions.Item label="Address">{props.userProduct.belong.address}</Descriptions.Item>
                                <Descriptions.Item label="Introduction">
                                    {props.userProduct.belong.intro}
                                </Descriptions.Item>
                                <Descriptions.Item label="Join Date">
                                    {props.userProduct.belong.joinDate}
                                </Descriptions.Item>
                            </Descriptions>
                            <Button onClick={handleBuy}>购买</Button>
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