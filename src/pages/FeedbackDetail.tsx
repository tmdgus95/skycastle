import TabMenu from "../components/TabMenu";
import styled from "styled-components";
import Button from "../components/UI/Button";

const FeedbackDetail = () => {
    return (
        <>
            <TabMenu menu="게시판" />
            <Container>
                <Inner>
                    <DetailHeader>
                        <p>선생님</p>
                        <p>제목</p>
                        <p>날짜</p>
                    </DetailHeader>
                    <DetailBody>
                        <DetailContent>
                            지은학생 문법은 올랐는데 어휘가 좀 부족하네요
                            <br />
                            지원대학 가려면 좀만 더 힘내자
                        </DetailContent>
                    </DetailBody>
                    <ReviewContainer>
                        <ReviewInner>
                            <Review>
                                <div> 학생</div>
                                <div>밤새 열심히 했는데 말넘심...ㅠㅠ</div>
                                <button>X</button>
                            </Review>
                            <Review>
                                <div> 선생님</div>
                                <div>이녀석 운동장으로 따라와</div>
                                <button>X</button>
                            </Review>
                            <RegistInner>
                                <Input />
                                <Button title="등록" />
                            </RegistInner>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: "10%",
                                }}
                            >
                                <Button title="수정" />
                            </div>
                        </ReviewInner>
                    </ReviewContainer>
                </Inner>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: 85vh;
`;
const Inner = styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 70vh;
    margin: 0 auto;
    padding: 50px 0;
`;
const DetailHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 6%;
    margin: 0 auto;
    padding: 0 10px;
    background: ${(props) => props.theme.colors.menuColor};
    border-bottom: 1px solid #333;
`;
const DetailBody = styled.div`
    position: relative;
    width: 80%;
    height: 30%;
    margin: 0 auto;
    border-bottom: 1px solid #000;
`;

const DetailContent = styled.div`
    position: absolute;
    top: 14%;
    display: inline-block;
    width: 100%;
    height: 50%;
    padding: 20px;
    border: 1px solid #000;
    border-radius: 10px;
    font-size: 18px;
`;

const ReviewContainer = styled.div`
    width: 100%;
    height: 40vh;
    margin-top: 30px;
`;

const ReviewInner = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 200px;
`;

const Review = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 80%;
    height: 8%;
    margin: 0 auto;
    padding: 10px;
    background-color: #e9e9e9;
    border-bottom: 1px solid #000;
`;

const RegistInner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
`;
const Input = styled.input`
    width: 502px;
    height: 36px;
    background: rgba(216, 240, 234, 0.5);
    border-radius: 20px;
    padding-left: 20px;
    outline: none;
`;

export default FeedbackDetail;
