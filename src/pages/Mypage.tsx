import styled from "styled-components";
import TabMenu from "../components/TabMenu";

const Mypage = () => {
    return (
        <>
            <TabMenu />
            <MypageContainer>
                <h3>비밀번호 수정</h3>
                <form>
                    <div>
                        <label htmlFor="">현재 비밀번호</label>
                        <label htmlFor="">비밀번호 수정</label>
                        <label htmlFor="">비밀번호 수정 확인</label>
                    </div>
                    <div>
                        <input type="password" />
                        <input type="password" />
                        <input type="password" />
                    </div>
                </form>
                <button>수정</button>
            </MypageContainer>
        </>
    );
};

const MypageContainer = styled.div`
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
            display: flex;
            flex-direction: column;
        }
        div:nth-child(2) {
            display: flex;
            flex-direction: column;
            margin-left: 61px;
            input:last-child {
                text-align: right;
                margin-bottom: 67px;
            }
        }
        label {
            height: 36px;
            line-height: 36px;
            margin-bottom: 21px;
        }
    }
`;

export default Mypage;
