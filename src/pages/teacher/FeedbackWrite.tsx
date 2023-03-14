import styled from "styled-components";

const FeedbackWrite = () => {
    return (
        <FeedbackWriteContainer>
            <FeedbackWriteBox>
                <FeedbackWriteHeader>
                    <div>선생님</div>
                    <div>글</div>
                    <div>날짜</div>
                </FeedbackWriteHeader>
                <FeedbackWriteBody>
                    <textarea
                        cols={20}
                        rows={50}
                        style={{ width: "100%", height: "50%" }}
                    >
                        1234
                    </textarea>
                </FeedbackWriteBody>
            </FeedbackWriteBox>
        </FeedbackWriteContainer>
    );
};

const FeedbackWriteContainer = styled.div`
    display: block;
    width: 1600px;
    height: 85vh;
    background-color: red;
`;
const FeedbackWriteBox = styled.div`
    position: relative;
    display: block;
    width: 80%;
    height: 90%;
    background-color: green;
    margin: 100px auto;
    padding: 50px;
`;
const FeedbackWriteHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    height: 10%;
    background-color: skyblue;
    margin: 0 auto;
    margin-top: 50px;
    border-bottom: 2px solid #000;
`;
const FeedbackWriteBody = styled.div`
    width: 80%;
    height: 50%;
    margin: 0 auto;
    margin-top: 150px;
    border-bottom: 2px solid #000;
`;

export default FeedbackWrite;
