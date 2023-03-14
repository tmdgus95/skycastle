import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const Find = () => {
    return (
        <FindContainer>
            <div>
                <p>아이디찾기</p>
                <button>
                    <GrClose />
                </button>
            </div>
            <div>아이디 찾기</div>
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
`;

export default Find;
