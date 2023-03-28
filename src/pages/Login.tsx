import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInstance } from "../api/axios";
import LoginBoder from "../components/UI/LoginBoder";
import { LoginContainer } from "../styles/Styles";

export interface FormEvent extends React.FormEvent {
    target: HTMLInputElement;
}
export interface FormEventSubmit extends React.FormEvent<HTMLFormElement> {}

const Login = () => {
    const navigate = useNavigate();
    const [loginUser, setLoginUser] = useState({ id: "", pwd: "" });
    const handelChange = (e: FormEvent) => {
        const { name, value } = e.target;
        setLoginUser({ ...loginUser, [name]: value });
    };
    const handleSubmit = async (e: FormEventSubmit) => {
        e.preventDefault();
        const body = {
            id: loginUser.id,
            pwd: loginUser.pwd,
        };

        try {
            const res = await LoginInstance.post("/api/member/login", body);
            console.log("로그인 응답", res);
            const accessToken = res.data.token.accessToken;
            const role = res.data.role;
            const name = res.data.name;

            window.localStorage.setItem("token", accessToken);
            window.localStorage.setItem("role", role);
            window.localStorage.setItem("name", name);

            if (res.data.role === "MASTER") {
                navigate("/master/create");
            } else if (res.data.role === "TEACHER") {
                navigate("/teacher/allaverage");
            } else if (res.data.role === "STUDENT") {
                navigate("/student/myaverage");
            } else {
                navigate("/");
            }
        } catch (err) {
            alert("아이디 비밀번호를 확인해주세요");
            console.error(err);
        }
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
