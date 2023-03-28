import { HeaderContainer } from "../styles/Styles";
import { BsFillPersonFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const name = window.localStorage.getItem("name");
    const role = window.localStorage.getItem("role");
    console.log("name", name);

    const handleLogout = () => {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("name");
        window.localStorage.removeItem("role");
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
