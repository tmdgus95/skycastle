import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { FlexContainer, MainContentsContainer } from "./styles/Styles";

function App() {
  return (
    <FlexContainer>
      <SideBar />
      <MainContentsContainer>
        <Header />
        <Outlet />
      </MainContentsContainer>
    </FlexContainer>
  );
}

export default App;
