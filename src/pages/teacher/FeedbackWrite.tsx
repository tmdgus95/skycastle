import styled from "styled-components";
import Button from "../../components/UI/Button";
import TabMenu from "../../components/TabMenu";

const FeedbackWrite = () => {
    return (
        <>
            <TabMenu menu="게시판" />
            <FeedbackWriteContainer>
                <FeedbackWriteBox>
                    <FeedbackWriteHeader>
                        <p>선생님</p>
                        <div style={{ paddingRight: "120px" }}>
                            <input
                                type="text"
                                style={{
                                    width: "650px",
                                    height: "35px",
                                    background: "#f3f3f3",
                                    borderRadius: "5px",
                                    textAlign: "left",
                                    paddingLeft: "23px",
                                    outline: "none",
                                }}
                                placeholder="제목을 입력해주세요."
                            />
                        </div>
                        <p>날짜</p>
                    </FeedbackWriteHeader>
                    <FeedbackWriteBody>
                        <textarea
                            style={{
                                width: "80%",
                                height: "100%",
                                border: "1px solid #eee",
                                background: "#f3f3f3",
                                borderRadius: "5px",
                                padding: "20px",
                            }}
                            placeholder="내용을 입력해주세요."
                        ></textarea>
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
const FeedbackWriteBody = styled.div`
    width: 80%;
    height: 100%;
    margin: 0 auto;
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid gray;
    outline: none;
`;

export default FeedbackWrite;
