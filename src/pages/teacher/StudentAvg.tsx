import { ResponsiveRadar } from "@nivo/radar";
import { ResponsiveBar } from "@nivo/bar";
import { Inner } from "../../styles/StudentStyles";
import {
    SearchStyle,
    TeacherChart,
    TeacherTitle,
} from "../../styles/TeacherStyles";
import { FaBell } from "react-icons/fa";
import TabMenu from "../../components/TabMenu";
import { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";

const StudentAvg = () => {
    // 학생 리스트
    const [studentList, setStudentList] = useState([]);
    const getList = async () => {
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
    const searchList: { value: number; label: string }[] = studentList.map(
        (item: { seq: number; name: string }) => {
            return { value: item.seq, label: item.name };
        }
    );
    // console.log(searchList);

    // 이번달 점수 데이터
    const [studentSelect, setStudentSelect] = useState([]);

    // 월별 점수 데이터
    const [monthlyGrade, setMonthlyGrade] = useState([]);
    console.log(monthlyGrade);

    type monthlyType = {
        test: string;
        문법: string;
        듣기: string;
        어휘: string;
        독해: string;
    };

    const monthlyData: monthlyType[] = monthlyGrade.map(
        (item: {
            testName: string;
            grammar: string;
            listening: string;
            vocabulary: string;
            comprehension: string;
        }) => {
            return {
                test: item.testName,
                문법: item.grammar,
                듣기: item.listening,
                어휘: item.vocabulary,
                독해: item.comprehension,
            };
        }
    );

    console.log(monthlyData);

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
        try {
            const accessToken = window.localStorage.getItem("token");
            axios
                .get(`http://192.168.0.140:8686/api/score/list/now/${value}`, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                })
                .then((res) => {
                    console.log(res.data);
                    setStudentSelect(res.data.scoreList);
                });
            axios
                .get(`http://192.168.0.140:8686/api/score/list/year/${value}`, {
                    headers: { Authorization: `Bearer ${accessToken}` },
                })
                .then((res) => {
                    console.log(res.data);
                    setMonthlyGrade(res.data.scoreList);
                });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getList();
    }, []);

    const onSearch = (value: string) => {
        console.log("search:", value);
    };

    // const thisMonthScore = [
    //     {
    //         subject: "문법",
    //         점수: 60,
    //     },
    //     {
    //         subject: "어휘",
    //         점수: 45,
    //     },
    //     {
    //         subject: "독해",
    //         점수: 70,
    //     },
    //     {
    //         subject: "듣기",
    //         점수: 85,
    //     },
    // ];
    const monthlyChangeScore = [
        {
            country: "1월",
            문법: 70,
            문법Color: "hsl(197, 70%, 50%)",
            어휘: 40,
            어휘Color: "hsl(232, 70%, 50%)",
            독해: 55,
            독해Color: "hsl(161, 70%, 50%)",
            듣기: 70,
            듣기Color: "hsl(304, 70%, 50%)",
        },
        {
            country: "2월",
            문법: 75,
            문법Color: "hsl(342, 70%, 50%)",
            어휘: 50,
            어휘Color: "hsl(212, 70%, 50%)",
            독해: 65,
            독해Color: "hsl(287, 70%, 50%)",
            듣기: 75,
            듣기Color: "hsl(139, 70%, 50%)",
        },
        {
            country: "3월",
            문법: 60,
            문법Color: "hsl(166, 70%, 50%)",
            어휘: 45,
            어휘Color: "hsl(283, 70%, 50%)",
            독해: 70,
            독해Color: "hsl(142, 70%, 50%)",
            듣기: 85,
            듣기Color: "hsl(270, 70%, 50%)",
        },
        {
            country: "4월",
            문법: 80,
            문법Color: "hsl(272, 70%, 50%)",
            어휘: 55,
            어휘Color: "hsl(358, 70%, 50%)",
            독해: 75,
            독해Color: "hsl(235, 70%, 50%)",
            듣기: 95,
            듣기Color: "hsl(324, 70%, 50%)",
        },
        {
            country: "5월",
            문법: 55,
            문법Color: "hsl(210, 70%, 50%)",
            어휘: 70,
            어휘Color: "hsl(117, 70%, 50%)",
            독해: 80,
            독해Color: "hsl(145, 70%, 50%)",
            듣기: 90,
            듣기Color: "hsl(276, 70%, 50%)",
        },
        {
            country: "6월",
            문법: 75,
            문법Color: "hsl(29, 70%, 50%)",
            어휘: 65,
            어휘Color: "hsl(170, 70%, 50%)",
            독해: 95,
            독해Color: "hsl(356, 70%, 50%)",
            듣기: 80,
            듣기Color: "hsl(127, 70%, 50%)",
        },
        {
            country: "7월",
            문법: 100,
            문법Color: "hsl(58, 70%, 50%)",
            어휘: 100,
            어휘Color: "hsl(72, 70%, 50%)",
            독해: 100,
            독해Color: "hsl(254, 70%, 50%)",
            듣기: 100,
            듣기Color: "hsl(318, 70%, 50%)",
        },
    ];

    return (
        <>
            <TabMenu menu={"개인 통계"} />
            <SearchStyle>
                {/* <Search placeholder="이름을 입력하세요" onSearch={onSearch} /> */}
                <Select
                    showSearch
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={onChange}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        (option?.label ?? "")
                            .toLowerCase()
                            .includes(input.toLowerCase())
                    }
                    options={searchList}
                />
            </SearchStyle>
            <TeacherTitle>
                <FaBell />
                &nbsp; 옥지은 학생, 현재 "문법" 취약 과목입니다.
            </TeacherTitle>
            <TeacherChart>
                <Inner>
                    <p>&#8226; 이번달 옥지은 학생 점수</p>
                    <ResponsiveRadar
                        // data={thisMonthScore}
                        data={studentSelect}
                        keys={["grade"]}
                        indexBy="subjectName"
                        // valueFormat=">-.2f"
                        margin={{ top: 110, bottom: 70, left: 70, right: 70 }}
                        borderColor="#fa0000"
                        gridLabelOffset={36}
                        enableDots={false}
                        dotSize={1}
                        dotColor={{ theme: "background" }}
                        dotBorderWidth={2}
                        colors={{ scheme: "nivo" }}
                        blendMode="multiply"
                        motionConfig="wobbly"
                    />
                </Inner>
                <Inner>
                    <p>&#8226; 월별 옥지은 학생 점수 변화</p>
                    <ResponsiveBar
                        // data={monthlyChangeScore}
                        data={monthlyData}
                        keys={["문법", "어휘", "독해", "듣기"]}
                        indexBy="test"
                        margin={{ top: 100, right: 40, bottom: 50, left: 60 }}
                        padding={0.5}
                        maxValue={400}
                        valueScale={{ type: "linear" }}
                        indexScale={{ type: "band", round: true }}
                        colors={{ scheme: "nivo" }}
                        borderColor={{
                            from: "color",
                            modifiers: [["darker", 1.6]],
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 0,
                            tickPadding: 10,
                            tickRotation: 0,
                            legend: "",
                            legendPosition: "middle",
                            legendOffset: 32,
                        }}
                        axisLeft={{
                            tickSize: 0,
                            tickPadding: 10,
                            tickRotation: 0,
                            legend: "",
                            legendPosition: "middle",
                            legendOffset: -40,
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                            from: "color",
                            modifiers: [["darker", 1.6]],
                        }}
                        legends={[]}
                        role="application"
                        ariaLabel="Nivo bar chart demo"
                        barAriaLabel={function (e) {
                            return (
                                e.id +
                                ": " +
                                e.formattedValue +
                                " in country: " +
                                e.indexValue
                            );
                        }}
                    />
                </Inner>
            </TeacherChart>
        </>
    );
};

export default StudentAvg;
