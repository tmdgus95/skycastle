import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

interface FindProps {
    title: string;
    content?: number;
    id?: string;
    close: () => void;
}

const Find = ({ title, content, id, close }: FindProps) => {
    const navigation = useNavigate();
    return (
        <FindContainer>
            <div>
                <p>{title}</p>
                <button>
                    <GrClose
                        onClick={() => {
                            close();
                            navigation("/");
                        }}
                    />
                </button>
            </div>
            <div>
                {content && (
                    <>
                        <p>임시 비밀번호가 이메일로 전송 되었습니다.</p>
                        <p>마이페이지에서 변경해 주시기 바랍니다.</p>
                    </>
                )}
                {id && <p>찾으시는 아이디는 '{id}'입니다.</p>}
            </div>
        </FindContainer>
    );
};

const FindContainer = styled.div`
    position: absolute;
    top: 30%;
    right: 27%;
    width: 886px;
    height: 308px;
    background: #ffffff;
    border: 1px solid #283c43;
    border-radius: 20px;
    overflow: hidden;
    line-height: 226px;
    div:nth-child(1) {
        display: flex;
        background: ${(props) => props.theme.colors.menuColor};
        height: 82px;
        padding-left: 42px;
        text-align: left;
        line-height: 82px;
        button {
            position: static;
            padding-left: 700px;
        }
    }
    div:nth-child(2) {
        p {
            line-height: 24px;
            height: 30px;
            font-weight: 400;
            font-size: 24px;
        }
        p:nth-child(1) {
            margin-top: 70px;
        }
        p:nth-child(2) {
            margin-top: 20px;
        }
    }
`;

export default Find;
