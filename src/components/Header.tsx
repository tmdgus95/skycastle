import { Avatar } from "antd";
import { HeaderContainer } from "../styles/Styles";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="flex items-center">
        <span className="mr-3">환영합니다</span>
        <Avatar
          className="mr-1"
          size="small"
          style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
        >
          U
        </Avatar>
        <span className="font-bold">옥지은 님</span>
      </div>
      <div className="flex items-center gap-3">
        <button>마이페이지</button>
        <button>로그아웃</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
