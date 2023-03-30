import styled from "styled-components";
import Button from "../../components/UI/Button";
import TabMenu from "../../components/TabMenu";
import { useState } from "react";
import { HeaderInstance } from "../../api/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useLocation, useNavigate } from "react-router-dom";

const FeedbackWriteEdit = () => {
    const navigate = useNavigate();

    const location = useLocation();
    console.log(location);

    const writer = useSelector((state: RootState) => state.feedback.writer);
    // console.log(writer);
    const regDt = useSelector((state: RootState) => state.feedback.regDt);
    // console.log(regDt);
    const title2 = useSelector((state: RootState) => state.feedback.title);
    // console.log(title2);
    const content = useSelector((state: RootState) => state.feedback.content);
    // console.log(content);

    const [title, setTitle] = useState("");
    // console.log(title);
    const [text, setText] = useState("");
    // console.log(text);
    // console.log(new Date());

    const [studentId, setStudentId] = useState("");
    console.log(1, studentId);

    const fiSeq = location.state.data;

    const handleSubmit = (e: any) => {
        e.preventDefault();
        let body = {
            title: title,
            content: text,
            // date: new Date(),
        };
        console.log(body);

        HeaderInstance.patch(
            `/api/feedback/update/${fiSeq}`,

            body
        )
            .then((res) => {
                console.log(res);
                alert("수정되었습니다.");
                navigate("/teacher/feedback");
            })
            .catch((err) => console.log(err));
        setTitle("");
        setText("");
    };

    return (
        <>
            <TabMenu menu="게시판" />

            <form onSubmit={handleSubmit}>
                <FeedbackWriteContainer>
                    <FeedbackWriteBox>
                        <FeedbackWriteHeader>
                            <p>{writer}</p>

                            {title2 && (
                                <div>
                                    <Input
                                        type="text"
                                        defaultValue={title2}
                                        placeholder="제목을 입력해주세요."
                                        onChange={(e) =>
                                            setTitle(e.target.value)
                                        }
                                    />
                                </div>
                            )}
                            <p>{regDt}</p>
                        </FeedbackWriteHeader>
                        <FeedbackWriteBody>
                            {content && (
                                <textarea
                                    style={{
                                        width: "80%",
                                        height: "100%",
                                        border: "1px solid #eee",
                                        background: "#f3f3f3",
                                        borderRadius: "5px",
                                        padding: "20px",
                                        outline: "none",
                                    }}
                                    placeholder="내용을 입력해주세요."
                                    onChange={(e) => setText(e.target.value)}
                                    defaultValue={content}
                                ></textarea>
                            )}
                        </FeedbackWriteBody>

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "end",
                                padding: "0 100px",
                                marginTop: "50px",
                            }}
                        >
                            <Button title="등록" />
                        </div>
                    </FeedbackWriteBox>
                </FeedbackWriteContainer>
            </form>
        </>
    );
};

const FeedbackWriteContainer = styled.div`
    display: block;
    width: 100%;
    height: 75vh;
`;
const FeedbackWriteBox = styled.div`
    position: relative;
    display: block;
    width: 80%;
    height: 80%;
    margin: 100px auto;
    padding: 50px;
    @media screen and (max-width: 986px) {
        width: 639px;
        height: 634px;
    }
`;
const FeedbackWriteHeader = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 10%;
    background: ${(props) => props.theme.colors.menuColor};
    margin: 0 auto;
    border-radius: 5px;
    border-bottom: 1px solid #333;
`;

const Input = styled.input`
    width: 650px;
    height: 35px;
    background: #f3f3f3;
    border-radius: 5px;
    text-align: left;
    padding-left: 23px;
    outline: none;
    @media screen and (max-width: 1920px) {
        width: 600px;
    }
    @media screen and (max-width: 1560px) {
        width: 500px;
    }
    @media screen and (max-width: 1260px) {
        width: 400px;
    }
    @media screen and (max-width: 1065px) {
        width: 350px;
    }
`;
const FeedbackWriteBody = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid gray;
    outline: none;
    @media screen and (max-width: 1920px) {
        width: 78%;
    }
    @media screen and (max-width: 1560px) {
        width: 75%;
    }
`;

export default FeedbackWriteEdit;
