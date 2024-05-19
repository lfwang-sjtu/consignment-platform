import React, {useState} from "react";
import CompanyView from "./CompanyView";
import FeeView from "./FeeView";
import TXView from "./TXView";
import {Layout, Menu} from "antd";
import {Content, Footer, Header} from "antd/es/layout/layout";
import FootInfo from "../../component/FootInfo";


function MainView() {
    const [menuKey, setMenuKey] = useState("1");
    const handleMenuClick = (key) => {
        setMenuKey(key);
    }
    const renderContent = () => {
        switch (menuKey) {
            case "1":
                return <CompanyView />
            case "2":
                return <FeeView />
            case "3":
                return <TXView />
            default:
                return null;
        }
    }

    return(
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu theme="dark" mode="horizontal" selectedKeys={[menuKey]} onClick={({ key }) => handleMenuClick(key)}>
                    <Menu.Item key="1">Company</Menu.Item>
                    <Menu.Item key="2">Fee</Menu.Item>
                    <Menu.Item key="3">TX</Menu.Item>
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
export default MainView;