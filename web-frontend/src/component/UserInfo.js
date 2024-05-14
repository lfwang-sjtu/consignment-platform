import {Avatar, Descriptions} from "antd";
import {AntDesignOutlined, UserOutlined} from "@ant-design/icons";
import {useState} from "react";

function UserInfo() {
    const [userInfo, setUserInfo] = useState({
        "username": "user1",
        "password": "password1",
        "balance": 10000,
        "email": "user1@example.com",
        "phone": "0000000000",
        "realname": "John Doe",
        "idcard": "123456789012345678",
        "birthDate": "1990-01-01",
        "address": "123 Main St, City, Country",
        "joinDate": "2024-01-01",
        "status": 1,
        "question": "What is your favorite color?",
        "answer": "Blue"
    });
    return (
        <div>
            <Avatar size={64} icon={<UserOutlined />} />
            <h1>存款：{userInfo.balance}$</h1>
            <Descriptions title="用户信息">
                <Descriptions.Item label="用户名">{userInfo.username}</Descriptions.Item>
                <Descriptions.Item label="邮箱">{userInfo.email}</Descriptions.Item>
                <Descriptions.Item label="手机号码">{userInfo.phone}</Descriptions.Item>
                <Descriptions.Item label="真实姓名">{userInfo.realname}</Descriptions.Item>
                <Descriptions.Item label="身份证号">{userInfo.idcard}</Descriptions.Item>
                <Descriptions.Item label="出生日期">{userInfo.birthDate}</Descriptions.Item>
                <Descriptions.Item label="地址">{userInfo.address}</Descriptions.Item>
                <Descriptions.Item label="加入日期">{userInfo.joinDate}</Descriptions.Item>
                <Descriptions.Item label="状态">{userInfo.status === 1 ? "激活" : "禁用"}</Descriptions.Item>
                <Descriptions.Item label="密保问题">{userInfo.question}</Descriptions.Item>
                <Descriptions.Item label="密保答案">{userInfo.answer}</Descriptions.Item>
            </Descriptions>
        </div>
    );
}
export default UserInfo;