import Find from "../components/modal/Find";
import { FindIdContainer } from "../styles/Styles";

const FindId = () => {
    return (
        <FindIdContainer>
            <h2>학습관리시스템</h2>
            <h3>아이디 찾기</h3>
            <form>
                <input type="text" placeholder="이름" />

                <br />

                <input type="text" placeholder="생년월일" />

                <br />

                <input type="text" placeholder="이메일" />

                <br />

                <button>FIND</button>
            </form>

            <div>
                <button>비밀번호 찾기</button>
            </div>
            <Find />
        </FindIdContainer>
    );
};

export default FindId;
