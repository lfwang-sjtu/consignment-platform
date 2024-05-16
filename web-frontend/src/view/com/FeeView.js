import { Table, Button } from 'antd';
import FootInfo from "../../component/FootInfo";
import {useNavigate} from "react-router-dom";

function FeeView() {
    const data = [
        {
            key: '1',
            name: 'Product 1',
            deadline: '2022-12-31',
            total: 1000,
            fee: 100,
        },
        {
            key: '2',
            name: 'Product 2',
            deadline: '2023-01-31',
            total: 2000,
            fee: 200,
        },
        // 更多数据...
    ];

    const columns = [
        {
            title: '产品名称',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '截止期限',
            dataIndex: 'deadline',
            key: 'deadline',
        },
        {
            title: '总交易额',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: '待缴纳费用',
            dataIndex: 'fee',
            key: 'fee',
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <Button onClick={() => handleSettle(record.key)}>结算</Button>
            ),
        },
    ];

    const navigate = useNavigate();

    const handleSettle = (key) => {
        // 在这里处理结算逻辑
        console.log('Settle:', key);
    };

    return (
        <div>
            <Table columns={columns} dataSource={data} />
            <Button onClick={() => navigate('/')}>跳转首页</Button>
        </div>
    );
}

export default FeeView;