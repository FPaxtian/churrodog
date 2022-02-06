import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import Routes from './components/_routes'
import Navbar from './components/_navbar'
import axios from 'axios'

function App() {

  axios.defaults.baseURL = 'https://churro-dog-server-test.herokuapp.com/';

  return (
    <Router>
      <div>

        <Navbar />
        <Routes />

      </div>
    </Router>
  );
}

export default App;
