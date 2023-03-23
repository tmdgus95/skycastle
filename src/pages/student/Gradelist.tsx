import TabMenu from "../../components/TabMenu";
import { DatePicker, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { MonthlyGradeList } from "../../styles/StudentStyles";

interface DataType {
    key: React.Key;
    month: string;
    listening: number;
    reading: number;
    grammar: number;
    vocabulary: number;
    class: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "날짜",
        dataIndex: "month",
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
        onFilter: (value, record) =>
            record.class.indexOf(value as string) === 0,
    },
];

const data: DataType[] = [];
for (let i = 1; i <= 12; i++) {
    data.push({
        key: i,
        month: `${i}월`,
        listening: 25,
        reading: 25,
        grammar: 25,
        vocabulary: 25,
        class: "A반",
    });
}

const Gradelist = () => {
    return (
        <>
            <TabMenu menu={"성적 현황"} />
            <MonthlyGradeList>
                <DatePicker picker="month" bordered={false} />
                <Table
                    className="t-grade"
                    bordered
                    columns={columns}
                    dataSource={data}
                    pagination={{
                        position: ["bottomCenter"],
                        showSizeChanger: false,
                    }}
                />
            </MonthlyGradeList>
        </>
    );
};

export default Gradelist;
