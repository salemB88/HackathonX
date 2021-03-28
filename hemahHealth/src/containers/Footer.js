import React, { useState } from "react";

import { BrowserRouter as Router ,Route,Switch,Link} from 'react-router-dom';

export default function Footer (){
    return(
     <footer>
    <ul className='footer-container'>

    <li >About</li>
    <li>hemah</li>
    </ul>
   </footer>)
}