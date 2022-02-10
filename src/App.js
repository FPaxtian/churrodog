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
    <h1>Hola</h1>
  );
}

export default App;
