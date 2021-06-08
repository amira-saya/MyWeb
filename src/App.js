import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from './components/Navbar';
import Header from './components/Header';
import Work from './components/Work';
import Contact from './components/Contact';
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import About from './components/About';
function App() {
  return (
   
    <Router>
  <Particles
params={{
  particles: {
    number:{
      value:50,
      denisty:{
        enable:true,
        value_area:900
      }
    },
    shape: {
      type: "square",
      stroke:{
        width: 6,
        color: "#f9ab00"
      }
    }
  }

}}

  />

  <Navbar/>
  <Route exact path="/" component={Header}/>
 
 <Switch>
   
 
<Route path="/Work" component={Work}/>
<Route path="/About" component={About}/>
<Route path="/Portfolio" component={Portfolio}/>
  
  <Route path="/Contact" component={Contact}/>

  
 

  </Switch>

 
  
  
  </Router>
  );
}

export default App;
