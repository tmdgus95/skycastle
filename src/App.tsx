import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

const FlexContainer = styled.div`
    display: flex;
`;

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
