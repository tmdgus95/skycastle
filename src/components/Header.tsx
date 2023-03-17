import { HeaderContainer } from "../styles/Styles";
import { BsFillPersonFill } from "react-icons/bs";
import { RootState, store } from "../store/store";

const name = (store.getState() as RootState).auth.name;

const Header = () => {
    console.log(name);

    return (
        <HeaderContainer>
            <div>
                <span>환영합니다</span>
                <span>
                    <BsFillPersonFill />
                </span>
                {name && <span>{name}님</span>}
            </div>

            <div>
                <button>마이페이지</button>
                <button>로그아웃</button>
            </div>
        </HeaderContainer>
    );
};

export default Header;
