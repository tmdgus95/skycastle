import styled from "styled-components";
// Myaverage.tsx
// 타이틀
export const Title = styled.div`
    display: flex;
    align-items: center;
    padding: 3% 0 0 3%;
    font-size: 20px;
`;
// 차트 부분 레이아웃
export const Chart = styled.div`
    display: flex;
    gap: 5%;
    padding: 3% 0 3% 3%;
`;
// 차트 공통 레이아웃
export const Inner = styled.div`
    position: relative;
    width: 45%;
    height: 500px;
    border: 1px solid ${(props) => props.theme.colors.mainColor};
    border-radius: 20px;
    background: #fff;
    p {
        position: absolute;
        left: 5%;
        top: 5%;
        font-size: 24px;
    }
`;
// 차트 분석글
export const Analysis = styled.div`
    padding-left: 3%;
    padding-right: 5%;
    font-size: 22px;
    p {
        padding-left: 1%;
    }
`;

// Gradelist.tsx
// 성적조회
export const MonthlyGradeList = styled.div`
    padding: 0 30px;
    .ant-tabs-tab {
        background: ${(props) => props.theme.colors.mainColor} !important;
        .ant-tabs-tab-btn {
            color: #fff !important;
        }
    }
    .ant-table-wrapper {
        th {
            background: ${(props) => props.theme.colors.menuColor} !important;
            text-align: center !important;
        }
        td {
            text-align: center;
        }
    }
`;
