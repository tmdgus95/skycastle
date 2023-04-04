import TabMenu from "../../components/TabMenu";
import { DatePicker, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { MonthlyGradeList } from "../../styles/StudentStyles";
import { useEffect, useState } from "react";
import { HeaderInstance } from "../../api/axios";

interface DataType {
    key: React.Key;
    testName: string;
    listening: number;
    comprehension: number;
    grammar: number;
    vocabulary: number;
    total: number;
    average: number;
    class: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: "날짜",
        dataIndex: "testName",
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
                dataIndex: "comprehension",
                sorter: (a, b) => a.comprehension - b.comprehension,
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
        title: "총점",
        dataIndex: "total",
    },
    {
        title: "평균",
        dataIndex: "average",
    },
    {
        title: "평가 반",
        dataIndex: "class",
        key: "class",
        filters: [
            {
                text: "A",
                value: "A",
            },
            {
                text: "B",
                value: "B",
            },
            {
                text: "C",
                value: "C",
            },
            {
                text: "D",
                value: "D",
            },
        ],
        onFilter: (value, record) =>
            record.class.indexOf(value as string) === 0,
    },
];

// const data: DataType[] = [];
// for (let i = 1; i <= 12; i++) {
//     data.push({
//         key: i,
//         testName: `${i}월`,
//         listening: 25,
//         comprehension: 25,
//         grammar: 25,
//         vocabulary: 25,
//         total: 100,
//         average: 25,
//         class: "A반",
//     });
// }

const Gradelist = () => {
    const [scoreLists, setScoreLists] = useState<DataType[]>([]);
    // console.log(scoreLists && scoreLists);

    const scoreLists2 = scoreLists.map((scoreList, index) => {
        const total =
            scoreList.listening +
            scoreList.comprehension +
            scoreList.grammar +
            scoreList.vocabulary;
        const average = Math.round((total / 4) * 100) / 100; // 평균값 계산
        const randomizeClass = "A"; // 반 임의로 지정함
        return {
            ...scoreList,
            testName: scoreList.testName.slice(4, 7),
            key: index,
            total: total,
            average: average,
            class: randomizeClass,
        };
    });

    const fetchData = () => {
        HeaderInstance.get("/api/score/list/year")
            .then((res) => {
                // console.log(res.data.scoreList);
                setScoreLists(res.data.scoreList);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <TabMenu menu={"성적 현황"} />
            <MonthlyGradeList>
                <DatePicker picker="month" bordered={false} />
                <Table
                    bordered
                    columns={columns}
                    dataSource={scoreLists2}
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
