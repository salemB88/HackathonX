// import Routes from './Routes.js';
import './App.css';
import Header from "./containers/Header.js";
import Home from "./containers/Home.js";
import LogUp from "./containers/LogUp.js";
import Footer from "./containers/Footer.js";
import Login from "./containers/Login";
import { BrowserRouter as Router ,Route,Switch,Link} from 'react-router-dom';
function App() {
  return ( 
    <div className="App">
      <Router><Header/>
  <Route path='/' render={(prpos)=>{return(<><Home/></>)}}/>
  <Route path='/Login'render={(prpos)=>{return(<><Login/></>)}}/>
    <Route path='/LogUp'render={(prpos)=>{return(<><LogUp/></>)}}/>
   <Footer/></Router>
    </div>
   
  );
}

export default App;