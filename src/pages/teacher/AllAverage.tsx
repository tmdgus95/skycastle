import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";

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
    country: "AD",
    "hot dog": 143,
    "hot dogColor": "hsl(131, 70%, 50%)",
    burger: 153,
    burgerColor: "hsl(19, 70%, 50%)",
    sandwich: 82,
    sandwichColor: "hsl(138, 70%, 50%)",
    kebab: 165,
    kebabColor: "hsl(226, 70%, 50%)",
    fries: 111,
    friesColor: "hsl(48, 70%, 50%)",
    donut: 90,
    donutColor: "hsl(193, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 110,
    "hot dogColor": "hsl(331, 70%, 50%)",
    burger: 197,
    burgerColor: "hsl(259, 70%, 50%)",
    sandwich: 171,
    sandwichColor: "hsl(52, 70%, 50%)",
    kebab: 160,
    kebabColor: "hsl(272, 70%, 50%)",
    fries: 180,
    friesColor: "hsl(203, 70%, 50%)",
    donut: 175,
    donutColor: "hsl(336, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 89,
    "hot dogColor": "hsl(330, 70%, 50%)",
    burger: 134,
    burgerColor: "hsl(157, 70%, 50%)",
    sandwich: 198,
    sandwichColor: "hsl(217, 70%, 50%)",
    kebab: 84,
    kebabColor: "hsl(79, 70%, 50%)",
    fries: 86,
    friesColor: "hsl(210, 70%, 50%)",
    donut: 154,
    donutColor: "hsl(349, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 73,
    "hot dogColor": "hsl(72, 70%, 50%)",
    burger: 152,
    burgerColor: "hsl(340, 70%, 50%)",
    sandwich: 161,
    sandwichColor: "hsl(157, 70%, 50%)",
    kebab: 58,
    kebabColor: "hsl(2, 70%, 50%)",
    fries: 40,
    friesColor: "hsl(60, 70%, 50%)",
    donut: 136,
    donutColor: "hsl(77, 70%, 50%)",
  },
];

const AllAverage = () => {
  return (
    <div>
      <Tabs
        type="card"
        // tabBarStyle={{ background: "#283c43", color: "#fff" }}
        // style={{ background: "#283c43", color: "#fff" }}
      >
        <TabPane tab="성적 통계" key="1"></TabPane>
      </Tabs>
      <div className="flex h-[50vh]">
        <ResponsiveLine
          data={data}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
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
        <ResponsiveBar
          data={bardata}
          keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
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
                id: "sandwich",
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
              e.id + ": " + e.formattedValue + " in country: " + e.indexValue
            );
          }}
        />
      </div>
    </div>
  );
};

export default AllAverage;
