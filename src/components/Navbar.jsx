import { Link } from "react-router-dom";
import { useState } from "react";

import "../styles/components/nav.scss";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setOpenMenu((prev) => !prev);
    };

    return (
        <header>
            <span className="logo">Desafio</span>
            <nav className={openMenu ? "navbar open" : "navbar"}>
                <ul className="">
                    <li>
                        <Link to="/" onClick={openMenu ? handleClick : ""}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/addProduct"
                            onClick={openMenu ? handleClick : ""}
                        >
                            Adicionar Produto
                        </Link>
                    </li>
                </ul>
                {openMenu && (
                    <button className="navigation close" onClick={handleClick}>
                        <FaTimes />
                    </button>
                )}
            </nav>
            <button className="navigation" onClick={handleClick}>
                <FaBars />
            </button>
        </header>
    );
};

export default Navbar;
