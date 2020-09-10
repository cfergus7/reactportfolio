import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import Landing from './containers/Landing';
import About from './containers/About';
import Contact from './containers/Contact';
import Portfolio from './containers/Portfolio';
import "./App.css";

function App() {
  return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/portfolio'>
              <Portfolio />
            </Route>
          </Switch>
        </div>
      </Router>
  )
}

export default App;