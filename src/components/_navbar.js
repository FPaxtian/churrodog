import React from 'react'
import {
    Link
} from "react-router-dom"

const Navbar = () => {

    return (
        <nav class="menu">
            <ul>

                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/productos">Tienda en linea</Link></li>

            </ul>
        </nav>
    )
}

export default Navbar