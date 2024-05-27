import {Avatar, Descriptions} from "antd";
import {AntDesignOutlined, UserOutlined} from "@ant-design/icons";
import {useState} from "react";

function UserInfo(props) {
    return (
        <div>
            <Avatar size={64} icon={<UserOutlined />} />
            <h1>存款：{JSON.parse(localStorage.getItem('IndividualUser')).balance}$</h1>
            <Descriptions bordered={true} title="用户信息">
                <Descriptions.Item label="用户名">{JSON.parse(localStorage.getItem('IndividualUser')).username}</Descriptions.Item>
                <Descriptions.Item label="邮箱">{JSON.parse(localStorage.getItem('IndividualUser')).email}</Descriptions.Item>
                <Descriptions.Item label="手机号码">{JSON.parse(localStorage.getItem('IndividualUser')).phone}</Descriptions.Item>
                <Descriptions.Item label="真实姓名">{JSON.parse(localStorage.getItem('IndividualUser')).realname}</Descriptions.Item>
                <Descriptions.Item label="身份证号">{JSON.parse(localStorage.getItem('IndividualUser')).idcard}</Descriptions.Item>
                <Descriptions.Item label="出生日期">{JSON.parse(localStorage.getItem('IndividualUser')).birthDate}</Descriptions.Item>
                <Descriptions.Item label="地址">{JSON.parse(localStorage.getItem('IndividualUser')).address}</Descriptions.Item>
                <Descriptions.Item label="加入日期">{JSON.parse(localStorage.getItem('IndividualUser')).joinDate}</Descriptions.Item>
                <Descriptions.Item label="状态">{JSON.parse(localStorage.getItem('IndividualUser')).status === 1 ? "激活" : "禁用"}</Descriptions.Item>
                <Descriptions.Item label="密保问题">{JSON.parse(localStorage.getItem('IndividualUser')).question}</Descriptions.Item>
                <Descriptions.Item label="密保答案">{JSON.parse(localStorage.getItem('IndividualUser')).answer}</Descriptions.Item>
            </Descriptions>
        </div>
    );
}
export default UserInfo;