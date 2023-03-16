import styled from "styled-components";

// 성적조회
export const GradeRegistListContainer = styled.div`
  padding: 0 30px;
  .ant-tabs-tab {
    background: #283c43 !important;
    .ant-tabs-tab-btn {
      color: #fff !important;
    }
  }
  .ant-table-wrapper {
    th {
      background: #d8f0ea !important;
    }
    .grade-bt {
      width: 102px;
      height: 36px;
      border-radius: 20px;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      margin-left: 580px;
      border: 1px solid ${(props) => props.theme.colors.pointColor};
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.pointColor};
      transition: all 0.5s;
      &:hover {
        background: ${(props) => props.theme.colors.pointColor};
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;

export const GradeRegistContainer = styled.div`
  padding: 0 30px;
  .ant-tabs-tab {
    background: #283c43 !important;
    .ant-tabs-tab-btn {
      color: #fff !important;
    }
  }
  .ant-table-wrapper {
    th {
      background: #d8f0ea !important;
    }
    .grade-bt {
      width: 102px;
      height: 36px;
      border-radius: 20px;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      margin-left: 580px;
      border: 1px solid ${(props) => props.theme.colors.pointColor};
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.pointColor};
      transition: all 0.5s;
      &:hover {
        background: ${(props) => props.theme.colors.pointColor};
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`;

// 선생님용 평균 차트 공통 레이아웃
export const TInner = styled.div`
  position: relative;
  width: 50%;
  height: 500px;
  border: 1px solid ${(props) => props.theme.colors.mainColor};
  border-radius: 20px;
  .tChart-title {
    position: absolute;
    left: 5%;
    top: 3%;
    font-size: 20px;
    .tChart-line {
      font-size: 24px;
      font-weight: 600;
    }
  }
`;
