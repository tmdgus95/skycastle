import { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { LoginInstance } from "../api/axios";
import { setAccessToken } from "../store/slice/userSlice";
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
            // console.log(res.data);
            const accessToken = res.data.token.accessToken;

            dispatch(setAccessToken(accessToken));
            navigate("/student/mypage");
            // console.log('로그인 응답', res);
            return;
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
                    <button>아이디 찾기</button>
                    <button>비밀번호 찾기</button>
                </div>
            </LoginContainer>
            <Outlet />
        </>
    );
};

export default Login;
