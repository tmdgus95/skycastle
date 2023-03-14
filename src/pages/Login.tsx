import { Outlet } from "react-router-dom";
import { LoginContainer } from "../styles/Styles";

const Login = () => {
    return (
        <>
            <LoginContainer>
                <h2>학습관리시스템</h2>
                <form>
                    <input type="text" placeholder="USER ID" />

                    <br />

                    <input type="password" placeholder="PASSWORD" />

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
