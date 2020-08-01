import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppNavBar from './NavBar/AppNavBar';
import AboutMeTab from './Aboutme/AboutMeTab';
import EducationandExperience from './EducationandExperience/EducationandExperience';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contactme/Contact';


function App() {
  return (
    <Router>
      <div className="App">
    <AppNavBar />
    <Switch>
          <Route path="/EducationandExperience">
            <EducationandExperience />
          </Route>
          <Route path="/AboutMeTab">
            <AboutMeTab />
          </Route>
          <Route path="/Contact">
            <Contact />
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
