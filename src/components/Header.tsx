import { HeaderContainer } from "../styles/Styles";

const Header = () => {
    return (
        <HeaderContainer>
            <div>
                <span>환영합니다</span>
                <span>￣へ￣</span>
                <span>옥지은님</span>
            </div>

            <div>
                <button>마이페이지</button>
                <button>로그아웃</button>
            </div>
        </HeaderContainer>
    );
};

export default Header;
