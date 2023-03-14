import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface DataType {
    key: React.Key;
    writingNumber: string;
    name: string;
    contents: string;
    date: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "글번호",
        width: 70,
        dataIndex: "writingNumber",
        key: "writingNumber",
        fixed: "left",
    },
    {
        title: "작성자",
        width: 100,
        dataIndex: "name",
        key: "name",
        fixed: "left",
    },
    {
        title: "글내용",
        dataIndex: "contents",
        key: "1",
        width: 150,
    },

    {
        title: "작성날짜",
        key: "operation",
        fixed: "right",
        width: 100,
        render: () => <a>2023-03-14</a>,
    },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        writingNumber: `${i}`,
        name: `선생님`,
        contents: `승현이 메롱`,
        date: `London Park no. ${i}`,
    });
}

const FeedBack: React.FC = () => (
    <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500, y: 600 }}
        style={{ marginTop: "50px" }}
    />
);

export default FeedBack;
