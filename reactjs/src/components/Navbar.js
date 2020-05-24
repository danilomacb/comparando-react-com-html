import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Início</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/informacoes">Informações</Link></li>
                <li><Link to="/contato">Contato</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;