// import Routes from './Routes.js';
import './App.css';
import Header from "./containers/Header.js";
import Home from "./containers/Home.js";
import LogUp from "./containers/LogUp.js";
import Footer from "./containers/Footer.js";
import Login from "./containers/Login";
import './containers/Header.css';
import "./containers/Login.css";
import { BrowserRouter as Router ,Route,Switch,Link} from 'react-router-dom';
function App() {
  return ( 
    <div className="App">
      <Router><Header/>
  <Route exact path="/" ><Home/></Route>
  <Route exact path="/Login" ><Login/></Route>
  <Route exact path="/LogUp" ><LogUp/></Route>
 
   <Footer/></Router>
    </div>
   
  );
}

export default App;