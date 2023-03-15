import React, { useState } from "react";
import { Col, DatePicker, Row, Space, Table, Tabs } from "antd";
import type { ColumnsType } from "antd/es/table";
import GradeRegist from "./GradeRegist";
import TabPane from "antd/es/tabs/TabPane";
import { GradeRegistListContainer } from "../../styles/TeacherStyles";
import Search from "antd/es/input/Search";

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
        sorter: (a, b) => a.listening - b.listening,
      },
      {
        title: "독해",
        dataIndex: "reading",
        sorter: (a, b) => a.reading - b.reading,
      },
      {
        title: "문법",
        dataIndex: "grammar",
        sorter: (a, b) => a.grammar - b.grammar,
      },
      {
        title: "어휘",
        dataIndex: "vocabulary",
        sorter: (a, b) => a.vocabulary - b.vocabulary,
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
    onFilter: (value, record) => record.class.indexOf(value as string) === 0,
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

const GradeList = () => {
  const [write, setWrite] = useState(false);
  const onSearch = (value: string) => console.log(value);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleWriteChange = () => {
    setWrite(!write);
  };
  return (
    <>
      {write ? (
        <GradeRegist write={write} handleWriteChange={handleWriteChange} />
      ) : (
        <>
          <GradeRegistListContainer>
            <DatePicker picker="month" bordered={false} />
            <Table
              className="t-grade"
              rowSelection={rowSelection}
              columns={columns}
              dataSource={data}
              footer={() => (
                <div className="flex justify-between">
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{ width: 200 }}
                  />
                  <button className="grade-bt" onClick={handleWriteChange}>
                    등록
                  </button>
                </div>
              )}
              pagination={{
                position: ["bottomCenter"],
                showSizeChanger: false,
              }}
            />
          </GradeRegistListContainer>
        </>
      )}
    </>
  );
};

export default GradeList;