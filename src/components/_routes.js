import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../views/Home'
import About from '../views/About'
import Blog from '../views/Blog'
import Contact from '../views/Contact'
import Products from '../views/Products'
import Account from '../views/Account'
import Cart from '../views/Cart'
// import Direction from '../views/Direction'
// import Payment from '../views/Payment'
import Login from '../views/Login'
import Singin from '../views/Singin'
// import DashboardAdmin from '../views/admin/views/DashboardAdmin'
// import ProductsAdmin from '../views/admin/views/ProductsAdmin'
// import PedidosAdmin from '../views/admin/views/PedidosAdmin'
// import BlogAdmin from '../views/admin/views/BlogAdmin'
// import AccountAdmin from '../views/admin/views/AccountAdmin'


const Rout = () => {

    return (

        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/tienda-en-linea" element={<Products />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/carrito-compras" element={<Cart />} />
            <Route path="/cuenta" element={<Account />} />
            <Route path="/iniciar-sesion" element={<Login />} />
            <Route path="/registro" element={<Singin />} />
        </Routes>


    )
}

export default Rout