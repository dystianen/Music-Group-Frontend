import React from "react";
import {Card, Typography, Table} from "antd";

const {Title} = Typography;

export const Revenue = () => {
    const columns = [
        {
            title: 'No. ',
            key: 'no',
            dataIndex: 'no'
        },
        {
            title: 'Tanggal',
            key: 'date',
            dataIndex: 'date'
        },
        {
            title: 'Amount',
            key: 'amount',
            dataIndex: 'amount',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status'
        },
    ];

    return <Card
        title={<Title level={4} strong>Revenue Report</Title>}
    >
        <Table
            columns={columns}
            scroll={{x: 'max-content'}}
        />
    </Card>
};
