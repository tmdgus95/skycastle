import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import { Link } from "react-router-dom";
import { SideBarContainer } from "../styles/Styles";

const SideBar = () => {
  return (
    <SideBarContainer>
      <>
        <p className="sidebar-title">학습관리시스템</p>
        <Menu className="sidebar-menu" mode="inline">
          <SubMenu key="sub1" title="성적현황_학생">
            <Menu.Item key="menu-1">
              <Link to="/student/myaverage">성적 조회</Link>
            </Menu.Item>
            <Menu.Item key="menu-2">
              <Link to="/student/gradelist">성적 통계</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="학생현황_선생">
            <Menu.Item key="menu-3">
              <Link to="/teacher/gradelist">성적 조회</Link>
            </Menu.Item>
            <Menu.Item key="menu-4">
              <Link to="/teacher/allaverage">전체 통계</Link>
            </Menu.Item>
            <Menu.Item key="menu-5">
              <Link to="/teacher/studentavg">개인 통계</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="menu-6">
            <Link to="/teacher/feedback">게시판</Link>
          </Menu.Item>
          <Menu.Item key="menu-7">
            <Link to="/findpassword">마이페이지</Link>
          </Menu.Item>
        </Menu>
      </>
    </SideBarContainer>
  );
};

export default SideBar;
