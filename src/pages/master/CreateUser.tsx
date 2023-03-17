import { useState } from "react";
import styled from "styled-components";
import { HeaderInstance } from "../../api/axios";
import TabMenu from "../../components/TabMenu";
import Button from "../../components/UI/Button";
import { FormEvent, FormEventSubmit } from "../Login";

const CreateUser = () => {
    const [createUser, setCreateUser] = useState({
        id: "",
        pwd: "",
        name: "",
        birth: "",
        email: "",
        regDt: "",
        grade: 1,
        shcool: "",
        subject: 1,
        position: "",
        department: "",
        exp: "",
        classroom: 1,
    });
    const [creatUserId, setCreatUserId] = useState("student");

    const handelChange = (e: FormEvent) => {
        const { name, value } = e.target;
        setCreateUser({ ...createUser, [name]: value });
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCreatUserId(e.target.value);
    };

    const handleSubmit = (e: FormEventSubmit) => {
        e.preventDefault();
        const body = {
            id: createUser.id,
            pwd: createUser.pwd,
            name: createUser.name,
            birth: createUser.birth,
            email: createUser.email,
            regDt: createUser.regDt,
            classroom: createUser.classroom,
            grade: createUser.grade,
            shcool: createUser.shcool,
            subject: createUser.subject,
            position: createUser.position,
            department: createUser.department,
            exp: createUser.exp,
        };
        console.log(body);

        HeaderInstance.put(`/api/member/join/${creatUserId}`, body)
            .then((res) => {
                console.log(res);
                alert("계정생성이 완료되었습니다.");
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <TabMenu menu={"계정관리"} />
            <CreateUserContainer>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">구분</label>
                        <select name="" id="" onChange={handleSelectChange}>
                            <option value="student">학생</option>
                            <option value="teacher">선생님</option>
                            <option value="employee">직원</option>
                            <option value="master">관리자</option>
                        </select>
                    </div>
                    <div>
                        <p> &#8226; 공통 정보</p>
                        <CommonInput>
                            <div>
                                <label htmlFor="">아이디</label>
                                <label htmlFor="">비밀번호</label>
                                <label htmlFor="">이름</label>
                                <label htmlFor="">생년월일</label>
                                <label htmlFor="">이메일</label>
                                <label htmlFor="">등록일</label>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="id"
                                    onChange={handelChange}
                                />
                                <input
                                    type="text"
                                    name="pwd"
                                    onChange={handelChange}
                                />
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handelChange}
                                />
                                <input
                                    type="text"
                                    name="birth"
                                    onChange={handelChange}
                                />
                                <input
                                    type="text"
                                    name="email"
                                    onChange={handelChange}
                                />
                                <input
                                    type="text"
                                    name="regDt"
                                    onChange={handelChange}
                                />
                            </div>
                        </CommonInput>
                    </div>
                    {creatUserId === "student" && (
                        <div>
                            <p> &#8226; 기타 정보</p>
                            <EtcInput>
                                <div>
                                    <label htmlFor="">학년</label>
                                    <label htmlFor="">학교</label>
                                    <label htmlFor="">클래스</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="grade"
                                        onChange={handelChange}
                                    />
                                    <input
                                        type="text"
                                        name="shcool"
                                        onChange={handelChange}
                                    />
                                    <input
                                        type="text"
                                        name="classroom"
                                        onChange={handelChange}
                                    />
                                </div>
                            </EtcInput>
                        </div>
                    )}
                    {creatUserId === "teacher" && (
                        <div>
                            <p> &#8226; 기타 정보</p>
                            <EtcInput>
                                <div>
                                    <label htmlFor="">과목</label>
                                    <label htmlFor="">담당 클래스</label>
                                    <label htmlFor="">경력</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="subject"
                                        onChange={handelChange}
                                    />
                                    <input
                                        type="text"
                                        name="classroom"
                                        onChange={handelChange}
                                    />
                                    <input
                                        type="text"
                                        name="exp"
                                        onChange={handelChange}
                                    />
                                </div>
                            </EtcInput>
                        </div>
                    )}
                    {creatUserId === "employee" && (
                        <div>
                            <p> &#8226; 기타 정보</p>
                            <EtcInput>
                                <div>
                                    <label htmlFor="">직급</label>
                                    <label htmlFor="">부서</label>
                                    <label htmlFor="">경력</label>
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="position"
                                        onChange={handelChange}
                                    />
                                    <input
                                        type="text"
                                        name="department"
                                        onChange={handelChange}
                                    />
                                    <input
                                        type="text"
                                        name="exp"
                                        onChange={handelChange}
                                    />
                                </div>
                            </EtcInput>
                        </div>
                    )}
                    <Button title="전송" />
                </form>
            </CreateUserContainer>
        </>
    );
};

const CreateUserContainer = styled.div`
    padding-top: 82px;
    padding-left: 69px;
    form {
        position: relative;
        div:nth-child(2) {
            margin-bottom: 39px;
        }
        button {
            position: absolute;
            top: 750px;
            right: 700px;
        }
    }
    p {
        font-weight: 500;
        font-size: 24px;
        margin-bottom: 14px;
    }

    select {
        font-weight: 500;
        font-size: 24px;
        margin-left: 136px;
        margin-bottom: 39px;
        border: 1px solid;
        padding: 7px 146px 2px 15px;
    }

    label {
        font-weight: 500;
        font-size: 24px;
        text-align: left;
        width: 180px;
        margin-bottom: 15px;
    }
    input {
        width: 502px;
        height: 36px;
        background: rgba(216, 240, 234, 0.5);
        border-radius: 20px;
        margin-bottom: 15px;
        outline: none;
        padding-left: 31px;
        font-size: 24px;
    }
`;
const CommonInput = styled.div`
    display: flex;
    div {
        display: flex;
        flex-direction: column;
    }
`;
const EtcInput = styled.div`
    display: flex;
    div {
        display: flex;
        flex-direction: column;
    }
`;

export default CreateUser;
