import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HeaderInstance } from "../api/axios";
import TabMenu from "../components/TabMenu";
import { RootState } from "../store/store";
import { FormEvent, FormEventSubmit } from "./Login";

const Mypage = () => {
    const navigate = useNavigate();
    const accessToken = useSelector(
        (state: RootState) => state.auth.accessToken
    );
    console.log("토큰 확인", accessToken);

    const [userPwd, setUserPwd] = useState({ miPwd: "", changeMiPwd: "" });
    const handelChange = (e: FormEvent) => {
        const { name, value } = e.target;
        setUserPwd({ ...userPwd, [name]: value });
    };
    const handleSubmit = (e: FormEventSubmit) => {
        e.preventDefault();
        const body = {
            miPwd: userPwd.miPwd,
            changeMiPwd: userPwd.changeMiPwd,
        };
        HeaderInstance.post("/api/member/update", body)
            .then((res) => {
                console.log("회원정보수정", res);
                if (res.data.message === "비밀번호가 일치하지않습니다.") {
                    alert(res.data.message);
                } else {
                    alert(
                        `비밀번호 변경이 성공되었습니다.
다시 로그인해주세요.`
                    );
                    navigate("/");
                }
                return;
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <TabMenu menu={"마이페이지"} />
            <MypageContainer>
                <h3>비밀번호 수정</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">현재 비밀번호</label>
                        <label htmlFor="">비밀번호 수정</label>
                        <label htmlFor="">비밀번호 수정 확인</label>
                    </div>
                    <div>
                        <input
                            type="password"
                            name="miPwd"
                            onChange={handelChange}
                        />
                        <input
                            type="password"
                            name="changeMiPwd"
                            onChange={handelChange}
                        />
                        <input type="password" />
                    </div>
                    <button>수정</button>
                </form>
                <button>수정</button>
            </MypageContainer>
        </>
    );
};

const MypageContainer = styled.div`
    margin-top: 71px;
    margin-left: 39px;
    h3 {
        font-weight: 700;
        font-size: 24px;
    }
    input {
        width: 502px;
        height: 36px;
        background: rgba(216, 240, 234, 0.5);
        border-radius: 20px;
        margin-bottom: 21px;
        outline: none;
        padding-left: 31px;
    }
    button {
        width: 102px;
        height: 36px;
        background: ${(props) => props.theme.colors.pointColor};
        border-radius: 20px;
        font-weight: 400;
        font-size: 24px;
        line-height: 29px;
        color: ${(props) => props.theme.colors.white};
        margin-left: 580px;
    }
    button:hover {
        border: 1px solid ${(props) => props.theme.colors.pointColor};
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.pointColor};
    }
    form {
        display: flex;
        div:nth-child(1) {
            margin-top: 45px;
            display: flex;
            flex-direction: column;
            font-weight: 400;
            font-size: 20px;
        }
        div:nth-child(2) {
            display: flex;
            flex-direction: column;
            margin-top: 45px;
            margin-left: 61px;
            input:last-child {
                margin-bottom: 67px;
            }
        }
        label {
            height: 36px;
            line-height: 36px;
            margin-left: 22px;
            margin-bottom: 21px;
        }
    }
`;

export default Mypage;
