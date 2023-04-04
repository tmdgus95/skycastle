import { ResponsiveBar } from "@nivo/bar";
import { useEffect, useState } from "react";
import { HeaderInstance } from "../../api/axios";

const MonthlyChangeScore = () => {
    const [scoreLists2, setScoreLists2] = useState([]);
    // console.log(scoreLists2 && scoreLists2);

    const fetchData2 = () => {
        HeaderInstance.get("/api/score/list/year")
            .then((res) => {
                // console.log(res.data);
                setScoreLists2(res.data.scoreList);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData2();
    }, []);

    // const monthlyChangeScore = [
    //     {
    //         country: "1월",
    //         문법: 70,
    //         문법Color: "hsl(197, 70%, 50%)",
    //         어휘: 40,
    //         어휘Color: "hsl(232, 70%, 50%)",
    //         독해: 55,
    //         독해Color: "hsl(161, 70%, 50%)",
    //         듣기: 70,
    //         듣기Color: "hsl(304, 70%, 50%)",
    //     },
    //     {
    //         country: "2월",
    //         문법: 75,
    //         문법Color: "hsl(342, 70%, 50%)",
    //         어휘: 50,
    //         어휘Color: "hsl(212, 70%, 50%)",
    //         독해: 65,
    //         독해Color: "hsl(287, 70%, 50%)",
    //         듣기: 75,
    //         듣기Color: "hsl(139, 70%, 50%)",
    //     },
    //     {
    //         country: "3월",
    //         문법: 60,
    //         문법Color: "hsl(166, 70%, 50%)",
    //         어휘: 45,
    //         어휘Color: "hsl(283, 70%, 50%)",
    //         독해: 70,
    //         독해Color: "hsl(142, 70%, 50%)",
    //         듣기: 85,
    //         듣기Color: "hsl(270, 70%, 50%)",
    //     },
    //     {
    //         country: "4월",
    //         문법: 80,
    //         문법Color: "hsl(272, 70%, 50%)",
    //         어휘: 55,
    //         어휘Color: "hsl(358, 70%, 50%)",
    //         독해: 75,
    //         독해Color: "hsl(235, 70%, 50%)",
    //         듣기: 95,
    //         듣기Color: "hsl(324, 70%, 50%)",
    //     },
    //     {
    //         country: "5월",
    //         문법: 55,
    //         문법Color: "hsl(210, 70%, 50%)",
    //         어휘: 70,
    //         어휘Color: "hsl(117, 70%, 50%)",
    //         독해: 80,
    //         독해Color: "hsl(145, 70%, 50%)",
    //         듣기: 90,
    //         듣기Color: "hsl(276, 70%, 50%)",
    //     },
    //     {
    //         country: "6월",
    //         문법: 75,
    //         문법Color: "hsl(29, 70%, 50%)",
    //         어휘: 65,
    //         어휘Color: "hsl(170, 70%, 50%)",
    //         독해: 95,
    //         독해Color: "hsl(356, 70%, 50%)",
    //         듣기: 80,
    //         듣기Color: "hsl(127, 70%, 50%)",
    //     },
    //     {
    //         country: "7월",
    //         문법: 100,
    //         문법Color: "hsl(58, 70%, 50%)",
    //         어휘: 100,
    //         어휘Color: "hsl(72, 70%, 50%)",
    //         독해: 100,
    //         독해Color: "hsl(254, 70%, 50%)",
    //         듣기: 100,
    //         듣기Color: "hsl(318, 70%, 50%)",
    //     },
    // ];

    return (
        <>
            <p>
                &#8226; <b>월별</b> 내 점수 변화
            </p>
            <ResponsiveBar
                data={scoreLists2}
                keys={["grammar", "vocabulary", "comprehension", "listening"]}
                indexBy="testName"
                margin={{ top: 100, right: 130, bottom: 50, left: 60 }}
                padding={0.4}
                maxValue={400}
                valueScale={{ type: "linear" }}
                indexScale={{ type: "band", round: true }}
                colors={{ scheme: "paired" }}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "월별 모의평가",
                    legendPosition: "middle",
                    legendOffset: 32,
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: "점수",
                    legendPosition: "middle",
                    legendOffset: -40,
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{
                    from: "color",
                    modifiers: [["darker", 1.6]],
                }}
                legends={[
                    {
                        dataFrom: "keys",
                        anchor: "bottom-right",
                        direction: "column",
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: "left-to-right",
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
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
        </>
    );
};

export default MonthlyChangeScore;
