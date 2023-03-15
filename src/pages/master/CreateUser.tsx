import styled from "styled-components";
import TabMenu from "../../components/TabMenu";

const CreateUser = () => {
    return (
        <>
            <TabMenu menu={"계정관리"} />
            <CreateUserContainer>
                <form>
                    <div>
                        <label htmlFor="">구분</label>
                        <select name="" id="">
                            <option value="option1">선생님</option>
                            <option value="option2">학생</option>
                            <option value="option3">직원</option>
                            <option value="option3">관리자</option>
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
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </CommonInput>
                    </div>
                    <div>
                        <p> &#8226; 기타 정보</p>
                        <EtcInput>
                            <div>
                                <label htmlFor="">과목</label>
                                <label htmlFor="">담당 클래스</label>
                                <label htmlFor="">경력</label>
                            </div>
                            <div>
                                <input type="text" />
                                <input type="text" />
                                <input type="text" />
                            </div>
                        </EtcInput>
                    </div>
                    <button>전송</button>
                </form>
            </CreateUserContainer>
        </>
    );
};

const CreateUserContainer = styled.div`
    padding-top: 82px;
    padding-left: 69px;
    form {
        div:nth-child(2) {
            margin-bottom: 39px;
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
        margin-bottom: 39px;
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
