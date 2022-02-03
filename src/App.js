import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"
import Routes from './components/_routes'
import Navbar from './components/_navbar'

function App() {
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
