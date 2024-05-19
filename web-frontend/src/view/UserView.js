import React, {useState} from "react";
import ManagerInfo from "../component/ManagerInfo";
import {Layout, Menu} from "antd";
import FootInfo from "../component/FootInfo";
import {Content, Header, Footer} from "antd/es/layout/layout";
import ProductList from "../component/ProductList";
import TransactionList from "../component/TransactionList";
import UserInfo from "../component/UserInfo";

function UserView() {
    const [menuKey, setMenuKey] = useState("1");

    const handleMenuClick = (key) => {
        setMenuKey(key);
    }

    const renderContent = () => {
        switch (menuKey) {
            case "1":
                return <ProductList />
            case "2":
                return <TransactionList />
            case "3":
                return <UserInfo />
            default:
                return null;
        }
    }
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu theme="dark" mode="horizontal" selectedKeys={[menuKey]} onClick={({ key }) => handleMenuClick(key)}>
                    <Menu.Item key="1">浏览产品</Menu.Item>
                    <Menu.Item key="2">我的交易</Menu.Item>
                    <Menu.Item key="3">个人信息</Menu.Item>
                </Menu>
            </Header>
            <Content style={{ padding: '0 50px', flex: 1 }}>
                {renderContent()}
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
export default UserView;