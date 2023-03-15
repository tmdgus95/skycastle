import { FindPasswordContainer } from "../styles/Styles";

const FindPassword = () => {
    return (
        <FindPasswordContainer>
            <h2>학습관리시스템</h2>
            <h3>비밀번호 찾기</h3>
            <form>
                <input type="text" placeholder="아이디" />

                <br />

                <input type="text" placeholder="이름" />

                <br />

                <input type="text" placeholder="이메일" />

                <br />

                <button>FIND</button>
            </form>
            <div>
                <button>아이디 찾기</button>
            </div>
        </FindPasswordContainer>
    );
};

export default FindPassword;
