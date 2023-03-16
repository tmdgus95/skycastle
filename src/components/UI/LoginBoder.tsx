import styled from "styled-components";

const LoginBoder = () => {
    return (
        <LoginBoderContainer>
            <LoginBoderInner>
                <LoginBoderContent></LoginBoderContent>
            </LoginBoderInner>
        </LoginBoderContainer>
    );
};

const LoginBoderContainer = styled.div`
    position: absolute;
    width: calc(100% - 74px);
    height: calc(100vh - 52px);
    border: 1px solid white;
    top: 26px;
    left: 37px;
    background: transparent;
    pointer-events: none;
`;
const LoginBoderInner = styled.div`
    position: absolute;
    width: calc(100% - 40px);
    height: calc(100vh - 80px);
    border: 3px solid white;
    top: 14px;
    left: 19px;
    background: transparent;
`;
const LoginBoderContent = styled.div`
    position: absolute;
    width: calc(100% - 40px);
    height: calc(100vh - 111px);
    border: 1px solid white;
    top: 14px;
    left: 19px;
    background: transparent;
`;

export default LoginBoder;
