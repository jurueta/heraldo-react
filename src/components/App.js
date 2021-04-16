import React from 'react';
import Header from './Header'
import Footer from './Footer'
import Home from '../pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="container">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
