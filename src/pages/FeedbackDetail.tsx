import TabMenu from "../components/TabMenu";
import styled from "styled-components";
import Button from "../components/UI/Button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { HeaderInstance } from "../api/axios";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    setRegDt,
    setWriter,
    setTitle,
    setContent,
} from "../store/slice/feedbackSlice";

const FeedbackDetail = () => {
    const dispatch = useDispatch();
    const { titleId } = useParams();
    console.log(titleId);

    const [detailInfo, setDetailInfo] = useState({
        content: "",
        regDt: "",
        title: "",
        writer: "",
        comment: [],
    });
    // console.log(titleId);
    // console.log(detailInfo);

    const commentList = detailInfo.comment;
    // console.log(commentList);

    const [write, setWrite] = useState("");
    // console.log(write);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let body = {
            comment: write,
        };

        await HeaderInstance.put(`/api/feedback/comment/${titleId}`, body)
            .then((res) => console.log(res))

            .catch((err) => console.log(err));
        setWrite("");
        alert("등록되었당께");
        getFeedbackData();
    };

    const getFeedbackData = () => {
        HeaderInstance.get(`/api/feedback/${titleId}`)
            .then((res) => {
                const writer = res.data.detail.writer;
                dispatch(setWriter(writer));

                const regDt = res.data.detail.regDt;
                dispatch(setRegDt(regDt));

                const title = res.data.detail.title;
                dispatch(setTitle(title));

                const content = res.data.detail.content;
                dispatch(setContent(content));

                console.log(res.data.detail);
                setDetailInfo(res.data.detail);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getFeedbackData();
    }, []);

    interface CommentItem {
        name: string;
        comment: string;
    }

    return (
        <>
            <TabMenu menu="게시판" />
            <Container>
                <Inner>
                    <DetailHeader>
                        <p>{detailInfo.writer} </p>
                        {detailInfo.title}
                        <p> {detailInfo.regDt}</p>
                    </DetailHeader>
                    <DetailBody>
                        <DetailContent>{detailInfo.content}</DetailContent>
                    </DetailBody>
                    <form onSubmit={handleSubmit}>
                        <ReviewContainer>
                            {commentList.map((item: CommentItem) => (
                                <div key={item.name}>
                                    <ReviewInner>
                                        <Review>
                                            <div>{item.name}</div>
                                            <div>{item.comment}</div>
                                        </Review>
                                    </ReviewInner>
                                </div>
                            ))}
                            <RegistInner>
                                <Input
                                    onChange={(e) => setWrite(e.target.value)}
                                    value={write}
                                />
                                <Button title="등록" />
                            </RegistInner>
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 0,
                                    right: "10%",
                                }}
                            >
                                <Link
                                    to={"/teacher/feedback/writeedit"}
                                    state={{ data: titleId }}
                                >
                                    <Button title="수정" />
                                </Link>
                            </div>
                        </ReviewContainer>
                    </form>
                </Inner>
            </Container>
        </>
    );
};

const Container = styled.div`
    width: 100%;
    height: 85vh;
    @media screen and (max-width: 715px) {
        min-width: 595px;
        min-height: 739px;
    }
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
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
`;

const Review = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    width: 80%;
    height: 8%;
    margin: 0 auto;
    padding: 10px 30px;
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
    @media screen and (max-width: 1024px) {
        width: 400px;
        height: 36px;
        background: rgba(216, 240, 234, 0.5);
        border-radius: 20px;
        padding-left: 20px;
        outline: none;
    }
    @media screen and (max-width: 800px) {
        width: 350px;
        height: 36px;
        background: rgba(216, 240, 234, 0.5);
        border-radius: 20px;
        padding-left: 20px;
        outline: none;
    }
`;

export default FeedbackDetail;
