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

type StudentT = {
  seq: number;
  name: string;
};

const StudentAvg = () => {
  // 학생 리스트
  const [studentList, setStudentList] = useState([]);
  const [defaultStudent, setDefaultStudent] = useState<StudentT>({
    seq: 0,
    name: "",
  });
  const [weeknessSubject, setWeeknessSubject] = useState("");
  const getList = async () => {
    const accessToken = window.localStorage.getItem("token");
    await axios
      .get("http://192.168.0.140:8686/api/class/student", {
        headers: { Authorization: `Bearer ${accessToken}` },
      })
      .then((res) => {
        console.log(res.data);
        setStudentList(res.data.content);
        setDefaultStudent(res.data.content[0]);
      });
  };
  const defaultChart = async () => {
    const accessToken = window.localStorage.getItem("token");
    await axios
      .get(
        `http://192.168.0.140:8686/api/score/list/now/${defaultStudent.seq}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        // console.log(res.data);
        setStudentSelect(res.data.scoreList);
      });
    await axios
      .get(
        `http://192.168.0.140:8686/api/score/list/year/${defaultStudent.seq}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      )
      .then((res) => {
        // console.log(res.data);
        setMonthlyGrade(res.data.scoreList);
        setWeeknessSubject(res.data.weeknessSubject);
      });
  };

  const searchList: { value: number; label: string }[] = studentList.map(
    (item: { seq: number; name: string }) => {
      return { value: item.seq, label: item.name };
    }
  );

  // 이번달 점수 데이터
  const [studentSelect, setStudentSelect] = useState([]);

  // 월별 점수 데이터
  const [monthlyGrade, setMonthlyGrade] = useState([]);

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

  const handleChange = (value: number) => {
    // console.log(value);
    const selectList = searchList.find((item) => item.value === value);
    if (selectList) {
      setDefaultStudent({ seq: selectList.value, name: selectList.label });
    }
  };
  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    defaultChart();
  }, [defaultStudent]);

  // const defaultStudent: string = searchList[0].value.toString();

  return (
    <>
      <TabMenu menu={"개인 통계"} />
      <SearchStyle>
        <Select
          showSearch
          placeholder="학생을 선택하세요."
          optionFilterProp="children"
          onChange={handleChange}
          onSearch={onSearch}
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={searchList}
        />
      </SearchStyle>
      <TeacherTitle>
        <FaBell style={{ color: "#fcc53b" }} />
        &nbsp;<b>{defaultStudent.name}</b>&nbsp;학생, 현재
        <b style={{ color: "firebrick" }}>&nbsp;"{weeknessSubject}"</b>
        &nbsp;취약 과목입니다.
      </TeacherTitle>
      <TeacherChart>
        <Inner>
          <p>&#8226; 최근 {defaultStudent.name} 학생 점수</p>
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
          <p>&#8226; 월별 {defaultStudent.name} 학생 점수 변화</p>
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
            colors={{ scheme: "paired" }}
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
      </TeacherChart>
    </>
  );
};

export default StudentAvg;
