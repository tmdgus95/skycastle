import { SideBarContainer } from "../styles/Styles";

const SideBar = () => {
  return (
    <SideBarContainer>
      <>
        <div>학습관리시스템</div>
        <div>
          <p>학생현황</p>
          <p>성적 조회</p>
          <p>전체 통계</p>
        </div>
        <div>
          <p>성적현황</p>
          <p>성적 조회</p>
          <p>성적 통계</p>
        </div>
        <div>
          <p>게시판</p>
          <p>피드백</p>
        </div>
        <div>마이페이지</div>
        <div>
          <p>계정 관리</p>
          <p>계정 생성</p>
          <p>회원 관리</p>
        </div>
      </>
    </SideBarContainer>
  );
};

export default SideBar;
