import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import Routes from './components/_routes'
import Navbar from './components/_navbar'
import axios from 'axios'
import NavbarAdmin from "./components/_navarAdming";
import { getUserCurrent } from './api/auth'
import Footer from './components/_footer'
function App() {

  axios.defaults.baseURL = 'https://churro-dog-server-test.herokuapp.com/';
  const [user, setUser] = useState('')

  useEffect(() => {
    _getUserCurrent()
  }, [])

  const _getUserCurrent = async () => {
    const userCurrent = await getUserCurrent()
    setUser(userCurrent)
  }
  return (
    <Router>
      <div>
        {
          //user.type_user === "1" ? "admin" : "normal"
          user.type_user === "1" ? (<NavbarAdmin />) : (<Navbar />)
        }

        <Routes />
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
