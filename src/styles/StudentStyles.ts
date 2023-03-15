import styled from "styled-components";
// 타이틀
export const Title = styled.div`
    font-size: 20px;
`;
// 차트 부분 레이아웃
export const Chart = styled.div`
    display: flex;
    gap: 5%;
    padding: 5%;
`;
// 차트 공통 레이아웃
export const Inner = styled.div`
    position: relative;
    width: 50%;
    height: 500px;
    border: 1px solid ${(props) => props.theme.colors.mainColor};
    border-radius: 20px;
    p {
        position: absolute;
        left: 5%;
        top: 5%;
        font-size: 24px;
    }
`;
