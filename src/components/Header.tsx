import { HeaderContainer } from "../styles/Styles";
import { RiVipCrown2Fill } from "react-icons/ri";
import { IoMdSchool } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const name = window.localStorage.getItem("name");
    const role = window.localStorage.getItem("role");

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
    const ICON =
        role === "STUDENT" ? (
            <IoMdSchool />
        ) : role === "TEACHER" ? (
            <FaPen />
        ) : (
            <RiVipCrown2Fill />
        );
    const IconStyle =
        role === "STUDENT"
            ? "text-blue-400"
            : role === "TEACHER"
            ? "text-red-600"
            : "text-orange-400";
    return (
        <HeaderContainer>
            <div>
                <span>환영합니다</span>
                <span className={IconStyle}>{ICON}</span>
                {name ? (
                    <span>
                        {name}님{" "}
                        <span style={{ fontSize: "18px" }}>{role}</span>
                    </span>
                ) : (
                    <span>이름이 없습니다.</span>
                )}
            </div>

            <div>
                {role === "MASTER" || (
                    <button onClick={handleMypage}>마이페이지</button>
                )}
                <button id="logout" onClick={handleLogout}>
                    로그아웃
                </button>
            </div>
        </HeaderContainer>
    );
};

export default Header;
