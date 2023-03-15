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
      background: ${(props) => props.theme.colors.pointColor};
      border-radius: 20px;
      font-weight: 400;
      font-size: 24px;
      line-height: 29px;
      color: ${(props) => props.theme.colors.white};
      margin-left: 580px;
      &:hover {
        border: 1px solid ${(props) => props.theme.colors.pointColor};
        background-color: ${(props) => props.theme.colors.white};
        color: ${(props) => props.theme.colors.pointColor};
      }
    }
  }
`;

export const GradeRegistContainer = styled.div`
  padding: 0 30px;
`;
