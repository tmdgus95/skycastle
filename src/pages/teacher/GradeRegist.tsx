import React, { useState } from "react";
import { Table, Form, Input, Button, DatePicker } from "antd";
import type { ColumnsType } from "antd/es/table";
import { GradeRegistContainer } from "../../styles/TeacherStyles";
import Search from "antd/es/input/Search";
import dayjs from "dayjs";
import moment from "moment";

interface DataType {
    key: React.Key;
    name: string;
    listening: number;
    reading: number;
    grammar: number;
    vocabulary: number;
    class: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "분야",
        children: [
            {
                title: "듣기",
                dataIndex: "listening",
                key: "listening",
                render: (text, record) => (
                    <Form.Item
                        name={["user", record.key, "listening"]}
                        initialValue={text}
                    >
                        <Input
                            size="small"
                            style={{
                                width: 80,
                                fontSize: 16,
                                textAlign: "center",
                            }}
                        />
                    </Form.Item>
                ),
            },
            {
                title: "독해",
                dataIndex: "reading",
                key: "reading",
                render: (text, record) => (
                    <Form.Item
                        name={["user", record.key, "reading"]}
                        initialValue={text}
                    >
                        <Input
                            size="small"
                            style={{
                                width: 80,
                                fontSize: 16,
                                textAlign: "center",
                            }}
                        />
                    </Form.Item>
                ),
            },
            {
                title: "문법",
                dataIndex: "grammar",
                key: "grammar",
                render: (text, record) => (
                    <Form.Item
                        name={["user", record.key, "grammar"]}
                        initialValue={text}
                    >
                        <Input
                            size="small"
                            style={{
                                width: 80,
                                fontSize: 16,
                                textAlign: "center",
                            }}
                        />
                    </Form.Item>
                ),
            },
            {
                title: "어휘",
                dataIndex: "vocabulary",
                key: "vocabulary",
                render: (text, record) => (
                    <Form.Item
                        name={["user", record.key, "vocabulary"]}
                        initialValue={text}
                    >
                        <Input
                            size="small"
                            style={{
                                width: 80,
                                fontSize: 16,
                                textAlign: "center",
                            }}
                        />
                    </Form.Item>
                ),
            },
        ],
    },
    {
        title: "Class",
        dataIndex: "class",
        key: "class",
        filters: [
            {
                text: "A반",
                value: "A반",
            },
            {
                text: "B반",
                value: "B반",
            },
            {
                text: "C반",
                value: "C반",
            },
            {
                text: "D반",
                value: "D반",
            },
        ],
        onFilter: (value, record) =>
            record.class.indexOf(value as string) === 0,
    },
];

const data: DataType[] = [];
for (let i = 0; i < 62; i++) {
    data.push({
        key: i,
        name: `엄준식${i}`,
        listening: 25,
        reading: 25,
        grammar: 25,
        vocabulary: 25,
        class: "A반",
    });
}

// const rowSelection = {
//   onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
//     console.log(
//       `selectedRowKeys: ${selectedRowKeys}`,
//       "selectedRows: ",
//       selectedRows
//     );
//   },
//   getCheckboxProps: (record: DataType) => ({
//     disabled: record.name === "Disabled User", // Column configuration not to be checked
//     name: record.name,
//   }),
// };

interface Props {
    write: boolean;
    handleWriteChange: () => void;
}

const GradeRegist = ({ write, handleWriteChange }: Props) => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const onSearch = (value: string) => console.log(value);
    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log("selectedRowKeys changed: ", newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const defaultMonth = moment(new Date()).format("YYYY/MM");

    const onFinish = (values: any) => {
        console.log("Success:", values);
    };
    return (
        <GradeRegistContainer>
            <DatePicker
                defaultValue={dayjs(defaultMonth, "YYYY/MM")}
                picker="month"
                format={"YYYY년 MM월"}
                bordered={false}
                allowClear={false}
            />
            <Form onFinish={onFinish}>
                <Table
                    className="t-grade"
                    rowSelection={rowSelection}
                    columns={columns}
                    dataSource={data}
                    footer={() => (
                        <div className="flex justify-between">
                            <Search
                                placeholder="이름을 입력하세요"
                                onSearch={onSearch}
                            />
                            <div className="flex gap-2">
                                <button
                                    className="grade-bt"
                                    onClick={handleWriteChange}
                                >
                                    취소
                                </button>
                                <button className="grade-bt" type="submit">
                                    등록
                                </button>
                            </div>
                        </div>
                    )}
                    pagination={{
                        position: ["bottomCenter"],
                        showSizeChanger: false,
                    }}
                />
            </Form>
        </GradeRegistContainer>
    );
};

export default GradeRegist;
