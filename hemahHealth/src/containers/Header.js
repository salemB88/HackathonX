import React, { useState } from "react";
import logo from '../img/logo.jpg';
import { BrowserRouter as Router ,Route,Switch,Link,useLocation} from 'react-router-dom';

import './Header.css';
export default function Header (){
    const location = useLocation();
    return(
     <header>
    <ul className='Header_ul'>
    <div className='header-logo'><img src={logo} alt="Logo" /></div>
    <li >Home</li>
    <li><Link to='/Login'> Log in</Link></li>
   {location.pathname =='/Login' && <li><Link to='/LogUp'> Log Up</Link></li>} 
    </ul>
   </header>)
}