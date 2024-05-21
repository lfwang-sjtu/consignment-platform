import React, {useState} from "react";
import { Layout, Menu } from "antd";
import {
    SettingOutlined,
    AppstoreOutlined,
    ToolOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";
import ManagerInfo from "../component/ManagerInfo";
import FootInfo from "../component/FootInfo";
import AtomicService from "../component/AtomicService";
import Orchestration from "../component/Orchestration";

const { Header, Content, Sider, Footer } = Layout;

// 产品管理页面组件
function ProductManagement() {
    return <div>产品管理页面内容</div>;
}

// 原子服务定制化页面组件
function AtomicServiceCustomization() {
    return <div>原子服务定制化页面内容</div>;
}

// 验证理财公司页面组件
function ValidateFinancialCompanies() {
    return <div>验证理财公司页面内容</div>;
}

function ManagerView() {
    const [selectedKey, setSelectedKey] = useState("4");

    const handleMenuClick = (key) => {
        setSelectedKey(key);
    }

    const renderContent = () => {
        switch (selectedKey) {
            case "1":
                return <div>产品管理内容</div>;
            case "2":
                return <Orchestration />;
            case "3":
                return <div>验证理财公司内容</div>;
            case "4":
                return <ManagerInfo />;
            default:
                return null;
        }
    }
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu theme="dark" mode="horizontal" selectedKeys={[selectedKey]} onClick={({ key }) => handleMenuClick(key)}>
                    <Menu.Item key="1">产品管理</Menu.Item>
                    <Menu.Item key="2">原子服务定制化</Menu.Item>
                    <Menu.Item key="3">验证理财公司</Menu.Item>
                    <Menu.Item key="4">用户信息</Menu.Item>
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

export default ManagerView;
