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
        </Switch>


    )
}

export default Routes