import { ResponsiveRadar } from "@nivo/radar";
import { useEffect, useState } from "react";
import { HeaderInstance } from "../../api/axios";

const ThisMonthScore = () => {
    const [scoreLists, setScoreLists] = useState([]);
    // console.log(scoreLists && scoreLists);

    const fetchData = () => {
        HeaderInstance.get("/api/score/list/now")
            .then((res) => {
                // console.log(res.data.scoreList);
                setScoreLists(res.data.scoreList);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchData();
    }, []);

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

    return (
        <>
            <p>&#8226; 이번달 내 점수</p>
            <ResponsiveRadar
                data={scoreLists}
                keys={["grade"]}
                indexBy="subjectName"
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
        </>
    );
};

export default ThisMonthScore;
