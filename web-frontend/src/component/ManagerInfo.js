import React from "react";
import { Typography, List } from "antd";
const { Text } = Typography;
//
function ManagerInfo() {
    return (
        <div style={{ padding: "20px" }}>
            <Typography>
                <Text strong>Username: </Text>
                <Text>manager1</Text>
            </Typography>
            <Typography>
                <Text strong>Real Name: </Text>
                <Text>John Doe</Text>
            </Typography>
            <Typography>
                <Text strong>Email: </Text>
                <Text>user@example.com</Text>
            </Typography>
            <Typography>
                <Text strong>Phone: </Text>
                <Text>1234567890</Text>
            </Typography>
        </div>
    );
}
export default ManagerInfo;