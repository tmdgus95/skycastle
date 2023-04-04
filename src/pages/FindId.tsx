import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInstance } from "../api/axios";
import Find from "../components/modal/Find";
import LoginBoder from "../components/UI/LoginBoder";
import { FindIdContainer } from "../styles/Styles";
import { FormEvent, FormEventSubmit } from "./Login";

const FindId = () => {
    const navigate = useNavigate();
    const [findId, setFindId] = useState({
        name: "",
        birth: "",
        email: "",
    });
    const [findResult, setFindResult] = useState();
    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(false);
        navigate("/");
    };
    const handelChange = (e: FormEvent) => {
        const { name, value } = e.target;
        setFindId({ ...findId, [name]: value });
    };

    const handleSubmit = (e: FormEventSubmit) => {
        e.preventDefault();
        const body = {
            name: findId.name,
            birth: findId.birth,
            email: findId.email,
        };

        LoginInstance.post("/api/member/id", body)
            .then((res) => {
                console.log(res);
                setFindResult(res.data.UserId);
                setModal(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <FindIdContainer>
                <h2>학습관리시스템</h2>
                <h3>아이디 찾기</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="이름"
                        name="name"
                        onChange={handelChange}
                    />

                    <br />

                    <input
                        type="text"
                        placeholder="생년월일"
                        name="birth"
                        onChange={handelChange}
                    />

                    <br />

                    <input
                        type="text"
                        placeholder="이메일"
                        name="email"
                        onChange={handelChange}
                    />

                    <br />

                    <button>FIND</button>
                </form>

                <div>
                    <button onClick={() => navigate("/findpassword")}>
                        비밀번호 찾기
                    </button>
                    <button onClick={() => navigate("/")}>홈으로</button>
                </div>
                {modal && (
                    <Find
                        title="아이디찾기"
                        id={findResult}
                        close={handleModal}
                    />
                )}
            </FindIdContainer>
            <LoginBoder />
        </>
    );
};

export default FindId;
