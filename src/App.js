import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AppNavBar from './AppNavBar';
import AboutMeTab from './AboutMeTab';
import './AboutMe.css';
import EducationandExperience from './EducationandExperience';
import Portfolio from './Portfolio';
import Contactme from './Contact';


function App() {
  return (
    <Router>
      <div className="App">
    <AppNavBar />
    <Switch>
          <Route path="/EducationandExperience">
            <EducationandExperience />
          </Route>
          <Route path="/Aboutme">
            <AboutMeTab />
          </Route>
          <Route path="/Contactme">
            <Contactme />
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
