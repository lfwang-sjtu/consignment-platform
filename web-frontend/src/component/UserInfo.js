import {Avatar, Descriptions} from "antd";
import {AntDesignOutlined, UserOutlined} from "@ant-design/icons";
import {useState} from "react";

function UserInfo(props) {
    return (
        <div>
            <Avatar size={64} icon={<UserOutlined />} />
            <h1>存款：{props.userInfo.balance}$</h1>
            <Descriptions bordered={true} title="用户信息">
                <Descriptions.Item label="用户名">{props.userInfo.username}</Descriptions.Item>
                <Descriptions.Item label="邮箱">{props.userInfo.email}</Descriptions.Item>
                <Descriptions.Item label="手机号码">{props.userInfo.phone}</Descriptions.Item>
                <Descriptions.Item label="真实姓名">{props.userInfo.realname}</Descriptions.Item>
                <Descriptions.Item label="身份证号">{props.userInfo.idcard}</Descriptions.Item>
                <Descriptions.Item label="出生日期">{props.userInfo.birthDate}</Descriptions.Item>
                <Descriptions.Item label="地址">{props.userInfo.address}</Descriptions.Item>
                <Descriptions.Item label="加入日期">{props.userInfo.joinDate}</Descriptions.Item>
                <Descriptions.Item label="状态">{props.userInfo.status === 1 ? "激活" : "禁用"}</Descriptions.Item>
                <Descriptions.Item label="密保问题">{props.userInfo.question}</Descriptions.Item>
                <Descriptions.Item label="密保答案">{props.userInfo.answer}</Descriptions.Item>
            </Descriptions>
        </div>
    );
}
export default UserInfo;