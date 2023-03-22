import { HeaderContainer } from "../styles/Styles";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header = () => {
    const navigate = useNavigate();
    const name = useSelector((state: RootState) => state.auth.name);
    const role = useSelector((state: RootState) => state.auth.role);
    console.log("name", name);

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        alert("로그아웃되었습니다.");
        navigate("/");
    };

    const handleMypage = () => {
        if (role === "STUDENT") {
            navigate("/student/mypage");
        } else {
            navigate("/teacher/mypage");
        }
    };

    return (
        <HeaderContainer>
            <div>
                <span>환영합니다</span>
                <span>
                    <BsFillPersonFill />
                </span>
                {name ? <span>{name}님</span> : <span>이름이 없습니다.</span>}
            </div>

            <div>
                {role === "MASTER" || (
                    <button onClick={handleMypage}>마이페이지</button>
                )}
                <button onClick={handleLogout}>로그아웃</button>
            </div>
        </HeaderContainer>
    );
};

export default Header;
