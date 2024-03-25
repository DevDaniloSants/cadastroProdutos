import { Link } from "react-router-dom";

import "../styles/components/nav.scss";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/addProduct">Adicionar Produto</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
