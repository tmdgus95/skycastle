import React, { useEffect, useState } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Button from "../components/UI/Button";
import TabMenu from "../components/TabMenu";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { HeaderInstance } from "../api/axios";

// axios
//     .get("HeaderInstance/feedback/list")
//     .then((response) => {
//         // 요청이 성공했을 때 실행할 코드
//         console.log(response.data);
//     })
//     .catch((error) => {
//         // 요청이 실패했을 때 실행할 코드
//         console.error(error);
//     });

interface DataType {
    key: React.Key;
    writingNumber: number;
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
        render: (text, record) => (
            <Link to={`/teacher/feedback/${record.writingNumber}`}>{text}</Link>
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
];

// const data: DataType[] = [];
// for (let i = 0; i < 100; i++) {
//     data.push({
//         key: i,
//         writingNumber: `${i}`,
//         name: `선생님`,
//         contents: `승현이 메롱`,
//         date: `London Park no. ${i}`,
//     });
// }

const FeedBack: React.FC = () => {
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
            </div>
        </>
    );
};

export default FeedBack;
