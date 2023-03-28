import styled from "styled-components";

// 성적조회
export const GradeRegistListContainer = styled.div`
  padding: 10px 30px;
  .ant-picker {
    margin-bottom: 10px;
    .ant-picker-input {
      input {
        color: ${(props) => props.theme.colors.mainColor};
        font-size: 30px;
        font-weight: 500;
      }
      .ant-picker-suffix {
        display: none;
      }
    }
  }
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
    .ant-table-cell {
      text-align: center;
      font-size: 16px;
    }
    .ant-input-wrapper {
      width: 170px;
      padding-bottom: 1px;
      border-bottom: 1px solid #000;
      .ant-input {
        background: transparent;
        border: none;
        box-shadow: none;
      }
      .ant-input-group-addon {
        .ant-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          box-shadow: none;
          border: none;
        }
      }
    }
    .ant-table-footer {
      background: #fff;
      .grade-bt {
        width: 80px;
        height: 36px;
        border-radius: 20px;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
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
  }
  .ant-pagination {
    .ant-pagination-item-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ant-pagination-item-active {
      border-color: ${(props) => props.theme.colors.pointColor} !important;
      > a {
        color: ${(props) => props.theme.colors.pointColor} !important;
      }
    }
  }
`;

export const GradeRegistContainer = styled.div`
  padding: 10px 30px;
  .ant-picker {
    margin-bottom: 10px;
    .ant-picker-input {
      input {
        color: ${(props) => props.theme.colors.mainColor};
        font-size: 30px;
        font-weight: 500;
      }
      .ant-picker-suffix {
        display: none;
      }
    }
  }
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
    .ant-table-cell {
      text-align: center;
      font-size: 16px;
    }
    .ant-form-item {
      display: flex;
      justify-content: center;
      margin-bottom: 0 !important;
    }
    .ant-input-wrapper {
      width: 170px;
      padding-bottom: 1px;
      border-bottom: 1px solid #000;
      .ant-input {
        background: transparent;
        border: none;
        box-shadow: none;
      }
      .ant-input-group-addon {
        .ant-btn {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #fff;
          box-shadow: none;
          border: none;
        }
      }
    }
    .ant-table-footer {
      background: #fff;
      .grade-bt {
        width: 80px;
        height: 36px;
        border-radius: 20px;
        font-weight: 400;
        font-size: 20px;
        line-height: 29px;
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
  }
  .ant-pagination {
    .ant-pagination-item-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .ant-pagination-item-active {
      border-color: ${(props) => props.theme.colors.pointColor} !important;
      > a {
        color: ${(props) => props.theme.colors.pointColor} !important;
      }
    }
  }
`;

// 선생님_차트 부분 레이아웃
export const TeacherChart = styled.div`
  display: flex;
  gap: 5%;
  padding: 2% 0 0 3%;
`;

// 선생님용 평균 차트 공통 레이아웃
export const TInner = styled.div`
  position: relative;
  width: 45%;
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

// 타이틀
export const TeacherTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 2% 0 0 3%;
  font-size: 20px;
`;

// 검색창 스타일
export const SearchStyle = styled.div`
  .ant-select {
    width: 200px;
    margin: 2% 0 0 3%;
    border-radius: 8px;
  }
`;
