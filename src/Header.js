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
          <li className="Contact">
            <Link to="/contactme">Contact Me</Link> 
            </li>
          </ul>
        
        </div>
    )
}











export  default Header;