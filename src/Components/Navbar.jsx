import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import '../App.css'

import { FaBars } from 'react-icons/fa';

function Navbar() {
  return (

    <div className="navbar">
        <div >
   <FaBars className='navbar-button' />
   </div>
   <div className="nav-logo">
      <h1><a href="#">H.R</a></h1>
     </div>
   </div>
  )
}

export default Navbar