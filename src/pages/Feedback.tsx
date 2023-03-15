import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Button from "../components/UI/Button";

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

        width: 40,
        dataIndex: "writingNumber",
        key: "writingNumber",
        fixed: "left",
        className: "ant-table-wrapper",
    },
    {
        title: "작성자",
        width: 55,
        dataIndex: "name",
        key: "name",
        fixed: "left",
        className: "ant-table-wrapper",
    },
    {
        title: "글내용",
        dataIndex: "contents",
        key: "1",
        width: 140,
        fixed: "left",
        className: "ant-table-wrapper",
    },

    {
        title: "작성날짜",
        key: "operation",
        fixed: "right",
        width: 70,
        className: "ant-table-wrapper",
        render: () => "2023-03-14",
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
    <div>
        <style>
            {`
         .ant-table-wrapper .ant-table-thead > tr > th, .ant-table-wrapper .ant-table-thead > tr > td {
            background-color: #D8F0EA;
        }
        :where(.css-dev-only-do-not-override-1me4733).ant-table-wrapper .ant-table-pagination {
            display: flex;
            flex-wrap: wrap;
            row-gap: 8px;
            justify-content: center;
            padding-top:35px;
        }
        
        .ant-table-cell-scrollbar {display: none;}
        `}
        </style>
        <Table
            columns={columns}
            dataSource={data}
            style={{
                marginTop: "50px",
                padding: "0 100px",
                overflowX: "hidden",
            }}
            className="feedback-table"
        />
        <div
            style={{
                display: "flex",
                justifyContent: "end",
                padding: "0 100px",
                marginTop: "50px",
            }}
        >
            <Button title="등록" />
        </div>
    </div>
);

export default FeedBack;
