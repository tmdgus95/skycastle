import { Chart, Inner } from "../../styles/StudentStyles";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";
import { TInner } from "../../styles/TeacherStyles";

const data = [
  {
    id: "dataset1",
    data: [
      { x: "2022-01-01", y: 50 },
      { x: "2022-02-01", y: 70 },
      { x: "2022-03-01", y: 90 },
      { x: "2022-04-01", y: 120 },
      { x: "2022-05-01", y: 150 },
    ],
  },
  {
    id: "dataset2",
    data: [
      { x: "2022-01-01", y: 70 },
      { x: "2022-02-01", y: 100 },
      { x: "2022-03-01", y: 120 },
      { x: "2022-04-01", y: 140 },
      { x: "2022-05-01", y: 170 },
    ],
  },
];

const bardata = [
  {
    country: "A반",
    듣기: 24,
    듣기Color: "hsl(131, 70%, 50%)",
    독해: 25,
    독해Color: "hsl(19, 70%, 50%)",
    문법: 25,
    문법Color: "hsl(138, 70%, 50%)",
    어휘: 23,
    어휘Color: "hsl(226, 70%, 50%)",
  },
  {
    country: "B반",
    듣기: 20,
    듣기Color: "hsl(331, 70%, 50%)",
    독해: 20,
    독해Color: "hsl(259, 70%, 50%)",
    문법: 21,
    문법Color: "hsl(52, 70%, 50%)",
    어휘: 19,
    어휘Color: "hsl(272, 70%, 50%)",
  },
  {
    country: "C반",
    듣기: 20,
    듣기Color: "hsl(330, 70%, 50%)",
    독해: 19,
    독해Color: "hsl(157, 70%, 50%)",
    문법: 17,
    문법Color: "hsl(217, 70%, 50%)",
    어휘: 15,
    어휘Color: "hsl(79, 70%, 50%)",
  },
  {
    country: "D반",
    듣기: 15,
    듣기Color: "hsl(72, 70%, 50%)",
    독해: 16,
    독해Color: "hsl(340, 70%, 50%)",
    문법: 15,
    문법Color: "hsl(157, 70%, 50%)",
    어휘: 10,
    어휘Color: "hsl(2, 70%, 50%)",
  },
];

const AllAverage = () => {
  return (
    <div>
      <div className="">
        <Chart>
          <TInner>
            <div className="tChart-title">
              <p>
                <span className="tChart-line text-[#FF9F4A]">-</span> 학생 전체
                평균 점수
              </p>
              <p>
                <span className="tChart-line text-[#5799C7]">-</span> 상위 10%
                평균 점수
              </p>
            </div>
            <ResponsiveLine
              data={data}
              // yScale={{
              //   type: "linear",
              //   min: "auto",
              //   max: "auto",
              //   stacked: true,
              //   reverse: false,
              // }}
              margin={{ top: 100, right: 110, bottom: 50, left: 60 }}
              curve="natural"
              axisTop={null}
              axisRight={null}
              colors={{ scheme: "category10" }}
              lineWidth={2}
              enableGridX={false}
              enableGridY={true}
              pointSize={10}
              pointColor={{ theme: "background" }}
              pointBorderWidth={2}
              pointBorderColor={{ from: "serieColor" }}
              pointLabelYOffset={-12}
              useMesh={true}
              legends={[
                {
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 100,
                  translateY: 0,
                  itemsSpacing: 0,
                  itemDirection: "left-to-right",
                  itemWidth: 80,
                  itemHeight: 20,
                  itemOpacity: 0.75,
                  symbolSize: 12,
                  symbolShape: "circle",
                  symbolBorderColor: "rgba(0, 0, 0, .5)",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemBackground: "rgba(0, 0, 0, .03)",
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
            />
          </TInner>
          <Inner>
            <p>&#8226; 월별 반 평균 점수</p>
            <ResponsiveBar
              data={bardata}
              keys={["듣기", "독해", "문법", "어휘"]}
              indexBy="country"
              margin={{ top: 100, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "nivo" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "fries",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "문법",
                  },
                  id: "lines",
                },
              ]}
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
                legend: "country",
                legendPosition: "middle",
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "food",
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
          </Inner>
        </Chart>
      </div>
    </div>
  );
};

export default AllAverage;
