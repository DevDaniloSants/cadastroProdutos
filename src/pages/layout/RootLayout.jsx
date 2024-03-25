import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const RootLayout = () => {
    return (
        <div className="App">
            <header>
                <span className="logo">Desafio</span>
                <Navbar />
            </header>
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
