import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from 'Header';
import Sign from 'Sign/Sign';
import Login from 'Login/Login';
import Todo from 'Todo/Todo';
export default () => (
  <Router>    
    <Route path="/sign" component={Sign}></Route>
    <Route path="/login" component={Login}></Route>
    <Route path="/todo" component={Todo}></Route>
  </Router>
);
