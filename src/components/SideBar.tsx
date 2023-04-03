import { Menu } from "antd";
import { Link } from "react-router-dom";
import { SideBarContainer } from "../styles/Styles";
import {
  AiOutlineArrowsAlt,
  AiOutlineEdit,
  AiOutlineIdcard,
  AiOutlineMinusSquare,
  AiOutlinePieChart,
  AiOutlineReconciliation,
  AiOutlineStock,
} from "react-icons/ai";

const SideBar = () => {
  const role = window.localStorage.getItem("role");
  console.log("role", role && role);

  return (
    <SideBarContainer>
      <p className="sidebar-title">학습관리시스템</p>
      {role === "STUDENT" && (
        <Menu className="sidebar-menu">
          <Menu.Item key="menu-1">
            <Link to="/student/gradelist">성적 조회</Link>
          </Menu.Item>
          <Menu.Item key="menu-2">
            <Link to="/student/myaverage">
              <AiOutlineStock />
              &nbsp; 성적 통계
            </Link>
          </Menu.Item>
          <Menu.Item key="menu-3">
            <Link to="/student/feedback">
              <AiOutlineReconciliation />
              &nbsp; 게시판
            </Link>
          </Menu.Item>
          <Menu.Item key="menu-4">
            <Link to="/student/mypage">
              <AiOutlineIdcard />
              &nbsp; 마이페이지
            </Link>
          </Menu.Item>
        </Menu>
      )}
      {role === "TEACHER" && (
        <Menu className="sidebar-menu">
          <Menu.Item key="menu-1">
            <Link to="/teacher/gradelist">
              <AiOutlineEdit />
              &nbsp; 성적 입력
            </Link>
          </Menu.Item>
          <Menu.Item key="menu-2">
            <Link to="/teacher/allaverage">
              <AiOutlinePieChart />
              &nbsp; 전체 통계
            </Link>
          </Menu.Item>
          <Menu.Item key="menu-3">
            <Link to="/teacher/studentavg">
              <AiOutlineStock />
              &nbsp; 개인 통계
            </Link>
          </Menu.Item>
          <Menu.Item key="menu-4">
            <Link to="/teacher/feedback">
              <AiOutlineReconciliation />
              &nbsp; 게시판
            </Link>
          </Menu.Item>
          <Menu.Item key="menu-5">
            <Link to="/teacher/mypage">
              <AiOutlineIdcard />
              &nbsp; 마이페이지
            </Link>
          </Menu.Item>
        </Menu>
      )}

      {role === "MASTER" && (
        <Menu className="sidebar-menu" mode="inline">
          <Menu.Item key="menu-1">
            <Link to="/master/create">
              <AiOutlineIdcard />
              &nbsp; 계정 생성
            </Link>
          </Menu.Item>
          <Menu.Item key="menu-2">
            <Link to="/master/management">
              <AiOutlineMinusSquare />
              &nbsp; 계정 삭제
            </Link>
          </Menu.Item>
          <Menu.Item key="menu-3">
            <Link to="/master/classchange">
              <AiOutlineArrowsAlt />
              &nbsp; 반 변경
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </SideBarContainer>
  );
};

export default SideBar;
