import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Button from "../components/UI/Button";
import TabMenu from "../components/TabMenu";
import { Link } from "react-router-dom";
import { HeaderInstance } from "../api/axios";
import styled from "styled-components";

interface DataType {
    key: React.Key;
    writingNumber: number;
    name: string;
    contents: string;
    date: string;
}

const FeedBack: React.FC = () => {
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
            render: (text, record) => (
                <Link to={`/teacher/feedback/${record.writingNumber}`}>
                    {text}
                </Link>
            ),
        },

        {
            title: "작성날짜",
            key: "operation",
            fixed: "right",
            width: 70,
            className: "ant-table-wrapper",
            dataIndex: "date",
        },
        {
            title: "삭제",
            key: "operation",
            fixed: "right",
            width: 70,
            className: "ant-table-wrapper",
            dataIndex: "date",
            render: (text, record) => (
                <button
                    onClick={() => deleteList(record.writingNumber)}
                    style={{}}
                >
                    X
                </button>
            ),
        },
    ];
    const deleteList = (seq: any) => {
        if (window.confirm("삭제하시겠습니까?")) {
            HeaderInstance.delete(`/api/feedback/delete/${seq}`)
                .then((res) => {
                    console.log(res);
                    dataFetch();
                })
                .catch((err) => console.log(err));
        }
    };

    const [list, setList] = useState([]);

    const dataFetch = () => {
        HeaderInstance.get(`/api/feedback/list?page=0`)
            .then((res) => setList(res.data.list.content))
            .catch((err) => console.log(err));
    };
    console.log(list);

    const stList: {
        key: number;
        writingNumber: number;
        name: string;
        contents: string;
        date: string;
    }[] = list.map(
        (item: {
            no: number;
            regDt: string;
            title: string;
            writer: string;
        }) => {
            return {
                key: item.no,
                writingNumber: item.no,
                name: item.writer,
                contents: item.title,
                date: item.regDt,
            };
        }
    );
    console.log(stList);

    useEffect(() => {
        dataFetch();
    }, []);

    return (
        <>
            <TabMenu menu="게시판" />
            <Wrap>
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
                    dataSource={stList}
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
                    <Link to="/teacher/feedback/write">
                        <Button title="등록" />
                    </Link>
                </div>
            </Wrap>
        </>
    );
};

const Wrap = styled.div`
    @media screen and (max-width: 715px) {
        min-width: 595px;
        min-height: 737px;
    }
`;

export default FeedBack;
