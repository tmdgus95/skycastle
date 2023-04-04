import { Title, Chart, Inner, Analysis } from "../../styles/StudentStyles";
import { FaBell } from "react-icons/fa";
import TabMenu from "../../components/TabMenu";
// import { useSelector } from "react-redux";
// import { RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { HeaderInstance } from "../../api/axios";
import ThisMonthScore from "./ThisMonthScore";
import MonthlyChangeScore from "./MonthlyChangeScore";

const Myaverage = () => {
    const name = window.localStorage.getItem("name");
    // const name = useSelector((state: RootState) => state.auth.name);
    // console.log("name", name);

    const [explanation, setExplanation] = useState();
    const [weeknessSubject, setWeeknessSubject] = useState();
    // console.log(scoreLists2 && scoreLists2);

    const fetchData2 = () => {
        HeaderInstance.get("/api/score/list/year")
            .then((res) => {
                // console.log(res.data);
                setExplanation(res.data.explanation);
                setWeeknessSubject(res.data.weeknessSubject);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData2();
    }, []);

    return (
        <>
            <TabMenu menu={"성적 현황"} />
            <Title>
                <FaBell style={{ color: "#fcc53b" }} />
                &nbsp;
                <b>
                    {name ? <span>{name}</span> : <span>이름이 없습니다.</span>}
                </b>
                &nbsp;학생, 현재
                <b style={{ color: "firebrick" }}>&nbsp;"{weeknessSubject}"</b>
                &nbsp;취약 과목입니다.
            </Title>
            <Chart>
                <Inner>
                    <ThisMonthScore />
                </Inner>
                <Inner>
                    <MonthlyChangeScore />
                </Inner>
            </Chart>
            <Analysis>
                &#8226; <b>월별 내 점수 변화 분석</b>
                <br />
                <p> : {explanation}</p>
            </Analysis>
        </>
    );
};

export default Myaverage;
