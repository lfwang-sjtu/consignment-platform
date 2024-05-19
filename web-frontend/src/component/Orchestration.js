import React, {useEffect, useState} from "react";
import {Button, Space, Table, Tag, Typography} from "antd";
import Column from "antd/es/table/Column";
import {Link, useNavigate} from "react-router-dom";

const columns = [
    {
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'process',
        key: 'process',
        dataIndex: 'process',

    },
    {
        title: '操作',
        key: 'action',
        render: (_,record) => (
            <Link to={'/process?id='+record.id}>查看详情</Link>
        ),
    },
];

function Orchestration() {



    const [orlist, setOrlist] = useState([]);
    useEffect(() => {
        if (orlist.length === 0) { // 修改判断条件，确保在 fieldList 为空数组时调用
            fetch("http://202.120.40.86:14642/rmp-resource-service/project/66289c8cdffd2d00144103a2/resource/test/", {
                method: "GET",
            })
                .then((response) => response.json())
                .then((result) => {
                    console.log("Success:", result);
                    setOrlist(result.data);
                })
                .catch((error) => {
                    console.error("Error:", error);
                });
        }
    }, []);

    return (
        <div style={{padding:"10px 10%"}}>
            <Table columns={columns} dataSource={orlist} />
        </div>
    );






}
export default Orchestration;