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
import DashboardClient from '../views/DashboardClient'

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
            <Route path="/dashboard-cliente">
                <DashboardClient />
            </Route>
            
        </Switch>


    )
}

export default Routes