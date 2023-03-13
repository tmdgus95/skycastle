import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
    return (
        <>
            <SideBar />
            <>
                <Header />
                <Outlet />
            </>
        </>
    );
}

export default App;
