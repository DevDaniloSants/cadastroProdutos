import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";


const RootLayout = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="container">
                <Outlet />
            </div>
        </div>
    );
};

export default RootLayout;
