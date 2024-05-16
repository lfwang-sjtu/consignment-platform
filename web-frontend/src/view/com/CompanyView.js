import { Descriptions } from 'antd';

function CompanyView() {
    const companyInfo = {
        name: 'Company 1',
        address: '123 Street, City, Country',
        industry: 'Software',
        established: '2000',
        employees: '1000',
    };

    return (
        <div>
            <h1>Company</h1>
            <Descriptions title="Company Info" bordered>
                <Descriptions.Item label="Name">{companyInfo.name}</Descriptions.Item>
                <Descriptions.Item label="Address">{companyInfo.address}</Descriptions.Item>
                <Descriptions.Item label="Industry">{companyInfo.industry}</Descriptions.Item>
                <Descriptions.Item label="Established">{companyInfo.established}</Descriptions.Item>
                <Descriptions.Item label="Employees">{companyInfo.employees}</Descriptions.Item>
            </Descriptions>
        </div>
    );
}

export default CompanyView;