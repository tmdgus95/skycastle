import styled from "styled-components";
import Button from "../../components/UI/Button";
import TabMenu from "../../components/TabMenu";
import { useEffect, useState } from "react";
import axios from "axios";
import { Select } from "antd";
import { HeaderInstance } from "../../api/axios";
import { useNavigate } from "react-router-dom";

const FeedbackWrite = () => {
    const navigate = useNavigate();

    const name = window.localStorage.getItem("name");
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    // console.log(formattedDate);

    // 학생 리스트
    const [studentList, setStudentList] = useState([]);
    const getList = async () => {
        const accessToken = window.localStorage.getItem("token");
        await axios
            .get("http://192.168.0.140:8686/api/class/student", {
                headers: { Authorization: `Bearer ${accessToken}` },
            })
            .then((res) => {
                console.log(res.data);
                setStudentList(res.data.content);
            });
    };
    const searchList: { value: number; label: string }[] = studentList.map(
        (item: { seq: number; name: string }) => {
            return { value: item.seq, label: item.name };
        }
    );

    useEffect(() => {
        getList();
    }, []);

    const [title, setTitle] = useState("");
    console.log(title);
    const [text, setText] = useState("");
    console.log(text);
    console.log(new Date());

    const [studentId, setStudentId] = useState("");
    console.log(1, studentId);

    const handleChange = () => console.log();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        let body = {
            fiTitle: title,
            fiContent: text,
            // date: new Date(),
        };

        HeaderInstance.put(`/api/feedback/${studentId}`, body)
            .then((res) => {
                console.log(res);
                navigate("/teacher/feedback");
            })
            .catch((err) => console.log(err));
        setTitle("");
        setText("");
    };

    const onChange = (value: string) => {
        console.log(`selected ${value}`);
        setStudentId(value);
    };

    const onSearch = (value: string) => {
        console.log("search:", value);
    };

    return (
        <>
            <TabMenu menu="게시판" />
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                    (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                }
                options={searchList}
                style={{ marginTop: 20, marginLeft: 39 }}
            />
            <form onSubmit={handleSubmit}>
                <FeedbackWriteContainer>
                    <FeedbackWriteBox>
                        <FeedbackWriteHeader>
                            <p> {name}</p>

                            <div>
                                <Input
                                    type="text"
                                    placeholder="제목을 입력해주세요."
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                            </div>
                            <p>{formattedDate}</p>
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
                                    outline: "none",
                                }}
                                placeholder="내용을 입력해주세요."
                                onChange={(e) => setText(e.target.value)}
                                value={text}
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

export default FeedbackWrite;
