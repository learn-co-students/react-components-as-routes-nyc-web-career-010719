import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './Navbar';
import Home from './Home';
import Login from './Login';
import About from './About';

ReactDOM.render(
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />
    </Fragment>
  </Router>,
  document.getElementById('root')
);
