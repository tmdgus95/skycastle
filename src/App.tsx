import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { FlexContainer } from "./styles/Styles";

function App() {
    return (
        <FlexContainer>
            <SideBar />
            <div>
                <Header />
                <Outlet />
            </div>
        </FlexContainer>
    );
}

export default App;
