import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginInstance } from "../api/axios";
import Find from "../components/modal/Find";
import LoginBoder from "../components/UI/LoginBoder";
import { FindPasswordContainer } from "../styles/Styles";
import { FormEvent, FormEventSubmit } from "./Login";

const FindPassword = () => {
    const navigate = useNavigate();
    const [findPwd, setFindPwd] = useState({
        id: "",
        name: "",
        email: "",
    });
    const [modal, setModal] = useState(false);
    const handleModal = () => {
        setModal(false);
        navigate("/");
    };
    const handelChange = (e: FormEvent) => {
        const { name, value } = e.target;
        setFindPwd({ ...findPwd, [name]: value });
    };
    const handleSubmit = (e: FormEventSubmit) => {
        e.preventDefault();
        LoginInstance.post(
            `/api/member/pwd?id=${findPwd.id}&name=${findPwd.name}&email=${findPwd.email}`
        )
            .then((res) => {
                console.log(res);
                setModal(true);
            })
            .catch((err) => {
                alert("아이디, 이름, 이메일을 다시 확인해 주세요");
                console.log(err);
            });
    };
    console.log(findPwd);

    return (
        <>
            <FindPasswordContainer>
                <div className="flex w-full justify-center  mb-10 ">
                    <img
                        className="w-[45%]"
                        src="/images/Logo.png"
                        alt="로고"
                    />
                </div>
                <h3>비밀번호 찾기</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="아이디"
                        name="id"
                        onChange={handelChange}
                    />

                    <br />

                    <input
                        type="text"
                        placeholder="이름"
                        name="name"
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
                    <button onClick={() => navigate("/findid")}>
                        아이디 찾기
                    </button>
                    <button onClick={() => navigate("/")}>홈으로</button>
                </div>
                {modal && (
                    <Find
                        title="비밀번호 찾기"
                        content={1}
                        close={handleModal}
                    />
                )}
            </FindPasswordContainer>
            <LoginBoder />
        </>
    );
};

export default FindPassword;
