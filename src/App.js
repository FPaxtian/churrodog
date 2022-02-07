import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import Routes from './components/_routes'
import Navbar from './components/_navbar'
import axios from 'axios'
import NavbarAdmin from "./components/_navarAdming";

function App() {

  axios.defaults.baseURL = 'https://churro-dog-server-test.herokuapp.com/';
  const admin = false;


  return (
    <Router>
      <div>
        {
          admin ?( <Navbar />):( <NavbarAdmin/>)
        }
       
        <Routes />

      </div>
    </Router>
  );
}

export default App;
