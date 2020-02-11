import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import './Header.css';
import AboutMeTab from './AboutMeTab';
import './AboutMe.css';
import EducationandExperience from './EducationandExperience';
import Portfolio from './Portfolio';


function App() {
  return (
    <Router>
      <div className="App">
    <Header />
    <Switch>
          <Route path="/EducationandExperience">
            <EducationandExperience />
          </Route>
          <Route path="/Aboutme">
            <AboutMeTab />
          </Route>
          <Route path="/">
            <Portfolio />
            </Route>
        </Switch>
        
  </div>
  </Router>
    
  );
}






export default App;
