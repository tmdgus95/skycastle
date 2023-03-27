import React, { useEffect, useState } from "react";
import { Table, Form, Input, Button, DatePicker, DatePickerProps } from "antd";
import type { ColumnsType } from "antd/es/table";
import { GradeRegistContainer } from "../../styles/TeacherStyles";
import Search from "antd/es/input/Search";
import dayjs from "dayjs";
import moment from "moment";
import axios from "axios";

interface DataType {
  key: React.Key;
  seq: number;
  name: string;
  listening: number | null;
  reading: number | null;
  grammar: number | null;
  vocabulary: number | null;
  // class: string;
}

// type StudentType = {
//     key: number;
//     name: string;
// };

const columns: ColumnsType<DataType> = [
  {
    title: "Seq",
    dataIndex: "seq",
    key: "seq",
    sorter: (a, b) => a.seq - b.seq,
    render: (text, record) => (
      <Form.Item name={["user", record.key, "seq"]} initialValue={text}>
        {text}
      </Form.Item>
    ),
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
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
            rules={[
              {
                required: true,
                message: "점수를 입력해주세요.",
              },
            ]}
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
            rules={[
              {
                required: true,
                message: "점수를 입력해주세요.",
              },
            ]}
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
            rules={[
              {
                required: true,
                message: "점수를 입력해주세요.",
              },
            ]}
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
            rules={[
              {
                required: true,
                message: "점수를 입력해주세요.",
              },
            ]}
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
  // {
  //     title: "Class",
  //     dataIndex: "class",
  //     key: "class",
  //     filters: [
  //         {
  //             text: "A반",
  //             value: "A반",
  //         },
  //         {
  //             text: "B반",
  //             value: "B반",
  //         },
  //         {
  //             text: "C반",
  //             value: "C반",
  //         },
  //         {
  //             text: "D반",
  //             value: "D반",
  //         },
  //     ],
  //     onFilter: (value, record) =>
  //         record.class.indexOf(value as string) === 0,
  // },
];

interface Props {
  write: boolean;
  handleWriteChange: () => void;
}

const GradeRegist = () => {
  // ant 테이블 관련
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const onSearch = (value: string) => console.log(value);
  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log("selectedRowKeys changed: ", newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  //   const rowSelection = {
  //     selectedRowKeys,
  //     onChange: onSelectChange,
  //   };
  const defaultMonth = moment(new Date()).format("YYYY/MM");

  // 학생 리스트
  const [studentList, setStudentList] = useState([]);
  const getPosts = async () => {
    const accessToken = window.localStorage.getItem("token");
    await axios
      .get("http://192.168.0.140:8686/api/class/student", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setStudentList(res.data.content);
      });
  };
  useEffect(() => {
    getPosts();
  }, []);

  console.log(studentList);

  const list: DataType[] = studentList.map(
    (item: { seq: number; name: string }, index) => {
      return {
        key: index,
        seq: item.seq,
        name: item.name,
        listening: null,
        reading: null,
        grammar: null,
        vocabulary: null,
      };
    }
  );

  console.log(list);

  // 날짜
  const [onDate, setOnDate] = useState<string>(
    moment(new Date()).format("YYYYMM")
  );
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date);
    setOnDate(moment(dateString).format("YYYYMM"));
    console.log(dateString);
  };
  console.log(onDate);
  // console.log(moment(onDate).format("YYYYMM"));

  // 제출
  const onFinish = (values: any) => {
    // console.log("Success:", values);
    const body = {
      yearmonth: onDate,
      addGradeVO: values.user,
    };
    console.log(body);
  };

  return (
    <GradeRegistContainer>
      <DatePicker
        defaultValue={dayjs(defaultMonth, "YYYY/MM")}
        picker="month"
        format={"YYYY-MM"}
        bordered={false}
        allowClear={false}
        onChange={onChange}
      />
      <Form onFinish={onFinish}>
        <Table
          className="t-grade"
          // rowSelection={rowSelection}
          columns={columns}
          dataSource={list}
          footer={() => (
            <div className="flex justify-between">
              <Search placeholder="이름을 입력하세요" onSearch={onSearch} />
              <div className="flex gap-2">
                {/* <button className="grade-bt" onClick={handleWriteChange}>
                  취소
                </button> */}
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
