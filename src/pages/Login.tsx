import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginInstance } from "../api/axios";
import LoginBoder from "../components/UI/LoginBoder";
import {
    setAccessToken,
    setName,
    setRefreshToken,
    setRole,
} from "../store/slice/userSlice";
import { LoginContainer } from "../styles/Styles";

export interface FormEvent extends React.FormEvent {
    target: HTMLInputElement;
}
export interface FormEventSubmit extends React.FormEvent<HTMLFormElement> {}

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({ id: "", pwd: "" });
    const handelChange = (e: FormEvent) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    };
    const handleSubmit = (e: FormEventSubmit) => {
        e.preventDefault();
        const body = {
            id: loginUser.id,
            pwd: loginUser.pwd,
        };
        LoginInstance.post("/api/member/login", body).then((res) => {
            console.log("로그인 응답", res);
            const accessToken = res.data.token.accessToken;
            const refreshToken = res.data.token.refreshToken;
            const role = res.data.role;
            const name = res.data.name;

            dispatch(setAccessToken(accessToken));
            dispatch(setRefreshToken(refreshToken));
            dispatch(setRole(role));
            dispatch(setName(name));
            navigate("/student/mypage");
        });
    };

    return (
        <>
            <LoginContainer>
                <h2>학습관리시스템</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="USER ID"
                        name="id"
                        onChange={handelChange}
                    />

                    <br />

                    <input
                        type="password"
                        placeholder="PASSWORD"
                        name="pwd"
                        onChange={handelChange}
                    />

                    <br />

                    <button>LOG IN</button>
                </form>

                <div>
                    <button onClick={() => navigate("/findid")}>
                        아이디 찾기
                    </button>
                    <button onClick={() => navigate("/findpassword")}>
                        비밀번호 찾기
                    </button>
                </div>
            </LoginContainer>
            <LoginBoder />
        </>
    );
};

export default Login;
