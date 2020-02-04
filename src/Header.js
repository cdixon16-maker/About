import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Header(props)
{
    return (
    
        <div className="info">
        <h2> Chase Dixon</h2> 
        <h3>Phone: 801-864-9875</h3>
        <h3>Email: schasedixon16@gmail.com </h3>
        <ul className="list">
          <li className="Portfolio">
            <Link to="/">Portfolio</Link>
          </li>
          <li className="edu">
            <Link to="/EducationandExperience">Education and Experience</Link>
          </li>
          <li className="About">
            <Link to="/Aboutme">About Me</Link>
          </li>
          </ul>
        
        </div>
    )
}











export  default Header;