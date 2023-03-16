import { ResponsiveRadar } from "@nivo/radar";
import { ResponsiveBar } from "@nivo/bar";
import { Title, Chart, Inner } from "../../styles/StudentStyles";
import { FaBell } from "react-icons/fa";
import Search from "antd/es/input/Search";

const StudentAvg = () => {
  const thisMonthScore = [
    {
      subject: "문법",
      점수: 60,
    },
    {
      subject: "어휘",
      점수: 45,
    },
    {
      subject: "독해",
      점수: 70,
    },
    {
      subject: "듣기",
      점수: 85,
    },
  ];
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
      <Search placeholder="input search text" style={{ width: 200 }} />
      <Title>
        <FaBell /> 옥지은 학생, 현재 "문법" 취약 과목입니다.
      </Title>
      <Chart>
        <Inner>
          <p>&#8226; 이번달 옥지은 학생 점수</p>
          <ResponsiveRadar
            data={thisMonthScore}
            keys={["점수"]}
            indexBy="subject"
            // valueFormat=">-.2f"
            margin={{ top: 110, bottom: 70 }}
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
            data={monthlyChangeScore}
            keys={["문법", "어휘", "독해", "듣기"]}
            indexBy="country"
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
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              );
            }}
          />
        </Inner>
      </Chart>
    </>
  );
};

export default StudentAvg;
