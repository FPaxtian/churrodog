import React from 'react'
import {
    Switch,
    Route
} from "react-router-dom"
import Home from '../views/Home'
import About from '../views/About'
import Blog from '../views/Blog'
import Contact from '../views/Contact'
import Products from '../views/Products'
import Account from '../views/Account'
import Cart from '../views/Cart'
import Direction from '../views/Direction'
import Payment from '../views/Payment'
import Login from '../views/Login'
import Singin from '../views/Singin'


const Routes = () => {

    return (

        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/sobre-nosotros">
                <About />
            </Route>
            <Route path="/blog">
                <Blog />
            </Route>
            <Route path="/contacto">
                <Contact />
            </Route>
            <Route path="/productos">
                <Products />
            </Route>
            <Route path="/cuenta">
                <Account />
            </Route>
            <Route path="/carrito-compras">
                <Cart />
            </Route>
            <Route path="/direction-payment">
                <Direction />
            </Route>
            <Route path="/payment-method">
                <Payment />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/singin">
                <Singin />
            </Route>

        </Switch>


    )
}

export default Routes