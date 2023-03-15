import styled from "styled-components";
// 전체 레이아웃
export const FlexContainer = styled.div`
    display: flex;
`;
// 사이드바
export const SideBarContainer = styled.div`
    width: 17%;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.mainColor};
    color: ${(props) => props.theme.colors.white};
`;
// 메인화면
export const MainContentsContainer = styled.div`
    width: 83%;
`;
// 헤더
export const HeaderContainer = styled.div`
    display: flex;
`;
